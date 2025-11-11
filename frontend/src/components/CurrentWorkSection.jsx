import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const CurrentWorkSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      name: 'Winwai',
      url: 'https://rewards-platform-3.preview.emergentagent.com/',
      description: t.currentWork.projects[0].description,
      category: t.currentWork.projects[0].category,
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    },
    {
      name: 'RafflX',
      url: 'https://rafflx.lovable.app',
      description: t.currentWork.projects[1].description,
      category: t.currentWork.projects[1].category,
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    },
    {
      name: 'Wassal.io',
      url: 'http://wassal.io/',
      description: t.currentWork.projects[2].description,
      category: t.currentWork.projects[2].category,
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    }
  ];

  const handleProjectChange = (index) => {
    setSelectedProject(index);
    setCurrentSlide(0); // Reset carousel when switching projects
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === projects[selectedProject].pages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? projects[selectedProject].pages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.currentWork.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t.currentWork.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.currentWork.description}
          </p>
        </div>

        {/* Project Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((project, index) => (
            <Button
              key={index}
              onClick={() => setSelectedProject(index)}
              variant={selectedProject === index ? 'default' : 'outline'}
              className={`${
                selectedProject === index
                  ? 'bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90'
                  : 'border-primary/50 hover:bg-primary/10'
              } transition-all duration-300`}
            >
              {project.name}
            </Button>
          ))}
        </div>

        {/* Selected Project Display */}
        <div className="space-y-8">
          {/* Project Info Card */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-3xl font-bold">{projects[selectedProject].name}</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      {projects[selectedProject].category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-lg mb-4">
                    {projects[selectedProject].description}
                  </p>
                  <a
                    href={projects[selectedProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.currentWork.visitSite}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screenshot Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects[selectedProject].pages.map((page, pageIndex) => (
              <Card
                key={pageIndex}
                className="group bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Screenshot Placeholder */}
                  <div className="relative aspect-[4/3] bg-muted/50 flex items-center justify-center border-b border-border/50">
                    {page.placeholder ? (
                      <div className="flex flex-col items-center gap-3 p-6 text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground mb-1">
                            {t.currentWork.screenshotPlaceholder}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {page.name}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={page.screenshot}
                        alt={`${projects[selectedProject].name} - ${page.name}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Page Label */}
                  <div className="p-4 bg-card/80">
                    <p className="text-sm font-medium text-foreground text-center">
                      {page.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {t.currentWork.note}
          </p>
        </div>

        {/* Decorative Element */}
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

export default CurrentWorkSection;
