import { dirPath, filePath } from "@/plugins/generate";
import { existsSync, readFileSync } from "fs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const dir = existsSync(dirPath);
  const file = existsSync(filePath);
  if (!dir || !file) {
    return NextResponse.json(
      {
        message: "Skew folder or file doesn't exist",
      },
      { status: 404 }
    );
  }
  return new Response(readFileSync(filePath), {
    headers: { "content-type": "text/plain" },
  });
}
