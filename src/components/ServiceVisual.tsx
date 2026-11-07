/**
 * Animated illustrations for each service (decorative, aria-hidden). Pure markup + theme tokens, no images,
 * so they're sharp on every screen and load instantly. Animations live in globals.css (`anim-*`) and are
 * disabled for visitors who prefer reduced motion. Nothing here is hidden by animation - only moved.
 * Style: soft-UI mini mockups - raised screens on the canvas, key controls in ink and gold.
 */
import type { ReactNode } from "react";

/* Small-scale versions of .soft-sm / .soft-inset for tiny elements (same light/shadow tokens). */
const raised = "bg-surface shadow-[3px_3px_6px_var(--soft-dark),-3px_-3px_6px_var(--soft-light)]";
const pressed = "bg-surface shadow-[inset_2px_2px_4px_var(--soft-dark),inset_-2px_-2px_4px_var(--soft-light)]";
/* Status chips: raised pills floating above the mockup */
const chipBase = "soft-sm flex items-center gap-1.5 rounded-full font-bold whitespace-nowrap text-fg";
const chip = `${chipBase} px-2.5 py-1 text-[10px]`;
const chipSm = `${chipBase} px-2 py-0.5 text-[9px]`;

function Stage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface select-none ${className}`}
    >
      <div className="absolute -top-12 -right-12 size-40 rounded-full bg-accent/15 blur-2xl" />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

const Line = ({ w, className = "bg-ink/15" }: { w: string; className?: string }) => (
  <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />
);

function WebsiteVisual() {
  return (
    <Stage>
      <div className="soft-sm absolute inset-x-[8%] top-[14%] -bottom-4 rounded-t-xl">
        <div className="flex items-center gap-1 border-b border-line px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="size-1.5 rounded-full bg-ink/20" />
          <span className="size-1.5 rounded-full bg-ink/20" />
          <span className={`ml-2 h-2.5 w-1/3 rounded-full ${pressed}`} />
        </div>
        <div className="grid grid-cols-5 gap-2 p-3">
          <div className="col-span-3 space-y-1.5">
            <Line w="90%" className="bg-ink" />
            <Line w="70%" className="bg-ink" />
            <Line w="80%" />
            <div className="anim-glow mt-2 h-3.5 w-16 rounded-md bg-accent" />
          </div>
          <div className="col-span-2 rounded-lg bg-linear-to-br from-gold-300 to-gold-700" />
        </div>
        <div className="grid grid-cols-3 gap-2 px-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`space-y-1 rounded-md p-1.5 ${raised}`}>
              <div className={`size-3 rounded ${i === 0 ? "bg-accent" : "bg-ink/80"}`} />
              <Line w="80%" />
              <Line w="55%" />
            </div>
          ))}
        </div>
      </div>
      <div className={`anim-float absolute top-[5%] right-[4%] ${chip}`}>
        <span className="text-accent">★★★★★</span> 4.9
      </div>
      <div className={`anim-float-slow absolute bottom-[10%] left-[3%] ${chip}`}>
        <span className="anim-ping-dot relative size-1.5 rounded-full bg-whatsapp" /> New order on WhatsApp
      </div>
    </Stage>
  );
}

function BookingVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "4:00", "4:30"];
  return (
    <Stage>
      <div className="soft-sm absolute inset-x-[10%] top-[9%] bottom-[12%] flex flex-col rounded-xl p-3">
        <div className="mb-2 flex items-center justify-between">
          <Line w="35%" className="bg-ink" />
          <span className={`h-2.5 w-10 rounded-full ${pressed}`} />
        </div>
        <div className="mb-2 grid grid-cols-5 gap-1.5">
          {days.map((d, i) => (
            <span
              key={d}
              className={`rounded-md py-1 text-center text-[9px] font-semibold ${i === 2 ? "bg-ink text-on-ink" : `${raised} text-muted`}`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {slots.map((s, i) => (
            <span
              key={s}
              className={`rounded-md py-1 text-center text-[9px] font-semibold ${
                i === 5
                  ? "anim-pop bg-accent text-ink"
                  : i === 1 || i === 6
                    ? `${pressed} text-muted line-through`
                    : `${raised} text-fg`
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="rounded-md bg-ink px-3 py-1 text-[9px] font-bold text-on-ink">Book 12:30</span>
          <Line w="30%" />
        </div>
      </div>
      <div className={`anim-float absolute right-[3%] bottom-[5%] ${chip}`}>
        <span className="grid size-4 place-items-center rounded-full bg-whatsapp text-[9px] text-on-brand">✓</span>
        Booking confirmed
      </div>
    </Stage>
  );
}

function Phone({ className = "", accent = false }: { className?: string; accent?: boolean }) {
  return (
    <div className={`soft-sm absolute w-[30%] rounded-[16px] p-1.5 ${className}`}>
      <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-ink/70" />
      <div
        className={`mb-1.5 h-8 rounded-lg ${accent ? "bg-linear-to-br from-gold-300 to-gold-700" : "bg-linear-to-br from-ink-soft to-ink"}`}
      />
      <div className="space-y-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`flex items-center gap-1 rounded-md p-1 ${raised}`}>
            <span className={`size-2.5 shrink-0 rounded-full ${i === 0 ? "bg-accent" : "bg-ink/25"}`} />
            <span className="h-1 flex-1 rounded-full bg-ink/15" />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-around">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`size-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-ink/20"}`} />
        ))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <Stage>
      <Phone className="anim-float top-[12%] left-[20%] -rotate-6" />
      <Phone className="anim-float-slow top-[16%] right-[20%] rotate-6" accent />
      <span className={`absolute top-[5%] left-[6%] z-10 ${chipSm}`}>Android</span>
      <span className={`absolute top-[5%] right-[6%] z-10 ${chipSm}`}>iOS</span>
      <div className="anim-pop solid-lift absolute bottom-[7%] left-[calc(50%-4.25rem)] z-10 w-[8.5rem] rounded-full bg-ink py-1 text-center text-[9px] font-bold whitespace-nowrap text-on-ink">
        One codebase · <span className="text-gold-300">two apps</span>
      </div>
    </Stage>
  );
}

function BackendVisual() {
  const node = "absolute grid place-items-center rounded-lg text-[9px] font-bold";
  return (
    <Stage>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="none">
        {["M38 50 L72 50", "M98 50 L124 26", "M98 50 L124 50", "M98 50 L124 74"].map((d) => (
          <path key={d} d={d} className="anim-dash stroke-gold-700" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
        ))}
      </svg>
      <div className={`${node} soft-sm px-2 py-1.5 text-fg top-[42%] left-[6%]`}>📱 App</div>
      <div className={`${node} anim-glow top-[38%] left-[44%] bg-ink px-3 py-2 text-on-ink`}>API</div>
      <div className={`${node} soft-sm px-2 py-1.5 text-fg top-[17%] right-[4%]`}>🔐 Auth</div>
      <div className={`${node} soft-sm px-2 py-1.5 text-fg top-[42%] right-[4%]`}>🗄️ Data</div>
      <div className={`${node} soft-sm px-2 py-1.5 text-fg top-[67%] right-[4%]`}>🔔 Push</div>
      <div className={`absolute bottom-[6%] left-[5%] ${chipSm}`}>
        <span className="anim-ping-dot relative size-1.5 rounded-full bg-whatsapp" /> All systems running
      </div>
    </Stage>
  );
}

function RealtimeVisual() {
  return (
    <Stage>
      <div className="soft-sm absolute inset-x-[12%] top-[10%] bottom-[10%] flex flex-col rounded-xl p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            {["bg-accent", "bg-ink", "bg-gold-700"].map((c) => (
              <span key={c} className={`size-4 rounded-full border-2 border-surface ${c}`} />
            ))}
          </div>
          <span className="flex items-center gap-1 rounded-full bg-ink px-1.5 py-0.5 text-[8px] font-bold text-on-ink">
            <span className="anim-ping-dot relative size-1 rounded-full bg-gold-300" /> LIVE
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-1.5">
          <div className={`w-[62%] space-y-1 rounded-lg rounded-bl-none px-2 py-1.5 ${raised}`}>
            <Line w="100%" />
            <Line w="70%" />
          </div>
          <div className="w-[55%] space-y-1 self-end rounded-lg rounded-br-none bg-ink px-2 py-1.5">
            <Line w="100%" className="bg-on-ink/50" />
            <Line w="60%" className="bg-on-ink/50" />
          </div>
          <div className={`anim-float-slow w-[48%] rounded-lg rounded-bl-none px-2 py-1.5 ${raised}`}>
            <Line w="90%" />
          </div>
          <div className="flex w-[42%] items-center gap-1 self-end rounded-lg rounded-br-none bg-accent px-2 py-1.5">
            <span className="text-[8px]">👍</span>
            <Line w="70%" className="bg-ink/40" />
          </div>
          <div className={`flex w-fit gap-0.5 rounded-lg px-2 py-1.5 ${raised}`}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="anim-typing size-1 rounded-full bg-ink/50" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
      <div className={`anim-float absolute top-[4%] right-[3%] ${chipSm}`}>👀 128 online</div>
    </Stage>
  );
}

function DashboardVisual() {
  const bars = [45, 70, 55, 85, 60, 95];
  return (
    <Stage>
      <div className="soft-sm absolute inset-x-[8%] top-[10%] bottom-[10%] rounded-xl p-2.5">
        <div className="mb-2.5 grid grid-cols-3 gap-2">
          {["Sales", "Orders", "Visitors"].map((k, i) => (
            <div key={k} className={`rounded-md p-1.5 ${raised}`}>
              <div className="text-[8px] font-semibold text-muted">{k}</div>
              <div className={`text-[11px] font-extrabold ${i === 0 ? "text-whatsapp" : "text-fg"}`}>
                {["+24%", "312", "4.1k"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className={`flex h-[52%] items-end gap-1.5 rounded-md p-1.5 ${pressed}`}>
          {bars.map((h, i) => (
            <div
              key={i}
              className={`anim-bar flex-1 rounded-t ${i === bars.length - 1 ? "bg-accent" : "bg-ink"}`}
              style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>
    </Stage>
  );
}

const visuals: Record<string, () => ReactNode> = {
  websites: WebsiteVisual,
  booking: BookingVisual,
  "mobile-apps": MobileVisual,
  backends: BackendVisual,
  realtime: RealtimeVisual,
  automation: DashboardVisual,
};

export function ServiceVisual({ id, className = "" }: { id: string; className?: string }) {
  const Visual = visuals[id];
  return Visual ? <div className={className}><Visual /></div> : null;
}
