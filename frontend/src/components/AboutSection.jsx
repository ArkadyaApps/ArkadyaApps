import { Globe2, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const icons = [Globe2, Target, Zap];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.about.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.features.map((feature, index) => {
            const Icon = icons[index];
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
              <h3 className="text-2xl font-bold mb-2">{t.about.leader.name}</h3>
              <p className="text-primary font-medium mb-4">{t.about.leader.title}</p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.leader.bio}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
