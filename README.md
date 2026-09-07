# AfterChat — LLM Chat Exporter

[简体中文](./README.zh-CN.md) | English

AfterChat is a free, open-source **AI chat history exporter** — a userscript that backs up your LLM conversations with one click.

Export chats from **ChatGPT, Claude, Gemini, DeepSeek, GLM, Qwen** and 26 major AI platforms to **Markdown**, preserving **reasoning / thinking** and **citation sources**, for personal archive, migration and offline reading.

After installing the [AfterChat client](https://github.com/AfterThink/AfterChat-App-Download), you can also save the current conversation to your AfterChat workspace with one click.

## 🖥️ Supported Platforms

| Platform | Site |
| --- | --- |
| ChatGPT | `chatgpt.com` |
| Claude | `claude.ai` |
| Google Gemini | `gemini.google.com` |
| Grok (xAI) | `x.com/i/grok` |
| DeepSeek | `chat.deepseek.com` |
| Microsoft Copilot | `copilot.microsoft.com` |
| M365 Copilot | `m365.cloud.microsoft` |
| Perplexity | `perplexity.ai` |
| Kimi | `kimi.com` |
| Doubao | `doubao.com` |
| ChatGLM | `chatglm.cn` |
| Z.ai | `chat.z.ai` |
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

## ✨ Features

- **Multi-platform support**: works with 26 major LLM platforms.
- **Single or batch export**: exports the current conversation or all conversations at once.
- **Incremental export**: on the list page, batch export skips conversations you've already downloaded (by update-time anchor) and only fetches new/updated ones — dramatically faster on repeat runs.
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
| **Left-click** | Default/list page | Incremental export: ZIP with only new/updated conversations (skips already-exported ones) |
| **Shift + left-click** | Default/list page | Force full export: ZIP with all conversations, ignoring the incremental anchor |
| **Right-click** | Detail page | Save the current conversation to the AfterChat workspace |

## ⚠️ Disclaimer

- This script pulls data through each platform's **front-end same-origin API**. These are unofficial interfaces and may stop working when platforms update.
- Please follow each platform's terms of service. Exported content is intended for personal backup and learning only.
- The script uses `@grant none` and sends no data to any third party; exported files are only saved locally.

## 📄 License

Licensed under the [GNU Affero General Public License v3.0](./LICENSE).
