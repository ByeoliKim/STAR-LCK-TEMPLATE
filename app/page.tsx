import Image from "next/image";
import mainBanner from "@/public/main/ddb_1_img.png";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import { RepeatedOutlineText } from "@/components/RepeatedOutlineText";
import { PlayerCard } from "@/components/PlayerCard";
import { FadeInSection } from "@/components/FadeInSection";
import Link from "next/link";

const MAIN_COLOR = "#E83A74"; // Main Color

export default function HomePage() {
  const team = TEAM_CONFIGS.t1;

  return (
    <>
      <main className="relative pt-10 sm:pt-5 min-h-screen overflow-hidden bg-black text-white">
        {/* <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
          <FadeInSection>
            <h2>ONE AND ONLY T1 TEMPLATE</h2>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <p>
              LOL 프로팀 랜딩 페이지를 위한 재사용 가능한 템플릿. 팀만
              바꿔끼우면 Gen.G / KT / HLE 전부 커버 가능.
            </p>
          </FadeInSection>
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
        </section> */}
        {/* 좌상단 + 우하단 글로우 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.05), transparent 60%),
            radial-gradient(circle at 85% 80%, rgba(255,255,255,0.04), transparent 60%)
          `,
          }}
        />
        {/* 중앙 흐릿한 라이트 밴드 */}
        <div className="pointer-events-none absolute inset-x-[-15%] top-1/2 h-[45%] -translate-y-1/2 bg-linear-to-r from-white/10 via-white/0 to-white/10 opacity-[0.28] blur-[120px]" />
        {/* 노이즈 텍스처 (고급 e스포츠 느낌에서 거의 필수) */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay">
          <div className="h-full w-full bg-[url('/noise.png')] bg-repeat" />
        </div>

        <div className="">
          <div className="relative w-full max-w-5xl flex flex-col min-h-screen items-center justify-center m-auto">
            <h2 className="w-full pb-2 text-left text-5xl font-black tracking-tighter border-b">
              STAR TEMPLATE.
            </h2>
            <div className="absolute right-0 z-10">
              <ul>
                <li>
                  <Link href="/teams/t1">
                    <span className="text-white">T1</span>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/geng">
                    <span className="text-white">GEN</span>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/kt">
                    <span className="text-white">KT</span>
                  </Link>
                </li>
                <li>
                  <Link href="/teams/hle">
                    <span className="text-white">HLE</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* 실제 콘텐츠 */}
            <section className="relative lg:translate-y-[-4em] md:translate-y-[-3em] sm:translate-y-[-2em] z-10">
              <div className="">
                <Image src={mainBanner} alt="main banner" width={600} />
              </div>
            </section>

            <div className="absolute lg:translate-y-[2em] md:translate-y-[-3em] sm:translate-y-[-2em] w-full z-9">
              <RepeatedOutlineText
                text="KIMSTAR"
                repeat={5}
                align="left"
                fillColor="#ffffff"
                strokeColor="#6b7280"
                className="drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
