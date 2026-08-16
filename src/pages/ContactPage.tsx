import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Button from '@/components/ui/Button';
import { business } from '@/data/business';
import { submitLead } from '@/lib/supabase';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  useDocumentMeta(
    'Contact | Handyman & Beyond | Sacramento Handyman Contact',
    'Contact Handyman & Beyond for free estimates and home improvement services. Call (916) 743-0282, WhatsApp, email, or request a free estimate online. Serving West Sacramento and Sacramento.'
  );

  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitLead({ name, phone, email, city, message, source: 'contact_page_form' });
      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setCity('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageShell>
      <section className="bg-secondary-900 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-6xl">
            Let's talk about your home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Start with a quick conversation or request a free estimate online. We make it easy to
            get the help you need.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Tell us what your home needs."
              description="Reach out by phone, WhatsApp, email, or fill out the form — whatever's easiest for you."
            />
            <div className="mt-9 space-y-5">
              <a
                href={business.phoneHref}
                className="flex items-center gap-4 transition hover:opacity-80"
              >
                <span className="rounded-xl bg-primary-50 p-3 text-primary-600">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-neutral-500">
                    Phone
                  </span>
                  <span className="font-heading font-bold text-secondary-800">
                    {business.phone}
                  </span>
                </span>
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:opacity-80"
              >
                <span className="rounded-xl bg-success-50 p-3 text-success-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-neutral-500">
                    WhatsApp
                  </span>
                  <span className="font-heading font-bold text-secondary-800">
                    +1 916-743-0282
                  </span>
                </span>
              </a>
              <a
                href={business.emailHref}
                className="flex items-center gap-4 transition hover:opacity-80"
              >
                <span className="rounded-xl bg-primary-50 p-3 text-primary-600">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-neutral-500">
                    Email
                  </span>
                  <span className="font-heading font-bold text-secondary-800">
                    {business.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-primary-50 p-3 text-primary-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-neutral-500">
                    Location
                  </span>
                  <span className="font-heading font-bold text-secondary-800">
                    West Sacramento, CA {business.zip}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl bg-neutral-50 p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center gap-3 py-10">
                  <CheckCircle2 className="h-14 w-14 text-success-500" />
                  <h2 className="font-heading text-lg font-bold text-secondary-800">
                    Thanks — we've got it!
                  </h2>
                  <p className="text-secondary-600">
                    Your message has been sent to Handyman &amp; Beyond. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-secondary-800">
                    Request a free estimate
                  </h2>
                  <p className="mt-3 leading-7 text-secondary-600">
                    Share a few details and we'll follow up to learn more about your project.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-secondary-700 mb-1"
                      >
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-semibold text-secondary-700 mb-1"
                        >
                          Phone number
                        </label>
                        <input
                          id="contact-phone"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                          placeholder="(916) 555-0123"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-secondary-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-city"
                        className="block text-sm font-semibold text-secondary-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        id="contact-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                        placeholder="West Sacramento"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-secondary-700 mb-1"
                      >
                        Project details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-secondary-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition resize-none"
                        placeholder="Tell us a bit about what you need done..."
                      />
                    </div>
                    {status === 'error' && (
                      <p className="text-sm text-error-600 bg-error-50 rounded-lg px-3.5 py-2.5">
                        Something went wrong sending your request. Please call or WhatsApp us
                        instead.
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full"
                      size="lg"
                      icon={
                        status === 'submitting' ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : undefined
                      }
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      {status !== 'submitting' && <ArrowRight className="h-4 w-4" />}
                    </Button>
                    <p className="text-center text-xs text-neutral-500">
                      Prefer to talk? Call us at {business.phone}.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
