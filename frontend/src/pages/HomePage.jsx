import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CurrentWorkSection from '@/components/CurrentWorkSection';
import OurWorkSection from '@/components/OurWorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
      <AboutSection />
      <CurrentWorkSection />
      <OurWorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
