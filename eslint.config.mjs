import coreWebVitals from "eslint-config-next/core-web-vitals";

// eslint-config-next's core-web-vitals preset already includes the base
// next config, TypeScript parsing, and global ignores.
const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
];

export default eslintConfig;
