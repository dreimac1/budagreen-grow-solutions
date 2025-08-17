import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Cyber Workspace", href: "#workspace" },
    { name: "Management", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-background/95'
    } backdrop-blur-sm border-b border-border`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/5c9afde7-30f5-42ad-910a-ff96b0e1d331.png" 
                alt="Budagreen Global Logo" 
                className="h-12 w-auto hover-lift animate-float"
              />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </div>
            </div>
            <div className="text-xl font-bold text-gradient">Budagreen Global</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover-lift shine-effect animate-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover-lift"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4 bg-gradient-to-br from-card to-secondary/20 rounded-lg p-4 glass-effect">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground mt-4 shine-effect animate-glow"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;