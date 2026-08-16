import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { business } from '@/data/business';
import { useEstimateModal } from '@/context/EstimateModalContext';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openEstimateModal } = useEstimateModal();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Handyman & Beyond home" onClick={() => setOpen(false)}>
          <img src="/assets/images/image.png" alt="Handyman & Beyond" className="h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} to={link.href} className="text-sm font-semibold text-secondary-700 transition hover:text-primary-600">{link.label}</Link>)}
          <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-secondary-800" aria-label={`Call ${business.phone}`}><Phone className="h-4 w-4 text-primary-600" />{business.phone}</a>
          <Button onClick={() => openEstimateModal('header')} size="md">Get a Free Estimate</Button>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={business.phoneHref} className="rounded-full bg-primary-50 p-2.5 text-primary-700" aria-label="Call Handyman & Beyond"><Phone className="h-5 w-5" /></a>
          <button className="rounded-full p-2.5 text-secondary-800 hover:bg-neutral-100" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-neutral-100 bg-white px-5 py-4 shadow-card lg:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col gap-1">
          {links.map((link) => <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-secondary-700 hover:bg-primary-50 hover:text-primary-700">{link.label}</Link>)}
          <Button className="mt-2" size="lg" onClick={() => { setOpen(false); openEstimateModal('mobile_menu'); }}>Get a Free Estimate</Button>
        </div>
      </nav>}
    </header>
  );
}
