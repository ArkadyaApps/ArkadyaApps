import { Globe2, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  const features = [
    {
      icon: Globe2,
      title: 'Global Presence',
      description: 'Operating across France, Morocco, and Thailand with international expertise.',
    },
    {
      icon: Target,
      title: 'Focused Innovation',
      description: 'Specialized in cutting-edge mobile, web, AI, and blockchain technologies.',
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Agile development approach delivering results that exceed expectations.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ArkadyaApps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by Gregory Levakis, we're a French tech company pushing boundaries in digital innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 flex flex-col items-start h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Leadership Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-card/80 to-muted/30 border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-background">
                GL
              </div>
              <h3 className="text-2xl font-bold mb-2">Gregory Levakis</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Leading operations across multiple continents, bringing innovative tech solutions to life with expertise in mobile development, web applications, AI, and blockchain technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
