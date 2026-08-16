import { useEstimateModal } from '@/context/EstimateModalContext';
import { business } from '@/data/business';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CtaBand({
  eyebrow = 'Ready to get started?',
  title = "Let's make your home better.",
  description = 'Tell us what you need help with and get started with a free estimate.',
  source = 'final_cta',
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  source?: string;
}) {
  const { openEstimateModal } = useEstimateModal();
  return (
    <section className="bg-primary-600 px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary-100">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-primary-100">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => openEstimateModal(source)} variant="secondary" size="lg">
            Get a Free Estimate <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as="a" href={business.phoneHref} variant="outline" size="lg">
            <Phone className="h-4 w-4" /> Call us
          </Button>
        </div>
      </div>
    </section>
  );
}
