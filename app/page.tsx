import Image from "next/image";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import { PlayerCard } from "@/components/PlayerCard";
import { FadeInSection } from "@/components/FadeInSection";

export default function HomePage() {
  const team = TEAM_CONFIGS.t1;

  return (
    <>
      <main className="pt-40 min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-white">
        <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
          {/* 히어로 액션 */}
          <FadeInSection>
            <h2>ONE AND ONLY T1 TEMPLATE</h2>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <p>
              LOL 프로팀 랜딩 페이지를 위한 재사용 가능한 템플릿. 팀만
              바꿔끼우면 Gen.G / KT / HLE 전부 커버 가능.
            </p>
          </FadeInSection>
          {/* 플레이어 그리드 */}
          <FadeInSection delay={0.9}>
            <h2 className="text-2xl font-semibold md:text-3xl">
              CURRENT ROSTER
            </h2>
          </FadeInSection>
          <FadeInSection delay={1.3}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {team.players.map((player) => (
                <PlayerCard key={player.id} player={player} team={team} />
              ))}
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
