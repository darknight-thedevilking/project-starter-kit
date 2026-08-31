import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contradictions } from "@/lib/threadline-data";

export function ContradictionResolution({ preview = false }: { preview?: boolean }) {
  const [resolved, setResolved] = useState<string[]>([]);
  const visible = preview ? contradictions.slice(0, 2) : contradictions;

  function toggleResolved(id: string) {
    setResolved((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <section className={preview ? "mt-12 border border-ink/15 bg-paper/70 p-5 sm:p-6" : "mt-8"}>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl">Contradiction resolution</h2>
          <p className="mt-1 text-sm text-slate">Old claims stay visible. The record keeps its audit trail.</p>
        </div>
        <span className="font-mono text-xs text-rust">{contradictions.length - resolved.length} open</span>
      </div>
      <div className="mt-6 space-y-5">
        {visible.map((contradiction) => {
          const isResolved = resolved.includes(contradiction.id);
          return (
            <div key={contradiction.id} className="border-t border-ink/10 pt-4 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs text-slate">{contradiction.subject}</p>
                  <p className="mt-1 font-mono text-sm">
                    <span className={isResolved ? "strike text-slate" : "text-rust"}>{contradiction.older}</span>
                    <span className="mx-2 text-slate">→</span>
                    <span className="text-teal">{contradiction.newer}</span>
                  </p>
                </div>
                <Button variant={isResolved ? "outline" : "teal"} size="sm" onClick={() => toggleResolved(contradiction.id)}>
                  {isResolved ? <RotateCcw size={14} /> : <Check size={14} />}
                  {isResolved ? "Reopen" : "Mark resolved"}
                </Button>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{contradiction.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}