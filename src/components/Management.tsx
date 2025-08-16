import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target, Shield, TrendingUp, Share2 } from "lucide-react";

const Management = () => {
  const managementTeam = [
    {
      name: "BUJI ELISHA SAMAILA",
      position: "CEO/MD",
      image: "/lovable-uploads/7ef2ff54-3ad7-4368-9382-2e76216d79a5.png",
      icon: Award,
      description: "Visionary leader driving Budagreen Global's strategic growth and innovation."
    },
    {
      name: "NDAROT BUJI SAMAILA",
      position: "COO/Acting HR",
      icon: Users,
      description: "Operational excellence and human resources management specialist."
    },
    {
      name: "NASIRU RILWAN",
      position: "Business Manager",
      icon: Target,
      description: "Strategic business development and client relationship management."
    },
    {
      name: "EJIRO EKPEDE",
      position: "Risk and Compliance",
      icon: Shield,
      description: "Ensuring regulatory compliance and risk management across all operations."
    },
    {
      name: "NWOKOCHA GODSON",
      position: "General Manager",
      icon: TrendingUp,
      description: "Overall operations management and business process optimization."
    },
    {
      name: "CHRISTABEL WARAD KWAIBE",
      position: "Social Media Manager",
      icon: Share2,
      description: "Digital marketing and social media strategy implementation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Management Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced professionals leading Budagreen Global towards excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                  member.image ? 'lg:col-span-3 md:col-span-2' : ''
                } bg-gradient-to-br from-card to-card/50 border-border/40`}
              >
                <CardHeader className="text-center pb-4">
                  {member.image ? (
                    <div className="mx-auto mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-accent font-medium text-base">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-muted-foreground">Delivering superior quality in all our services and solutions</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-success/5 to-primary/5 border border-success/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Integrity</h4>
              <p className="text-muted-foreground">Building trust through transparent and ethical business practices</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/5 to-success/5 border border-accent/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground">Embracing cutting-edge solutions for sustainable growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;