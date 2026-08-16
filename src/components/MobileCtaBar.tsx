import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { business } from '@/data/business';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function MobileCtaBar() {
  const { openEstimateModal } = useEstimateModal();
  return <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-neutral-200 bg-white/95 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] backdrop-blur lg:hidden">
    <a href={business.phoneHref} className="flex flex-col items-center gap-1 py-2 text-[11px] font-bold text-secondary-800"><Phone className="h-5 w-5 text-primary-600" />Call</a>
    <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 border-x border-neutral-100 py-2 text-[11px] font-bold text-secondary-800"><MessageCircle className="h-5 w-5 text-success-600" />WhatsApp</a>
    <button onClick={() => openEstimateModal('mobile_bar')} className="flex flex-col items-center gap-1 bg-primary-600 py-2 text-[11px] font-bold text-white"><Sparkles className="h-5 w-5" />Estimate</button>
  </div>;
}
