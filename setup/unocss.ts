import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup(() => ({
  rules: [
    // Font size rules based on EMs instead of REMs
    [/^text-base$/, () => ({ 'font-size': '1em', 'line-height': 1.4 })],
    [/^text-(\d+)s$/, ([, value]) => {
      const parsedNum = Number(value);
      const fontSize = `${Math.max(1 - (parsedNum * 0.125), 0.125)}em`;
      const lineHeight = 1.2;
      return { 'font-size': fontSize, 'line-height': lineHeight };
    }],
    [/^text-(\d+)l$/, ([, value]) => {
      const parsedNum = Number(value);
      const fontSize = `${1 + (parsedNum * 0.125)}em`;
      const lineHeight = parsedNum <= 3 ? 1.4 : (parsedNum <= 6 ? 1.2 : (parsedNum <= 9 ? 1.1 : 1));
      return { 'font-size': fontSize, 'line-height': lineHeight };
    }],
  ],

  variants: [
    // Initial: provide default styling
    {
      name: 'initial',
      match(matcher) {
        const name = 'initial';
        if (!matcher.startsWith(`${name}:`)) {
          return matcher;
        }
  
        return {
          matcher: matcher.slice(name.length + 1),
          selector: s => `:where(${s})`,
        };
      },
    },
  ],
}))