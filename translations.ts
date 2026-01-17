
import { Translation } from './types';

export const tr: Translation = {
  nav: {
    services: "Hizmetlerimiz",
    about: "Hakkımızda",
    contact: "İletişim",
    emergency: "7/24 Acil: 0541 807 55 92"
  },
  hero: {
    title: "Ahi Tesisat: Profesyonel Çözüm Merkezi",
    subtitle: "Kırmadan dökmeden cihazla su kaçağı tespiti, kanal açma ve petek temizliği. İstanbul'un her noktasına hızlı servis.",
    cta: "Hemen Ara",
    secondaryCta: "Hizmetlerimiz",
    trustBadge: "Garantili İşçilik & 7/24 Kesintisiz Hizmet"
  },
  trust: {
    title: "Neden Ahi Tesisat?",
    items: [
      { title: "Hızlı Müdahale", desc: "Çağrınızdan sonra en kısa sürede kapınızdayız.", icon: "fa-bolt" },
      { title: "Son Teknoloji", desc: "Kameralı ve termal cihazlarla noktasal tespit yapıyoruz.", icon: "fa-microchip" },
      { title: "Garantili Tamir", desc: "Yaptığımız tüm onarımlar servis garantilidir.", icon: "fa-shield-alt" },
      { title: "Uzman Kadro", desc: "Yılların deneyimine sahip profesyonel tesisat ustaları.", icon: "fa-user-check" }
    ]
  },
  services: {
    title: "Uzmanlık Alanlarımız",
    subtitle: "Modern cihazlar ve profesyonel tekniklerle sorunları kökten çözüyoruz.",
    items: [
      { 
        title: "Sıhhi Tesisat Sızıntı Tamiri", 
        desc: "Akustik dinleme ve termal kameralar ile sızıntıyı noktasal bulup onarıyoruz.", 
        icon: "fa-search-location",
        details: ["Kırmadan Tespit", "Banyo Sızıntıları", "Alt Kata Su Damlaması"]
      },
      { 
        title: "Petek Temizleme", 
        desc: "Makinalı ilaçlı temizlik ile %30'a varan yakıt tasarrufu sağlayın.", 
        icon: "fa-fire-alt",
        details: ["Yerden Isıtma", "Petek Yıkama", "Kombi Bakımı"]
      },
      { 
        title: "Kombi Bakım ve Montaj", 
        desc: "Her marka kombi bakımı ve yeni kombi montajı uzman ekiplerimizce yapılır.", 
        icon: "fa-tools",
        details: ["Yıllık Bakım", "Kombi Montajı", "Arıza Onarımı"]
      },
      { 
        title: "Klozet Tamir ve Değişimi", 
        desc: "Klozet arızaları, iç takım değişimi ve komple klozet montaj hizmeti.", 
        icon: "fa-toilet",
        details: ["Gömme Rezervuar", "Sifon Tamiri", "Şamandıra Değişimi"]
      },
      { 
        title: "Musluk Tamir ve Değişimi", 
        desc: "Mutfak, banyo ve duş bataryaları tamiri veya yeni model montajı.", 
        icon: "fa-faucet",
        details: ["Batarya Değişimi", "Musluk Tamiri", "Duşakabin Batarya"]
      },
      { 
        title: "Gas Flex Değişimi", 
        desc: "Doğalgaz tesisat güvenliğiniz için onaylı flex boru değişimi yapıyoruz.", 
        icon: "fa-gas-pump",
        details: ["Gaz Kaçak Kontrolü", "Onaylı Malzeme", "Güvenli Montaj"]
      }
    ]
  },
  problems: {
    title: "Bu Sorunları mı Yaşıyorsunuz?",
    list: [
      "Su faturanız her zamankinden yüksek mi geliyor?",
      "Alt katın tavanında sararma veya damlama mı var?",
      "Giderlerinizden kötü kokular mı geliyor?",
      "Peteklerinizin altı soğuk, üstü sıcak mı?",
      "Musluklarınızdan su az mı akıyor?"
    ]
  },
  contact: {
    title: "Size Bir Telefon Kadar Yakınız",
    phone: "0541 807 55 92",
    address: "İstanbul Geneli 7/24 Mobil Servis Ağı",
    fastSupport: "Hızlı Destek Hattı",
    whatsappBtn: "WhatsApp'tan Yazın",
    callBtn: "Hemen Arayın",
    desc: "Tesisat sorunlarınız için 7/24 bize ulaşabilirsiniz. İstanbul'un tüm ilçelerine servisimiz mevcuttur."
  }
};

export const en: Translation = {
  nav: {
    services: "Services",
    about: "About Us",
    contact: "Contact",
    emergency: "24/7 Emergency: +90 541 807 55 92"
  },
  hero: {
    title: "Ahi Plumbing: Professional Solution Center",
    subtitle: "Leak detection with devices, drain cleaning, and radiator cleaning without breaking. Fast service across Istanbul.",
    cta: "Call Now",
    secondaryCta: "Our Services",
    trustBadge: "Guaranteed Workmanship & 24/7 Continuous Service"
  },
  trust: {
    title: "Why Ahi Plumbing?",
    items: [
      { title: "Fast Response", desc: "We are at your door as soon as possible after your call.", icon: "fa-bolt" },
      { title: "High Tech", desc: "We perform pinpoint detection with camera and thermal devices.", icon: "fa-microchip" },
      { title: "Guaranteed Repair", desc: "All our repairs are covered by a service warranty.", icon: "fa-shield-alt" },
      { title: "Expert Staff", desc: "Professional plumbing masters with years of experience.", icon: "fa-user-check" }
    ]
  },
  services: {
    title: "Our Areas of Expertise",
    subtitle: "We solve problems at the root with modern devices and professional techniques.",
    items: [
      { 
        title: "Leak Repair & Detection", 
        desc: "We find leaks precisely with acoustic listening and thermal cameras and repair them.", 
        icon: "fa-search-location",
        details: ["Non-destructive detection", "Bathroom Leaks", "Dripping Downstairs"]
      },
      { 
        title: "Radiator Cleaning", 
        desc: "Save up to 30% on fuel with professional machine cleaning.", 
        icon: "fa-fire-alt",
        details: ["Underfloor Heating", "Radiator Flushing", "Boiler Check"]
      },
      { 
        title: "Boiler Maintenance & Install", 
        desc: "Maintenance for all brands and professional installation of new units.", 
        icon: "fa-tools",
        details: ["Annual Maintenance", "New Install", "Fault Repair"]
      },
      { 
        title: "Toilet Repair & Replace", 
        desc: "Toilet issues, internal mechanism replacement, and complete unit installation.", 
        icon: "fa-toilet",
        details: ["Concealed Reservoir", "Siphon Repair", "Float Replace"]
      },
      { 
        title: "Faucet Repair & Replace", 
        desc: "Repair of kitchen, bathroom, and shower faucets or new model installation.", 
        icon: "fa-faucet",
        details: ["Battery Change", "Tap Repair", "Shower Faucets"]
      },
      { 
        title: "Gas Flex Replacement", 
        desc: "We replace approved flex pipes for your natural gas installation safety.", 
        icon: "fa-gas-pump",
        details: ["Gas Leak Control", "Approved Parts", "Safe Install"]
      }
    ]
  },
  problems: {
    title: "Experiencing These Problems?",
    list: [
      "Is your water bill higher than usual?",
      "Is there yellowing or dripping on the downstairs ceiling?",
      "Are bad odors coming from your drains?",
      "Are your radiators cold at the bottom and hot at the top?",
      "Is water flowing slowly from your faucets?"
    ]
  },
  contact: {
    title: "Just a Phone Call Away",
    phone: "+90 541 807 55 92",
    address: "24/7 Mobile Service Network Across Istanbul",
    fastSupport: "Fast Support Line",
    whatsappBtn: "Message on WhatsApp",
    callBtn: "Call Us Now",
    desc: "You can reach us 24/7 for your plumbing problems. We provide service to all districts of Istanbul."
  }
};
