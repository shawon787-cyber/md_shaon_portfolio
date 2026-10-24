import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SectionShell, SectionLabel, SectionHeading } from '@/components/Section';
import { profile } from '@/data/site';
import { usePrefersReducedMotion } from '@/hooks/useScroll';

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: 'shawon787-cyber', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: 'Md Shaon', href: profile.linkedin, icon: Linkedin },
];

function Field({ id, label, children, error }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-[12px] text-rose-400">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  'w-full rounded-lg border border-white/[0.1] bg-bg-secondary/50 px-4 py-3 text-[14px] text-ink placeholder-ink-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30';

export default function Contact() {
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please add a subject.';
    if (!form.message.trim()) e.message = 'Please write a message.';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    // No backend email integration configured — use mailto fallback that prepares the email.
    setStatus('loading');
    setTimeout(() => {
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <SectionShell id="contact">
      <SectionLabel>05 / Contact</SectionLabel>
      <SectionHeading className="mt-4 max-w-2xl">
        Have something worth <span className="text-gradient-emerald">building?</span>
      </SectionHeading>
      <motion.p
        initial={reduced ? false : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted"
      >
        I'm open to remote opportunities, development collaborations, and interesting projects. If you
        have an idea to discuss, I'd love to hear from you.
      </motion.p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* Contact info */}
        <div className="space-y-4">
          {contactItems.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-surface group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-accent/30 hover:shadow-glow-sm focus-ring"
              >
                <div className="inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] uppercase tracking-wide text-ink-muted">{c.label}</p>
                  <p className="truncate text-[14px] font-medium text-ink group-hover:text-accent">
                    {c.value}
                  </p>
                </div>
              </a>
            );
          })}

          {/* WhatsApp — disabled until configured */}
          <div
            className={`card-surface flex items-center gap-4 rounded-xl p-4 ${
              profile.whatsapp ? '' : 'opacity-50'
            }`}
            title={profile.whatsapp ? 'WhatsApp' : 'WhatsApp link not configured yet'}
          >
            <div className="inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
              <MessageCircle size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] uppercase tracking-wide text-ink-muted">WhatsApp</p>
              {profile.whatsapp ? (
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-ink hover:text-accent"
                >
                  Chat on WhatsApp
                </a>
              ) : (
                <p className="text-[13px] text-ink-muted">Not configured yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-surface rounded-2xl p-6 shadow-card sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
                aria-invalid={!!errors.name}
              />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
                aria-invalid={!!errors.email}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field id="subject" label="Subject" error={errors.subject}>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={inputClass}
                aria-invalid={!!errors.subject}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className={`${inputClass} resize-none`}
                aria-invalid={!!errors.message}
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg-base transition-all hover:bg-accent-soft hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 focus-ring"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-[13px] text-accent"
              >
                <CheckCircle2 size={16} />
                Opening your email app with the details filled in.
              </motion.p>
            )}
          </div>

          <p className="mt-4 text-[12px] leading-relaxed text-ink-muted/70">
            This form opens your email client with the message pre-filled. For a direct inbox delivery,
            an email service can be connected later.
          </p>
        </form>
      </div>
    </SectionShell>
  );
}
