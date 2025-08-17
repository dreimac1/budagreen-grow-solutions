import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Mahmud",
      location: "Abuja, FCT",
      role: "Small Business Owner",
      content: "Budagreen Global has transformed my business operations. Their comprehensive services and professional approach made all the difference. Highly recommended!",
      rating: 5
    },
    {
      name: "Chinedu Okafor",
      location: "Lagos State",
      role: "Tech Entrepreneur", 
      content: "Working with Budagreen Global was a game-changer. Their team's expertise in business development helped us scale beyond our expectations. Excellent service delivery!",
      rating: 5
    },
    {
      name: "Fatima Aliyu",
      location: "Kano State",
      role: "Import/Export Merchant",
      content: "The professionalism and attention to detail from Budagreen Global is outstanding. They understood our needs and delivered beyond expectations. Truly reliable partners!",
      rating: 5
    },
    {
      name: "Emeka Nwachukwu", 
      location: "Rivers State",
      role: "Manufacturing Executive",
      content: "Budagreen Global's innovative solutions and strategic guidance have been instrumental in our company's growth. Their team is knowledgeable and trustworthy.",
      rating: 5
    },
    {
      name: "Zainab Ibrahim",
      location: "Kaduna State", 
      role: "Retail Chain Owner",
      content: "I am impressed with Budagreen Global's commitment to excellence. Their services are top-notch and they always deliver on time. Great experience working with them!",
      rating: 5
    },
    {
      name: "Olumide Adebayo",
      location: "Oyo State",
      role: "Agribusiness Consultant",
      content: "Budagreen Global exceeded our expectations with their comprehensive business solutions. Their professional approach and results-driven mindset make them stand out.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied clients across Nigeria who have experienced the Budagreen Global difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-effect hover-lift transition-all duration-300 border-primary/20 hover:border-primary/30 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-primary/20 pt-4">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="glass-effect p-8 rounded-xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Join Our Growing Family of Satisfied Clients
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the Budagreen Global difference and see why businesses across Nigeria trust us for their growth and success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 rounded-full">✓ Trusted by 500+ Businesses</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">✓ 98% Client Satisfaction</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">✓ Nigeria-Wide Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;