import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CyberWorkspace from "@/components/CyberWorkspace";
import Management from "@/components/Management";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <CyberWorkspace />
        <Management />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;