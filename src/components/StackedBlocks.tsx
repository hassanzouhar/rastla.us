"use client";

import React from "react";
import { motion } from "framer-motion";
import { C, BORDER_W, shadow45 } from "@/lib/constants";

export const StackedBlocks = () => (
  <div className="relative h-[300px] w-full">
    <motion.div
      initial={{ y: 0, rotate: -4 }}
      animate={{ y: [-4, 4, -4], rotate: -4 }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="absolute left-0 top-8 h-36 w-56"
    >
      <div style={{ boxShadow: shadow45, borderColor: C.ink, background: C.neon, borderStyle: "solid", borderWidth: BORDER_W }}
           className={`h-full w-full rounded-xl`}/>
    </motion.div>
    <motion.div
      initial={{ y: 0, rotate: 6 }}
      animate={{ y: [6, -6, 6], rotate: 6 }}
      transition={{ repeat: Infinity, duration: 7 }}
      className="absolute left-24 top-24 h-40 w-64"
    >
      <div style={{ boxShadow: shadow45, borderColor: C.ink, background: C.blue, borderStyle: "solid", borderWidth: BORDER_W }}
           className={`h-full w-full rounded-xl`}/>
    </motion.div>
    <motion.div
      initial={{ y: 0, rotate: 2 }}
      animate={{ y: [-3, 3, -3], rotate: 2 }}
      transition={{ repeat: Infinity, duration: 5.5 }}
      className="absolute left-48 top-2 h-32 w-52"
    >
      <div style={{ boxShadow: shadow45, borderColor: C.ink, background: C.magenta, borderStyle: "solid", borderWidth: BORDER_W }}
           className={`h-full w-full rounded-xl`}/>
    </motion.div>
  </div>
);
