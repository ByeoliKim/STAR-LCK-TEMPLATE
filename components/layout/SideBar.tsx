"use client";

import { useLckStore } from "@/lib/store/lckStore";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import Image from "next/image";

export function SideBar() {
  const favorites = useLckStore((s) => s.favorites);

  // 찜한 게 없을 경우
  if (favorites.length === 0) {
    return null;
  }

  return (
    <aside className="fixed left-4 top-4 z-40 flex max-h-[70vh] w-64 flex-col gap-3 overflow-y-auto rounded-2xl bg-black/80 p-4 text-xs text-white">
      <h3>찜목록</h3>
      {favorites.map((ref) => {
        const team = TEAM_CONFIGS[ref.teamSlug];
        const player = team.players.find((p) => p.id === ref.playerId);

        if (!player) return null;

        return (
          <div
            key={`${ref.teamSlug}-${ref.playerId}`}
            className="flex gap-3 rounded-xl bg-white/5 p-2"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-black/40">
              <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-neutral-300">{team.name}</p>
              <p className="text-sm font-semibold">{player.name}</p>
              {/* mostChamps가 있다면 첫 번째 챔피언 노출 */}
              {player.mostChamps && player.mostChamps.length > 0 && (
                <p className="mt-1 text-[11px] text-neutral-400">
                  주력 챔피언: {player.mostChamps[0].name} (
                  {player.mostChamps[0].winRate}%)
                </p>
              )}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
