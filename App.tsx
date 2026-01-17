
import React, { useState, useEffect } from 'react';
import { tr, en } from './translations';
import { Language, Translation } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('tr');
  const [t, setT] = useState<Translation>(tr);
  
  // UI States
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setT(lang === 'tr' ? tr : en);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const businessPhone = "0541 807 55 92";
  const businessPhoneInt = "905418075592";

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 font-sans text-slate-900">
      
      {/* Top Bar for Urgent Contact */}
      <div className="bg-blue-900 text-white py-2 hidden md:block border-b border-blue-800">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-medium">
          <div className="flex space-x-6">
            <span><i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>{t.contact.address}</span>
            <span><i className="fas fa-clock text-blue-400 mr-2"></i>{lang === 'tr' ? '7/24 Teknik Servis' : '24/7 Technical Service'}</span>
          </div>
          <div className="flex items-center space-x-4">
             <a href={`tel:${businessPhoneInt}`} className="hover:text-blue-300 transition-colors">
               <i className="fas fa-phone-alt mr-2 text-blue-400"></i>{businessPhone}
             </a>
             <button onClick={toggleLang} className="bg-blue-800 px-3 py-1 rounded hover:bg-blue-700 uppercase font-bold text-xs tracking-widest">
               {lang}
             </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-xl py-2' : 'bg-white py-4 border-b'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg relative group overflow-hidden">
              <i className="fas fa-droplet text-lg absolute translate-y-[-2px]"></i>
              <i className="fas fa-wrench text-xs absolute translate-y-[2px] opacity-70"></i>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter block leading-none">
                AHİ <span className="text-blue-600">TESİSAT</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{lang === 'tr' ? 'Teknoloji & Güven' : 'Tech & Trust'}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 font-bold text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors uppercase text-sm">{t.nav.services}</a>
            <a href="#problems" className="hover:text-blue-600 transition-colors uppercase text-sm">{lang === 'tr' ? 'Sorun Giderme' : 'Troubleshooting'}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors uppercase text-sm">{t.nav.contact}</a>
          </div>

          <div className="flex items-center space-x-3">
             <a href={`tel:${businessPhoneInt}`} className="hidden sm:flex items-center bg-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all active:scale-95">
               <i className="fas fa-phone-alt mr-2 animate-pulse"></i>
               {t.nav.emergency}
             </a>
             <button onClick={toggleLang} className="md:hidden p-2 bg-slate-100 rounded-lg text-xs font-bold">
               {lang.toUpperCase()}
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.trustBadge}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
              {t.hero.title.split(':').map((part, i) => (
                <span key={i} className={i === 1 ? "text-blue-600 block" : "block"}>{part}</span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={`https://wa.me/${businessPhoneInt}`} target="_blank" className="w-full sm:w-auto px-10 py-5 bg-green-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center">
                <i className="fab fa-whatsapp mr-3"></i> WhatsApp
              </a>
              <a href={`tel:${businessPhoneInt}`} className="w-full sm:w-auto px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-800 transition-all flex items-center justify-center">
                <i className="fas fa-phone-alt mr-3"></i> {t.hero.cta}
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
             <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
               <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200" alt="Plumbing Expert" className="w-full h-[500px] object-cover" />
               <div className="absolute inset-0 bg-blue-900/20"></div>
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl flex items-center justify-between">
                 <div>
                   <div className="text-sm font-bold text-blue-600 uppercase mb-1">{lang === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction'}</div>
                   <div className="flex text-yellow-400 text-lg">
                     <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                   </div>
                 </div>
                 <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">4.9/5</span>
                 </div>
               </div>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-20 transform rotate-12 border-4 border-white">
                <span className="text-sm font-bold">{lang === 'tr' ? 'SADECE' : 'ONLY'}</span>
                <span className="text-3xl font-black">30</span>
                <span className="text-xs font-bold uppercase">{lang === 'tr' ? 'DAKİKA' : 'MINUTES'}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
           {t.trust.items.map((item, idx) => (
             <div key={idx} className="flex flex-col items-center text-center text-white group">
               <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                 <i className={`fas ${item.icon} text-2xl`}></i>
               </div>
               <h4 className="font-bold text-lg mb-1">{item.title}</h4>
               <p className="text-slate-400 text-sm max-w-[200px]">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Problem Checker Section */}
      <section id="problems" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-8">
           <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-20 bg-blue-700 text-white">
                <h2 className="text-4xl font-black mb-8 leading-tight">{t.problems.title}</h2>
                <ul className="space-y-6">
                  {t.problems.list.map((problem, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <i className="fas fa-question text-[10px] text-white"></i>
                      </div>
                      <span className="text-xl font-medium opacity-90">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                 <div className="text-center mb-10">
                    <i className="fas fa-tools text-6xl text-blue-100 mb-6"></i>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">{lang === 'tr' ? 'Nokta Atışı Tespit' : 'Pinpoint Accuracy'}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {lang === 'tr' 
                        ? 'Gelişmiş termal kameralarımız ve akustik dinleme cihazlarımızla arızayı tam yerinde tespit ediyoruz.' 
                        : 'We detect faults exactly on site with our advanced thermal cameras and acoustic listening devices.'}
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                       <span className="block text-3xl font-black text-blue-600 mb-1">100%</span>
                       <span className="text-xs font-bold text-slate-500 uppercase">{lang === 'tr' ? 'Memnuniyet' : 'Satisfaction'}</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                       <span className="block text-3xl font-black text-blue-600 mb-1">15+</span>
                       <span className="text-xs font-bold text-slate-500 uppercase">{lang === 'tr' ? 'Tecrübe' : 'Experience'}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6">{t.services.title}</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">{t.services.subtitle}</p>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="group p-1 bg-slate-50 rounded-[2.5rem] hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="bg-white rounded-[2.3rem] p-8 h-full border border-slate-100 group-hover:border-transparent transition-all">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <i className={`fas ${service.icon} text-2xl`}></i>
                    </div>
                    <span className="text-slate-200 text-4xl font-black leading-none opacity-20 group-hover:text-white group-hover:opacity-10">0{index+1}</span>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[4rem] p-12 lg:p-20 border border-slate-100 shadow-sm text-center">
            <span className="text-blue-600 font-black tracking-widest uppercase mb-4 block">{t.contact.fastSupport}</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">{t.contact.title}</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.contact.desc}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={`https://wa.me/${businessPhoneInt}`} 
                target="_blank"
                className="w-full md:w-auto px-12 py-6 bg-green-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-green-100 hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center"
              >
                <i className="fab fa-whatsapp mr-3 text-3xl"></i> {t.contact.whatsappBtn}
              </a>
              <a 
                href={`tel:${businessPhoneInt}`}
                className="w-full md:w-auto px-12 py-6 bg-blue-700 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-200 hover:bg-blue-800 transition-all active:scale-95 flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-3"></i> {t.contact.callBtn}
              </a>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-200 grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-xl shadow-sm">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{lang === 'tr' ? 'Bölge' : 'Region'}</h4>
                  <p className="font-black text-slate-900">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 text-xl shadow-sm">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{lang === 'tr' ? 'Telefon' : 'Phone'}</h4>
                  <p className="font-black text-slate-900">{businessPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                 <i className="fas fa-droplet text-[10px]"></i>
               </div>
               <span className="text-xl font-black tracking-tighter uppercase text-white">AHİ <span className="text-blue-500">TESİSAT</span></span>
            </div>
            <p>© 2024 Ahi Tesisat. {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</p>
            <div className="flex space-x-6 mt-6 md:mt-0 text-red-500 font-black">
               {businessPhone}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Action */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 flex gap-4 md:hidden pointer-events-none">
         <a href={`https://wa.me/${businessPhoneInt}`} target="_blank" className="flex-1 bg-green-600 text-white h-14 rounded-2xl flex items-center justify-center font-black text-lg shadow-2xl pointer-events-auto active:scale-95">
            <i className="fab fa-whatsapp mr-3"></i> WhatsApp
         </a>
         <a href={`tel:${businessPhoneInt}`} className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center text-xl shadow-2xl pointer-events-auto active:scale-95">
            <i className="fas fa-phone-alt"></i>
         </a>
      </div>
    </div>
  );
};

export default App;
