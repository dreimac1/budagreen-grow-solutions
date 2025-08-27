import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Gradient with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-success/15 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, hsl(142 72% 29% / 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, hsl(84 80% 60% / 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, hsl(142 76% 36% / 0.1) 0%, transparent 50%)`
      }}></div>
      
      {/* Floating Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-36 h-36 bg-gradient-to-br from-primary/30 to-success/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-success/40 to-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-accent/35 to-primary/25 rounded-full blur-md animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Logo with Enhanced Animation */}
          <div className="mb-8 flex justify-center animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/5c9afde7-30f5-42ad-910a-ff96b0e1d331.png" 
                alt="Budagreen Global Logo" 
                className="h-28 w-auto md:h-36 drop-shadow-2xl hover-lift animate-float"
                width="144"
                height="144"
              />
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Enhanced Title with Better Gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up text-gradient drop-shadow-lg">
            Budagreen Global
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your trusted partner for comprehensive business solutions, investment opportunities, 
            and modern cyber workspace facilities designed for <span className="text-primary font-semibold">growth and success</span>.
          </p>

          {/* Enhanced Key Features with Better Animation */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-card to-secondary/50 rounded-full px-6 py-3 shadow-elegant hover-lift glass-effect">
              <TrendingUp className="w-6 h-6 text-success animate-pulse" />
              <span className="text-base font-semibold">Investment Solutions</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-card to-secondary/50 rounded-full px-6 py-3 shadow-elegant hover-lift glass-effect">
              <Shield className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-base font-semibold">SME Support</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-card to-secondary/50 rounded-full px-6 py-3 shadow-elegant hover-lift glass-effect">
              <Zap className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-base font-semibold">24/7 Power</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-accent to-success text-primary-foreground hover-lift shine-effect animate-glow px-10 py-5 text-xl font-semibold rounded-full"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover-lift px-10 py-5 text-xl font-semibold rounded-full glass-effect"
              onClick={() => document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Cyber Workspace
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;