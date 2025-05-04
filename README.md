# Markdown-It-Plugin-Mermaid 🚀

**[English document](https://github.com/JsonLee12138/hook-fetch/blob/main/README.en.md)**

## 介绍

`markdown-it-plugin-mermaid` 是一个用于在 `markdown-it` 中渲染 Mermaid 图表的插件。通过此插件，您可以在 Markdown 文件中直接书写 Mermaid 代码块，并将其渲染为图表。

## 安装

```bash
# 使用 npm
npm install markdown-it-plugin-mermaid --save

# 使用 yarn
yarn add markdown-it-plugin-mermaid

# 使用 pnpm
pnpm add markdown-it-plugin-mermaid
```

## 基础使用

```typescript
import MarkdownIt from 'markdown-it';
import markdownItMermaid from 'markdown-it-plugin-mermaid';

const md = new MarkdownIt();
// delay默认为300ms, 用于延迟渲染，防止打字机闪动, 非必传
md.use(markdownItMermaid({ delay: 50 }));

const result = md.render(`
\`\`\`mermaid
graph TD
  A[Client] --> B[Load Balancer]
  B --> C[Server01]
  B --> D[Server02]
\`\`\`
`);

// 输出结果为 HTML 格式，其中包含 Mermaid 图表的渲染结果
console.log(result);
```

## 配置选项

`markdown-it-plugin-mermaid` 提供以下配置选项：

- `delay`：用于防抖动的延迟时间（单位：毫秒）。默认为 `300`。

## 📝 贡献指南
欢迎提交`issue`或`pull request`，共同完善`Markdown-It-Plugin-Mermaid`。

## 📄 许可证

MIT

## 联系我们

- [Discord](https://discord.gg/Ah55KD5d)
