export interface NavLink {
  label: string;
  href: string;
}

export interface Navbar {
  links: NavLink[];
  ctaButton: string;
}

export interface Brand {
  name: string;
  slogan: string;
  shortDescription: string;
  longDescription: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Stats {
  title: string;
  items: StatItem[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface Features {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface HowItWorks {
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface CTA {
  title: string;
  subtitle: string;
  button: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

export interface Footer {
  copyright: string;
  links: FooterSection[];
}

export interface ContentData {
  brand: Brand;
  seo: SEO;
  navbar: Navbar;
  hero: Hero;
  stats: Stats;
  features: Features;
  howItWorks: HowItWorks;
  cta: CTA;
  footer: Footer;
}
