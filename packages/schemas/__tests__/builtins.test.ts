import { describe, expect, it } from 'vite-plus/test';
import { builtInPlugins, circleMark, text } from '../src/index.js';

describe('builtInPlugins', () => {
  it('keeps the default plugin surface text-only', () => {
    expect(Object.keys(builtInPlugins)).toEqual(['Text']);
    expect(builtInPlugins.Text).toBe(text);
    expect(Object.values(builtInPlugins)).not.toContain(circleMark);
  });
});
