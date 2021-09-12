/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import litTailwind from '@takanorip/rollup-plugin-lit-tailwindcss';

export default {
  input: './src/my-element.ts',
  output: {
    dir: './dev',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve(),
    summary(),
    litTailwind({
      include: 'src/**/*.ts',
      placeholder: 'tw_placeholder',
      exclude: undefined,
    }),
  ],
};
