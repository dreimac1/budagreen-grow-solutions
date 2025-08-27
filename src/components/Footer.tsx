import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Investment Solutions",
    "SME Support", 
    "Proof of Funds",
    "Quick Finance",
    "Project Funds"
  ];

  const additionalServices = [
    "E-Business Solutions",
    "Agriculture Services", 
    "Training & Consultancy",
    "Farm Produce Sales",
    "Cyber Workspace"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5c9afde7-30f5-42ad-910a-ff96b0e1d331.png" 
                alt="Budagreen Global Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <h3 className="text-xl font-bold">Budagreen Global</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for comprehensive business solutions, investment opportunities, 
              and modern workspace facilities designed for growth and success.
            </p>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Financial Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Services</h4>
            <ul className="space-y-2">
              {additionalServices.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-primary-foreground/80">Email:</p>
                <p>info@budagreenglobal.com</p>
                <p>Support@budagreenglobal.com</p>
              </div>
              <div>
                <p className="text-primary-foreground/80">Phone:</p>
                <p>070 3960 5097 | 090 2549 0266</p>
              </div>
              <div>
                <p className="text-primary-foreground/80">Location:</p>
                <p>Starcade shopping mall N0 4 2nd Floor, Kachia Road Sabo ,Kaduna</p>
              </div>
              <div>
                <p className="text-primary-foreground/80 mb-2">Follow Us:</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com/BudagreenGlobal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Facebook size={16} />
                    <span className="text-xs">Budagreen Global</span>
                  </a>
                  <a 
                    href="https://instagram.com/budagreengloba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Instagram size={16} />
                    <span className="text-xs">@budagreengloba</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} Budagreen Global. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;