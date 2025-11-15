import React from "react";
import { C, BORDER_W, shadow45 } from "@/lib/constants";

interface BrutalButtonProps {
  children: React.ReactNode;
  color?: string;
  href?: string;
  className?: string;
}

export const BrutalButton = ({ children, color = C.neon, href = "#", className = "" }: BrutalButtonProps) => (
  <a
    href={href}
    className={`inline-block uppercase font-extrabold tracking-wide px-4 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all ${className}`}
    style={{ background: color, borderColor: C.ink, boxShadow: shadow45, borderStyle: "solid", borderWidth: BORDER_W }}
  >
    {children}
  </a>
);
