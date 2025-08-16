import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-success/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/5c9afde7-30f5-42ad-910a-ff96b0e1d331.png" 
              alt="Budagreen Global Logo" 
              className="h-24 w-auto md:h-32 drop-shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
            Budagreen Global
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive business solutions, investment opportunities, 
            and modern cyber workspace facilities designed for growth and success.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-soft">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">Investment Solutions</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-soft">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">SME Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-soft">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">24/7 Power</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-200 shadow-elegant px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Cyber Workspace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;