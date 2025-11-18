import React from "react";
import { C, BORDER_W } from "@/lib/constants";

export const Paper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen w-full relative" style={{ background: "linear-gradient(180deg,#FBFBF7 0%,#F7F5EF 100%)" }}>
    {/* subtle paper grain */}
    <div className="pointer-events-none absolute inset-0" style={{
      backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 0.5px, transparent 0.5px)",
      backgroundSize: "8px 8px",
      opacity: 0.04
    }} />
    {/* page contour */}
    <div className="relative mx-2 my-3 rounded-2xl" style={{ borderColor: C.ink, borderStyle: "solid", borderWidth: BORDER_W }}>
      {children}
    </div>
  </div>
);
