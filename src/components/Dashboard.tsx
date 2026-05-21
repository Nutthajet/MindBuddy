import React from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  BatteryFull,
  Clock,
  Smile,
  Meh,
  Frown,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { cn } from '../lib/utils';

type StressLevel = 'normal' | 'mild' | 'moderate' | 'high';

const stressConfig: Record<StressLevel, {
  label: string;
  icon: React.ElementType;
  iconColor: string;
  cardGradient: string;
  borderColor: string;
  badgeColor: string;
  dotColor: string;
}> = {
  normal: {
    label: 'ปกติ',
    icon: Smile,
    iconColor: 'text-[#5fa07a]',
    cardGradient: 'bg-[linear-gradient(135deg,rgba(212,234,223,0.9),rgba(255,248,252,0.95))]',
    borderColor: 'border-[#b8deca]',
    badgeColor: 'bg-[#d4eadf] text-[#3d7a5e]',
    dotColor: 'bg-[#5fa07a]',
  },
  mild: {
    label: 'เครียดเล็กน้อย',
    icon: Meh,
    iconColor: 'text-[#d88ea4]',
    cardGradient: 'bg-[linear-gradient(135deg,rgba(255,240,244,0.9),rgba(255,248,252,0.95))]',
    borderColor: 'border-[#f4d6de]',
    badgeColor: 'bg-[#fde8ef] text-[#b67895]',
    dotColor: 'bg-[#f3afbd]',
  },
  moderate: {
    label: 'เครียดปานกลาง',
    icon: AlertCircle,
    iconColor: 'text-[#e0845c]',
    cardGradient: 'bg-[linear-gradient(135deg,rgba(255,228,212,0.9),rgba(255,248,252,0.95))]',
    borderColor: 'border-[#f5c4a8]',
    badgeColor: 'bg-[#fce4d4] text-[#b85c30]',
    dotColor: 'bg-[#eda47e]',
  },
  high: {
    label: 'เครียดมาก',
    icon: AlertTriangle,
    iconColor: 'text-[#c0706a]',
    cardGradient: 'bg-[linear-gradient(135deg,rgba(255,214,212,0.9),rgba(255,248,252,0.95))]',
    borderColor: 'border-[#f5b0ac]',
    badgeColor: 'bg-[#fdd8d6] text-[#a03030]',
    dotColor: 'bg-[#e08080]',
  },
};

export default function Dashboard({ isCoping }: { isCoping: boolean }) {
  const stressLevel: StressLevel = isCoping ? 'mild' : 'normal';
  const stress = stressConfig[stressLevel];
  const StressIcon = stress.icon;

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">

      {/* ── Card หลัก ── */}
      <div className="relative order-1 overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm md:order-first md:col-span-2 md:p-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(255,232,240,0.85),rgba(236,251,243,0.72),rgba(243,238,255,0.8))]" />
        <div className="absolute -right-8 top-6 h-28 w-28 rounded-full bg-[rgba(255,216,194,0.45)] blur-2xl" />

        <div className="relative z-10">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f6d5de] bg-[var(--rose-100)] px-3 py-1 text-[11px] font-bold tracking-wide text-[#b67895]">
                <Sparkles size={14} />
                ตุ๊กตาของฉัน
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--text-strong)] md:text-4xl">
                Doraemon <span className="font-semibold text-[var(--text-muted)]">#BuddyPro</span>
              </h2>
            </div>

            {/* รูปตุ๊กตา */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[22px] border-2 border-[#f4d6de] bg-white/70 shadow-[var(--shadow-soft-sm)] md:h-24 md:w-24">
              <img
                src="/images/nongpol.jpg"
                alt="ตุ๊กตา"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* 3 กล่องย่อย */}
          <div className="mt-6 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-3 md:gap-4">

            {/* สถานะปัจจุบัน */}
            <div className={cn('rounded-[24px] border p-4 shadow-[var(--shadow-soft-sm)] transition-all duration-500', stress.cardGradient, stress.borderColor)}>
              <div className="flex items-center gap-3">
                <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80', stress.iconColor)}>
                  <StressIcon className="size-5 md:size-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">สถานะปัจจุบัน</p>
                  <p className="text-xl font-extrabold text-[var(--text-strong)] transition-all duration-300">
                    {stress.label}
                  </p>
                </div>
              </div>
            </div>

            {/* แบตเตอรี่ */}
            <div className="rounded-[24px] border border-[#f4d6de] bg-[linear-gradient(135deg,rgba(255,240,228,0.9),rgba(255,248,252,0.95))] p-4 shadow-[var(--shadow-soft-sm)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-[#d79a86]">
                  <BatteryFull className="size-5 md:size-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">แบตเตอรี่</p>
                  <p className="text-xl font-extrabold text-[var(--text-strong)]">98%</p>
                </div>
              </div>
            </div>

            {/* เวลาใช้งาน */}
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

      {/* ── การตอบสนองอัตโนมัติ ── */}
      <div className="order-2 flex flex-col gap-4 md:order-first md:col-span-1 md:gap-6">
        <div className="overflow-hidden rounded-[32px] border border-[#f4d6de] bg-[linear-gradient(180deg,rgba(255,236,244,0.96),rgba(255,247,250,0.96))] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <h3 className="mb-6 text-[11px] font-extrabold tracking-[0.18em] text-[#b67895] md:mb-8">
            การตอบสนองอัตโนมัติ
          </h3>

          <div className="space-y-4">
            {[
              ['ระดับความอบอุ่น', '38°C'],
              ['ระบบสั่นนุ่มนวล', 'ผ่อนคลาย'],
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
      </div>

      {/* ── เหตุการณ์ล่าสุด ── */}
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
              meta: '14:42 • ตรวจพบผ่านเซนเซอร์',
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

    </div>
  );
}