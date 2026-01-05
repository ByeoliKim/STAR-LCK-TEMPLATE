// LCK 템플릿 전용 전역 상태를 관리하는 스토어
// 현재 어떤 포지션이 선택되었는지 확인할 수 있다.
// 텍스트 스크롤 속도는 어떤 값이 있는지 확인할 수 있다.
// 등등 전역으로 관리하여 여러 컴포넌트에서 공유할 수 있다.

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LolRole } from "@/lib/config/teams";

// 전역 상태 shape 정의

// 찜한 선수 식별용 타입
// teamSlug : 어떤 팀인가
// playerId : 팀 안에서의 선수 id
export type FavoritePlayerRef = {
  teamSlug: string;
  playerId: string;
};

type DashboardRange = "24h" | "7d" | "30d";
type DashboardQueue = "ALL" | "RANKED_SOLO" | "RANKED_FLEK";

type LckState = {
  // 공통 UI 상태 (랜딩 팬 페이지)

  // 현재 선택된 롤 포지션 (TOP / JGL / MID / BOT / SPT)
  selectedRole: LolRole;
  setSelectedRole: (role: LolRole) => void;

  // 교차 텍스트 스크롤 모션 속도 제어
  scrollVelocity: number;
  setScrollVelocity: (velocity: number) => void;

  // 전역 즐겨찾기(찜) 목록
  favorites: FavoritePlayerRef[];
  toggleFavorite: (ref: FavoritePlayerRef) => void;

  // 전역 사이드바 on/off 상태
  isFavoritesSidebarOpen: boolean;
  setFavoritesSidebarOpen: (open: boolean) => void;

  // 팬 대시보드 전용 상태

  // 통계 기간 필터
  dashboardRange: DashboardRange;
  setDashboardRange: (range: DashboardRange) => void;
  // 큐 타입 필터
  dashboardQueue: DashboardQueue;
  setDashboardQueue: (queue: DashboardQueue) => void;
};

// 스토어 생성

export const useLckStore = create<LckState>()(
  persist(
    (set, get) => ({
      // 디폴트 포지션은 MID 으로 설정
      selectedRole: "MID",
      setSelectedRole: (role) => set({ selectedRole: role }),

      // 텍스트 스크롤 속도 기본값
      scrollVelocity: 50,
      setScrollVelocity: (velocity) => set({ scrollVelocity: velocity }),

      favorites: [],
      toggleFavorite: (ref) => {
        const { favorites } = get();
        const exists = favorites.some(
          (f) => f.teamSlug === ref.teamSlug && f.playerId === ref.playerId
        );
        // 토글
        if (exists) {
          set({
            favorites: favorites.filter(
              (f) =>
                !(f.teamSlug === ref.teamSlug && f.playerId === ref.playerId)
            ),
          });
        } else {
          set({ favorites: [...favorites, ref] });
        }
      },

      isFavoritesSidebarOpen: true, // 디폴트 상태는 ON
      setFavoritesSidebarOpen: (open) => set({ isFavoritesSidebarOpen: open }),

      // 팬 대시보드 필터 초기값

      //기본 통계 기간 : 최근 7일
      dashboardRange: "7d",
      setDashboardRange: (range) => set({ dashboardRange: range }),

      //기본 큐: 전체
      dashboardQueue: "ALL",
      setDashboardQueue: (queue) => set({ dashboardQueue: queue }),
    }),
    {
      name: "lck-store",
      partialize: (state) => ({
        favorites: state.favorites,
        isFavoritesSidebarOpen: state.isFavoritesSidebarOpen,
        dashboardRange: state.dashboardRange,
        dashboardQueue: state.dashboardQueue,
      }),
    }
  )
);
