import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Button from '@/components/ui/Button';
import { useEstimateModal } from '@/context/EstimateModalContext';

const petImage =
  'https://images.pexels.com/photos/6793799/pexels-photo-6793799.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000';

export default function PetFriendly() {
  const { openEstimateModal } = useEstimateModal();

  return (
    <section className="bg-primary-50 px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Proudly pet friendly"
            title="Four-legged family members welcome."
            description="We know pets are part of the family. Handyman & Beyond is proud to provide a friendly, respectful experience for homes with dogs and other pets — because home improvement should feel good for everyone who lives there."
          />
          <Button onClick={() => openEstimateModal('pet_friendly')} className="mt-8">
            Let's talk about your project <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
        <Reveal delay={150}>
          <img
            src={petImage}
            alt="A couple relaxing at home with their golden retriever"
            className="h-[350px] w-full rounded-2xl object-cover shadow-soft"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
