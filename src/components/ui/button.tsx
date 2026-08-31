import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "ink" | "outline" | "teal" | "quiet";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "sm" | "md";
};

const variantClasses: Record<ButtonVariant, string> = {
  ink: "bg-ink text-paper hover:bg-ink/85",
  outline: "border border-line text-ink hover:border-ink/40 hover:bg-paper",
  teal: "bg-teal text-paper hover:bg-teal/85",
  quiet: "text-slate hover:bg-ink/5 hover:text-ink",
};

export function Button({ className = "", variant = "ink", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 disabled:pointer-events-none disabled:opacity-50 ${
        size === "sm" ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
      } ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}