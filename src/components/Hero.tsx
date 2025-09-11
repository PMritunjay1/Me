import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer & Competitive Programer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 hero-text-gradient">
            Mritunjay Pandey
          </h1>
          <div className="mb-8"> 
          <img
            src="/photo.jpg" 
            alt="Mritunjay Pandey"
            className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg border-4 border-primary/50 hover:scale-105 transition-transform duration-300"
          />
        </div>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2 font-mono">
            <span className="inline-block min-h-[1.5rem]">
              {displayedText}
              <span className="animate-blink-caret">|</span>
            </span>
          </div>
          <p className="text-lg text-muted-foreground">
            3rd Year CSE Student at IIIT Bhopal
          </p>
        </div>
        
        {/* <div className="mb-8 space-y-4">
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable solutions and solving complex problems. 
            With <span className="hero-text-gradient font-semibold">1854+ problems solved</span> and 
            ranked <span className="hero-text-gradient font-semibold">#1780 globally</span>, 
            I bring both theoretical knowledge and practical experience to every project.
          </p>
        </div> */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="glow-primary hover:glow-primary bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/PMritunjay1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/pmritunjay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:pmritunjay2005@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-primary cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;