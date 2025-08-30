import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-brand-cream to-background pt-20">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 tracking-tight leading-tight">
            Timeless
            <span className="block font-normal text-brand-charcoal">
              Elegance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our curated collection of premium clothing designed for the modern minimalist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-brand-charcoal/90 px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-medium"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-primary-foreground px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-brand-stone to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;