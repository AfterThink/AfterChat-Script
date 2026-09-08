# AfterChat — LLM 对话导出器

<p align="center">
  <a href="https://greasyfork.org/zh-CN/scripts/589622-afterchat-llm-chat-exporter">
    <img src="https://img.shields.io/badge/Greasy%20Fork-%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC-red?style=for-the-badge&logo=greasyfork" alt="Greasy Fork 安装" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=for-the-badge" alt="License: AGPL-3.0" />
  </a>
</p>

[English](./README.md) | 简体中文

AfterChat 是一个免费开源的 **AI 对话导出器 / 聊天记录备份工具**。

一键将 **ChatGPT、Claude、Gemini、DeepSeek、GLM、千问** 等 27 个主流 AI 平台的聊天记录导出为 **Markdown 文件**，完整保留**思考过程**与**引用来源**，方便个人备份、迁移与离线阅读。

安装 [AfterChat 客户端](https://github.com/AfterThink/AfterChat-App-Download)后，支持一键保存当前对话到 AfterChat 工作区。

## 支持平台

| 平台 | 站点 |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Claude | `claude.ai` |
| Google Gemini | `gemini.google.com` |
| Google AI Mode | `google.com/ai` |
| Grok (xAI) | `x.com/i/grok` |
| DeepSeek | `chat.deepseek.com` |
| Microsoft Copilot | `copilot.microsoft.com` |
| M365 Copilot | `m365.cloud.microsoft` |
| Perplexity | `perplexity.ai` |
| Kimi | `kimi.com` |
| 豆包 | `doubao.com` |
| 智谱清言 | `chatglm.cn` |
| Z.ai（GLM） | `chat.z.ai` |
| Qwen | `chat.qwen.ai` |
| 千问 | `qianwen.com` |
| Poe | `poe.com` |
| 腾讯元宝 | `yuanbao.tencent.com` |
| 腾讯混元 | `aistudio.tencent.com` / `aistudio.tencent.ai` |
| MiniMax | `agent.minimax.io` / `agent.minimaxi.com` |
| Mistral Le Chat | `chat.mistral.ai` |
| Monica | `monica.im` |
| Google AI Studio | `aistudio.google.com` |
| DuckDuckGo AI Chat | `duck.ai` |
| 腾讯 ima | `ima.qq.com` |
| Sakana AI | `chat.sakana.ai` |
| Arena AI | `arena.ai` |
| Dola | `dola.com` |

## 安装

安装暴力猴（[Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) / [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)）或 Tampermonkey（[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)）后，点击下面的链接，在弹出的确认框中点安装即可：

[安装 AfterChat — LLM 对话导出器](https://update.greasyfork.org/scripts/589622/AfterChat%20%E2%80%94%20LLM%20Chat%20Exporter.user.js)

## 功能特性

- **多平台适配**：支持 27 个主流 LLM 平台。
- **单条 / 批量导出**：同时支持导出当前对话和全部对话。
- **增量导出**：列表页批量导出默认跳过已下载过的对话，只拉取新增/更新对话。
- **内容保真**：导出内容包含用户消息、AI 回复、**思考过程**，以及**引用来源**。
- **一键存到 AfterChat**：在对话详情页**右键点击按钮**，将当前对话直接存入 AfterChat 工作区。

## 使用

脚本在页面右下角显示一个下载按钮：

| 场景 | 操作 | 行为 |
| --- | --- | --- |
| 对话页 | **左键** | 导出当前对话 |
| 对话页 | **右键** | 将当前对话保存到 AfterChat 工作区 |
| 默认页 | **左键** | 增量导出：仅打包新增的对话，跳过已导出的 |
| 默认页 | **Shift + 左键** | 强制全量导出，重新下载全部对话 |

## 隐私与安全

您的隐私至关重要。该脚本不会搜集您任何信息。

脚本使用 `@grant none`，不向任何第三方发送数据；导出文件仅保存在本地。

## 关于

- 本脚本通过各平台**前端同源 API** 拉取数据，可能随平台改版失效，敬请留意更新。
- 脚本失效请通过 [GreasyFork](https://greasyfork.org/zh-CN/scripts/589622-afterchat-llm-chat-exporter/discussions/339157) 或 [Github issue](https://github.com/AfterThink/AfterChat-Script/issues) 反馈。
- 欢迎提交 PR 修复！喜欢请[点星](https://github.com/AfterThink/AfterChat-Script)！
- 请遵守各平台服务条款，导出内容仅限个人备份与学习使用。

## 许可证

[本项目](https://github.com/AfterThink/AfterChat-Script)基于 [AGPL v3](./LICENSE) 开源。
