import { Code, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a journey to create impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hello! I'm Mritunjay Pandey, a dedicated Computer Science student at IIIT Bhopal 
                with a passion for solving complex problems and building innovative solutions. 
                My journey in programming has been driven by curiosity and a constant desire to learn.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                With over <span className="hero-text-gradient font-semibold">1854 problems solved</span> across 
                various coding platforms and a global ranking of <span className="hero-text-gradient font-semibold">#1780</span>, 
                I've developed strong analytical and problem-solving skills that I apply to real-world projects.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                I enjoy working on full-stack applications, participating in hackathons, and mentoring fellow students. 
                My goal is to leverage technology to create solutions that make a positive impact on society.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Education</h3>
                      <p className="text-muted-foreground">B.Tech CSE, IIIT Bhopal</p>
                      <p className="text-sm text-muted-foreground">2023 - 2027</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">Bhopal, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Focus Areas</h3>
                      <p className="text-muted-foreground">Full Stack Development</p>
                      <p className="text-muted-foreground">Competitive Programming</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;