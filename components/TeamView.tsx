"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Team, LolRole } from "@/lib/config/teams";
import { PlayerCard } from "./PlayerCard";
import { RepeatedOutlineText } from "./RepeatedOutlineText";
import { ScrollSlogan } from "./ScrollSlogan";

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

  const ROLE_TABS = [
    {
      key: "TOP",
      label: "TOP",
      icon: "/positions/top.svg",
    },
    {
      key: "JGL",
      label: "JUNGLE",
      icon: "/positions/jgl.svg",
    },
    {
      key: "MID",
      label: "MID",
      icon: "/positions/mid.svg",
    },
    {
      key: "BOT",
      label: "BOT",
      icon: "/positions/bot.webp",
    },
    {
      key: "SPT",
      label: "SUPPORT",
      icon: "/positions/spt.svg",
    },
  ] as const;

  return (
    <>
      <div
        className="min-h-screen px-4 py-10 text-white mix-blend-difference"
        style={{
          background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`,
        }}
      >
        <div className="mx-auto h-[94vh] flex max-w-6xl flex-col gap-10 lg:flex-col">
          {/* 좌측 포지션 탭 */}
          <aside className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 bg-[#00000078] px-4 py-6">
            {ROLE_TABS.map(({ key, icon }) => {
              const player = team.players.find((p) => p.role === key);
              const isActive = selectedRole === key;
              const isPlaceholder = player?.isPlaceholder;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`cursor-pointer flex h-16 w-16 items-center justify-center rounded-full transition
          ${
            isActive
              ? "bg-white text-black"
              : "bg-neutral-900/80 text-neutral-200"
          }
          ${isPlaceholder ? "opacity-60" : ""}
        `}
                >
                  <Image
                    src={icon}
                    alt={key}
                    width={40}
                    height={40}
                    className={isActive ? "opacity-100" : "opacity-70"}
                  />
                </button>
              );
            })}
          </aside>
          {/* RepeatedOutlineText + PlayerCard */}
          <main className="relative flex items-center justify-center h-full">
            {/* player 프로필 */}
            {selectedPlayer && (
              <div className="relative w-full z-1">
                <PlayerCard player={selectedPlayer} team={team} />
              </div>
            )}
            {/* player name text repeat  */}
            {selectedPlayer && (
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-start mix-blend-multiply overflow-hidden">
                <RepeatedOutlineText
                  text={
                    selectedPlayer.isPlaceholder
                      ? "COMING SOON"
                      : selectedPlayer.name.toUpperCase()
                  }
                  repeat={5}
                  horizontalRepeat={8}
                  className="text-center"
                  fillColor=""
                />
              </div>
            )}
          </main>
        </div>
        <ScrollSlogan slogan={team.slogan} primaryColor={team.colors.accent} />
      </div>
    </>
  );
}
