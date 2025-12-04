"use client";

import Image from "next/image";
import Link from "next/link";
import { useLckStore } from "@/lib/store/lckStore";
import { TEAM_CONFIGS } from "@/lib/config/teams";

// 전역 찜목록 사이드바
// favorites 상태에 따라 찜한 선수들 리스트를 보여 줌
// 닫기 버튼으로 숨길 수 있고, /favorites 페이지로 이동 가능

export function SideBar() {
  const favorites = useLckStore((s) => s.favorites);
  const isOpen = useLckStore((s) => s.isFavoritesSidebarOpen);
  const setOpen = useLckStore((s) => s.setFavoritesSidebarOpen);

  // 찜한 게 없을 경우에는 안 보여 줌
  if (!favorites.length || !isOpen) {
    return null;
  }

  return (
    <aside className="fixed left-4 top-4 z-51 w-72 flex flex-col gap-3 overflow-y-auto rounded-xl bg-black/80 p-4 text-xs backdrop-blur-xl text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-sm tracking-tighter uppercase">Favorite 🤍</h3>
        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[12px] text-neutral-300 hover:bg-white/20 cursor-pointer"
        >
          ✕
        </button>
      </div>
      <p className="tracking-tighter text-sm font-semibold">
        관심 플레이어 {favorites.length}명
      </p>

      <div className="sidebar-scroll max-h-[50vh] space-y-2 overflow-y-auto pr-1">
        {favorites.map((ref) => {
          const team = TEAM_CONFIGS[ref.teamSlug];
          if (!team) return null;
          const player = team.players.find((p) => p.id === ref.playerId);
          if (!player) return null;

          return (
            <div
              key={`${ref.teamSlug}-${ref.playerId}`}
              className="flex gap-3 rounded-xl bg-white/5 p-2"
            >
              <div className="relative h-13 w-13 overflow-hidden rounded-lg bg-black/40">
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
      </div>
      {/* 하단: 상세 페이지 이동 버튼 */}
      <Link
        href="/favorites"
        className="mt-1 flex h-9 items-center justify-center rounded-full bg-white/90 text-[12px] font-semibold text-black hover:bg-white"
      >
        자세히 보기
      </Link>
    </aside>
  );
}
