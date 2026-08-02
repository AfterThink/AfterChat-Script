# AfterChat — LLM Chat Exporter

[简体中文](./README.zh-CN.md) | English

A browser script (Tampermonkey / Greasemonkey) that exports chat history from major LLM platforms to **Markdown files with one click**.

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

## ✨ Features

- **Multi-platform support**: works with 12 major LLM platforms.
- **Export a single conversation or all at once**:
  - On a **conversation detail page**, click the button → exports the current conversation;
  - On a **conversation list page**, click the button → fetches all conversations and downloads them as a package.
- **Content fidelity**: exports include user messages, AI replies, **reasoning / thinking**, and **citation sources**.
- **One-click save to AfterChat**: on a conversation detail page, **right-click the button** to save the current conversation directly to your AfterChat workspace.

## 📦 Installation

1. Install the **Tampermonkey** browser extension ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)).
2. Open the Tampermonkey dashboard → **Create a new script**, paste the full contents of `afterchat.user.js` into it, and save.
3. Visit any supported platform while **signed in** — the script injects a circular download button in the bottom-right corner of the page. You're all set.

## 🚀 Usage

The script shows a circular download button in the bottom-right corner of the page:

| Action | Where | Result |
| --- | --- | --- |
| **Left-click** | Conversation detail page | Export the current conversation (Markdown) |
| **Left-click** | Conversation list page | Fetch all conversations and export as a ZIP |
| **Right-click** | Conversation detail page | Save the current conversation to the AfterChat workspace |

## ⚠️ Disclaimer

- This script pulls data through each platform's **front-end same-origin API**. These are unofficial interfaces and may stop working when platforms update.
- Please follow each platform's terms of service. Exported content is intended for personal backup and learning only.
- The script uses `@grant none` and sends no data to any third party; exported files are only saved locally.
