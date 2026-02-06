import { cn } from "@/lib/utils";

interface MacWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "default" | "terminal" | "finder" | "messages";
  id?: string;
}

export const MacWindow = ({
  title,
  children,
  className,
  contentClassName,
  variant = "default",
  id,
}: MacWindowProps) => {
  const isTerminal = variant === "terminal";

  return (
    <div
      id={id}
      className={cn(
        "glass rounded-2xl overflow-hidden transition-all duration-300 hover:glow",
        className
      )}
    >
      {/* Title bar */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 border-b border-border/30",
          isTerminal && "bg-card/80"
        )}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f5766]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_#ffbd2e66]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c84066]" />
        </div>
        <span
          className={cn(
            "text-sm text-muted-foreground mx-auto pr-10",
            isTerminal && "font-mono-code text-xs"
          )}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div className={cn("p-6", contentClassName)}>{children}</div>
    </div>
  );
};
