import React from "react";
import { C } from "@/lib/constants";

interface MonogramProps {
  size?: number;
}

export const Monogram = ({ size = 48 }: MonogramProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Rastlaus monogram R/">
    <text
      x="8" y="79"
      fontWeight="900"
      fontFamily="Bricolage Grotesque, Inter, system-ui, sans-serif"
      fontSize="76"
      fill={C.ink}
      stroke="#FFFFFF"
      strokeWidth="4"
      paintOrder="stroke fill"
    >
      R/
    </text>
  </svg>
);
