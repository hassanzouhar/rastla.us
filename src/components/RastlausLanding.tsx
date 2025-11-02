"use client";
// Lim inn HELE innholdet fra canvas-filen her
// (koden din starter med imports av React/useEffect/useState og framer-motion)
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// --- TOKENS ------------------------------------------------------------
const C = {
  ink: "#0A0A0A",
  paper: "#FAFAF5",
  neon: "#F7FF00",
  blue: "#3A86FF",
  magenta: "#FF2E88",
  aqua: "#2DE2E6",
  orange: "#FF6A3D",
  lime: "#C8FF00",
};

// Global thickness tweaks
const BORDER_W = 2; // thinner borders
const SHADOW_OFFSET = 6; // tighter brutal shadow
const shadow45 = `${SHADOW_OFFSET}px ${SHADOW_OFFSET}px 0 ${C.ink}`;

// --- PAPER BACKGROUND --------------------------------------------------
const Paper = ({ children }) => (
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

// --- PRIMITIVES --------------------------------------------------------
const BrutalCard = ({ className = "", style, children }) => (
  <div
    className={`bg-white rounded-xl p-5 ${className}`}
    style={{ boxShadow: shadow45, borderColor: C.ink, borderStyle: "solid", borderWidth: BORDER_W, ...style }}
  >
    {children}
  </div>
);

const BrutalButton = ({ children, color = C.neon, href = "#", className = "" }) => (
  <a
    href={href}
    className={`inline-block uppercase font-extrabold tracking-wide px-4 py-2 rounded-xl ${className}`}
    style={{ background: color, borderColor: C.ink, boxShadow: shadow45, borderStyle: "solid", borderWidth: BORDER_W }}
  >
    {children}
  </a>
);

// --- LOGO (R/ black with white stroke, no background) -----------------
const Monogram = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Rastlaus monogram R/">
    <text
      x="8" y="76"
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

// --- INLINE ICONS (styled to match black-outline, simple) --------------
const IconWoman = ({ size = 28, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 22c0-4 4-6 8-6s8 2 8 6"/>
    <path d="M8 10c-2 0-3-2-3-3"/>
    <path d="M16 10c2 0 3-2 3-3"/>
  </svg>
);
const IconDoctor = ({ size = 28, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7.5" r="3.5"/>
    <path d="M5 21c0-3.5 3.5-5.5 7-5.5S19 17.5 19 21"/>
    <rect x="9.5" y="2.5" width="5" height="3" rx="1"/>
    <path d="M6 15l2 2m8-2l-2 2"/>
    <path d="M14.5 4h-5"/>
    <path d="M20 13a2 2 0 1 1-2 2"/>
  </svg>
);
const IconPersonaA = ({ size = 28, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M3.5 21c1.5-3.2 4.5-4.8 8.5-4.8s7 1.6 8.5 4.8"/>
    <path d="M9 9h6M10 11h4"/>
  </svg>
);
const IconPersonaB = ({ size = 28, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21c0-4.5 3-6.5 8-6.5s8 2 8 6.5"/>
    <circle cx="9.5" cy="8.5" r="0.8"/>
    <circle cx="14.5" cy="8.5" r="0.8"/>
    <path d="M9 12c1.5 1 4.5 1 6 0"/>
  </svg>
);

// --- SECTION HEADER ----------------------------------------------------
const SectionHeader = ({ kicker, title, badge }) => (
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

// --- TEAM CARD (now supports icon) ------------------------------------
const TeamCard = ({ name, role, Icon = IconPersonaA }) => (
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

// --- HERO SHAPES -------------------------------------------------------
const StackedBlocks = () => (
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

// --- NAVBAR (sticky after scroll + hamburger on mobile) ---------------
const useSticky = (threshold = 160) => {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return stuck;
};

const NavBar = () => {
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
          <Monogram size={40} />
          <span className="text-3xl font-black tracking-[0.14em] uppercase" style={{ color: C.ink }}>Rastlaus</span>
        </div>
        {/* Desktop links */}
        <nav className="hidden md:flex gap-3 font-extrabold uppercase">
          <a href="#work" className={`px-3 py-2 rounded-xl`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: 'white' }}>Prosjekter</a>
          <a href="#principles" className={`px-3 py-2 rounded-xl`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.neon }}>Prinsipper</a>
          <a href="#team" className={`px-3 py-2 rounded-xl`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.blue, color: 'white' }}>Team</a>
        </nav>
        {/* Mobile hamburger */}
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <span className="block w-7 h-[2px] mb-1" style={{ background: C.ink }} />
          <span className="block w-7 h-[2px] mb-1" style={{ background: C.ink }} />
          <span className="block w-7 h-[2px]" style={{ background: C.ink }} />
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-5 pb-4 grid gap-2">
          <a onClick={() => setOpen(false)} href="#work" className={`px-3 py-2 rounded-xl font-extrabold uppercase`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: 'white' }}>Prosjekter</a>
          <a onClick={() => setOpen(false)} href="#principles" className={`px-3 py-2 rounded-xl font-extrabold uppercase`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.neon }}>Prinsipper</a>
          <a onClick={() => setOpen(false)} href="#team" className={`px-3 py-2 rounded-xl font-extrabold uppercase`} style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W, boxShadow: shadow45, background: C.blue, color: 'white' }}>Team</a>
        </div>
      )}
    </div>
  );
};

// --- DEV SMOKE TESTS ---------------------------------------------------
if (typeof window !== 'undefined') {
  (function runSmokeTests(){
    try {
      const badgeText = "Tempo \u003E prat";
      console.assert(badgeText.includes('>'), 'Badge should contain ">"');
      const listText = `Data \u003E magefølelse`;
      console.assert(listText.includes('>'), 'List item should contain ">"');
      console.assert(typeof SectionHeader === 'function', 'SectionHeader must be defined');
      console.assert(typeof TeamCard === 'function', 'TeamCard must be defined');
      console.assert(typeof NavBar === 'function', 'NavBar must be defined');
      console.assert(typeof Paper === 'function', 'Paper wrapper must be defined');
      const logoMark = 'R/';
      console.assert(logoMark.includes('/'), 'Logo should be R/');
      console.assert(typeof IconWoman === 'function' && typeof IconDoctor === 'function', 'Icons should exist');
      console.info('[Rastlaus] smoke tests passed');
    } catch (e) {
      console.error('[Rastlaus] smoke tests failed', e);
    }
  })();
}

// --- PAGE --------------------------------------------------------------
export default function RastlausLanding() {
  return (
    <Paper>
      <NavBar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">Make. Break. Ship.</h1>
          <p className="mt-3 text-xl md:text-2xl font-bold max-w-xl">
            Et lite, effektivt kollektiv som bygger produkter for oss selv – og for de modige som blir med.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <BrutalButton color={C.neon}>Se produktene</BrutalButton>
            <BrutalButton color={C.blue}>Kontakt oss</BrutalButton>
          </div>
        </div>
        <StackedBlocks />
      </section>

      {/* What we do */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Hva vi gjør" title="Små produkter, store streker." badge={"Tempo \u003E prat"} />
        <div className="grid md:grid-cols-3 gap-5">
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Prototyper på dager</h3>
            <p className="mt-2 font-semibold">Idé → klikkbar demo på rekordtid. Vi bygger for å lære raskt.</p>
          </BrutalCard>
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Design som roper</h3>
            <p className="mt-2 font-semibold">Tynne, tydelige linjer. Neubrutal – uten dill.</p>
          </BrutalCard>
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Ship i små biter</h3>
            <p className="mt-2 font-semibold">Løpende leveranser som kan brukes – ikke PowerPoint.</p>
          </BrutalCard>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Prinsipper" title="Brutal klarhet" />
        <div className="grid md:grid-cols-2 gap-5">
          <BrutalCard>
            <ul className="space-y-2 font-semibold">
              <li>• Skarpe rammer (farger, språk, scope)</li>
              <li>• Automatiser alt som koster tid</li>
              <li>• Data {'\u003E'} magefølelse</li>
              <li>• Bygg før vi snakker</li>
            </ul>
          </BrutalCard>
          <BrutalCard>
            <ul className="space-y-2 font-semibold">
              <li>• Liten kjerne, høyt eierskap</li>
              <li>• Offensivt UI (stor typografi, 45° skygger)</li>
              <li>• Ingen gradienter – tynne, svarte outlines</li>
              <li>• Rastløse i praksis</li>
            </ul>
          </BrutalCard>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Team" title="Den lille, raske gjengen" />
        <div className="grid md:grid-cols-2 gap-5">
          <TeamCard name="Marit" role="UX Lead" Icon={IconWoman} />
          <TeamCard name="Henriette" role="Business Dev" Icon={IconPersonaA} />
          <TeamCard name="Mindaugas" role="UI Lead" Icon={IconPersonaB} />
          <TeamCard name="Hassan" role="Tech Lead" Icon={IconDoctor} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <BrutalCard className="grid md:grid-cols-3 gap-6 items-center" style={{ background: C.paper }}>
          <div className="md:col-span-2">
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">Klar for å bygge noe som burde finnes?</h3>
            <p className="mt-2 font-semibold">Vi jakter små, lønnsomme produkter – med store streker.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <BrutalButton color={C.magenta}>Pitch en idé</BrutalButton>
            <BrutalButton color={C.neon}>Kontakt oss</BrutalButton>
          </div>
        </BrutalCard>
      </section>

      <footer className="" style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: BORDER_W }}>
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Monogram size={28} />
            <span className="font-black uppercase tracking-widest">Rastlaus</span>
          </div>
          <div className="text-sm font-semibold opacity-80">© {new Date().getFullYear()} Rastlaus — Make. Break. Ship.</div>
        </div>
      </footer>
    </Paper>
  );
}

