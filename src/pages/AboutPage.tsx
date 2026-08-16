import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { CircleCheck } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const values = [
  ['Quality', 'Attention to detail on every job, big or small.'],
  ['Reliability', 'We show up when we say we will.'],
  ['Care', 'We treat your home like it\'s our own.'],
  ['Professionalism', 'Clear communication from start to finish.'],
  ['Respect', 'For your time, your space, and your belongings.'],
  ['Pet friendly', 'A welcoming experience for pets and people alike.'],
];

export default function AboutPage() {
  useDocumentMeta(
    'About | Handyman & Beyond | Sacramento Home Improvement',
    'Handyman & Beyond is a home-improvement service focused on quality, reliability, and care. Proudly serving homeowners throughout Sacramento. Pet friendly and community focused.'
  );

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            About Handyman & Beyond
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Home improvement with a little more care.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Handyman & Beyond is more than someone who comes to fix something. We're a
            home-improvement service focused on helping you maintain, repair, improve, and care for
            your home.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
              alt="Professional using a drill during home improvement work"
              className="h-[430px] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="A company that cares"
              title="More than a fix. A better feeling at home."
              description="We believe quality work starts with showing up on time, communicating clearly, and treating every home with respect. From the first conversation to the final detail, our goal is to leave your home better than we found it."
            />
            <p className="mt-6 leading-7 text-secondary-600">
              The name Handyman &amp; Beyond reflects what we do: we handle the everyday handyman
              tasks, and we go beyond them — helping homeowners take better care of and improve the
              places they live. We're proud to be a local company serving our neighbors throughout
              Sacramento, and we're proud to be pet friendly, too.
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values we bring to every home."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="flex h-full gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                  <div>
                    <h3 className="font-heading text-base font-bold text-secondary-800">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-secondary-600">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Want to work together?"
        title="Let's make your home better."
        description="Tell us what you need help with and get started with a free estimate."
        source="about_page_cta"
      />
    </PageShell>
  );
}
