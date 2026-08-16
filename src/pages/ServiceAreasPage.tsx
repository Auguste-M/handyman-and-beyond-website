import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowRight, MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/business';
import { useEstimateModal } from '@/context/EstimateModalContext';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ServiceAreasPage() {
  useDocumentMeta(
    'Service Areas | Handyman & Beyond | Sacramento Handyman Services',
    'Handyman & Beyond serves Sacramento, West Sacramento, Davis, Roseville, Rocklin, Granite Bay, El Dorado Hills, Dixon, Winters, and Sacramento County. Local handyman and home improvement services.'
  );
  const { openEstimateModal } = useEstimateModal();

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            Service Areas
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Proudly serving Sacramento.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Based in West Sacramento, Handyman &amp; Beyond provides handyman and home-improvement
            services to homeowners in communities throughout Sacramento.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <Reveal key={area} delay={i * 50}>
              <div className="h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-primary-200 hover:shadow-soft">
                <MapPin className="h-6 w-6 text-primary-600" />
                <h2 className="mt-4 font-heading text-xl font-bold text-secondary-800">{area}</h2>
                <p className="mt-2 text-sm leading-6 text-secondary-600">
                  Handyman and home improvement service for homeowners in {area} and nearby
                  communities.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-primary-50 p-8 text-center sm:p-12">
          <SectionHeading
            eyebrow="Local & proud"
            title="Don't see your city?"
            description="We're based in West Sacramento and may be able to help nearby communities. Reach out and ask — we're happy to check."
            align="center"
          />
          <button
            onClick={() => openEstimateModal('service_areas_page')}
            className="mt-6 font-heading text-sm font-bold text-primary-600"
          >
            Ask about your area <ArrowRight className="ml-1 inline h-4 w-4" />
          </button>
        </div>
      </div>

      <CtaBand
        eyebrow="Ready to get started?"
        title="Let's make your home better."
        description="Tell us what you need help with and get started with a free estimate."
        source="service_areas_page_cta"
      />
    </PageShell>
  );
}
