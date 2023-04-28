import { defineUnoSetup } from '@slidev/types'
import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'

export default defineUnoSetup(() => ({
    safelist: [
      '!opacity-0',
    ],
    shortcuts: {
    },
    rules: [
      [/^text-base$/, () => ({'font-size': '1em', 'line-height': 1.4})],
      [/^text-(\d+)s$/, ([, value]) => {
        const parsedNum = Number(value);
        const fontSize = `${Math.max(1 - (parsedNum * 0.125), 0.125)}em`;
        const lineHeight = 1.4;
        return {'font-size': fontSize, 'line-height': lineHeight};
      }],
      [/^text-(\d+)l$/, ([, value]) => {
        const parsedNum = Number(value);
        const fontSize = `${1 + (parsedNum * 0.125)}em`;
        const lineHeight = parsedNum <= 3 ? 1.4 : (parsedNum <= 6 ? 1.2 : (parsedNum <= 9 ? 1.1 : 1));
        return {'font-size': fontSize, 'line-height': lineHeight};
      }],
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
    ],
    transformers: [
      transformerDirectives({ enforce: 'pre' }),
      transformerVariantGroup(),
    ],
}))