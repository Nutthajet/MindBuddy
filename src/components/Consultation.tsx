import React from 'react';
import { Calendar, MessageCircle, MoreHorizontal, Phone } from 'lucide-react';

const practitioners = [
  {
    id: '1',
    name: 'ดร. สมชาย ใจดี',
    role: 'นักจิตวิทยา',
    status: 'online',
    avatar: '/images/dr_somchai.png',
  },
  {
    id: '2',
    name: 'พี่ฟ้าใส',
    role: 'นักจิตบำบัด',
    status: 'online',
    avatar: '/images/p_sao.jpg',
  },
];

export default function Consultation() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="col-span-1 space-y-4 md:col-span-2 md:space-y-6">
        <h2 className="px-2 text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
          ทีมผู้เชี่ยวชาญดูแลคุณ
        </h2>

        {practitioners.map((practitioner) => (
          <div
            key={practitioner.id}
            className="flex flex-col items-center gap-5 rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] transition-all hover:translate-y-[-2px] md:flex-row md:gap-8 md:p-8"
          >
            <div className="relative shrink-0">
              <img
                src={practitioner.avatar}
                alt={practitioner.name}
                className="h-20 w-20 rounded-[28px] border-4 border-white object-cover shadow-[var(--shadow-soft-sm)] md:h-24 md:w-24 md:rounded-[32px]"
              />
              <div
                className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-white ${
                  practitioner.status === 'online' ? 'bg-[#9ed7b3]' : 'bg-[#d5cedf]'
                }`}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-[var(--text-strong)] md:text-2xl">
                    {practitioner.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-[#b67895]">{practitioner.role}</p>
                </div>
                <button className="hidden rounded-full bg-[var(--surface-secondary)] p-2 text-[var(--text-muted)] transition-colors hover:text-[var(--text-body)] sm:block">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
                <button className="flex items-center gap-2 rounded-[20px] bg-[linear-gradient(135deg,#f6bfd2,#e6c8f6)] px-5 py-3 text-[11px] font-extrabold tracking-[0.16em] text-white shadow-[var(--shadow-soft-sm)] transition-all hover:translate-y-[-1px] active:scale-95">
                  <MessageCircle size={14} /> แชตส่วนตัว
                </button>
                <button className="flex items-center gap-2 rounded-[20px] border border-[color:var(--border-soft)] bg-white/75 px-5 py-3 text-[11px] font-extrabold tracking-[0.16em] text-[var(--text-body)] transition-all hover:bg-[var(--surface-secondary)] active:scale-95">
                  <Phone size={14} /> โทรด่วน
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex cursor-pointer flex-col items-center rounded-[36px] border border-dashed border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,247,252,0.94))] p-8 text-center shadow-[var(--shadow-soft-sm)] transition-transform active:scale-[0.99] md:p-10">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[24px] bg-white/80 text-[#d9b3bf] shadow-[var(--shadow-soft-sm)] md:mb-6 md:h-16 md:w-16">
            <Calendar size={28} />
          </div>
          <h4 className="text-xl font-extrabold tracking-tight text-[var(--text-strong)]">
            นัดหมายปรึกษาพิเศษ
          </h4>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-body)]">
            หากต้องการพูดคุยเชิงลึกเกี่ยวกับอารมณ์ การรับมือ หรือเป้าหมายระยะยาว สามารถเลือกเวลาที่สะดวกได้ที่นี่
          </p>
          <button className="mt-6 rounded-[20px] bg-white px-8 py-3 text-[11px] font-extrabold tracking-[0.16em] text-[#8f719f] shadow-[var(--shadow-soft-sm)] transition-shadow hover:shadow-[var(--shadow-soft)]">
            ค้นหาคิวว่าง
          </button>
        </div>
      </div>
    </div>
  );
}
