import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import contentData from "@/data/content.json";
import type { ContentData } from "@/types/content";

const Index = () => {
  const [data, setData] = useState<ContentData>(contentData as ContentData);

  useEffect(() => {
    // Update document title and meta tags
    document.title = data.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", data.seo.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", data.seo.keywords);
    }
  }, [data]);

  return (
    <div className="min-h-screen">
      <Navbar
        brandName={data.brand.name}
        links={data.navbar.links}
        ctaButton={data.navbar.ctaButton}
      />

      <section id="hero">
        <Hero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          ctaPrimary={data.hero.ctaPrimary}
          ctaSecondary={data.hero.ctaSecondary}
        />
      </section>

      <section id="stats">
        <Stats
          title={data.stats.title}
          items={data.stats.items}
        />
      </section>

      <section id="features">
        <Features
          title={data.features.title}
          subtitle={data.features.subtitle}
          items={data.features.items}
        />
      </section>

      <section id="how-it-works">
        <HowItWorks
          title={data.howItWorks.title}
          subtitle={data.howItWorks.subtitle}
          steps={data.howItWorks.steps}
        />
      </section>

      <section id="cta">
        <CTA
          title={data.cta.title}
          subtitle={data.cta.subtitle}
          button={data.cta.button}
        />
      </section>

      <Footer
        brandName={data.brand.name}
        copyright={data.footer.copyright}
        links={data.footer.links}
      />
    </div>
  );
};

export default Index;
