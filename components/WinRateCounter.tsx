"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

type WinRateCounterProps = {
  value: number;
  accentColor?: string;
};

export function WinRateCounter({
  value,
  accentColor = "#fff",
}: WinRateCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  // 이 엘리먼트가 뷰포트 안에 들어왔는지
  const inView = useInView(ref, {
    once: false,
    amount: 0.6,
  });

  const [displayValue, setDisplayValue] = useState(0);
  const lastValueRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    // 0 -> value 까지 숫자 애니메이션

    const controls = animate(0, value, {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        // 정수로 반올림해서만 업데이트 → 깔끔하게 "1, 2, 3..." 올라가는 느낌
        const rounded = Math.round(latest);

        // 값이 실제로 바뀔 때만 setState → 불필요한 리렌더 줄이기
        if (rounded !== lastValueRef.current) {
          lastValueRef.current = rounded;
          setDisplayValue(rounded);
        }
      },
    });
    return () => {
      controls.stop();
    };
  }, [inView, value]);

  return (
    <motion.span
      ref={ref}
      style={{ color: accentColor }}
      className="tabular-nums" // 숫자폭고정
    >
      {displayValue}
    </motion.span>
  );
}
