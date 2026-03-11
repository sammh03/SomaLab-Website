import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import merchTshirt from "@/assets/merch-tshirt.jpg";
import merchBottle from "@/assets/merch-bottle.jpg";
import merchTote from "@/assets/merch-tote.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";

const products = [
  {
    id: "tshirt",
    name: "SomaLab Classic Tee",
    price: 35,
    image: merchTshirt,
    description: "Premium organic cotton t-shirt in our signature teal.",
    mailto: "mailto:hello@somalab.com.au?subject=Order: SomaLab Classic Tee"
  },
  {
    id: "hoodie",
    name: "Wellness Hoodie",
    price: 65,
    image: merchHoodie,
    description: "Cozy fleece-lined hoodie with minimalist embroidery.",
    mailto: "mailto:hello@somalab.com.au?subject=Order: Wellness Hoodie"
  },
  {
    id: "bottle",
    name: "Hydration Bottle",
    price: 28,
    image: merchBottle,
    description: "Insulated stainless steel bottle, keeps drinks cold for 24 hours.",
    mailto: "mailto:hello@somalab.com.au?subject=Order: Hydration Bottle"
  },
  {
    id: "tote",
    name: "Market Tote",
    price: 25,
    image: merchTote,
    description: "Durable canvas tote perfect for groceries and farmers markets.",
    mailto: "mailto:hello@somalab.com.au?subject=Order: Market Tote"
  }
];

const Store = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-secondary pt-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
                SomaLab Store
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Shop Wellness Merch
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-xl">
                Premium quality merchandise to support your wellness journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 shadow-md"
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="font-body text-sm font-medium text-foreground">Cart</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover-lift group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      <Button asChild size="sm">
                        <a href={product.mailto}>Order Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
