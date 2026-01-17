
export type Language = 'tr' | 'en';

export interface Translation {
  nav: {
    services: string;
    about: string;
    contact: string;
    emergency: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    trustBadge: string;
  };
  trust: {
    title: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: string;
      details: string[];
    }[];
  };
  problems: {
    title: string;
    list: string[];
  };
  contact: {
    title: string;
    phone: string;
    address: string;
    fastSupport: string;
    whatsappBtn: string;
    callBtn: string;
    desc: string;
  };
}
