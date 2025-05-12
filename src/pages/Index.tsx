import Layout from "@/components/layout/Layout";
import { Carousel } from "@/components/ui/carousel-custom";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryCard } from "@/components/ui/category-card";
import { BrandRow } from "@/components/ui/brand-row";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    id: 1,
    image: "/lovable-uploads/827fb8c0-e5da-4520-a979-6fc054eefc6e.png",
    title: "New Season Collections",
    subtitle: "Tailored looks for weddings, travel, and every moment in between.",
    link: "/directory",
    heroTitle: "Made to Measure. Made to Remember.",
  },
  {
    id: 2,
    image: "/lovable-uploads/bb152c0b-6378-419b-a0e6-eafce44631b2.png",
    title: "Modern African Bridal",
    subtitle: "Tailored looks for weddings, travel, and every moment in between.",
    link: "/directory/bridal",
    heroTitle: "Made to Measure. Made to Remember.",
  },
  {
    id: 3,
    image: "/lovable-uploads/de2841a8-58d1-4fd4-adfa-8c9aa09e9bb2.png",
    title: "Spotlight: Lagos Fashion Week",
    subtitle: "Tailored looks for weddings, travel, and every moment in between.",
    link: "/directory/rtw",
    heroTitle: "Made to Measure. Made to Remember.",
  }
];

const categories = [
  {
    title: "Bridal",
    image: "/lovable-uploads/57cc6a40-0f0d-4a7d-8786-41f15832ebfb.png",
    href: "/directory?category=bridal",
    customCta: "Tailored for \"Yes.\""
  },
  {
    title: "Ready-to-Wear",
    image: "/lovable-uploads/4a7c7e86-6cde-4d07-a246-a5aa4cb6fa51.png",
    href: "/directory?category=rtw",
    customCta: "Looks for the every day that isn't."
  },
  {
    title: "Tailoring",
    image: "/lovable-uploads/99ca757a-bed8-422e-b155-0b9d365b58e0.png",
    href: "/directory?category=tailoring",
    customCta: "Custom fits. Clean lines."
  },
  {
    title: "Accessories",
    image: "/lovable-uploads/25c3fe26-3fc4-43ef-83ac-6931a74468c0.png",
    href: "/directory?category=accessories",
    customCta: "The extras that make it extra."
  },
];

const brandsData = {
  bridalBrands: [
    {
      id: "zora-atelier",
      name: "Zora Atelier",
      image: "/lovable-uploads/53ab4ec9-fd54-4aa8-a292-70669af33185.png",
      category: "Bridal",
      location: "Nairobi",
      rating: 5.0,
      isVerified: true
    },
    {
      id: "lagos-bridal",
      name: "Lagos Bridal House",
      image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png",
      category: "Bridal",
      location: "Lagos",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "afrique-elegance",
      name: "Afrique Elegance",
      image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png",
      category: "Bridal",
      location: "Accra",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "casablanca-bridal",
      name: "Casablanca Bridal",
      image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png",
      category: "Bridal",
      location: "Casablanca",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "addis-bridal",
      name: "Addis Bridal",
      image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png",
      category: "Bridal",
      location: "Addis Ababa",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "tunis-couture",
      name: "Tunis Couture",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Bridal",
      location: "Tunis",
      rating: 4.6,
      isVerified: false
    }
  ],
  rtwBrands: [
    {
      id: "adire-designs",
      name: "Adire Designs",
      image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png",
      category: "Ready-to-Wear",
      location: "Lagos",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "mbali-studio",
      name: "Mbali Studio",
      image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png",
      category: "Ready-to-Wear",
      location: "Johannesburg",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "dakar-fashion",
      name: "Dakar Fashion House",
      image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png",
      category: "Ready-to-Wear",
      location: "Dakar",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "nairobi-couture",
      name: "Nairobi Couture",
      image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png",
      category: "Ready-to-Wear",
      location: "Nairobi",
      rating: 4.6,
      isVerified: true
    },
    {
      id: "algiers-style",
      name: "Algiers Style",
      image: "/lovable-uploads/53ab4ec9-fd54-4aa8-a292-70669af33185.png",
      category: "Ready-to-Wear",
      location: "Algiers",
      rating: 4.5,
      isVerified: false
    },
    {
      id: "accra-fashion",
      name: "Accra Fashion",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Ready-to-Wear",
      location: "Accra",
      rating: 4.8,
      isVerified: true
    }
  ],
  tailoringBrands: [
    {
      id: "cairo-couture",
      name: "Cairo Couture",
      image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png",
      category: "Tailoring",
      location: "Cairo",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "abuja-tailors",
      name: "Abuja Master Tailors",
      image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png",
      category: "Tailoring",
      location: "Abuja",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "casablanca-style",
      name: "Casablanca Style",
      image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png",
      category: "Tailoring",
      location: "Casablanca",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "addis-tailoring",
      name: "Addis Fine Tailoring",
      image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png",
      category: "Tailoring",
      location: "Addis Ababa",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "tunis-tailors",
      name: "Tunis Master Tailors",
      image: "/lovable-uploads/53ab4ec9-fd54-4aa8-a292-70669af33185.png",
      category: "Tailoring",
      location: "Tunis",
      rating: 4.6,
      isVerified: true
    },
    {
      id: "khartoum-tailoring",
      name: "Khartoum Tailoring",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Tailoring",
      location: "Khartoum",
      rating: 4.5,
      isVerified: false
    }
  ],
  accessoryBrands: [
    {
      id: "kente-collective",
      name: "Kente Collective",
      image: "/lovable-uploads/53ab4ec9-fd54-4aa8-a292-70669af33185.png",
      category: "Accessories",
      location: "Accra",
      rating: 4.9,
      isVerified: true
    },
    {
      id: "sahara-jewels",
      name: "Sahara Jewels",
      image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png",
      category: "Accessories",
      location: "Marrakech",
      rating: 4.8,
      isVerified: true
    },
    {
      id: "lagos-leather",
      name: "Lagos Leather",
      image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png",
      category: "Accessories",
      location: "Lagos",
      rating: 4.7,
      isVerified: true
    },
    {
      id: "nubian-accessories",
      name: "Nubian Accessories",
      image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png",
      category: "Accessories",
      location: "Khartoum",
      rating: 4.6,
      isVerified: true
    },
    {
      id: "atlas-jewelry",
      name: "Atlas Jewelry",
      image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png",
      category: "Accessories",
      location: "Casablanca",
      rating: 4.5,
      isVerified: false
    },
    {
      id: "swahili-crafts",
      name: "Swahili Crafts",
      image: "/lovable-uploads/5daa129b-ed11-4932-b7bd-aeb2b4e598f3.png",
      category: "Accessories",
      location: "Zanzibar",
      rating: 4.8,
      isVerified: true
    }
  ]
};

const editorsPickItems = [
  {
    id: 1,
    image: "/lovable-uploads/4a7c7e86-6cde-4d07-a246-a5aa4cb6fa51.png",
    title: "Spotlight On: Mbali Studio",
    subtitle: "Where tradition meets modern edge—each piece tells a story you'll want to wear.",
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
          className="h-[90vh] max-h-[800px]"
          heroTitleClassName="font-canela text-5xl md:text-7xl mb-4"
        />
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto" id="categories">
        <SectionHeader 
          title="What Are You Dressing For?"
          subtitle="Explore designers by occasion—from aisle-ready to Amalfi-bound."
          italic={true}
          titleClassName="text-3xl md:text-4xl lg:text-5xl tracking-wide animate-fade-in font-source"
          subtitleClassName="text-oma-cocoa/80 animate-fade-in"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title}
              title={category.title}
              image={category.image}
              href={category.href}
              customCta={category.customCta}
              className="hover-scale shadow-lg"
            />
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mt-16 opacity-85">
          <span className="text-xs font-suisse uppercase tracking-wider text-oma-cocoa/70 pt-1.5">Discover by:</span>
          {["#Bridal", "#TravelLooks", "#EveningWear", "#Menswear", "#LuxuryTailors"].map((tag) => (
            <Link 
              key={tag} 
              to={`/directory?tag=${tag.substring(1).toLowerCase()}`}
              className="px-4 py-1.5 rounded-full bg-oma-beige/50 text-sm text-oma-cocoa hover:bg-oma-beige transition-colors duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-oma-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-oma-plum/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            title="Spotlight On: Mbali Studio"
            subtitle="Where tradition meets modern edge—each piece tells a story you'll want to wear."
            italic={true}
            titleClassName="text-3xl md:text-4xl lg:text-5xl font-source tracking-wide"
            subtitleClassName="text-oma-cocoa/80 italic max-w-lg"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="/lovable-uploads/4a7c7e86-6cde-4d07-a246-a5aa4cb6fa51.png" 
                alt="Mbali Studio collection" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oma-black/70 via-oma-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-source italic text-xl md:text-2xl">
                  "This month, meet the Johannesburg studio weaving culture into silk."
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in flex flex-col h-full justify-center">
              <h3 className="font-source text-3xl md:text-4xl mb-6 text-oma-plum italic">Mbali Studio</h3>
              <p className="text-oma-cocoa mb-6 text-lg">
                Founded in 2018 by textile artist Thandi Mbali, this Johannesburg-based 
                studio has quickly become known for its luxurious silk pieces featuring 
                contemporary interpretations of traditional African patterns.
              </p>
              <p className="text-oma-cocoa mb-8 text-lg">
                Each piece tells a story of cultural heritage while embracing modern 
                silhouettes and sustainable production methods, making it a favorite 
                among conscious fashion enthusiasts across the continent.
              </p>
              
              <div className="mt-4 flex flex-col gap-6">
                <div className="p-5 border-l-2 border-oma-gold bg-white/70 rounded-r-lg">
                  <p className="italic text-oma-cocoa/80 text-lg">"Where elegance comes stitched with meaning."</p>
                  <p className="text-sm text-oma-cocoa/60 mt-2">— Thandi Mbali, Founder</p>
                </div>
                
                <Button asChild className="bg-oma-plum hover:bg-oma-plum/90 w-fit mt-4">
                  <Link to="/brand/mbali-studio">See the Collection</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Featured Product Row */}
          <div className="mt-16">
            <h4 className="font-source text-xl mb-6 text-oma-cocoa/80">Featured Pieces</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={`/lovable-uploads/${['53ab4ec9-fd54-4aa8-a292-70669af33185.png', 'eca14925-7de8-4100-af5d-b158ff70e951.png', '023ba098-0109-4738-9baf-1321bc3d2fe1.png', '840e541a-b4c1-4e59-94af-89c8345e4d2d.png'][i-1]}`}
                    alt={`Featured product ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-medium text-oma-black">Silk {['Scarf', 'Dress', 'Top', 'Pants'][i-1]}</h5>
                    <p className="text-sm text-oma-cocoa/70">{['Pattern No.1', 'Summer Collection', 'Essential Series', 'Limited Edition'][i-1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Designers Directory Section */}
      <section className="py-16 px-6 bg-oma-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="African Bridal Designers" 
            subtitle="Discover trusted ateliers creating unforgettable moments."
            italic={true}
            titleClassName="text-3xl md:text-4xl lg:text-5xl font-source tracking-wide"
            subtitleClassName="text-oma-cocoa/80 italic"
          />
          
          <BrandRow title="African Bridal Designers" brands={bridalBrands} />
        </div>
      </section>
      
      {/* Ready-to-Wear Collections */}
      <section className="py-16 px-6 bg-oma-beige/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Ready-to-Wear Collections" 
            subtitle="Everyday luxury with an unmistakable African perspective."
            italic={true}
          />
          
          <BrandRow title="Ready-to-Wear Collections" brands={rtwBrands} />
        </div>
      </section>
      
      {/* Expert Tailors */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Expert Tailors" 
            subtitle="Masters of craft creating perfectly fitted garments."
            italic={true}
          />
          
          <BrandRow title="Expert Tailors" brands={tailoringBrands} />
        </div>
      </section>
      
      {/* Accessories & More */}
      <section className="py-16 px-6 bg-oma-beige/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Accessories & More" 
            subtitle="Complete your look with statement pieces that celebrate heritage."
            italic={true}
          />
          
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
