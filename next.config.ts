import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** This repo lives under a tree that may include another package-lock.json (e.g. user home). Pin the app root so Next resolves dependencies from this folder only. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
