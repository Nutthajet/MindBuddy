import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Lock, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const themes = [
  {
    id: 'rose',
    label: 'Rose Bloom',
    description: 'ชมพูอ่อนโยน อบอุ่น',
    preview: ['#f9d0dc', '#f3afbd', '#e8aec2'],
    accent: '#d88ea4',
  },
  {
    id: 'lavender',
    label: 'Lavender Mist',
    description: 'ม่วงลาเวนเดอร์ สงบ',
    preview: ['#e8e0f5', '#cfc3ee', '#b9a8e0'],
    accent: '#9b87d4',
  },
  {
    id: 'sky',
    label: 'Sky Calm',
    description: 'ฟ้าอ่อน ผ่อนคลาย',
    preview: ['#d6eef9', '#a9d4f0', '#7ab8e0'],
    accent: '#5b9fd4',
  },
  {
    id: 'sage',
    label: 'Sage Garden',
    description: 'เขียวอ่อน ใกล้ชิดธรรมชาติ',
    preview: ['#d4eadf', '#aed4bd', '#87be9c'],
    accent: '#5fa07a',
  },
  {
    id: 'peach',
    label: 'Peach Glow',
    description: 'ส้มอ่อน มีชีวิตชีวา',
    preview: ['#fce4d4', '#f5c4a8', '#eda47e'],
    accent: '#e0845c',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    description: 'โทนเข้ม สงบนิ่ง',
    preview: ['#2d2640', '#3d3557', '#53487a'],
    accent: '#9b87d4',
  },
];

const fontSizes = [
  { id: 'sm', label: 'เล็ก', size: '13px' },
  { id: 'md', label: 'กลาง', size: '15px' },
  { id: 'lg', label: 'ใหญ่', size: '17px' },
];

const languages = [
  { id: 'th', label: '🇹🇭 ภาษาไทย' },
  { id: 'en', label: '🇬🇧 English' },
];

const notificationOptions = [
  { id: 'stress_alert', label: 'แจ้งเตือนเมื่อความเครียดสูง', description: 'รับการแจ้งเตือนเมื่อระดับความเครียดเกินปกติ' },
  { id: 'daily_summary', label: 'สรุปรายวัน', description: 'รับสรุปสุขภาพจิตประจำวัน ตอนเย็น' },
];

function SectionCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-[28px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] md:p-7', className)}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
      {children}
    </h2>
  );
}

export default function Setting() {
  const [selectedTheme, setSelectedTheme] = useState('rose');
  const [selectedFontSize, setSelectedFontSize] = useState('md');
  const [selectedLanguage, setSelectedLanguage] = useState('th');
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    stress_alert: true,
    daily_summary: true,
    breathing_remind: false,
  });
  const [privacyExpanded, setPrivacyExpanded] = useState(false);
  const [therapistAccess, setTherapistAccess] = useState(true);
  const [familyDashboard, setFamilyDashboard] = useState(false);

  const toggleNotification = (id: string) => {
    setNotifications((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-5">

      {/* ── ธีมสี ── */}
      <SectionCard>
        <SectionTitle>🎨 ธีมสี</SectionTitle>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={cn(
                'group relative flex flex-col items-start gap-2 rounded-[20px] border-2 p-4 text-left transition-all duration-200',
                selectedTheme === theme.id
                  ? 'border-[color:var(--text-muted)] bg-white shadow-md'
                  : 'border-transparent bg-[var(--surface-secondary)] hover:border-[color:var(--border-soft)] hover:bg-white/80'
              )}
            >
              <div className="flex gap-1">
                {theme.preview.map((color, i) => (
                  <span
                    key={i}
                    className="h-5 w-5 rounded-full shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div>
                <p className="text-[13px] font-extrabold tracking-wide text-[var(--text-strong)]">{theme.label}</p>
                <p className="text-[11px] font-medium text-[var(--text-muted)]">{theme.description}</p>
              </div>
              {selectedTheme === theme.id && (
                <span
                  className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: theme.accent }}
                >
                  <Check size={11} color="white" strokeWidth={3} />
                </span>
              )}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* ── การแสดงผล ── */}
      <SectionCard>
        <SectionTitle>⚙️ การแสดงผล</SectionTitle>
        <div className="space-y-5">
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[var(--text-body)]">ขนาดตัวอักษร</p>
            <div className="flex gap-2">
              {fontSizes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFontSize(f.id)}
                  className={cn(
                    'flex-1 rounded-[14px] border py-2.5 text-center font-bold transition-all duration-200',
                    selectedFontSize === f.id
                      ? 'border-[#d88ea4] bg-[linear-gradient(135deg,rgba(255,240,244,0.98),rgba(244,234,255,0.98))] text-[#b67895] shadow-sm'
                      : 'border-[color:var(--border-soft)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:bg-white'
                  )}
                  style={{ fontSize: f.size }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[var(--text-body)]">ภาษา</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={cn(
                    'flex-1 rounded-[14px] border py-2.5 text-center text-[13px] font-bold transition-all duration-200',
                    selectedLanguage === lang.id
                      ? 'border-[#d88ea4] bg-[linear-gradient(135deg,rgba(255,240,244,0.98),rgba(244,234,255,0.98))] text-[#b67895] shadow-sm'
                      : 'border-[color:var(--border-soft)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:bg-white'
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ── การแจ้งเตือน ── */}
      <SectionCard>
        <SectionTitle>🔔 การแจ้งเตือน</SectionTitle>
        <div className="space-y-3">
          {notificationOptions.map((opt) => (
            <div
              key={opt.id}
              className="flex items-center justify-between rounded-[18px] border border-white/70 bg-[var(--surface-secondary)] px-4 py-3.5"
            >
              <div className="mr-4 flex-1">
                <p className="text-[13px] font-bold text-[var(--text-strong)]">{opt.label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[var(--text-muted)]">{opt.description}</p>
              </div>
              <button
                type="button"
                aria-pressed={notifications[opt.id]}
                onClick={() => toggleNotification(opt.id)}
                className={cn(
                  'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
                  notifications[opt.id]
                    ? 'bg-[linear-gradient(135deg,#f3afbd,#e8aec2)]'
                    : 'bg-[#e6e0f0]'
                )}
              >
                <span
                  className={cn(
                    'absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200',
                    notifications[opt.id] ? 'right-1' : 'left-1'
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── การแชร์ข้อมูล ── */}
      <SectionCard>
        <SectionTitle>👥 การแชร์ข้อมูล</SectionTitle>
        <div className="space-y-3">
          {[
            {
              id: 'therapist',
              label: 'การเข้าถึงของนักบำบัด',
              description: 'ซิงก์ข้อมูลและแจ้งเตือนแบบเรียลไทม์',
              state: therapistAccess,
              toggle: () => setTherapistAccess((v) => !v),
            }
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-[18px] border border-white/70 bg-[var(--surface-secondary)] px-4 py-3.5"
            >
              <div className="mr-4 flex-1">
                <p className="text-[13px] font-bold text-[var(--text-strong)]">{item.label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[var(--text-muted)]">{item.description}</p>
              </div>
              <button
                type="button"
                aria-pressed={item.state}
                onClick={item.toggle}
                className={cn(
                  'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
                  item.state
                    ? 'bg-[linear-gradient(135deg,#bde6d1,#d6f3e3)]'
                    : 'bg-[#e6e0f0]'
                )}
              >
                <span
                  className={cn(
                    'absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200',
                    item.state ? 'right-1' : 'left-1'
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── ความเป็นส่วนตัว & PDPA ── */}
      <SectionCard>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#d4eadf,#bde6d1)]">
            <ShieldCheck size={20} className="text-[#4a9470]" />
          </div>
          <div>
            <h2 className="text-[13px] font-extrabold tracking-wide text-[var(--text-strong)]">ความเป็นส่วนตัว & PDPA</h2>
            <p className="text-[11px] font-semibold text-[var(--text-muted)]">ข้อมูลของคุณปลอดภัย 100%</p>
          </div>
        </div>

        

        <div className="mt-3 flex items-start gap-2 rounded-[16px] border border-dashed border-[color:var(--border-soft)] bg-white/50 px-4 py-3">
          <Lock size={13} className="mt-0.5 shrink-0 text-[#9c92a8]" />
          <p className="text-[11px] font-medium leading-relaxed text-[var(--text-body)]">
            Mind Buddy ปฏิบัติตาม <span className="font-bold text-[var(--text-strong)]">พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ. 2562</span> และ GDPR
            คุณมีสิทธิ์เข้าถึง แก้ไข และลบข้อมูลส่วนตัวของคุณได้ทุกเมื่อ
            หากต้องการใช้สิทธิ์ ติดต่อ <span className="font-bold text-[#b67895]">privacy@mindbuddy.app</span>
          </p>
        </div>
      </SectionCard>
    </div>
  );
}