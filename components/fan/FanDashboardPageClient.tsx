"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DashboardBlock from "../charts/DashboardBlock";

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
          <div className="ml-auto text-xs text-zinc-500">
            <span>
              현재: <span className="font-semibold">{teamSlug}</span>
            </span>
          </div>
        </div>
      </div>
      <DashboardBlock teamSlug={teamSlug} />
    </div>
  );
}
