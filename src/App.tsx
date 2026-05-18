import React, { useState, useEffect, type ElementType } from 'react';
import { 
  BarChart3, 
  Heart, 
  Settings, 
  UserCircle, 
  ShoppingBag, 
  Activity,
  AlertCircle,
  Thermometer,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from './types';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Consultation from './components/Consultation';
import { cn } from './lib/utils';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isCoping, setIsCoping] = useState(false); // Simulate the doll being squeezed

  // Simulate incoming data from doll
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
    { id: 'dashboard', label: 'หน้าแรก', icon: Activity },
    { id: 'stats', label: 'สถิติ', icon: BarChart3 },
    { id: 'consultation', label: 'ปรึกษาแพทย์', icon: UserCircle },
    { id: 'settings', label: 'ตั้งค่า', icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FDFCF8] text-slate-800 font-sans overflow-hidden">
      {/* Mobile Header */}
      <header className="md:hidden flex h-16 items-center justify-between px-6 bg-white border-b border-orange-50 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
            <Heart size={18} fill="currentColor" />
          </div>
          <span className="font-black text-lg tracking-tight text-slate-800">Mind Buddy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", isCoping ? "bg-red-400 animate-pulse" : "bg-green-500")} />
          <span className="text-[10px] font-black uppercase tracking-wider text-orange-900/60">{isCoping ? "RUMBLING" : "CONNECTED"}</span>
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <nav className="hidden md:flex w-64 border-r border-orange-50 bg-white flex-col p-6 shrink-0">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Buddy</span>
        </div>

        <div className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                currentView === item.id 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200" 
                  : "text-slate-400 hover:bg-orange-50 hover:text-slate-600"
              )}
            >
              <item.icon size={20} />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 bg-orange-50 rounded-2xl border border-orange-100/50">
          <div className="text-[10px] uppercase tracking-[0.2em] text-orange-800/40 font-black mb-2">สถานะอุปกรณ์</div>
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", isCoping ? "bg-red-400 animate-pulse" : "bg-green-500")} />
            <span className="text-xs font-bold uppercase tracking-wider text-orange-900/60">{isCoping ? "กำลังวิเคราะห์" : "เชื่อมต่อแล้ว"}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
        <header className="flex justify-between items-center mb-6 border-b border-orange-50 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              {menuItems.find(m => m.id === currentView)?.label}
            </h1>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">ระบบสนับสนุนความหลากหลายทางประสาท</p>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <AnimatePresence>
              {isCoping && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-red-50 border border-red-100 text-red-500 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                >
                  <AlertCircle size={14} strokeWidth={3} />
                  ตรวจพบแรงบีบ
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex items-center gap-4 md:gap-6">
               <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
                  <Thermometer size={14} className="text-orange-500 md:size-16" />
                  <span className="text-xs font-black text-orange-700">39.2°C</span>
               </div>
               <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                  <Wind size={14} className="text-blue-500 md:size-16" />
                  <span className="text-xs font-black text-blue-700 uppercase">หายใจ</span>
               </div>
            </div>
          </div>
        </header>

        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {currentView === 'dashboard' && <Dashboard isCoping={isCoping} />}
          {currentView === 'stats' && <Stats />}
          {currentView === 'consultation' && <Consultation />}
          {currentView === 'settings' && (
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-orange-50 shadow-sm">
               <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">ความเป็นส่วนตัวของข้อมูล</h2>
               <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div>
                        <p className="font-bold text-slate-800">การเข้าถึงของนักบำบัด</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">ซิงค์ข้อมูลและแจ้งเตือนแบบเรียลไทม์</p>
                     </div>
                     <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                        <div className="w-3 h-3 bg-white rounded-full absolute right-1 top-1" />
                     </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div>
                        <p className="font-bold text-slate-800">แดชบอร์ดครอบครัว</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">แชร์สถานะและแบตเตอรี่เท่านั้น</p>
                     </div>
                     <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer">
                        <div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1" />
                     </div>
                  </div>
                  <div className="p-4 border-2 border-dashed border-orange-100 rounded-2xl">
                     <p className="text-[11px] text-orange-800/50 italic font-medium leading-relaxed">
                       ระบบ "On-Device Processing" กำลังทำงาน ข้อมูลเซนเซอร์ดิบจะไม่ถูกส่งออกจากตุ๊กตา Buddy ของคุณ 
                       ข้อมูลเชิงลึกที่ผ่านการประมวลผลแล้วเท่านั้นที่จะถูกส่งเพื่อความเป็นส่วนตัวสูงสุด
                     </p>
                  </div>
               </div>
            </div>
          )}
        </motion.div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-orange-50 flex items-center justify-around px-2 z-50">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as View)}
            className={cn(
              "flex flex-col items-center gap-1 px-3 transition-all duration-200",
              currentView === item.id ? "text-orange-500" : "text-slate-300"
            )}
          >
            <item.icon size={22} strokeWidth={currentView === item.id ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-tighter transition-all">
              {item.label}
            </span>
            {currentView === item.id && (
              <motion.div layoutId="activeTab" className="absolute -top-px w-8 h-1 bg-orange-500 rounded-b-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
