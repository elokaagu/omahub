
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { BrandCard } from "./brand-card";
import { useState, useRef } from "react";

interface Brand {
  id: string;
  name: string;
  image: string;
  category: string;
  location?: string;
  isVerified?: boolean;
}

interface BrandRowProps {
  title: string;
  brands: Brand[];
}

export function BrandRow({ title, brands }: BrandRowProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = rowRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <div className="relative py-8">
      <h2 className="heading-sm mb-6">{title}</h2>
      
      <div className="group relative">
        <div
          ref={rowRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        >
          {brands.map((brand) => (
            <div key={brand.id} className="w-[300px] flex-none snap-start">
              <BrandCard {...brand} />
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-white/80 backdrop-blur-sm"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-white/80 backdrop-blur-sm"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
