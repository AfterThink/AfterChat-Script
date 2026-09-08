# AfterChat — LLM Chat Exporter

<p align="center">
  <a href="https://greasyfork.org/en/scripts/589622-afterchat-llm-chat-exporter">
    <img src="https://img.shields.io/badge/Greasy%20Fork-Install%20Script-red?style=for-the-badge&logo=greasyfork" alt="Install on Greasy Fork" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=for-the-badge" alt="License: AGPL-3.0" />
  </a>
</p>

English | [简体中文](./README.zh-CN.md)

AfterChat is a free, open-source **AI chat exporter / conversation backup tool**.

Export chats from **ChatGPT, Claude, Gemini, DeepSeek, GLM, Qwen** and 27 major AI platforms to **Markdown files** with one click, fully preserving **reasoning / thinking** and **citation sources** for personal backup, migration and offline reading.

After installing the [AfterChat client](https://github.com/AfterThink/AfterChat-App-Download), you can also save the current conversation to your AfterChat workspace with one click.

## Supported Platforms

| Platform | Site |
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

## Installation

After installing Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) / [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)) or Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)), click the link below and confirm in the popup:

[Install AfterChat — LLM Chat Exporter](https://update.greasyfork.org/scripts/589622/AfterChat%20%E2%80%94%20LLM%20Chat%20Exporter.user.js)

## Features

- **Multi-platform support**: works with 27 major LLM platforms.
- **Single or batch export**: exports the current conversation or all conversations at once.
- **Incremental export**: on the list page, batch export skips conversations you've already downloaded (by update-time anchor) and only fetches new/updated ones — dramatically faster on repeat runs.
- **Content fidelity**: exports include user messages, AI replies, **reasoning / thinking**, and **citation sources**.
- **One-click save to AfterChat**: on a conversation detail page, **right-click the button** to save the current conversation directly to your AfterChat workspace.

## Usage

The script shows a circular download button in the bottom-right corner of the page:

| Scenario | Action | Result |
| --- | --- | --- |
| Conversation page | **Left-click** | Export the current conversation |
| Conversation page | **Right-click** | Save the current conversation to the AfterChat workspace |
| Default page | **Left-click** | Incremental export: pack only new conversations, skipping already-exported ones |
| Default page | **Shift + left-click** | Force full export, re-download all conversations |

## Privacy & Security

Your privacy matters. The script does not collect any information from you.

The script runs with `@grant none`, sends no data to any third party, and exported files are only stored locally.

## About

- This script pulls data through each platform's **front-end same-origin API**. These are unofficial interfaces and may stop working when platforms update, so please keep it updated.
- If a platform breaks, please report it on [Greasy Fork](https://greasyfork.org/en/scripts/589622-afterchat-llm-chat-exporter/discussions/339157) or open a [GitHub issue](https://github.com/AfterThink/AfterChat-Script/issues).
- Pull requests are welcome! If you find this useful, please [star the repo](https://github.com/AfterThink/AfterChat-Script).
- Please follow each platform's terms of service. Exported content is intended for personal backup and learning only.

## License

Licensed under the [GNU Affero General Public License v3.0](./LICENSE).
