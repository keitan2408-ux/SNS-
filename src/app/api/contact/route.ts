import { NextResponse } from "next/server";
import { companyInfo } from "@/lib/site-config";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 },
    );
  }

  const { company, name, email, message } = payload;

  if (!company?.trim() || !name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "すべての項目を入力してください。" },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 },
    );
  }

  // NOTE: メール送信サービス（Resend など）と接続する場合は、
  // ここで companyInfo.email 宛にAPIキー経由で送信する処理を追加する。
  // 現状は送信内容をログに出力するのみ。
  console.log("[contact] new inquiry", {
    to: companyInfo.email,
    company,
    name,
    email,
    message,
  });

  return NextResponse.json({ ok: true });
}
