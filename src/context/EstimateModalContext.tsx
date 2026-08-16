import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

interface EstimateModalContextValue {
  isOpen: boolean;
  source: string;
  openEstimateModal: (source?: string) => void;
  closeEstimateModal: () => void;
}

const EstimateModalContext = createContext<EstimateModalContextValue | null>(null);

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('website');

  const value = useMemo(
    () => ({
      isOpen,
      source,
      openEstimateModal: (src = 'website') => {
        setSource(src);
        setIsOpen(true);
      },
      closeEstimateModal: () => setIsOpen(false),
    }),
    [isOpen, source]
  );

  return <EstimateModalContext.Provider value={value}>{children}</EstimateModalContext.Provider>;
}

export function useEstimateModal() {
  const ctx = useContext(EstimateModalContext);
  if (!ctx) throw new Error('useEstimateModal must be used within EstimateModalProvider');
  return ctx;
}
