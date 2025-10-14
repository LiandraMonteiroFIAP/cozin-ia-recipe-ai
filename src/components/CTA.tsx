import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  subtitle: string;
  button: string;
}

export const CTA = ({ title, subtitle, button }: CTAProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-3xl p-12 md:p-16 shadow-glow relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {title}
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>

            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              {button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
