"use client";

import Image from "next/image";

import { TEAM_CONFIGS, type Team, type Player } from "@/lib/config/teams";
import { useLckStore, type FavoritePlayerRef } from "@/lib/store/lckStore";
import { motion, type Variants } from "motion/react";

type FavoritePlayerResolved = {
  ref: FavoritePlayerRef;
  team: Team;
  player: Player;
};

// 리스트 전체 콘테이너 모션 (stagger)
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // 카드 간 시간차
      delayChildren: 0.1, // 첫 카드 나오기 전 약간 텀
    },
  },
};

// 개별 카드 모션
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FavoritesPage() {
  const favorites = useLckStore((s) => s.favorites);

  // localStorage 에 저장된 favorites (teamSlug, playerId)
  const favoritePlayers: FavoritePlayerResolved[] = favorites
    .map((ref) => {
      const team = TEAM_CONFIGS[ref.teamSlug];
      if (!team) return null;
      const player = team.players.find((p) => p.id === ref.playerId);
      if (!player) return null;

      return { ref, team, player };
    })
    .filter((v): v is FavoritePlayerResolved => v !== null);

  return (
    <main className="min-h-screen bg-black px-4 py-10">
      {/* 상단 헤더 */}
      {favoritePlayers.length === 0 ? null : (
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h2 className="text-white/80 figtree text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter">
              FAVORITE LIST.
            </h2>
            <p className="text-white/70">관심 플레이어가 노출됩니다.</p>
          </div>
        </div>
      )}
      {/* 관심 플레이어가 없을 경우 */}
      {favoritePlayers.length === 0 ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto max-w-6xl flex flex-col text-center text-neutral-400">
          <p>아직 관심 플레이어가 없어요.</p>
          <p>팀 페이지에서 플레이어 정보를 가져올 수 있어요.</p>
        </div>
      ) : (
        // 관심 플레이어가 있을 경우
        <motion.div
          className="mx-auto mt-10 grid max-w-6xl gap-6 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {favoritePlayers.map(({ ref, team, player }) => {
            const champs = player.mostChamps ?? [];
            return (
              <motion.article
                key={`${ref.teamSlug}-${ref.playerId}`}
                variants={cardVariants}
                className="relative overflow-hidden rounded-3xl bg-white/5 p-4 shadow-lg shadow-black/40"
              >
                <div className="flex flex-col gap-4 md:flex-row">
                  {/* 플레이어 이미지 영역 */}
                  <div className="relative w-full aspect-3/4 sm:aspect-4/5 md:aspect-4/5 lg:h-80 flex-1 overflow-hidden rounded-xl bg-white/30">
                    <Image
                      src={player.image}
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-[16px] text-neutral-300 font-black tracking-tighter">
                        PLAYER
                      </p>
                      <div className="w-full flex items-baseline justify-between">
                        <p className="text-neutral-100 text-xl md:text-2xl lg:text-3xl font-black tracking-tighter">
                          {player.name}.
                        </p>
                        <p className="text-sm md:text-xl lg:text-lg font-black text-amber-100">
                          {player.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute m-2 h-10 w-10 overflow-hidden rounded-xl bg-black/10">
                    <Image
                      src={team.logo}
                      alt={team.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                </div>
                {/* 하단: 팀 정보 + 포지션 */}
                <div className="w-full flex flex-col items-center justify-between mt-2 ">
                  {champs.length === 0 ? (
                    <p className="mt-1 text-[12px] text-neutral-500">
                      등록된 모스트 챔피언 정보가 없어요.
                    </p>
                  ) : (
                    <>
                      <h4 className="text-white/70 text-sm tracking-tighter">
                        TOP 3 모스트 챔피언 승률
                      </h4>
                      <ul className="w-full mt-2 space-y-1 text-[13px]">
                        {champs.slice(0, 3).map((champ) => (
                          <li
                            key={champ.key}
                            className="flex items-center justify-around"
                          >
                            <span className="w-[50%] text-center text-neutral-500">
                              {champ.name}
                            </span>
                            <span className="w-[50%] text-center text-neutral-500">
                              {champ.winRate}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </main>
  );
}
