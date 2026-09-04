import { finalCtaContent } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent-purple/25 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="whitespace-pre-line text-2xl font-bold leading-[1.4] tracking-tight text-white sm:text-3xl lg:text-4xl">
            {finalCtaContent.headline}
          </h2>
          <p className="mt-5 whitespace-pre-line text-sm leading-[1.9] text-white/60 sm:text-base">
            {finalCtaContent.headlineSub}
          </p>
          <p className="text-gradient mt-6 text-xl font-bold sm:text-2xl">
            {finalCtaContent.subCopy}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {finalCtaContent.description}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mx-auto mt-16 max-w-2xl px-6 lg:px-8">
        <ContactForm />
      </Reveal>
    </section>
  );
}
