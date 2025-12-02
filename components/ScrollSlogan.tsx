"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollSloganProps = {
  slogan: string;
  primaryColor: string;
};

export function ScrollSlogan({ slogan, primaryColor }: ScrollSloganProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 섹션이 뷰포트 안에 들어오면 0 에서 1로 진행됨
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // 섹션 top 이 화면 bottom 으로 오면 0,
    // 섹션 bottom 이 화면 top 으로 오면 1,
  });

  // 메인 텍스트 (큰 슬로건) 의 y, 투명, 스케일
  const yMain = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  // 뒤에서 교차로 흘러가는 텍스트
  const yGhostTop = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const yGhostBottom = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32 h-80">
      {/* 배경 교차 텍스트 두줄 */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity }}
      >
        <motion.p
          className="absolute left-[-10%] top-1/3 whitespace-nowrap text-5xl font-extrabold uppercase tracking-[0.4em] opacity-20 md:text-7xl"
          style={{
            y: yGhostTop,
          }}
        >
          {slogan}
        </motion.p>
        <motion.p
          className="absolute right-[-10%] bottom-1/4 whitespace-nowrap text-5xl font-extrabold uppercase tracking-[0.4em] opacity-10 md:text-7xl"
          style={{
            y: yGhostBottom,
          }}
        >
          {slogan}
        </motion.p>
      </motion.div>
      {/* 중앙 메인 슬로건 */}
      <div className="relative flex items-center justify-center">
        <motion.h2
          className="max-w-4xl px-4 text-center text-3xl font-semibold uppercase leading-tight md:text-4xl lg:text-5xl"
          style={{
            y: yMain,
            opacity,
            scale,
            color: primaryColor,
          }}
        >
          {slogan}
        </motion.h2>
      </div>
    </section>
  );
}
