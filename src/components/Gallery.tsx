import { Card } from "@/components/ui/card";
import customer1 from "@/assets/customer1.jpg";
import customer2 from "@/assets/customer2.jpg";
import customer3 from "@/assets/customer3.jpg";
import customer4 from "@/assets/customer4.jpg";
import customer5 from "@/assets/customer5.jpg";
import customer6 from "@/assets/customer6.jpg";

const Gallery = () => {
  const customers = [
    {
      id: 1,
      image: customer1,
      name: "Aisha Mohammed",
      service: "Investment Solutions",
      location: "Kaduna"
    },
    {
      id: 2,
      image: customer2,
      name: "Ibrahim Sani",
      service: "SME Support",
      location: "Kaduna"
    },
    {
      id: 3,
      image: customer3,
      name: "Fatima Usman",
      service: "E-Business Solutions",
      location: "Kaduna"
    },
    {
      id: 4,
      image: customer4,
      name: "Mr. & Mrs. Bello",
      service: "Project Funds",
      location: "Kaduna"
    },
    {
      id: 5,
      image: customer5,
      name: "The Adamu Family",
      service: "Quick Finance",
      location: "Kaduna"
    },
    {
      id: 6,
      image: customer6,
      name: "Musa Garba",
      service: "Agriculture Services",
      location: "Kaduna"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Our Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the faces of success! Our valued customers from across Kaduna have achieved their financial and business goals with Budagreen Global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <Card key={customer.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src={customer.image} 
                  alt={`${customer.name} - Happy Budagreen Global Customer`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{customer.name}</h3>
                  <p className="text-sm text-white/90">{customer.service}</p>
                  <p className="text-xs text-white/80">{customer.location}</p>
                </div>
              </div>
              <div className="p-6 group-hover:bg-primary/5 transition-colors duration-300">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{customer.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{customer.service}</p>
                <p className="text-xs text-muted-foreground/80">{customer.location}</p>
                <div className="mt-3 text-xs text-primary font-medium">
                  ✓ Satisfied Customer
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            <span className="text-lg">🎉</span>
            <p className="text-primary font-semibold">
              Join hundreds of satisfied customers across Kaduna!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;