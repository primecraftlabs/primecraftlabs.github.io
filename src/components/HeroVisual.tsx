import Image from "next/image";
import type { CSSProperties } from "react";
import { heroChips, heroShots, type HeroShot } from "@/data/hero";

/** Rotate a list so each column starts on a different screen. */
function rotate<T>(list: T[], by: number): T[] {
  return [...list.slice(by % list.length), ...list.slice(0, by % list.length)];
}

function Phone({ shot }: { shot: HeroShot }) {
  return (
    <div className="soft-sm rounded-[1.6rem] p-1.5">
      <Image
        src={shot.src}
        alt=""
        width={500}
        height={1000}
        unoptimized
        className="aspect-[1/2] w-full rounded-[1.2rem] object-cover object-top"
      />
    </div>
  );
}

/** One endless column: the list twice in a row, moved by half its height in a loop (see .marquee-* in globals.css). */
function Column({ shots, direction, speed, className = "" }: { shots: HeroShot[]; direction: "up" | "down"; speed: number; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex flex-col ${direction === "up" ? "marquee-up" : "marquee-down"}`}
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        {[...shots, ...shots].map((shot, i) => (
          // spacing as padding INSIDE each item (not a flex gap), so both halves are exactly equal -> seamless loop
          <div key={`${shot.src}-${i}`} className="pb-5">
            <Phone shot={shot} />
          </div>
        ))}
      </div>
    </div>
  );
}

const chipTone = { whatsapp: "bg-whatsapp", accent: "bg-accent" } as const;

/** Hero: a pressed-in window with columns of real phone screens from our live concept sites, scrolling forever. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <p className="sr-only">
        Screens from websites we built: {heroShots.map((s) => s.label).join(", ")}.
      </p>
      <div aria-hidden="true" className="marquee soft-well relative h-[28rem] overflow-hidden rounded-[2.5rem] px-4 sm:h-[36rem] sm:px-5">
        <div className="fade-y grid h-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          <Column shots={heroShots} direction="up" speed={46} />
          <Column shots={rotate(heroShots, 2)} direction="down" speed={58} />
          <Column shots={rotate(heroShots, 4)} direction="up" speed={52} className="hidden sm:block" />
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none">
        {heroChips.map((chip, i) => (
          <span
            key={chip.text}
            className={`soft-sm absolute flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap sm:text-sm ${
              i === 0 ? "anim-float -left-2 top-10 sm:-left-8" : "anim-float-slow -right-2 bottom-12 sm:-right-6"
            }`}
          >
            <span className={`anim-ping-dot relative size-2 rounded-full ${chipTone[chip.tone]}`} />
            {chip.text}
          </span>
        ))}
      </div>
    </div>
  );
}
