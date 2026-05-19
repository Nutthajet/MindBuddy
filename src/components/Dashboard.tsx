import React from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Brain,
  Clock,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Dashboard({ isCoping }: { isCoping: boolean }) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
      <div className="relative order-1 overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm md:order-first md:col-span-2 md:p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(255,232,240,0.85),rgba(236,251,243,0.72),rgba(243,238,255,0.8))]" />
        <div className="absolute -right-8 top-6 h-28 w-28 rounded-full bg-[rgba(255,216,194,0.45)] blur-2xl" />

        <div className="relative z-10">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f6d5de] bg-[var(--rose-100)] px-3 py-1 text-[11px] font-bold tracking-wide text-[#b67895]">
                <Sparkles size={14} />
                ตุ๊กตาของฉัน
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-strong)] md:text-4xl">
                Bear-01 <span className="font-semibold text-[var(--text-muted)]">#BuddyPro</span>
              </h2>
            </div>

            <div
              className={cn(
                'flex h-14 w-14 items-center justify-center rounded-[24px] border bg-white/80 shadow-[var(--shadow-soft-sm)]',
                isCoping ? 'border-rose-200 text-rose-400' : 'border-[#f6d5de] text-[#d99a7f]'
              )}
            >
              <Zap size={28} />
            </div>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[var(--text-body)] md:text-base">
            Bear-01 กำลังตรวจสอบแรงบีบ ขณะนี้อยู่ใน
            <div className={cn('ml-1 font-bold', isCoping ? 'text-rose-500' : 'text-[#b67895]')}>
              {isCoping ? 'โหมดเฝ้าระวังเป็นพิเศษ' : 'โหมดปกติ'}
            </div>
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-2 md:gap-4">
            <div className="rounded-[24px] border border-[#f4d6de] bg-[linear-gradient(135deg,rgba(255,240,228,0.9),rgba(255,248,252,0.95))] p-4 shadow-[var(--shadow-soft-sm)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-[#d79a86]">
                  <Brain className="size-5 md:size-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">แบตเตอรี่</p>
                  <p className="text-xl font-extrabold text-[var(--text-strong)]">98%</p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#dce9f8] bg-[linear-gradient(135deg,rgba(238,248,255,0.95),rgba(243,238,255,0.9))] p-4 shadow-[var(--shadow-soft-sm)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-[#7ca6c5]">
                  <Clock className="size-5 md:size-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">เวลาใช้งาน</p>
                  <p className="text-xl font-extrabold text-[var(--text-strong)]">5 ชม. 22 นาที</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="order-2 flex flex-col gap-4 md:order-first md:col-span-1 md:gap-6">
        <div className="overflow-hidden rounded-[32px] border border-[#f4d6de] bg-[linear-gradient(180deg,rgba(255,236,244,0.96),rgba(255,247,250,0.96))] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <h3 className="mb-6 text-[11px] font-extrabold tracking-[0.18em] text-[#b67895] md:mb-8">
            การตอบสนองอัตโนมัติ
          </h3>

          <div className="space-y-4">
            {[
              ['แผ่นความร้อน', '38.0°C'],
              ['การสั่นสะเทือน', 'ผ่อนคลาย'],
              ['สถานะซิงก์', 'เชื่อมต่อ'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-[22px] border border-white/70 bg-white/75 px-4 py-3"
              >
                <span className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">{label}</span>
                <span className="text-lg font-extrabold text-[var(--text-strong)]">{value}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-[22px] bg-[linear-gradient(135deg,#f6bfd2,#e9c8f7)] py-4 text-sm font-extrabold tracking-[0.16em] text-white shadow-[var(--shadow-soft-sm)] transition-all hover:translate-y-[-1px] active:scale-95">
            เริ่มการทำงานอัตโนมัติ
          </button>
        </div>

        <div className="rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft-sm)] md:p-8">
          <h4 className="mb-3 flex items-center gap-2 text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)] md:mb-4">
            <ShieldCheck className="text-[#7fb89e]" size={16} />
            ความปลอดภัยส่วนบุคคล
          </h4>
          <p className="text-[12px] leading-6 text-[var(--text-body)] md:text-[13px]">
            การสื่อสารทั้งหมดถูกเข้ารหัสแบบ end-to-end และข้อมูลส่วนบุคคลจะไม่ถูกเปิดเผยหากไม่ได้รับอนุญาต
          </p>
        </div>
      </div>

      <div className="order-3 rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] md:col-span-3 md:p-8">
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h3 className="text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
            เหตุการณ์ล่าสุด
          </h3>
          <button className="rounded-full bg-[var(--surface-secondary)] px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#b67895] transition-colors hover:bg-[var(--rose-100)]">
            ดูย้อนหลัง
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              dot: 'bg-[#f3afbd]',
              tone: 'bg-[linear-gradient(135deg,rgba(255,245,248,1),rgba(255,240,228,0.9))]',
              tag: 'text-[#b67895] bg-[var(--rose-100)]',
              title: 'ตรวจพบอาการเครียดเล็กน้อย',
              meta: '14:42 • ตรวจพบผ่าน FSR402',
              action: 'อัตโนมัติ',
            },
            {
              dot: 'bg-[#9dcfe6]',
              tone: 'bg-[linear-gradient(135deg,rgba(238,248,255,1),rgba(243,238,255,0.94))]',
              tag: 'text-[#6d98b8] bg-[var(--sky-100)]',
              title: 'เปิดใช้งานการสั่นแบบฝึกหายใจ',
              meta: '12:15 • ระบบตอบสนองสำเร็จ',
              action: 'ด้วยตนเอง',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={cn(
                'flex items-center gap-4 rounded-[24px] border border-white/70 p-4 shadow-[var(--shadow-soft-sm)] transition-all hover:translate-y-[-1px]',
                item.tone
              )}
            >
              <div className={cn('h-2.5 w-2.5 shrink-0 rounded-full', item.dot)} />
              <div className="flex-1">
                <p className="text-sm font-extrabold tracking-tight text-[var(--text-strong)]">{item.title}</p>
                <p className="mt-1 text-[11px] font-semibold tracking-wide text-[var(--text-muted)]">{item.meta}</p>
              </div>
              <span className={cn('shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wide', item.tag)}>
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        className="order-4 flex flex-col rounded-[32px] border border-[#d9cff9] bg-[linear-gradient(135deg,rgba(227,220,255,0.98),rgba(246,233,242,0.95))] p-5 text-[var(--text-strong)] shadow-[var(--shadow-soft)] md:col-span-3 md:rounded-[40px] md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] border border-white/50 bg-white/60 text-[#b67895] md:h-14 md:w-14">
            <AlertCircle className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">ปุ่มฉุกเฉิน SOS</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)] md:mt-4">
              เมื่อกดปุ่ม SOS ระบบจะส่งการแจ้งเตือนไปยังผู้ดูแลและผู้เชี่ยวชาญที่คุณเลือกไว้
            </p>
          </div>
        </div>

        <button className="mt-5 w-full rounded-[24px] bg-white py-4 text-sm font-extrabold tracking-[0.18em] text-[#8f719f] shadow-[var(--shadow-soft-sm)] transition-all active:scale-95 md:mt-7 md:py-5">
          ขอความช่วยเหลือทันที
        </button>
      </motion.div>
    </div>
  );
}
