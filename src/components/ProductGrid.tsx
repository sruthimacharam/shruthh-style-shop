import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import tshirtImage from "@/assets/product-tshirt.jpg";
import coatImage from "@/assets/product-coat.jpg";
import dressImage from "@/assets/product-dress.jpg";
import pantsImage from "@/assets/product-pants.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Essential Cotton Tee",
    price: "$68",
    image: tshirtImage,
    category: "Basics"
  },
  {
    id: 2,
    name: "Classic Trench Coat",
    price: "$298",
    image: coatImage,
    category: "Outerwear"
  },
  {
    id: 3,
    name: "Minimalist Midi Dress",
    price: "$158",
    image: dressImage,
    category: "Dresses"
  },
  {
    id: 4,
    name: "Sage Linen Pants",
    price: "$128",
    image: pantsImage,
    category: "Bottoms"
  }
];

const ProductGrid = () => {
  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
            New Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected pieces that embody our commitment to quality, sustainability, and timeless design
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-brand-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-brand-stone uppercase tracking-wider mb-2 font-medium">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-brand-charcoal transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-light text-foreground">
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-primary-foreground px-8 py-4 text-lg font-medium"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;