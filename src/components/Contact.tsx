import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleCallNow = () => {
    window.open('tel:+9108618244084', '_self');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get a Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your next project or need a reliable supply of construction 
            materials? Reach out today — our team will assist you with quotations, product 
            details, and timely delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Call to Action Card */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Get Started?
                </h3>
                
                <p className="text-muted-foreground">
                  Call us directly to discuss your project requirements, get instant quotes, 
                  and schedule delivery. Our team is ready to assist you with all your 
                  construction material needs.
                </p>

                <Button
                  onClick={handleCallNow}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
                >
                  Call Us Now
                </Button>

                <p className="text-sm text-muted-foreground">
                  Available Monday - Saturday, 8:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:+9108618244084"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      +91-086182 44084
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:Lokesh@rkbmines.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Lokesh@rkbmines.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">
                      <a
                        href="https://share.google/5E4REfYwOlqtGCK4c"
                        className="text-primary font-medium hover:underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Maps
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Business Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Sunday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;