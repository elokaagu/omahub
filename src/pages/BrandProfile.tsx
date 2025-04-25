import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel-custom";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Star } from "lucide-react";
import { ContactDesignerModal } from "@/components/ui/contact-designer-modal";
import { Link } from "react-router-dom";

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
    reviews: [
      {
        author: "Ngozi Okafor",
        comment: "Absolutely stunning designs! The quality of the adire fabric is exceptional, and the fit is perfect. I always get compliments when I wear my Adire Designs piece.",
        rating: 5,
        date: "2024-03-15"
      },
      {
        author: "Chike Obi",
        comment: "I love how Adire Designs blends traditional techniques with modern styles. Their clothing is unique and makes a statement. Highly recommend!",
        rating: 4,
        date: "2024-02-28"
      },
      {
        author: "Aisha Bello",
        comment: "The customer service was excellent, and I received my order quickly. The adire top I purchased is beautiful and well-made. Will definitely be buying more!",
        rating: 5,
        date: "2024-01-10"
      }
    ],
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Summer 2023 Collection",
        image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png"
      },
      {
        id: 2,
        title: "Adire Heritage Line",
        image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png"
      },
      {
        id: 3,
        title: "Modern Classics",
        image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png"
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
    reviews: [
      {
        author: "Ama Serwaa",
        comment: "I am in love with my Kente Collective bag! The colors are so vibrant, and the craftsmanship is impeccable. It's a true statement piece.",
        rating: 5,
        date: "2024-03-01"
      },
      {
        author: "Kwame Nkrumah",
        comment: "The Kente Collective jewelry is unique and beautifully made. I appreciate the brand's commitment to ethical production and supporting local artisans.",
        rating: 4,
        date: "2024-02-15"
      },
      {
        author: "Abena Yeboah",
        comment: "I bought a Kente Collective scarf as a gift, and it was a huge hit! The recipient loved the vibrant colors and the story behind the design.",
        rating: 5,
        date: "2024-01-20"
      }
    ],
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Heritage Collection",
        image: "/lovable-uploads/840e541a-b4c1-4e59-94af-89c8345e4d2d.png"
      },
      {
        id: 2,
        title: "Modern Fusion",
        image: "/lovable-uploads/023ba098-0109-4738-9baf-1321bc3d2fe1.png"
      },
      {
        id: 3,
        title: "Seasonal Styles",
        image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png"
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
    reviews: [
      {
        author: "Imani Wanjiku",
        comment: "Zora Atelier created the most breathtaking wedding gown I could have ever imagined. The attention to detail and the incorporation of traditional Kenyan elements were simply stunning.",
        rating: 5,
        date: "2024-03-10"
      },
      {
        author: "Akinyi Odongo",
        comment: "I was so impressed with the professionalism and creativity of Zora Atelier. They truly listened to my vision and brought it to life in the most beautiful way.",
        rating: 5,
        date: "2024-02-20"
      },
      {
        author: "Fatima Hassan",
        comment: "Zora Atelier is a true gem in the world of bridal design. Their gowns are works of art, and their customer service is exceptional. I highly recommend them to any bride looking for a unique and unforgettable gown.",
        rating: 5,
        date: "2024-01-05"
      }
    ],
    isVerified: true,
    collections: [
      {
        id: 1,
        title: "Bridal Collection",
        image: "/lovable-uploads/53ab4ec9-fd54-4aa8-a292-70669af33185.png"
      },
      {
        id: 2,
        title: "Evening Wear",
        image: "/lovable-uploads/fd9289e6-2522-48c1-9fe4-42842504e746.png"
      },
      {
        id: 3,
        title: "Traditional Fusion",
        image: "/lovable-uploads/eca14925-7de8-4100-af5d-b158ff70e951.png"
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
    reviews: [
      {
        author: "Nomusa Dlamini",
        comment: "Mbali Studio's silk pieces are absolutely divine! The colors are so rich, and the fabric feels luxurious against my skin. I always feel like a work of art when I wear their designs.",
        rating: 5,
        date: "2024-03-05"
      },
      {
        author: "Sipho Ndlovu",
        comment: "I appreciate Mbali Studio's commitment to sustainability and ethical production. Their clothing is not only beautiful but also made with a conscience.",
        rating: 4,
        date: "2024-02-10"
      },
      {
        author: "Zanele Nkosi",
        comment: "I bought a Mbali Studio scarf as a gift for my mother, and she absolutely loved it! The quality is exceptional, and the design is timeless.",
        rating: 5,
        date: "2024-01-15"
      }
    ],
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
  const brand = id ? brandsData[id as keyof typeof brandsData] : null;
  
  if (!brand) {
    return (
      <Layout>
        <div className="pt-32 pb-16 px-6 text-center">
          <h1 className="heading-lg mb-4">Brand Not Found</h1>
          <p className="text-oma-cocoa mb-8">The designer you're looking for doesn't exist or may have been removed.</p>
          <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
            <Link to="/directory">Back to Directory</Link>
          </Button>
        </div>
      </Layout>
    );
  }

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
                <span>{brand.rating} ({brand.reviews.length} reviews)</span>
              </div>
            </div>
            
            <p className="text-lg max-w-3xl">{brand.description}</p>
          </div>

          {/* Collection Grid */}
          <div className="my-12">
            <h2 className="heading-sm mb-6">Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.collections.map((collection) => (
                <div key={collection.id} className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-source">{collection.title}</h3>
                  </div>
                </div>
              ))}
            </div>
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
              
              <ContactDesignerModal designerName={brand.name}>
                <Button className="w-full bg-oma-plum hover:bg-oma-plum/90">
                  Contact Designer
                </Button>
              </ContactDesignerModal>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="my-12 border border-oma-gold/20 rounded-lg p-6 bg-oma-beige/30">
            <h2 className="heading-sm mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {brand.reviews?.map((review, index) => (
                <div key={index} className="border-b border-oma-gold/10 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-oma-gold" : "text-oma-gold/20"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-oma-cocoa">{review.date}</span>
                  </div>
                  <p className="text-oma-black mb-2">{review.comment}</p>
                  <p className="text-sm text-oma-cocoa">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandProfile;
