
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
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800",
    category: "Ready-to-Wear",
    location: "Lagos",
    isVerified: true
  },
  {
    id: "kente-collective",
    name: "Kente Collective",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    location: "Accra",
    isVerified: true
  },
  {
    id: "zora-atelier",
    name: "Zora Atelier",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=800",
    category: "Bridal",
    location: "Nairobi",
    isVerified: true
  },
  {
    id: "mbali-studio",
    name: "Mbali Studio",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    category: "Ready-to-Wear",
    location: "Johannesburg",
    isVerified: true
  },
  {
    id: "afrochic",
    name: "AfroChic",
    image: "https://images.unsplash.com/photo-1593795899768-947c4929449d?auto=format&fit=crop&q=80&w=800",
    category: "Ready-to-Wear",
    location: "Dakar",
    isVerified: false
  },
  {
    id: "beads-by-nneka",
    name: "Beads by Nneka",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    location: "Abuja",
    isVerified: true
  },
  {
    id: "marrakech-textiles",
    name: "Marrakech Textiles",
    image: "https://images.unsplash.com/photo-1532699432450-a9fc47b1c9cb?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    location: "Marrakech",
    isVerified: false
  },
  {
    id: "cairo-couture",
    name: "Cairo Couture",
    image: "https://images.unsplash.com/photo-1605905337183-cc1b9e010bd0?auto=format&fit=crop&q=80&w=800",
    category: "Tailoring",
    location: "Cairo",
    isVerified: true
  },
  {
    id: "ananse-weaving",
    name: "Ananse Weaving",
    image: "https://images.unsplash.com/photo-1573566291259-fd494a326b60?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    location: "Kumasi",
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
