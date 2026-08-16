import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import EstimateModal from '@/components/EstimateModal';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[76px]">{children}</main>
      <Footer />
      <MobileCtaBar />
      <EstimateModal />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
