import React from "react";
import { C, BORDER_W, shadow45 } from "@/lib/constants";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  badge?: string;
}

export const SectionHeader = ({ kicker, title, badge }: SectionHeaderProps) => (
  <div className="mb-6">
    {kicker && (
      <div className="uppercase text-sm font-black tracking-widest" style={{ color: C.ink }}>{kicker}</div>
    )}
    <h2 className="text-4xl md:text-5xl font-black leading-tight mt-1" style={{ color: C.ink }}>{title}</h2>
    {badge && (
      <span className={`inline-block mt-3 px-3 py-1 text-sm font-extrabold uppercase rounded-lg`}
            style={{ background: C.lime, borderColor: C.ink, borderStyle: "solid", borderWidth: BORDER_W, boxShadow: shadow45 }}>{badge}</span>
    )}
  </div>
);
