# AfterChat — LLM 对话导出器

[English](./README.md) | 简体中文

AfterChat 是一个免费开源的 **AI 对话导出器 / 聊天记录备份工具**（油猴脚本，支持 Violentmonkey / Tampermonkey / Greasemonkey），一键将 **ChatGPT、Gemini、DeepSeek、GLM（Z.ai / 智谱清言）** 等 18 个主流 AI 平台的聊天记录导出为 **Markdown 文件**，完整保留**思考过程（reasoning / thinking）**与**引用来源**，方便个人备份、迁移与离线阅读。

安装 [AfterChat 客户端](https://github.com/AfterThink/AfterChat-App-Download)后，支持一键保存当前对话到 AfterChat 工作区。

## 🖥️ 支持平台

| 平台 | 站点 |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Google Gemini | `gemini.google.com` |
| Google AI Studio | `aistudio.google.com` |
| M365 Copilot | `m365.cloud.microsoft` |
| Microsoft Copilot | `copilot.microsoft.com` |
| Grok (xAI) | `x.com/i/grok` |
| DeepSeek | `chat.deepseek.com` |
| Qwen（通义千问） | `chat.qwen.ai` |
| Kimi | `www.kimi.com` |
| 千问 | `www.qianwen.com` |
| 腾讯元宝 | `yuanbao.tencent.com` |
| 豆包 | `www.doubao.com` |
| Arena AI | `arena.ai` |
| 腾讯 ima | `ima.qq.com` |
| Z.ai（GLM） | `chat.z.ai` |
| 智谱清言（ChatGLM） | `chatglm.cn` |
| DuckDuckGo AI Chat | `duck.ai` |
| Perplexity | `www.perplexity.ai` |

## ✨ 功能特性

- **多平台适配**：支持 18 个主流 LLM 平台。
- **单条 / 批量导出**：同时支持导出当前对话和全部对话。
- **内容保真**：导出内容包含用户消息、AI 回复、**思考过程（reasoning / thinking）**，以及**引用来源**。
- **一键存到 AfterChat**：在对话详情页**右键点击按钮**，将当前对话直接存入 AfterChat 工作区。

## 📦 安装

安装暴力猴（[Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) / [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)）或 Tampermonkey（[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)）后，点击下面的链接，在弹出的确认框中点安装即可：

[安装 AfterChat — LLM 对话导出器](https://update.greasyfork.org/scripts/589622/AfterChat%20%E2%80%94%20LLM%20Chat%20Exporter.user.js)

## 🚀 使用方法

脚本在页面右下角显示一个圆形下载按钮：

| 操作 | 场景 | 行为 |
| --- | --- | --- |
| **左键点击** | 详情页 | 导出当前对话（Markdown） |
| **左键点击** | 默认页/列表页 | 拉取全部对话，导出为 ZIP  |
| **右键点击** | 详情页 | 将当前对话保存到 AfterChat 工作区  |

## ⚠️ 免责声明

- 本脚本通过各平台**前端同源 API** 拉取数据，非官方接口，可能随平台改版失效，敬请留意更新。
- 请遵守各平台服务条款，导出内容仅限个人备份与学习使用。
- 脚本使用 `@grant none`，不向任何第三方发送数据；导出文件仅保存在本地。

## 📄 许可证

本项目基于 [GNU Affero General Public License v3.0](./LICENSE) 开源。
