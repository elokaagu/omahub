import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-oma-beige border-t border-oma-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/dc25584e-502c-48aa-bcd9-42a356c77c1c.png" 
            alt="Oma Hub" 
            className="h-6 w-auto mb-4"
          />
          <p className="text-oma-cocoa mb-6 max-w-md">
            Spotlighting Africa's emerging designers through a carefully curated platform that celebrates craftsmanship, creativity, and culture.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:w-2/3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-oma-black mb-6">Navigate</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Directory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-oma-black mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/join" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Join the Hub
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-oma-black mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:info@omahub.com" className="text-oma-cocoa hover:text-oma-plum expand-underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-oma-gold/20 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-oma-cocoa">
            &copy; {new Date().getFullYear()} Oma Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
