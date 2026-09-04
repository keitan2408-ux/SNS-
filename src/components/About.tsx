import { companyInfo, siteMeta } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const items = [
  { label: "サービス名", value: siteMeta.name },
  { label: "運営会社", value: companyInfo.companyName },
  { label: "代表者", value: companyInfo.representative },
  { label: "お問い合わせ", value: companyInfo.email },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold tracking-widest text-accent-blue">
            ABOUT
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            会社概要
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-3xl border border-border">
          <dl className="divide-y divide-border">
            {items.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-1 bg-surface px-6 py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-4 sm:px-8"
              >
                <dt className="text-xs font-semibold text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-foreground sm:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
