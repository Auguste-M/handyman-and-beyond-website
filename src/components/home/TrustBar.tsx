import { CircleCheck, ShieldCheck, Star, Heart } from 'lucide-react';

const items = [
  { icon: CircleCheck, title: 'Free Estimates', detail: 'Start with a clear conversation' },
  { icon: ShieldCheck, title: 'Insured & Certified', detail: 'Confidence when we enter your home' },
  { icon: Star, title: 'Hundreds of 5-Star Reviews', detail: 'Trusted across our platforms' },
  { icon: Heart, title: 'Proudly Pet Friendly', detail: 'Four-legged family welcome' },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 lg:px-8">
      <div className="grid overflow-hidden rounded-2xl bg-white shadow-card sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, detail }, i) => (
          <div
            key={title}
            className={`flex items-center gap-3 px-5 py-5 ${
              i < 3 ? 'border-b border-neutral-100 sm:border-r lg:border-b-0' : ''
            } ${i === 2 ? 'lg:border-r' : ''}`}
          >
            <Icon className="h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <p className="font-heading text-sm font-bold text-secondary-800">{title}</p>
              <p className="mt-0.5 text-xs text-secondary-500">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
