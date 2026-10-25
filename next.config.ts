import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: every route becomes an HTML file in `out/`, hosted free on GitHub Pages.
  // Navigation between pages still happens client-side, like a single-page app.
  output: "export",
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
