import {
  BarChart3,
  Clapperboard,
  Megaphone,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/site-config";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

const icons: Record<Service["icon"], LucideIcon> = {
  megaphone: Megaphone,
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  barChart: BarChart3,
  search: Search,
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-accent-blue">
            SERVICE
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            サービス
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <RevealItem
                key={service.id}
                className={
                  i === services.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : undefined
                }
              >
                <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_rgba(20,20,30,0.25)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
