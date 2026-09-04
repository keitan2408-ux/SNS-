"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  company: "",
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "送信に失敗しました。");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "送信に失敗しました。",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-white p-10 text-center">
        <h3 className="text-lg font-bold text-foreground">
          お問い合わせありがとうございます
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          内容を確認の上、担当者より2営業日以内にご連絡いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
        >
          もう一度入力する
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-6 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="company"
            className="text-xs font-semibold text-muted"
          >
            会社名
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange("company")}
            placeholder="株式会社◯◯"
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-xs font-semibold text-muted">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            placeholder="山田 太郎"
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-xs font-semibold text-muted">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold text-muted"
          >
            相談内容
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            placeholder="現在のSNS運用の課題や、ご相談内容をご記入ください。"
            className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-500">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            送信中...
          </>
        ) : (
          <>
            <Send size={16} />
            無料相談を送信する
          </>
        )}
      </button>
    </form>
  );
}
