import Layout from "@/components/layout/Layout";
import { Carousel } from "@/components/ui/carousel-custom";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryCard } from "@/components/ui/category-card";
import { BrandRow } from "@/components/ui/brand-row";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for demonstration
const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1600",
    title: "New Season Collections",
    subtitle: "Discover the latest pieces from Africa's most innovative designers",
    link: "/directory"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    title: "Modern African Bridal",
    subtitle: "Redefining tradition with contemporary elegance",
    link: "/directory/bridal"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1600",
    title: "Spotlight: Lagos Fashion Week",
    subtitle: "Meet the designers shaping the future of Nigerian fashion",
    link: "/directory/rtw"
  }
];

const categories = [
  {
    title: "Bridal",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=bridal"
  },
  {
    title: "Ready-to-Wear",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=rtw"
  },
  {
    title: "Tailoring",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=tailoring"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88552?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=accessories"
  },
];

const featuredBrands = [
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
];

const editorsPickItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    title: "Editor's Pick: Mbali Studio",
    subtitle: "Luxurious silk pieces with contemporary African patterns",
    link: "/brand/mbali-studio"
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="w-full">
        <Carousel 
          items={carouselItems} 
          autoplay={true} 
          interval={6000}
          aspectRatio="wide"
        />
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <SectionHeader 
          title="Discover by Category"
          subtitle="Explore the finest African designers across different specialties"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title}
              title={category.title}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="py-16 bg-oma-beige">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Editor's Pick"
            subtitle="Our spotlight on designers making waves in African fashion"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Carousel 
                items={editorsPickItems}
                showControls={false}
                aspectRatio="portrait"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="heading-sm mb-4">Mbali Studio</h3>
              <p className="text-oma-cocoa mb-6">
                Founded in 2018 by textile artist Thandi Mbali, this Johannesburg-based 
                studio has quickly become known for its luxurious silk pieces featuring 
                contemporary interpretations of traditional African patterns.
              </p>
              <p className="text-oma-cocoa mb-8">
                Each piece tells a story of cultural heritage while embracing modern 
                silhouettes and sustainable production methods, making it a favorite 
                among conscious fashion enthusiasts across the continent.
              </p>
              <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
                <Link to="/brand/mbali-studio">See the Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section with Row */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BrandRow title="Featured Brands" brands={featuredBrands} />
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="hover:bg-oma-beige">
              <Link to="/directory">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-oma-gold/20 to-oma-cocoa/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            title="Join Our Newsletter"
            subtitle="Stay connected with the latest designers, collections and events in the African fashion scene."
            centered={true}
          />
          <NewsletterForm className="max-w-md mx-auto" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
