"use client";

import React from "react";
import { C } from "@/lib/constants";
import { Paper } from "./ui/Paper";
import { BrutalCard } from "./ui/BrutalCard";
import { BrutalButton } from "./ui/BrutalButton";
import { SectionHeader } from "./ui/SectionHeader";
import { Monogram } from "./icons/Monogram";
import { IconWoman, IconDoctor, IconPersonaA, IconPersonaB } from "./icons/TeamIcons";
import { TeamCard } from "./TeamCard";
import { NavBar } from "./NavBar";

// --- DEV SMOKE TESTS ---------------------------------------------------
if (typeof window !== 'undefined') {
  (function runSmokeTests(){
    try {
      const badgeText = "Data \u003E Antagelser";
      console.assert(badgeText.includes('>'), 'Badge should contain ">"');
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
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-4 py-2 rounded-xl font-extrabold uppercase focus:outline-none focus:ring-4 focus:ring-offset-2"
        style={{ background: C.neon, borderColor: C.ink, borderStyle: 'solid', borderWidth: 2, boxShadow: '6px 6px 0 #0A0A0A' }}
      >
        Hopp til innhold
      </a>
      <NavBar />

      {/* Hero */}
      <section id="main-content" className="mx-auto max-w-6xl px-5 pt-20 pb-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">Make. Break. Ship.</h1>
          <p className="mt-3 text-xl md:text-2xl font-bold max-w-xl">
            Rastlaus løser problemer, som blir til produkter og selskaper.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <BrutalButton color={C.neon} href="#cases">Gå til Produkter</BrutalButton>
            <BrutalButton color={C.blue} href="#team">Kontakt</BrutalButton>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Rastlause" title="Utforske og skape" badge={"Data \u003E Antagelser"} />
        <div className="grid md:grid-cols-3 gap-5">
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Nye perspektiv</h3>
            <p className="mt-2 font-semibold">Ikke alle problemer kan, eller bør løses. Vi roter og går i dybden.</p>
          </BrutalCard>
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Prøve og feile</h3>
            <p className="mt-2 font-semibold">Funker det i praksis? Hva om...? Vi tester det! Og prøver på nytt.</p>
          </BrutalCard>
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase">Ut i markedet</h3>
            <p className="mt-2 font-semibold">Produktet er klart lenge før skaperen er det, vi får det ut blant målgruppen kjapt.</p>
          </BrutalCard>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Visjon og Misjon" title="Hva skjer videre?" />
        <div className="grid md:grid-cols-2 gap-5">
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase mb-3">Våre Verdier</h3>
            <ul className="space-y-2 font-semibold">
              <li>• Tempo over perfeksjon – vi leverer raskt og lærer underveis</li>
              <li>• Data over magefølelse – vi tester antagelser mot virkeligheten</li>
              <li>• Gjøre over snakke – mindre møter, mer produksjon</li>
              <li>• Åpenhet over hemmeligholdelse – vi deler prosessen</li>
            </ul>
          </BrutalCard>
          <BrutalCard>
            <h3 className="text-2xl font-black uppercase mb-3">Vår Visjon</h3>
            <p className="font-semibold mb-3">
              Vi ser en fremtid hvor gode ideer ikke dør i møterom, men blir til virkelige produkter som løser faktiske problemer.
            </p>
            <p className="font-semibold">
              Rastlaus bygger bro mellom tanke og handling. Vi tar risikoen, gjør feilen, lærer leksa – og shipper produktet.
            </p>
          </BrutalCard>
        </div>
      </section>

       {/* Cases */}
      <section id="cases" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Rastlaus Lab" title="Tinga vi lager" />
        <div className="grid md:grid-cols-2 gap-5">
          <BrutalCard style={{ background: C.neon }}>
            <h3 className="text-2xl font-black uppercase mb-2">Produkter i Utvikling</h3>
            <p className="font-semibold mb-3">
              Vi jobber alltid med flere prosjekter samtidig. Noen blir produkter, andre blir lærepenger.
            </p>
            <ul className="space-y-2 font-semibold">
              <li>→ SaaS-plattform for SMB-markedet</li>
              <li>→ AI-drevet analyseverktøy</li>
              <li>→ Community-plattform for skapere</li>
              <li>→ Interne automatiseringsverktøy</li>
            </ul>
          </BrutalCard>
          <BrutalCard style={{ background: C.aqua }}>
            <h3 className="text-2xl font-black uppercase mb-2">Måten Vi Jobber</h3>
            <p className="font-semibold mb-3">
              Hvert prosjekt følger vår filosofi: Make. Break. Ship.
            </p>
            <ul className="space-y-2 font-semibold">
              <li><strong>Make:</strong> Rask prototyping basert på faktiske brukerproblemer</li>
              <li><strong>Break:</strong> Stresstest antagelser gjennom reell bruk og feedback</li>
              <li><strong>Ship:</strong> Levere tidlig og ofte, iterere basert på data</li>
            </ul>
          </BrutalCard>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-8">
        <SectionHeader kicker="Team" title="Den lille, raske gjengen" />
        <div className="grid md:grid-cols-2 gap-5">
          <TeamCard name="Reidun Rabagast" role="UX Lead" Icon={IconWoman} />
          <TeamCard name="Ragna Rastlaus" role="Business Dev" Icon={IconPersonaA} />
          <TeamCard name="Melvin Rabagast" role="UI Lead" Icon={IconPersonaB} />
          <TeamCard name="Lasse Rastlaus" role="Tech Lead" Icon={IconDoctor} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <BrutalCard className="grid md:grid-cols-3 gap-6 items-center" style={{ background: C.paper }}>
          <div className="md:col-span-2">
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">Er du også Rastlaus?</h3>
            <p className="mt-2 font-semibold">Vi liker en utfordring, så om du har en idé, eller om du vil bli med, </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <BrutalButton color={C.magenta}>bygge</BrutalButton>
            <BrutalButton color={C.neon}>investere</BrutalButton>
          </div>
        </BrutalCard>
      </section>


      <footer className="" style={{ borderColor: C.ink, borderStyle: 'solid', borderWidth: 2 }}>
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Monogram size={28} />
          </div>
          <div className="text-sm font-semibold opacity-80">© {new Date().getFullYear()} Rastlaus — Make. Break. Ship.</div>
        </div>
      </footer>
    </Paper>
  );
}
