<h1 align="center">AfterChat — LLM Chat Exporter</h1>

<p align="center">
  <a href="https://greasyfork.org/en/scripts/589622-afterchat-llm-chat-exporter">
    <img src="https://img.shields.io/badge/Greasy%20Fork-Install%20Script-red?style=for-the-badge&logo=greasyfork" alt="Install on Greasy Fork" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=for-the-badge" alt="License: AGPL-3.0" />
  </a>
</p>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

AfterChat is a free, open-source **AI chat exporter / conversation backup tool**.

Export chats from **ChatGPT, Claude, Gemini, DeepSeek, GLM, Qwen** and 30 major AI platforms to **Markdown files** with one click, fully preserving **reasoning / thinking** and **citation sources** for personal backup, migration and offline reading.

<p align="center">
  <img src="https://fastly.jsdelivr.net/gh/AfterThink/assets@main/afterchat-script/demo-export-markdown.gif" alt="Export Markdown Demo" width="300" />
  <br>
  <sub>Left-click the floating button in the bottom-right corner to export current chat to Markdown</sub>
</p>

## Installation

After installing Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) / [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)) or Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)), click the link below and confirm in the popup:

👉 **[Install AfterChat — LLM Chat Exporter (Greasy Fork)](https://update.greasyfork.org/scripts/589622/AfterChat%20%E2%80%94%20LLM%20Chat%20Exporter.user.js)**

## Usage

The script shows a circular download button in the bottom-right corner of the page:

| Scenario | Action | Result |
| --- | --- | --- |
| Conversation page | **Left-click** | **Export current conversation** (download as `.md`) |
| Conversation page | **Right-click** | **Save to AfterChat** (sync into desktop workspace) |
| Project page | **Left-click** | **Project batch export**: pack only conversations within the current project / workspace |
| Default page | **Left-click** | **Incremental batch export**: pack only new conversations, skipping already-exported ones |
| Default page | **Shift + left-click** | **Force full export**: re-fetch and pack all conversations |

Install the [AfterChat Desktop App](https://github.com/AfterThink/AfterChat-App-Download), and **right-click the button** on a conversation page to save it directly into your desktop workspace:

<p align="center">
  <img src="https://fastly.jsdelivr.net/gh/AfterThink/assets@main/afterchat-script/demo-save-to-afterchat.gif" alt="Save to AfterChat Demo" width="85%" />
  <br>
  <sub>Right-click to sync directly into AfterChat without manual file organization</sub>
</p>

## Features

- **Multi-platform support**: works with 30 major LLM platforms.
- **Single or batch export**: exports the current conversation or all conversations at once.
- **Project / Workspace export**: automatically detects project and workspace folders to batch-export conversations within the project.
- **Incremental export**: on the list page, batch export skips conversations you've already downloaded (by update-time anchor) and only fetches new/updated ones — dramatically faster on repeat runs.
- **Content fidelity**: exports include user messages, AI replies, **reasoning / thinking**, and **citation sources**.
- **One-click save to AfterChat**: on a conversation detail page, **right-click the button** to save the current conversation directly to your [AfterChat Desktop App](https://github.com/AfterThink/AfterChat-App-Download) workspace.

## Supported Platforms

| Platform | Site |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Claude | `claude.ai` |
| Google Gemini | `gemini.google.com` |
| Google AI Mode | `google.com/ai` |
| Grok (X) | `x.com/i/grok` |
| Grok | `grok.com` |
| DeepSeek | `chat.deepseek.com` |
| Microsoft Copilot | `copilot.com` |
| M365 Copilot | `copilot.cloud.microsoft` |
| Perplexity | `perplexity.ai` |
| Kimi | `kimi.com` |
| Doubao | `doubao.com` |
| ChatGLM | `chatglm.cn` |
| Z.ai (GLM) | `chat.z.ai` |
| Qwen | `chat.qwen.ai` |
| Qianwen | `qianwen.com` |
| Poe | `poe.com` |
| Tencent Yuanbao | `yuanbao.tencent.com` |
| Tencent Hunyuan | `aistudio.tencent.com` / `aistudio.tencent.ai` |
| MiniMax | `agent.minimax.io` / `agent.minimaxi.com` |
| Mistral Le Chat | `chat.mistral.ai` |
| Monica | `monica.im` |
| Google AI Studio | `aistudio.google.com` |
| DuckDuckGo AI Chat | `duck.ai` |
| Tencent IMA | `ima.qq.com` |
| Sakana AI | `chat.sakana.ai` |
| Arena AI | `arena.ai` |
| Dola | `dola.com` |
| StepFun AI Studio | `studio.stepfun.ai` / `studio.stepfun.com` |
| StepFun Chat | `chat.stepfun.com` |

## Privacy & Security

Your privacy matters. The script does not collect any information from you.

The script runs with `@grant none`, sends no data to any third party, and exported files are only stored locally.

## Related Projects

- [AfterChat-Converter](https://github.com/AfterThink/AfterChat-Converter): Converts scattered chat history backups from various AI platforms and third-party clients into consistently formatted Markdown documents in one click. Supports official exports and client backups from ChatGPT, Claude, Qwen, Google AI Studio, Cherry Studio, RikkaHub, and more.
- [AfterChat Desktop App](https://github.com/AfterThink/AfterChat-App-Download): manage your conversations and build a knowledge base locally.

## About

- This script pulls data through each platform's **front-end same-origin API**. These are unofficial interfaces and may stop working when platforms update, so please keep it updated.
- If a platform breaks, please report it on [Greasy Fork](https://greasyfork.org/zh-CN/scripts/589622-afterchat-llm-chat-exporter/feedback) or open a [GitHub issue](https://github.com/AfterThink/AfterChat-Script/issues).
- Pull requests are welcome! If you find this useful, please [star the repo](https://github.com/AfterThink/AfterChat-Script).
- Please follow each platform's terms of service. Exported content is intended for personal backup and learning only.

## License

Licensed under the [GNU Affero General Public License v3.0](./LICENSE).
