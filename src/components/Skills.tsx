import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
      icon: "💻"
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      icon: "🎨"
    },
    {
      title: "Backend Development",
      skills: ["FastAPI", "SQLAlchemy", "MongoDB", "PostgreSQL"],
      icon: "⚙️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 bg-primary/10 rounded-lg text-center text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;