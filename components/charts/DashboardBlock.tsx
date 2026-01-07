"use client";

import { useTeamStats } from "@/hooks/useTeamStats";
import TierDistributionChart from "./TierDistributionChart";

type Props = {
  teamSlug: string;
};

export default function DashboardBlock({ teamSlug }: Props) {
  const { data, isLoading, isError } = useTeamStats(teamSlug);

  if (isLoading)
    return <div className="rounded-2xl border p-4">로딩 중...</div>;
  if (isError || !data?.ok)
    return <div className="rounded-2xl border p-4">에러 발생</div>;
  return (
    <div className="space-y-4">
      <div className="text-sm text-zinc-600">
        표본 n={data.meta.sampleSize} 업데이트{" "}
        {new Date(data.meta.updatedAt).toLocaleString()}
      </div>
      <TierDistributionChart data={data.tierDistribution ?? []} />
    </div>
  );
}
