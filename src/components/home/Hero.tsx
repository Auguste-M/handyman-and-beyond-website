import { ArrowRight, Check, Phone, ShieldCheck, Star, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/Reveal';
import { useEstimateModal } from '@/context/EstimateModalContext';
import { business } from '@/data/business';

const heroImage = 'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function Hero() {
  const { openEstimateModal } = useEstimateModal();

  return (
    <section className="relative isolate overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Handyman working on a home improvement project in Sacramento"
          className="h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/85 to-secondary-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-28">
        <Reveal className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-200">
            <span className="h-2 w-2 rounded-full bg-primary-400" />
            Sacramento Home Improvement
          </div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Give your home
            <br />
            <span className="text-primary-400">some love.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-200">
            Handyman &amp; Beyond provides reliable, professional home-improvement and handyman
            services throughout Sacramento — with free estimates, insured and certified
            service, and a friendly approach that treats every home with care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => openEstimateModal('hero')}>
              Get a Free Estimate <ArrowRight className="h-5 w-5" />
            </Button>
            <Button as="a" href={business.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" /> Call {business.phone}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-200">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary-400" /> Insured &amp; certified
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary-400" /> Hundreds of 5-star reviews
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary-400" /> Proudly pet friendly
            </span>
          </div>
        </Reveal>

        <Reveal delay={200} className="hidden lg:block">
          <div className="ml-auto max-w-sm rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
              <Heart className="h-6 w-6" />
            </div>
            <p className="font-heading text-2xl font-bold text-white">
              Home improvement with a little more care.
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-200">
              From everyday repairs to bigger projects, we help make your home work better and feel
              even better — four-legged family members included.
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-white/15 pt-5">
              <div className="flex gap-2">
                <ShieldCheck className="h-5 w-5 text-primary-300" />
                <Star className="h-5 w-5 text-accent-400" />
              </div>
              <p className="text-xs text-neutral-200">Trusted by homeowners across the region</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
