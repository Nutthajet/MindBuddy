import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Brain, 
  MessageCircle, 
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Dashboard({ isCoping }: { isCoping: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Device Card */}
      <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-orange-50 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 md:p-8">
           <Zap size={32} className={cn("md:size-10 transition-colors duration-500", isCoping ? "text-red-400" : "text-orange-500")} />
        </div>
        
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.01]">
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">ตุ๊กตาของฉัน</span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 md:mt-6 mb-2 text-slate-800">Bear-01 <span className="text-slate-200 font-light tracking-tighter">#BuddyPro</span></h2>
          <p className="text-slate-400 text-xs md:text-sm font-medium max-w-sm mb-6 md:mb-10 leading-relaxed">
            Edge AI กำลังตรวจสอบแรงบีบระดับไมโคร ขณะนี้อยู่ใน 
            <span className={cn("font-bold", isCoping ? "text-red-500" : "text-orange-600 uppercase tracking-wider")}> {isCoping ? "โหมดภาวะฉุกเฉิน" : "โหมดปกติ"}</span>.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-orange-50/50 border border-orange-100 p-3 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3">
                <Brain className="text-orange-300 size-5 md:size-6" />
                <div>
                   <p className="text-[8px] md:text-[10px] text-orange-800/40 font-black uppercase tracking-widest">ความแม่นยำ</p>
                   <p className="text-lg md:text-xl font-black text-slate-800">98.2%</p>
                </div>
             </div>
             <div className="bg-blue-50/50 border border-blue-100 p-3 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3">
                <Clock className="text-blue-300 size-5 md:size-6" />
                <div>
                   <p className="text-[8px] md:text-[10px] text-blue-800/40 font-black uppercase tracking-widest">การใช้งาน</p>
                   <p className="text-lg md:text-xl font-black text-slate-800">14ชม. 22น.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Decorative Doll Silhouette based on design */}
        <div className="absolute -bottom-20 -right-20 pointer-events-none group-hover:rotate-12 transition-transform duration-1000 opacity-5">
           <div className="w-64 md:w-80 h-80 md:h-96 bg-orange-500 rounded-[60px] md:rounded-[80px]" />
        </div>
      </div>

      {/* Therapy Stats */}
      <div className="bg-orange-500 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl shadow-orange-100">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 opacity-80">
          การตอบสนองอัตโนมัติ
        </h3>
        <div className="space-y-4 md:space-y-6 relative z-10">
          <div className="flex justify-between items-center border-b border-white/20 pb-3 md:pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">แผ่นความร้อน</span>
            <span className="font-black text-xl md:text-2xl tracking-tighter">38.0°C</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/20 pb-3 md:pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">การสั่นสะเทือน</span>
            <span className="font-black text-xl md:text-2xl tracking-tighter uppercase">ผ่อนคลาย</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/20 pb-3 md:pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">สถานะซิงค์</span>
            <span className="font-black text-xl md:text-2xl tracking-tighter">สด</span>
          </div>
        </div>
        <button className="mt-8 md:mt-10 w-full py-4 bg-white text-orange-500 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg transition-all active:scale-95 group">
          เริ่มการทำงานเอง
        </button>
      </div>

      {/* Recent Alerts List - Matching Design Style */}
      <div className="col-span-1 md:col-span-3 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm mt-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">รูปแบบเหตุการณ์ล่าสุด</h3>
          <button className="text-orange-500 text-[10px] font-black uppercase tracking-widest hover:underline">
            ดูย้อนหลัง
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 md:gap-4 p-4 bg-slate-50 rounded-2xl group hover:bg-orange-50/30 transition-colors">
            <div className="w-2 h-2 bg-orange-400 rounded-full shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] md:text-xs font-black text-slate-800 uppercase tracking-tight">ตรวจพบแรงบีบที่สม่ำเสมอ</p>
              <p className="text-[9px] md:text-[10px] text-slate-400 font-bold mt-0.5">14:42 • ตรวจพบผ่าน FSR402</p>
            </div>
            <span className="text-[8px] md:text-[10px] font-black text-orange-600 bg-orange-100/50 px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter shrink-0">อัตโนมัติ</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4 p-4 bg-slate-50 rounded-2xl group hover:bg-blue-50/30 transition-colors">
            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] md:text-xs font-black text-slate-800 uppercase tracking-tight">เปิดใช้งานการสั่นแบบฝึกหายใจ</p>
              <p className="text-[9px] md:text-[10px] text-slate-400 font-bold mt-0.5">12:15 • ตรวจสอบระบบสำเร็จ</p>
            </div>
            <span className="text-[8px] md:text-[10px] font-black text-blue-600 bg-blue-100/50 px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter shrink-0">ด้วยตนเอง</span>
          </div>
        </div>
      </div>
    </div>
  );
}
