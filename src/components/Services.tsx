import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  FileCheck, 
  Zap, 
  FolderOpen, 
  Monitor, 
  Sprout, 
  GraduationCap,
  ShoppingCart 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investment Solutions",
      description: "Strategic investment opportunities and portfolio management services tailored to your financial goals.",
      color: "text-success"
    },
    {
      icon: Users,
      title: "SME Support",
      description: "Comprehensive support for small and medium enterprises including business development and growth strategies.",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      title: "Proof of Funds",
      description: "Professional documentation and verification services for your financial proof requirements.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Quick Finance",
      description: "Fast and efficient financing solutions to meet your immediate business and personal needs.",
      color: "text-success"
    },
    {
      icon: FolderOpen,
      title: "Project Funds",
      description: "Specialized funding solutions for various project types with flexible terms and conditions.",
      color: "text-primary"
    },
    {
      icon: Monitor,
      title: "E-Business Solutions",
      description: "Digital transformation services and e-commerce solutions to modernize your business operations.",
      color: "text-accent"
    },
    {
      icon: Sprout,
      title: "Agriculture Services",
      description: "Modern agricultural solutions, farming consultancy, and sustainable farming practices.",
      color: "text-success"
    },
    {
      icon: GraduationCap,
      title: "Training & Consultancy",
      description: "Professional training programs and expert consultancy services across various business domains.",
      color: "text-primary"
    },
    {
      icon: ShoppingCart,
      title: "Farm Produce Sales",
      description: "Direct sales of quality farm produce with guaranteed freshness and competitive pricing.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and financial success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-border/40"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;