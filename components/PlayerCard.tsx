"use client";

import Image from "next/image";
import { useLckStore } from "@/lib/store/lckStore";
import type { Player, Team } from "@/lib/config/teams";

type PlayerCardProps = {
  player: Player;
  team: Team;
};

export function PlayerCard({ player, team }: PlayerCardProps) {
  //const { colors } = team;
  const isPlaceholder = player.isPlaceholder;
  // team 이 없을 수도 있으니까 안전하게 기본 색 지정
  const primaryColor = team?.colors.primary ?? "#e5e5e5";
  const borderColor = isPlaceholder ? "#4b5563" : primaryColor;
  const glowColor = isPlaceholder
    ? "rgba(148,163,184,0.4)"
    : `${primaryColor}66`;

  const favorites = useLckStore((s) => s.favorites);
  const toggleFavorite = useLckStore((s) => s.toggleFavorite);

  const isFavorite = favorites.some(
    (f) => f.teamSlug === team.slug && f.playerId === player.id
  );

  const handleToggleFavorite = () => {
    toggleFavorite({ teamSlug: team.slug, playerId: player.id });
  };

  return (
    <div className={`group relative flex`}>
      {/* 이미지 영역 */}
      {/* 우측 상단 찜 버튼 */}
      <button
        type="button"
        onClick={handleToggleFavorite}
        className="absolute left-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-xs"
      >
        <span className={isFavorite ? "text-yellow-300" : "text-neutral-400"}>
          {isFavorite ? "★ 찜됨" : "☆ 찜하기"}
        </span>
      </button>
      <h2 className="absolute left-0 top-[-70px] h-auto w-full pb-2 text-left text-5xl font-black tracking-tighter border-b">
        {player.name}.
      </h2>
      <div className="absolute right-0 top-[-68px]">
        <Image
          src={team.logo}
          alt={team.name}
          width={200}
          height={200}
          className="w-[100px] h-10"
        />
      </div>
      <div className="relative w-[780px] h-[620px] mx-auto overflow-hidden">
        {/* 이미지 + 오버레이 묶임 */}
        <div className="relative -top-0.5 w-full h-full transition-transform duration-500">
          <Image
            src={player.image}
            alt={player.name}
            fill
            className={`object-cover w-full h-full ${
              isPlaceholder ? "grayscale opacity-70" : ""
            }`}
          />
          {/* 플레이어가 실제 선수일 때 살짝 그라데이션 */}
          {!isPlaceholder && (
            <div className="pointer-events-none absolute inset-0" />
          )}
          {/* Placeholder 전용 오버레이 */}
          {isPlaceholder && (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end bg-linear-to-t from-black via-black/60 to-transparent pb-6">
              <span className="mb-1 text-[11px] tracking-[0.25em] text-slate-300">
                RECRUITING
              </span>
              <span className="rounded-full border border-dashed border-slate-500/80 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-100">
                TBD PLAYER
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
