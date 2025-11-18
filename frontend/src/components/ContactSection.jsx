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

        {/* Direct Contact Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">{t.contact.directContact}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/66986212033"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30 hover:border-green-500/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground mb-1">{t.contact.labels.whatsapp}</p>
                    <p className="text-sm text-muted-foreground">+66 98 621 20 33</p>
                  </div>
                  <svg className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </CardContent>
              </Card>
            </a>

            {/* LINE Button */}
            <a
              href="https://line.me/ti/p/~arkadyaapps"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gradient-to-br from-green-400/10 to-green-500/10 border-green-400/30 hover:border-green-400/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400/20 to-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-foreground mb-1">{t.contact.labels.line}</p>
                    <p className="text-sm text-muted-foreground">@arkadyaapps</p>
                  </div>
                  <svg className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
