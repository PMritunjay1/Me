import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Parkify: Automated Parking System",
      description: "Full-stack Parking Management System built with Python, FastAPI, SQLAlchemy, and JS for 200+ spots, reducing manual work by 40%.",
      features: [
        "QR-based digital ticketing system",
        "Real-time admin dashboard with 4+ user roles",
        "Reports module with weekly revenue/occupancy PDFs",
        "Fast ticket search and lost-ticket assistance"
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "JavaScript", "QR Code"],
      liveUrl: "https://parkify-iiit.netlify.app/",
      githubUrl: "https://github.com/PMritunjay1/Parking-system",
      metrics: ["200+ parking spots", "40% less manual work", "50% faster resolution"]
    },
    
    {
      title: "College Resource Site (IIIT-B)",
      description: "Centralized hub for 100+ students to share study materials and discussions with privacy-first design.",
      features: [
        "Secure API-based contact sharing",
        "Location coordination feature",
        "Lightweight moderator dashboard",
        "User interaction analytics"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      liveUrl: "https://iiit-b.onrender.com/",
      githubUrl: "https://github.com/PMritunjay1/iiit-b",
      metrics: ["100+ active students", "40% less manual sharing", "Privacy-first approach"]
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and SEO optimization.",
      features: [
        "Responsive design with modern UI/UX",
        "Smooth animations and interactive elements",
        "SEO optimized with meta tags and semantic HTML",
        "Fast loading with optimized assets"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      liveUrl: "https://pmritunjay1.github.io/Me/",
      githubUrl: "https://github.com/PMritunjay1/Me",
      metrics: ["100% responsive", "Fast loading", "SEO optimized"]
    },
    {
      title: "Current Leakage Detector", 
      description: "Low-cost real-time current leakage monitoring system with 95% fault detection accuracy and instant alerts.",
      features: [
        "Real-time monitoring with 95% accuracy",
        "Instant alerts for >10 Ohms deviations",
        "24/7 facility tracking dashboard",
        "Reduces downtime detection to <5 minutes"
      ],
      technologies: ["IoT Sensors", "Python", "Dashboard", "Alert System"],
      githubUrl: "https://github.com/PMritunjay1/current-leakage",
      metrics: ["95% accuracy", "80% less manual checks", "<5 min detection"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Impact:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;