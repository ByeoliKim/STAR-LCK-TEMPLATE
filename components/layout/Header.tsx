"use client";
import Link from "next/link";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import StarIcon from "@/components/StarIcon";

export default function Header() {
  const team = TEAM_CONFIGS.t1;
  return (
    <>
      {/* 헤더 */}
      {/* backdrop-blur-xs */}
      <header className="fixed w-[calc(100%-40px)] flex flex-col gap-4 justify-end md:flex-row items-end p-4 m-5 bg-transparent z-50">
        <StarIcon className="star-logo w-10 h-10 text-yellow-400 rotate-15" />
      </header>
    </>
  );
}
