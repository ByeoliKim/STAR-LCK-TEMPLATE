// LCK 템플릿 전용 전역 상태를 관리하는 스토어
// 현재 어떤 포지션이 선택되었는지 확인할 수 있다.
// 텍스트 스크롤 속도는 어떤 값이 있는지 확인할 수 있다.
// 등등 전역으로 관리하여 여러 컴포넌트에서 공유할 수 있다.

import { create } from "zustand";
import type { LolRole } from "@/lib/config/teams";

// 전역 상태 shape 정의
type LckState = {
  // 현재 선택된 롤 포지션 (TOP / JGL / MID / BOT / SPT)
  selectedRole: LolRole;
  setSelectedRole: (role: LolRole) => void;

  scrollVelocity: number;
  setScrollVelocity: (velocity: number) => void;
};

// 스토어 생성
export const useLckStore = create<LckState>((set) => ({
  // 기본 포지션은 TOP 으로 설정
  selectedRole: "TOP",
  setSelectedRole: (role) => set({ selectedRole: role }),

  // 텍스트 스크롤 속도 기본값
  scrollVelocity: 50,
  setScrollVelocity: (velocity) => set({ scrollVelocity: velocity }),
}));
