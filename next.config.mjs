import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
};

const withNextra = nextra({
  // 基础配置
  latex: true,
  defaultShowCopyCode: true,

  // 主题
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
