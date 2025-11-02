import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageCircle, Phone } from 'lucide-react';

const Hero = ({ lang = 'en' }) => {
  const t = {
    en: {
      headline: 'Build Fast. Scale Smart.',
      sub: 'Web, Mobile & AI solutions designed to launch faster and grow smarter.',
      ctaPrimary: 'Book a Free Consultation',
      ctaSecondary: 'Request a Quote',
      whatsapp: 'WhatsApp Us',
    },
    ar: {
      headline: 'ابنِ بسرعة. نمِّ بذكاء.',
      sub: 'حلول الويب والجوال والذكاء الاصطناعي للإطلاق بسرعة والنمو بذكاء.',
      ctaPrimary: 'احجز استشارة مجانية',
      ctaSecondary: 'اطلب عرض سعر',
      whatsapp: 'تواصل عبر واتساب',
    },
  }[lang];

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[540px] w-full">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlays that never block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>

      <div className="container mx-auto px-4 -mt-40 relative z-10">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-slate-200 p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {t.headline}
          </h1>
          <p className="mt-4 text-slate-600 md:text-lg">
            {t.sub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 transition"
            >
              <Rocket className="h-5 w-5" /> {t.ctaPrimary}
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-black transition"
            >
              <Phone className="h-5 w-5" /> {t.ctaSecondary}
            </a>
            <a
              href="https://wa.me/15551234567" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white shadow hover:bg-green-700 transition"
            >
              <MessageCircle className="h-5 w-5" /> {t.whatsapp}
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            <span>Trusted by startups and SMBs • 7+ years building digital products</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
