import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SearchModal } from '@/components/ui/search-modal';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Directory', href: '/directory' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <header className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-oma-cream/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      )}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img 
                src="/lovable-uploads/dc25584e-502c-48aa-bcd9-42a356c77c1c.png" 
                alt="Oma Hub" 
                className="h-4 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-oma-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-sm font-semibold leading-6 text-oma-black hover:text-oma-plum expand-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-oma-beige"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
              <Link to="/join">Join the Hub</Link>
            </Button>
          </div>
        </nav>

        <div className={cn(
          "fixed inset-0 z-50 bg-oma-cream lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-oma-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-canela text-2xl font-medium">Oma Hub</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-oma-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-oma-black hover:bg-oma-beige"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/join"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-oma-plum hover:bg-oma-plum/90 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join the Hub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchModal 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
      />
    </>
  );
}
