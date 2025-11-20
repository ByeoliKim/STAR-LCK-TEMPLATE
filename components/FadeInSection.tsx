// components/FadeInSection.tsx
"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInSectionpProps = {
  children: ReactNode;
  // 살짝 딜레이 주고 싶을 때 (초 단위)
  delay?: number;
  // 아래에서 위로 / 왼쪽에서 오른쪽 등 방향
  direction?: "up" | "down" | "left" | "right";
};

export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
}: FadeInSectionpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true, // 한 번만 애니메이션
    margin: "-100px 0px", // 살짝 일찍 트리거되게
  });
  const distance = 40;
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getInitialTransform(),
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              ...getInitialTransform(),
            }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1], // 조금 탄성 있는 이징
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
