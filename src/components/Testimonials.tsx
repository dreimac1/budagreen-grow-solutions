const Testimonials = () => {
  const testimonialImages = [
    "/lovable-uploads/f6eebfc8-0e0c-455c-8388-ab3356e4fa42.png",
    "/lovable-uploads/43157f90-9c80-463a-a7dd-8b1253bfcb75.png", 
    "/lovable-uploads/3cc149a2-f2cc-48cb-9090-697b5296ed65.png",
    "/lovable-uploads/bcb41f6b-3201-4056-a3f0-46c24ff1de61.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialImages.map((image, index) => (
            <div 
              key={index} 
              className="animate-fade-in hover-lift transition-all duration-300" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Customer testimonial ${index + 1}`}
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                width="432"
                height="432"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 432px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;