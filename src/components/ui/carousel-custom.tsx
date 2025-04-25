
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from "react-router-dom";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  interval?: number;
  aspectRatio?: "landscape" | "portrait" | "video" | "wide";
  className?: string;
  showControls?: boolean;
}

export function Carousel({ 
  items, 
  autoplay = false, 
  interval = 5000, 
  aspectRatio = "landscape", 
  className = "", 
  showControls = true 
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    let timer: NodeJS.Timeout;

    const startAutoplay = () => {
      timer = setTimeout(() => {
        if (!emblaApi) return;
        const nextSlide = (emblaApi.selectedScrollSnap() + 1) % emblaApi.scrollSnapList().length;
        scrollTo(nextSlide);
      }, interval);
    };

    startAutoplay();

    emblaApi.on('select', () => {
      clearTimeout(timer);
      startAutoplay();
    });

    return () => {
      clearTimeout(timer);
    };
  }, [emblaApi, autoplay, interval, scrollTo]);

  return (
    <div className={cn("relative overflow-hidden", 
      aspectRatio === "landscape" ? "aspect-video" : 
      aspectRatio === "portrait" ? "aspect-[3/4]" : 
      aspectRatio === "wide" ? "aspect-[2/1]" :
      "aspect-video", 
      className)}>
      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous Slide"
          >
            <span className="sr-only">Previous Slide</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next Slide"
          >
            <span className="sr-only">Next Slide</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </Button>
        </>
      )}
      
      <div className="embla" ref={emblaRef}>
        <div className="embla__container h-full">
          {items.map((item) => (
            <div key={item.id} className="embla__slide relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="embla__content absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <h1 className="font-suisse text-4xl md:text-5xl lg:text-6xl text-white mb-4">{item.title}</h1>
                  <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">{item.subtitle}</p>
                  <Button asChild size="lg" className="bg-oma-plum hover:bg-oma-plum/90">
                    <Link to={item.link}>
                      Explore Directory
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {scrollSnaps.length > 1 && (
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`rounded-full w-3 h-3 transition-colors duration-300 ${selectedIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
              onClick={() => scrollTo(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
