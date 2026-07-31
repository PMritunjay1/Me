import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "HealthInsight: Multi-Agent Clinical Diagnostic System",
      description: "Advanced multi-agent clinical decision support system designed to eliminate hallucination errors. Routes symptoms to specialized AI agents and calibrates confidence using a Response Agreement & Calibration (RAC) module.",
      features: [
        "RIE Module: Parses free-text symptoms into structured clinical entities",
        "Parallel Specialist Agents: cardiology, neurology, etc. evaluate independently",
        "RAC Safety Module: Calibrates confidence, reducing expected calibration error (ECE < 0.10)",
        "Consensus Engine: Deterministic, domain-weighted argmax consensus"
      ],
      technologies: ["React", "TypeScript", "Python", "Tailwind CSS", "Vite", "OpenAI API", "RAC"],
      githubUrl: "https://github.com/PMritunjay1/Multi-agent-Diagnostic-System",
      metrics: ["88% Diagnostic Accuracy", "45% severe error reduction", "ECE < 0.10 safety bound"]
    },
    {
      title: "HOS Route Master & ELD Log Generator",
      description: "A compliant full-stack web application for commercial truck drivers that calculates FMCSA Hours of Service (HOS) compliant routes and generates 24-hour Electronic Logging Device (ELD) daily log sheets.",
      features: [
        "HOS Simulation Engine: Enforces 11h driving, 14h window, 8h break, and 70h/8-day rules",
        "Automated Delays: Pre/post-trip inspections, loading (1h), and fueling delays",
        "ELD Log Generation: Programmatically generates interactive, printable log sheets",
        "Dockerized: Multi-stage Docker files for streamlined local/production deploy"
      ],
      technologies: ["Django", "React", "Tailwind CSS", "Leaflet.js", "Docker", "Gunicorn", "WhiteNoise"],
      githubUrl: "https://github.com/PMritunjay1/hos-route-master-fullstack",
      metrics: ["FMCSA HOS compliant", "15-minute interval logging", "Leaflet Route Mapping"]
    },
    {
      title: "Fuel-Optimal Route Planner & Cost Calculator",
      description: "A production-ready Django REST API application that calculates the most fuel-optimal, cost-effective route between any two locations across the United States.",
      features: [
        "3D Cartesian cKDTree: Spatial indexing bypasses latitude distortion to search within 15 miles in <1.5ms",
        "Route Densification: Prevents missing fuel stations on sparse highway segments",
        "In-Memory Caching: Shared Django LocMemCache loads completed routes in under 15ms",
        "Connection Pooling: Requests session pooling eliminates TCP/SSL handshake latency"
      ],
      technologies: ["Django", "Python", "Pandas", "SciPy (cKDTree)", "OSRM", "Leaflet.js"],
      githubUrl: "https://github.com/PMritunjay1/fuel-route-planner",
      metrics: ["<1.5ms spatial search", "97.6% offline city matching", "<15ms cached page load"]
    },
    {
      title: "Healthcare Agent Framework: Multi-Agent RAG System",
      description: "An AI-powered administrative healthcare automation framework featuring a multi-agent LangChain orchestrator with conversational appointment booking, clinical Q&A, and EMR data automation.",
      features: [
        "Orchestration: LangChain multi-agent router delegating to specialized agents",
        "RAG Q&A: FAISS vector search over MedQA dataset via Hugging Face embeddings",
        "EMR Web Automation: Selenium-based agent for automated record entries",
        "Pluggable Backend: Swaps local Ollama (Llama 3) with OpenAI GPT-4o mini API"
      ],
      technologies: ["Python", "LangChain", "Streamlit", "FAISS", "SQLite", "Selenium", "Ollama"],
      githubUrl: "https://github.com/PMritunjay1/healthcare-agent-framework",
      metrics: ["100% local privacy option", "Conversational booking", "Automated EMR entry"]
    },
    {
      title: "Parkify: Automated Parking System",
      description: "Full-stack automated parking management system featuring QR-based digital ticketing, live admin dashboard, automated fee calculation, and monthly reports.",
      features: [
        "QR-based digital ticketing system and payment calculation",
        "Real-time admin dashboard supporting 4+ user roles",
        "Automated reports module for weekly revenue/occupancy PDFs",
        "End-to-end functional test cases validating ticketing workflow"
      ],
      technologies: ["Python", "FastAPI", "SQLAlchemy", "React", "PostgreSQL", "JWT"],
      liveUrl: "https://parkify-iiit.netlify.app/",
      githubUrl: "https://github.com/PMritunjay1/Parking-system",
      metrics: ["40% less manual admin work", "50% faster issue resolution", "200+ parking spots managed"]
    },
    {
      title: "Current Leakage Detector",
      description: "Low-cost real-time current leakage monitoring system with 95% fault detection accuracy and instant notifications.",
      features: [
        "Real-time monitoring with 95% fault detection accuracy",
        "Instant alerts for >10 Ohms deviations",
        "24/7 facility tracking dashboard with <5 minutes detection downtime",
        "80% reduction in manual equipment checking work"
      ],
      technologies: ["IoT Sensors", "Python", "Alert System", "Dashboard", "C++"],
      githubUrl: "https://github.com/PMritunjay1/current-leakage",
      metrics: ["95% fault detection accuracy", "Downtime detection <5 mins", "80% less manual checks"]
    },
    {
      title: "College Resource Site (IIIT-B)",
      description: "Centralized hub for 100+ students to share study materials and discussions with privacy-first design.",
      features: [
        "Secure API-based contact sharing",
        "Location coordination and interactive maps",
        "Lightweight moderator dashboard with interaction analytics",
        "Node/Express backend with MongoDB storage"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      liveUrl: "https://iiit-b.onrender.com/",
      githubUrl: "https://github.com/PMritunjay1/iiit-b",
      metrics: ["100+ active students", "40% less manual sharing", "Privacy-first approach"]
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