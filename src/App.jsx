import React, { useState } from 'react';
import { Rocket, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState('en');
  const t = {
    en: {
      brand: 'Flames Digital',
      nav: {
        home: 'Home',
        services: 'Services',
        packages: 'Pricing',
        contact: 'Contact',
      },
      consult: 'Book a Free Consultation',
      whatsapp: 'WhatsApp Us',
      ar: 'العربية',
    },
    ar: {
      brand: 'فليمز ديجيتال',
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        packages: 'الأسعار',
        contact: 'تواصل',
      },
      consult: 'احجز استشارة مجانية',
      whatsapp: 'تواصل عبر واتساب',
      ar: 'EN',
    },
  }[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{t.brand}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-blue-700">{t.nav.home}</a>
            <a href="#services" className="hover:text-blue-700">{t.nav.services}</a>
            <a href="#packages" className="hover:text-blue-700">{t.nav.packages}</a>
            <a href="#contact" className="hover:text-blue-700">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50">
              {t.ar}
            </button>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-white hover:bg-blue-700 text-sm">
              <Rocket className="h-4 w-4" /> {t.consult}
            </a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3.5 py-2 text-white hover:bg-green-700 text-sm">
              <MessageCircle className="h-4 w-4" /> {t.whatsapp}
            </a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero lang={lang} />
        <section id="about" className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold">We build, launch, and grow digital products.</h2>
              <p className="mt-2 text-slate-600">Full-stack development across web, mobile, and AI — paired with social media to drive adoption. Clear scopes, fast timelines, and a focus on outcomes.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-slate-100">Web & Web Apps</span>
                <span className="px-3 py-1 rounded-full bg-slate-100">Mobile (React Native / Flutter)</span>
                <span className="px-3 py-1 rounded-full bg-slate-100">AI Assistants & RAG</span>
                <span className="px-3 py-1 rounded-full bg-slate-100">Social Media Management</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
              <div className="text-sm text-slate-600">Highlights</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• 7+ years, 40+ projects</li>
                <li>• React, Next.js, FastAPI, Node</li>
                <li>• Postgres, MySQL, Firebase</li>
                <li>• OpenAI, Anthropic, Pinecone</li>
              </ul>
            </div>
          </div>
        </section>
        <Services lang={lang} />
        <Packages />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Flames Digital. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
