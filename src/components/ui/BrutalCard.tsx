import React from "react";
import { C, BORDER_W, shadow45 } from "@/lib/constants";

interface BrutalCardProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const BrutalCard = ({ className = "", style, children }: BrutalCardProps) => (
  <div
    className={`bg-white rounded-xl p-5 ${className}`}
    style={{ boxShadow: shadow45, borderColor: C.ink, borderStyle: "solid", borderWidth: BORDER_W, ...style }}
  >
    {children}
  </div>
);
