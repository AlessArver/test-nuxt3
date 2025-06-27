import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

import prettierConfig from 'eslint-config-prettier';

export default createConfigForNuxt()
  .append(prettierConfig)
  .append({ rules: { 'no-console': 'warn' } });
