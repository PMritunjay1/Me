import { ExternalLink, Trophy, Target, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "Codeforces",
      username: "pmritunjay_",
      url: "https://codeforces.com/profile/pmritunjay_",
      verified: true,
      rating: "Specialist",
      color: "bg-blue-500"
    },
    {
      platform: "LeetCode",
      username: "pmritunjay",
      url: "https://leetcode.com/u/pmritunjay",
      verified: true,
      color: "bg-orange-500"
    },
    {
      platform: "CodeChef", 
      username: "pmritunjay",
      url: "https://www.codechef.com/users/pmritunjay",
      verified: true,
      rating: "4★ (Specialist)",
      color: "bg-amber-600"
    },
    {
      platform: "GeeksforGeeks",
      username: "pmritunjpdjt", 
      url: "https://www.geeksforgeeks.org/user/pmritunjpdjt",
      verified: true,
      color: "bg-green-600"
    },
    
  ];

  const stats = [
    {
      label: "Global Rank",
      value: "#1780",
      icon: Trophy,
      description: "Based on C Score"
    },
    {
      label: "Total Questions",
      value: "1854+",
      icon: Target,
      description: "Across all platforms"
    },
    {
      label: "Active Days",
      value: "331",
      icon: Calendar,
      description: "Consistent practice"
    },
    {
      label: "Max Streak",
      value: "158 days",
      icon: Zap,
      description: "Longest streak achieved"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Coding Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey across competitive programming platforms
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold hero-text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Card 
              key={profile.platform}
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${profile.color}`}></div>
                    {profile.platform}
                  </CardTitle>
                  {profile.verified && (
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Username</p>
                  <p className="font-mono text-foreground">@{profile.username}</p>
                </div>
                
                {profile.rating && (
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-semibold text-accent">{profile.rating}</p>
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Visit Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CodingProfiles;