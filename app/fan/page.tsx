import DashboardBlock from "@/components/charts/DashboardBlock";

export default function FanPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h2 className="mb-2 text-2xl font-bold">Fan Dashboard</h2>
      <p className="mb-6 text-sm text-zinc-600">
        사용자들의 데이터를 기반으로 노출시킵니다.
      </p>
      <DashboardBlock />
    </main>
  );
}
