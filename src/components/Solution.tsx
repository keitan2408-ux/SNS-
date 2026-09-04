import { ArrowRight } from "lucide-react";
import { solutionSteps } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Solution() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            SNS運用を<span className="text-gradient">AIでアップデート</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            人間のマーケティング力とAIのスピードを組み合わせることで、
            <br className="hidden sm:block" />
            企画から改善までのSNS運用を効率化します。
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
            {solutionSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-sm font-bold text-foreground sm:h-20 sm:w-20 sm:text-base">
                  {step.label}
                </div>
                {i < solutionSteps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="rotate-90 text-muted sm:rotate-0"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
