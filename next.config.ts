import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* When a parent directory has another lockfile, pin tracing to this app root (Vercel/local). */
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
