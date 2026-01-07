"use client";

import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useLckStore } from "@/lib/store/lckStore";

export type TeamStatsResponse = {
  ok: boolean;
  meta: {
    teamSlug: string;
    range: string;
    sampleSize: number;
    updatedAt: string;
  };
  tierDistribution: Array<{ tier: string; count: number }>;
};

export function useTeamStats(
  teamSlug: string
): UseQueryResult<TeamStatsResponse, Error> {
  const range = useLckStore((s) => s.dashboardRange);
  const queue = useLckStore((s) => s.dashboardQueue);

  return useQuery<TeamStatsResponse, Error>({
    queryKey: ["teamStats", teamSlug, range, queue],
    queryFn: async (): Promise<TeamStatsResponse> => {
      const params = new URLSearchParams({ teamSlug, range, queue });
      const res = await fetch(`/api/team/stats?${params.toString()}`);

      if (!res.ok) throw new Error("Failed to fetch team stats");

      // ✅ 여기서 타입을 확정시켜줌
      return (await res.json()) as TeamStatsResponse;
    },

    staleTime: 60_000,
    gcTime: 10 * 60_000,

    // ✅ React Query v5에서 이전 데이터 유지(keepPreviousData 대체)
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
  });
}
