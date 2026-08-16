import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { business, serviceAreas } from '@/data/business';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function Footer() {
  const { openEstimateModal } = useEstimateModal();
  return <footer className="bg-secondary-900 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
      <div><div className="inline-flex rounded-lg bg-white px-2 py-1"><img src="/assets/images/image.png" alt="Handyman & Beyond" className="h-14 w-auto object-contain" /></div><p className="mt-5 max-w-sm text-sm leading-7 text-neutral-300">Reliable home improvement with a little more care. Proudly serving homeowners throughout Sacramento.</p><button onClick={() => openEstimateModal('footer')} className="mt-6 rounded-full bg-primary-600 px-5 py-3 text-sm font-bold transition hover:bg-primary-500">Get a Free Estimate</button></div>
      <div><h2 className="font-heading text-lg font-bold">Explore</h2><div className="mt-4 flex flex-col gap-3 text-sm text-neutral-300">{[['/services','Services'],['/about','About us'],['/projects','Our projects'],['/reviews','Reviews'],['/contact','Contact']].map(([href,label]) => <Link key={href} to={href} className="transition hover:text-white">{label}</Link>)}</div></div>
      <div><h2 className="font-heading text-lg font-bold">Get in touch</h2><div className="mt-4 space-y-4 text-sm text-neutral-300"><a href={business.phoneHref} className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-primary-400" />{business.phone}</a><a href={business.emailHref} className="flex items-center gap-3 break-all hover:text-white"><Mail className="h-4 w-4 text-primary-400" />{business.email}</a><p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />West Sacramento, CA {business.zip}</p></div><p className="mt-6 text-xs text-neutral-400">Serving {serviceAreas.slice(0, 4).join(', ')} and surrounding communities.</p></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-5 text-xs text-neutral-400 lg:px-8">© {new Date().getFullYear()} Handyman & Beyond. All rights reserved.</div></div>
  </footer>;
}
