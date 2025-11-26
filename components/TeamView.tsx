"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Team, LolRole } from "@/lib/config/teams";
import { PlayerCard } from "./PlayerCard";
import { RepeatedOutlineText } from "./RepeatedOutlineText";

const ROLES: LolRole[] = ["TOP", "JGL", "MID", "BOT", "SPT"];

type TeamViewProps = {
  team: Team;
};

export function TeamView({ team }: TeamViewProps) {
  const [selectedRole, setSelectedRole] = useState<LolRole>("TOP");

  const selectedPlayer = useMemo(
    () => team.players.find((p) => p.role === selectedRole),
    [team.players, selectedRole]
  );

  return (
    <>
      <div className="min-h-screen bg-black px-4 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
          {/* 좌측: 팀 로고 + 포지션 팁 */}
          <aside className="w-full space-y-8 lg:w-1/3">
            {/* 팀 헤더 */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{team.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  {team.slogan}
                </p>
              </div>
            </div>
            {/* 포지션 탭 */}
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-3">
              {ROLES.map((role) => {
                const player = team.players.find((p) => p.role === role);
                const isActive = selectedRole === role;
                const isPlaceholder = player?.isPlaceholder;

                return (
                  <>
                    <button
                      key={role}
                      type="button"
                      onClick={() => setSelectedRole(role)}
                      className={`flex min-w-[120px] flex-1 items-center justify-between rounded-full border px-3 py-2 text-left text-xs transition
                      ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-neutral-900/80 text-neutral-200"
                      }
                      ${isPlaceholder ? "opacity-70" : ""}
                      `}
                    >
                      <span className="font-semibold tracking-[0.18em]">
                        {role}
                      </span>
                      <span className="ml-2 truncate text-[11px] text-neutral-400">
                        {player
                          ? isPlaceholder
                            ? "TBD"
                            : player.name
                          : "NO PLAYER"}
                      </span>
                    </button>
                  </>
                );
              })}
            </div>
          </aside>
          {/* 우측 배경 RepeatedOutlineText + PlayerCard */}
          <main className="relative flex-1">
            {/* 배경 텍스트 */}
            {selectedPlayer && (
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-20">
                <RepeatedOutlineText
                  text={
                    selectedPlayer.isPlaceholder
                      ? "COMING SOON"
                      : selectedPlayer.name.toUpperCase()
                  }
                  repeat={3}
                  className="text-center"
                  fillColor=""
                />
              </div>
            )}
            {/* 실제 카드 */}
            <div className="relative max-auto max-w-md lg:ml-auto lg:mr-8">
              {selectedPlayer && (
                <PlayerCard player={selectedPlayer} team={team} />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
