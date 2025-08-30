import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Shruthh
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-foreground hover:text-brand-stone transition-colors font-medium">
              Collections
            </a>
            <a href="#about" className="text-foreground hover:text-brand-stone transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-brand-stone transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden hover:bg-muted">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;