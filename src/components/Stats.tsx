import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { time: '08:00', intensity: 0},
  { time: '10:00', intensity: 25}, // เครียดเล็กน้อย
  { time: '12:00', intensity: 0},
  { time: '14:00', intensity: 25}, // ปกติ
  { time: '16:00', intensity: 25}, // เครียดมาก (เส้นจะไม่ชนขอบบนสุดเพราะเพดานอยู่ที่ 120)
  { time: '18:00', intensity: 0}, // เครียดปานกลาง
  { time: '20:00', intensity: 0},
];

const tooltipStyle = {
  borderRadius: '18px',
  border: '1px solid rgba(226, 203, 224, 0.55)',
  boxShadow: '0 18px 40px rgba(202, 181, 213, 0.16)',
  backgroundColor: 'rgba(255,255,255,0.96)',
  padding: '10px 12px',
};

// ฟังก์ชันแปลงตัวเลขเป็นข้อความระดับความเครียดสำหรับแกน Y
const formatYAxis = (value: number) => {
  if (value === 0) return 'ปกติ';
  if (value === 25) return 'เล็กน้อย';
  if (value === 50) return 'ปานกลาง';
  if (value === 75) return 'สูง';
  return '';
};

export default function Stats() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-[color:var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="mb-6 md:mb-8">
          <h3 className="mb-2 text-[11px] font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
            ระดับความเครียด
          </h3>
          <p className="text-sm font-semibold tracking-wide text-[var(--text-body)]">
            สถานะความเครียดที่เก็บข้อมูลจากการประมวลผลของอุปกรณ์ตลอดทั้งวัน
          </p>
        </div>

        <div className="h-[250px] w-full md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 10, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f3afbd" stopOpacity={0.55} />
                  <stop offset="95%" stopColor="#f3afbd" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(231, 214, 235, 0.8)" />
              
              <XAxis 
                dataKey="time" 
                boundaryGap={false}
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9c92a8', fontSize: 11, fontWeight: 700 }} 
              />
              
              <YAxis 
                domain={[0, 100]}
                ticks={[0, 25, 50, 75]}
                tickFormatter={formatYAxis}
                axisLine={false} 
                tickLine={false} 
                tick={{ 
                  fill: '#9c92a8', 
                  fontSize: 11, 
                  fontWeight: 700, 
                  textAnchor: 'end',
                  dx: -4,
                }}
                width={68}
              />

              <Tooltip 
                contentStyle={tooltipStyle} 
                cursor={{ stroke: '#e9d9ea', strokeWidth: 1 }}
                formatter={(value: number) => [formatYAxis(value) || value, "ระดับ"]}
              />
              <Area type="monotone" dataKey="intensity" stroke="#d88ea4" strokeWidth={3} fillOpacity={1} fill="url(#colorIntensity)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center rounded-[32px] border border-[#f4d6de] bg-[linear-gradient(135deg,rgba(255,240,244,0.98),rgba(244,234,255,0.98))] p-8 text-center shadow-[var(--shadow-soft)] md:rounded-[40px] md:p-10">
          <div className="text-[11px] font-extrabold tracking-[0.18em] text-[#b67895]">สรุปผลรายวัน</div>
          <div className="mt-2 text-5xl font-extrabold tracking-tight text-[var(--text-strong)] md:text-7xl">ปกติ</div>
          <p className="mt-4 text-xs leading-7 text-[var(--text-body)] md:mt-6">
            วันนี้มีการตอบสนองต่อความเครียดในบางช่วงเวลา แต่ยังอยู่ในระดับที่สมดุล 
          </p>
        </div>
      </div>
    </div>
  );
}