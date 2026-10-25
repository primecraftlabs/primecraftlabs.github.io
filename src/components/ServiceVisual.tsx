/**
 * Animated illustrations for each service (decorative, aria-hidden). Pure markup + theme tokens, no images,
 * so they're sharp on every screen and load instantly. Animations live in globals.css (`anim-*`) and are
 * disabled for visitors who prefer reduced motion. Nothing here is hidden by animation - only moved.
 */
import type { ReactNode } from "react";

function Stage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-linear-to-br from-navy-600 via-navy-800 to-navy-900 select-none ${className}`}
    >
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gold-500/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 size-40 rounded-full bg-navy-600/60 blur-2xl" />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

const Line = ({ w, className = "bg-navy-900/15" }: { w: string; className?: string }) => (
  <div className={`h-1.5 rounded-full ${className}`} style={{ width: w }} />
);

function WebsiteVisual() {
  return (
    <Stage>
      <div className="absolute inset-x-[8%] top-[12%] bottom-0 rounded-t-lg bg-mist shadow-2xl">
        <div className="flex items-center gap-1 border-b border-navy-900/10 px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-navy-900/25" />
          <span className="size-1.5 rounded-full bg-navy-900/25" />
          <span className="size-1.5 rounded-full bg-navy-900/25" />
          <span className="ml-2 h-2 w-1/3 rounded-full bg-navy-900/10" />
        </div>
        <div className="grid grid-cols-5 gap-2 p-3">
          <div className="col-span-3 space-y-1.5">
            <Line w="90%" className="bg-navy-800" />
            <Line w="70%" className="bg-navy-800" />
            <Line w="80%" />
            <div className="anim-glow mt-2 h-3.5 w-16 rounded-md bg-gold-500" />
          </div>
          <div className="col-span-2 rounded-md bg-linear-to-br from-gold-300 to-gold-700" />
        </div>
        <div className="grid grid-cols-3 gap-2 px-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1 rounded-md bg-white p-1.5 shadow-sm">
              <div className="size-3 rounded bg-navy-600/30" />
              <Line w="80%" />
              <Line w="55%" />
            </div>
          ))}
        </div>
      </div>
      <div className="anim-float absolute top-[8%] right-[4%] rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-navy-900 shadow-lg">
        <span className="text-gold-500">★★★★★</span> 4.9
      </div>
      <div className="anim-float-slow absolute bottom-[10%] left-[3%] flex items-center gap-1.5 rounded-full bg-whatsapp px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
        <span className="anim-ping-dot relative size-1.5 rounded-full bg-white" /> New order on WhatsApp
      </div>
    </Stage>
  );
}

function BookingVisual() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "4:00", "4:30"];
  return (
    <Stage>
      <div className="absolute inset-x-[10%] top-[10%] bottom-[10%] rounded-lg bg-mist p-3 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <Line w="35%" className="bg-navy-800" />
          <span className="h-2 w-10 rounded-full bg-navy-900/10" />
        </div>
        <div className="mb-2 grid grid-cols-5 gap-1">
          {days.map((d, i) => (
            <span
              key={d}
              className={`rounded py-1 text-center text-[9px] font-semibold ${i === 2 ? "bg-navy-800 text-white" : "bg-white text-navy-900/60"}`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1">
          {slots.map((s, i) => (
            <span
              key={s}
              className={`rounded border py-1 text-center text-[9px] font-medium ${
                i === 5
                  ? "anim-pop border-gold-500 bg-gold-500 text-navy-900"
                  : i === 1 || i === 6
                    ? "border-transparent bg-navy-900/5 text-navy-900/30 line-through"
                    : "border-navy-900/15 bg-white text-navy-900/70"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="anim-float absolute right-[3%] bottom-[6%] flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-bold text-navy-900 shadow-xl">
        <span className="grid size-4 place-items-center rounded-full bg-whatsapp text-[9px] text-white">✓</span>
        Booking confirmed
      </div>
    </Stage>
  );
}

function Phone({ className = "", accent = false }: { className?: string; accent?: boolean }) {
  return (
    <div className={`absolute w-[30%] rounded-[14px] border-[3px] border-navy-900 bg-mist p-1.5 shadow-2xl ${className}`}>
      <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-navy-900/30" />
      <div className={`mb-1.5 h-8 rounded-md ${accent ? "bg-linear-to-br from-gold-300 to-gold-700" : "bg-linear-to-br from-navy-600 to-navy-800"}`} />
      <div className="space-y-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1 rounded bg-white p-1">
            <span className="size-2.5 shrink-0 rounded-full bg-navy-600/30" />
            <span className="h-1 flex-1 rounded-full bg-navy-900/15" />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-around">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`size-1.5 rounded-full ${i === 0 ? "bg-gold-500" : "bg-navy-900/20"}`} />
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
      <span className="absolute top-[5%] left-[6%] z-10 rounded-full bg-mist px-2 py-0.5 text-[9px] font-bold text-navy-900 shadow-lg">
        Android
      </span>
      <span className="absolute top-[5%] right-[6%] z-10 rounded-full bg-mist px-2 py-0.5 text-[9px] font-bold text-navy-900 shadow-lg">
        iOS
      </span>
      <div className="anim-pop absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-2.5 py-1 text-[9px] font-bold whitespace-nowrap text-navy-900 shadow-lg">
        One codebase · two apps
      </div>
    </Stage>
  );
}

function BackendVisual() {
  const node = "absolute grid place-items-center rounded-lg bg-mist px-2 py-1.5 text-[9px] font-bold text-navy-900 shadow-xl";
  return (
    <Stage>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="none">
        {[
          "M38 50 L72 50",
          "M98 50 L124 26",
          "M98 50 L124 50",
          "M98 50 L124 74",
        ].map((d) => (
          <path key={d} d={d} className="anim-dash stroke-gold-300" strokeWidth="1" strokeDasharray="3 3" fill="none" />
        ))}
      </svg>
      <div className={`${node} top-[42%] left-[6%]`}>📱 App</div>
      <div className={`${node} anim-glow top-[38%] left-[44%] bg-gold-500 px-3 py-2`}>API</div>
      <div className={`${node} top-[17%] right-[4%]`}>🔐 Auth</div>
      <div className={`${node} top-[42%] right-[4%]`}>🗄️ Data</div>
      <div className={`${node} top-[67%] right-[4%]`}>🔔 Push</div>
      <div className="absolute bottom-[6%] left-[6%] flex items-center gap-1 text-[9px] font-semibold text-white/80">
        <span className="anim-ping-dot relative size-1.5 rounded-full bg-whatsapp" /> All systems running
      </div>
    </Stage>
  );
}

function RealtimeVisual() {
  return (
    <Stage>
      <div className="absolute inset-x-[12%] top-[10%] bottom-[10%] flex flex-col rounded-lg bg-mist p-2.5 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            {["bg-gold-500", "bg-navy-600", "bg-gold-700"].map((c) => (
              <span key={c} className={`size-4 rounded-full border-2 border-mist ${c}`} />
            ))}
          </div>
          <span className="flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[8px] font-bold text-white">
            <span className="anim-ping-dot relative size-1 rounded-full bg-white" /> LIVE
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-1.5">
          <div className="w-[62%] space-y-1 rounded-lg rounded-bl-none bg-white px-2 py-1.5 shadow-sm">
            <Line w="100%" />
            <Line w="70%" />
          </div>
          <div className="w-[55%] space-y-1 self-end rounded-lg rounded-br-none bg-navy-800 px-2 py-1.5">
            <Line w="100%" className="bg-white/50" />
            <Line w="60%" className="bg-white/50" />
          </div>
          <div className="anim-float-slow w-[48%] rounded-lg rounded-bl-none bg-white px-2 py-1.5 shadow-sm">
            <Line w="90%" />
          </div>
          <div className="flex w-[42%] items-center gap-1 self-end rounded-lg rounded-br-none bg-gold-500 px-2 py-1.5">
            <span className="text-[8px]">👍</span>
            <Line w="70%" className="bg-navy-900/40" />
          </div>
          <div className="flex w-fit gap-0.5 rounded-lg bg-white px-2 py-1.5 shadow-sm">
            {[0, 1, 2].map((i) => (
              <span key={i} className="anim-typing size-1 rounded-full bg-navy-900/40" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="anim-float absolute top-[6%] right-[4%] rounded-lg bg-white px-2 py-1 text-[9px] font-bold text-navy-900 shadow-lg">
        👀 128 online
      </div>
    </Stage>
  );
}

function DashboardVisual() {
  const bars = [45, 70, 55, 85, 60, 95];
  return (
    <Stage>
      <div className="absolute inset-x-[8%] top-[10%] bottom-[10%] rounded-lg bg-mist p-2.5 shadow-2xl">
        <div className="mb-2 grid grid-cols-3 gap-1.5">
          {["Sales", "Orders", "Visitors"].map((k, i) => (
            <div key={k} className="rounded bg-white p-1.5 shadow-sm">
              <div className="text-[8px] font-semibold text-navy-900/50">{k}</div>
              <div className={`text-[11px] font-extrabold ${i === 0 ? "text-gold-700" : "text-navy-900"}`}>
                {["+24%", "312", "4.1k"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-[52%] items-end gap-1.5 rounded bg-white p-1.5 shadow-sm">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`anim-bar flex-1 rounded-t ${i === bars.length - 1 ? "bg-gold-500" : "bg-navy-600"}`}
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
