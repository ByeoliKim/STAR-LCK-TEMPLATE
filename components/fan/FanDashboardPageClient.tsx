"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardBlock from "../charts/DashboardBlock";
import { useLckStore } from "@/lib/store/lckStore";

const TEAM_OPTIONS = [
  { slug: "t1", name: "T1" },
  { slug: "geng", name: "Gen.G" },
  { slug: "kt", name: "Kt Rolster" },
  { slug: "hle", name: "Hanwha Life Esports" },
];

export default function FanDashboardPageClient() {
  const params = useSearchParams();
  const router = useRouter();

  const teamSlug = useMemo(() => {
    const t = (params.get("team") ?? "t1").toLowerCase();
    const isValid = TEAM_OPTIONS.some((x) => x.slug === t);
    return isValid ? t : "t1";
  }, [params]);

  const range = useLckStore((s) => s.dashboardRange);
  const setRange = useLckStore((s) => s.setDashboardRange);

  const queue = useLckStore((s) => s.dashboardQueue);
  const setQueue = useLckStore((s) => s.setDashboardQueue);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium">팀 선택</span>
          <select
            className="h-10 rounded-2xl border px-3 text-sm"
            value={teamSlug}
            onChange={(e) => router.push(`/fan?team=${e.target.value}`)}
          >
            {TEAM_OPTIONS.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
          {/* 기간 필터 (Zustand state 변경) */}
          <div className="ml-2 flex items-center gap-2">
            <span className="text-sm font-medium">기간</span>
            {(["24h", "7d", "30d"] as const).map((r) => (
              <button
                key={r}
                className={`h-10 rounded-xl border px-3 text-sm ${
                  range === r ? "bg-zinc-900 text-white" : "bg-white"
                }`}
                onClick={() => setRange(r)}
              >
                {r}
              </button>
            ))}
          </div>
          {/* 큐 필터 (Zustand state 변경) */}
          <div className="ml-2 flex items-center gap-2">
            <span className="text-sm font-medium">큐</span>
            {(
              [
                ["ALL", "전체"],
                ["RANKED_SOLO", "솔랭"],
                ["RANKED_FLEX", "자랭"],
              ] as const
            ).map(([q, label]) => (
              <button
                key={q}
                className={`h-10 rounded-xl border px-3 text-sm ${
                  queue === q ? "bg-zinc-900 text-white" : "bg-white"
                }`}
                onClick={() => setQueue(q)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <DashboardBlock teamSlug={teamSlug} />
    </div>
  );
}
