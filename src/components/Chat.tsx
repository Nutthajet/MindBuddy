import React, { useEffect, useRef, useState } from 'react';
import { Loader2, MessageCircle, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'สวัสดีค่ะ ฉันคือ Mind Buddy Chat Bot ยินดีที่ได้อยู่เป็นเพื่อนกับคุณ วันนี้อยากคุยเรื่องอะไรดีคะ',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error('ไม่พบ API key กรุณาตั้งค่า VITE_GEMINI_API_KEY ในไฟล์ .env');
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: input,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`เกิดข้อผิดพลาดจากระบบ: ${response.statusText}`);
      }

      const data = await response.json();
      const aiContent =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'ขออภัยนะคะ ตอนนี้ฉันยังตอบคำถามนี้ไม่ได้ ลองพิมพ์ใหม่อีกครั้งได้เลย!';

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: aiContent,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 2).toString(),
        content: `ขออภัยค่ะ เกิดข้อผิดพลาด: ${error instanceof Error ? error.message : 'ไม่ทราบสาเหตุ'}`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[linear-gradient(180deg,rgba(255,252,248,0.6),rgba(255,248,251,0.95))]">
      <div className="flex-1 space-y-4 overflow-y-auto p-4 pb-44 md:space-y-6 md:p-6">
        <div className="rounded-[28px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.68)] p-4 shadow-[var(--shadow-soft-sm)] backdrop-blur-sm md:p-5">
          <p className="text-sm leading-7 text-[var(--text-body)]">
            พื้นที่นี้ถูกออกแบบให้สงบ อ่อนโยน และคุยกันได้ทีละเรื่อง คุณสามารถพิมพ์สั้นๆ หรือหยุดพักสายตาก่อนได้ตามสบาย
          </p>
        </div>

        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={cn('flex gap-3 md:gap-4', message.sender === 'user' ? 'justify-end' : 'justify-start')}
            >
              {message.sender === 'ai' && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f4d6de] bg-[var(--rose-100)] text-[#b67895] shadow-[var(--shadow-soft-sm)]">
                  <MessageCircle size={18} />
                </div>
              )}

              <div
                className={cn(
                  'max-w-xs rounded-[24px] px-4 py-3 text-sm leading-7 shadow-[var(--shadow-soft-sm)] md:max-w-md md:px-5 md:py-4 md:text-base lg:max-w-lg',
                  message.sender === 'user'
                    ? 'rounded-br-[10px] border border-[#f3d3dc] bg-[linear-gradient(135deg,#f6bfd2,#efcde0)] text-white'
                    : 'rounded-bl-[10px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.88)] text-[var(--text-strong)]'
                )}
              >
                {message.content}
              </div>

              {message.sender === 'user' && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-[var(--shadow-soft-sm)]">
                  <div className="h-7 w-7 rounded-full bg-[linear-gradient(135deg,#f4b8c9,#d7caf9)]" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 md:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f4d6de] bg-[var(--rose-100)] text-[#b67895] shadow-[var(--shadow-soft-sm)]">
              <Loader2 size={18} className="animate-spin" />
            </div>
            <div className="flex items-center gap-1.5 rounded-[24px] rounded-bl-[10px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.88)] px-4 py-3 shadow-[var(--shadow-soft-sm)]">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-[#e0a9bb] animate-bounce" />
                <div className="h-2 w-2 rounded-full bg-[#c2b7ef] animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="h-2 w-2 rounded-full bg-[#b9e3cc] animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="sticky bottom-20 z-50 shrink-0 border-t border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.92)] p-4 backdrop-blur-xl md:p-6"
      >
        <div className="flex gap-2 md:gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="พิมพ์ข้อความของคุณ..."
            disabled={isLoading}
            className={cn(
              'flex-1 rounded-[24px] border border-[color:var(--border-soft)] bg-white/90 px-4 py-3 text-sm text-[var(--text-strong)] placeholder:text-[var(--text-muted)] shadow-[var(--shadow-soft-sm)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#d3c3f6] disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-4 md:text-base'
            )}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-[22px] text-sm font-extrabold tracking-wide transition-all active:scale-95 md:h-14 md:w-14 md:text-base',
              isLoading || !input.trim()
                ? 'cursor-not-allowed bg-[#f0ecf6] text-[#bcb3ca]'
                : 'bg-[linear-gradient(135deg,#f6bfd2,#e3c8f8)] text-white shadow-[var(--shadow-soft-sm)] hover:translate-y-[-1px]'
            )}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
