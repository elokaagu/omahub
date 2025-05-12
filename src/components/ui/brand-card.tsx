
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface BrandCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  location?: string;
  rating?: number;
  isVerified?: boolean;
  className?: string;
}

export function BrandCard({
  id,
  name,
  image,
  category,
  location,
  rating,
  isVerified = false,
  className,
}: BrandCardProps) {
  return (
    <Link
      to={`/brand/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200 rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-2xl"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
          {isVerified && (
            <CheckCircle className="h-4 w-4 text-oma-gold" />
          )}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Badge variant="outline" className="bg-oma-beige text-oma-cocoa border-oma-gold/20">
            {category}
          </Badge>
          {rating && (
            <div className="flex items-center text-sm text-oma-cocoa">
              <Star className="h-4 w-4 text-oma-gold mr-1 fill-oma-gold" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        {location && (
          <p className="mt-2 text-sm text-muted-foreground">
            {location}
          </p>
        )}
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm text-oma-plum font-medium flex items-center">
            View Profile <span className="ml-1 text-oma-gold">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
