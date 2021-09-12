/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import resolve from '@rollup/plugin-node-resolve';
import litTailwind from '@takanorip/rollup-plugin-lit-tailwindcss';

export default {
  input: './dev/my-element.js',
  output: {
    file: './dev/my-element.bundled.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    summary(),
    litTailwind({
      include: 'dev/**/*.js',
      placeholder: 'tw_placeholder',
      exclude: undefined,
    }),
  ],
};
