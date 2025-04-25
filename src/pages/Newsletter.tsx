
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data for previous newsletters
const previousNewsletters = [
  {
    id: 1,
    title: "Winter Collection Showcase",
    date: "December 15, 2023",
    excerpt: "Featuring top designers from Lagos Fashion Week and their innovative approaches to cold-weather fashion with an African twist.",
    tags: ["Seasonal", "Event Coverage"]
  },
  {
    id: 2,
    title: "Spotlight: Rising Stars from East Africa",
    date: "November 3, 2023",
    excerpt: "Meet the new generation of designers from Kenya, Tanzania, and Uganda who are reimagining traditional textiles for the global stage.",
    tags: ["Designer Spotlight", "East Africa"]
  },
  {
    id: 3,
    title: "Sustainability in African Fashion",
    date: "October 10, 2023",
    excerpt: "How African designers are leading the way in sustainable fashion practices, from material sourcing to ethical production.",
    tags: ["Sustainability", "Industry Insights"]
  },
  {
    id: 4,
    title: "Bridal Trends: Modern African Wedding Attire",
    date: "September 5, 2023",
    excerpt: "Contemporary approaches to traditional bridal wear across the continent, showcasing innovative designers redefining wedding fashion.",
    tags: ["Bridal", "Trends"]
  },
  {
    id: 5,
    title: "Accessory Designers Making Waves",
    date: "August 18, 2023",
    excerpt: "From statement jewelry to handcrafted bags, these accessory designers are putting African craftsmanship on the global map.",
    tags: ["Accessories", "Designer Spotlight"]
  }
];

const Newsletter = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-r from-oma-gold/20 to-oma-cocoa/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            title="Oma Hub Newsletter"
            subtitle="Stay connected with the pulse of African fashion. Our newsletter delivers curated content on emerging designers, collection releases, and industry insights directly to your inbox."
            centered={true}
          />
          
          <div className="mt-8">
            <NewsletterForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Previous Newsletters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Previous Editions"
            subtitle="Catch up on our past newsletters showcasing African designers, fashion trends, and industry insights"
          />
          
          <div className="space-y-8">
            {previousNewsletters.map((newsletter) => (
              <div key={newsletter.id} className="border-b border-oma-gold/20 pb-8 last:border-b-0">
                <div className="flex items-center text-sm text-oma-cocoa mb-2">
                  <span>{newsletter.date}</span>
                  <div className="ml-4 flex gap-2">
                    {newsletter.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-oma-beige/50 border-oma-gold/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h3 className="heading-sm mb-3">{newsletter.title}</h3>
                <p className="text-oma-cocoa mb-4">{newsletter.excerpt}</p>
                <a href="#" className="text-oma-plum font-medium hover:text-oma-plum/80 expand-underline">
                  Read Full Newsletter
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-oma-beige">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions"
            centered={true}
          />
          
          <div className="space-y-8 mt-8">
            <div>
              <h3 className="font-canela text-xl mb-2">How often is the newsletter sent?</h3>
              <p className="text-oma-cocoa">
                We send our newsletter twice a month, featuring curated content on new designer collections, 
                industry trends, and special features on African fashion.
              </p>
            </div>
            
            <div>
              <h3 className="font-canela text-xl mb-2">What can I expect in each edition?</h3>
              <p className="text-oma-cocoa">
                Each newsletter includes designer spotlights, trend analyses, event coverage, and exclusive 
                content from the African fashion scene. We also share early access to new designers joining our platform.
              </p>
            </div>
            
            <div>
              <h3 className="font-canela text-xl mb-2">Can I suggest topics or designers to feature?</h3>
              <p className="text-oma-cocoa">
                Absolutely! We love hearing from our community. You can reply directly to any newsletter edition 
                with your suggestions, or contact us through our social media channels.
              </p>
            </div>
            
            <div>
              <h3 className="font-canela text-xl mb-2">How do I unsubscribe if needed?</h3>
              <p className="text-oma-cocoa">
                Every newsletter includes an unsubscribe link at the bottom. You can opt out at any time, 
                though we hope you'll stay connected with our community!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
