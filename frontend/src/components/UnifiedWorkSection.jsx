import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const UnifiedWorkSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState('ongoing');
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredPortfolioIndex, setHoveredPortfolioIndex] = useState(null);

  const ongoingProjects = [
    {
      name: 'Winwai',
      url: 'https://rewards-platform-3.preview.emergentagent.com/',
      description: t.work.ongoing[0].description,
      category: t.work.ongoing[0].category,
      status: 'Live',
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    },
    {
      name: 'RafflX',
      url: 'https://rafflx.lovable.app',
      description: t.work.ongoing[1].description,
      category: t.work.ongoing[1].category,
      status: 'Live',
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    },
    {
      name: 'Wassal.io',
      url: 'http://wassal.io/',
      description: t.work.ongoing[2].description,
      category: t.work.ongoing[2].category,
      status: 'Live',
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    },
    {
      name: 'Fragma Society',
      url: 'https://fragmasociety.com/',
      description: t.work.ongoing[3].description,
      category: t.work.ongoing[3].category,
      status: 'Live',
      pages: [
        { name: 'Homepage', placeholder: true },
        { name: 'Page 1', placeholder: true },
        { name: 'Page 2', placeholder: true }
      ]
    }
  ];

  const portfolioProjects = [
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/feqvups8_Capture.JPG',
      name: 'RafflX Platform',
      category: t.work.portfolio[0].category
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/hvqq7s3q_Capture1.JPG',
      name: 'Wandr Experience',
      category: t.work.portfolio[1].category
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_54245aee-94bf-41b2-bce2-e38b71b3e2d6/artifacts/vgswahhi_WhatsApp%20Image%202025-11-09%20at%2020.05.06_25994c8e.jpg',
      name: 'Electronics Platform',
      category: t.work.portfolio[2].category
    }
  ];

  const handleProjectChange = (index) => {
    setSelectedProject(index);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === ongoingProjects[selectedProject].pages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? ongoingProjects[selectedProject].pages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 animate-float">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.work.title} <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{t.work.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.work.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab('ongoing')}
            size="lg"
            className={`relative overflow-hidden transition-all duration-300 ${
              activeTab === 'ongoing'
                ? 'bg-gradient-to-r from-primary to-secondary text-background shadow-elegant'
                : 'bg-card/50 text-foreground border-2 border-border/50 hover:border-primary/50'
            }`}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {t.work.ongoingTab}
            {activeTab === 'ongoing' && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            )}
          </Button>
          <Button
            onClick={() => setActiveTab('portfolio')}
            size="lg"
            className={`relative overflow-hidden transition-all duration-300 ${
              activeTab === 'portfolio'
                ? 'bg-gradient-to-r from-primary to-secondary text-background shadow-elegant'
                : 'bg-card/50 text-foreground border-2 border-border/50 hover:border-primary/50'
            }`}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            {t.work.portfolioTab}
            {activeTab === 'portfolio' && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            )}
          </Button>
        </div>

        {/* Ongoing Projects Tab */}
        {activeTab === 'ongoing' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {ongoingProjects.map((project, index) => (
                <Button
                  key={index}
                  onClick={() => handleProjectChange(index)}
                  variant={selectedProject === index ? 'default' : 'outline'}
                  className={`group relative ${
                    selectedProject === index
                      ? 'bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 shadow-glow'
                      : 'border-primary/30 hover:border-primary/60 hover:bg-primary/5'
                  } transition-all duration-300`}
                >
                  <span className="relative z-10">{project.name}</span>
                  {selectedProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  )}
                </Button>
              ))}
            </div>

            {/* Project Info Card */}
            <Card className="bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        {ongoingProjects[selectedProject].name}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 animate-pulse-slow">
                        {ongoingProjects[selectedProject].category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        {ongoingProjects[selectedProject].status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
                      {ongoingProjects[selectedProject].description}
                    </p>
                    <a
                      href={ongoingProjects[selectedProject].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-all duration-300 font-medium group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      {t.work.visitSite}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <Card className="bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center overflow-hidden">
                    {ongoingProjects[selectedProject].pages[currentSlide].placeholder ? (
                      <div className="flex flex-col items-center gap-4 p-8 text-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center animate-float shadow-glow">
                          <ImageIcon className="w-12 h-12 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-foreground mb-2">
                            {t.work.screenshotPlaceholder}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {ongoingProjects[selectedProject].pages[currentSlide].name}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={ongoingProjects[selectedProject].pages[currentSlide].screenshot}
                        alt={`${ongoingProjects[selectedProject].name} - ${ongoingProjects[selectedProject].pages[currentSlide].name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center hover:bg-background hover:border-primary hover:scale-110 transition-all duration-300 shadow-elegant"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center hover:bg-background hover:border-primary hover:scale-110 transition-all duration-300 shadow-elegant"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6 text-primary" />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="flex items-center justify-center gap-2 py-5 bg-gradient-to-r from-card/80 via-card to-card/80">
                    {ongoingProjects[selectedProject].pages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide
                            ? 'w-10 h-2.5 bg-gradient-to-r from-primary to-secondary shadow-glow'
                            : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Page Label */}
                  <div className="px-6 py-4 bg-gradient-to-r from-card/90 to-card/70 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground text-center">
                      {ongoingProjects[selectedProject].pages[currentSlide].name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredPortfolioIndex(index)}
                onMouseLeave={() => setHoveredPortfolioIndex(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent transition-opacity duration-500 ${
                    hoveredPortfolioIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500" 
                         style={{ transform: hoveredPortfolioIndex === index ? 'translateY(0)' : 'translateY(20px)' }}>
                      <h4 className="text-xl font-bold text-foreground mb-2">{project.name}</h4>
                      <p className="text-sm text-primary font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 rounded-lg" />
              </Card>
            ))}
          </div>
        )}

        {/* Bottom Decorative */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};

export default UnifiedWorkSection;
