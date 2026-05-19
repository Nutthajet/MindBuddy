import React, { useEffect, useState } from 'react';
import {
  Activity,
  AlertCircle,
  BarChart3,
  Heart,
  MessageCircle,
  Settings,
  Thermometer,
  UserCircle,
  Wind,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Chat from './components/Chat';
import Consultation from './components/Consultation';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import { View } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isCoping, setIsCoping] = useState(false);
  const [therapistAccessEnabled, setTherapistAccessEnabled] = useState(true);
  const [familyDashboardEnabled, setFamilyDashboardEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsCoping(true);
        setTimeout(() => setIsCoping(false), 5000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'หน้าหลัก', icon: Activity },
    { id: 'stats', label: 'สถิติ', icon: BarChart3 },
    { id: 'consultation', label: 'ปรึกษาผู้เชี่ยวชาญ', icon: UserCircle },
    { id: 'chat', label: 'คุยกับบัดดี้', icon: MessageCircle },
    { id: 'settings', label: 'ตั้งค่า', icon: Settings },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden font-sans text-[var(--text-strong)] md:flex-row">
      <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.72)] px-5 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--rose-100),var(--peach-100))] text-[#b77897] shadow-[var(--shadow-soft-sm)]">
            <Heart size={18} fill="currentColor" />
          </div>
          <div>
            <span className="block text-lg font-extrabold tracking-tight text-[var(--text-strong)]">Mind Buddy</span>
            <span className="text-[11px] font-semibold tracking-wide text-[var(--text-muted)]">พื้นที่ปลอดภัยแสนละมุน</span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-[var(--shadow-soft-sm)]">
          <div className={cn('h-2.5 w-2.5 rounded-full', isCoping ? 'bg-rose-300 animate-pulse' : 'bg-emerald-300')} />
          <span className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">
            {isCoping ? 'กำลังตรวจจับ' : 'เชื่อมต่อแล้ว'}
          </span>
        </div>
      </header>

      <nav className="hidden w-72 shrink-0 flex-col border-r border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.62)] p-6 backdrop-blur-xl md:flex">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,var(--rose-100),var(--peach-100))] text-[#b77897] shadow-[var(--shadow-soft-sm)]">
            <Heart size={24} fill="currentColor" />
          </div>
          <div>
            <span className="block text-xl font-extrabold tracking-tight text-[var(--text-strong)]">Buddy</span>
            <span className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">เพื่อนใจแสนอ่อนโยน</span>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={cn(
                'flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-200',
                currentView === item.id
                  ? 'bg-[linear-gradient(135deg,var(--lavender-100),var(--rose-100))] text-[var(--text-strong)] shadow-[var(--shadow-soft-sm)]'
                  : 'text-[var(--text-muted)] hover:bg-white/70 hover:text-[var(--text-body)]'
              )}
            >
              <item.icon size={20} />
              <span className="font-bold tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto rounded-[28px] border border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,244,248,0.95))] p-5 shadow-[var(--shadow-soft-sm)]">
          <div className="mb-3 text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
            สถานะอุปกรณ์
          </div>
          <div className="flex items-center gap-2">
            <div className={cn('h-2.5 w-2.5 rounded-full', isCoping ? 'bg-rose-300 animate-pulse' : 'bg-emerald-300')} />
            <span className="text-sm font-bold tracking-wide text-[var(--text-body)]">
              {isCoping ? 'กำลังวิเคราะห์' : 'เชื่อมต่อแล้ว'}
            </span>
          </div>
        </div>
      </nav>

      <main
        className={cn(
          'flex flex-1 flex-col overflow-y-auto',
          currentView === 'chat' ? 'p-0' : 'p-4 pb-24 md:p-8 md:pb-8'
        )}
      >
        {currentView !== 'chat' && (
          <header className="mb-6 flex items-center justify-between border-b border-[color:var(--border-soft)] pb-6">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-[var(--text-strong)] md:text-3xl">
                {menuItems.find((item) => item.id === currentView)?.label}
              </h1>
              <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--text-muted)] md:text-sm">
                เพื่อนตัวน้อยที่ช่วยดูแลความสบายใจของคุณ
              </p>
            </div>

            <div className="hidden items-center gap-4 sm:flex">
              <AnimatePresence>
                {isCoping && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50 px-4 py-2 text-xs font-bold tracking-wide text-rose-500"
                  >
                    <AlertCircle size={14} strokeWidth={3} />
                    ตรวจพบแรงบีบ
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 rounded-full border border-[#f7d7cf] bg-[var(--peach-100)] px-3 py-1.5">
                  <Thermometer size={14} className="text-[#d9917b] md:size-16" />
                  <span className="text-xs font-bold text-[#9c6d62]">39.2°C</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#d8eaf5] bg-[var(--sky-100)] px-3 py-1.5">
                  <Wind size={14} className="text-[#73a7cb] md:size-16" />
                  <span className="text-xs font-bold text-[#5f7f9b]">การหายใจ</span>
                </div>
              </div>
            </div>
          </header>
        )}

        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(currentView === 'chat' ? 'flex min-h-0 flex-1 flex-col' : 'mx-auto w-full max-w-6xl')}
        >
          {currentView === 'dashboard' && <Dashboard isCoping={isCoping} />}
          {currentView === 'stats' && <Stats />}
          {currentView === 'consultation' && <Consultation />}
          {currentView === 'chat' && <Chat />}
          {currentView === 'settings' && (
            <div className="rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm md:p-8">
              <h2 className="mb-6 text-xs font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
                ความเป็นส่วนตัวของข้อมูล
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-[24px] border border-white/70 bg-[var(--surface-secondary)] p-4">
                  <div>
                    <p className="font-bold text-[var(--text-strong)]">การเข้าถึงของนักบำบัด</p>
                    <p className="text-[11px] font-semibold tracking-wide text-[var(--text-muted)]">
                      ซิงก์ข้อมูลและแจ้งเตือนแบบเรียลไทม์
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed={therapistAccessEnabled}
                    aria-label="สลับการเข้าถึงนักบำบัด"
                    onClick={() => setTherapistAccessEnabled((current) => !current)}
                    className={cn(
                      'relative h-6 w-11 rounded-full transition-colors duration-200',
                      therapistAccessEnabled
                        ? 'bg-[linear-gradient(135deg,#bde6d1,#d6f3e3)]'
                        : 'bg-[#e6e0f0]'
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200',
                        therapistAccessEnabled ? 'right-1' : 'left-1'
                      )}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-[24px] border border-white/70 bg-[var(--surface-secondary)] p-4">
                  <div>
                    <p className="font-bold text-[var(--text-strong)]">แดชบอร์ดครอบครัว</p>
                    <p className="text-[11px] font-semibold tracking-wide text-[var(--text-muted)]">
                      แชร์เฉพาะสถานะและแบตเตอรี่เท่านั้น
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed={familyDashboardEnabled}
                    aria-label="สลับแดชบอร์ดครอบครัว"
                    onClick={() => setFamilyDashboardEnabled((current) => !current)}
                    className={cn(
                      'relative h-6 w-11 rounded-full transition-colors duration-200',
                      familyDashboardEnabled
                        ? 'bg-[linear-gradient(135deg,#bde6d1,#d6f3e3)]'
                        : 'bg-[#e6e0f0]'
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200',
                        familyDashboardEnabled ? 'right-1' : 'left-1'
                      )}
                    />
                  </button>
                </div>

                <div className="rounded-[24px] border border-dashed border-[color:var(--border-soft)] bg-white/60 p-4">
                  <p className="text-[12px] font-medium leading-relaxed text-[var(--text-body)]">
                    ระบบ On-Device Processing กำลังทำงาน ข้อมูลเซนเซอร์ดิบจะไม่ถูกส่งออกจากตุ๊กตา Buddy
                    ของคุณ มีเพียงข้อมูลเชิงสรุปที่ผ่านการประมวลผลแล้วเท่านั้นที่จะถูกแชร์ เพื่อให้คงความเป็นส่วนตัวไว้มากที่สุด
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] px-2 backdrop-blur-xl md:hidden">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as View)}
            className={cn(
              'flex flex-col items-center gap-1 px-3 transition-all duration-200',
              currentView === item.id ? 'text-[#b67895]' : 'text-[#b9afc5]'
            )}
          >
            <item.icon size={22} strokeWidth={currentView === item.id ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-wide transition-all">{item.label}</span>
            {currentView === item.id && (
              <motion.div layoutId="activeTab" className="absolute -top-px h-1 w-8 rounded-b-full bg-[#e8aec2]" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
