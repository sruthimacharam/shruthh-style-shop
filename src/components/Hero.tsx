import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/4e7ac22e-2b9d-470d-8b8c-6107ed64a9f9.png)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-6 text-center animate-fade-in relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Timeless
            <span className="block font-normal text-white">
              Elegance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our curated collection of premium clothing designed for the modern minimalist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-medium"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;