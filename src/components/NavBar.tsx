"use client";

import React, { useEffect, useState } from "react";
import { useSticky } from "@/hooks/useSticky";
import { Monogram } from "./icons/Monogram";
import { C, BORDER_W, shadow45 } from "@/lib/constants";

export const NavBar = () => {
  const stuck = useSticky(160);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className={`${stuck ? 'fixed top-0 left-0 right-0' : ''}`} style={{ background: stuck ? 'rgba(255,255,255,0.95)' : 'transparent', borderColor: C.ink, borderBottomStyle: 'solid', borderBottomWidth: stuck ? BORDER_W : 0, backdropFilter: stuck ? 'saturate(120%) blur(6px)' : undefined, zIndex: 50 }}>
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Monogram size={48} />
        </div>
        {/* Desktop links */}
        <nav className="hidden md:flex gap-3 font-extrabold uppercase">
          <a href="#work" className={`px-3 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: 'white' }}>Prosjekter</a>
          <a href="#principles" className={`px-3 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.neon }}>Prinsipper</a>
          <a href="#team" className={`px-3 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.blue, color: 'white' }}>Team</a>
        </nav>
        {/* Mobile hamburger */}
        <button className="md:hidden focus:outline-none focus:ring-4 focus:ring-offset-2 rounded transition-all" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <span className="block w-7 h-[2px] mb-1" style={{ background: C.ink }} />
          <span className="block w-7 h-[2px] mb-1" style={{ background: C.ink }} />
          <span className="block w-7 h-[2px]" style={{ background: C.ink }} />
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-5 pb-4 grid gap-2">
          <a onClick={() => setOpen(false)} href="#work" className={`px-3 py-2 rounded-xl font-extrabold uppercase focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: 'white' }}>Prosjekter</a>
          <a onClick={() => setOpen(false)} href="#principles" className={`px-3 py-2 rounded-xl font-extrabold uppercase focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.neon }}>Prinsipper</a>
          <a onClick={() => setOpen(false)} href="#team" className={`px-3 py-2 rounded-xl font-extrabold uppercase focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.blue, color: 'white' }}>Team</a>
        </div>
      )}
    </div>
  );
};
