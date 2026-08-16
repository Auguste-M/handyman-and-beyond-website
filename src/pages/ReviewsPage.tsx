import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { Star } from 'lucide-react';
import { reviewPlatforms } from '@/data/reviews';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function ReviewsPage() {
  useDocumentMeta(
    'Reviews | Handyman & Beyond | Sacramento Handyman Reviews',
    'Handyman & Beyond has hundreds of 5-star reviews across our platforms. See what homeowners throughout Sacramento have to say about our handyman and home improvement services.'
  );

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            Reviews
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Hundreds of 5-star reviews.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Don't just take our word for it — see what homeowners throughout Sacramento
            have to say.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-primary-50 p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-accent-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold text-secondary-800">
              Hundreds of 5-star reviews
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-secondary-600">
              The real voices of our customers belong here. Add authentic review quotes, names,
              dates, and links when they're available.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {reviewPlatforms.map((platform, i) => (
            <Reveal key={platform} delay={i * 80}>
              <div className="h-full rounded-2xl border border-dashed border-neutral-300 p-6 text-center">
                <Star className="mx-auto h-7 w-7 text-accent-500" />
                <h3 className="mt-4 font-heading font-bold text-secondary-800">{platform}</h3>
                <p className="mt-2 text-xs text-neutral-500">
                  [Review link and authentic customer review to be added]
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 space-y-5">
          {[1, 2, 3].map((n) => (
            <Reveal key={n} delay={n * 80}>
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-7">
                <div className="flex gap-1 text-accent-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-secondary-500">
                  [Authentic customer review to be added]
                </p>
                <p className="mt-3 text-xs text-neutral-400">
                  Customer name, date, and review text will appear here.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Ready to get started?"
        title="Let's make your home better."
        description="Tell us what you need help with and get started with a free estimate."
        source="reviews_page_cta"
      />
    </PageShell>
  );
}
