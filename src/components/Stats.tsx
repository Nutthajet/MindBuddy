import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { time: '08:00', intensity: 30, freq: 2 },
  { time: '10:00', intensity: 45, freq: 3 },
  { time: '12:00', intensity: 85, freq: 7 },
  { time: '14:00', intensity: 40, freq: 2 },
  { time: '16:00', intensity: 95, freq: 8 },
  { time: '18:00', intensity: 50, freq: 4 },
  { time: '20:00', intensity: 35, freq: 3 },
];

export default function Stats() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-orange-50 shadow-sm transition-all hover:shadow-lg hover:shadow-orange-100/20">
        <div className="mb-6 md:mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">ระดับความเครียด</h3>
          <p className="text-slate-500 font-bold text-xs md:text-sm tracking-tight">ค่าความเข้มข้นที่รวบรวมจากการประมวลผลของ Edge AI</p>
        </div>
        
        <div className="h-[250px] md:h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F9731610" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '20px md:24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(249 115 22 / 0.1)', padding: '12px md:16px' }}
              />
              <Area 
                type="monotone" 
                dataKey="intensity" 
                stroke="#F97316" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorIntensity)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">ความถี่ในการบีบ</h3>
          <div className="h-[200px] md:h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#F9731605'}}
                  contentStyle={{ borderRadius: '16px', border: 'none' }} 
                />
                <Bar dataKey="freq" fill="#FDBA74" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-orange-500 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-xl shadow-orange-100 flex flex-col justify-center text-center text-white">
          <div className="mb-2 text-white/60 text-[10px] font-black uppercase tracking-widest">สรุปผลรายวัน</div>
          <div className="text-5xl md:text-7xl font-black tracking-tighter">ปกติ</div>
          <p className="mt-4 md:mt-6 text-white/80 text-xs md:text-sm font-medium leading-relaxed">
            ระดับความเครียดเฉลี่ยของคุณอยู่ในเกณฑ์ปกติสำหรับระดับประสาทวันนี้ 
            AI แนะนำให้ใช้ <span className="text-white font-bold underline decoration-white/30 underline-offset-4">โหมดประคบอุ่น 2.5 นาที</span> ในช่วงเย็น
          </p>
        </div>
      </div>
    </div>
  );
}
