import { AlertCircle } from "lucide-react";
import { problems } from "@/lib/site-config";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Problems() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            こんなSNSの悩み、ありませんか？
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <RevealItem key={problem}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-5 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(20,20,30,0.25)]">
                <AlertCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-purple"
                />
                <p className="text-sm font-medium leading-relaxed text-foreground/90 sm:text-[15px]">
                  {problem}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
