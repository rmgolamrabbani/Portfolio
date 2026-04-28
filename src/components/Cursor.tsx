"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(cursor.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor.current, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
