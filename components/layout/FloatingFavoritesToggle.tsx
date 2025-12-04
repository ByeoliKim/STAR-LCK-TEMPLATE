"use client";

import { useLckStore } from "@/lib/store/lckStore";

export function FloatingFavoritesToggle() {
  const favorites = useLckStore((s) => s.favorites);
  const setOpen = useLckStore((s) => s.setFavoritesSidebarOpen);

  // 관심 등록한 플레이어가 없을 경우
  if (favorites.length === 0) return null;

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-white/20 backdrop-blur-3xl
        shadow-lg shadow-black/10
        hover:bg-white/30 transition cursor-pointer"
    >
      🤍
    </button>
  );
}
