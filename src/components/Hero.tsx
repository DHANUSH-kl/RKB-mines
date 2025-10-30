import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroVideo from "../public/hero2.mp4"; // 👈 import your video

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl animate-fade-in">
          <h1
            className="text-4xl sm:text-xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Where rocks meet <br />
            <span className="text-primary">Resilience</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Your trusted partner for high-quality aggregates, M-Sand, P-Sand, and reliable
            construction services — delivered on time, every time.
          </p>

          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl">
            We supply premium-grade materials for all your construction needs — from small
            projects to major infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              Get a Quote Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
