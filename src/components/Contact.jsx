import React from 'react';
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';

const Contact = ({ lang = 'en' }) => {
  const t = {
    en: {
      title: 'Contact Us',
      desc: 'Tell us about your project. We’ll reply within 24 hours.',
      name: 'Full Name',
      email: 'Work Email',
      company: 'Company',
      type: 'Project Type',
      budget: 'Estimated Budget',
      message: 'What are you building?',
      submit: 'Send Message',
      or: 'or',
      whatsapp: 'WhatsApp Us',
      call: 'Schedule a call',
    },
    ar: {
      title: 'تواصل معنا',
      desc: 'أخبرنا عن مشروعك. سنرد خلال 24 ساعة.',
      name: 'الاسم الكامل',
      email: 'البريد الوظيفي',
      company: 'الشركة',
      type: 'نوع المشروع',
      budget: 'الميزانية المتوقعة',
      message: 'ماذا تريد أن تبني؟',
      submit: 'إرسال الرسالة',
      or: 'أو',
      whatsapp: 'راسلنا على واتساب',
      call: 'احجز مكالمة',
    },
  }[lang];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.title}</h2>
          <p className="mt-2 text-slate-600">{t.desc}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <form
            className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            action="mailto:hello@example.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">{t.name}</label>
                <input required type="text" name="name" className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">{t.email}</label>
                <input required type="email" name="email" className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">{t.company}</label>
                <input required type="text" name="company" className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">{t.type}</label>
                <select name="type" required className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                  <option>Website</option>
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>AI Project</option>
                  <option>Social Media</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">{t.budget}</label>
                <select name="budget" required className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                  <option>$1k–$3k</option>
                  <option>$3k–$7k</option>
                  <option>$7k–$15k</option>
                  <option>$15k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">{t.message}</label>
                <textarea required name="message" rows={5} className="w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700">
              <Mail className="h-5 w-5" /> {t.submit}
            </button>
          </form>

          <div className="md:col-span-1 space-y-4">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-green-600 bg-white p-5 text-green-700 hover:bg-green-50">
              <MessageCircle className="h-5 w-5" /> {t.whatsapp}
            </a>
            <a href="#packages" className="flex items-center gap-3 rounded-2xl border border-blue-600 bg-white p-5 text-blue-700 hover:bg-blue-50">
              <PhoneCall className="h-5 w-5" /> {t.call}
            </a>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
              <div className="font-medium text-slate-900">Why us?</div>
              <ul className="mt-2 space-y-1">
                <li>• 7+ years, 40+ projects delivered</li>
                <li>• Full-stack team: design → dev → growth</li>
                <li>• Transparent pricing, clear timelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
