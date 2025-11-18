import React from "react";
import { BrutalCard } from "./ui/BrutalCard";
import { C, BORDER_W, shadow45 } from "@/lib/constants";
import { IconPersonaA } from "./icons/TeamIcons";

interface TeamCardProps {
  name: string;
  role: string;
  Icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

export const TeamCard = ({ name, role, Icon = IconPersonaA }: TeamCardProps) => (
  <BrutalCard className="flex items-center gap-4">
    <div className="shrink-0">
      <div className="grid place-items-center h-14 w-14 rounded-xl bg-white" style={{ borderColor: C.ink, borderStyle: "solid", borderWidth: BORDER_W, boxShadow: shadow45, color: C.ink }}>
        <Icon size={24} strokeWidth={2} />
      </div>
    </div>
    <div>
      <div className="font-extrabold text-lg uppercase tracking-wide">{name}</div>
      <div className="font-semibold opacity-80">{role}</div>
    </div>
  </BrutalCard>
);
