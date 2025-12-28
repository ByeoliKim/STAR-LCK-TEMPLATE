"use client";

export default function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <span className="text-xs text-zinc-500">{subtitle}</span>}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
