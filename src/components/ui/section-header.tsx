
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      centered ? "text-center" : "", 
      "mb-10", 
      className
    )}>
      <h2 className={cn(
        "heading-md text-oma-black",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-3 text-lg text-oma-cocoa max-w-2xl",
          centered ? "mx-auto" : "",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
