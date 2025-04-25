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
    image: "/lovable-uploads/827fb8c0-e5da-4520-a979-6fc054eefc6e.png",
    title: "New Season Collections",
    subtitle: "Discover the latest pieces from Africa's most innovative designers",
    link: "/directory"
  },
  {
    id: 2,
    image: "/lovable-uploads/bb152c0b-6378-419b-a0e6-eafce44631b2.png",
    title: "Modern African Bridal",
    subtitle: "Redefining tradition with contemporary elegance",
    link: "/directory/bridal"
  },
  {
    id: 3,
    image: "/lovable-uploads/de2841a8-58d1-4fd4-adfa-8c9aa09e9bb2.png",
    title: "Spotlight: Lagos Fashion Week",
    subtitle: "Meet the designers shaping the future of Nigerian fashion",
    link: "/directory/rtw"
  }
];

const categories = [
  {
    title: "Bridal",
    image: "/lovable-uploads/57cc6a40-0f0d-4a7d-8786-41f15832ebfb.png",
    href: "/directory?category=bridal"
  },
  {
    title: "Ready-to-Wear",
    image: "/lovable-uploads/4a7c7e86-6cde-4d07-a246-a5aa4cb6fa51.png",
    href: "/directory?category=rtw"
  },
  {
    title: "Tailoring",
    image: "/lovable-uploads/99ca757a-bed8-422e-b155-0b9d365b58e0.png",
    href: "/directory?category=accessories"
  },
  {
    title: "Accessories",
    image: "/lovable-uploads/25c3fe26-3fc4-43ef-83ac-6931a74468c0.png",
    href: "/directory?category=accessories"
  },
];

const brandsData = {
  bridalBrands: [
    {
      id: "zora-atelier",
      name: "Zora Atelier",
      image: "/lovable-uploads/4f01c882-4b82-47ba-abfc-ce5e9b778ad1.png",
      category: "Bridal",
      location: "Nairobi",
      rating: 5.0,
      isVerified: true
    },
    {
      id: "lagos-bridal",
      name: "Lagos Bridal House",
      image: "/lovable-uploads/bb152c0b-6378-419b-a0e6-eafce44631b2.png",
      category: "Bridal",
      location: "Lagos",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "afrique-elegance",
      name: "Afrique Elegance",
      image: "/lovable-uploads/57cc6a40-0f0d-4a7d-8786-41f15832ebfb.png",
      category: "Bridal",
      location: "Accra",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "afrochic",
      name: "AfroChic",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Bridal",
      location: "Dakar",
      rating: 4.7,
      isVerified: false
    }
  ],
  rtwBrands: [
    {
      id: "adire-designs",
      name: "Adire Designs",
      image: "/lovable-uploads/827fb8c0-e5da-4520-a979-6fc054eefc6e.png",
      category: "Ready-to-Wear",
      location: "Lagos",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "mbali-studio",
      name: "Mbali Studio",
      image: "/lovable-uploads/de2841a8-58d1-4fd4-adfa-8c9aa09e9bb2.png",
      category: "Ready-to-Wear",
      location: "Johannesburg",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "dakar-fashion",
      name: "Dakar Fashion House",
      image: "/lovable-uploads/4f01c882-4b82-47ba-abfc-ce5e9b778ad1.png",
      category: "Ready-to-Wear",
      location: "Dakar",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "nairobi-couture",
      name: "Nairobi Couture",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Ready-to-Wear",
      location: "Nairobi",
      rating: 4.6,
      isVerified: true
    }
  ],
  tailoringBrands: [
    {
      id: "cairo-couture",
      name: "Cairo Couture",
      image: "/lovable-uploads/99ca757a-bed8-422e-b155-0b9d365b58e0.png",
      category: "Tailoring",
      location: "Cairo",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "abuja-tailors",
      name: "Abuja Master Tailors",
      image: "/lovable-uploads/de2841a8-58d1-4fd4-adfa-8c9aa09e9bb2.png",
      category: "Tailoring",
      location: "Abuja",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "casablanca-style",
      name: "Casablanca Style",
      image: "/lovable-uploads/4f01c882-4b82-47ba-abfc-ce5e9b778ad1.png",
      category: "Tailoring",
      location: "Casablanca",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "addis-tailoring",
      name: "Addis Fine Tailoring",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Tailoring",
      location: "Addis Ababa",
      rating: 4.8,
      isVerified: true
    }
  ],
  accessoryBrands: [
    {
      id: "kente-collective",
      name: "Kente Collective",
      image: "/lovable-uploads/827fb8c0-e5da-4520-a979-6fc054eefc6e.png",
      category: "Accessories",
      location: "Accra",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "sahara-jewels",
      name: "Sahara Jewels",
      image: "/lovable-uploads/bb152c0b-6378-419b-a0e6-eafce44631b2.png",
      category: "Accessories",
      location: "Marrakech",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "lagos-leather",
      name: "Lagos Leather",
      image: "/lovable-uploads/4f01c882-4b82-47ba-abfc-ce5e9b778ad1.png",
      category: "Accessories",
      location: "Lagos",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "nubian-accessories",
      name: "Nubian Accessories",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Accessories",
      location: "Khartoum",
      rating: 4.6,
      isVerified: true
    }
  ]
};

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
  const bridalBrands = brandsData.bridalBrands;
  const rtwBrands = brandsData.rtwBrands;
  const tailoringBrands = brandsData.tailoringBrands;
  const accessoryBrands = brandsData.accessoryBrands;

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

      <section className="py-20 px-6 bg-gradient-to-r from-oma-plum via-oma-gold to-oma-cocoa relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeader 
            title="Join Our Fashion Community"
            subtitle="Get exclusive previews, designer spotlights, and early access to new collections straight to your inbox."
            centered={true}
            titleClassName="text-white"
            subtitleClassName="text-white/90"
          />
          
          <div className="mt-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-oma-plum mb-2">✨ What You'll Get</h4>
                <ul className="space-y-2 text-sm text-oma-cocoa">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    Early access to new collections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    Exclusive designer interviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    Special event invitations
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-oma-plum mb-2">🎉 Member Benefits</h4>
                <ul className="space-y-2 text-sm text-oma-cocoa">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    VIP access to sales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    Trend forecasts & style tips
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-oma-gold"/>
                    Styling consultation invites
                  </li>
                </ul>
              </div>
            </div>
            <NewsletterForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
