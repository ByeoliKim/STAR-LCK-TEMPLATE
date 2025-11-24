"use client";
import ShinyText from "@/components/ShinyText";

export default function Footer() {
  return (
    <>
      <footer className="py-6">
        <div className="flex justify-center items-center">
          <ShinyText
            text="© 2025 KIM STAR. All rights reserved."
            speed={3}
            disabled={false}
            className="text-sm"
          />
        </div>
      </footer>
    </>
  );
}
