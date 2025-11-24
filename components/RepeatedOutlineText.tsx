"use client";

import clsx from "clsx";

type RepeatedOutlineTextProps = {
  text: string;
  repeat?: number;
  className?: string;
  align?: "left" | "center" | "right" /** 텍스트 정렬 */;
  fillColor: string /** 채워진 텍스트 색 */;
  strokeColor?: string /** 아웃라인 텍스트 stroke 색 */;
};

export function RepeatedOutlineText({
  text,
  repeat = 4,
  className,
  align = "left",
  fillColor = "#ffffff",
  strokeColor = "#ffffff",
}: RepeatedOutlineTextProps) {
  const alignClass =
    align === "center"
      ? "items-center"
      : align === "right"
      ? "items-end"
      : "items-start";
  return (
    <div
      className={clsx(
        "flex flex-col gap-1 leading-none select-none",
        alignClass,
        className
      )}
    >
      {Array.from({
        length: repeat,
      }).map((_, idx) => (
        <div
          key={idx}
          className="leading-[-0.8px] flex itmes-baseline uppercase tracking-[-0.2em]"
        >
          {/* 꽉 찬 텍스트 */}
          <span
            className="font-extrabold text-[32px] sm:text-[40px] md:text-[56px] lg:text-[120px]"
            style={{ color: fillColor }}
          >
            {text}
          </span>
          {/* 테두리만 있는 텍스트 */}
          <span
            className="font-extrabold text-[32px] sm:text-[40px] md:text-[56px] lg:text-[120px]"
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${strokeColor}`,
            }}
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
