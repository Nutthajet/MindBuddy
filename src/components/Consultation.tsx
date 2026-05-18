import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  ShieldCheck,
  MoreHorizontal,
  AlertCircle
} from 'lucide-react';

const practitioners = [
  { 
    id: '1', 
    name: 'ดร. สาหร่าย วีระชาติ', 
    role: 'นักจิตวิทยาคลินิก', 
    status: 'online', 
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71f153678e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80' 
  },
  { 
    id: '2', 
    name: 'ธีระ พรประเสริฐ', 
    role: 'นักบำบัดพฤติกรรม', 
    status: 'offline', 
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80' 
  }
];

export default function Consultation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6">
        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 px-2">ทีมผู้เชี่ยวชาญดูแลคุณ</h2>
        {practitioners.map((p) => (
          <div key={p.id} className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-4 md:gap-8 group transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-indigo-50">
            <div className="relative shrink-0">
              <img src={p.avatar} alt={p.name} className="w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl object-cover border-4 border-slate-50 shadow-sm" />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-4 border-white ${p.status === 'online' ? 'bg-green-500' : 'bg-slate-300'}`} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{p.name}</h3>
                  <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mt-1">{p.role}</p>
                </div>
                <button className="hidden sm:block text-slate-200 hover:text-slate-400 transition-colors">
                  <MoreHorizontal />
                </button>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 md:gap-3 mt-4 md:mt-8">
                <button className="px-4 md:px-6 py-2.5 md:py-3 bg-indigo-600 text-white rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
                  <MessageCircle size={14} /> แชทส่วนตัว
                </button>
                <button className="px-4 md:px-6 py-2.5 md:py-3 border-2 border-slate-100 text-slate-400 rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95">
                  <Phone size={14} /> โทรด่วน
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-dashed border-orange-100 flex flex-col items-center text-center group active:scale-[0.99] transition-transform cursor-pointer">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-orange-200 mb-4 md:mb-6 shadow-inner">
               <Calendar size={28} className="md:size-32" />
            </div>
            <h4 className="font-black text-lg md:text-xl text-slate-800 uppercase tracking-tight">นัดหมายปรึกษาพิเศษ</h4>
            <p className="text-slate-400 text-xs md:text-sm font-medium max-w-xs mt-2 md:mt-3 leading-relaxed">
              ต้องการพบจิตแพทย์เพื่อปรึกษาความคืบหน้าในระยะยาว? เลือกเวลาที่สะดวกได้ที่นี่
            </p>
            <button className="mt-6 md:mt-8 px-8 md:px-10 py-2.5 md:py-3 bg-white border border-slate-200 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 shadow-sm hover:shadow-md transition-shadow">
               ค้นหาคิวว่าง
            </button>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
         <div className="bg-indigo-600 text-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-indigo-100 flex flex-col h-full min-h-[300px] md:min-h-[400px]">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/20">
               <AlertCircle className="text-orange-300" size={28} md:size={32} strokeWidth={3} />
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-4 tracking-tight uppercase">ปุ่มฉุกเฉิน SOS</h3>
            <p className="text-indigo-100 text-xs md:text-sm font-medium mb-6 md:mb-8 leading-relaxed">
              ในกรณีที่รู้สึกถึงภาวะแพนิครุนแรง ระบบจะแจ้งเตือนนักบำบัดและผู้ดูแลทันควันพร้อมแชร์ตำแหน่งปัจจุบันของคุณ
            </p>
            
            <div className="flex-1" />

            <div className="bg-indigo-500/30 border border-white/10 p-4 md:p-5 rounded-2xl mb-6 md:mb-8 text-center sm:text-left">
               <p className="text-[10px] md:text-xs italic text-indigo-50 leading-relaxed font-medium">
                 "การกดปุ่ม SOS จะแจ้งเตือน ดร.สาหร่าย และผู้ติดต่อฉุกเฉินของคุณทันที"
               </p>
            </div>

            <button className="w-full py-4 md:py-5 bg-white text-indigo-600 rounded-[24px] font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl hover:translate-y-[-2px] transition-all active:scale-95">
               SOS CALL
            </button>
         </div>

         <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-3 md:mb-4">
               <ShieldCheck className="text-green-500" size={16} />
               ความปลอดภัยส่วนบุคคล
            </h4>
            <p className="text-slate-400 text-[10px] md:text-[11px] leading-relaxed font-bold uppercase">
               การสื่อสารทั้งหมดถูกเข้ารหัสแบบ END-TO-END ข้อมูลส่วนบุคคลจะไม่ถูกเปิดเผยหากไม่ได้รับอนุญาต
            </p>
         </div>
      </div>
    </div>
  );
}
