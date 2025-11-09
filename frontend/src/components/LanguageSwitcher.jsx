import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, changeLanguage, detectedCountry } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="fixed top-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card hover:shadow-elegant transition-all duration-300"
          >
            <Languages className="w-4 h-4 text-primary" />
            <span className="text-lg">{currentLanguage?.flag}</span>
            <span className="hidden sm:inline text-sm font-medium">{currentLanguage?.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-sm border-border/50">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="cursor-pointer flex items-center gap-3 hover:bg-primary/10"
            >
              <span className="text-xl">{lang.flag}</span>
              <span className={language === lang.code ? 'font-semibold text-primary' : ''}>
                {lang.name}
              </span>
              {detectedCountry && (
                (detectedCountry === 'FR' && lang.code === 'fr') ||
                (detectedCountry === 'MA' && lang.code === 'ar') ||
                (detectedCountry === 'TH' && lang.code === 'th')
              ) && (
                <span className="ml-auto text-xs text-muted-foreground">(detected)</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
