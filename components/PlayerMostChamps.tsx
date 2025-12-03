"use client";

// 모스트챔피언 TOP3 노출시키는 컴포넌트

import Image from "next/image";
import { motion } from "motion/react";
import type { MostChamp } from "@/lib/config/teams";
import { WinRateCounter } from "./WinRateCounter";

type PlayerMostChampsProps = {
  champs?: MostChamp[];
  accentColor?: string; // 팀 컬러
};

// 컨테이너: 자식들을 순차적으로(stagger) 등장시키는 용도
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // 챔프 카드 간 딜레이
    },
  },
};

// motion.h4 Most Champion 타이틀
const titleVariants = {
  hidden: { opacity: 0, x: -160 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "anticipate",
    },
  },
};
// 카드: index에 따라 다른 모션 (fan-out 효과)
// custom = 0,1,2 (왼, 중, 오른)
const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 30,
    scale: 0.8,
    rotate: index === 0 ? -10 : index === 2 ? 10 : 0,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: index === 1 ? 1.05 : 0.95, // 가운데 카드 강조
    rotate: index === 0 ? -4 : index === 2 ? 4 : 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.12, // 순차적으로 쫘르륵 등장
    },
  }),
};

export function PlayerMostChamps({
  champs,
  accentColor = "#ddd",
}: PlayerMostChampsProps) {
  // 데이터가 없으면 섹션 자체를 렌더링하지 않음
  if (!champs || champs.length === 0) return null;

  const top3 = champs.slice(0, 3);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // 스크롤이 뷰포트에 들어왔을 때 visible 상태로 전환
      viewport={{ once: false, amount: 0.3 }} // 30% 보이면 트리거, 한 번만 실행
      className="mt-20"
    >
      {/* 섹션 타이틀: 한글 + 약간의 letter-spacing으로 LCK 감성 */}
      <motion.h4
        variants={titleVariants}
        className="mb-3 text-5xl font-black text-white uppercase tracking-tighter"
      >
        Most Champion.
      </motion.h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">
        {top3.map((champ, index) => (
          <motion.div
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              rotate: 0,
              boxShadow: "0 18px 35px rgba(0,0,0,0.02)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            key={champ.key}
            className="relative aspect-4/5 overflow-hidden"
            style={{}}
          >
            {/* 챔피언 이미지 */}
            <Image
              src={champ.image}
              alt={champ.name}
              fill
              className="object-cover hover:scale-120 transition duration-600 ease-in"
            />
            {/* 챔피언 이름 + 승률 */}
            <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center">
              <p className="text-5xl font-black text-neutral-100 opacity-50">
                {champ.name}
                WIN RATE
              </p>

              <p
                className="text-7xl font-black"
                style={{ color: accentColor ?? "#cccccc" }}
              >
                <WinRateCounter
                  value={champ.winRate}
                  accentColor={accentColor}
                />
                %
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
