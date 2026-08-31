import type { ClaimStatus } from "@/lib/threadline-data";

const markClasses: Record<ClaimStatus, string> = {
  current: "bg-teal",
  superseded: "bg-slate",
  conflicting: "bg-rust",
  unverified: "border border-ochre",
};

export function StatusMark({ status, label }: { status: ClaimStatus; label?: string }) {
  return <span aria-label={label} className={`inline-block size-2 shrink-0 ${markClasses[status]}`} />;
}