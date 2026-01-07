import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
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
    description: "Premium organic cotton t-shirt in our signature teal."
  },
  {
    id: "hoodie",
    name: "Wellness Hoodie",
    price: 65,
    image: merchHoodie,
    description: "Cozy fleece-lined hoodie with minimalist embroidery."
  },
  {
    id: "bottle",
    name: "Hydration Bottle",
    price: 28,
    image: merchBottle,
    description: "Insulated stainless steel bottle, keeps drinks cold for 24 hours."
  },
  {
    id: "tote",
    name: "Market Tote",
    price: 25,
    image: merchTote,
    description: "Durable canvas tote perfect for groceries and farmers markets."
  }
];

const Store = () => {
  const { items, addItem, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality requires payment integration. Contact us to complete your order!"
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
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

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="relative">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="font-heading">Your Cart ({totalItems} items)</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col h-full">
                  {items.length === 0 ? (
                    <p className="font-body text-muted-foreground text-center py-8">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <div className="flex-1 space-y-4 overflow-y-auto">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4 p-4 bg-secondary rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <h4 className="font-heading font-semibold text-foreground">{item.name}</h4>
                              <p className="font-body text-sm text-muted-foreground">${item.price}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="font-body w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4 mt-4 space-y-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="font-heading">Total</span>
                          <span className="font-heading">${totalPrice.toFixed(2)}</span>
                        </div>
                        <Button className="w-full" size="lg" onClick={handleCheckout}>
                          Checkout
                        </Button>
                        <Button variant="outline" className="w-full" onClick={clearCart}>
                          Clear Cart
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
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
                      <Button size="sm" onClick={() => handleAddToCart(product)}>
                        Add to Cart
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
