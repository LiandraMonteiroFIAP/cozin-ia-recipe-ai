import { Card } from "@/components/ui/card";
import { Camera, Mic, Sparkles, Leaf, Heart, Clock, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Mic,
  Sparkles,
  Leaf,
  Heart,
  Clock,
};

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export const Features = ({ title, subtitle, items }: FeaturesProps) => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
