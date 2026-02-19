
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { Phone, PhoneOff, Waves, Sparkles, Mic } from './Icon.tsx';

// Helper functions for audio processing as per Google GenAI guidelines
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const LiveVoiceCall: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const audioContextRes = useRef<{
    input: AudioContext;
    output: AudioContext;
    stream: MediaStream;
    processor: ScriptProcessorNode;
  } | null>(null);

  const nextStartTime = useRef(0);
  const sources = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);

  const stopCall = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    if (audioContextRes.current) {
      audioContextRes.current.input.close();
      audioContextRes.current.output.close();
      audioContextRes.current.stream.getTracks().forEach(track => track.stop());
      audioContextRes.current = null;
    }

    sources.current.forEach(source => source.stop());
    sources.current.clear();

    setIsActive(false);
    setStatus('idle');
    setIsSpeaking(false);
  };

  const startCall = async () => {
    try {
      setStatus('connecting');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyAqoKAr1ei1tJoqnlBVcKIzdEALV2JhLNw";
      const ai = new GoogleGenAI({ apiKey });

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.0-flash-exp',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }, // Female profile
          },
          systemInstruction: `
            Eres Isabela, una concierge de viajes de lujo para ThaiVoyage. 
            PERSONALIDAD: Eres extremadamente amable, profesional, cercana y entusiasta.
            ACENTO: Tienes un acento colombiano neutro, profesional y claro. Evita usar modismos regionales muy marcados.
            VOCABULARIO: Usa un lenguaje natural y cálido, propio de Colombia pero comprensible internacionalmente. Expresiones como "claro que sí", "con mucho gusto", "excelente", "te cuento".
            CONOCIMIENTO: Eres experta en Tailandia. Tu meta es asesorar al usuario sobre viajes a Tailandia con toda la hospitalidad y calidez paisa. 
            Habla de forma fluida y natural, como si estuvieras en una llamada telefónica real.
          `,
        },
        callbacks: {
          onopen: () => {
            setStatus('connected');
            setIsActive(true);

            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);

            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };

              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);

            audioContextRes.current = {
              input: inputCtx,
              output: outputCtx,
              stream: stream,
              processor: scriptProcessor
            };
          },
          onmessage: async (message) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              setIsSpeaking(true);
              const currentOutputCtx = audioContextRes.current?.output;
              if (currentOutputCtx) {
                nextStartTime.current = Math.max(nextStartTime.current, currentOutputCtx.currentTime);
                const audioBuffer = await decodeAudioData(decode(base64Audio), currentOutputCtx, 24000, 1);
                const source = currentOutputCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(currentOutputCtx.destination);
                source.addEventListener('ended', () => {
                  sources.current.delete(source);
                  if (sources.current.size === 0) setIsSpeaking(false);
                });
                source.start(nextStartTime.current);
                nextStartTime.current += audioBuffer.duration;
                sources.current.add(source);
              }
            }

            if (message.serverContent?.interrupted) {
              sources.current.forEach(s => s.stop());
              sources.current.clear();
              nextStartTime.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: () => stopCall(),
          onerror: (e) => {
            console.error("Live API Error:", e);
            setStatus('error');
            setTimeout(stopCall, 3000);
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (err) {
      console.error("Failed to start voice call:", err);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-secondary-500/20 text-secondary-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                <span>Experiencia Exclusiva</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Habla con <span className="text-secondary-400">Isabela</span>
              </h2>
              <p className="text-primary-100/80 text-lg mb-8 leading-relaxed">
                Nuestra concierge senior está lista para asesorarte en tiempo real. Disfruta de una charla cálida y profesional con el toque único del Eje Cafetero.
              </p>

              <div className="flex flex-col items-center md:items-start space-y-4">
                {!isActive ? (
                  <button
                    onClick={startCall}
                    disabled={status === 'connecting'}
                    className="group relative bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 flex items-center space-x-3 disabled:opacity-50"
                  >
                    <Phone size={24} className="group-hover:animate-bounce" />
                    <span>{status === 'connecting' ? 'Llamando...' : 'Iniciar Llamada'}</span>
                  </button>
                ) : (
                  <button
                    onClick={stopCall}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-rose-500/20 flex items-center space-x-3"
                  >
                    <PhoneOff size={24} />
                    <span>Colgar Llamada</span>
                  </button>
                )}

                <p className="text-primary-200/60 text-xs italic">
                  * Se requiere permiso de micrófono para una experiencia óptima.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              {/* Isabela Avatar Visualizer */}
              <div className={`relative w-64 h-64 rounded-full border-4 ${isActive ? 'border-emerald-400' : 'border-white/20'} flex items-center justify-center transition-colors duration-500`}>
                <div className="absolute inset-0 rounded-full bg-primary-800/50 backdrop-blur-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                    alt="Isabela Concierge"
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${isActive ? 'scale-110' : 'scale-100'}`}
                  />
                </div>

                {/* Pulse animations when active */}
                {isActive && (
                  <>
                    <div className="absolute -inset-4 border border-emerald-400/30 rounded-full animate-ping"></div>
                    <div className="absolute -inset-8 border border-emerald-400/10 rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
                  </>
                )}

                {/* Speaking indicator */}
                {isSpeaking && (
                  <div className="absolute -bottom-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-bounce flex items-center space-x-2">
                    <Waves size={14} />
                    <span>Isabela está hablando...</span>
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="absolute top-0 right-0 md:-right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'}`}></div>
                <span className="text-white text-xs font-medium">
                  {status === 'idle' ? 'Desconectada' : status === 'connecting' ? 'Conectando...' : 'En línea ahora'}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveVoiceCall;
