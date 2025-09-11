import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PMritunjay1",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/pmritunjay", 
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:pmritunjay2005@gmail.com",
      icon: Mail
    }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold hero-text-gradient mb-1">
              Mritunjay Pandey
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer & Competitive Programmer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;