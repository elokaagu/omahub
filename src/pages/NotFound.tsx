
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-oma-beige/50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="heading-lg mb-4">404</h1>
        <p className="text-xl text-oma-cocoa mb-8">
          We couldn't find the page you're looking for. Perhaps you're looking for a designer that isn't in our directory yet?
        </p>
        <div className="space-x-4">
          <Button asChild className="bg-oma-plum hover:bg-oma-plum/90">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-oma-gold/20 hover:bg-oma-beige">
            <Link to="/directory">Browse Directory</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
