import Image from "next/image";
import mainBanner from "@/public/main/main_visual.png";
import { RepeatedOutlineText } from "@/components/RepeatedOutlineText";

export default function HomePage() {
  return (
    <>
      <main className="relative pt-10 sm:pt-5 min-h-screen overflow-hidden bg-black text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.05), transparent 60%),
            radial-gradient(circle at 85% 80%, rgba(255,255,255,0.04), transparent 60%)
          `,
          }}
        />
        {/* 중앙 흐릿한 라이트 밴드 */}
        <div className="pointer-events-none absolute inset-x-[-15%] top-1/2 h-[45%] -translate-y-1/2 bg-linear-to-r from-white/10 via-white/0 to-white/10 opacity-[0.28] blur-[120px]" />
        {/* 노이즈 텍스처 */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay">
          <div className="h-full w-full bg-[url('/noise.png')] bg-repeat" />
        </div>

        <div className="">
          <div className="relative w-full max-w-5xl flex flex-col min-h-screen items-center justify-center m-auto overflow-hidden">
            <h2 className="flex w-full mb-8 pb-2 text-left text-5xl font-black tracking-tighter border-b">
              STAR TEMPLATE.
              <strong
                style={{
                  marginLeft: "auto",
                }}
              >
                LCK Ver.
              </strong>
            </h2>
            <section className="relative lg:translate-y-[-4em] md:translate-y-[-3em] sm:translate-y-[-2em] z-10">
              <div className="">
                <Image src={mainBanner} alt="main banner" width={800} />
              </div>
            </section>
            <div className="absolute lg:translate-y-[2em] md:translate-y-[-3em] sm:translate-y-[-2em] w-full z-9">
              <RepeatedOutlineText
                text="KIMSTAR"
                repeat={5}
                align="left"
                fillColor="#ffffff"
                strokeColor="#6b7280"
                className="drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
