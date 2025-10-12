import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aggregatesimg from "@/assets/aggregates.jpg";
import msandimg from "@/assets/msand.jpg";
import psandimg from "@/assets/psand.jpg";
import roadconstructionimg from "@/assets/roadcosntruction.jpg";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "Aggregates",
      description:
        "High-quality aggregates suitable for concrete, foundations, and road work.",
      image: aggregatesimg,
    },
    {
      title: "Manufactured Sand (M-Sand)",
      description:
        "Engineered to replace river sand — providing strength, consistency, and eco-friendliness.",
      image: msandimg,
    },
    {
      title: "Plastering Sand (P-Sand)",
      description:
        "Fine sand for smooth finishes, perfect for plastering and final surface work.",
      image: psandimg,
    },
    {
      title: "Road Construction",
      description:
        "We deliver durable road solutions with top-grade materials and expert execution.",
      image: roadconstructionimg,
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
            Explore our premium construction materials and turnkey road solutions.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {getVisibleProducts().map((product, index) => (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl group h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
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
              className="relative overflow-hidden rounded-2xl group h-[360px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-sm text-gray-200">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
