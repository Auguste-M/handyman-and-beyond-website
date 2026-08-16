import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const reasons: [string, string][] = [
  ['Free estimates', 'Know what comes next before you commit.'],
  ['Insured & certified', 'Added confidence for your home and family.'],
  ['Hundreds of 5-star reviews', 'A trusted record across our platforms.'],
  ['Local service', 'Proudly serving Sacramento.'],
  ['Pet friendly', 'We know your four-legged family is family too.'],
  ['Home-focused care', 'We help you maintain, improve, and love your home.'],
];

export default function WhyUs() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img
            src="https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
            alt="Home improvement professional speaking with a homeowner in front of their home"
            className="h-[440px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary-600 p-5 text-white shadow-card sm:-right-6">
            <p className="font-heading text-3xl font-extrabold">100%</p>
            <p className="text-sm font-semibold text-primary-100">home-focused care</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            eyebrow="Why Handyman & Beyond"
            title="The kind of help you'd want in your own home."
            description="Inviting someone into your home is personal. We show up with professionalism, clear communication, and respect for your space from the first conversation to the final detail."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map(([title, desc]) => (
              <div key={title} className="flex gap-3">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-secondary-800">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-secondary-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-bold text-primary-600"
          >
            Meet Handyman &amp; Beyond <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
