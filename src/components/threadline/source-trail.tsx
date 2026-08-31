import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusLabel } from "@/components/threadline/status-label";
import { threadEvents, type ThreadEvent } from "@/lib/threadline-data";

export function SourceTrail({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<ThreadEvent | null>(null);

  return (
    <section className={compact ? "mt-8" : "mt-12"}>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-2xl">Source trail</h2>
        <p className="font-mono text-xs text-slate">oldest → newest</p>
      </div>
      <ol className="mt-6 space-y-3">
        {threadEvents.map((event) => (
          <li key={event.id}>
            <button
              type="button"
              onClick={() => setSelected(event)}
              className={`group flex w-full items-center gap-3 border px-4 py-4 text-left transition-colors sm:gap-4 sm:px-5 ${
                selected?.id === event.id ? "border-teal/40 bg-teal/5" : "border-ink/10 bg-paper/70 hover:border-ink/30"
              }`}
            >
              <span className={`font-mono text-xs ${event.status === "current" ? "text-teal" : "text-slate"}`}>{event.number}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-snug">{event.detail}</p>
                <p className="mt-1 font-mono text-[10px] text-ink/50">{event.date} · {event.source}</p>
              </div>
              <StatusLabel status={event.status} />
              <ArrowUpRight size={15} className="hidden text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" />
            </button>
          </li>
        ))}
      </ol>
      {selected ? (
        <div className="mt-4 border border-teal/30 bg-teal/5 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] text-teal">selected evidence · {selected.id}</p>
              <h3 className="mt-1 font-serif text-xl">{selected.summary}</h3>
            </div>
            <Button variant="quiet" size="sm" onClick={() => setSelected(null)} title="Close evidence detail">
              <X size={15} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{selected.detail}</p>
          <p className="mt-4 font-mono text-[10px] text-slate">{selected.sourceType} · {selected.date}</p>
        </div>
      ) : null}
    </section>
  );
}