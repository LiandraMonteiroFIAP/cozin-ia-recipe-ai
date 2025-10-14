import heroImage from "@/assets/hero-image.jpg";

export const HeroImage = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-2xl shadow-elegant">
          <img
            src={heroImage}
            alt="Tigela colorida com salada de frutas frescas representando alimentação saudável e sustentável"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
