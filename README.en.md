# Markdown-It-Mermaid

**[中文文档](https://github.com/JsonLee12138/markdown-it-mermaid/blob/main/README.md)**

## Introduction

`markdown-it-mermaid` is a plugin for rendering Mermaid diagrams in `markdown-it`. With this plugin, you can write Mermaid code blocks directly in Markdown files and render them as diagrams.

## Installation

```bash
# Using npm
npm install @jsonlee_12138/markdown-it-mermaid --save

# Using yarn
yarn add @jsonlee_12138/markdown-it-mermaid

# Using pnpm
pnpm add @jsonlee_12138/markdown-it-mermaid
```

## Basic Usage

```typescript
import MarkdownIt from 'markdown-it';
import markdownItMermaid from '@jsonlee_12138/markdown-it-mermaid';

const md = new MarkdownIt();
// delay defaults to 300ms, used to prevent flickering during typing, optional
md.use(markdownItMermaid({ delay: 50 }));

const result = md.render(`
\`\`\`mermaid
graph TD
  A[Client] --> B[Load Balancer]
  B --> C[Server01]
  B --> D[Server02]
\`\`\`
`);

// The output is in HTML format, including the rendered Mermaid diagram
console.log(result);
```

## Configuration Options

`@jsonlee_12138/markdown-it-mermaid` provides the following configuration options:

- `delay`: The debounce delay time in milliseconds. Default is `300`.

## 📝 Contribution Guide
Feel free to submit `issues` or `pull requests` to help improve `Markdown-It-Mermaid`.

## 📄 License

MIT

## Contact Us

- [Discord](https://discord.gg/Ah55KD5d)
