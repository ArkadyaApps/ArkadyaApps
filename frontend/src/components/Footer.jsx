import { Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Building2 className="w-5 h-5 text-background" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t.footer.company}</h3>
              <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {t.footer.company}. {t.footer.copyright}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t.footer.poweredBy}
            </p>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
