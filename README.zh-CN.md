# AfterChat — LLM 对话导出器

[English](./README.md) | 简体中文

一个浏览器脚本（Tampermonkey / Greasemonkey），可以从主流 LLM 对话平台**一键导出聊天记录**为 Markdown 文件。

安装 [AfterChat 客户端](https://github.com/AfterThink/AfterChat-App-Download)后，支持一键**保存当前对话到 AfterChat** 工作区。

## 🖥️ 支持平台

| 平台 | 站点 |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Google Gemini | `gemini.google.com` |
| Google AI Studio | `aistudio.google.com` |
| M365 Copilot | `m365.cloud.microsoft` |
| Microsoft Copilot | `copilot.microsoft.com` |
| Grok | `x.com/i/grok` |
| DeepSeek | `chat.deepseek.com` |
| Qwen | `chat.qwen.ai` |
| Kimi | `www.kimi.com` |
| 千问 | `www.qianwen.com` |
| 腾讯元宝 | `yuanbao.tencent.com` |
| 豆包 | `www.doubao.com` |

## ✨ 功能特性

- **多平台适配**：支持 12 个主流 LLM 平台。
- **单条 / 批量导出**：
  - 在**对话详情页**点击按钮 → 导出当前对话；
  - 在**对话列表页**点击按钮 → 拉取全部对话并打包下载。
- **内容保真**：导出内容包含用户消息、AI 回复、**思考过程（reasoning / thinking）**，以及**引用来源**。
- **一键存到 AfterChat**：在对话详情页**右键点击按钮**，将当前对话直接存入 AfterChat 工作区。

## 📦 安装

1. 安装浏览器扩展 **Tampermonkey**（[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)）。
2. 打开 Tampermonkey 面板 → **新建脚本**，将 `afterchat.user.js` 的全部内容粘贴进去并保存。
3. 访问任意受支持平台并**保持登录状态**，脚本会在页面右下角注入一个圆形下载按钮，即安装成功。

## 🚀 使用方法

脚本在页面右下角显示一个圆形下载按钮：

| 操作 | 场景 | 行为 |
| --- | --- | --- |
| **左键点击** | 对话详情页 | 导出当前对话（Markdown） |
| **左键点击** | 对话列表页 | 拉取全部对话，导出为 ZIP  |
| **右键点击** | 对话详情页 | 将当前对话保存到 AfterChat 工作区  |

## ⚠️ 免责声明

- 本脚本通过各平台**前端同源 API** 拉取数据，非官方接口，可能随平台改版失效，敬请留意更新。
- 请遵守各平台服务条款，导出内容仅限个人备份与学习使用。
- 脚本使用 `@grant none`，不向任何第三方发送数据；导出文件仅保存在本地。
