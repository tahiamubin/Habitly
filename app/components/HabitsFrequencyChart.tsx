"use client";

import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Habit {
  frequency: string;
}

const COLORS: Record<string, string> = {
  daily: "#7283ff",
  weekly: "#82ca9d",
  monthly: "#ffc658",
};

export default function HabitsFrequencyChart({ habits }: { habits: Habit[] }) {
  const counts = habits.reduce((acc: Record<string, number>, habit) => {
    const freq = habit.frequency?.toLowerCase() || "unknown";
    acc[freq] = (acc[freq] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(counts).map(([frequency, count]) => ({
    name: frequency.charAt(0).toUpperCase() + frequency.slice(1),
    value: count,
    key: frequency,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label
          >
            {chartData.map((entry) => (
              <Cell key={entry.key} fill={COLORS[entry.key] || "#ccc"} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}