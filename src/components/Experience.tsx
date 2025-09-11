import { Briefcase, Users, BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "SWE Co-Op Intern",
      organization: "AlgoUniversity",
      department: "Tech Fellowship Program",
      duration: "1st May 2025 - 31st Jul 2025",
      description: "Selected as SWE Co-Op Intern in the prestigious AlgoUniversity Tech Fellowship program, working on real-world software engineering projects and gaining industry experience.",
      icon: Briefcase,
      certificate: "/Me/certicate.jpg"
    },
    {
      title: "Class Representative",
      organization: "IIIT Bhopal",
      department: "CSE Section-2, 3rd Semester",
      duration: "Aug 2024 - Present",
      description: "Leading and representing the interests of CSE Section-2 students, facilitating communication between students and faculty.",
      icon: Users,
      current: true
    },
    {
      title: "Teaching Assistant - Discrete Structures",
      organization: "IIIT Bhopal", 
      department: "Under Dr. Habibul Islam",
      duration: "Jan 2025 - Jun 2025",
      description: "Supporting course instruction by designing tutorials and evaluating assignments for 100+ students, enhancing their understanding of discrete mathematics concepts.",
      icon: BookOpen,
    },
    {
      title: "Teaching Assistant - Engineering Physics",
      organization: "IIIT Bhopal",
      department: "Under Dr. Nikita Acharya", 
      duration: "Jul 2024 - Dec 2024",
      description: "Assisted in delivering lectures, grading assignments, and mentoring 100+ students in fundamental physics concepts for engineering applications.",
      icon: BookOpen,
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Positions of responsibility and academic contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title}
              className={`card-hover animate-fade-in-up ${exp.current ? 'border-primary/50 glow-primary' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${exp.current ? 'bg-primary/20' : 'bg-muted'}`}>
                    <exp.icon className={`w-6 h-6 ${exp.current ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        {exp.duration}
                        {exp.current && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="font-semibold text-primary">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground">{exp.department}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  {exp.description}
                </p>
                {exp.certificate && (
                  <div className="mt-4">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="card-hover inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">200+ Students Mentored</h3>
                  <p className="text-muted-foreground">Across multiple courses and semesters</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
