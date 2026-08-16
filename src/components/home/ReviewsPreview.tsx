import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { reviewPlatforms } from '@/data/reviews';

export default function ReviewsPreview() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Real words from real homeowners"
          title="Hundreds of 5-star reviews — and counting."
          description="Don't just take our word for it. This section is ready for authentic customer reviews from Google, Yelp, Facebook, and other platforms."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviewPlatforms.map((platform, i) => (
            <Reveal key={platform} delay={i * 80}>
              <div className="h-full rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6">
                <div className="flex gap-1 text-accent-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm font-semibold text-secondary-500">
                  [Authentic {platform} review to be added]
                </p>
                <p className="mt-3 text-xs text-neutral-400">
                  Customer name and review details will appear here.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-primary-600"
          >
            View reviews section <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
