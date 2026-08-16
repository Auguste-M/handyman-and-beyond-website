import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { projectPlaceholders } from '@/data/projects';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ProjectsPage() {
  useDocumentMeta(
    'Projects | Handyman & Beyond | Sacramento Home Improvement Projects',
    'See Handyman & Beyond project photography — interior and exterior home improvement work throughout Sacramento. Project gallery coming soon with real completed work.'
  );

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            Projects
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Work worth coming home to.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Real Handyman &amp; Beyond work will live here. These temporary visual placeholders are
            clearly marked so they can be replaced with project photography.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectPlaceholders.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-card">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary-600">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-secondary-600">
                    Project photo placeholder — replace with real work
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Ready to get started?"
        title="Let's make your home better."
        description="Tell us what you need help with and get started with a free estimate."
        source="projects_page_cta"
      />
    </PageShell>
  );
}
