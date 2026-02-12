'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { day: 'Lun', visites: 120, conv: 7 },
  { day: 'Mar', visites: 180, conv: 9 },
  { day: 'Mer', visites: 260, conv: 12 },
  { day: 'Jeu', visites: 200, conv: 8 },
  { day: 'Ven', visites: 320, conv: 16 },
  { day: 'Sam', visites: 280, conv: 13 },
  { day: 'Dim', visites: 340, conv: 18 }
];

export const DashboardWidget = () => (
  <div className="glass-card rounded-2xl p-5">
    <p className="font-semibold">#2 Mini dashboard</p>
    <div className="mt-4 h-44 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip />
          <Line type="monotone" dataKey="visites" stroke="#45d6ff" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="conv" stroke="#bb86fc" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
