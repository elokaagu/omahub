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
    image: "https://images.unsplash.com/photo-1534480573476-4d4a4361f16e?auto=format&fit=crop&q=80&w=1600",
    title: "New Season Collections",
    subtitle: "Discover the latest pieces from Africa's most innovative designers",
    link: "/directory"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523297467724-f6758d7124c5?auto=format&fit=crop&q=80&w=1600",
    title: "Modern African Bridal",
    subtitle: "Redefining tradition with contemporary elegance",
    link: "/directory/bridal"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&q=80&w=1600",
    title: "Spotlight: Lagos Fashion Week",
    subtitle: "Meet the designers shaping the future of Nigerian fashion",
    link: "/directory/rtw"
  }
];

const categories = [
  {
    title: "Bridal",
    image: "https://images.unsplash.com/photo-1594320990326-937653b76dcd?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=bridal"
  },
  {
    title: "Ready-to-Wear",
    image: "https://images.unsplash.com/photo-1624454002053-876dd95c1fc1?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=rtw"
  },
  {
    title: "Tailoring",
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=tailoring"
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1614938550528-eec6715f1746?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=accessories"
  },
];

const featuredBrands = [
  {
    id: "adire-designs",
    name: "Adire Designs",
    image: "https://images.unsplash.com/photo-1590735213920-68192a57bc71?auto=format&fit=crop&q=80&w=800",
    category: "Ready-to-Wear",
    location: "Lagos",
    isVerified: true
  },
  {
    id: "kente-collective",
    name: "Kente Collective",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    location: "Accra",
    isVerified: true
  },
  {
    id: "zora-atelier",
    name: "Zora Atelier",
    image: "https://images.unsplash.com/photo-1589571891411-069af4905b77?auto=format&fit=crop&q=80&w=800",
    category: "Bridal",
    location: "Nairobi",
    isVerified: true
  },
];

const editorsPickItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
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
