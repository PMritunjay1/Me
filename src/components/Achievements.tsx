import { Award, Users, TrendingUp, BookOpen, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "AlgoUniversity SWE Co-Op Internship 2024",
      description: "Selected for Software Engineering Co-Op internship program at AlgoUniversity",
      icon: Award,
      category: "Internship",
      highlight: "SWE Co-Op",
      color: "primary"
    },
    {
      title: "AlgoUniversity Tech Fellowship 2024",
      description: "Selected from over 20,000 applicants (top 0.35%)",
      icon: Award,
      category: "Fellowship",
      highlight: "Top 0.35%",
      color: "primary"
    },
    {
      title: "Armacode 0 Hackathon Mentor",
      description: "Led technical mentorship for finalist teams in the national-level hackathon",
      icon: Users,
      category: "Leadership",
      highlight: "National Level",
      color: "accent"
    },
    {
      title: "GEN AI Study Jam",
      description: "Ranked top 40 out of 10,000+ participants in GenAlus Registries",
      icon: TrendingUp,
      category: "Competition",
      highlight: "Top 40/10,000+",
      color: "primary"
    },
    {
      title: "GFG 160 Days Challenge",
      description: "Completed by solving 160+ problems, ranking in top 10% of participants",
      icon: BookOpen,
      category: "Achievement",
      highlight: "Top 10%",
      color: "accent"
    },
    {
      title: "Neo4j Certified Professional",
      description: "Earned certification validating expertise in graph database design",
      icon: Star,
      category: "Certification",
      highlight: "Professional",
      color: "primary"
    },
    {
      title: "Machine Learning Specialization",
      description: "Completed Coursera specialization, trained models achieving 88% accuracy",
      icon: TrendingUp,
      category: "Course",
      highlight: "88% Accuracy",
      color: "accent"
    }
  ];

  const organizationAchievements = [
    {
      title: "Technical Event Organization",
      description: "Organized 10+ tech events engaging 700+ students on campus",
      metric: "700+ Students",
      icon: Users
    },
    {
      title: "GDSC IIIT Bhopal Ideathon 2.0",
      description: "Coordinated project management, secured 4th place out of 50+ teams",
      metric: "4th/50+ Teams",
      icon: Award
    },
    {
      title: "CodeChef Starters 175",
      description: "Ranked 19th in competitive programming contest",
      metric: "Rank #19",
      icon: Zap
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and extracurricular accomplishments
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`card-hover animate-fade-in-up h-full ${
                achievement.color === 'primary' ? 'border-primary/30' : 'border-accent/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-3 rounded-lg ${
                    achievement.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      achievement.color === 'primary' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-accent/20 text-accent'
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold leading-tight">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                  achievement.color === 'primary'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-accent/20 text-accent'
                }`}>
                  {achievement.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organization & Leadership */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center hero-text-gradient mb-8">
            Leadership & Organization
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {organizationAchievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-foreground leading-tight">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full">
                        {achievement.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <Card className="card-hover glow-primary inline-block">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold hero-text-gradient">6+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text-gradient">700+</div>
                  <div className="text-sm text-muted-foreground">Students Engaged</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text-gradient">10+</div>
                  <div className="text-sm text-muted-foreground">Events Organized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;