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
      text: 'Sawasdee khrap! 🙏 I am Chang, your personal Thailand travel guide. How can I help you plan your adventure today?',
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
        <div className="pointer-events-auto bg-white w-[90vw] md:w-[400px] h-[500px] md:h-[600px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-primary-600 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Chang AI Guide</h3>
                <p className="text-primary-100 text-xs flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-start space-x-2">
            <Info size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500">Ask about temples, beaches, food, or specific destinations listed on our site.</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[10px] block mt-1 opacity-70 ${msg.role === 'user' ? 'text-primary-100 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 shrink-0">
            <form 
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:border-primary-500 transition-all"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Thailand..."
                className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-14 h-14 rounded-full ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-gradient-to-tr from-primary-500 to-secondary-500 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

    </div>
  );
};

export default ChatWidget;