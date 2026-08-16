import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { serviceAreas } from '@/data/business';

export default function AreasPreview() {
  return (
    <section className="bg-neutral-50 px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Local service"
            title="Helping homes across Sacramento."
            description="Based in West Sacramento, Handyman & Beyond serves homeowners in communities throughout Sacramento — from the city of Sacramento out to Roseville, Davis, and beyond."
          />
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                to="/service-areas"
                key={area}
                className="group flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-4 text-sm font-semibold text-secondary-700 transition hover:border-primary-200 hover:text-primary-700"
              >
                <MapPin className="h-4 w-4 text-primary-600" />
                {area}
                <ChevronRight className="ml-auto h-3.5 w-3.5 text-neutral-400 transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
