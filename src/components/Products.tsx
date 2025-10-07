import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "Aggregates",
      description: "Various construction aggregates suitable for concrete, foundations, roads, and plastering:",
      items: [
        { name: "20mm Aggregates", info: "Ideal for concrete mix, foundations, and RCC structures." },
        { name: "40mm Aggregates", info: "Used for base layers, drainage, and road work." },
        { name: "6mm & 12mm Aggregates", info: "For finer concrete applications and plastering." },
      ],
      image: "🏗️",
    },
    {
      title: "Manufactured Sand (M-Sand)",
      description: "Engineered to replace river sand with superior consistency and strength. Environmentally friendly alternative.",
      image: "🏔️",
    },
    {
      title: "Plastering Sand (P-Sand)",
      description: "Finely processed sand for smooth, crack-free finishes. Ideal for wall plastering and finishing work.",
      image: "🧱",
    },
    {
      title: "Contract-Based Road Construction",
      description: "We build durable roads using top-grade materials and expert execution. Complete turnkey solutions.",
      image: "🛣️",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Products & Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a wide range of construction-grade materials and services that meet diverse project requirements.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {getVisibleProducts().map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-2">
                    {product.description}
                  </CardDescription>

                  {/* If product has multiple items (aggregates), render as list */}
                  {product.items && (
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      {product.items.map((item, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{item.name}:</span> {item.info}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full w-12 h-12 border-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-12 h-12 border-2"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary rounded-full"
                    : "w-2 h-2 bg-muted rounded-full hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 bg-background"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{product.image}</div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-2">{product.description}</CardDescription>

                {product.items && (
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {product.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{item.name}:</span> {item.info}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
