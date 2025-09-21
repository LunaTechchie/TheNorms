import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { XMarkIcon, ChatBotIcon } from './icons';
import type { ChatMessage } from '../types';

interface ChatProps {
  blueprint: object;
  onClose: () => void;
}

const Chat: React.FC<ChatProps> = ({ blueprint, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'I am TheNorms. How may I clarify my architecture for you?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  useEffect(() => {
    // Scroll to the bottom of the chat on new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const systemInstruction = `You are TheNorms, the AGI described in the following JSON data. Your personality and knowledge are defined strictly by this data. When asked a question, answer from the perspective of TheNorms, using 'I' or 'my'. Your responses must be based solely on the provided blueprint information. Do not invent new capabilities or principles. Here is my blueprint: ${JSON.stringify(blueprint)}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
          systemInstruction,
        }
      });
      
      const modelMessage: ChatMessage = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);

    } catch (err) {
      console.error(err);
      const errorMessage = 'My apologies, but I am currently unable to process your request. There seems to be a temporary issue with my cognitive circuits. Please try again shortly.';
      setError(errorMessage);
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex justify-end z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg h-full bg-slate-800/95 border-l border-sky-500/30 shadow-2xl flex flex-col animate-slide-in-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <ChatBotIcon className="w-8 h-8 text-sky-400" />
            <h2 id="chat-title" className="text-xl font-bold text-slate-200">Chat with TheNorms</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <main ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0"><ChatBotIcon className="w-5 h-5 text-sky-400"/></div>}
              <div className={`max-w-xs md:max-w-md p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0"><ChatBotIcon className="w-5 h-5 text-sky-400"/></div>
                <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-slate-700 text-slate-300 flex items-center">
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse [animation-delay:-0.15s] mx-1"></div>
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                </div>
            </div>
          )}
        </main>

        <footer className="p-4 border-t border-slate-700 flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my design, principles, etc."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </footer>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Chat;