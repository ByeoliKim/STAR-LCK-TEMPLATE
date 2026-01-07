"use client";

import { useQuery } from "@tanstack/react-query";
import { useLckStore } from "@/lib/store/lckStore";

type TierItem = { tier: string; count: number };

type TeamStatsResponse = {
  ok: boolean;
  meta: {
    teamSlug: string;
    range: string;
    sampleSize: number;
    updatedAt: string;
  };
  tierDistribution: TierItem[];
};

export function useTeamStats(teamSlug: string) {
  // store 에서 필터 상태 읽기
  const range = useLckStore((s) => s.dashboardRange);
  const queue = useLckStore((s) => s.dashboardQueue);

  return useQuery({
    // 필터가 바뀌면 queryKey 가 바뀌고 자동으로 재요청된다
    queryKey: ["teamStats", teamSlug, range, queue],
    queryFn: async (): Promise<TeamStatsResponse> => {
      const params = new URLSearchParams({ teamSlug, range, queue });
      const res = await fetch(`/api/team/stats?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch team stats");
      return res.json();
    },
    // 필터 바꿀 때 부드럽게~ 이전 데이터 유지한채로 새로고침
    staleTime: 60_000,
    gcTime: 10 * 60_000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
}
