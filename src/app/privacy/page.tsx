import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo, siteMeta } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteMeta.name}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-muted">最終更新日：2026年9月4日</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-base font-bold text-foreground">
                1. 個人情報の取得について
              </h2>
              <p className="mt-3">
                {companyInfo.companyName}（以下「当社」といいます）は、お問い合わせフォームを通じて、会社名・お名前・メールアドレス・ご相談内容などの個人情報を取得します。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground">
                2. 利用目的
              </h2>
              <p className="mt-3">
                取得した個人情報は、お問い合わせへの回答、サービスのご案内、ご契約に関する連絡のためにのみ利用し、目的外の利用は行いません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground">
                3. 第三者提供について
              </h2>
              <p className="mt-3">
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground">
                4. 個人情報の管理
              </h2>
              <p className="mt-3">
                当社は、取得した個人情報の漏えい・滅失・毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground">
                5. お問い合わせ窓口
              </h2>
              <p className="mt-3">
                本ポリシーに関するお問い合わせは、下記メールアドレスまでご連絡ください。
                <br />
                {companyInfo.companyName}　{companyInfo.representative}
                <br />
                Email: {companyInfo.email}
              </p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-14 inline-flex items-center text-sm font-semibold text-accent-blue"
          >
            トップページに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
