import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/lib/site-config";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Benefits() {
  return (
    <section id="results" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-accent-blue">
            RESULTS
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            導入メリット
          </h2>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <RevealItem key={benefit}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-white">
                  <CheckCircle2 size={18} />
                </span>
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  {benefit}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
