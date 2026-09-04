/**
 * サイト全体のコンテンツ設定。
 * サービス内容・料金・FAQなどはすべてこのファイルで一元管理しており、
 * 更新したい場合はコンポーネント側を触らずここを編集するだけでよい。
 */

export const siteMeta = {
  name: "SNS AI",
  fullName: "SNS AI株式会社",
  description:
    "AIを活用したSNS運用支援サービス。企画・制作・分析・改善までをワンストップで支援し、企業やお店のSNS運用を効率化します。",
  url: "https://sns-ai.example.com",
  locale: "ja_JP",
};

export const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#results" },
  { label: "AI活用", href: "#workflow" },
  { label: "料金", href: "#pricing" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export const heroContent = {
  eyebrow: "AI × SNS MARKETING",
  headline:
    "SNS動画を作ることが\n私たちの仕事ではない。",
  headlineSub:
    "企業が持つ価値を、それを必要とする人へ届け、\n事業に新しい可能性が生まれる未来をつくる。",
  subCopy: "まだ届いていない価値を、届く力に変える。",
  description:
    "AIとSNSマーケティングを組み合わせ、企画・制作・分析・改善までをワンストップで支援します。",
  primaryCta: { label: "無料相談する", href: "#contact" },
  secondaryCta: { label: "サービスを見る", href: "#services" },
};

export const problems = [
  "何を投稿すればいいかわからない",
  "SNS担当者が足りない",
  "投稿を作る時間がない",
  "動画制作に時間がかかる",
  "フォロワーが増えない",
  "再生回数が伸びない",
  "SNSの分析方法がわからない",
];

export const solutionSteps = [
  { label: "企画" },
  { label: "制作" },
  { label: "投稿" },
  { label: "分析" },
  { label: "改善" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "megaphone" | "sparkles" | "clapperboard" | "barChart" | "search";
};

export const services: Service[] = [
  {
    id: "operation",
    title: "SNS運用代行",
    description:
      "TikTok、Instagram、Xなどの企画・投稿・分析を支援。",
    icon: "megaphone",
  },
  {
    id: "ai-content",
    title: "AIコンテンツ制作",
    description: "投稿案、キャプション、画像、動画案を制作。",
    icon: "sparkles",
  },
  {
    id: "short-video",
    title: "ショート動画制作",
    description:
      "TikTok、Instagram Reels、YouTube Shorts向け動画制作。",
    icon: "clapperboard",
  },
  {
    id: "analytics",
    title: "SNS分析",
    description:
      "投稿データを分析し、伸びた理由・伸びなかった理由を可視化。",
    icon: "barChart",
  },
  {
    id: "research",
    title: "競合リサーチ",
    description: "競合アカウントやトレンドを調査。",
    icon: "search",
  },
];

export const aiWorkflowSteps = [
  { step: "STEP 1", title: "AIリサーチ", description: "競合・トレンドをAIが自動収集" },
  { step: "STEP 2", title: "企画生成", description: "データに基づいた投稿企画を生成" },
  { step: "STEP 3", title: "コンテンツ制作", description: "台本・キャプション・動画を制作" },
  { step: "STEP 4", title: "投稿", description: "最適な時間・形式で投稿" },
  { step: "STEP 5", title: "データ分析", description: "反応・再生数を自動で計測" },
  { step: "STEP 6", title: "改善", description: "分析結果を次の企画へ反映" },
];

export const benefits = [
  "SNS運用時間を削減",
  "投稿数を増やせる",
  "動画制作スピード向上",
  "データに基づく改善",
  "少人数でもSNS運用可能",
  "AIを使ったコンテンツ量産",
];

export type PricingFeature = string;

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "start",
    name: "Start",
    price: "¥49,800",
    priceNote: "/月",
    description: "撮影なし。まずはAIでSNS運用を始めたい方に。",
    features: [
      "AI動画制作 月8本",
      "アカウント分析",
      "台本",
      "キャプション",
      "改善案提案",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "¥98,000",
    priceNote: "/月",
    description:
      "市場の「フルサポート」帯（10〜30万円）に相当する内容を、より手の届く価格で。",
    features: [
      "AI動画制作 月12本",
      "競合分析",
      "トレンド分析",
      "投稿代行",
      "月次レポート",
      "改善MTG",
    ],
    highlighted: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "¥198,000",
    priceNote: "/月",
    description:
      "撮影は入れず、AIならではの物量とデータ最適化で差別化するプラン。",
    features: [
      "AI動画制作 月20〜24本",
      "1企画から複数パターンを自動生成しA/Bテスト、反応の良い型に最適化",
      "TikTok/Reels/Shorts、それぞれの尺・比率・字幕に最適化",
      "SNS戦略設計・月次戦略MTG",
      "競合分析・トレンド分析・コメント分析",
      "AIによる自動パフォーマンスレポート",
      "優先制作枠（通常より早い納期対応）",
    ],
  },
];

export const pricingNote = "料金はサービス内容によってカスタマイズ可能です。";

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "AIだけでSNS運用するのですか？",
    answer:
      "いいえ。AIによる企画・制作をベースにしながら、人の目による微調整や最終チェックを必ず行っています。",
  },
  {
    question: "どのSNSに対応していますか？",
    answer: "TikTok / Instagram Reels を中心に対応しています。",
  },
  {
    question: "動画制作もお願いできますか？",
    answer: "はい。ショート動画（Shorts）制作に対応しています。",
  },
  {
    question: "最低契約期間はありますか？",
    answer: "はい、最低契約期間を設けております。詳しくは無料相談でご説明します。",
  },
  {
    question: "小規模店舗でも依頼できますか？",
    answer: "もちろんです。個人事業主・小規模店舗のお客様も多数ご利用いただいています。",
  },
];

export const finalCtaContent = {
  headline: "SNS動画を作ることが\n私たちの仕事ではない。",
  headlineSub:
    "企業が持つ価値を、それを必要とする人へ届け、\n事業に新しい可能性が生まれる未来をつくる。",
  subCopy: "まだ届いていない価値を、届く力に変える。",
  description: "SNS運用・動画制作・AI活用について、まずはお気軽にご相談ください。",
  cta: { label: "無料相談する", href: "#contact" },
};

export const footerLinks = [
  { label: "サービス", href: "#services" },
  { label: "料金", href: "#pricing" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export const companyInfo = {
  companyName: "SOKUHEN（即編）",
  representative: "西岡圭汰",
  email: "sokuhen7@gmail.com",
};
