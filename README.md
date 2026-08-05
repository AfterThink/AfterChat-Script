# AfterChat — LLM Chat Exporter

[简体中文](./README.zh-CN.md) | English

A browser script (Violentmonkey / Tampermonkey / Greasemonkey) that exports chat history from major LLM platforms to **Markdown files with one click**.

After installing the [AfterChat client](https://github.com/AfterThink/AfterChat-App-Download), you can also save the current conversation to your AfterChat workspace with one click.

## 🖥️ Supported Platforms

| Platform | Site |
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
| Qianwen | `www.qianwen.com` |
| Tencent Yuanbao | `yuanbao.tencent.com` |
| Doubao | `www.doubao.com` |
| Arena AI | `arena.ai` |

## ✨ Features

- **Multi-platform support**: works with 13 major LLM platforms.
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
