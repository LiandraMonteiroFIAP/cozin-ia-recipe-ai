interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export const HowItWorks = ({ title, subtitle, steps }: HowItWorksProps) => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-primary opacity-20" />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold mb-6 shadow-glow relative z-10">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
