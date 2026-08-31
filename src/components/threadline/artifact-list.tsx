import { FileText } from "lucide-react";
import { artifacts } from "@/lib/threadline-data";

export function ArtifactList() {
  return (
    <section className="mt-12 border-t border-ink/15 pt-5">
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-2xl">Artifacts</h2>
        <span className="font-mono text-xs text-slate">{artifacts.length} sources</span>
      </div>
      <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
        {artifacts.map((artifact) => (
          <li key={artifact.name} className="flex items-center gap-3 border-b border-ink/10 py-3">
            <FileText size={15} className="shrink-0 text-slate" strokeWidth={1.5} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">{artifact.name}</p>
              <p className="font-mono text-[10px] text-slate">{artifact.type} · {artifact.size}</p>
            </div>
            <span className="font-mono text-[10px] text-slate">{artifact.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}