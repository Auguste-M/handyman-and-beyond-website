import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Button from '@/components/ui/Button';
import { serviceCategories } from '@/data/services';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function ServicesPreview() {
  const { openEstimateModal } = useEstimateModal();

  return (
    <section className="bg-neutral-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we can help with"
            title="A better home starts with a good to-do list."
            description="We keep our services flexible because every home — and every homeowner's list — is different. Tell us what you have in mind and we'll take a look."
          />
          <Link
            to="/services"
            className="group hidden items-center gap-2 pb-1 font-heading text-sm font-bold text-primary-600 md:flex"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-neutral-400">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold text-secondary-800">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-secondary-600">{service.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-secondary-500">
                  {service.examples.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <Button size="lg" onClick={() => openEstimateModal('services_preview')}>
            Get a Free Estimate <ArrowRight className="h-5 w-5" />
          </Button>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-primary-600 md:hidden"
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
