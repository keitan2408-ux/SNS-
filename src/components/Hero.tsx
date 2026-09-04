"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Play, Sparkles } from "lucide-react";
import { heroContent } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-accent-blue/20 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent-purple/20 blur-[130px] animate-pulse-glow"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-muted">
            <Sparkles size={14} className="text-accent-purple" />
            {heroContent.eyebrow}
          </span>

          <h1 className="mt-6 whitespace-pre-line text-3xl font-bold leading-[1.35] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {heroContent.headline}
          </h1>

          <p className="mt-5 whitespace-pre-line text-base leading-[1.9] text-muted sm:text-lg">
            {heroContent.headlineSub}
          </p>

          <p className="text-gradient mt-6 text-xl font-bold sm:text-2xl">
            {heroContent.subCopy}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(79,107,255,0.55)] transition-transform duration-200 hover:scale-[1.03]"
            >
              {heroContent.primaryCta.label}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[26rem] w-full max-w-md lg:h-[30rem]"
        >
          <div className="animate-float-slow absolute left-0 top-4 w-64 rounded-3xl border border-border bg-white/90 p-5 shadow-[0_30px_60px_-20px_rgba(20,20,30,0.25)] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted">投稿データ分析</span>
              <BarChart3 size={16} className="text-accent-blue" />
            </div>
            <div className="mt-4 flex items-end gap-2">
              {[40, 65, 50, 85, 60, 95].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-md bg-gradient-accent"
                  style={{ height: `${h}px`, opacity: 0.55 + i * 0.08 }}
                />
              ))}
            </div>
            <p className="mt-3 text-[11px] font-medium text-muted">
              再生数 <span className="text-foreground">+128%</span>
            </p>
          </div>

          <div className="animate-float-slower absolute right-0 top-24 w-56 rounded-3xl border border-border bg-white/90 p-5 shadow-[0_30px_60px_-20px_rgba(20,20,30,0.25)] backdrop-blur">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-accent-purple" />
              <span className="text-xs font-semibold text-muted">AI生成キャプション</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-surface-strong" />
              <div className="h-2 w-4/5 rounded-full bg-surface-strong" />
              <div className="h-2 w-3/5 rounded-full bg-surface-strong" />
            </div>
          </div>

          <div className="animate-float-slow absolute bottom-0 left-6 w-48 rounded-[2rem] border border-border bg-foreground p-4 shadow-[0_30px_70px_-20px_rgba(20,20,30,0.45)]">
            <div className="flex aspect-[9/16] w-full items-center justify-center rounded-2xl bg-gradient-accent">
              <Play size={28} className="text-white/90" fill="currentColor" />
            </div>
            <p className="mt-3 text-[11px] font-medium text-white/70">
              ショート動画を自動編集
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
