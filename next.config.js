const withNextra = require("nextra")({
  // 基础配置
  latex: true,
  defaultShowCopyCode: true,

  // 主题
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra();
