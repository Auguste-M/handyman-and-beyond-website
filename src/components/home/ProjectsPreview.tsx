import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { projectPlaceholders } from '@/data/projects';

export default function ProjectsPreview() {
  return (
    <section className="overflow-hidden bg-secondary-900 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our project gallery"
            title="Work worth coming home to."
            description="This space is ready for real Handyman & Beyond project photography. Until then, these images show the kind of work and care we're here to bring to your home."
            light
          />
          <Link
            to="/projects"
            className="flex items-center gap-2 pb-1 font-heading text-sm font-bold text-primary-300"
          >
            See project gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projectPlaceholders.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 70}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <div className="group relative h-full min-h-[170px] overflow-hidden rounded-xl bg-secondary-800">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full min-h-[170px] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary-900/90 to-transparent p-4 pt-12">
                  <span className="text-xs font-bold text-primary-300">{project.category}</span>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Project photography placeholder
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
