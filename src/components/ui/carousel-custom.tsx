
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: {
    id: number;
    image: string;
    title: string;
    subtitle?: string;
    link?: string;
  }[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
  imageClassName?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  overlay?: boolean;
}

export function Carousel({
  items,
  autoplay = false,
  interval = 5000,
  className,
  imageClassName,
  showControls = true,
  showIndicators = true,
  aspectRatio = "wide",
  overlay = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    auto: "aspect-auto",
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (autoplay) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoplay, interval, items.length]);

  const nextSlide = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden", 
          aspectRatioClasses[aspectRatio]
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className={cn(
                "w-full h-full object-cover",
                imageClassName
              )}
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            )}
            <div className="absolute bottom-1/3 left-0 p-6 md:p-10 text-white z-20">
              <h3 className="font-canela text-3xl md:text-5xl mb-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-base md:text-lg max-w-md">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
