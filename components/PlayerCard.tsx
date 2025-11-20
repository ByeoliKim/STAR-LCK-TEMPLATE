"use client";

import Image from "next/image";
import type { Player, Team } from "@/lib/config/teams";

type PlayerCardProps = {
  player: Player;
  team: Team;
};

export function PlayerCard({ player, team }: PlayerCardProps) {
  //const { colors } = team;
  const isPlaceholder = player.isPlaceholder;
  // ✅ team 이 없을 수도 있으니까 안전하게 기본 색 지정
  const primaryColor = team?.colors.primary ?? "#e5e5e5";
  const borderColor = isPlaceholder ? "#4b5563" : primaryColor;
  const glowColor = isPlaceholder
    ? "rgba(148,163,184,0.4)"
    : `${primaryColor}66`;

  return (
    <div
      className={`
          group relative flex flex-col overflow-hidden rounded-2xl
          bg-linear-to-b from-neutral-900/80 to-black
          shadow-[0_0_25px_rgba(0,0,0,0.55)]
          transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,0,0,0.8)]`}
      style={{
        border: `1px solid ${borderColor}`,
        boxShadow: `0 0 22px ${glowColor}`,
      }}
    >
      {/* 상단 역할 / 팀 태그 */}
      <div className="absolute left-3 top-3 z-10 flex gap-1">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] ${
            isPlaceholder
              ? "bg-slate-800/90 text-slate-300"
              : "bg-white/95 text-black"
          }`}
        >
          {player.role}
        </span>
        {/* team 이 있을 때만 팀 이름 보여주기 */}
        {!isPlaceholder && team && (
          <span className="rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-neutral-200">
            {team.name}
          </span>
        )}
      </div>
      {/* 이미지 영역 */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* 이미지 + 오버레이 묶임 */}
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
          <Image
            src={player.image}
            alt={player.name}
            fill
            className={`object-cover w-full h-full ${
              isPlaceholder ? "grayscale opacity-70" : ""
            }`}
            sizes="(max-width: 768px) 50vw, 240px"
          />
          {/* 플레이어가 실제 선수일 때 살짝 그라데이션 */}
          {!isPlaceholder && (
            <div
              className="
              pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent
            "
            />
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
      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col gap-1 px-4 py-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3
            className={`text-sm font-semibold ${
              isPlaceholder ? "text-slate-300/80" : "text-white"
            }`}
          >
            {isPlaceholder ? "To Be Decided" : player.name}
          </h3>
          {/* 작은 상태 뱃지 */}
          {isPlaceholder ? (
            <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-200">
              OPEN SLOT
            </span>
          ) : (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium text-neutral-200"
              style={{
                backgroundColor: `${primaryColor}20`,
                border: `1px solid ${primaryColor}55`,
              }}
            >
              STARTER
            </span>
          )}
        </div>
        {/* 설명 / 보조 텍스트 (나중에 교체 가능) */}
        <p
          className={`text-xs leading-relaxed ${
            isPlaceholder ? "text-slate-400" : "text-neutral-300"
          }`}
        >
          {isPlaceholder ? "COMING SOON" : "ROSTER MEMBER 🌟"}
        </p>
      </div>
    </div>
  );
}
