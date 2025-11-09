import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const OurWorkSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/feqvups8_Capture.JPG',
      alt: 'Project 1'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/hvqq7s3q_Capture1.JPG',
      alt: 'Project 2'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/vgswahhi_WhatsApp%20Image%202025-11-09%20at%2020.05.06_25994c8e.jpg',
      alt: 'Project 3'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-muted/20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.work.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t.work.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.work.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300" 
                       style={{ transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)' }}>
                    <div className="flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 rounded-lg" />
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
