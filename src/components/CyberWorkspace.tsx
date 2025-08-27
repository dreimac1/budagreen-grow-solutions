import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Wifi, Shield, Clock, Coffee, Car } from "lucide-react";

const CyberWorkspace = () => {
  const features = [
    {
      icon: Zap,
      title: "24/7 Power Supply",
      description: "Uninterrupted electricity with backup generators ensuring your work never stops"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Ultra-fast fiber internet connectivity for seamless digital operations"
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "Advanced security systems with 24/7 monitoring and access control"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Round-the-clock access to accommodate your business schedule"
    },
    {
      icon: Coffee,
      title: "Comfortable Amenities",
      description: "Modern facilities including refreshment areas and comfortable workspaces"
    },
    {
      icon: Car,
      title: "Convenient Location",
      description: "Easy access with ample parking in a quiet, serene environment"
    }
  ];

  return (
    <section id="workspace" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Budagreen Cyber Workspace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience productivity in our state-of-the-art cyber workspace designed for modern businesses. 
            Enjoy 24-hour electricity supply in a quiet and serene environment perfect for focused work.
          </p>
        </div>

        {/* Workspace Image */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/ebd99633-08e7-47da-9cd9-e957f182fce7.png" 
            alt="Budagreen Cyber Workspace - Modern office chairs and workstations"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-elegant"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workspace Info Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-2">Why Choose Our Workspace?</CardTitle>
              <CardDescription className="text-muted-foreground text-base">
                The perfect environment for productivity and growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Uninterrupted Power Supply</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/40">
                  <span className="text-foreground font-medium">Quiet Environment</span>
                  <span className="text-success">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/40">
                  <span className="text-foreground font-medium">Serene Location</span>
                  <span className="text-success">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/40">
                  <span className="text-foreground font-medium">Modern Facilities</span>
                  <span className="text-success">✓</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-200">
                  Book a Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CyberWorkspace;