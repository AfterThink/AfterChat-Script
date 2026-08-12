# AfterChat — LLM Chat Exporter

[简体中文](./README.zh-CN.md) | English

AfterChat is a free, open-source **AI chat history exporter** — a userscript that backs up your LLM conversations with one click.

Export chats from **ChatGPT, Gemini, DeepSeek, GLM (Z.ai / ChatGLM)** and 21+ major AI platforms to **Markdown**, preserving **reasoning / thinking** and **citation sources**, for personal archive, migration and offline reading.

After installing the [AfterChat client](https://github.com/AfterThink/AfterChat-App-Download), you can also save the current conversation to your AfterChat workspace with one click.

## 🖥️ Supported Platforms

| Platform | Site |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Google Gemini | `gemini.google.com` |
| Google AI Studio | `aistudio.google.com` |
| M365 Copilot | `m365.cloud.microsoft` |
| Microsoft Copilot | `copilot.microsoft.com` |
| Grok (xAI) | `x.com/i/grok` |
| DeepSeek | `chat.deepseek.com` |
| Qwen | `chat.qwen.ai` |
| Kimi | `kimi.com` |
| Qianwen | `qianwen.com` |
| Tencent Yuanbao | `yuanbao.tencent.com` |
| Tencent Hunyuan | `aistudio.tencent.com` / `aistudio.tencent.ai` |
| Mistral Le Chat | `chat.mistral.ai` |
| Sakana AI | `chat.sakana.ai` |
| Doubao | `doubao.com` |
| Arena AI | `arena.ai` |
| Tencent IMA | `ima.qq.com` |
| Z.ai | `chat.z.ai` |
| ChatGLM | `chatglm.cn` |
| DuckDuckGo AI Chat | `duck.ai` |
| Perplexity | `perplexity.ai` |

## ✨ Features

- **Multi-platform support**: works with 21 major LLM platforms.
- **Single or batch export**: exports the current conversation or all conversations at once.
- **Content fidelity**: exports include user messages, AI replies, **reasoning / thinking**, and **citation sources**.
- **One-click save to AfterChat**: on a conversation detail page, **right-click the button** to save the current conversation directly to your AfterChat workspace.

## 📦 Installation

After installing Violentmonkey ([Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) / [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)) or Tampermonkey ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)), click the link below and confirm in the popup:

[Install AfterChat — LLM Chat Exporter](https://update.greasyfork.org/scripts/589622/AfterChat%20%E2%80%94%20LLM%20Chat%20Exporter.user.js)

## 🚀 Usage

The script shows a circular download button in the bottom-right corner of the page:

| Action | Where | Result |
| --- | --- | --- |
| **Left-click** | Detail page | Export the current conversation (Markdown) |
| **Left-click** | Default/list page | Fetch all conversations and export as a ZIP |
| **Right-click** | Detail page | Save the current conversation to the AfterChat workspace |

## ⚠️ Disclaimer

- This script pulls data through each platform's **front-end same-origin API**. These are unofficial interfaces and may stop working when platforms update.
- Please follow each platform's terms of service. Exported content is intended for personal backup and learning only.
- The script uses `@grant none` and sends no data to any third party; exported files are only saved locally.

## 📄 License

Licensed under the [GNU Affero General Public License v3.0](./LICENSE).
