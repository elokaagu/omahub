
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel-custom";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Star } from "lucide-react";

// Mock data for brand profiles
const brandsData = {
  "adire-designs": {
    name: "Adire Designs",
    description: "Founded in 2015, Adire Designs specializes in contemporary ready-to-wear pieces that incorporate traditional Nigerian adire textile techniques. Each piece celebrates the rich cultural heritage of Yoruba textile art while embracing modern silhouettes and styling.",
    longDescription: "Adire Designs works closely with local artisans in Abeokuta, Nigeria, to create authentic adire fabrics using traditional indigo dyeing methods that have been passed down through generations. The brand is committed to preserving these ancient techniques while innovating through contemporary design applications.\n\nTheir collections feature a range of ready-to-wear pieces from casual daywear to elegant evening options, all characterized by the distinctive patterns and rich blue hues of traditional adire. The brand has gained recognition for successfully bridging the gap between cultural heritage and modern fashion sensibilities.",
    location: "Lagos, Nigeria",
    priceRange: "₦15,000 - ₦120,000",
    category: "Ready-to-Wear",
    rating: 4.8,
    reviews: 56,
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Summer 2023 Collection",
        image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 2,
        title: "Adire Heritage Line",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 3,
        title: "Modern Classics",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
  "kente-collective": {
    name: "Kente Collective",
    description: "Kente Collective brings Ghana's iconic kente cloth into the contemporary accessories space. Their handcrafted bags, shoes, and jewelry pieces showcase the vibrant patterns and colors of traditional kente while introducing modern functionality and design.",
    longDescription: "Kente Collective was established in 2018 by a group of Ghanaian designers committed to showcasing the versatility and contemporary appeal of kente cloth. Working with master weavers in the Ashanti region, they've created a range of accessories that honor traditional craftsmanship while meeting the demands of the modern fashion landscape.\n\nEach piece in their collection tells a story through pattern and color, with designs inspired by traditional kente motifs that carry symbolic meanings. The brand is particularly known for their statement handbags and bold jewelry pieces that have become favorites among fashion-forward individuals looking to make a cultural statement.\n\nBeyond aesthetics, Kente Collective is dedicated to ethical production practices and fair compensation for the artisans who create their pieces. They've established a training program that helps preserve traditional weaving techniques by passing them on to younger generations.",
    location: "Accra, Ghana",
    priceRange: "GH₵200 - GH₵1,500",
    category: "Accessories",
    rating: 4.7,
    reviews: 39,
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Heritage Handbags",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 2,
        title: "Statement Jewelry",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 3,
        title: "Modern Kente Accessories",
        image: "https://images.unsplash.com/photo-1561689625-178c1627aea7?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
  "zora-atelier": {
    name: "Zora Atelier",
    description: "Zora Atelier is redefining African bridal wear with its blend of traditional elements and contemporary bridal aesthetics. Based in Nairobi, the brand creates bespoke wedding gowns that honor East African design elements while embracing modern silhouettes.",
    longDescription: "Zora Atelier was founded in 2017 by bridal designer Amara Zora, whose vision was to create wedding attire that speaks to the modern African bride who wants to honor her heritage while expressing her unique personal style. The atelier specializes in custom bridal gowns that incorporate traditional textiles, beadwork, and embroidery techniques from across East Africa.\n\nEach Zora Atelier creation begins with an extensive consultation process, where the bride's personal style, cultural background, and wedding vision are carefully considered. From there, the skilled team of pattern makers, seamstresses, and embellishment specialists work to create a one-of-a-kind gown that tells the bride's story.\n\nThe brand has gained recognition for its innovative approach to bridal design, particularly for introducing modern interpretations of traditional wedding attire from different East African cultures. Their designs have been featured in several international bridal publications and are sought after by discerning brides throughout the continent and diaspora.",
    location: "Nairobi, Kenya",
    priceRange: "KSh 75,000 - KSh 500,000",
    category: "Bridal",
    rating: 5.0,
    reviews: 28,
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Modern Bride",
        image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 2,
        title: "Heritage Collection",
        image: "https://images.unsplash.com/photo-1544159595-a40c96d14cb2?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 3,
        title: "Celebration Attire",
        image: "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
  "mbali-studio": {
    name: "Mbali Studio",
    description: "Founded in 2018 by textile artist Thandi Mbali, this Johannesburg-based studio has quickly become known for its luxurious silk pieces featuring contemporary interpretations of traditional African patterns.",
    longDescription: "Mbali Studio represents the creative vision of South African textile designer Thandi Mbali, whose background in fine arts and textile design informs the brand's distinctive aesthetic. The studio's signature approach involves hand-painting and digital printing on premium silk fabrics, creating pieces that function as both wearable art and sophisticated ready-to-wear.\n\nEach collection from Mbali Studio tells a specific cultural story, drawing inspiration from various African textile traditions—from Ndebele geometric patterns to the narrative symbolism found in West African Adinkra. These references are reimagined through a contemporary lens, resulting in pieces that feel both timeless and thoroughly modern.\n\nThe brand is committed to sustainable and ethical production methods, working with a small team of skilled artisans in Johannesburg who are fairly compensated for their craft. Limited production runs and made-to-order pieces help minimize waste while ensuring the exclusivity that has become synonymous with the Mbali name.",
    location: "Johannesburg, South Africa",
    priceRange: "R1,200 - R15,000",
    category: "Ready-to-Wear",
    rating: 4.9,
    reviews: 42,
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Painted Silks",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 2,
        title: "Geometric Collection",
        image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: 3,
        title: "Heritage Prints",
        image: "https://images.unsplash.com/photo-1551533446-e7224fd40cc8?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  }
};

const BrandProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get brand data using the ID from URL params
  const brand = id ? brandsData[id as keyof typeof brandsData] : null;
  
  if (!brand) {
    return (
      <Layout>
        <div className="pt-32 pb-16 px-6 text-center">
          <h1 className="heading-lg mb-4">Brand Not Found</h1>
          <p className="text-oma-cocoa mb-8">The designer you're looking for doesn't exist or may have been removed.</p>
          <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
            <a href="/directory">Back to Directory</a>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Convert collections to the format needed for the Carousel component
  const carouselItems = brand.collections.map((collection) => ({
    id: collection.id,
    image: collection.image,
    title: collection.title,
    subtitle: brand.name,
    link: "#"
  }));

  return (
    <Layout>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Badge className="bg-oma-beige text-oma-cocoa border-oma-gold/20">
                {brand.category}
              </Badge>
              {brand.isVerified && (
                <div className="flex items-center ml-3 text-oma-gold text-sm">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Verified Designer</span>
                </div>
              )}
            </div>
            
            <h1 className="heading-lg mb-2">{brand.name}</h1>
            
            <div className="flex items-center text-oma-cocoa mb-6">
              <MapPin size={16} className="mr-1" />
              <span>{brand.location}</span>
              <div className="flex items-center ml-6">
                <Star size={16} className="mr-1 text-oma-gold" />
                <span>{brand.rating} ({brand.reviews} reviews)</span>
              </div>
            </div>
            
            <p className="text-lg max-w-3xl">{brand.description}</p>
          </div>

          {/* Collection Showcase */}
          <div className="my-12">
            <h2 className="heading-sm mb-6">Collections</h2>
            <Carousel 
              items={carouselItems} 
              aspectRatio="video"
              className="mb-4"
            />
            <p className="text-sm text-oma-cocoa italic">
              Images showcase selected pieces from {brand.name}'s collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="md:col-span-2">
              <h2 className="heading-sm mb-4">About {brand.name}</h2>
              <div className="prose text-oma-black max-w-none">
                {brand.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="bg-oma-beige p-6 rounded-lg h-fit">
              <h3 className="font-canela text-xl mb-4">Designer Information</h3>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1">Price Range</h4>
                <p>{brand.priceRange}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1">Location</h4>
                <p>{brand.location}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-1">Category</h4>
                <p>{brand.category}</p>
              </div>
              
              <Separator className="my-6 bg-oma-gold/20" />
              
              <Button className="w-full bg-oma-plum hover:bg-oma-plum/90">
                Contact Designer
              </Button>
            </div>
          </div>

          {/* Reviews Section - Placeholder for future implementation */}
          <div className="my-12 border border-oma-gold/20 rounded-lg p-6 bg-oma-beige/30">
            <h2 className="heading-sm mb-2">Customer Reviews</h2>
            <p className="text-oma-cocoa">
              Review functionality coming soon. {brand.name} currently has {brand.reviews} verified reviews with an average rating of {brand.rating}/5.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandProfile;
