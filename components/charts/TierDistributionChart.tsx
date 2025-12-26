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
    <div className="rounded-2xl border p-4">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="text-base font-semibold">팬 평균 티어 분표</h3>
        <span className="text-xs text-zinc-500">Tier snapshot 기준</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tier" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#555" />
        </BarChart>
      </ResponsiveContainer>
      {/* <div className="text-xs text-zinc-500 mb-2">
          data length: {data?.length ?? 0}
        </div> */}
    </div>
  );
}
