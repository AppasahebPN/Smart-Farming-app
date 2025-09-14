"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function CropChart({ crop }) {
  const data = [
    { name: "Yield", value: crop.avgYield },
    { name: "Price", value: crop.expectedPrice },
  ];

  return (
    <div className="mt-4">
      <h3 className="font-semibold text-gray-800 mb-2">📊 {crop.crop} Insights</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
