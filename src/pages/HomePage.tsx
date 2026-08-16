import PageShell from '@/components/layout/PageShell';
import CtaBand from '@/components/CtaBand';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUs from '@/components/home/WhyUs';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import PetFriendly from '@/components/home/PetFriendly';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import AreasPreview from '@/components/home/AreasPreview';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function HomePage() {
  useDocumentMeta(
    'Handyman & Beyond | Sacramento Home Improvement & Handyman Services',
    'Reliable, insured and certified home improvement services throughout Sacramento. Free estimates, hundreds of 5-star reviews, and proudly pet friendly. Serving West Sacramento, Davis, Roseville, Rocklin, and more.'
  );

  return (
    <PageShell>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyUs />
      <ProjectsPreview />
      <PetFriendly />
      <ReviewsPreview />
      <AreasPreview />
      <CtaBand
        eyebrow="Ready to give your home some love?"
        title="Let's make your home better."
        description="Whether it's a small repair or a bigger improvement, Handyman & Beyond is ready to help. Tell us what you need and get started with a free estimate."
        source="final_cta"
      />
    </PageShell>
  );
}
