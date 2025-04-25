import Layout from "@/components/layout/Layout";
import { Carousel } from "@/components/ui/carousel-custom";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryCard } from "@/components/ui/category-card";
import { BrandRow } from "@/components/ui/brand-row";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    image: "/lovable-uploads/4a7c7e86-6cde-4d07-a246-a5aa4cb6fa51.png",
    href: "/directory?category=rtw"
  },
  {
    title: "Tailoring",
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?auto=format&fit=crop&q=80&w=800",
    href: "/directory?category=tailoring"
  },
  {
    title: "Accessories",
    image: "/lovable-uploads/25c3fe26-3fc4-43ef-83ac-6931a74468c0.png",
    href: "/directory?category=accessories"
  },
];

const brandsData = [
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
    isVerified: true,
    reviews: [
      { id: 1, name: "Amara O.", text: "Absolutely stunning design, exceeded all my expectations!" },
      { id: 2, name: "Chidi E.", text: "The craftsmanship is impeccable. Highly recommend!" },
      { id: 3, name: "Fatima K.", text: "A perfect blend of tradition and modern elegance." }
    ]
  },
  {
    id: "mbali-studio",
    name: "Mbali Studio",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
    category: "Ready-to-Wear",
    location: "Johannesburg",
    isVerified: true
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
    id: "afrochic",
    name: "AfroChic",
    image: "https://images.unsplash.com/photo-1593795899768-947c4929449d?auto=format&fit=crop&q=80&w=800",
    category: "Bridal",
    location: "Dakar",
    isVerified: false,
    reviews: [
      { id: 1, name: "Mariama S.", text: "The dress made me feel like royalty!" },
      { id: 2, name: "Aminata D.", text: "Beautiful design with cultural significance." },
      { id: 3, name: "Nadia B.", text: "Exceptional quality and attention to detail." }
    ]
  }
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
  const bridalBrands = brandsData.filter(brand => brand.category === "Bridal");
  const rtwBrands = brandsData.filter(brand => brand.category === "Ready-to-Wear");
  const tailoringBrands = brandsData.filter(brand => brand.category === "Tailoring");
  const accessoryBrands = brandsData.filter(brand => brand.category === "Accessories");

  return (
    <Layout>
      <section className="w-full">
        <Carousel 
          items={carouselItems} 
          autoplay={true} 
          interval={6000}
          aspectRatio="wide"
        />
      </section>

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

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <BrandRow title="African Bridal Designers" brands={bridalBrands} />
          <BrandRow title="Ready-to-Wear Collections" brands={rtwBrands} />
          <BrandRow title="Expert Tailors" brands={tailoringBrands} />
          <BrandRow title="Accessories & More" brands={accessoryBrands} />
        </div>
      </section>

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
