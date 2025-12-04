"use client";
import Link from "next/link";
import { TEAM_CONFIGS } from "@/lib/config/teams";
import StarIcon from "@/components/StarIcon";

export default function Header() {
  const team = TEAM_CONFIGS.t1;
  return (
    <>
      <header className="fixed w-[calc(100%-40px)] flex flex-col gap-4 justify-end md:flex-row items-end py-4 m-5 bg-transparent z-50">
        <div className="relative flex items-center justify-center w-[40px]">
          <Link href="/">
            <div className="group cursor-pointer inline-block">
              <StarIcon className="star-logo w-10 h-10 text-white rotate-15 transition-transform duration-200 group-hover:animate-spin-star" />
            </div>
          </Link>
          <ul className="absolute inset-0 transform translate-y-[60px] uppercase text-center text-sm tracking-tighter text-amber-50">
            <li>
              <Link href="/favorites">🩶</Link>
            </li>
            <li>
              <Link href="/teams/t1">T1</Link>
            </li>
            <li>
              <Link href="/teams/geng">geng</Link>
            </li>
            <li>
              <Link href="/teams/kt">kt</Link>
            </li>
            <li>
              <Link href="/teams/hle">hle</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
