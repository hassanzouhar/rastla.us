// Color tokens
export const C = {
  ink: "#0A0A0A",
  paper: "#FAFAF5",
  neon: "#F7FF00",
  blue: "#3A86FF",
  magenta: "#FF2E88",
  aqua: "#2DE2E6",
  orange: "#FF6A3D",
  lime: "#C8FF00",
} as const;

// Global thickness tweaks
export const BORDER_W = 2; // thinner borders
export const SHADOW_OFFSET = 6; // tighter brutal shadow
export const shadow45 = `${SHADOW_OFFSET}px ${SHADOW_OFFSET}px 0 ${C.ink}`;
