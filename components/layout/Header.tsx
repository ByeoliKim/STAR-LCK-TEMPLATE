"use client";

import { TEAM_CONFIGS } from "@/lib/config/teams";

export default function Header() {
  const team = TEAM_CONFIGS.t1;
  return (
    <>
      {/* 헤더 */}
      {/* backdrop-blur-xs */}
      <header className="fixed w-[calc(100%-40px)] flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 m-5 bg-white rounded z-50">
        <div>
          <h1 className="text-black-50 text-3xl font-bold tracking-tight md:text-4xl">
            {team.name} Roster Template
          </h1>
          <p className="mt-2 text-sm text-blue-950">{team.slogan}</p>
        </div>
      </header>
    </>
  );
}
