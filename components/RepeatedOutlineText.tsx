"use client";

import clsx from "clsx";

type RepeatedOutlineTextProps = {
  text: string;
  repeat?: number; // 세로 반복
  horizontalRepeat?: number; // 가로 반복
  className?: string;
  align?: "left" | "center" | "right" /** 텍스트 정렬 */;
  fillColor: string /** 채워진 텍스트 색 */;
  strokeColor?: string /** 아웃라인 텍스트 stroke 색 */;
};

export function RepeatedOutlineText({
  text,
  repeat = 4,
  horizontalRepeat = 4,
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
        "flex flex-col gap-1 leading-none select-none bg-black",
        alignClass,
        className
      )}
    >
      {Array.from({
        length: repeat,
      }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex itmes-baseline leading-[-0.8px] uppercase tracking-[-0.2em]"
        >
          {Array.from({ length: horizontalRepeat }).map((_, index) => (
            <span
              key={index}
              className="font-extrabold text-[32px] sm:text-[40px] md:text-[56px] lg:text-[120px] mr-2"
              style={{
                color: index % 2 === 0 ? fillColor : "transparent",
                WebkitTextStroke:
                  index % 2 === 1 ? `1.5px ${strokeColor}` : undefined,
              }}
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
