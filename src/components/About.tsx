import { CheckCircle2, Users, Settings, Leaf, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/weare.jpg";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Experienced & Reliable Team",
      description: "Years of expertise in construction materials",
    },
    {
      icon: Settings,
      title: "Modern Crushing & Screening Units",
      description: "State-of-the-art processing equipment",
    },
    {
      icon: Leaf,
      title: "Commitment to Sustainability",
      description: "Eco-friendly practices and materials",
    },
    {
      icon: Clock,
      title: "On-Time Delivery & Flexible Logistics",
      description: "Never let your projects slow down",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We are a dedicated aggregates and construction service provider focused on 
                  quality, reliability, and sustainability. With years of experience in sourcing 
                  and delivering the finest construction materials, we've become a trusted name 
                  among builders, contractors, and infrastructure developers.
                </p>
                
                <p>
                  Our mission is simple — to provide superior aggregates and sand that help 
                  build stronger, longer-lasting structures. We believe in transparent service, 
                  consistent quality, and timely delivery that ensures your projects never slow down.
                </p>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Modern construction machinery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 bg-card p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Quality Assured</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
