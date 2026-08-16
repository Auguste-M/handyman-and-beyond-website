import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowRight, Check, Hammer } from 'lucide-react';
import { serviceCategories } from '@/data/services';
import { useEstimateModal } from '@/context/EstimateModalContext';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ServicesPage() {
  useDocumentMeta(
    'Services | Handyman & Beyond | Sacramento Handyman Services',
    'Handyman & Beyond offers home repairs, home improvements, interior and exterior projects, maintenance, and general handyman services throughout Sacramento. Free estimates.'
  );
  const { openEstimateModal } = useEstimateModal();

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Home improvement help that fits your list.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Every home has a list. We're here to help you get through it — with friendly, reliable
            service from Sacramento to the surrounding communities.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceCategories.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <article className="h-full rounded-2xl border border-neutral-200 bg-white p-7 transition hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Hammer className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-bold text-secondary-800">
                  {service.name}
                </h2>
                <p className="mt-3 leading-7 text-secondary-600">{service.description}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-neutral-400">
                  Example project types — replace with confirmed services
                </p>
                <ul className="mt-3 space-y-2 text-sm text-secondary-600">
                  {service.examples.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openEstimateModal(`services_page_${service.slug}`)}
                  className="mt-6 flex items-center gap-1 font-heading text-sm font-bold text-primary-600"
                >
                  Get a free estimate <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-primary-50 p-8 text-center sm:p-12">
          <SectionHeading
            eyebrow="Don't see your project?"
            title="If it's home related, we're happy to take a look."
            description="Handyman & Beyond keeps services flexible. Tell us what's on your list and we'll let you know how we can help."
            align="center"
          />
          <button
            onClick={() => openEstimateModal('services_page_custom')}
            className="mt-6 font-heading text-sm font-bold text-primary-600"
          >
            Get a free estimate <ArrowRight className="ml-1 inline h-4 w-4" />
          </button>
        </div>
      </div>

      <CtaBand
        eyebrow="Ready to get started?"
        title="Let's make your home better."
        description="Tell us what you need help with and get started with a free estimate."
        source="services_page_cta"
      />
    </PageShell>
  );
}
