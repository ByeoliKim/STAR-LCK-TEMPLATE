// 팀 상세 템플릿 (T1 / GEN.G / KT / HLE 전부 공유)
import { notFound } from "next/navigation";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import { PlayerCard } from "@/components/PlayerCard";

type TeamPageProps = {
  // ⬅️ 이제 params는 Promise 타입
  params: Promise<{ slug: string }>;
};

export default async function TeamPage({ params }: TeamPageProps) {
  // ⬅️ 여기서 await 해서 slug 꺼내기
  const { slug } = await params; // Next15 ver
  const team = TEAM_CONFIGS[slug];

  if (!team) {
    return notFound();
  }

  return (
    <div
      className="min-h-screen p-10"
      style={
        {
          "--team-primary": team.colors.primary,
          "--team-secondary": team.colors.secondary,
          "--team-accent": team.colors.accent,
        } as React.CSSProperties
      }
    >
      <main className="pt-40 mx-auto max-w-5xl px-6 py-10">
        <section className="mb-8 flex items-center justify-between">
          <h2 className="text-sm font-medium tracking-[0.3em] text-white/50">
            ROSTER 2025
          </h2>
        </section>
        {/* 플레이어 카드 그리드 */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              teamColors={team.colors}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

// 정적 생성용 (빌드 타임에서 /teams/t1, /teams/geng .... 만들어줌)
export function generateStaticParams() {
  return Object.values(TEAM_CONFIGS).map((team) => ({
    slug: team.slug,
  }));
}
