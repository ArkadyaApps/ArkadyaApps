import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const contacts = [
    {
      region: t.contact.regions.france,
      icon: Phone,
      details: [
        { label: t.contact.labels.phone, value: '+33 6 47 44 25 74', link: 'tel:+33647442574' },
      ],
      flag: '🇫🇷',
    },
    {
      region: t.contact.regions.thailand,
      icon: MessageCircle,
      details: [
        { label: t.contact.labels.whatsapp, value: '+66 98 621 20 33', link: 'https://wa.me/66986212033' },
      ],
      flag: '🇹🇭',
    },
    {
      region: t.contact.regions.morocco,
      icon: MessageCircle,
      details: [
        { label: t.contact.labels.whatsapp, value: '+212 779 81 53 93', link: 'https://wa.me/212779815393' },
      ],
      flag: '🇲🇦',
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(t.contact.copySuccess);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.contact.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="group bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl">{contact.flag}</span>
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {contact.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contact.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-sm text-muted-foreground">{detail.label}</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-colors flex-1"
                        >
                          {detail.value}
                        </a>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopy(detail.value)}
                          className="h-8 w-8 p-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Email Card */}
        <Card className="bg-gradient-to-br from-card/80 to-muted/30 border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-2">{t.contact.email}</h3>
                <a
                  href="mailto:arkadyaproperties@gmail.com"
                  className="text-lg text-primary hover:text-secondary transition-colors font-medium"
                >
                  arkadyaproperties@gmail.com
                </a>
              </div>
              <Button
                onClick={() => handleCopy('arkadyaproperties@gmail.com')}
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                {t.contact.copyEmail}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
