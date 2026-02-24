import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Info } from './Icon.tsx';
import { sendMessageToGemini } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: '¡Sawasdee khrap! 🙏 Soy Chang, tu guía personal de Tailandia Travel. ¿Cómo puedo ayudarte a planear tu aventura hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputText);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">

      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto bg-white w-[90vw] md:w-[400px] h-[500px] md:h-[600px] rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-6 animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">

          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-6 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md shadow-lg">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-black tracking-tight leading-none">ThaiGuide Experto</h3>
                <p className="text-primary-100 text-[10px] font-bold uppercase tracking-widest flex items-center mt-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                  Disponible ahora
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-all p-2 hover:bg-white/10 rounded-xl"
            >
              <X size={24} />
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-start space-x-3">
            <Info size={16} className="text-primary-500 mt-0.5 shrink-0" />
            <p className="text-[11px] text-slate-500 font-medium leading-tight">Pregunta sobre templos, playas, gastronomía o itinerarios personalizados.</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-none shadow-primary-500/20'
                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                    } ${msg.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}
                >
                  <p className="whitespace-pre-wrap font-light">{msg.text}</p>
                  <span className={`text-[10px] block mt-2 font-bold uppercase tracking-wider opacity-60 ${msg.role === 'user' ? 'text-primary-100 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-6 py-4 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-100 shrink-0">
            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-500 transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="¿A dónde quieres ir en Tailandia?"
                className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 text-sm font-light"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-primary-500/30"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-primary-500/40 transition-all duration-500 transform hover:scale-110 flex items-center justify-center w-16 h-16 rounded-2xl ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-gradient-to-tr from-primary-600 to-secondary-500 text-white'
          }`}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </button>

    </div>
  );
};

export default ChatWidget;