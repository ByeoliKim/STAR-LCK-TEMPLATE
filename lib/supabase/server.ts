// lib/supabase/server.ts
import { createClient } from "@supabase/supabase-js";

function required(name: string, value: string | undefined) {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

// ✅ 서버 전용: Service Role (RLS 무시 가능, insert/집계 등 관리자 작업용)
export function createSupabaseAdmin() {
  const url = required(
    "NEXT_PUBLIC_SUPABASE_URL",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const serviceKey = required(
    "SUPABASE_SERVICE_ROLE_KEY",
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

// ✅ 서버에서도 "공개 권한(anon)"으로 읽고 싶을 때 사용 가능 (선택)
export function createSupabaseServerAnon() {
  const url = required(
    "NEXT_PUBLIC_SUPABASE_URL",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  const anonKey = required(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
