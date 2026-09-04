import { aiWorkflowSteps } from "@/lib/site-config";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function AiWorkflow() {
  return (
    <section id="workflow" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-accent-blue">
            AI × SNS WORKFLOW
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            AI活用フロー
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {aiWorkflowSteps.map((step, i) => (
            <RevealItem key={step.step} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 lg:p-5">
                <span className="text-gradient text-xs font-bold tracking-widest">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
              {i < aiWorkflowSteps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 right-[-9px] hidden h-px w-4 -translate-y-1/2 bg-border lg:block"
                />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
