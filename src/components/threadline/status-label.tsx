import type { ClaimStatus } from "@/lib/threadline-data";
import { getStatusLabel } from "@/lib/threadline-data";

const labelClasses: Record<ClaimStatus, string> = {
  current: "border-teal/40 bg-teal/10 text-teal",
  superseded: "border-slate/40 bg-slate/10 text-slate",
  conflicting: "border-rust/40 bg-rust/10 text-rust",
  unverified: "border-ochre/40 bg-ochre/10 text-ochre",
};

export function StatusLabel({ status }: { status: ClaimStatus }) {
  return <span className={`border px-2 py-1 font-mono text-[10px] ${labelClasses[status]}`}>{getStatusLabel(status)}</span>;
}