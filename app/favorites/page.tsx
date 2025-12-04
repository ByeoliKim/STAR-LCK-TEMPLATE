"use client";

import Image from "next/image";
import Link from "next/link";

import { TEAM_CONFIGS, type Team, type Player } from "@/lib/config/teams";
import { useLckStore, type FavoritePlayerRef } from "@/lib/store/lckStore";
import { PlayerMostChamps } from "@/components/PlayerMostChamps";

type FavoritePlayerResolved = {
  ref: FavoritePlayerRef;
  team: Team;
  player: Player;
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
            <h2>FAVORITE LIST</h2>
            <p>관심 플레이어 ({favoritePlayers.length})</p>
            <p>관심 버튼을 누른 플레이어 아카이빙 저장소</p>
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
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
          {favoritePlayers.map(({ ref, team, player }) => (
            <article
              key={`${ref.teamSlug}-${ref.playerId}`}
              className="relative overflow-hidden rounded-3xl bg-white/5 p-4 shadow-lg shadow-black/40"
            >
              {/* 상단: 팀 정보 + 포지션 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-black/60">
                    <Image
                      src={team.logo}
                      alt={team.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                      {team.slug}
                    </p>
                    <p className="text-sm font-semibold">{team.name}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-400">{player.role}</p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                {/* 선수 이미지 영역 */}
                <div className="relative h-40 flex-1 overflow-hidden rounded-2xl bg-black/60">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[11px] text-neutral-300">PLAYER</p>
                    <p className="text-lg font-bold">{player.name}</p>
                  </div>
                </div>

                {/* 우측: 모스트 챔피언 섹션 재사용 */}
                <div className="flex-1">
                  <PlayerMostChamps
                    champs={player.mostChamps}
                    accentColor={team.colors.accent}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
