import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@budagreen.com",
      subDetails: "support@budagreen.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "070 3960 5097",
      subDetails: "090 2549 0266"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Starcade Shopping Mall No 4, 2nd Floor",
      subDetails: "Kachina Road, Sabo, Kaduna"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      subDetails: "Sat: 9:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey with Budagreen Global? Contact us today for personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-border/40 hover:shadow-soft transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                            <p className="text-sm text-muted-foreground">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.subDetails}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Why Choose Budagreen Global?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Comprehensive business solutions under one roof</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>24/7 power supply at our cyber workspace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Expert team with years of experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span>Tailored solutions for your specific needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                  <Input placeholder="John" className="border-border/60" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                  <Input placeholder="Doe" className="border-border/60" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
                <Input type="email" placeholder="john.doe@example.com" className="border-border/60" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone Number</label>
                <Input type="tel" placeholder="070 3960 5097" className="border-border/60" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Service Interest</label>
                <Input placeholder="e.g., Investment, SME Support, Cyber Workspace" className="border-border/60" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your needs and how we can help you..."
                  className="min-h-[120px] border-border/60"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-200">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;