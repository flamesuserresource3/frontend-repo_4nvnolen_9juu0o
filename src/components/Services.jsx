import React, { useState } from 'react';
import { Code, Globe, Layers, Smartphone, Bot } from 'lucide-react';

const TabButton = ({ active, onClick, icon: Icon, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border transition ${
      active ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
    }`}
  >
    <Icon className="h-4 w-4" /> {children}
  </button>
);

const Services = ({ lang = 'en' }) => {
  const [tab, setTab] = useState('web');

  const t = {
    en: {
      title: 'Services',
      tabs: {
        web: 'Web Development',
        webapp: 'Web App Development',
        mobile: 'Mobile App Development',
        ai: 'AI Development',
        smm: 'Social Media Management',
      },
      ctas: { quote: 'Request a Quote', consult: 'Book Consultation' },
    },
    ar: {
      title: 'الخدمات',
      tabs: {
        web: 'تطوير مواقع الويب',
        webapp: 'تطوير تطبيقات الويب',
        mobile: 'تطوير تطبيقات الجوال',
        ai: 'تطوير حلول الذكاء الاصطناعي',
        smm: 'إدارة وسائل التواصل',
      },
      ctas: { quote: 'اطلب عرض سعر', consult: 'احجز استشارة' },
    },
  }[lang];

  const Pill = ({ children }) => (
    <span className="inline-block text-xs bg-slate-100 text-slate-700 rounded-full px-2 py-1">{children}</span>
  );

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.title}</h2>
            <p className="text-slate-600 mt-1">Full-stack product teams for websites, apps, AI and growth.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <TabButton active={tab==='web'} onClick={() => setTab('web')} icon={Globe}>{t.tabs.web}</TabButton>
            <TabButton active={tab==='webapp'} onClick={() => setTab('webapp')} icon={Layers}>{t.tabs.webapp}</TabButton>
            <TabButton active={tab==='mobile'} onClick={() => setTab('mobile')} icon={Smartphone}>{t.tabs.mobile}</TabButton>
            <TabButton active={tab==='ai'} onClick={() => setTab('ai')} icon={Bot}>{t.tabs.ai}</TabButton>
            <TabButton active={tab==='smm'} onClick={() => setTab('smm')} icon={Code}>{t.tabs.smm}</TabButton>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            {tab === 'web' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Marketing Websites & Landing Pages</h3>
                <p className="mt-2 text-slate-600">EN/AR, SEO-ready, analytics, and speed-optimized.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Shopify</Pill>
                  <Pill>WooCommerce</Pill>
                  <Pill>Speed & SEO fixes</Pill>
                  <Pill>GA4 & Tracking</Pill>
                  <Pill>Payments & CRM</Pill>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-slate-500">Starter</div>
                    <div className="font-medium">Landing Page</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>1–2 pages, GA4, basic SEO</li>
                      <li>Timeline: 1–2 weeks</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-slate-500">Business Site</div>
                    <div className="font-medium">4–6 pages, CMS, forms, EN/AR</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>Timeline: 3–4 weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {tab === 'webapp' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Web-Based Applications</h3>
                <p className="mt-2 text-slate-600">Client portals, dashboards, multi-tenant admin panels.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>React / Next.js</Pill>
                  <Pill>Node / FastAPI</Pill>
                  <Pill>Postgres / MySQL</Pill>
                  <Pill>Auth • RBAC • APIs</Pill>
                </div>
                <div className="mt-5 rounded-lg border p-4">
                  <div className="text-sm text-slate-500">Starter</div>
                  <div className="font-medium">MVP Web App</div>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                    <li>Auth, 3–5 core screens, admin</li>
                    <li>Timeline: 4–8 weeks</li>
                  </ul>
                </div>
              </div>
            )}
            {tab === 'mobile' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Mobile Applications</h3>
                <p className="mt-2 text-slate-600">iOS and Android apps ready for production.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>React Native / Flutter</Pill>
                  <Pill>Push & Deep Links</Pill>
                  <Pill>Payments & Maps</Pill>
                  <Pill>In-app Chat</Pill>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-slate-500">Starter</div>
                    <div className="font-medium">App MVP</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>Login, 3–4 features, API hookup</li>
                      <li>6–10 weeks</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm text-slate-500">App + Admin</div>
                    <div className="font-medium">Mobile + web dashboard</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>8–12 weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {tab === 'ai' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">AI-Related Development</h3>
                <p className="mt-2 text-slate-600">Assistants, RAG search, smart forms, and content helpers.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>OpenAI / Anthropic</Pill>
                  <Pill>Pinecone / PGVector</Pill>
                  <Pill>Serverless APIs</Pill>
                  <Pill>Privacy & Audit</Pill>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">AI Helpdesk</div>
                    <div className="text-sm text-slate-600">2–4 weeks</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Doc Q&A</div>
                    <div className="text-sm text-slate-600">2–3 weeks</div>
                  </div>
                </div>
              </div>
            )}
            {tab === 'smm' && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Social Media Management</h3>
                <p className="mt-2 text-slate-600">Content calendar, design, reels, posting and community.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>EN / AR Copy</Pill>
                  <Pill>Design & Reels</Pill>
                  <Pill>Community Replies</Pill>
                  <Pill>Performance Reports</Pill>
                </div>
                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Basic</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>8 posts + 2 reels/mo</li>
                      <li>2 platforms</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Standard</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>12 posts + 4 reels</li>
                      <li>Community 5d/wk</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Plus</div>
                    <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                      <li>16 posts + 6 reels</li>
                      <li>Community 7d/wk + UGC</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">Outcomes</h4>
              <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                <li>• Faster launches with reliable infrastructure</li>
                <li>• Clear analytics and growth tracking</li>
                <li>• Secure auth, roles and API integrations</li>
                <li>• Scalable architecture for future features</li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">{t.ctas.consult}</a>
                <a href="#packages" className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-black">{t.ctas.quote}</a>
              </div>
              <div className="mt-4 text-xs text-slate-500">Tech we use: React, Next.js, FastAPI, Node, Postgres, MySQL, OpenAI, Pinecone.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
