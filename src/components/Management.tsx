import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target, Shield, TrendingUp, Share2, Sparkles } from "lucide-react";

const Management = () => {
  const managementTeam = [
    {
      name: "BUJI ELISHA SAMAILA",
      position: "CEO/MD",
      image: "/lovable-uploads/fdd36e61-20bd-40e4-a9f9-3f3c2156c0fa.png",
      icon: Award,
      description: "Visionary leader driving Budagreen Global's strategic growth and innovation."
    },
    {
      name: "NDAROT BUJI SAMAILA",
      position: "COO/Acting HR",
      image: "/lovable-uploads/5abc9a69-8507-4482-85b2-4020c2b01aa9.png",
      icon: Users,
      description: "Operational excellence and human resources management specialist."
    },
    {
      name: "NASIRU RILWAN",
      position: "Business Manager",
      image: "/lovable-uploads/b3aecdc9-9e8b-4e39-8ffb-17dff710af2c.png",
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
      image: "/lovable-uploads/02b618e5-7cf9-4139-9706-886f6d08fb9d.png",
      icon: TrendingUp,
      description: "Overall operations management and business process optimization."
    },
    {
      name: "CHRISTABEL WARAD KWALBE",
      position: "Social Media Manager",
      image: "/lovable-uploads/eae16f5f-cd2f-41cd-9948-cbde37ab47d1.png",
      icon: Share2,
      description: "Digital marketing and social media strategy implementation."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-secondary/10 to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Management Team</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the experienced professionals leading Budagreen Global towards excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {managementTeam.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className={`group hover-lift transition-all duration-500 ${
                  member.image ? 'lg:col-span-3 md:col-span-2' : ''
                } bg-gradient-to-br from-card via-card/95 to-secondary/30 border-border/40 hover:border-primary/30 animate-scale-in glass-effect`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  {member.image ? (
                    <div className="mx-auto mb-6 relative">
                      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-primary/30 hover-lift">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-pulse">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 animate-glow">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                  )}
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-accent font-semibold text-lg mt-2">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Values */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 hover-lift glass-effect animate-scale-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center animate-glow">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">Delivering superior quality in all our services and solutions</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-success/10 via-success/5 to-primary/10 border border-success/20 hover-lift glass-effect animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-success/30 to-primary/30 flex items-center justify-center animate-glow">
                <Shield className="w-10 h-10 text-success" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Integrity</h4>
              <p className="text-muted-foreground leading-relaxed">Building trust through transparent and ethical business practices</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-success/10 border border-accent/20 hover-lift glass-effect animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/30 to-success/30 flex items-center justify-center animate-glow">
                <TrendingUp className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Innovation</h4>
              <p className="text-muted-foreground leading-relaxed">Embracing cutting-edge solutions for sustainable growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;