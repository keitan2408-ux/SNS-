import Link from "next/link";
import { Check } from "lucide-react";
import { pricingNote, pricingPlans } from "@/lib/site-config";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-accent-blue">
            PRICING
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            料金プラン
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.id} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.highlighted
                    ? "border-transparent bg-foreground text-white shadow-[0_40px_80px_-30px_rgba(20,20,30,0.5)] lg:-translate-y-3"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-accent px-3 py-1 text-[11px] font-bold text-white">
                    人気プラン
                  </span>
                )}

                <h3
                  className={`text-base font-bold ${
                    plan.highlighted ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    plan.highlighted ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-white" : "text-accent-blue"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlighted ? "text-white/90" : "text-foreground/85"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] ${
                    plan.highlighted
                      ? "bg-white text-foreground"
                      : "bg-foreground text-white"
                  }`}
                >
                  無料相談する
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 text-center text-sm text-muted">
          {pricingNote}
        </Reveal>
      </div>
    </section>
  );
}
