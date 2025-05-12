
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { BrandCard } from "@/components/ui/brand-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search, Filter } from "lucide-react";

// Mock data
const allBrands = [
  {
    id: "adire-designs",
    name: "Adire Designs",
    image: "/lovable-uploads/90f81e12-d22e-4e01-b75b-d3bad4db5e45.png",
    category: "Ready-to-Wear",
    location: "Lagos",
    isVerified: true
  },
  {
    id: "kente-collective",
    name: "Kente Collective",
    image: "/lovable-uploads/6f7a1022-2d82-4fb9-9365-6455df679707.png",
    category: "Accessories",
    location: "Accra",
    isVerified: true
  },
  {
    id: "zora-atelier",
    name: "Zora Atelier",
    image: "/lovable-uploads/41fa65eb-36f2-4987-8c7b-a267b4d0e938.png",
    category: "Bridal",
    location: "Nairobi",
    isVerified: true
  },
  {
    id: "mbali-studio",
    name: "Mbali Studio",
    image: "/lovable-uploads/e0e57209-1802-453b-a78e-7c7090a85e58.png",
    category: "Ready-to-Wear",
    location: "Johannesburg",
    isVerified: true
  },
  {
    id: "afrochic",
    name: "AfroChic",
    image: "/lovable-uploads/abb12cfd-a40d-4890-bfd6-76feb4764069.png",
    category: "Ready-to-Wear",
    location: "Dakar",
    isVerified: false
  },
  {
    id: "beads-by-nneka",
    name: "Beads by Nneka",
    image: "/lovable-uploads/b3fb585e-93cf-4aa7-9204-0a1b477fcb06.png",
    category: "Accessories",
    location: "Abuja",
    isVerified: true
  },
  {
    id: "marrakech-textiles",
    name: "Marrakech Textiles",
    image: "/lovable-uploads/ee92bbfa-4f54-4567-b4ef-8aebd0bca695.png",
    category: "Accessories",
    location: "Marrakech",
    isVerified: false
  },
  {
    id: "cairo-couture",
    name: "Cairo Couture",
    image: "/lovable-uploads/592425d5-0327-465c-990c-c63a73645792.png",
    category: "Tailoring",
    location: "Cairo",
    isVerified: true
  },
  {
    id: "ananse-weaving",
    name: "Ananse Weaving",
    image: "/lovable-uploads/8bd685d2-cad8-4639-982a-cb5c7087443c.png",
    category: "Accessories",
    location: "Kumasi",
    isVerified: true
  },
  {
    id: "lagos-bridal-house",
    name: "Lagos Bridal House",
    image: "/lovable-uploads/c798a99f-019b-4641-b458-32aaef54aaa2.png",
    category: "Bridal",
    location: "Lagos",
    rating: 4.8,
    isVerified: true
  },
  {
    id: "afrique-elegance",
    name: "Afrique Elegance",
    image: "/lovable-uploads/c798a99f-019b-4641-b458-32aaef54aaa2.png",
    category: "Bridal",
    location: "Accra",
    rating: 4.9,
    isVerified: true
  }
];

const categories = [
  "All Categories",
  "Ready-to-Wear", 
  "Bridal", 
  "Tailoring", 
  "Accessories"
];

const locations = [
  "All Locations",
  "Lagos",
  "Accra",
  "Nairobi",
  "Johannesburg",
  "Dakar",
  "Abuja",
  "Marrakech",
  "Cairo",
  "Kumasi"
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter brands based on search and filters
  const filteredBrands = allBrands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || brand.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || brand.location === selectedLocation;
    const matchesVerification = !showVerifiedOnly || brand.isVerified;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesVerification;
  });

  return (
    <Layout>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Designer Directory"
            subtitle="Discover and connect with Africa's most innovative fashion designers"
          />

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search designers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-oma-gold/20"
                />
              </div>
              <Button
                variant="outline"
                className="md:w-auto border-oma-gold/20"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 p-4 border border-oma-gold/20 rounded-lg bg-oma-beige/50 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full rounded-md border border-oma-gold/20 bg-white px-3 py-2 mt-1"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <select
                      id="location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full rounded-md border border-oma-gold/20 bg-white px-3 py-2 mt-1"
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verified"
                      checked={showVerifiedOnly}
                      onChange={(e) => setShowVerifiedOnly(e.target.checked)}
                      className="rounded border-oma-gold/20 text-oma-plum h-4 w-4"
                    />
                    <Label htmlFor="verified" className="ml-2">
                      Verified designers only
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator className="my-8 bg-oma-gold/10" />

          {/* Results count */}
          <div className="mb-6 text-oma-cocoa">
            Showing {filteredBrands.length} designers{" "}
            {selectedCategory !== "All Categories" && `in ${selectedCategory}`}
            {selectedLocation !== "All Locations" && ` from ${selectedLocation}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>

          {/* Brands Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBrands.map((brand) => (
                <BrandCard
                  key={brand.id}
                  id={brand.id}
                  name={brand.name}
                  image={brand.image}
                  category={brand.category}
                  location={brand.location}
                  isVerified={brand.isVerified}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-canela text-2xl mb-2">No designers found</h3>
              <p className="text-oma-cocoa">
                Try adjusting your search criteria or filters to see more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Directory;
