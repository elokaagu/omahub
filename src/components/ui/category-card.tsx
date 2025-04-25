
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  className?: string;
}

export function CategoryCard({ title, image, href, className }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        className
      )}
    >
      <div className="aspect-square w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="font-canela text-2xl text-white">{title}</h3>
          <span className="mt-2 inline-block text-white/90 text-sm expand-underline">
            Discover More
          </span>
        </div>
      </div>
    </Link>
  );
}
