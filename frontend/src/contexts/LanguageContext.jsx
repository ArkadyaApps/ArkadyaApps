import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    hero: {
      title: 'ArkadyaApps',
      tagline: 'Innovating Tomorrow\'s Technology Today',
      cta: 'Get In Touch',
      specializations: ['Mobile Apps', 'Web Applications', 'AI Content', 'Crypto']
    },
    about: {
      title: 'About',
      titleHighlight: 'ArkadyaApps',
      description: 'Led by Gregory Levakis, we\'re a French tech company pushing boundaries in digital innovation.',
      features: [
        {
          title: 'Global Presence',
          description: 'Operating across France, Morocco, and Thailand with international expertise.'
        },
        {
          title: 'Focused Innovation',
          description: 'Specialized in cutting-edge mobile, web, AI, and blockchain technologies.'
        },
        {
          title: 'Rapid Execution',
          description: 'Agile development approach delivering results that exceed expectations.'
        }
      ],
      leader: {
        name: 'Gregory Levakis',
        title: 'Founder & CEO',
        bio: 'Leading operations across multiple continents, bringing innovative tech solutions to life with expertise in mobile development, web applications, AI, and blockchain technology.'
      }
    },
    work: {
      title: 'Our',
      titleHighlight: 'Work',
      description: 'Explore our portfolio of innovative projects and successful implementations across multiple industries.',
      ongoingTab: 'Ongoing Projects',
      portfolioTab: 'Portfolio',
      visitSite: 'Visit Live Site',
      screenshotPlaceholder: 'Screenshot Coming Soon',
      ongoing: [
        {
          category: 'Rewards Platform',
          description: 'A comprehensive rewards and loyalty platform enabling businesses to engage customers through gamification and incentives.'
        },
        {
          category: 'Raffle Platform',
          description: 'An innovative raffle and contest platform for running secure, transparent prize draws and promotional campaigns.'
        },
        {
          category: 'Delivery Platform',
          description: 'A modern delivery and logistics solution connecting customers with local services and products.'
        },
        {
          category: 'Community Platform',
          description: 'An exclusive community platform connecting members with shared interests, events, and networking opportunities.'
        }
      ],
      portfolio: [
        { category: 'Raffle & Contest' },
        { category: 'Travel & Experience' },
        { category: 'E-commerce Platform' }
      ]
    },
    contact: {
      title: 'Get In',
      titleHighlight: 'Touch',
      description: 'Reach out to us through any of our regional offices or via email.',
      directContact: 'Direct Contact',
      regions: {
        france: 'France',
        thailand: 'Thailand',
        morocco: 'Morocco'
      },
      labels: {
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        line: 'LINE'
      },
      email: 'Email Us',
      copyEmail: 'Copy Email',
      copySuccess: 'Copied to clipboard!'
    },
    footer: {
      company: 'ArkadyaApps',
      tagline: 'Tech Innovation',
      copyright: 'All rights reserved.',
      poweredBy: 'Powered by Gregory Levakis'
    }
  },
  fr: {
    hero: {
      title: 'ArkadyaApps',
      tagline: 'Innover la technologie de demain aujourd\'hui',
      cta: 'Nous contacter',
      specializations: ['Applications mobiles', 'Applications Web', 'Contenu IA', 'Crypto']
    },
    about: {
      title: 'À propos de',
      titleHighlight: 'ArkadyaApps',
      description: 'Dirigée par Gregory Levakis, nous sommes une entreprise technologique française repoussant les limites de l\'innovation numérique.',
      features: [
        {
          title: 'Présence mondiale',
          description: 'Opérant en France, au Maroc et en Thaïlande avec une expertise internationale.'
        },
        {
          title: 'Innovation ciblée',
          description: 'Spécialisé dans les technologies mobiles, web, IA et blockchain de pointe.'
        },
        {
          title: 'Exécution rapide',
          description: 'Approche de développement agile offrant des résultats qui dépassent les attentes.'
        }
      ],
      leader: {
        name: 'Gregory Levakis',
        title: 'Fondateur et PDG',
        bio: 'Dirigeant des opérations sur plusieurs continents, donnant vie à des solutions technologiques innovantes avec une expertise en développement mobile, applications web, IA et technologie blockchain.'
      }
    },
    work: {
      title: 'Nos',
      titleHighlight: 'Réalisations',
      description: 'Découvrez notre portefeuille de projets innovants et de mises en œuvre réussies dans plusieurs secteurs.'
    },
    currentWork: {
      title: 'Projets',
      titleHighlight: 'Actuels',
      description: 'Applications en direct que nous développons et maintenons activement pour nos clients.',
      visitSite: 'Visiter le site',
      screenshotPlaceholder: 'Capture d\'écran à venir',
      note: 'Ce sont des projets en direct et activement maintenus. Les captures d\'écran seront ajoutées prochainement.',
      projects: [
        {
          category: 'Plateforme de récompenses',
          description: 'Une plateforme complète de récompenses et de fidélité permettant aux entreprises d\'engager les clients grâce à la gamification et aux incitations.'
        },
        {
          category: 'Plateforme de tombola',
          description: 'Une plateforme innovante de tombola et de concours pour organiser des tirages au sort sécurisés et transparents et des campagnes promotionnelles.'
        },
        {
          category: 'Plateforme de livraison',
          description: 'Une solution moderne de livraison et de logistique connectant les clients aux services et produits locaux.'
        }
      ]
    },
    contact: {
      title: 'Entrer en',
      titleHighlight: 'contact',
      description: 'Contactez-nous via l\'un de nos bureaux régionaux ou par e-mail.',
      regions: {
        france: 'France',
        thailand: 'Thaïlande',
        morocco: 'Maroc'
      },
      labels: {
        phone: 'Téléphone',
        whatsapp: 'WhatsApp'
      },
      email: 'Nous envoyer un e-mail',
      copyEmail: 'Copier l\'e-mail',
      copySuccess: 'Copié dans le presse-papiers !'
    },
    footer: {
      company: 'ArkadyaApps',
      tagline: 'Innovation technologique',
      copyright: 'Tous droits réservés.',
      poweredBy: 'Propulsé par Gregory Levakis'
    }
  },
  ar: {
    hero: {
      title: 'ArkadyaApps',
      tagline: 'ابتكار تكنولوجيا الغد اليوم',
      cta: 'تواصل معنا',
      specializations: ['تطبيقات الجوال', 'تطبيقات الويب', 'محتوى الذكاء الاصطناعي', 'العملات المشفرة']
    },
    about: {
      title: 'حول',
      titleHighlight: 'ArkadyaApps',
      description: 'بقيادة غريغوري ليفاكيس، نحن شركة تقنية فرنسية تدفع حدود الابتكار الرقمي.',
      features: [
        {
          title: 'حضور عالمي',
          description: 'العمل عبر فرنسا والمغرب وتايلاند مع الخبرة الدولية.'
        },
        {
          title: 'ابتكار مركّز',
          description: 'متخصصون في تقنيات الهاتف المحمول والويب والذكاء الاصطناعي وبلوكتشين المتطورة.'
        },
        {
          title: 'تنفيذ سريع',
          description: 'نهج تطوير رشيق يقدم نتائج تتجاوز التوقعات.'
        }
      ],
      leader: {
        name: 'غريغوري ليفاكيس',
        title: 'المؤسس والرئيس التنفيذي',
        bio: 'قيادة العمليات عبر قارات متعددة، وإحياء الحلول التقنية المبتكرة بخبرة في تطوير الجوال وتطبيقات الويب والذكاء الاصطناعي وتقنية بلوكتشين.'
      }
    },
    work: {
      title: 'أعمالنا',
      titleHighlight: 'المنجزة',
      description: 'استكشف محفظتنا من المشاريع المبتكرة والتنفيذات الناجحة عبر عدة صناعات.'
    },
    currentWork: {
      title: 'المشاريع',
      titleHighlight: 'الحالية',
      description: 'التطبيقات المباشرة التي نقوم بتطويرها وصيانتها بنشاط لعملائنا.',
      visitSite: 'زيارة الموقع المباشر',
      screenshotPlaceholder: 'لقطة الشاشة قادمة قريباً',
      note: 'هذه مشاريع مباشرة ويتم صيانتها بنشاط. سيتم إضافة لقطات الشاشة قريباً.',
      projects: [
        {
          category: 'منصة المكافآت',
          description: 'منصة شاملة للمكافآت والولاء تمكن الشركات من إشراك العملاء من خلال اللعب والحوافز.'
        },
        {
          category: 'منصة السحوبات',
          description: 'منصة مبتكرة للسحوبات والمسابقات لإجراء سحوبات جوائز آمنة وشفافة وحملات ترويجية.'
        },
        {
          category: 'منصة التوصيل',
          description: 'حل حديث للتوصيل واللوجستيات يربط العملاء بالخدمات والمنتجات المحلية.'
        }
      ]
    },
    contact: {
      title: 'ابقى على',
      titleHighlight: 'تواصل',
      description: 'تواصل معنا من خلال أي من مكاتبنا الإقليمية أو عبر البريد الإلكتروني.',
      regions: {
        france: 'فرنسا',
        thailand: 'تايلاند',
        morocco: 'المغرب'
      },
      labels: {
        phone: 'هاتف',
        whatsapp: 'واتساب'
      },
      email: 'راسلنا عبر البريد الإلكتروني',
      copyEmail: 'نسخ البريد الإلكتروني',
      copySuccess: 'تم النسخ إلى الحافظة!'
    },
    footer: {
      company: 'ArkadyaApps',
      tagline: 'الابتكار التقني',
      copyright: 'جميع الحقوق محفوظة.',
      poweredBy: 'مدعوم من غريغوري ليفاكيس'
    }
  },
  th: {
    hero: {
      title: 'ArkadyaApps',
      tagline: 'นวัตกรรมเทคโนโลยีแห่งอนาคตในวันนี้',
      cta: 'ติดต่อเรา',
      specializations: ['แอปมือถือ', 'เว็บแอปพลิเคชัน', 'เนื้อหา AI', 'คริปโต']
    },
    about: {
      title: 'เกี่ยวกับ',
      titleHighlight: 'ArkadyaApps',
      description: 'นำโดย Gregory Levakis เราเป็นบริษัทเทคโนโลยีจากฝรั่งเศสที่ก้าวข้ามขีดจำกัดของนวัตกรรมดิจิทัล',
      features: [
        {
          title: 'การแสดงตนระดับโลก',
          description: 'ดำเนินงานในฝรั่งเศส โมร็อกโก และไทยด้วยความเชี่ยวชาญระดับนานาชาติ'
        },
        {
          title: 'นวัตกรรมที่มุ่งเน้น',
          description: 'เชี่ยวชาญด้านเทคโนโลยีมือถือ เว็บ AI และบล็อกเชนที่ทันสมัย'
        },
        {
          title: 'การดำเนินการที่รวดเร็ว',
          description: 'แนวทางการพัฒนาแบบ Agile ที่ให้ผลลัพธ์เกินความคาดหมาย'
        }
      ],
      leader: {
        name: 'Gregory Levakis',
        title: 'ผู้ก่อตั้งและซีอีโอ',
        bio: 'นำการดำเนินงานข้ามหลายทวีป นำโซลูชันเทคโนโลยีที่เป็นนวัตกรรมมาสู่ชีวิตด้วยความเชี่ยวชาญในการพัฒนามือถือ เว็บแอปพลิเคชัน AI และเทคโนโลยีบล็อกเชน'
      }
    },
    work: {
      title: 'ผลงาน',
      titleHighlight: 'ของเรา',
      description: 'สำรวจพอร์ตโฟลิโอของโครงการที่เป็นนวัตกรรมและมีความสำเร็จในหลายอุตสาหกรรม'
    },
    currentWork: {
      title: 'โครงการ',
      titleHighlight: 'ปัจจุบัน',
      description: 'แอปพลิเคชันที่ใช้งานจริงที่เรากำลังพัฒนาและดูแลรักษาอย่างต่อเนื่องสำหรับลูกค้าของเรา',
      visitSite: 'เยี่ยมชมเว็บไซต์',
      screenshotPlaceholder: 'ภาพหน้าจอกำลังมา',
      note: 'เหล่านี้เป็นโครงการที่ใช้งานจริงและได้รับการดูแลรักษาอย่างต่อเนื่อง ภาพหน้าจอจะถูกเพิ่มในเร็วๆ นี้',
      projects: [
        {
          category: 'แพลตฟอร์มรางวัล',
          description: 'แพลตฟอร์มรางวัลและความภักดีที่ครอบคลุมช่วยให้ธุรกิจมีส่วนร่วมกับลูกค้าผ่านการเล่นเกมและสิ่งจูงใจ'
        },
        {
          category: 'แพลตฟอร์มการจับฉลาก',
          description: 'แพลตฟอร์มการจับฉลากและการประกวดที่เป็นนวัตกรรมสำหรับการจัดการจับรางวัลที่ปลอดภัยและโปร่งใสและแคมเปญส่งเสริมการขาย'
        },
        {
          category: 'แพลตฟอร์มจัดส่ง',
          description: 'โซลูชันการจัดส่งและโลจิสติกส์สมัยใหม่ที่เชื่อมต่อลูกค้ากับบริการและผลิตภัณฑ์ในท้องถิ่น'
        }
      ]
    },
    contact: {
      title: 'ติดต่อ',
      titleHighlight: 'เรา',
      description: 'ติดต่อเราผ่านสำนักงานในภูมิภาคของเราหรือทางอีเมล',
      regions: {
        france: 'ฝรั่งเศส',
        thailand: 'ไทย',
        morocco: 'โมร็อกโก'
      },
      labels: {
        phone: 'โทรศัพท์',
        whatsapp: 'วอทส์แอพ'
      },
      email: 'ส่งอีเมลถึงเรา',
      copyEmail: 'คัดลอกอีเมล',
      copySuccess: 'คัดลอกไปยังคลิปบอร์ดแล้ว!'
    },
    footer: {
      company: 'ArkadyaApps',
      tagline: 'นวัตกรรมเทคโนโลยี',
      copyright: 'สงวนลิขสิทธิ์',
      poweredBy: 'ขับเคลื่อนโดย Gregory Levakis'
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [detectedCountry, setDetectedCountry] = useState(null);

  useEffect(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      return;
    }

    // Detect geolocation
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code;
        setDetectedCountry(country);

        // Auto-select language based on country
        if (country === 'FR') {
          setLanguage('fr');
        } else if (country === 'MA') {
          setLanguage('ar');
        } else if (country === 'TH') {
          setLanguage('th');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.log('Geolocation detection failed, using default language');
        setLanguage('en');
      }
    };

    detectLocation();
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, detectedCountry }}>
      {children}
    </LanguageContext.Provider>
  );
};
