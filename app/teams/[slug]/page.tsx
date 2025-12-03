// 팀 상세 템플릿 (T1 / GEN.G / KT / HLE 전부 공유)
import { notFound } from "next/navigation";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import { PlayerCard } from "@/components/PlayerCard";
import { TeamView } from "@/components/TeamView";

type TeamPageProps = {
  //params는 Promise 타입
  params: Promise<{ slug: string }>;
};

export default async function TeamPage({ params }: TeamPageProps) {
  // await 해서 slug 꺼냄
  const { slug } = await params; // Next15 ver
  const team = TEAM_CONFIGS[slug];

  if (!team) {
    return notFound();
  }

  return <TeamView team={team} />;
}

// 정적 생성용 (빌드 타임에서 /teams/t1, /teams/geng .... 만들어줌)
export function generateStaticParams() {
  return Object.values(TEAM_CONFIGS).map((team) => ({
    slug: team.slug,
  }));
}
