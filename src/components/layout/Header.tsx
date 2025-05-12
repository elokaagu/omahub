
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SearchModal } from '@/components/ui/search-modal';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const collectionItems = [
  { name: 'Bridal', href: '/directory?category=bridal' },
  { name: 'Ready-to-Wear', href: '/directory?category=rtw' },
  { name: 'Occasion', href: '/directory?category=occasion' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Designers', href: '/directory' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
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
          
          <div className="hidden lg:flex lg:gap-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className="text-sm font-semibold leading-6 text-oma-black hover:text-oma-plum expand-underline px-3 py-2"
                    >
                      <Link to={item.href}>{item.name}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold leading-6 text-oma-black hover:text-oma-plum">
                    New Collections
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {collectionItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-oma-beige hover:text-oma-plum focus:bg-oma-beige focus:text-oma-plum"
                            >
                              <div className="text-sm font-semibold leading-none">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-oma-beige"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
            
            <Button asChild variant="outline" className="border-oma-plum text-oma-plum hover:bg-oma-plum hover:text-white transition-all">
              <Link to="/directory">Explore the Directory</Link>
            </Button>
            
            <Button asChild className="bg-oma-plum hover:bg-oma-plum/90 transition-all">
              <Link to="/join">Join as a Designer</Link>
            </Button>
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
                  
                  <div className="-mx-3 block rounded-lg px-3 py-2">
                    <div className="flex justify-between items-center text-base font-semibold leading-7 text-oma-black">
                      New Collections
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 space-y-2">
                      {collectionItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-lg px-3 py-2 text-base leading-7 text-oma-black hover:bg-oma-beige"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="py-6 flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="border-oma-plum text-oma-plum hover:bg-oma-plum hover:text-white w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to="/directory">Explore the Directory</Link>
                  </Button>
                  
                  <Button
                    asChild
                    className="bg-oma-plum hover:bg-oma-plum/90 w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to="/join">Join as a Designer</Link>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => {
                      setSearchOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </Button>
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
