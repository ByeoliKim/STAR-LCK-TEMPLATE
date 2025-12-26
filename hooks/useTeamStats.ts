"use client";

import { useQuery } from "@tanstack/react-query";

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

export function useTeamStats(
  teamSlug: string,
  range: "24h" | "7d" | "30d" = "7d"
) {
  return useQuery({
    queryKey: ["teamStats", teamSlug, range],
    queryFn: async (): Promise<TeamStatsResponse> => {
      const params = new URLSearchParams({ teamSlug, range });
      const res = await fetch(`/api/team/stats?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch team stats");
      return res.json();
    },
    staleTime: 60_000,
    gcTime: 10 * 60_000,
    refetchOnWindowFocus: false,
  });
}
