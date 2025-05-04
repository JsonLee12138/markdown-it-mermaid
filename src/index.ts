import type MarkdownIt from 'markdown-it';
import mermaid from 'mermaid';
import { debounce } from 'radash';

export interface MarkdownItMermaidOptions {
  delay: number;
}

const markdownItMermaid = ({ delay = 300 }: Partial<MarkdownItMermaidOptions> = {}) => {
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
