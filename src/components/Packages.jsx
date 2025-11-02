import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const Tier = ({ name, price, period, features, highlight }) => (
  <div className={`rounded-2xl border p-6 shadow-sm bg-white ${highlight ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'}`}>
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
      {highlight ? (
        <span className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded-full">Most popular</span>
      ) : null}
    </div>
    <div className="mt-2">
      <span className="text-3xl font-semibold text-slate-900">{price}</span>
      <span className="text-slate-500 text-sm"> {period}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-slate-700">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5" /> {f}</li>
      ))}
    </ul>
    <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Get Started</a>
  </div>
);

const Packages = () => {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Packages</h2>
          <p className="mt-2 text-slate-600">Simple starting points. Custom quotes available for complex builds.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier
            name="Landing Page"
            price="$1,200+"
            period="one-time"
            features={[
              '1–2 pages, responsive, EN/AR',
              'Basic SEO + GA4',
              'Speed & tracking setup',
              '1–2 week timeline',
            ]}
          />
          <Tier
            name="Business Website"
            price="$2,800+"
            period="one-time"
            features={[
              '4–6 pages + CMS + forms',
              'EN/AR, SEO, analytics',
              'Integrations: payments, CRM, booking',
              '3–4 week timeline',
            ]}
            highlight
          />
          <Tier
            name="MVP Web/App"
            price="$6,500+"
            period="project"
            features={[
              'Auth, 3–5 core screens',
              'Admin panel + RBAC',
              'API & DB (Postgres/MySQL)',
              '4–8 week timeline',
            ]}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-slate-900">Support Plans</h4>
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border p-4">
                <div className="font-medium">Maintenance Lite</div>
                <p className="text-slate-600">Updates, backups, uptime monitoring.</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="font-medium">Maintenance Plus</div>
                <p className="text-slate-600">Monthly dev hours for fixes & tweaks.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h4 className="font-semibold text-slate-900">Social Media Packages</h4>
            <div className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-lg border p-4">
                <div className="font-medium">Basic</div>
                <p className="text-slate-600">8 posts + 2 reels/mo (2 platforms)</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="font-medium">Standard</div>
                <p className="text-slate-600">12 posts + 4 reels + community (5d/wk)</p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="font-medium">Plus</div>
                <p className="text-slate-600">16 posts + 6 reels + community (7d/wk) + UGC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
