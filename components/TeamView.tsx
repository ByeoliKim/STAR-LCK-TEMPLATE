"use client";

// 팀 상세 페이지의 메인 뷰 컴포넌트
// 좌측 롤 포지션 탭 (TOP / JGL / MID / BOT / SPT)
// 중앙 플레이어 카드 영역
// 하단 팀 슬로건 스크롤 섹션
// 포지션 선택 상태는 전역 스토어 (useLckStore) 를 사용한다.
// 팀 정보 (팀명, 로고, 슬로건, 팀컬러, 플레이어 목록) 은 상위 props 로 받는 구조로 설계함.

import { useMemo } from "react";
import Image from "next/image";
import type { Team, LolRole } from "@/lib/config/teams";
import { PlayerCard } from "./PlayerCard";
import { RepeatedOutlineText } from "./RepeatedOutlineText";
import ScrollVelocity from "./ScrollVelocity";
import GradientText from "./GradientText";
import { useLckStore } from "@/lib/store/lckStore";
import { PlayerMostChamps } from "./PlayerMostChamps";
import { motion, AnimatePresence } from "motion/react";

const ROLES: LolRole[] = ["TOP", "JGL", "MID", "BOT", "SPT"];

type TeamViewProps = {
  team: Team;
};

const revealTextVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const playerCardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export function TeamView({ team }: TeamViewProps) {
  // 전역 스토어에서 현재 선택된 포지션 setter 가져온다.
  const selectedRole = useLckStore((r) => r.selectedRole);
  const setSelectedRole = useLckStore((r) => r.setSelectedRole);

  const scrollVelocity = useLckStore((s) => s.scrollVelocity);

  // 선택된 포지션에 해당하는 플레이어 찾기
  // useMemo 를 사용하여 성능최적화 함
  const selectedPlayer = useMemo(
    () => team.players.find((p) => p.role === selectedRole),
    [team.players, selectedRole]
  );

  // 롤 포지션 탭
  const ROLE_TABS = [
    {
      key: "TOP" as LolRole,
      label: "TOP",
      icon: "/positions/top.svg",
    },
    {
      key: "JGL" as LolRole,
      label: "JUNGLE",
      icon: "/positions/jgl.svg",
    },
    {
      key: "MID" as LolRole,
      label: "MID",
      icon: "/positions/mid.svg",
    },
    {
      key: "BOT" as LolRole,
      label: "BOT",
      icon: "/positions/bot.webp",
    },
    {
      key: "SPT" as LolRole,
      label: "SUPPORT",
      icon: "/positions/spt.svg",
    },
  ] as const;

  return (
    <>
      <div
        // 팀 페이지의 배경색은 팀 메인컬러 / 서브컬러로 그라데이션 처리함
        // 컬러 팔레트만 바꾸면 전체 페이지 무드 바뀌도록 설계
        // lib/config/teams.ts colors 참고
        className="min-h-[200vh] px-4 py-10 text-white mix-blend-difference"
        style={{
          background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`,
        }}
      >
        <div className="mx-auto h-[94vh] flex max-w-6xl flex-col gap-10 lg:flex-col">
          {/* =======================
            좌측: 롤 포지션 탭 영역
           ======================= */}
          <aside
            className="absolute left-0 top-1/2 z-52 flex -translate-y-1/2 flex-col gap-3 bg-[#00000078] px-4 py-6"
            style={{
              borderRadius: "0 40px 40px 0",
            }}
          >
            {ROLE_TABS.map(({ key, icon }) => {
              const player = team.players.find((p) => p.role === key);
              const isActive = selectedRole === key;
              const isPlaceholder = player?.isPlaceholder;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`cursor-pointer flex h-16 w-16 items-center justify-center rounded-full transition
          ${
            isActive
              ? "bg-white text-black"
              : "bg-neutral-900/80 text-neutral-200"
          }
          ${isPlaceholder ? "opacity-60" : ""}
        `}
                >
                  <Image
                    src={icon}
                    alt={key}
                    width={40}
                    height={40}
                    className={isActive ? "opacity-100" : "opacity-70"}
                  />
                </button>
              );
            })}
          </aside>
          {/* =======================
              중앙 영역 : 플레이어 카드 + BG RepeatedOutlineText
             ======================= */}

          <main className="relative flex items-center justify-center h-full">
            {/* player 프로필 카드 */}
            <AnimatePresence mode="wait">
              {selectedPlayer && (
                <motion.div
                  key={selectedPlayer.id} // ⭐ 포지션 바뀔 때마다 모션 다시 실행
                  variants={playerCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-10 w-full max-w-6xl"
                >
                  <PlayerCard player={selectedPlayer} team={team} />
                </motion.div>
              )}
            </AnimatePresence>
            {/* player name 텍스트 반복 (백그라운드 연출용)  */}
            {selectedPlayer && (
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-start mix-blend-multiply overflow-hidden">
                <RepeatedOutlineText
                  text={
                    selectedPlayer.isPlaceholder
                      ? "COMING SOON"
                      : selectedPlayer.name.toUpperCase()
                  }
                  repeat={5} // 세로 반복 횟수
                  horizontalRepeat={12} // 가로 반복 횟수
                  className="text-center"
                  fillColor=""
                />
              </div>
            )}
          </main>
        </div>
        {/* =======================
            하단: 팀 슬로건 스크롤 텍스트
           ======================= */}
        <ScrollVelocity
          texts={[team.slogan, team.slogan2]}
          velocity={scrollVelocity}
          className="custom-scroll-text figtree font-black"
        />
        {selectedPlayer && (
          <div className="mx-auto max-w-6xl mt-6 figtree">
            <PlayerMostChamps
              champs={selectedPlayer.mostChamps}
              accentColor={team.colors.accent}
            />
          </div>
        )}
        <div className="mx-auto max-w-6xl my-30">
          {/* 바깥 모션: 스크롤 트리거만 담당 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="overflow-hidden">
              <motion.div variants={revealTextVariants}>
                <GradientText
                  colors={[
                    team.colors.primary,
                    team.colors.accent,
                    team.colors.primary,
                    team.colors.accent,
                    team.colors.primary,
                  ]}
                  animationSpeed={8}
                  showBorder={false}
                  className="custom-class"
                >
                  <h4 className="font-black text-7xl text-center tracking-tighter">
                    Legends Never Die
                    <br />
                    <strong className="text-9xl">{team.name}.</strong>
                  </h4>
                </GradientText>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
//
