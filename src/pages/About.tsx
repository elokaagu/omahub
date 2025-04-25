
import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="heading-lg mb-6">About Oma Hub</h1>
            <p className="text-oma-cocoa text-lg mb-6">
              Oma Hub is a premier fashion-tech platform dedicated to spotlighting 
              Africa's emerging designers. We're creating a digital space where creativity, 
              craftsmanship, and cultural expression intersect.
            </p>
            <p className="text-oma-cocoa text-lg mb-8">
              Our mission is to connect Africa's innovative fashion talent with a global 
              audience, fostering discovery and celebration of the continent's rich design heritage.
            </p>
            <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
              <Link to="/directory">Discover Our Designers</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/ecd30635-4578-4835-8c10-63882603a3f1.png"
              alt="African Fashion Innovation" 
              className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-oma-beige">
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Our Story"
            centered={true}
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-center">
              Oma Hub was founded in 2023 by fashion industry veterans who recognized the need for a platform that truly 
              honors and showcases the incredible talent emerging from across Africa. The name "Oma" draws from West 
              African origins, representing beauty, wisdom, and community.
            </p>
            <p className="text-center mt-6">
              What began as a simple idea – to create a digital space where African designers could be discovered and celebrated – 
              has evolved into a comprehensive platform that connects designers with consumers who value craftsmanship, 
              cultural heritage, and sustainable fashion.
            </p>
            <p className="text-center mt-6">
              Today, Oma Hub serves as a bridge between traditional craftsmanship and contemporary design, helping to 
              preserve cultural techniques while embracing modern aesthetics and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Mission & Values"
          subtitle="Guided by principles that honor creativity, culture, and community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-oma-cream p-6 rounded-lg shadow-sm border border-oma-gold/10">
            <h3 className="font-canela text-2xl mb-4">Celebration</h3>
            <p className="text-oma-cocoa">
              We celebrate the rich diversity of African design, honoring traditional techniques while
              embracing contemporary expressions. Every designer on our platform represents a unique voice
              and perspective worth amplifying.
            </p>
          </div>
          
          <div className="bg-oma-cream p-6 rounded-lg shadow-sm border border-oma-gold/10">
            <h3 className="font-canela text-2xl mb-4">Connection</h3>
            <p className="text-oma-cocoa">
              We build bridges between creators and consumers, between heritage and innovation, and between
              local craftsmanship and global appreciation. Our platform facilitates meaningful connections
              that transcend geographical boundaries.
            </p>
          </div>
          
          <div className="bg-oma-cream p-6 rounded-lg shadow-sm border border-oma-gold/10">
            <h3 className="font-canela text-2xl mb-4">Curation</h3>
            <p className="text-oma-cocoa">
              We carefully curate our directory to showcase designers who demonstrate excellence in their craft,
              authenticity in their vision, and commitment to ethical practices. Our verification process ensures
              a standard of quality our community can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-oma-gold/20 to-oma-cocoa/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1400" 
                alt="Oma Hub Community" 
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">Our Community</h2>
              <p className="text-oma-cocoa text-lg mb-6">
                At the heart of Oma Hub is a vibrant community of designers, fashion enthusiasts, and cultural 
                advocates who share a passion for African design innovation.
              </p>
              <p className="text-oma-cocoa text-lg mb-8">
                We provide a platform where this community can connect, collaborate, and collectively elevate 
                African fashion on the global stage. Through our directory, newsletters, and future events, 
                we're creating opportunities for meaningful engagement and discovery.
              </p>
              <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
                <Link to="/join">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
