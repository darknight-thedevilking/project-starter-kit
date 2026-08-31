import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { StatusLabel } from "@/components/threadline/status-label";
import { threadEvents, type ThreadEvent } from "@/lib/threadline-data";

export function Timeline({ focused = false }: { focused?: boolean }) {
  const [selected, setSelected] = useState<string>(threadEvents[3].id);
  const selectedEvent = threadEvents.find((event) => event.id === selected);

  return (
    <section className={focused ? "mt-8" : "mt-12"}>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-slate">the evidence thread</p>
          <h2 className="mt-1 font-serif text-2xl">A record in motion</h2>
        </div>
        <p className="font-mono text-xs text-slate">{threadEvents.length} dated nodes</p>
      </div>
      <div className="relative mt-7 space-y-7 sm:space-y-9">
        <div className="absolute bottom-1 left-3 top-1 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
        {threadEvents.map((event) => {
          const isSelected = selected === event.id;
          const isLeft = event.branch === "left";
          return (
            <div key={event.id} className="relative grid grid-cols-[24px_1fr] gap-4 sm:grid-cols-[1fr_24px_1fr] sm:gap-5">
              <div className={`absolute left-3 top-2 z-10 size-2.5 -translate-x-1/2 ${event.status === "current" ? "bg-teal" : event.status === "conflicting" ? "bg-rust" : "bg-slate"} sm:left-1/2`} />
              <div className={`${isLeft ? "sm:col-start-1 sm:row-start-1 sm:text-right" : "sm:col-start-3 sm:row-start-1"} col-start-2`}>
                <button
                  type="button"
                  onClick={() => setSelected(event.id)}
                  className={`w-full border p-4 text-left transition-colors sm:p-5 ${isLeft ? "sm:text-right" : ""} ${
                    isSelected ? "border-teal/40 bg-teal/5" : "border-ink/10 bg-paper/70 hover:border-ink/30"
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isLeft ? "sm:justify-end" : ""}`}>
                    <span className="font-mono text-[10px] text-slate">{event.date}</span>
                    <StatusLabel status={event.status} />
                  </div>
                  <h3 className="mt-3 font-serif text-lg leading-tight">{event.summary}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{event.detail}</p>
                  <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "sm:justify-end" : ""}`}>
                    {event.tags.map((tag) => <span key={tag} className="border border-line px-2 py-1 font-mono text-[10px] text-slate">{tag}</span>)}
                  </div>
                  <p className={`mt-4 inline-flex items-center gap-1 font-mono text-[10px] text-teal ${isLeft ? "sm:flex-row-reverse" : ""}`}>
                    {event.source} <ArrowUpRight size={12} />
                  </p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {selectedEvent ? (
        <div className="mt-6 border-t border-ink/15 pt-4 font-mono text-[10px] text-slate">
          Reading node {selectedEvent.number} · {selectedEvent.sourceType} · {selectedEvent.date}
        </div>
      ) : null}
    </section>
  );
}