/** Decorative browser + phone mockup for the hero (pure markup, no images). */
export function HeroVisual() {
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-lg select-none">
      <div className="rounded-2xl border border-line bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-bg-alt px-2 text-[10px] leading-5 text-muted">yourbusiness.com</span>
        </div>
        <div className="space-y-4 p-5">
          <div className="h-28 rounded-xl bg-linear-to-br from-navy-600 to-navy-900 p-4">
            <div className="h-3 w-2/3 rounded bg-white/85" />
            <div className="mt-2 h-3 w-1/2 rounded bg-white/50" />
            <div className="mt-5 h-7 w-28 rounded-lg bg-gold-500" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-lg border border-line p-3">
                <div className="size-6 rounded-md bg-accent-soft" />
                <div className="h-2 rounded bg-line" />
                <div className="h-2 w-2/3 rounded bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -bottom-10 w-44 rounded-[1.6rem] border-4 border-fg/80 bg-surface p-3 shadow-2xl sm:-right-8">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-line" />
        <p className="text-[11px] font-semibold">Book an appointment</p>
        <p className="mb-2 text-[10px] text-muted">Tomorrow</p>
        <div className="grid grid-cols-2 gap-1.5">
          {slots.map((slot, i) => (
            <span
              key={slot}
              className={`rounded-md border py-1 text-center text-[10px] font-medium ${
                i === 2 ? "border-brand bg-brand text-on-brand" : "border-line"
              }`}
            >
              {slot}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-md bg-whatsapp py-1.5 text-center text-[10px] font-semibold text-white">Confirm on WhatsApp</div>
      </div>
    </div>
  );
}
