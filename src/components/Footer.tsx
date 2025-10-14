interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

interface FooterProps {
  brandName: string;
  copyright: string;
  links: FooterSection[];
}

export const Footer = ({ brandName, copyright, links }: FooterProps) => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {brandName}
            </h3>
            <p className="text-muted-foreground">
              O futuro da comida é consciente.
            </p>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
