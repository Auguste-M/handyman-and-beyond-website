import { FormEvent, useEffect, useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { useEstimateModal } from '@/context/EstimateModalContext';
import { submitLead } from '@/lib/supabase';
import { serviceCategories } from '@/data/services';
import Button from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EstimateModal() {
  const { isOpen, source, closeEstimateModal } = useEstimateModal();
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitLead({
        name,
        phone,
        email,
        city,
        service_interest: serviceInterest,
        message,
        source,
      });
      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setCity('');
      setServiceInterest('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimate-modal-title"
    >
      <button
        aria-label="Close free estimate form"
        className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm"
        onClick={closeEstimateModal}
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-card">
        <div className="sticky top-0 flex items-center justify-between rounded-t-2xl bg-white border-b border-neutral-100 px-6 py-4">
          <h2 id="estimate-modal-title" className="font-heading text-xl font-bold text-secondary-800">
            Get a Free Estimate
          </h2>
          <button
            onClick={closeEstimateModal}
            aria-label="Close"
            className="rounded-full p-2 text-secondary-500 hover:bg-neutral-100 hover:text-secondary-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center gap-3 py-8">
              <CheckCircle2 className="h-14 w-14 text-success-500" />
              <h3 className="font-heading text-lg font-bold text-secondary-800">Thanks — we've got it!</h3>
              <p className="text-secondary-600">
                Your request has been sent to Handyman &amp; Beyond. We'll be in touch soon to schedule your
                free estimate.
              </p>
              <Button variant="secondary" onClick={closeEstimateModal}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-secondary-600">
                Tell us a little about your project and we'll follow up to schedule your free estimate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="estimate-name" className="block text-sm font-semibold text-secondary-700 mb-1">
                    Full name
                  </label>
                  <input
                    id="estimate-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="estimate-phone" className="block text-sm font-semibold text-secondary-700 mb-1">
                    Phone number
                  </label>
                  <input
                    id="estimate-phone"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    placeholder="(916) 555-0123"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="estimate-email" className="block text-sm font-semibold text-secondary-700 mb-1">
                    Email
                  </label>
                  <input
                    id="estimate-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="estimate-city" className="block text-sm font-semibold text-secondary-700 mb-1">
                    City
                  </label>
                  <input
                    id="estimate-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    placeholder="West Sacramento"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="estimate-service" className="block text-sm font-semibold text-secondary-700 mb-1">
                  What do you need help with?
                </label>
                <select
                  id="estimate-service"
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition bg-white"
                >
                  <option value="">Select a category</option>
                  {serviceCategories.map((cat) => (
                    <option key={cat.slug} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="estimate-message" className="block text-sm font-semibold text-secondary-700 mb-1">
                  Project details
                </label>
                <textarea
                  id="estimate-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition resize-none"
                  placeholder="Tell us a bit about what you need done..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-error-600 bg-error-50 rounded-lg px-3.5 py-2.5">
                  Something went wrong sending your request. Please call or WhatsApp us instead.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full"
                size="lg"
                icon={status === 'submitting' ? <Loader2 className="h-5 w-5 animate-spin" /> : undefined}
              >
                {status === 'submitting' ? 'Sending...' : 'Request Free Estimate'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
