
import { ChevronLeft as ArrowLeft, ChevronRight as ArrowRight } from "lucide-react";
import { Button } from "./button";
import { BrandCard } from "./brand-card";
import { useState, useRef } from "react";

interface Brand {
  id: string;
  name: string;
  image: string;
  category: string;
  location?: string;
  rating?: number;
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
      <a href={`/directory?category=${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="inline-block hover:opacity-80 transition-opacity">
        <h2 className="heading-sm mb-6 hover:text-oma-plum transition-colors">{title}</h2>
      </a>
      
      <div className="group relative">
        <div
          ref={rowRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        >
          {brands.map((brand) => (
            <div key={brand.id} className="w-[300px] flex-none snap-start hover:scale-[1.02] transition-transform duration-300">
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
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 bg-white/80 backdrop-blur-sm"
          onClick={() => scroll("right")}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
