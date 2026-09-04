import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { siteMeta } from "@/lib/site-config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} | AIで加速するSNSマーケティング`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "SNS運用代行",
    "AI SNSマーケティング",
    "TikTok運用",
    "Instagram運用",
    "ショート動画制作",
    "SNS分析",
  ],
  openGraph: {
    type: "website",
    locale: siteMeta.locale,
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: `${siteMeta.name} | AIで加速するSNSマーケティング`,
    description: siteMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | AIで加速するSNSマーケティング`,
    description: siteMeta.description,
  },
  alternates: {
    canonical: siteMeta.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
