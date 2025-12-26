// app/api/team/stats/route.ts
import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

function rangeToISO(range: string) {
  const now = Date.now();
  if (range === "24h") return new Date(now - 24 * 60 * 60 * 1000).toISOString();
  if (range === "7d")
    return new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
  if (range === "30d")
    return new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString();
  return new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const teamSlug = searchParams.get("teamSlug") ?? "t1";
    const range = searchParams.get("range") ?? "7d";

    const sinceISO = rangeToISO(range);
    const supabase = createSupabaseAdmin();

    // ✅ 표본 수
    const { count, error: countError } = await supabase
      .from("fan_events")
      .select("*", { count: "exact", head: true })
      .eq("team_slug", teamSlug)
      .gte("occurred_at", sinceISO);

    if (countError) {
      return NextResponse.json(
        { ok: false, message: countError.message },
        { status: 500 }
      );
    }

    // ✅ 티어 분포(간단 버전): 필요한 행들만 가져와서 JS로 집계
    const { data, error } = await supabase
      .from("fan_events")
      .select("tier")
      .eq("team_slug", teamSlug)
      // .eq("event_type", "tier_snapshot")
      .gte("occurred_at", sinceISO);

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 500 }
      );
    }

    const tierMap = new Map<string, number>();
    for (const row of data ?? []) {
      const t = row.tier ?? "UNRANKED";
      tierMap.set(t, (tierMap.get(t) ?? 0) + 1);
    }

    const tierDistribution = Array.from(tierMap.entries())
      .map(([tier, c]) => ({ tier, count: c }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json({
      ok: true,
      meta: {
        teamSlug,
        range,
        sampleSize: count ?? 0,
        updatedAt: new Date().toISOString(),
      },
      tierDistribution,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, message: msg }, { status: 500 });
  }
}
