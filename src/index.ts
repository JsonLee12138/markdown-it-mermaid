import type MarkdownIt from 'markdown-it';
import mermaid, { type MermaidConfig } from 'mermaid';
import { debounce } from 'radash';

export interface MarkdownItMermaidOptions extends MermaidConfig {
  delay: number;
}

const markdownItMermaid = ({ delay = 30, ...mermaidOptions }: Partial<MarkdownItMermaidOptions> = {}) => {
  mermaid.initialize({ ...mermaidOptions })
  const mermaidRun = debounce({ delay }, () => {
    mermaid.run();
  });
  return (md: MarkdownIt) => {
    const sourceRender = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      if (token.info === 'mermaid' && token.content) {
        mermaidRun();
        return `<pre class="mermaid">${token.content}</pre>`;
      }
      return sourceRender?.(tokens, idx, options, env, self) as string;
    }
  }
}

export default markdownItMermaid;
