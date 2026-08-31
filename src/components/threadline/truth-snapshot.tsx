import { claims } from "@/lib/threadline-data";
import { StatusMark } from "@/components/threadline/status-mark";

export function TruthSnapshot() {
  return (
    <section className="grid overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-3">
      {claims.map((claim) => (
        <div key={claim.id} className="bg-paper p-5 sm:p-6">
          <p className="font-mono text-xs text-slate">{claim.subject}</p>
          <div className="mt-3 flex items-center gap-2">
            <StatusMark status={claim.status} label={claim.status} />
            <span className="font-serif text-xl">{claim.currentValue}</span>
          </div>
          {claim.previousValue ? (
            <p className="mt-2 font-mono text-xs text-ink/50">
              {claim.previousValue} — <span className="strike">superseded</span>
            </p>
          ) : (
            <p className="mt-2 font-mono text-xs text-ochre">unverified · {Math.round(claim.confidence * 100)}%</p>
          )}
        </div>
      ))}
    </section>
  );
}