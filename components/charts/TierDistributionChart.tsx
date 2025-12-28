"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartCard from "./ChartCard";

type Props = {
  data: Array<{ tier: string; count: number }>;
};

export default function TierDistributionChart({ data }: Props) {
  if (!data?.length) {
    return (
      <div className="rounded-2xl border p-4">
        <p className="text-sm text-zinc-500">
          표본이 아직 없습니다. (opt-in 데이터가 필요함)
        </p>
      </div>
    );
  }

  return (
    <div>
      <ChartCard title="팬 평균 티어 분포" subtitle="Tier snapshot 기준">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tier" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#555" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
