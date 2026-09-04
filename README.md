# SNS AI — SNSマーケティング × AI活用サービスサイト

企業・店舗・個人事業主向けに、AIを活用したSNS運用支援を提供するサービスのマーケティングサイトです。
Next.js (App Router) + TypeScript + Tailwind CSS で構築しています。

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

## 構成

- `src/app` — ページ本体（`page.tsx`）、レイアウト、`/api/contact` のお問い合わせAPI、`/privacy` ページ
- `src/components` — セクションごとのコンポーネント（Header / Hero / Services / Pricing / Faq など）
- `src/lib/site-config.ts` — サービス内容・料金プラン・FAQ・ナビゲーションなど、サイト全体のコンテンツを一元管理する設定ファイル

## コンテンツの更新方法

サービス内容や料金プランなどのテキスト情報は `src/lib/site-config.ts` にまとめてあります。
コンポーネント側のコードを変更せずに、この設定ファイルを編集するだけでサイトの表示内容を更新できます。

## お問い合わせフォーム

`src/app/api/contact/route.ts` がフォーム送信を受け付けます。現状は送信内容をログ出力するのみのため、
実際にメール通知を行う場合は [Resend](https://resend.com) などのメール送信サービスと接続してください。

## Build

```bash
npm run build
npm run start
```
