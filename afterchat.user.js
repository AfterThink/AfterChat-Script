// ==UserScript==
// @name         AfterChat — LLM Chat Exporter
// @name:zh-CN   AfterChat — LLM 对话导出器
// @name:zh-TW   AfterChat — LLM 對話匯出器
// @name:ja      AfterChat — LLM チャット書き出しツール
// @name:ko      AfterChat — LLM 채팅 내보내기
// @name:es      AfterChat — Exportador de chats de LLM
// @name:fr      AfterChat — Exportateur de conversations LLM
// @name:de      AfterChat — LLM-Chat-Exporter
// @name:pt-BR   AfterChat — Exportador de Chats de LLM
// @name:ru      AfterChat — экспортёр чатов LLM
// @name:it      AfterChat — Esportatore di chat LLM
// @name:vi      AfterChat — Trình xuất khẩu hội thoại LLM
// @name:id      AfterChat — Eksportir Chat LLM
// @name:th      AfterChat — เครื่องมือส่งออกแชท LLM
// @name:tr      AfterChat — LLM Sohbet Dışa Aktarıcı
// @name:ar      AfterChat — مصدِّر محادثات LLM
// @namespace    https://github.com/AfterThink
// @version      1.11.2
// @description  Export chat history from ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat, Perplexity
// @description:zh-CN  一键导出 ChatGPT、Gemini、DeepSeek、通义千问、Kimi、豆包、Dola、Grok、Google AI Studio、Microsoft Copilot、M365 Copilot、腾讯元宝、腾讯混元、MiniMax、Mistral、Sakana AI、千问、Arena AI、腾讯 ima、Z.ai、智谱清言、DuckDuckGo AI Chat、Perplexity 的聊天记录
// @description:zh-TW  一鍵匯出 ChatGPT、Gemini、DeepSeek、通義千問、Kimi、豆包、Dola、Grok、Google AI Studio、Microsoft Copilot、M365 Copilot、騰訊元寶、騰訊混元、MiniMax、Mistral、Sakana AI、千問、Arena AI、騰訊 ima、Z.ai、智譜清言、DuckDuckGo AI Chat、Perplexity 的聊天記錄
// @description:ja  ChatGPT、Gemini、DeepSeek、Qwen、Kimi、Doubao、Dola、Grok、Google AI Studio、Microsoft Copilot、M365 Copilot、Tencent Yuanbao、Tencent Hunyuan、MiniMax、Mistral、Sakana AI、Qianwen、Arena AI、Tencent IMA、Z.ai、ChatGLM、DuckDuckGo AI Chat、Perplexity などのチャット履歴をワンクリックで書き出し
// @description:ko  ChatGPT、Gemini、DeepSeek、Qwen、Kimi、Doubao、Dola、Grok、Google AI Studio、Microsoft Copilot、M365 Copilot、Tencent Yuanbao、Tencent Hunyuan、MiniMax、Mistral、Sakana AI、Qianwen、Arena AI、Tencent IMA、Z.ai、ChatGLM、DuckDuckGo AI Chat、Perplexity  등 LLM 채팅 기록을 원클릭으로 내보내기
// @description:es  Exporta con un clic el historial de chat de ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat y Perplexity
// @description:fr  Exportez en un clic l'historique de vos conversations ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat et Perplexity
// @description:de  Chatverläufe von ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat und Perplexity mit einem Klick exportieren
// @description:pt-BR  Exporte com um clique o histórico de chats do ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat e Perplexity
// @description:ru  Экспортируйте в один клик историю чатов ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat и Perplexity
// @description:it  Esporta con un clic la cronologia delle chat di ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat e Perplexity
// @description:vi  Xuất lịch sử trò chuyện từ ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat và Perplexity chỉ với một cú nhấp chuột
// @description:id  Ekspor riwayat chat dari ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat, dan Perplexity dengan sekali klik
// @description:th  ส่งออกประวัติแชทจาก ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat และ Perplexity ด้วยคลิกเดียว
// @description:tr  ChatGPT, Gemini, DeepSeek, Qwen, Kimi, Doubao, Dola, Grok, Google AI Studio, Microsoft Copilot, M365 Copilot, Tencent Yuanbao, Tencent Hunyuan, MiniMax, Mistral, Sakana AI, Qianwen, Arena AI, Tencent IMA, Z.ai, ChatGLM, DuckDuckGo AI Chat ve Perplexity sohbet geçmişini tek tıkla dışa aktarın
// @description:ar  صدّر سجل المحادثات من ChatGPT وGemini وDeepSeek وQwen وKimi وDoubao وDola وGrok وGoogle AI Studio وMicrosoft Copilot وM365 Copilot وTencent Yuanbao وTencent Hunyuan وMiniMax وMistral وSakana AI وQianwen وArena AI وTencent IMA وZ.ai وChatGLM وDuckDuckGo AI Chat وPerplexity بنقرة واحدة
// @author       AfterThink Studio
// @license      AGPL-3.0
// @match        https://m365.cloud.microsoft/chat*
// @match        https://ima.qq.com/*
// @match        https://chat.z.ai/*
// @match        https://chatglm.cn/*
// @match        https://duck.ai/*
// @match        https://chatgpt.com/*
// @match        https://chat.mistral.ai/*
// @match        https://chat.sakana.ai/*
// @match        https://chat.deepseek.com/*
// @match        https://chat.qwen.ai/*
// @match        https://www.qianwen.com/*
// @match        https://yuanbao.tencent.com/*
// @match        https://copilot.microsoft.com/*
// @match        https://aistudio.google.com/*
// @match        https://aistudio.tencent.com/*
// @match        https://aistudio.tencent.ai/*
// @match        https://x.com/i/grok*
// @match        https://gemini.google.com/*
// @match        https://www.kimi.com/*
// @match        https://www.doubao.com/*
// @match        https://www.dola.com/*
// @match        https://arena.ai/*
// @match        https://www.perplexity.ai/*
// @match        https://agent.minimax.io/*
// @match        https://agent.minimaxi.com/*
// @icon         https://avatars.githubusercontent.com/u/266756423?s=400&u=d38fce2849e95af734f50228d5195fcdf1c7719e&v=4
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// AfterChat — LLM Chat Exporter
// Copyright (C) 2026 AfterThink Studio
// SPDX-License-Identifier: AGPL-3.0
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, version 3 of the License.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// =============================================================
//  📜 Changelog（完整版见仓库根 CHANGELOG.md）
// =============================================================
//  1.1.0 (2026-08-05)
//    - 新增 arena.ai 适配器：battle / side-by-side / direct-chat / agent
//      四种模式（含投票、引用、思维链；格式规范见 docs/ChatFormat.arena.md）
//    - 时间格式：全平台 UTC → 本地时间 + 时区偏移（如 16:00:53 +08:00）
//    - 修复 aistudio 多账号切换（/u/<n>/ 前缀）后的导出
//  1.2.0 (2026-08-06)
//    - 新增腾讯 ima 适配器：列表 get_history_list（cursor 翻页）+ 详情 get_session
//      认证走 localStorage accountInfo → x-ima-cookie；支持思考链、引用重编号
//      注意：get_session 仅返回最近 20 轮（服务端上限，无翻页）
//  1.3.0 (2026-08-06)
//    - 新增 Z.ai 适配器：列表 get chats（页码翻页）+ 详情两步走
//      （消息树 + messages/batch 批量正文）；支持思考链、引用重编号
//      消息树含全部消息 id，长对话也能完整导出
//  1.4.0 (2026-08-06)
//    - 新增智谱清言 chatglm.cn 适配器：列表 recent_list + 详情 messages
//      认证走 cookie chatglm_token；请求需 x-sign 签名（md5(ts-nonce-盐)）
//      支持思考链（原样保留）、引用重编号
//  1.5.0 (2026-08-06)
//    - 新增 duck.ai 适配器：无后端 API，直接读写浏览器 IndexedDB（savedAIChatData/saved-chats）
//      支持思考链、搜索引用（<citation src> → [N]）；无会话 URL，仅全部导出
//  1.6.0 (2026-08-08)
//    - 新增 Perplexity 适配器：列表 /rest/thread/list_recent + 详情 /rest/thread/{uuid}
//      （schematized 响应 blocks 分块）；每条 entry 一轮问答，正文 [N] 引用按
//      web_results[N-1].url 汇总到末尾 References；详情接口游标翻页
//  1.7.0 (2026-08-12)
//    - 新增腾讯混元适配器（aistudio.tencent.com + 海外站 aistudio.tencent.ai）：
//      列表 /api/new-portal/chat/conversation/list（offset 翻页）
//      + 详情 /api/new-portal/user/agent/conversation/v1/detail（lastId 游标翻页，整轮返回）
//      URL /chat/<agentId>/<conversationId>，支持思考链、搜索引用汇总 References
//      海外站 API 域自动切到 api.hy.tencent.ai（路径与国内站一致）
//  1.7.1 (2026-08-12)
//    - 修复 chatgpt.com 等站点按钮消失：应用挂载后会重建 body/html 顶层子节点，
//      把按钮容器一并清掉；新增 ensureUIAlive 自愈观察器，被移除后自动重建
//  1.8.0 (2026-08-12)
//    - 新增 Mistral Le Chat 适配器：列表 tRPC chat.last（cursor 翻页）
//      + 详情 Next.js RSC 流（提取 initialMessages，支持搜索引用）
//  1.9.0 (2026-08-12)
//    - 新增 Sakana AI 适配器：列表 /api/v2/conversations + 详情 /api/v2/conversations/<id>
//      content 里 <plan>/<think> 思考 → Thought Process，<answer> → Response
//      <source-chip title url /> 搜索引用 → [标题](链接)
//  1.10.0 (2026-08-13)
//    - Dola（豆包国际版 www.dola.com）：与豆包 API 同构，按 hunyuan 模式并入 doubao 适配器
//      一站双域（_siteHost 区分 aid/region/导出 URL/Model 兜底），README 拆分为独立平台
//    - 新增 MiniMax 适配器（agent.minimax.io + 国内版 agent.minimaxi.com，API 同构）：
//      列表 /minimax-cloud/api/v1/sidebar/session/tree + 详情 /session/{id} + /session/{id}/message
//      认证 token 头+query（localStorage _token）；x-signature = md5(x-timestamp + 固定盐 + body)
//      （盐与算法从页面 webpack 逆向，cURL 交叉验证）；yy 头实测不校验；msg_type 2 中间消息跳过
//      国内版仅前端代码确认同构，消息接口未实测（无账号）
//  1.10.1 (2026-08-14)
//    - 修复 AI Studio 下载按钮空白：页面 CSP require-trusted-types-for 拦截 innerHTML 写入，
//      新增 setInnerHTML 走 trustedTypes policy，无 Trusted Types 的平台自动回退普通赋值
//  1.11.0 (2026-08-14)
//    - 全部导出改为增量：记录上次导出的时间锚点（localStorage 仅存时间戳，无对话内容），
//      下次跳过 updatedAt ≤ 锚点的会话，只导新增/更新的；全部成功才推进锚点（有失败保留旧锚点）
//    - Shift+左键点击按钮 = 强制全量导出（先把锚点重置到最早，走普通流程；失败时锚点保持为空下次仍全量重试）
//    - ZIP 文件名改时间前缀 YYYYMMDD-HHMMSS-标题.md（本地时间），跨平台/跨批次混排按时间排序；
//      ZIP 内顺序改为降序（最新在前）；无时间会话回退序号前缀
//    - AI Studio 列表接口补提取时间戳（item[4][4][0]）；getConversationSortTime 补 kimi/ima/duck 时间字段
//      锚点缺失或时间拿不到的会话宁重复不漏，始终导出；全跳过时提示“已是最新”
// =============================================================

(function () {
  'use strict';

  // =============================================================
  //  🎛️  CONFIG — 全局配置
  //  =============================================================
  //  LLM 注意: 这里可以调参数（延迟、限条数），但不要删除字段或改变结构。
  //  =============================================================

  const CONFIG = {
    EXPORT_PREFIX: 'chat-export',
    AFTERCHAT_WORKSPACE: 'downloadchats', // AfterChat workspace basename; localStorage 可覆盖
    API_PAGE_DELAY: 300,   // 列表分页请求间隔（毫秒）
    API_DELAY: 1200,       // 单条对话导出间隔（毫秒）
    DEBUG_LIMIT: 0,        // 调试限条数，0 或 null 表示不限
    INCREMENTAL: true,     // 增量导出：跳过 updatedAt ≤ 上次锚点的会话（localStorage 记录，几十字节元数据）
  };

  // ---- 通用时间格式化：本地时间 + 数值时区偏移（如 2026-08-05 16:00:53 +08:00） ----
  function formatLocalTime(date) {
    if (!date || isNaN(date.getTime())) return 'unknown';
    const p2 = (n) => String(n).padStart(2, '0');
    const offMin = -date.getTimezoneOffset();
    const offSign = offMin >= 0 ? '+' : '-';
    const offAbs = Math.abs(offMin);
    const offStr = offSign + p2(Math.floor(offAbs / 60)) + ':' + p2(offAbs % 60);
    return date.getFullYear() + '-' + p2(date.getMonth() + 1) + '-' + p2(date.getDate())
      + ' ' + p2(date.getHours()) + ':' + p2(date.getMinutes()) + ':' + p2(date.getSeconds())
      + ' ' + offStr;
  }

  // =============================================================
  //  🧩  PLATFORM_ADAPTERS — 平台适配器
  //  =============================================================
  //  LLM 注意: 新增供应商 = 在这里 push 一个适配器对象。
  //  接口定义（PlatformAdapter @typedef）不要改，否则所有适配器都要修。
  //  每个适配器必须实现全部 4 个方法。
  //  =============================================================

  /**
   * @typedef {Object} PlatformAdapter
   * @property {string}   id                        - 平台唯一标识
   * @property {string}   name                      - 平台显示名称
   * @property {()=>boolean} detect                 - 检测当前是否为此平台
   * @property {()=>string|null} getCurrentConversationId - 当前对话 ID（列表页返回 null）
   * @property {(onProgress?:(n:number)=>void)=>Promise<Array>} getAllConversations
   * @property {(id:string)=>Promise<Object>} getConversationDetails
   * @property {((data:Object, title:string)=>string)=} toMarkdown - [可选] 将对话数据转为 Markdown 字符串
   */

  /** @type {PlatformAdapter[]} */
  const PLATFORM_ADAPTERS = [

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[m365]  M365 Copilot
    // ═══════════════════════════════════════════════════════
    // LLM 注意: 完整实现。API 端点、请求头、数据清洗全封装在这里。
    {
      id: 'm365',
      name: 'M365 Copilot',
      detect: () => window.location.hostname === 'm365.cloud.microsoft',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chat\/conversation\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      async getAllConversations(onProgress) {
        let allChats = [];
        let syncState = '';
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (allChats.length < limit) {
          const result = await this._fetchPage(syncState, allChats);
          if (!result || !result.chats) break;
          if (result.chats.length <= allChats.length) break;
          allChats = result.chats;
          syncState = result.syncState || '';
          if (onProgress) onProgress(allChats.length);
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats
          .map((c) => ({
            id: c.conversationId || '',
            title: (c.chatName || '').trim(),
            createTimeUtc: c.createTimeUtc,
            updateTimeUtc: c.updateTimeUtc,
            tone: c.tone,
            path: c.path,
          }))
          .filter((c) => c.id);
      },

      async getConversationDetails(id) {
        const url = `/chat/conversation/${id}?auth=2`;
        const resp = await fetch(url, {
          headers: {
            'accept': 'application/json',
            'x-route-id': 'chat-history',
            'x-slim-rehydration': 'true',
            'x-host-context': JSON.stringify({
              clientPlatform: 'web',
              hostName: 'officeweb',
              appName: 'SSR',
              appMode: 'default',
            }),
          },
        });
        if (!resp.ok) throw new Error(`API ${resp.status}: ${resp.statusText}`);
        return resp.json();
      },

      /** 将 M365 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const rcr = data?.store?.rawConversationResponse;
        if (!rcr) throw new Error('未找到 rawConversationResponse');

        const tone = rcr.tone || 'unknown';
        const createTimeMs = rcr.createTimeUtc;
        const timeStr = createTimeMs
          ? formatLocalTime(new Date(createTimeMs))
          : 'unknown';
        const convUrl = convId
          ? `https://m365.cloud.microsoft/chat/conversation/${convId}?auth=2`
          : 'https://m365.cloud.microsoft';

        const lines = [];
        lines.push(`# ${title}`);
        lines.push('');
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + tone + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        const messages = rcr.messages || [];

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        // ---- 第一遍：收集引用，按 URL 去重全局编号 ----
        const urlToNum = new Map();  // URL → 编号
        const refKeyToNum = new Map(); // refKey → 编号
        let nextNum = 1;

        // 每条最终回复消息的引用映射
        const msgCitationMap = new Map(); // msgIndex → Map<refKey, globalNum>

        for (let i = 0; i < messages.length; i++) {
          const msg = messages[i];
          if (!this._isFinalResponse(msg)) continue;
          const text = this._getResponseText(msg);
          if (!text) continue;

          const refs = msg.references || {};
          const foundKeys = [...text.matchAll(/【([^】]+)】/g)].map(m => m[1]);
          const uniqueKeys = [...new Set(foundKeys)];
          const localMap = new Map();

          for (const key of uniqueKeys) {
            if (!refKeyToNum.has(key)) {
              const refInfo = refs[key];
              if (refInfo && refInfo.targetLink) {
                const link = refInfo.targetLink;
                if (urlToNum.has(link)) {
                  refKeyToNum.set(key, urlToNum.get(link));
                } else {
                  urlToNum.set(link, nextNum);
                  refKeyToNum.set(key, nextNum);
                  nextNum++;
                }
              } else {
                refKeyToNum.set(key, null);
              }
            }
            const gn = refKeyToNum.get(key);
            if (gn !== null && gn !== undefined) {
              localMap.set(key, gn);
            }
          }
          msgCitationMap.set(i, localMap);
        }

        // ---- 第二遍：生成正文 ----
        for (let i = 0; i < messages.length; i++) {
          const msg = messages[i];
          const author = msg.author;

          if (author === 'user') {
            const text = (msg.text || '').trim();
            if (!text) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');

          } else if (author === 'bot') {
            if (this._isThinkingMsg(msg)) continue;
            const responseText = this._getResponseText(msg);
            if (!responseText) continue;

            // 收集同 turn 的思考过程
            const turn = msg.turnCount;
            const thoughts = [];
            for (let j = i - 1; j >= 0 && messages[j].turnCount === turn; j--) {
              if (this._isThinkingMsg(messages[j])) {
                const t = (messages[j].text || '').trim();
                if (t) thoughts.unshift(t);
              }
            }

            // 替换引用
            const citeMap = msgCitationMap.get(i) || new Map();
            let cleaned = responseText.replace(/【([^】]+)】/g, (_, key) => {
              const n = citeMap.get(key);
              return n !== undefined && n !== null ? `[${n}]` : '';
            });

            lines.push('### 🤖 Assistant');
            lines.push('');

            if (thoughts.length > 0) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              for (const t of thoughts) {
                lines.push(stripHashes(t));
                lines.push('');
              }
              lines.push('#### 💡 Response');
              lines.push('');
            }

            lines.push(stripHashes(cleaned));
            lines.push('');
          }
        }

        // ---- References ----
        if (urlToNum.size > 0) {
          const sorted = [...urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [link, num] of sorted) {
            lines.push(`- [${num}] ${link}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },

      // ---- 内部辅助方法 ----
      _isThinkingMsg(msg) {
        return msg.messageType === 'Progress'
          || msg.addToChainOfThought === true
          || msg.contentType === 'SearchResults';
      },

      _isFinalResponse(msg) {
        if (msg.author !== 'bot') return false;
        if (this._isThinkingMsg(msg)) return false;
        return this._getResponseText(msg) !== null;
      },

      _getResponseText(msg) {
        try {
          return msg.adaptiveCards[0].body[0].text;
        } catch (e) {
          return null;
        }
      },

      // M365 专用：列表分页请求（XHR，因为 fetch 在这个接口上有坑）
      _fetchPage(syncState, existingChats) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/chat', true);
          xhr.setRequestHeader('accept', 'application/json');
          xhr.setRequestHeader('content-type', 'application/json');
          xhr.setRequestHeader('x-route-id', 'chat');
          xhr.setRequestHeader('x-host-context', JSON.stringify({
            clientPlatform: 'web', hostName: 'officeweb', appName: 'SSR', appMode: 'default',
          }));
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve(JSON.parse(xhr.responseText).store?.conversationPageHistoryList ?? null);
              } catch (e) {
                reject(new Error('解析列表API响应失败: ' + e.message));
              }
            } else {
              reject(new Error(`列表API ${xhr.status}: ${xhr.statusText}`));
            }
          };
          xhr.onerror = () => reject(new Error('列表API 网络错误'));
          xhr.send(JSON.stringify({
            action: 'GetConversationPageHistoryList',
            syncState: syncState || '',
            enableLastMessage: true,
            conversationHistoryFilter: null,
            state: {
              conversationPageHistoryList: {
                chats: existingChats || [],
                syncState: syncState || '',
              },
            },
          }));
        });
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[ima]  腾讯 ima 知识库
    // ═══════════════════════════════════════════════════════
    // 列表 /cgi-bin/history/get_history_list（cursor 翻页）
    // 详情 /cgi-bin/session_logic/get_session（仅返回最近 msgs_limit≤20 轮）
    // 鉴权：localStorage['ima-universal-local-storage-accountInfo'] → x-ima-cookie
    {
      id: 'ima',
      name: '腾讯 ima 知识库',
      detect: () => window.location.hostname === 'ima.qq.com',

      getCurrentConversationId: () => {
        const m = window.location.pathname.match(/^\/chat\/([^\/?]+)/)
          || window.location.search.match(/[?&]sessionId=([^&]+)/);
        return m ? m[1] : null;
      },

      /** 从 localStorage 读取登录态 */
      _account() {
        try {
          return JSON.parse(localStorage.getItem('ima-universal-local-storage-accountInfo')) || {};
        } catch (e) {
          return {};
        }
      },

      /** 组装 x-ima-cookie 头（token 字段与服务端校验一致） */
      _imaCookie() {
        const a = this._account();
        return 'PLATFORM=H5; CLIENT-TYPE=256053; WEB-VERSION=999.999.999; '
          + 'IMA-GUID=' + (a.guid || '') + '; '
          + 'IMA-Q36=' + String(a.guid || '').replace(/^guid-/, '') + '; '
          + 'IMA-IUA=' + navigator.userAgent + '; '
          + 'IMA-UID=' + (a.userId || '') + '; '
          + 'IMA-TOKEN=' + (a.token || '') + '; '
          + 'IMA-REFRESH-TOKEN=' + (a.refreshToken || '') + '; '
          + 'UID-TYPE=' + (a.idType ?? '') + '; '
          + 'TOKEN-TYPE=' + (a.tokenType ?? '');
      },

      _headers() {
        return {
          'content-type': 'application/json',
          'from_browser_ima': '1',
          'extension_version': '999.999.999',
          'x-ima-cookie': this._imaCookie(),
        };
      },

      async getAllConversations(onProgress) {
        const all = [];
        let cursor = '';
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (all.length < limit) {
          const r = await fetch('/cgi-bin/history/get_history_list', {
            method: 'POST',
            headers: this._headers(),
            body: JSON.stringify({
              limit: 20,
              filter: 3,
              cursor: cursor || '',
              conditions: [{ type: 1, relate_type_condition: { not: false, relate_types: [] } }],
            }),
          });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          if (body.code !== 0) throw new Error(`列表API code ${body.code}: ${body.msg || ''}`);

          const items = (body.histories || [])
            .map((h) => h.ai_session)
            .filter((s) => s && s.id)
            .map((s) => ({
              id: s.id,
              title: (s.title || '').trim(),
              update_ts: s.update_ts,
            }));
          if (!items.length) break;

          all.push(...items);
          if (onProgress) onProgress(all.length);

          if (body.is_end) break;
          cursor = body.next_cursor || '';
          if (!cursor) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit);
      },

      async getConversationDetails(id) {
        const r = await fetch('/cgi-bin/session_logic/get_session', {
          method: 'POST',
          headers: this._headers(),
          body: JSON.stringify({ session_id: id, msgs_limit: 20 }),
        });
        if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
        const body = await r.json();
        if (body.code !== 0) throw new Error(`详情API code ${body.code}: ${body.msg || ''}`);

        const session = body.session || {};
        // 标题兜底：name 为空时取第一条提问（getChatTitle 读 data.session.title）
        session.title = (session.name || '').trim()
          || this._firstQuestion(session)
          || '';
        return body;
      },

      _firstQuestion(session) {
        for (const m of session.msgs || []) {
          const q = m?.qa_msg?.question?.text;
          if (q && q.trim()) return q.trim();
        }
        return '';
      },

      /** 将 ima 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const session = data?.session || {};
        const msgs = this._collectMessages(data);

        const timeStr = session.update_ts
          ? formatLocalTime(new Date(Number(session.update_ts)))
          : 'unknown';
        const convUrl = convId ? `https://ima.qq.com/chat/${convId}` : 'https://ima.qq.com';

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + this._modelName(msgs) + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        // ---- 第一遍：收集每条消息的引用编号 [N](@ref) → 全局编号（按 URL 去重） ----
        const msgCiteMap = new Map();  // msgIndex → Map<localNum, globalNum>
        const urlToNum = new Map();    // url → globalNum
        let nextNum = 1;

        for (let i = 0; i < msgs.length; i++) {
          const fa = msgs[i]?.qa_msg?.format_answer || {};
          const text = this._assistantText(fa);
          if (!text) continue;
          const medias = this._parseMedias(fa);
          const nums = [...new Set([...text.matchAll(/\[(\d+)\]\(@ref\)/g)].map(m => Number(m[1])))];
          const localMap = new Map();
          for (const n of nums) {
            const url = medias[n - 1]?.jumpUrl || '';
            if (!url) continue;
            if (!urlToNum.has(url)) urlToNum.set(url, nextNum++);
            localMap.set(n, urlToNum.get(url));
          }
          msgCiteMap.set(i, localMap);
        }

        // ---- 第二遍：生成正文 ----
        for (let i = 0; i < msgs.length; i++) {
          const q = msgs[i]?.qa_msg || {};
          const question = (q.question?.text || q.question?.processed_text || '').trim();
          if (!question) continue;

          lines.push('### 🧑\u200d💻 User');
          lines.push('');
          lines.push(stripHashes(question));
          lines.push('');

          const fa = q.format_answer || {};
          const responseText = this._assistantText(fa);
          if (!responseText) continue;

          const citeMap = msgCiteMap.get(i) || new Map();
          const cleaned = responseText.replace(/\[(\d+)\]\(@ref\)/g, (_, n) => {
            const gn = citeMap.get(Number(n));
            return gn !== undefined ? `[${gn}]` : '';
          });

          lines.push('### 🤖 Assistant');
          lines.push('');

          const thinking = this._thinkingText(fa);
          if (thinking) {
            lines.push('#### 🤔 Thought Process');
            lines.push('');
            lines.push(stripHashes(thinking));
            lines.push('');
            lines.push('#### 💡 Response');
            lines.push('');
          }

          lines.push(stripHashes(cleaned));
          lines.push('');
        }

        // ---- References ----
        if (urlToNum.size > 0) {
          const sorted = [...urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [url, num] of sorted) {
            lines.push(`- [${num}] ${url}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },

      // ---- 内部辅助方法 ----
      _collectMessages(data) {
        const out = [];
        const pushSession = (s) => { if (s && Array.isArray(s.msgs)) out.push(...s.msgs); };
        pushSession(data?.session);
        for (const cs of data?.child_sessions || []) pushSession(cs);
        // 按消息时间正序
        return out.sort((a, b) =>
          (Number(a?.qa_msg?.create_ts) || 0) - (Number(b?.qa_msg?.create_ts) || 0)
        );
      },

      _modelName(msgs) {
        for (const m of msgs) {
          try {
            const qaStart = JSON.parse(m?.qa_msg?.format_answer?.qa_start || '{}');
            if (qaStart?.title) return qaStart.title;
          } catch (e) { /* 忽略 */ }
        }
        return 'ima';
      },

      _assistantText(fa) {
        try {
          const parsed = JSON.parse(fa?.answer || '');
          if (parsed && typeof parsed.Text === 'string') return parsed.Text;
        } catch (e) { /* 忽略 */ }
        return '';
      },

      _thinkingText(fa) {
        try {
          const parsed = JSON.parse(fa?.thinking || '');
          if (parsed && typeof parsed.Message === 'string') return parsed.Message.trim();
        } catch (e) { /* 忽略 */ }
        return '';
      },

      _parseMedias(fa) {
        try {
          const sm = typeof fa?.search_medias === 'string'
            ? JSON.parse(fa.search_medias)
            : (fa?.search_medias || {});
          return Array.isArray(sm?.medias) ? sm.medias : [];
        } catch (e) {
          return [];
        }
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[zai]  Z.ai (GLM)
    // ═══════════════════════════════════════════════════════
    // 列表 GET /api/v1/chats/?page=N&type=default（纯数组，翻到空页结束）
    // 详情 GET /api/v1/chats/<id> → 消息树（含全部消息 id，无分页）
    // 正文 POST /api/v1/chats/<id>/messages/batch {ids} → 消息内容 map（可大批量）
    // 鉴权：localStorage['token'] → authorization: Bearer <jwt>，x-region: overseas
    {
      id: 'zai',
      name: 'Z.ai',
      detect: () => window.location.hostname === 'chat.z.ai',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/c\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      /** 从 localStorage 读取 JWT */
      _token() {
        try {
          return localStorage.getItem('token') || '';
        } catch (e) {
          return '';
        }
      },

      _headers() {
        return {
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-region': 'overseas',
          ...(this._token() ? { 'authorization': 'Bearer ' + this._token() } : {}),
        };
      },

      async getAllConversations(onProgress) {
        const all = [];
        let page = 1;
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (all.length < limit) {
          const r = await fetch(`/api/v1/chats/?page=${page}&type=default`, { headers: this._headers() });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const items = await r.json();
          if (!Array.isArray(items) || !items.length) break;  // 空页 = 没有更多

          const mapped = items
            .map((c) => ({
              id: c.id || '',
              title: (c.title || '').trim(),
              updated_at: c.updated_at,
              created_at: c.created_at,
            }))
            .filter((c) => c.id);
          if (!mapped.length) break;

          all.push(...mapped);
          if (onProgress) onProgress(all.length);

          page++;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit);
      },

      async getConversationDetails(id) {
        const r = await fetch(`/api/v1/chats/${id}`, { headers: this._headers() });
        if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
        const body = await r.json();

        // 收集全部消息 id（活动链 + 根节点兜底，与前端一致）
        const tree = body?.chat?.history?.messages || {};
        const ids = this._collectMessageIds(tree, body?.chat?.history?.currentId);
        const contents = await this._fetchMessageContents(id, ids);

        // 消息正文挂到返回体（toMarkdown 读 data.messages）
        body.messages = contents;
        return body;
      },

      /** 消息树 → 全部 id：沿 currentId 的父链回退 + 无父节点的根 */
      _collectMessageIds(tree, currentId) {
        const set = new Set();
        let cur = currentId;
        while (cur && !set.has(cur)) {
          set.add(cur);
          cur = tree[cur]?.parentId || null;
        }
        for (const m of Object.values(tree)) {
          if (m && !m.parentId) set.add(m.id);
        }
        return [...set];
      },

      /** 批量拉消息正文（每批 100 个 id，防止超长会话单次过大） */
      async _fetchMessageContents(id, ids) {
        const out = {};
        const CHUNK = 100;
        for (let i = 0; i < ids.length; i += CHUNK) {
          const slice = ids.slice(i, i + CHUNK);
          const r = await fetch(`/api/v1/chats/${id}/messages/batch`, {
            method: 'POST',
            headers: this._headers(),
            body: JSON.stringify({ ids: slice }),
          });
          if (!r.ok) throw new Error(`消息API ${r.status}: ${r.statusText}`);
          const d = await r.json();
          Object.assign(out, d.data || {});
          if (i + CHUNK < ids.length) await sleep(CONFIG.API_PAGE_DELAY);
        }
        return out;
      },

      /** 活动链（currentId → 根 反转 = 时间正序）；异常时退回按时间排序 */
      _activeChain(tree, currentId) {
        const chain = [];
        const seen = new Set();
        let cur = currentId;
        while (cur && !seen.has(cur)) {
          seen.add(cur);
          chain.push(cur);
          cur = tree[cur]?.parentId || null;
        }
        chain.reverse();
        if (!chain.length) {
          return Object.values(tree)
            .filter((m) => m && m.id)
            .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0))
            .map((m) => m.id);
        }
        return chain;
      },

      /** 将 Z.ai 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const chat = data?.chat || {};
        const tree = chat.history?.messages || {};
        const contents = data?.messages || {};
        const chain = this._activeChain(tree, chat.history?.currentId);
        if (!chain.length) throw new Error('未找到消息数据');

        const models = chat.models || data?.meta?.models || [];
        const model = (Array.isArray(models) && models[0]) || 'glm';
        const timeStr = data.updated_at
          ? formatLocalTime(new Date(Number(data.updated_at) * 1000))
          : 'unknown';
        const convUrl = convId ? `https://chat.z.ai/c/${convId}` : 'https://chat.z.ai';

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + model + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        // ---- 第一遍：引用编号【turnNsearchM】→ 全局编号（按 URL 去重） ----
        const msgCiteMap = new Map();  // msgId → Map<refId, globalNum>
        const urlToNum = new Map();    // url → globalNum
        let nextNum = 1;

        for (const mid of chain) {
          const blocks = contents[mid]?.content_blocks || [];
          const text = this._textBlock(blocks);
          if (!text) continue;
          const refMap = this._toolRefs(blocks);  // refId → {title, url}
          const keys = [...new Set([...text.matchAll(/【(turn\d+search\d+)】/g)].map(x => x[1]))];
          const localMap = new Map();
          for (const key of keys) {
            const ref = refMap.get(key);
            if (!ref || !ref.url) continue;
            if (!urlToNum.has(ref.url)) urlToNum.set(ref.url, nextNum++);
            localMap.set(key, urlToNum.get(ref.url));
          }
          msgCiteMap.set(mid, localMap);
        }

        // ---- 第二遍：生成正文 ----
        for (const mid of chain) {
          const m = contents[mid] || {};
          const role = m.role || tree[mid]?.role;
          const blocks = m.content_blocks || [];

          if (role === 'user') {
            const text = (m.content || '').trim();
            if (!text) continue;
            lines.push('### 🧑\u200d💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');

          } else if (role === 'assistant') {
            const responseText = this._textBlock(blocks);
            if (!responseText) continue;

            const citeMap = msgCiteMap.get(mid) || new Map();
            const cleaned = responseText.replace(/【(turn\d+search\d+)】/g, (_, key) => {
              const gn = citeMap.get(key);
              return gn !== undefined ? `[${gn}]` : '';
            });

            lines.push('### 🤖 Assistant');
            lines.push('');

            const thinking = this._reasoningText(blocks);
            if (thinking) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thinking));
              lines.push('');
              lines.push('#### 💡 Response');
              lines.push('');
            }

            lines.push(stripHashes(cleaned));
            lines.push('');
          }
          // system / tool 消息不导出
        }

        // ---- References ----
        if (urlToNum.size > 0) {
          const sorted = [...urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [url, num] of sorted) {
            lines.push(`- [${num}] ${url}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },

      // ---- 内部辅助方法 ----
      _textBlock(blocks) {
        const b = (blocks || []).find((x) => x.type === 'text');
        const text = (b?.content || '').trim();
        return text;
      },

      _reasoningText(blocks) {
        return (blocks || [])
          .filter((x) => x.type === 'reasoning')
          .map((x) => (x.content || '').trim())
          .filter(Boolean)
          .join('\n\n');
      },

      /** tool_calls results → refId → {title, url} */
      _toolRefs(blocks) {
        const map = new Map();
        for (const b of blocks || []) {
          if (b.type !== 'tool_calls') continue;
          for (const res of b.results || []) {
            // results[].content 里可能拼接了多个 [ref_id=...] 块，需要 matchAll
            const re = /\[ref_id=(turn\d+search\d+)†([^†]*)†([^\]]+)\]/g;
            let mm;
            while ((mm = re.exec(res.content || '')) !== null) {
              map.set(mm[1], { title: mm[2].trim(), url: mm[3].trim() });
            }
          }
        }
        return map;
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[chatglm]  ChatGLM (智谱清言)
    // ═══════════════════════════════════════════════════════
    // 列表 POST /chatglm/mainchat-api/conversation/recent_list {page,page_size}
    // 详情 GET /chatglm/mainchat-api/conversation/messages?assistant_id&conversation_id
    // 鉴权：cookie chatglm_token → authorization: Bearer；另需 x-sign 签名
    //   x-sign = md5(ts-nonce-8a1317a7468aa3ad86e997d08f3f31cb)
    //   ts = Date.now() 字符串倒数第 2 位替换为 (数字和-该位)%10；nonce = uuid4 去横线
    {
      id: 'chatglm',
      name: 'ChatGLM',
      detect: () => window.location.hostname === 'chatglm.cn',

      getCurrentConversationId: () => {
        const m = window.location.search.match(/[?&]cid=([^&]+)/);
        return m ? m[1] : null;
      },

      /** cookie chatglm_token → JWT */
      _token() {
        try {
          const m = document.cookie.match(/(?:^|;\s*)chatglm_token=([^;]+)/);
          return m ? m[1] : '';
        } catch (e) {
          return '';
        }
      },

      /** 设备 id：32 位 hex（服务端仅校验格式），首次生成后持久化 */
      _deviceId() {
        const gen = () => {
          let id = '';
          const chars = '0123456789abcdef';
          for (let i = 0; i < 32; i++) id += chars[Math.floor(Math.random() * 16)];
          return id;
        };
        try {
          let id = localStorage.getItem('afterchat-chatglm-device-id');
          if (!id || !/^[0-9a-f]{32}$/i.test(id)) {
            id = gen();
            localStorage.setItem('afterchat-chatglm-device-id', id);
          }
          return id;
        } catch (e) {
          return gen();
        }
      },

      /** 生成签名所需的 {ts, nonce, sign}（与前端一致） */
      _sign() {
        const A = String(Date.now());
        const e = A.length;
        const digits = A.split('').map((c) => Number(c));
        const t = digits.reduce((s, d) => s + d, 0) - digits[e - 2];
        const ts = A.substring(0, e - 2) + (t % 10) + A.substring(e - 1, e);
        let nonce = '';
        try {
          nonce = (crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
            .replace(/-/g, '');
        } catch (err) {
          const chars = '0123456789abcdef';
          for (let i = 0; i < 32; i++) nonce += chars[Math.floor(Math.random() * 16)];
        }
        const sign = this._md5(`${ts}-${nonce}-8a1317a7468aa3ad86e997d08f3f31cb`);
        return { ts, nonce, sign };
      },

      _headers() {
        const s = this._sign();
        return {
          'accept': 'application/json, text/plain, */*',
          'authorization': 'Bearer ' + this._token(),
          'app-name': 'chatglm',
          'x-app-platform': 'pc',
          'x-app-version': '0.0.1',
          'x-app-fr': 'default',
          'x-lang': 'zh',
          'x-device-id': this._deviceId(),
          'x-request-id': s.nonce,
          'x-timestamp': s.ts,
          'x-nonce': s.nonce,
          'x-sign': s.sign,
          'x-exp-groups': this._expGroups(),
        };
      },

      _expGroups() {
        try {
          return localStorage.getItem('trialGroup') || '';
        } catch (e) {
          return '';
        }
      },

      async getAllConversations(onProgress) {
        const all = [];
        let page = 1;
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (all.length < limit) {
          const r = await fetch('/chatglm/mainchat-api/conversation/recent_list', {
            method: 'POST',
            headers: { ...this._headers(), 'content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ page, page_size: 20 }),
          });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          if (body.status !== 0) throw new Error(`列表API status ${body.status}: ${body.message || ''}`);

          const list = body.result?.conversation_list || [];
          if (!list.length) break;
          for (const c of list) {
            all.push({
              id: c.conversation_id || '',
              title: (c.title || '').trim(),
              assistant_id: c.assistant_id,
              update_time: c.update_time,
              history_total: c.history_total,
            });
          }
          if (onProgress) onProgress(all.length);

          if (!body.result?.has_more) break;
          page++;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.filter((c) => c.id).slice(0, limit);
      },

      /** 从列表查找会话元信息（assistant_id / title / update_time） */
      async _findConversation(id) {
        let page = 1;
        while (page <= 50) {
          const r = await fetch('/chatglm/mainchat-api/conversation/recent_list', {
            method: 'POST',
            headers: { ...this._headers(), 'content-type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ page, page_size: 50 }),
          });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          const list = body.result?.conversation_list || [];
          const hit = list.find((c) => c.conversation_id === id);
          if (hit) {
            return {
              assistant_id: hit.assistant_id,
              title: (hit.title || '').trim(),
              update_time: hit.update_time,
            };
          }
          if (!body.result?.has_more || !list.length) break;
          page++;
          await sleep(CONFIG.API_PAGE_DELAY);
        }
        throw new Error(`未在列表中找到会话 ${id}`);
      },

      async getConversationDetails(id) {
        const meta = await this._findConversation(id);
        const r = await fetch(
          `/chatglm/mainchat-api/conversation/messages?assistant_id=${encodeURIComponent(meta.assistant_id)}&conversation_id=${encodeURIComponent(id)}`,
          { headers: this._headers() }
        );
        if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
        const body = await r.json();
        if (body.status !== 0) throw new Error(`详情API status ${body.status}: ${body.message || ''}`);

        return {
          conversation_id: id,
          assistant_id: meta.assistant_id,
          title: meta.title,
          update_time: meta.update_time,
          messages: body.result?.messages || [],
        };
      },

      /** 将 ChatGLM 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const messages = data?.messages || [];
        if (!messages.length) throw new Error('未找到消息数据');

        const convUrl = convId ? `https://chatglm.cn/main/alltoolsdetail?cid=${convId}` : 'https://chatglm.cn';
        const timeStr = data.update_time
          ? formatLocalTime(new Date(Number(data.update_time) * 1000))
          : 'unknown';

        // 模型：取最后一条助手消息的 text block 模型
        let model = 'glm';
        outer: for (let i = messages.length - 1; i >= 0; i--) {
          const parts = messages[i]?.output?.parts || [];
          for (const p of parts) {
            for (const c of p.content || []) {
              if (c.type === 'text' && c.text && p.model) {
                model = p.model;
                break outer;
              }
            }
          }
        }

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + model + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        // ---- 第一遍：收集引用编号【turnNsearchM】→ 全局编号（按 URL 去重） ----
        const msgCiteMap = new Map();  // 消息下标 → Map<refKey, globalNum>
        const urlToNum = new Map();    // url → globalNum
        let nextNum = 1;

        for (let i = 0; i < messages.length; i++) {
          const ap = this._assistantParts(messages[i]);
          const responseText = ap.texts.join('\n');
          if (!responseText) continue;
          const keys = [...new Set([...responseText.matchAll(/【(turn\d+search\d+)】/g)].map(x => x[1]))];
          const localMap = new Map();
          for (const key of keys) {
            const ref = ap.refMap.get(key);
            if (!ref || !ref.url) continue;
            if (!urlToNum.has(ref.url)) urlToNum.set(ref.url, nextNum++);
            localMap.set(key, urlToNum.get(ref.url));
          }
          msgCiteMap.set(i, localMap);
        }

        // ---- 第二遍：生成正文 ----
        for (let i = 0; i < messages.length; i++) {
          const m = messages[i];
          const inputText = (m.input?.content || [])
            .map((c) => c.text || '')
            .join('\n')
            .trim();
          if (!inputText) continue;

          lines.push('### 🧑\u200d💻 User');
          lines.push('');
          lines.push(stripHashes(inputText));
          lines.push('');

          const ap = this._assistantParts(m);
          const responseText = ap.texts.join('\n');
          if (!responseText) continue;

          const citeMap = msgCiteMap.get(i) || new Map();
          const cleaned = responseText.replace(/【(turn\d+search\d+)】/g, (_, key) => {
            const gn = citeMap.get(key);
            return gn !== undefined ? `[${gn}]` : '';
          });
          // 思考文本里的引用标记也一并替换（保持与正文一致的编号）
          const citeReplacer = (_, key) => {
            const gn = citeMap.get(key);
            return gn !== undefined ? `[${gn}]` : '';
          };
          const cleanThoughts = ap.thoughts.map((t) => t.replace(/【(turn\d+search\d+)】/g, citeReplacer));

          lines.push('### 🤖 Assistant');
          lines.push('');

          if (cleanThoughts.length) {
            lines.push('#### 🤔 Thought Process');
            lines.push('');
            lines.push(stripHashes(cleanThoughts.join('\n\n')));
            lines.push('');
            lines.push('#### 💡 Response');
            lines.push('');
          }

          lines.push(stripHashes(cleaned));
          lines.push('');
        }

        // ---- References ----
        if (urlToNum.size > 0) {
          const sorted = [...urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [url, num] of sorted) {
            lines.push(`- [${num}] ${url}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },

      // ---- 内部辅助方法 ----
      /** 解析一条消息的助手输出：thoughts / texts / refMap / 模型 */
      _assistantParts(m) {
        const parts = m?.output?.parts || [];
        const thoughts = [];
        const texts = [];
        const refMap = new Map();
        let model = '';
        for (const p of parts) {
          for (const c of p.content || []) {
            if (c.type === 'think' && c.think) {
              thoughts.push(c.think.trim());
            } else if (c.type === 'text' && c.text) {
              texts.push(c.text.trim());
              if (p.model) model = p.model;
            } else if (c.type === 'tool_result') {
              // 搜索结果在 part 级 meta_data.tool_result_extra.search_results，match_key 对应正文【turnNsearchM】
              for (const sr of p.meta_data?.tool_result_extra?.search_results || []) {
                if (sr.match_key && sr.url) {
                  refMap.set(sr.match_key, { title: sr.title || '', url: sr.url });
                }
              }
            }
          }
        }
        // 思考链原样保留（ChatGLM 模型喜欢先在心里答一遍，不去重）
        return { thoughts, texts, refMap, model, parts };
      },

      // ---- MD5（RFC1321 风格公开实现，Public Domain）----
      _md5(s) {
        function md5cycle(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586); c = ff(c, d, a, b, k[2], 17, 606105819); b = ff(b, c, d, a, k[3], 22, -1044525330);
          a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12, 1200080426); c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983);
          a = ff(a, b, c, d, k[8], 7, 1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417); c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162);
          a = ff(a, b, c, d, k[12], 7, 1804603682); d = ff(d, a, b, c, k[13], 12, -40341101); c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22, 1236535329);
          a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632); c = gg(c, d, a, b, k[11], 14, 643717713); b = gg(b, c, d, a, k[0], 20, -373897302);
          a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9, 38016083); c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848);
          a = gg(a, b, c, d, k[9], 5, 568446438); d = gg(d, a, b, c, k[14], 9, -1019803690); c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20, 1163531501);
          a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784); c = gg(c, d, a, b, k[7], 14, 1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734);
          a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463); c = hh(c, d, a, b, k[11], 16, 1839030562); b = hh(b, c, d, a, k[14], 23, -35309556);
          a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11, 1272893353); c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640);
          a = hh(a, b, c, d, k[13], 4, 681279174); d = hh(d, a, b, c, k[0], 11, -358537222); c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23, 76029189);
          a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835); c = hh(c, d, a, b, k[15], 16, 530742520); b = hh(b, c, d, a, k[2], 23, -995338651);
          a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10, 1126891415); c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055);
          a = ii(a, b, c, d, k[12], 6, 1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606); c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799);
          a = ii(a, b, c, d, k[8], 6, 1873313359); d = ii(d, a, b, c, k[15], 10, -30611744); c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21, 1309151649);
          a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379); c = ii(c, d, a, b, k[2], 15, 718787259); b = ii(b, c, d, a, k[9], 21, -343485551);
          x[0] = add32(a, x[0]); x[1] = add32(b, x[1]); x[2] = add32(c, x[2]); x[3] = add32(d, x[3]);
        }
        function cmn(q, a, b, x, s, t) { a = add32(add32(a, q), add32(x, t)); return add32(a << s | a >>> (32 - s), b); }
        function ff(a, b, c, d, x, s, t) { return cmn(b & c | ~b & d, a, b, x, s, t); }
        function gg(a, b, c, d, x, s, t) { return cmn(b & d | c & ~d, a, b, x, s, t); }
        function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
        function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
        function md51(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
          for (i = 64; i <= s.length; i += 64) { md5cycle(state, md5blk(s.substring(i - 64, i))); }
          s = s.substring(i - 64);
          var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          tail[i >> 2] |= 0x80 << (i % 4 << 3);
          if (i > 55) { md5cycle(state, tail); tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }
          tail[14] = n * 8;
          md5cycle(state, tail);
          return state;
        }
        function md5blk(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          return md5blks;
        }
        function rhex(n) { var s = '', j; for (j = 0; j < 4; j++) s += hex_chr[n >> (j * 8 + 4) & 15] + hex_chr[n >> (j * 8) & 15]; return s; }
        function hex(x) { for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]); return x.join(''); }
        function add32(a, b) { return a + b & 4294967295; }
        var hex_chr = '0123456789abcdef'.split('');
        return hex(md51(s));
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[duck]  DuckDuckGo AI Chat (duck.ai)
    // ═══════════════════════════════════════════════════════
    // 无后端 API：聊天记录全部存在浏览器 IndexedDB（库 savedAIChatData，仓库 saved-chats）。
    // 会话 key = chatId；另有 `__metadata__` 元数据项需跳过。
    // duck.ai 没有每会话独立 URL（始终 https://duck.ai/），故只支持「导出全部」。
    {
      id: 'duck',
      name: 'DuckDuckGo AI Chat',
      detect: () => window.location.hostname === 'duck.ai',

      getCurrentConversationId: () => null,  // 无会话 URL，仅全部导出

      /** 打开 IndexedDB */
      _openDb() {
        return new Promise((resolve, reject) => {
          try {
            const req = indexedDB.open('savedAIChatData');
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(new Error('打开 IndexedDB 失败: ' + (req.error?.message || 'unknown')));
          } catch (e) {
            reject(e);
          }
        });
      },

      /** 读一个 key 的值 */
      _get(db, key) {
        return new Promise((resolve, reject) => {
          const req = db.transaction('saved-chats', 'readonly').objectStore('saved-chats').get(key);
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(new Error('IndexedDB 读取失败: ' + (req.error?.message || 'unknown')));
        });
      },

      /** 所有 key（排除元数据项） */
      _allKeys(db) {
        return new Promise((resolve, reject) => {
          const req = db.transaction('saved-chats', 'readonly').objectStore('saved-chats').getAllKeys();
          req.onsuccess = () => resolve(req.result.filter((k) => k !== '__metadata__'));
          req.onerror = () => reject(new Error('IndexedDB 读 key 失败: ' + (req.error?.message || 'unknown')));
        });
      },

      async getAllConversations(onProgress) {
        const db = await this._openDb();
        try {
          const keys = await this._allKeys(db);
          const out = [];
          for (const k of keys) {
            const chat = await this._get(db, k);
            if (!chat) continue;
            out.push({
              id: chat.chatId || k,
              title: (chat.title || '').trim(),
              model: chat.model || '',
              lastEdit: chat.lastEdit || null,
            });
          }
          if (onProgress) onProgress(out.length);
          return out;
        } finally {
          db.close();
        }
      },

      async getConversationDetails(id) {
        const db = await this._openDb();
        try {
          const chat = await this._get(db, id);
          if (!chat) throw new Error('IndexedDB 中未找到会话 ' + id);
          return chat;
        } finally {
          db.close();
        }
      },

      /** 将 duck.ai 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const messages = data?.messages || [];
        if (!messages.length) throw new Error('未找到消息数据');

        const model = data.model || '';
        const timeStr = data.lastEdit
          ? formatLocalTime(new Date(data.lastEdit))
          : 'unknown';
        // duck.ai 无每会话 URL
        const convUrl = 'https://duck.ai/';

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + (model || 'duck.ai') + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        // ---- 第一遍：收集每条助手消息的引用 <citation src="1,2"> → 全局编号（按 URL 去重） ----
        const msgCiteMap = new Map();  // 消息下标 → Map<localNum, globalNum>
        const urlToNum = new Map();    // url → globalNum
        let nextNum = 1;

        for (let i = 0; i < messages.length; i++) {
          if (messages[i]?.role !== 'assistant') continue;
          const { responseText, sources } = this._assistantParts(messages[i]);
          if (!responseText) continue;
          const localMap = new Map();
          const re = /<citation src="([0-9,\s]+)"><\/citation>/g;
          let m;
          while ((m = re.exec(responseText)) !== null) {
            for (const nStr of m[1].split(',')) {
              const n = Number(nStr.trim());
              if (!n || localMap.has(n)) continue;
              const src = sources[n - 1];
              const url = src?.source?.url || '';
              if (!url) continue;
              if (!urlToNum.has(url)) urlToNum.set(url, nextNum++);
              localMap.set(n, urlToNum.get(url));
            }
          }
          msgCiteMap.set(i, localMap);
        }

        // ---- 第二遍：生成正文 ----
        for (let i = 0; i < messages.length; i++) {
          const msg = messages[i];

          if (msg.role === 'user') {
            const text = (msg.content || '').trim();
            if (!text) continue;
            lines.push('### 🧑\u200d💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');

          } else if (msg.role === 'assistant') {
            const { responseText, thoughts } = this._assistantParts(msg);
            if (!responseText) continue;

            const citeMap = msgCiteMap.get(i) || new Map();
            const cleaned = responseText.replace(/<citation src="([0-9,\s]+)"><\/citation>/g, (_, nums) => {
              return nums.split(',')
                .map((nStr) => {
                  const gn = citeMap.get(Number(nStr.trim()));
                  return gn !== undefined ? `[${gn}]` : '';
                })
                .join('');
            });

            lines.push('### 🤖 Assistant');
            lines.push('');

            if (thoughts.length) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thoughts.join('\n\n')));
              lines.push('');
              lines.push('#### 💡 Response');
              lines.push('');
            }

            lines.push(stripHashes(cleaned));
            lines.push('');
          }
        }

        // ---- References ----
        if (urlToNum.size > 0) {
          const sorted = [...urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [url, num] of sorted) {
            lines.push(`- [${num}] ${url}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },

      // ---- 内部辅助方法 ----
      /** 解析助手消息：reasoning→thoughts，text→正文，source→引用源（按出现顺序 1-based） */
      _assistantParts(msg) {
        const thoughts = [];
        const sources = [];
        let responseText = '';
        for (const p of msg?.parts || []) {
          if (!p) continue;
          if (p.type === 'reasoning' && p.text) {
            thoughts.push(p.text.trim());
          } else if (p.type === 'text' && p.text) {
            responseText = p.text.trim();
          } else if (p.type === 'source') {
            sources.push(p);
          }
          // tool-invocation 等中间产物跳过
        }
        return { thoughts, sources, responseText };
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[pplx]  Perplexity
    // ═══════════════════════════════════════════════════════
    // LLM 注意: 列表走 /rest/thread/list_recent（无分页，一次返回全部）；
    // 详情走 /rest/thread/{uuid}（schematized 响应：每条 entry 的 blocks 里
    // ask_text.markdown_block 是正文，web_results.web_result_block 是引用源）。
    {
      id: 'pplx',
      name: 'Perplexity',
      detect: () => window.location.hostname === 'www.perplexity.ai',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/search\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      _threadHeaders() {
        return {
          'x-app-apiclient': 'default',
          'x-app-apiversion': '2.18',
        };
      },

      /** 详情接口查询串（与站点前端一致的最小参数集） */
      _threadQuery(limit, offset, fromFirst) {
        const p = new URLSearchParams();
        p.set('with_parent_info', 'true');
        p.set('with_schematized_response', 'true');
        p.set('version', '2.18');
        p.set('source', 'default');
        p.set('limit', String(limit));
        p.set('offset', String(offset));
        p.set('from_first', String(fromFirst));
        p.set('with_first_entry', 'false');
        p.set('with_latest_entry', 'false');
        for (const uc of ['answer_modes', 'search_result_widgets', 'preserve_latex']) {
          p.append('supported_block_use_cases', uc);
        }
        return p;
      },

      /** ISO 时间串 → Date；无时区后缀时按 UTC 处理（thread_metadata 的时间不带偏移） */
      _parseDate(str) {
        if (!str) return null;
        const hasTz = /(?:Z|[+-]\d{2}:\d{2})$/.test(str);
        const d = new Date(hasTz ? str : str + 'Z');
        return isNaN(d.getTime()) ? null : d;
      },

      async getAllConversations(onProgress) {
        const r = await fetch('/rest/thread/list_recent?exclude_asi=false&version=2.18&source=default');
        if (!r.ok) throw new Error(`API ${r.status}: ${r.statusText}`);
        const body = await r.json();
        const list = Array.isArray(body) ? body : [];
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        const result = list
          .slice(0, limit)
          .map((t) => ({
            id: t.uuid || '',
            title: (t.title || '').trim(),
            updated_at: t.updated_at,
            status: t.status,
          }))
          .filter((c) => c.id);
        if (onProgress) onProgress(result.length);
        return result;
      },

      async getConversationDetails(id) {
        const limit = 50;
        const allEntries = [];
        let body = null;
        let offset = 0;
        let fromFirst = true;

        for (let i = 0; i < 200; i++) {
          const url = `/rest/thread/${id}?` + this._threadQuery(limit, offset, fromFirst);
          const r = await fetch(url, { headers: this._threadHeaders() });
          if (!r.ok) throw new Error(`API ${r.status}: ${r.statusText}`);
          body = await r.json();
          allEntries.push(...(body.entries || []));
          if (!body.has_next_page || !body.next_cursor) break;
          offset = body.next_cursor;
          fromFirst = false;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        // title 注入到 data.title（核心引擎 getChatTitle 的兜底链里有这个键）
        return {
          ...body,
          entries: allEntries,
          title: body?.thread_metadata?.title || allEntries[0]?.thread_title || '',
        };
      },

      /** 将 Perplexity 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const meta = data?.thread_metadata || {};
        const entries = data?.entries || [];
        const model = entries[0]?.display_model || meta.display_model || 'unknown';
        const created = meta.created_at ? this._parseDate(meta.created_at) : null;
        const timeStr = created ? formatLocalTime(created) : 'unknown';
        const convUrl = convId
          ? `https://www.perplexity.ai/search/${convId}`
          : 'https://www.perplexity.ai';

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + model + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const entry of entries) {
          const userText = entry?.query_str || '';
          if (userText) {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(userText));
            lines.push('');
          }

          const mb = entry?.blocks?.find((b) => b.markdown_block && b.intended_usage === 'ask_text');
          const answer = mb?.markdown_block?.answer || '';
          if (!answer) continue;

          lines.push('### 🤖 Assistant');
          lines.push('');
          lines.push(stripHashes(answer));
          lines.push('');

          // 引用：[N] → web_results[N-1].url（每个 entry 独立编号）
          const wrBlock = entry?.blocks?.find((b) => b.web_result_block);
          const webResults = wrBlock?.web_result_block?.web_results || [];
          const citedNums = [...new Set(
            [...answer.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]))
          )].filter((n) => Number.isInteger(n) && n >= 1 && n <= webResults.length)
            .sort((a, b) => a - b);

          if (citedNums.length > 0) {
            lines.push('---');
            lines.push('');
            lines.push('### References');
            lines.push('');
            for (const n of citedNums) {
              const w = webResults[n - 1];
              if (w?.url) lines.push(`- [${n}] ${w.url}`);
            }
            lines.push('');
          }
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[deepseek]  DeepSeek Chat
    // ═══════════════════════════════════════════════════════
    {
      id: 'deepseek',
      name: 'DeepSeek Chat',
      detect: () => window.location.hostname === 'chat.deepseek.com',

      /** 从 localStorage 读取 Bearer token */
      _token() {
        try {
          return JSON.parse(localStorage.getItem('userToken')).value;
        } catch (e) {
          return '';
        }
      },

      _headers() {
        return {
          'authorization': 'Bearer ' + this._token(),
          'x-client-platform': 'web',
          'x-client-version': '2.2.0',
        };
      },

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/a\/chat\/s\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      async getAllConversations(onProgress) {
        const allSessions = [];
        let cursor = '';
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (allSessions.length < limit) {
          const url = cursor
            ? `/api/v0/chat_session/fetch_page?lte_cursor.pinned=false&lte_cursor.updated_at=${cursor}`
            : '/api/v0/chat_session/fetch_page';
          const r = await fetch(url, { headers: this._headers() });
          const body = await r.json();
          const sessions = body?.data?.biz_data?.chat_sessions || [];
          if (!sessions.length) break;

          allSessions.push(...sessions);
          if (onProgress) onProgress(allSessions.length);

          const hasMore = body?.data?.biz_data?.has_more;
          if (!hasMore) break;

          cursor = sessions[sessions.length - 1].updated_at;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allSessions.slice(0, limit).map((s) => ({
          id: s.id,
          title: s.title || '',
          model_type: s.model_type,
          updated_at: s.updated_at,
        }));
      },

      async getConversationDetails(id) {
        const r = await fetch(`/api/v0/chat/history_messages?chat_session_id=${id}`, { headers: this._headers() });
        const body = await r.json();
        return body?.data?.biz_data || {};
      },

      /** 将 DeepSeek 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const session = data?.chat_session || {};
        const messages = data?.chat_messages || [];
        const model = session.model_type || 'unknown';
        const timeStr = session.inserted_at
          ? formatLocalTime(new Date(session.inserted_at * 1000))
          : 'unknown';
        const convUrl = convId
          ? `https://chat.deepseek.com/a/chat/s/${convId}`
          : 'https://chat.deepseek.com';

        // 第一遍：收集所有 SEARCH 结果中的引用
        const citeMap = new Map();  // cite_index → url
        for (const msg of messages) {
          if (msg.role !== 'ASSISTANT') continue;
          for (const frag of (msg.fragments || [])) {
            if (frag.type === 'SEARCH') {
              for (const r of (frag.results || [])) {
                if (r.cite_index !== undefined && r.cite_index !== null && r.cite_index !== '' && !citeMap.has(r.cite_index)) {
                  citeMap.set(r.cite_index, r.url || '');
                }
              }
            }
          }
        }

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `deepseek-' + model + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        for (const msg of messages) {
          const fragments = msg.fragments || [];

          if (msg.role === 'USER') {
            const reqFrag = fragments.find((f) => f.type === 'REQUEST');
            const text = reqFrag?.content || '';
            if (!text) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');

          } else if (msg.role === 'ASSISTANT') {
            const thinkFrag = fragments.find((f) => f.type === 'THINK');
            const respFrag = fragments.find((f) => f.type === 'RESPONSE');
            const responseText = respFrag?.content || '';
            if (!responseText) continue;

            // 替换引用 [citation:N] → [N]
            const cleaned = responseText.replace(/\[citation:(\d+)\]/g, (_, n) => `[${n}]`);

            lines.push('### 🤖 Assistant');
            lines.push('');

            if (thinkFrag?.content) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thinkFrag.content));
              lines.push('');
              lines.push('#### 💡 Response');
              lines.push('');
            }

            lines.push(stripHashes(cleaned));
            lines.push('');
          }
        }

        // References
        if (citeMap.size > 0) {
          const sorted = [...citeMap.entries()].sort((a, b) => a[0] - b[0]);
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [idx, url] of sorted) {
            if (url) lines.push(`- [${idx}] ${url}`);
          }
          lines.push('');
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[qwen]  通义千问
    // ═══════════════════════════════════════════════════════
    {
      id: 'qwen',
      name: '通义千问',
      detect: () => window.location.hostname === 'chat.qwen.ai',

      getCurrentConversationId: () => {
        // 支持两种模式: /c/<uuid> 和 /a/chat/s/<uuid>
        const m1 = window.location.pathname.match(/^\/c\/([^\/?]+)/);
        if (m1) return m1[1];
        const m2 = window.location.pathname.match(/^\/a\/chat\/s\/([^\/?]+)/);
        if (m2) return m2[1];
        return null;
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        let page = 1;
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (allChats.length < limit) {
          const r = await fetch(`/api/v2/chats/?page=${page}&exclude_project=true`, {
            headers: { 'source': 'web' },
          });
          const body = await r.json();
          const chats = body?.data || [];
          if (!chats.length) break;

          allChats.push(...chats);
          if (onProgress) onProgress(allChats.length);

          page++;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit).map((c) => ({
          id: c.id,
          title: c.title || '',
          updated_at: c.updated_at,
          created_at: c.created_at,
          chat_type: c.chat_type,
        }));
      },

      async getConversationDetails(id) {
        const r = await fetch(`/api/v2/chats/${id}`, {
          headers: { 'source': 'web' },
        });
        const body = await r.json();
        return body?.data || {};
      },

      toMarkdown(data, title, convId) {
        const chat = data?.chat || {};
        const messages = chat?.messages || [];

        // 从第一条消息的 models 或 assistant 的 modelName 推断模型名
        let modelName = 'unknown';
        for (const msg of messages) {
          if (msg.modelName) { modelName = msg.modelName; break; }
          if (msg.models && Array.isArray(msg.models) && msg.models.length) {
            modelName = msg.models[0]; break;
          }
        }

        const timeStr = data?.created_at
          ? formatLocalTime(new Date(data.created_at * 1000))
          : 'unknown';
        const convUrl = convId
          ? `https://chat.qwen.ai/c/${convId}`
          : 'https://chat.qwen.ai';

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        for (const msg of messages) {
          if (msg.role === 'user') {
            const text = msg.content || '';
            if (!text) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');

          } else if (msg.role === 'assistant') {
            const reasoningContent = msg.reasoning_content || '';
            let responseText = '';

            if (msg.content_list && Array.isArray(msg.content_list)) {
              responseText = msg.content_list.map((item) => item.content || '').join('\n');
            } else {
              responseText = msg.content || '';
            }

            if (!responseText) continue;

            lines.push('### 🤖 Assistant');
            lines.push('');

            if (reasoningContent) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(reasoningContent));
              lines.push('');
              lines.push('#### 💡 Response');
              lines.push('');
            }

            lines.push(stripHashes(responseText));
            lines.push('');
          }
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[qianwen]  千问 (qianwen.com)
    // ═══════════════════════════════════════════════════════
    {
      id: 'qianwen',
      name: '千问',
      detect: () => window.location.hostname === 'www.qianwen.com',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chat\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      _deviceId() {
        try {
          const existing = localStorage.getItem('uc-stat-dn');
          if (existing) return existing;
          const cached = localStorage.getItem('qianwen-exporter-device-id');
          if (cached) return cached;
          const generated = (typeof crypto !== 'undefined' && crypto.randomUUID)
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
          localStorage.setItem('qianwen-exporter-device-id', generated);
          return generated;
        } catch (e) {
          return '';
        }
      },

      _xsrfToken() {
        try {
          const match = document.cookie.match(/(?:^|; )XSRF-TOKEN=([^;]+)/);
          return match ? decodeURIComponent(match[1]) : '';
        } catch (e) {
          return '';
        }
      },

      _webVersion() {
        try {
          const entries = performance.getEntriesByType('resource') || [];
          for (const entry of entries) {
            const name = entry?.name || '';
            const match = name.match(/\/qianwen-web\/(\d+\.\d+\.\d+)\//);
            if (match) return match[1];
          }
        } catch (e) {}
        return '4.0.7';
      },

      _baseUrl() {
        return 'https://chat2-api.qianwen.com';
      },

      _commonParams(extra) {
        const version = this._webVersion();
        return new URLSearchParams({
          biz_id: 'ai_qwen',
          chat_client: 'h5',
          device: 'pc',
          fr: 'pc',
          pr: 'qwen',
          ut: this._deviceId(),
          la: navigator.language || 'zh-CN',
          tz: (Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Shanghai'),
          wv: version,
          ve: version,
          ...(extra || {}),
        });
      },

      _headers() {
        const h = {
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-platform': 'pc_tongyi',
        };
        const token = this._xsrfToken();
        const deviceId = this._deviceId();
        if (token) h['x-xsrf-token'] = token;
        if (deviceId) h['x-deviceid'] = deviceId;
        return h;
      },

      async _request(path, options) {
        const qs = this._commonParams(options?.query);
        const url = `${this._baseUrl()}${path}?${qs.toString()}`;
        const resp = await fetch(url, {
          method: options?.method || 'GET',
          credentials: 'include',
          headers: this._headers(),
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });
        const text = await resp.text();
        let body = null;
        try { body = text ? JSON.parse(text) : {}; } catch (e) { body = { raw: text }; }
        if (!resp.ok || body?.success === false || (body?.code !== undefined && body.code !== 0)) {
          throw new Error(`Qianwen API ${resp.status}: ${body?.msg || body?.errorMsg || text.slice(0, 120)}`);
        }
        return body;
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        let nextToken = '';

        while (allChats.length < limit) {
          const body = await this._request('/api/v2/session/page/list', {
            method: 'POST',
            body: {
              limit: 50,
              next_token: nextToken,
              sort_field: 'modifiedTime',
              need_filter_tag: true,
            },
          });
          const data = body?.data || {};
          const sessions = Array.isArray(data.list) ? data.list : [];
          let added = 0;
          for (const session of sessions) {
            const id = session.session_id || session.sessionId;
            if (!id || seen.has(id)) continue;
            seen.add(id);
            allChats.push({
              id,
              title: session.title || session.summary || '',
              created_at: session.created_at || session.createTime,
              updated_at: session.updated_at || session.modifiedTime || session.last_req_timestamp,
              qwen_session_type: session.qwen_session_type || session.sessionType,
            });
            added++;
            if (allChats.length >= limit) break;
          }

          if (onProgress) onProgress(allChats.length);
          nextToken = data.next_token || '';
          if (!data.have_next_page || !nextToken || !sessions.length || !added) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit);
      },

      async getConversationDetails(id) {
        const sessionResp = await this._request('/api/v1/session/get', {
          method: 'POST',
          body: { session_id: id },
        });

        const pageSize = 100;
        const turns = [];
        const seen = new Set();
        let pos = '';
        let page = 1;

        while (true) {
          const query = {
            session_id: id,
            page_size: String(pageSize),
            page: String(page),
            return_response_messages: 'true',
            event_filter: 'all',
          };
          if (pos) query.pos = pos;
          const msgResp = await this._request('/api/v1/session/msg/list', { method: 'GET', query });
          const data = msgResp?.data || {};
          const batch = Array.isArray(data.list) ? data.list : [];
          let added = 0;
          for (const turn of batch) {
            const key = turn.req_id || turn.pos || JSON.stringify(turn.request_messages || []);
            if (!key || seen.has(key)) continue;
            seen.add(key);
            turns.push(turn);
            added++;
          }

          const nextPos = data.next_page_pos || batch[batch.length - 1]?.pos || '';
          const hasMore = data.has_next_page ?? data.have_next_page ?? data.have_more_record ?? false;
          if (!hasMore || !batch.length || !added || !nextPos || nextPos === pos) break;
          pos = nextPos;
          page++;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        for (let i = 0; i < turns.length; i++) {
          const turn = turns[i];
          const hasResponseMessages = Array.isArray(turn?.response_messages) && turn.response_messages.length > 0;
          const hasQwenResponseMessages = Array.isArray(turn?.qwen_response_messages) && turn.qwen_response_messages.length > 0;
          if (!turn?.req_id || hasResponseMessages || hasQwenResponseMessages) continue;
          try {
            const detailResp = await this._request('/api/v1/session/req/detail', {
              method: 'GET',
              query: { session_id: id, req_id: turn.req_id },
            });
            const detail = detailResp?.data || null;
            const detailHasResponseMessages = Array.isArray(detail?.response_messages) && detail.response_messages.length > 0;
            const detailHasQwenResponseMessages = Array.isArray(detail?.qwen_response_messages) && detail.qwen_response_messages.length > 0;
            if (detail && (detailHasResponseMessages || detailHasQwenResponseMessages)) {
              turns[i] = { ...turn, ...detail };
            }
          } catch (e) {
            console.warn('Qianwen req detail fallback failed:', turn.req_id, e);
          }
          if (i < turns.length - 1) await sleep(CONFIG.API_PAGE_DELAY);
        }

        return {
          conversation_id: id,
          sessionResp,
          messagesResp: { data: { list: turns, have_next_page: false } },
          session: sessionResp?.data || {},
          turns,
        };
      },

      _plainText(value) {
        if (!value) return '';
        if (typeof value === 'string') return value;
        if (typeof value.content === 'string') return value.content;
        if (Array.isArray(value.content)) return value.content.map((x) => this._plainText(x)).join('');
        return '';
      },

      _parseJson(value) {
        if (!value || typeof value !== 'string') return null;
        try { return JSON.parse(value); } catch (e) { return null; }
      },

      _turnUserText(turn) {
        const parts = [];
        for (const msg of (turn?.request_messages || [])) {
          const text = this._plainText(msg).trim();
          if (text) parts.push(text);
        }
        return parts.join('\n\n').trim();
      },

      _qwenResponseText(turn) {
        const parts = [];
        for (const msg of (turn?.qwen_response_messages || [])) {
          const role = String(msg?.role || '').toLowerCase();
          const type = String(msg?.contentType || msg?.content_type || msg?.mimeType || '').toLowerCase();
          if (role !== 'assistant') continue;
          if (!['', 'text', 'markdown', 'multi_load/text'].includes(type)) continue;
          const text = typeof msg.content === 'string' ? msg.content.trim() : '';
          if (text) parts.push(text);
        }
        return parts.join('\n\n').trim();
      },

      _turnResponseText(turn) {
        const parts = [];
        for (const msg of (turn?.response_messages || [])) {
          const text = this._plainText(msg).trim();
          if (!text) continue;
          if (/^(signal|bar|paa)\//.test(msg.mime_type || '')) continue;
          parts.push(text);
        }
        if (!parts.length) {
          const qwenText = this._qwenResponseText(turn);
          if (qwenText) parts.push(qwenText);
        }
        return parts.join('\n\n').trim();
      },

      _thinkFromResponse(turn) {
        const parts = [];
        for (const msg of (turn?.response_messages || [])) {
          const loaders = msg?.meta_data?.multi_load || [];
          for (const item of loaders) {
            const think = item?.type === 'deep_think' ? item?.content?.think_content : '';
            if (think) parts.push(String(think).trim());
          }
        }
        return parts.join('\n\n').trim();
      },

      _sourceItems(value, out) {
        if (!value) return;
        if (Array.isArray(value)) {
          for (const item of value) this._sourceItems(item, out);
          return;
        }
        if (typeof value !== 'object') return;
        if ((value.url || value.raw_url) && (value.title || value.name || value.url)) {
          out.push({ title: value.title || value.name || '', url: value.url || value.raw_url });
        }
        for (const key of ['sources', 'multi_load', 'list', 'content']) this._sourceItems(value[key], out);
      },

      _firstSourceItem(value) {
        if (!value) return null;
        if (Array.isArray(value)) {
          for (const item of value) {
            const hit = this._firstSourceItem(item);
            if (hit) return hit;
          }
          return null;
        }
        if (typeof value !== 'object') return null;
        if ((value.url || value.raw_url) && (value.title || value.name || value.url)) {
          return { title: value.title || value.name || '', url: value.url || value.raw_url };
        }
        for (const key of ['sources', 'multi_load', 'list', 'content']) {
          const hit = this._firstSourceItem(value[key]);
          if (hit) return hit;
        }
        return null;
      },

      _sourceGroupItems(value, out) {
        if (!value) return;
        if (Array.isArray(value)) {
          for (const item of value) this._sourceGroupItems(item, out);
          return;
        }
        if (typeof value !== 'object') return;
        const seq = typeof value.source_seq === 'string' ? value.source_seq : '';
        if (/^source_group_web_\d+$/.test(seq)) {
          const source = this._firstSourceItem(value);
          if (source?.url) out.push({ seq, ...source });
        }
        for (const key of ['sources', 'multi_load', 'list', 'content']) this._sourceGroupItems(value[key], out);
      },

      _turnSourceGroups(turn) {
        const groups = [];
        const seen = new Set();
        for (const msg of (turn?.response_messages || [])) this._sourceGroupItems(msg?.meta_data, groups);
        return groups
          .filter((ref) => {
            if (!ref.seq || seen.has(ref.seq)) return false;
            seen.add(ref.seq);
            return true;
          })
          .sort((a, b) => {
            const an = Number((a.seq.match(/(\d+)$/) || [])[1] || 0);
            const bn = Number((b.seq.match(/(\d+)$/) || [])[1] || 0);
            return an - bn;
          });
      },

      _qwenRefs(turn) {
        const refs = [];
        for (const msg of (turn?.qwen_response_messages || [])) {
          const type = String(msg?.contentType || msg?.content_type || '').toLowerCase();
          const content = typeof msg?.content === 'string' ? msg.content : '';
          if (type === 'referencelink') {
            const parsed = this._parseJson(content);
            for (const link of (parsed?.links || [])) {
              if (link?.url) refs.push({ title: link.title || link.name || '', url: link.url });
            }
          } else if (type === 'plugin') {
            const parsed = this._parseJson(content);
            const pluginResult = this._parseJson(parsed?.pluginResult || '');
            const items = Array.isArray(pluginResult) ? pluginResult : [];
            for (const item of items) {
              if (item?.url) refs.push({ title: item.title || item.name || '', url: item.url });
            }
          }
        }
        return refs;
      },

      _turnRefs(turn) {
        const refs = [];
        for (const msg of (turn?.response_messages || [])) this._sourceItems(msg?.meta_data, refs);
        refs.push(...this._qwenRefs(turn));
        return refs;
      },

      toMarkdown(data, title, convId) {
        const session = data?.session || data?.sessionResp?.data || data || {};
        const turnsRaw = data?.turns || data?.messagesResp?.data?.list || data?.data?.list || [];
        const turns = [...turnsRaw]
          .filter((turn) => turn && (turn.request_messages || turn.response_messages || turn.qwen_response_messages))
          .sort((a, b) => {
            const at = Number(a.request_timestamp || a.created_at || a.create_time || a.pos || 0);
            const bt = Number(b.request_timestamp || b.created_at || b.create_time || b.pos || 0);
            return at - bt;
          });

        const modelName = turns.find((t) => t.model_name)?.model_name || 'Qwen';
        const timeStr = session.created_at
          ? formatLocalTime(new Date(Number(session.created_at)))
          : 'unknown';
        const convUrl = convId ? `https://www.qianwen.com/chat/${convId}` : 'https://www.qianwen.com';
        const stripHashes = (s) => String(s || '').replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const refs = [];
        const refKeyToNum = new Map();
        const urlToNum = new Map();
        const ensureRef = (key, ref) => {
          if (!ref?.url) return null;
          if (key && refKeyToNum.has(key)) return refKeyToNum.get(key);
          if (urlToNum.has(ref.url)) {
            const existing = urlToNum.get(ref.url);
            if (key) refKeyToNum.set(key, existing);
            return existing;
          }
          const num = refs.length + 1;
          refs.push({ title: ref.title || '', url: ref.url });
          urlToNum.set(ref.url, num);
          if (key) refKeyToNum.set(key, num);
          return num;
        };

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const turn of turns) {
          const userText = this._turnUserText(turn);
          const responseTextRaw = this._turnResponseText(turn).replace(/\[\((?:deep_think|doc_common_card)[^\)]*\)\]/g, '').trim();
          const thought = this._thinkFromResponse(turn);
          const turnKey = turn.req_id || turn.pos || String(turn.request_timestamp || '');
          const sourceGroups = this._turnSourceGroups(turn);
          if (sourceGroups.length) {
            for (const group of sourceGroups) ensureRef(`${turnKey}:${group.seq}`, group);
          } else {
            for (const ref of this._turnRefs(turn)) ensureRef('', ref);
          }
          if (userText) {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(userText));
            lines.push('');
          }
          if (responseTextRaw || thought) {
            let responseText = responseTextRaw
              .replace(/\[\[(source_group_web_\d+)\]\]/g, (_, seq) => {
                const num = refKeyToNum.get(`${turnKey}:${seq}`);
                return num ? `[${num}]` : '';
              })
              .replace(/\[\[[^\]]+\]\]/g, '');
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thought) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thought));
              lines.push('');
              if (responseText) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (responseText) {
              lines.push(stripHashes(responseText));
              lines.push('');
            }
          }
        }

        if (refs.length > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (let i = 0; i < refs.length; i++) {
            const ref = refs[i];
            lines.push(ref.title ? `- [${i + 1}] ${ref.title} ${ref.url}` : `- [${i + 1}] ${ref.url}`);
          }
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[yuanbao]  腾讯元宝
    // ═══════════════════════════════════════════════════════
    {
      id: 'yuanbao',
      name: '腾讯元宝',
      detect: () => window.location.hostname === 'yuanbao.tencent.com',

      _defaultAgentId: 'naQivTmsDa',

      _unpackId(id) {
        const parts = String(id || '').split('/').filter(Boolean);
        if (parts.length >= 2) return { agentId: parts[0], conversationId: parts[1] };
        return { agentId: this._currentAgentId() || this._defaultAgentId, conversationId: parts[0] || '' };
      },

      _packId(agentId, conversationId) {
        return `${agentId || this._defaultAgentId}/${conversationId}`;
      },

      _currentAgentId() {
        const match = window.location.pathname.match(/^\/chat\/([^\/?]+)(?:\/([^\/?]+))?/);
        return match ? match[1] : '';
      },

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chat\/([^\/?]+)\/([^\/?]+)/);
        return match ? `${match[1]}/${match[2]}` : null;
      },

      async _post(path, body) {
        const r = await fetch(path, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify(body || {}),
        });
        const text = await r.text();
        let data = null;
        try { data = text ? JSON.parse(text) : {}; } catch (e) { data = { raw: text }; }
        const errCode = data?.code ?? data?.error?.code;
        if (!r.ok || (errCode !== undefined && String(errCode) !== '0')) {
          throw new Error(`Yuanbao API ${r.status}: ${data?.message || data?.msg || data?.error?.message || text.slice(0, 120)}`);
        }
        return data;
      },

      async getAllConversations(onProgress) {
        const agentId = this._currentAgentId() || this._defaultAgentId;
        const all = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        const pageSize = 40;
        let offset = 0;
        let total = Infinity;

        while (all.length < limit && offset < total) {
          const body = await this._post('/api/user/agent/conversation/list', {
            agentId,
            offset,
            limit: pageSize,
            filterGoodQuestion: true,
          });
          const conversations = Array.isArray(body?.conversations) ? body.conversations : [];
          total = Number(body?.pagination?.totalResults ?? conversations.length);
          let added = 0;
          for (const c of conversations) {
            const cid = c.id;
            if (!cid || seen.has(cid)) continue;
            seen.add(cid);
            all.push({
              id: this._packId(c.agentId || agentId, cid),
              title: c.title || c.sessionTitle || cid,
              created_at: c.firstRepliedAt || c.createTime,
              updated_at: c.lastRepliedAt || c.lastRepliedDatetime,
              agentId: c.agentId || agentId,
              model: c.chatModelId || c.modelId,
            });
            added++;
            if (all.length >= limit) break;
          }
          if (onProgress) onProgress(all.length);
          if (!conversations.length || !added) break;
          offset += conversations.length;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit);
      },

      async getConversationDetails(id) {
        const { agentId, conversationId } = this._unpackId(id);
        if (!conversationId) throw new Error('缺少 Yuanbao conversationId');
        const allConvs = [];
        const seen = new Set();
        const pageSize = 50;
        let offset = 0;
        let meta = null;

        while (true) {
          const body = await this._post('/api/user/agent/conversation/v1/detail', {
            conversationId,
            offset,
            limit: pageSize,
            agentId,
          });
          if (!meta) meta = body;
          const batch = Array.isArray(body?.convs) ? body.convs : [];
          let added = 0;
          let minIndex = Infinity;
          for (const conv of batch) {
            const idx = Number(conv?.index);
            if (Number.isFinite(idx)) minIndex = Math.min(minIndex, idx);
            const key = conv?.id || `${conv?.speaker || ''}:${idx}`;
            if (!key || seen.has(key)) continue;
            seen.add(key);
            allConvs.push(conv);
            added++;
          }
          if (!body?.hasMore || !batch.length || !added || !Number.isFinite(minIndex) || minIndex === offset) break;
          offset = minIndex;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return { ...(meta || {}), agentId, conversationId, convs: allConvs };
      },

      _textContent(item) {
        if (!item) return '';
        if (typeof item === 'string') return item;
        if (typeof item.msg === 'string') return item.msg;
        if (typeof item.text === 'string') return item.text;
        if (typeof item.content === 'string') return item.content;
        return '';
      },

      _docRefs(docs) {
        const refs = [];
        for (const doc of (docs || [])) {
          const url = doc?.url || doc?.link || '';
          if (!url) continue;
          const rawIndex = Number(doc.index ?? doc.idx ?? refs.length + 1);
          refs.push({ index: Number.isFinite(rawIndex) && rawIndex > 0 ? rawIndex : refs.length + 1, title: doc.title || doc.name || '', url });
        }
        return refs;
      },

      _speechParts(conv) {
        const thought = [];
        const text = [];
        const refs = [];
        for (const speech of (conv?.speechesV2 || [])) {
          for (const item of (speech?.content || [])) {
            const type = item?.type || '';
            if (type === 'deepSearch') {
              for (const sub of (item.contents || [])) {
                if (sub?.type === 'text' && sub.msg) thought.push(sub.msg);
                if (Array.isArray(sub?.docs)) refs.push(...this._docRefs(sub.docs));
              }
            } else if (type === 'searchGuid') {
              if (Array.isArray(item.docs)) refs.push(...this._docRefs(item.docs));
            } else {
              const content = this._textContent(item).trim();
              if (content) text.push(content);
            }
          }
          if (!text.length && speech?.newPrompt) text.push(speech.newPrompt);
        }
        return { thought: thought.join('\n\n').trim(), text: text.join('\n\n').trim(), refs };
      },

      toMarkdown(data, title, convId) {
        const { agentId, conversationId } = this._unpackId(convId || data?.conversationId || data?.id || '');
        const convs = [...(data?.convs || [])]
          .filter((c) => c && c.speaker && Array.isArray(c.speechesV2))
          .sort((a, b) => (Number(a.index) || 0) - (Number(b.index) || 0));
        const modelName = data?.chatModelId || data?.modelId || convs.find((c) => c?.speechesV2?.[0]?.chatModelId)?.speechesV2?.[0]?.chatModelId || 'Yuanbao';
        const timeValue = data?.firstRepliedAt || convs[0]?.createTime || data?.lastRepliedAt;
        const timeStr = timeValue
          ? formatLocalTime(new Date(Number(timeValue) * 1000))
          : 'unknown';
        const url = agentId && conversationId
          ? `https://yuanbao.tencent.com/chat/${agentId}/${conversationId}`
          : 'https://yuanbao.tencent.com';
        const stripHashes = (s) => String(s || '').replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const refMap = new Map();

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${url}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const conv of convs) {
          const role = String(conv.speaker || '').toLowerCase() === 'human' ? 'user' : 'assistant';
          const parts = this._speechParts(conv);
          if (!parts.text && !parts.thought) continue;
          for (const ref of parts.refs) {
            if (!refMap.has(ref.index)) refMap.set(ref.index, ref);
          }
          if (role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(parts.text));
            lines.push('');
          } else {
            const responseText = stripHashes(parts.text.replace(/\[citation:(\d+)\]/g, '[$1]'));
            const thoughtText = stripHashes(parts.thought.replace(/\[citation:(\d+)\]/g, '[$1]'));
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thoughtText) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(thoughtText);
              lines.push('');
              if (responseText) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (responseText) {
              lines.push(responseText);
              lines.push('');
            }
          }
        }

        if (refMap.size > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [idx, ref] of [...refMap.entries()].sort((a, b) => a[0] - b[0])) {
            lines.push(ref.title ? `- [${idx}] ${ref.title} ${ref.url}` : `- [${idx}] ${ref.url}`);
          }
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[hunyuan]  腾讯混元 (Hy AI Studio)
    // ═══════════════════════════════════════════════════════
    // 列表 POST /api/new-portal/chat/conversation/list
    //   body {limit, offset, modelTag:'all'} → {code, totalCount, data:[{id, agentId, title, funcName,...}]}
    // 详情 POST /api/new-portal/user/agent/conversation/v1/detail
    //   body {conversationId, offset, limit, chatModelId?, agentId?, lastId?}
    //   → {code, hasMore, convs:[{speaker:'ai'|'human', index, chatRecordId, createTime,
    //      speechesV2:[{speechType:'thought'|'text', content:[{type:'text'|'thought'|'tool_calls'|'searchGuid'|'drawWithSearch', msg?, content?, docs?}]}]}]}
    // 注意: convs 按新→旧返回；长对话用 lastId（最旧已加载 conv 的 chatRecordId）游标翻页，
    //       服务端整轮返回（ai+其前置 human），cursor 所在轮已包含在已加载页内，不会丢消息。
    {
      id: 'hunyuan',
      name: '腾讯混元',
      // 国内站 aistudio.tencent.com + 海外站 aistudio.tencent.ai（API 同构，海外域 api.hy.tencent.ai，已实测确认）
      detect: () => ['aistudio.tencent.com', 'aistudio.tencent.ai'].includes(window.location.hostname),

      _siteHost() {
        return (typeof window !== 'undefined' && window.location && window.location.hostname)
          || 'aistudio.tencent.com';
      },

      _apiBase() {
        // 海外站 aistudio.tencent.ai 的 API 域是 api.hy.tencent.ai（实测确认，非 api.hunyuan.tencent.ai）
        return this._siteHost().endsWith('.tencent.ai')
          ? 'https://api.hy.tencent.ai'
          : 'https://api.hunyuan.tencent.com';
      },

      getCurrentConversationId: () => {
        const m = window.location.pathname.match(/^\/chat\/([^\/?]+)\/([^\/?]+)/);
        return m ? `${m[1]}/${m[2]}` : null;
      },

      _packId(agentId, conversationId) {
        return `${agentId || 'HunyuanDefault'}/${conversationId}`;
      },

      _unpackId(id) {
        const parts = String(id || '').split('/').filter(Boolean);
        if (parts.length >= 2) return { agentId: parts[0], conversationId: parts[1] };
        return { agentId: 'HunyuanDefault', conversationId: parts[0] || '' };
      },

      _headers(agentId, conversationId) {
        const h = {
          'accept': 'application/json',
          'content-type': 'application/json',
          'x-requested-with': 'XMLHttpRequest',
          'x-source': 'web',
        };
        if (agentId) h['x-agentid'] = conversationId ? `${agentId}/${conversationId}` : agentId;
        return h;
      },

      async _post(path, body, headers) {
        const r = await fetch(this._apiBase() + path, {
          method: 'POST',
          credentials: 'include',
          headers: headers || { 'accept': 'application/json', 'content-type': 'application/json' },
          body: JSON.stringify(body || {}),
        });
        const text = await r.text();
        let data = null;
        try { data = text ? JSON.parse(text) : {}; } catch (e) { data = { raw: text }; }
        const code = Number(data?.code);
        if (!r.ok || !(code === 0 || code === 200)) {
          throw new Error(`Hunyuan API ${r.status}: ${data?.msg || data?.message || text.slice(0, 120)}`);
        }
        return data;
      },

      async getAllConversations(onProgress) {
        const all = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        const pageSize = 40;
        let offset = 0;
        let total = Infinity;

        while (all.length < limit && offset < total) {
          const body = await this._post('/api/new-portal/chat/conversation/list', {
            limit: pageSize,
            offset,
            modelTag: 'all',
          }, this._headers());
          const conversations = Array.isArray(body?.data) ? body.data : [];
          total = Number(body?.totalCount ?? conversations.length);
          let added = 0;
          for (const c of conversations) {
            const cid = c.id;
            if (!cid || seen.has(cid)) continue;
            seen.add(cid);
            const agentId = c.agentId || 'HunyuanDefault';
            all.push({
              id: this._packId(agentId, cid),
              title: c.title || cid,
              created_at: c.createdAt,
              updated_at: c.updatedAt,
              agentId,
              model: c.funcName || c.chatModelId || c.modelId,
              chatModelId: c.chatModelId || '',
            });
            added++;
            if (all.length >= limit) break;
          }
          if (onProgress) onProgress(all.length);
          if (!conversations.length || !added) break;
          offset += conversations.length;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit);
      },

      async getConversationDetails(id) {
        const { agentId, conversationId } = this._unpackId(id);
        if (!conversationId) throw new Error('缺少混元 conversationId');
        let chatModelId = '';
        let convTitle = '';
        try {
          const m = await this._ensureModelMap();
          const info = m.get(conversationId) || {};
          chatModelId = info.chatModelId || '';
          convTitle = info.title || '';
        } catch (e) { /* 列表拉不到也不阻塞详情 */ }
        const allConvs = [];
        const seen = new Set();
        const pageSize = 15;
        let cursor = null; // lastId: 最旧已加载轮次内任一 conv 的 chatRecordId
        let newestIndex = 0;
        let meta = null;
        let pages = 0;

        while (pages++ < 200) {
          const body = {
            conversationId,
            offset: newestIndex,
            limit: pageSize,
          };
          if (agentId) body.agentId = agentId;
          if (chatModelId) body.chatModelId = chatModelId;
          if (cursor) body.lastId = cursor;
          const resp = await this._post(
            '/api/new-portal/user/agent/conversation/v1/detail',
            body,
            this._headers(agentId, conversationId)
          );
          if (!meta) meta = resp;
          const batch = Array.isArray(resp?.convs) ? resp.convs : [];
          let added = 0;
          let oldestLoaded = null;
          let maxIndex = newestIndex;
          for (const conv of batch) {
            const idx = Number(conv?.index);
            if (Number.isFinite(idx)) {
              maxIndex = Math.max(maxIndex, idx);
              if (!oldestLoaded || idx < Number(oldestLoaded.index)) oldestLoaded = conv;
            }
            const key = conv?.id || `${conv?.speaker || ''}:${idx}`;
            if (!key || seen.has(key)) continue;
            seen.add(key);
            allConvs.push(conv);
            added++;
          }
          newestIndex = maxIndex;
          if (!resp?.hasMore || !batch.length || !added || !oldestLoaded) break;
          cursor = oldestLoaded.chatRecordId || null;
          if (!cursor) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        const result = { ...(meta || {}), agentId, conversationId, convs: allConvs };
        // 详情接口不带标题，从列表缓存补上，让单条导出文件名用真实标题
        if (!result.title && convTitle) result.title = convTitle;
        return result;
      },

      _modelCache: null,

      async _ensureModelMap() {
        if (this._modelCache) return this._modelCache;
        const map = new Map();
        let offset = 0;
        while (true) {
          const body = await this._post('/api/new-portal/chat/conversation/list', {
            limit: 40,
            offset,
            modelTag: 'all',
          }, this._headers());
          const conversations = Array.isArray(body?.data) ? body.data : [];
          for (const c of conversations) {
            if (!c.id) continue;
            map.set(c.id, {
              chatModelId: c.chatModelId || '',
              funcName: c.funcName || '',
              modelId: c.modelId,
              title: c.title || '',
            });
          }
          if (!conversations.length || map.size >= Number(body?.totalCount ?? 0)) break;
          offset += conversations.length;
        }
        this._modelCache = map;
        return map;
      },

      _docRefs(docs) {
        const refs = [];
        for (const doc of (docs || [])) {
          const url = doc?.url || doc?.link || '';
          if (!url) continue;
          const rawIndex = Number(doc.index ?? doc.idx ?? refs.length + 1);
          refs.push({
            index: Number.isFinite(rawIndex) && rawIndex > 0 ? rawIndex : refs.length + 1,
            title: doc.title || doc.name || '',
            url,
          });
        }
        return refs;
      },

      _speechParts(conv) {
        const thought = [];
        const text = [];
        const refs = [];
        for (const speech of (conv?.speechesV2 || [])) {
          for (const item of (speech?.content || [])) {
            const type = item?.type || '';
            if (type === 'thought') {
              if (item.msg) thought.push(item.msg);
            } else if (type === 'text') {
              if (item.msg) text.push(item.msg);
            } else if (type === 'tool_calls') {
              try {
                const parsed = JSON.parse(item.content || '[]');
                if (Array.isArray(parsed)) refs.push(...this._docRefs(parsed));
              } catch (e) { /* 忽略解析失败 */ }
            } else if (type === 'searchGuid' || type === 'drawWithSearch') {
              if (Array.isArray(item.docs)) refs.push(...this._docRefs(item.docs));
            }
          }
        }
        return { thought: thought.join('\n\n').trim(), text: text.join('\n\n').trim(), refs };
      },

      toMarkdown(data, title, convId) {
        const { agentId, conversationId } = this._unpackId(convId || data?.conversationId || data?.id || '');
        const convs = [...(data?.convs || [])]
          .filter((c) => c && (c.speaker === 'ai' || c.speaker === 'human'))
          .sort((a, b) => (Number(a.index) || 0) - (Number(b.index) || 0));
        const modelName = data?.funcName || data?.chatModelId || data?.modelId || 'Hunyuan';
        const timeValue = convs[0]?.createTime || data?.createTime;
        const timeStr = timeValue
          ? formatLocalTime(new Date(Number(timeValue) * 1000))
          : 'unknown';
        const url = agentId && conversationId
          ? `https://${this._siteHost()}/chat/${agentId}/${conversationId}`
          : `https://${this._siteHost()}`;
        const stripHashes = (s) => String(s || '').replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const refMap = new Map();

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${url}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const conv of convs) {
          const role = String(conv.speaker || '').toLowerCase() === 'human' ? 'user' : 'assistant';
          const parts = this._speechParts(conv);
          const fallback = (conv.displayPrompt || '').trim();
          if (!parts.text && !parts.thought && !fallback) continue;
          for (const ref of parts.refs) {
            if (!refMap.has(ref.index)) refMap.set(ref.index, ref);
          }
          if (role === 'user') {
            const body = stripHashes(parts.text || fallback);
            if (!body) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(body);
            lines.push('');
          } else {
            const thoughtText = stripHashes(parts.thought);
            const responseText = stripHashes(parts.text);
            if (!thoughtText && !responseText) continue;
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thoughtText) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(thoughtText);
              lines.push('');
              if (responseText) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (responseText) {
              lines.push(responseText);
              lines.push('');
            }
          }
        }

        if (refMap.size > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          for (const [idx, ref] of [...refMap.entries()].sort((a, b) => a[0] - b[0])) {
            lines.push(ref.title ? `- [${idx}] ${ref.title} ${ref.url}` : `- [${idx}] ${ref.url}`);
          }
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[kimi]  Kimi
    // ═══════════════════════════════════════════════════════
    {
      id: 'kimi',
      name: 'Kimi',
      detect: () => window.location.hostname === 'www.kimi.com',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chat\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      _token() {
        try { return localStorage.getItem('access_token') || ''; } catch (e) { return ''; }
      },

      _headers() {
        const h = {
          'accept': '*/*',
          'content-type': 'application/json',
          'connect-protocol-version': '1',
          'x-msh-platform': 'web',
          'x-msh-version': '2.0.0',
          'r-timezone': (Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Shanghai'),
          'x-language': navigator.language || 'zh-CN',
        };
        const token = this._token();
        if (token) h['authorization'] = 'Bearer ' + token;
        return h;
      },

      async _post(path, body) {
        const r = await fetch(path, {
          method: 'POST',
          headers: this._headers(),
          body: JSON.stringify(body || {}),
        });
        if (!r.ok) throw new Error(`Kimi API ${r.status}: ${await r.text().catch(() => r.statusText)}`);
        return r.json();
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        let pageToken = '';
        let pageSize = 15;

        while (allChats.length < limit) {
          const body = {
            pageToken,
            pageSize,
            projectId: '',
            filterTypes: [1], // FEED_TYPE_CHAT
            includePinned: false,
          };
          const data = await this._post('/apiv2/kimi.gateway.feed.v1.FeedService/ListFeeds', body);
          const items = Array.isArray(data?.items) ? data.items : [];
          for (const item of items) {
            const chat = item?.chat || item?.item?.value || null;
            if (!chat?.id || seen.has(chat.id)) continue;
            seen.add(chat.id);
            allChats.push({
              id: chat.id,
              title: (chat.name || '').trim(),
              createTime: chat.createTime,
              updateTime: chat.updateTime,
              messageContent: chat.messageContent,
            });
            if (allChats.length >= limit) break;
          }

          if (onProgress) onProgress(allChats.length);
          pageToken = data?.nextPageToken || '';
          if (!pageToken || !items.length) break;
          pageSize = 50;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit);
      },

      async getConversationDetails(id) {
        const chatResp = await this._post('/apiv2/kimi.gateway.chat.v1.ChatService/GetChat', { chatId: id });
        let messages = [];
        let pageToken = '';
        const seen = new Set();

        while (true) {
          const msgResp = await this._post('/apiv2/kimi.gateway.chat.v1.ChatService/ListMessages', {
            chatId: id,
            pageSize: 100,
            pageToken,
          });
          for (const msg of (msgResp?.messages || [])) {
            if (!msg?.id || seen.has(msg.id)) continue;
            seen.add(msg.id);
            messages.push(msg);
          }
          pageToken = msgResp?.nextPageToken || '';
          if (!pageToken) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return {
          conversation_id: id,
          chatResp,
          messagesResp: { messages },
          chat: chatResp?.chat || {},
        };
      },

      _plainText(value) {
        if (!value) return '';
        if (typeof value === 'string') return value;
        if (typeof value.content === 'string') return value.content;
        if (Array.isArray(value.content)) return value.content.map((x) => this._plainText(x)).join('');
        return '';
      },

      _messageText(msg) {
        const parts = [];
        for (const block of (msg?.blocks || [])) {
          const text = this._plainText(block?.text);
          if (text) parts.push(text);
        }
        return parts.join('\n\n').trim();
      },

      _messageThink(msg) {
        const parts = [];
        for (const block of (msg?.blocks || [])) {
          const text = this._plainText(block?.think);
          if (text) parts.push(text);
        }
        return parts.join('\n\n').trim();
      },

      _citationUrl(ref) {
        const item = ref?.items?.[0];
        return item?.search?.base?.url || item?.searchResult?.base?.url || item?.base?.url || '';
      },

      _cleanCitations(text, references, citeMap) {
        if (!text) return '';
        const refByText = new Map();
        for (const ref of (references || [])) {
          if (ref?.matchedText) refByText.set(ref.matchedText, ref);
        }
        let nextNum = citeMap.nextNum || 1;
        const cleaned = text.replace(/cite[\s\S]*?/g, (marker) => {
          const ref = refByText.get(marker);
          const url = this._citationUrl(ref);
          if (!url) return '';
          if (!citeMap.urlToNum.has(url)) citeMap.urlToNum.set(url, nextNum++);
          return `[${citeMap.urlToNum.get(url)}]`;
        });
        citeMap.nextNum = nextNum;
        return cleaned;
      },

      toMarkdown(data, title, convId) {
        const chat = data?.chat || data?.chatResp?.chat || {};
        const messagesRaw = data?.messagesResp?.messages || data?.messages || [];
        const messages = [...messagesRaw]
          .filter((m) => m?.role && m.role !== 'system')
          .sort((a, b) => {
            const at = Date.parse(a.createTime || '') || 0;
            const bt = Date.parse(b.createTime || '') || 0;
            return at - bt;
          });

        const timeStr = chat.createTime
          ? formatLocalTime(new Date(chat.createTime))
          : 'unknown';
        const convUrl = convId ? `https://www.kimi.com/chat/${convId}` : 'https://www.kimi.com';
        const modelName = chat?.lastRequest?.scenario || 'Kimi';
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const citeMap = { urlToNum: new Map(), nextNum: 1 };

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const msg of messages) {
          const role = String(msg.role || '').toLowerCase();
          const text = this._messageText(msg);
          const thought = this._messageThink(msg);
          if (!text && !thought) continue;

          if (role === 'user') {
            if (!text) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          } else if (role === 'assistant') {
            const cleaned = stripHashes(this._cleanCitations(text, msg.references || [], citeMap));
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thought) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thought));
              lines.push('');
              if (cleaned) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (cleaned) {
              lines.push(cleaned);
              lines.push('');
            }
          }
        }

        if (citeMap.urlToNum.size > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          const refs = [...citeMap.urlToNum.entries()].sort((a, b) => a[1] - b[1]);
          for (const [url, idx] of refs) lines.push(`- [${idx}] ${url}`);
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[doubao]  豆包 / Dola（Dola 是豆包国际版，API 同构，一站双域，参考 hunyuan 模式）
    // ═══════════════════════════════════════════════════════
    {
      id: 'doubao',
      name: '豆包',
      detect: () => ['www.doubao.com', 'www.dola.com'].includes(window.location.hostname),

      // 当前站点 host；Node 测试环境下无 window，用 _fallbackHost（测试可覆盖为 dola）
      _fallbackHost: 'www.doubao.com',

      _siteHost() {
        return (typeof window !== 'undefined' && window.location && window.location.hostname)
          || this._fallbackHost;
      },

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chat\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      _uuid() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
        return String(Date.now()) + '-' + Math.random().toString(16).slice(2);
      },

      _headers() {
        return {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json; encoding=utf-8',
          'agw-js-conv': 'str',
        };
      },

      _endpoint(path) {
        const resources = [];
        try {
          resources.push(...performance.getEntriesByType('resource').map((e) => e.name || ''));
        } catch (e) { /* ignore */ }
        resources.push(window.location.href);

        const found = [...resources].reverse().find((u) => String(u).includes(path));
        if (found) {
          const url = new URL(found, window.location.origin);
          return url.pathname + url.search;
        }

        const sibling = [...resources].reverse().find((u) => /\/im\/(conversation\/info|chain\/single|chain\/recent_conv)/.test(String(u)));
        if (sibling) {
          const url = new URL(sibling, window.location.origin);
          return path + url.search;
        }

        // 兜底：Doubao/Dola 后端依赖这类 web 参数；完整环境下一般会走上面的 performance endpoint。
        // 豆包(CN) 与 Dola(国际版) 的 aid/region/版本号不同，按当前站点区分。
        const isDola = this._siteHost().endsWith('dola.com');
        const p = new URLSearchParams({
          version_code: '20800',
          language: (navigator.language || 'zh').split('-')[0],
          device_platform: 'web',
          doubao_device_platform: 'web',
          aid: isDola ? '495671' : '497858',
          real_aid: isDola ? '495671' : '497858',
          pkg_type: 'release_version',
          pc_version: isDola ? '3.32.3' : '3.29.13',
          doubao_pc_version: isDola ? '3.32.3' : '3.29.13',
          region: isDola ? 'JP' : 'CN',
          sys_region: isDola ? 'JP' : 'CN',
          samantha_web: '1',
          web_platform: 'browser',
          'use-olympus-account': '1',
          web_tab_id: this._uuid(),
        });
        try {
          const deviceId = localStorage.getItem('desktop_device_id') || '';
          if (deviceId) p.set('device_id', deviceId);
          const teaId = localStorage.getItem('flow_tea_user_id') || '';
          if (teaId) { p.set('web_id', teaId); p.set('tea_uuid', teaId); }
        } catch (e) { /* ignore */ }
        return path + '?' + p.toString();
      },

      async _post(path, body) {
        const r = await fetch(this._endpoint(path), {
          method: 'POST',
          credentials: 'include',
          headers: this._headers(),
          body: JSON.stringify(body || {}),
        });
        if (!r.ok) throw new Error(`Doubao API ${r.status}: ${await r.text().catch(() => r.statusText)}`);
        const data = await r.json();
        if (data?.status_code && data.status_code !== 0) {
          throw new Error(`Doubao API ${data.status_code}: ${data.status_desc || 'unknown error'}`);
        }
        return data;
      },

      _recentBody(convVersion) {
        // 豆包 IM 翻页协议（对照前端 SDK s2-lib-conversation-service）：
        // - conv_version 必须是数字：0 = 首屏（direction=3 FROM_LATEST 拉最新），非 0 = 翻页拉更旧（direction=1 OLDER）
        // - 传字符串 conv_version 会被服务端拒绝（API_712010702 系统内部异常）
        // - need_coco_* 仅首屏为 true
        const v = Number(convVersion) || 0;
        const isFirstPage = v === 0;
        return {
          cmd: 3200,
          uplink_body: {
            pull_recent_conv_chain_uplink_body: {
              limit: 20,
              message_count_per_conv: 10,
              api_version: 1,
              conv_version: v,
              direction: isFirstPage ? 3 : 1,
              option: {
                not_need_message: true,
                need_complete_conversation: true,
                need_coco_conversation: isFirstPage,
                need_coco_bot: isFirstPage,
                need_pc_pin_chain: true,
                pc_pin_query_type: 0,
              },
            },
          },
          sequence_id: this._uuid(),
          channel: 2,
          version: '1',
        };
      },

      _infoBody(id) {
        return {
          cmd: 1110,
          uplink_body: {
            get_conv_info_uplink_body: {
              conversation_id: id,
              ext: { cold_start: 'true' },
              bot_id: '',
              conversation_type: 3,
              option: { need_bot_info: true },
            },
          },
          sequence_id: this._uuid(),
          channel: 2,
          version: '1',
        };
      },

      _chainBody(id, anchorIndex, limit) {
        return {
          cmd: 3100,
          uplink_body: {
            pull_singe_chain_uplink_body: {
              conversation_id: id,
              anchor_index: anchorIndex,
              conversation_type: 3,
              direction: 1,
              limit: limit || 50,
              ext: {},
              filter: { index_list: [] },
              evaluate_ab_params: '',
              evaluate_common_params: '',
            },
          },
          sequence_id: this._uuid(),
          channel: 2,
          version: '1',
        };
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        let convVersion = 0;

        while (allChats.length < limit) {
          const data = await this._post('/im/chain/recent_conv', this._recentBody(convVersion));
          const body = data?.downlink_body?.pull_recent_conv_chain_downlink_body || {};
          const cells = Array.isArray(body.cells) ? body.cells : [];
          let added = 0;

          for (const cell of cells) {
            const conv = cell?.conversation || {};
            const id = conv.conversation_id || cell?.id;
            if (!id || seen.has(id)) continue;
            seen.add(id);
            allChats.push({
              id,
              title: (conv.name || '').trim(),
              create_time: conv.create_time,
              update_time: conv.update_time,
              bot_id: conv.bot_id,
            });
            added++;
            if (allChats.length >= limit) break;
          }

          if (onProgress) onProgress(allChats.length);
          // 无新增说明游标已到底或服务端返回重复页，立即停止防止死循环
          if (!body.has_more || !body.next_conv_version || !cells.length || !added) break;
          convVersion = body.next_conv_version;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit);
      },

      async getConversationDetails(id) {
        const conversationInfo = await this._post('/im/conversation/info', this._infoBody(id));
        const messages = [];
        const seen = new Set();
        let anchorIndex = 9007199254740991;

        while (true) {
          const chainResp = await this._post('/im/chain/single', this._chainBody(id, anchorIndex, 50));
          const body = chainResp?.downlink_body?.pull_singe_chain_downlink_body || {};
          const batch = Array.isArray(body.messages) ? body.messages : [];
          let minIndex = Infinity;
          let added = 0;

          for (const msg of batch) {
            const idx = Number(msg?.index_in_conv);
            if (Number.isFinite(idx)) minIndex = Math.min(minIndex, idx);
            if (!msg?.message_id || seen.has(msg.message_id)) continue;
            seen.add(msg.message_id);
            messages.push(msg);
            added++;
          }

          if (!body.has_more || !batch.length || !added || !Number.isFinite(minIndex) || minIndex <= 1) break;
          anchorIndex = minIndex - 1;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return {
          conversation_id: id,
          conversationInfo,
          chainSingle: {
            ...conversationInfo,
            downlink_body: {
              pull_singe_chain_downlink_body: { messages, has_more: false },
            },
          },
          conversation: conversationInfo?.downlink_body?.get_conv_info_downlink_body?.conversation_info || {},
        };
      },

      _textFromBlock(block) {
        const text = block?.content?.text_block?.text;
        return typeof text === 'string' ? text.trim() : '';
      },

      _searchRefsFromBlock(block) {
        const results = block?.content?.search_query_result_block?.results || [];
        const refs = [];
        for (const r of results) {
          const card = r?.text_card || r?.image_card || r?.video_card || null;
          const url = card?.url || '';
          if (!url) continue;
          refs.push({ title: card?.title || '', url });
        }
        return refs;
      },

      _messageParts(msg) {
        const blocks = msg?.content_block || [];
        const textBlocks = blocks
          .filter((b) => b?.content?.text_block)
          .map((b) => this._textFromBlock(b))
          .filter(Boolean);
        const hasThinkingBlock = blocks.some((b) => b?.content?.thinking_block || b?.block_type === 10040);
        const refs = [];
        for (const block of blocks) refs.push(...this._searchRefsFromBlock(block));

        if (String(msg?.user_type) === '2' && hasThinkingBlock && textBlocks.length > 1) {
          return {
            thought: textBlocks.slice(0, -1).join('\n\n').trim(),
            text: textBlocks[textBlocks.length - 1] || '',
            refs,
          };
        }
        return { thought: '', text: textBlocks.join('\n\n').trim(), refs };
      },

      toMarkdown(data, title, convId) {
        const conv = data?.conversation || data?.conversationInfo?.downlink_body?.get_conv_info_downlink_body?.conversation_info || {};
        const rawMessages = data?.chainSingle?.downlink_body?.pull_singe_chain_downlink_body?.messages || data?.messages || [];
        const messages = [...rawMessages]
          .filter((m) => m?.message_id)
          .sort((a, b) => (Number(a.index_in_conv) || 0) - (Number(b.index_in_conv) || 0));

        const timeStr = conv.create_time
          ? formatLocalTime(new Date(Number(conv.create_time) * 1000))
          : 'unknown';
        const convUrl = convId ? `https://${this._siteHost()}/chat/${convId}` : `https://${this._siteHost()}`;
        const modelName = conv?.conv_extra?.inner_bot_name || conv?.tags?.[0]
          || (this._siteHost().endsWith('dola.com') ? 'Dola' : '豆包');
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const urlToRef = new Map();

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const msg of messages) {
          const role = String(msg.user_type) === '1' ? 'user' : String(msg.user_type) === '2' ? 'assistant' : 'other';
          if (role === 'other') continue;
          const parts = this._messageParts(msg);
          if (!parts.text && !parts.thought) continue;

          for (const ref of parts.refs || []) {
            if (ref.url && !urlToRef.has(ref.url)) urlToRef.set(ref.url, ref.title || '');
          }

          if (role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(parts.text));
            lines.push('');
          } else {
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (parts.thought) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(parts.thought));
              lines.push('');
              if (parts.text) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (parts.text) {
              lines.push(stripHashes(parts.text));
              lines.push('');
            }
          }
        }

        if (urlToRef.size > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          let i = 1;
          for (const [url, refTitle] of urlToRef.entries()) {
            lines.push(refTitle ? `- [${i}] ${refTitle} ${url}` : `- [${i}] ${url}`);
            i++;
          }
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[minimax]  MiniMax Agent — 海外版 agent.minimax.io / 国内版 agent.minimaxi.com
    //  两端 API 完全同构（已从两端前端 webpack 模块逐项确认）：
    //  接口：会话树 GET /minimax-cloud/api/v1/sidebar/session/tree
    //        会话信息 GET /minimax-cloud/api/v1/session/{id}
    //        消息     GET /minimax-cloud/api/v1/session/{id}/message?limit=80
    //  鉴权：token 头 + query token（localStorage _token / user_detail_agent.token）
    //        x-signature = md5(x-timestamp + "I*7Cf%WZ#S&%1RlZJ&C2" + body)（GET 无 body）
    //        yy 头服务端不校验（实测任意值 200），用固定占位即可
    //  差异：国内版 sys_language/lang 为 zh（REGION=cn），海外版为 en（REGION=en）
    //  海外版已用真实浏览器 + 真实会话 430078672212281 实测；国内版因无账号未实测消息接口。
    // ═══════════════════════════════════════════════════════
    {
      id: 'minimax',
      name: 'MiniMax',
      detect: () => ['agent.minimax.io', 'agent.minimaxi.com'].includes(window.location.hostname),

      // 当前站点 host；Node 测试环境下无 window，用 _fallbackHost（默认海外版）
      _fallbackHost: 'agent.minimax.io',

      _siteHost() {
        return (typeof window !== 'undefined' && window.location && window.location.hostname)
          || this._fallbackHost;
      },

      getCurrentConversationId: () => {
        const m = window.location.search.match(/[?&]id=([^&]+)/);
        return m ? decodeURIComponent(m[1]) : null;
      },

      _token() {
        try {
          const ud = JSON.parse(localStorage.getItem('user_detail_agent') || '{}');
          return ud.token || localStorage.getItem('_token') || '';
        } catch (e) {
          return '';
        }
      },

      // 构造页面同款 web query 参数（复刻前端 mC 逻辑，实测缺参数会 401）
      _webParams() {
        const now = Date.now();
        let ud = {};
        try { ud = JSON.parse(localStorage.getItem('user_detail_agent') || '{}'); } catch (e) { /* ignore */ }
        const zh = this._siteHost().endsWith('minimaxi.com'); // 国内版 REGION=cn → zh
        const p = new URLSearchParams({
          device_platform: 'web',
          biz_id: '3',
          app_id: '3001',
          version_code: '22201',
          timezone_offset: String(-60 * new Date().getTimezoneOffset()),
          sys_language: zh ? 'zh' : 'en',
          lang: zh ? 'zh' : 'en',
          uuid: localStorage.getItem('UNIQUE_USER_ID') || '',
          device_id: sessionStorage.getItem('tab_device_id') || '',
          os_name: navigator.userAgent.includes('Win') ? 'Windows' : navigator.userAgent.includes('Mac') ? 'macOS' : 'unknown',
          browser_name: navigator.userAgent.includes('Firefox') ? 'Firefox' : navigator.userAgent.includes('Chrome') ? 'Chrome' : 'unknown',
          browser_language: navigator.language || '',
          browser_platform: navigator.platform || '',
          user_id: ud.realUserID || '0',
          screen_width: String(screen.width || 0),
          screen_height: String(screen.height || 0),
          unix: String(now),
          token: this._token(),
          client: 'web',
        });
        return p.toString();
      },

      // 优先复用页面已加载的真实 endpoint（含合法参数），只刷新 session id / token / unix；
      // 兜底自行拼参数。
      _endpoint(path) {
        const resources = [];
        try {
          resources.push(...performance.getEntriesByType('resource').map((e) => e.name || ''));
        } catch (e) { /* ignore */ }
        const found = [...resources].reverse().find((u) => String(u).includes('/minimax-cloud/api/v1/'));
        const now = Date.now();
        if (found) {
          try {
            const url = new URL(found, window.location.origin);
            url.pathname = path;
            url.searchParams.set('unix', String(now));
            url.searchParams.set('token', this._token());
            return url.pathname + url.search;
          } catch (e) { /* ignore */ }
        }
        return path + '?' + this._webParams();
      },

      async _get(url) {
        const ts = Math.floor(Date.now() / 1000);
        const sig = this._md5(String(ts) + 'I*7Cf%WZ#S&%1RlZJ&C2');
        const r = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            token: this._token(),
            yy: '9d285808f21a907f949225cffeb77556',
            'x-timestamp': String(ts),
            'x-signature': sig,
          },
        });
        if (!r.ok) throw new Error(`MiniMax API ${r.status}: ${await r.text().catch(() => r.statusText)}`);
        const data = await r.json();
        if (data?.base_resp && data.base_resp.status_code !== 0) {
          throw new Error(`MiniMax API ${data.base_resp.status_code}: ${data.base_resp.status_msg || 'unknown error'}`);
        }
        return data;
      },

      async getAllConversations(onProgress) {
        const all = [];
        const seen = new Set();
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        let cursor = '';

        while (all.length < limit) {
          let url = this._endpoint('/minimax-cloud/api/v1/sidebar/session/tree');
          if (cursor) url += (url.includes('?') ? '&' : '?') + 'cursor=' + encodeURIComponent(cursor);
          const data = await this._get(url);
          const sessions = Array.isArray(data.sessions) ? data.sessions : [];
          let added = 0;

          for (const item of sessions) {
            const s = item?.session || item || {};
            const id = s.session_id;
            if (!id || seen.has(id)) continue;
            seen.add(id);
            all.push({
              id,
              title: (s.title || '').trim() || id,
              created_at: s.created_at,
              updated_at: s.updated_at,
              model: s.model?.model_id || '',
              archived: !!s.archived,
            });
            added++;
            if (all.length >= limit) break;
          }

          if (onProgress) onProgress(all.length);
          if (!data.has_more || !data.next_cursor || !sessions.length || !added) break;
          cursor = data.next_cursor;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit);
      },

      async getConversationDetails(id) {
        const sessionResp = await this._get(this._endpoint(`/minimax-cloud/api/v1/session/${id}`));
        const messages = [];
        const seen = new Set();
        let cursor = '';

        while (true) {
          let url = this._endpoint(`/minimax-cloud/api/v1/session/${id}/message`);
          url += (url.includes('?') ? '&' : '?') + 'limit=80';
          if (cursor) url += '&cursor=' + encodeURIComponent(cursor);
          const data = await this._get(url);
          const batch = Array.isArray(data.messages) ? data.messages : [];
          let added = 0;

          for (const m of batch) {
            if (!m?.msg_id || seen.has(m.msg_id)) continue;
            seen.add(m.msg_id);
            messages.push(m);
            added++;
          }

          if (!data.has_more || !data.next_cursor || !batch.length || !added) break;
          cursor = data.next_cursor;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        messages.sort((a, b) => (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0));
        return {
          conversation_id: id,
          sessionInfo: sessionResp,
          messages,
          session: sessionResp?.session || {},
        };
      },

      toMarkdown(data, title, convId) {
        const session = data?.session || data?.sessionInfo?.session || {};
        // msg_type: 1 正常消息；2 为中间态/被替代的回复（与最终回复开头重复），跳过
        const messages = (Array.isArray(data?.messages) ? data.messages : [])
          .filter((m) => m?.msg_content && Number(m.msg_type) === 1);

        const timeStr = session.created_at
          ? formatLocalTime(new Date(Number(session.created_at)))
          : 'unknown';
        const convUrl = convId ? `https://${this._siteHost()}/mavis?id=${convId}` : `https://${this._siteHost()}`;
        const modelName = session?.model?.model_id || session?.model?.provider_id || 'MiniMax';
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const msg of messages) {
          const role = msg.role === 'user' ? 'user' : msg.role === 'assistant' ? 'assistant' : 'other';
          if (role === 'other') continue;
          const text = String(msg.msg_content || '').trim();
          if (!text) continue;

          if (role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          } else {
            lines.push('### 🤖 Assistant');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          }
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },

      // ---- MD5（RFC1321 风格公开实现，Public Domain；与 chatglm 适配器同款）----
      _md5(s) {
        function md5cycle(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586); c = ff(c, d, a, b, k[2], 17, 606105819); b = ff(b, c, d, a, k[3], 22, -1044525330);
          a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12, 1200080426); c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983);
          a = ff(a, b, c, d, k[8], 7, 1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417); c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162);
          a = ff(a, b, c, d, k[12], 7, 1804603682); d = ff(d, a, b, c, k[13], 12, -40341101); c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22, 1236535329);
          a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632); c = gg(c, d, a, b, k[11], 14, 643717713); b = gg(b, c, d, a, k[0], 20, -373897302);
          a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9, 38016083); c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848);
          a = gg(a, b, c, d, k[9], 5, 568446438); d = gg(d, a, b, c, k[14], 9, -1019803690); c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20, 1163531501);
          a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784); c = gg(c, d, a, b, k[7], 14, 1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734);
          a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463); c = hh(c, d, a, b, k[11], 16, 1839030562); b = hh(b, c, d, a, k[14], 23, -35309556);
          a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11, 1272893353); c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640);
          a = hh(a, b, c, d, k[13], 4, 681279174); d = hh(d, a, b, c, k[0], 11, -358537222); c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23, 76029189);
          a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835); c = hh(c, d, a, b, k[15], 16, 530742520); b = hh(b, c, d, a, k[2], 23, -995338651);
          a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10, 1126891415); c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055);
          a = ii(a, b, c, d, k[12], 6, 1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606); c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799);
          a = ii(a, b, c, d, k[8], 6, 1873313359); d = ii(d, a, b, c, k[15], 10, -30611744); c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21, 1309151649);
          a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379); c = ii(c, d, a, b, k[2], 15, 718787259); b = ii(b, c, d, a, k[9], 21, -343485551);
          x[0] = add32(a, x[0]); x[1] = add32(b, x[1]); x[2] = add32(c, x[2]); x[3] = add32(d, x[3]);
        }
        function cmn(q, a, b, x, s, t) { a = add32(add32(a, q), add32(x, t)); return add32(a << s | a >>> (32 - s), b); }
        function ff(a, b, c, d, x, s, t) { return cmn(b & c | ~b & d, a, b, x, s, t); }
        function gg(a, b, c, d, x, s, t) { return cmn(b & d | c & ~d, a, b, x, s, t); }
        function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
        function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
        function md51(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
          for (i = 64; i <= s.length; i += 64) { md5cycle(state, md5blk(s.substring(i - 64, i))); }
          s = s.substring(i - 64);
          var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          tail[i >> 2] |= 0x80 << (i % 4 << 3);
          if (i > 55) { md5cycle(state, tail); tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }
          tail[14] = n * 8;
          md5cycle(state, tail);
          return state;
        }
        function md5blk(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          return md5blks;
        }
        function rhex(n) { var s = '', j; for (j = 0; j < 4; j++) s += hex_chr[n >> (j * 8 + 4) & 15] + hex_chr[n >> (j * 8) & 15]; return s; }
        function hex(x) { for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]); return x.join(''); }
        function add32(a, b) { return a + b & 4294967295; }
        var hex_chr = '0123456789abcdef'.split('');
        return hex(md51(s));
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[copilot]  Microsoft Copilot (copilot.microsoft.com)
    // ═══════════════════════════════════════════════════════
    {
      id: 'copilot',
      name: 'Microsoft Copilot',
      detect: () => window.location.hostname === 'copilot.microsoft.com',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/chats\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      /**
       * 从 MSAL localStorage 缓存中提取 Bearer token。
       * MSAL.js v2 将 token 存储在 localStorage，key 包含 |accesstoken|，
       * value 为 JSON 对象，secret 字段即 Bearer token。
       */
      _token() {
        try {
          let fallback = '';
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key || !key.includes('accesstoken')) continue;
            const raw = localStorage.getItem(key);
            if (!raw) continue;
            const parsed = JSON.parse(raw);
            if (!parsed.secret) continue;
            // 优先返回 copilot API 需要的 ChatAI.ReadWrite scope 的 token
            const target = (parsed.target || '').toLowerCase();
            if (target.includes('chatai.readwrite')) {
              return parsed.secret;
            }
            // 兜底：记录第一个有效的 token
            if (!fallback) fallback = parsed.secret;
          }
          return fallback;
        } catch (e) { /* ignore */ }
        return '';
      },

      _headers() {
        const h = { 'accept': '*/*' };
        const token = this._token();
        if (token) h['authorization'] = 'Bearer ' + token;
        return h;
      },



      async getAllConversations(onProgress) {
        const allChats = [];
        let cursor = '';
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (allChats.length < limit) {
          const params = new URLSearchParams({
            cursor: cursor,
            types: 'chat,character,xbox,group',
            features: 'anonymous-block-page',
            setflight: 'anonymous-block-page',
          });
          const url = `/c/api/conversations?${params}`;
          const r = await fetch(url, { headers: this._headers() });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          const items = body?.results || [];
          if (!items.length) break;

          allChats.push(...items);
          if (onProgress) onProgress(allChats.length);

          if (!body.next) break;
          cursor = body.next;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit).map((c) => ({
          id: c.id || '',
          title: (c.title || '').trim(),
          updated_at: c.updatedAt,
        }));
      },

      async getConversationDetails(id) {
        const params = new URLSearchParams({
          'api-version': '2',
          'features': 'anonymous-block-page',
          'setflight': 'anonymous-block-page',
        });
        const url = `/c/api/conversations/${encodeURIComponent(id)}/history?${params}`;
        const r = await fetch(url, { headers: this._headers() });
        if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
        const data = await r.json();

        // 从对话元数据 API 获取标题，供文件命名用
        try {
          const metaR = await fetch(`/c/api/conversations/${encodeURIComponent(id)}`, { headers: this._headers() });
          if (metaR.ok) {
            const meta = await metaR.json();
            if (meta.title) data.title = meta.title;
          }
        } catch (e) { /* 标题不影响核心导出 */ }

        return data;
      },

      /** 将 copilot 聊天数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const results = data?.results || [];
        if (!results.length) throw new Error('无消息数据');

        // API 返回 newest-first，翻转成时间正序
        const messages = [...results].reverse();

        const modelName = 'Microsoft Copilot';

        // 取最早消息的时间作为对话创建时间
        const firstMsg = messages[0];
        const timeStr = firstMsg?.createdAt
          ? formatLocalTime(new Date(firstMsg.createdAt))
          : 'unknown';
        const convUrl = convId
          ? `https://copilot.microsoft.com/chats/${convId}`
          : 'https://copilot.microsoft.com';

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push(`- **Model:** \`${modelName}\``);
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const msg of messages) {
          const authorType = msg?.author?.type;
          const contentItems = msg?.content || [];

          // 拼接所有 content 中的文本片段
          let text = '';
          for (const c of contentItems) {
            if (c.type === 'text' && c.text) {
              text += c.text;
            }
          }
          text = text.trim();
          if (!text) continue;

          if (authorType === 'human') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          } else if (authorType === 'ai') {
            lines.push('### 🤖 Assistant');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          }
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[aistudio]  Google AI Studio
    // ═══════════════════════════════════════════════════════
    // 两个 API 都走 gRPC-web JSON+protobuf：
    //   - 列表：ListPrompts → [100, ''] 返回全部提示（无 DOM）
    //   - 单条：ResolveDriveResource → [id] 返回完整对话
    // 请求在页面上下文中通过 XMLHttpRequest（withCredentials=true）执行，
    // 浏览器自动处理 Cookie + CORS。SAPISIDHASH 从 document.cookie 实时计算。
    {
      id: 'aistudio',
      name: 'Google AI Studio',
      detect: () => window.location.hostname === 'aistudio.google.com',

      getCurrentConversationId: () => {
        // 多账号切换后 URL 会带 /u/<n>/ 前缀（如 /u/1/prompts/<id>）
        const m1 = window.location.pathname.match(/^\/u\/\d+\/prompts\/([^\/?]+)/);
        const m2 = window.location.pathname.match(/^\/prompts\/([^\/?]+)/);
        const match = m1 || m2;
        if (!match) return null;
        // /prompts/new_chat 是默认页，不是真实对话 ID
        if (match[1] === 'new_chat') return null;
        return match[1];
      },

      /**
       * 对话列表：通过 ListPrompts API 分页获取（纯 CURL 方式，无 DOM 解析）。
       * 响应格式：[prompts[], nextPageToken?]
       *   prompts 各元素: ["prompts/{id}", ..., [title, ...], ...]
       *   nextPageToken: "~!!~BASE64" 或 undefined（末页）
       */
      async getAllConversations(onProgress) {
        const chats = [];
        let pageToken = '';

        while (true) {
          const body = pageToken ? [100, pageToken] : [100, ''];
          const raw = await this._rpc('ListPrompts', body);
          const list = Array.isArray(raw) ? raw : [];
          const prompts = list.length > 0 && Array.isArray(list[0]) ? list[0] : [];

          for (const item of prompts) {
            if (!Array.isArray(item)) continue;
            const resourceName = item[0];
            if (typeof resourceName !== 'string') continue;
            const id = resourceName.replace('prompts/', '');
            if (!id) continue;
            const title = Array.isArray(item[4]) && typeof item[4][0] === 'string'
              ? item[4][0]
              : '';
            // 时间戳：item[4][4][0] = [seconds, nanos]（Google Timestamp 格式），normalizeTimestamp 可解析
            const tsArr = Array.isArray(item[4]) && Array.isArray(item[4][4])
              ? item[4][4][0]
              : null;
            chats.push({ id, title, updated_at: tsArr });
          }

          if (onProgress) onProgress(chats.length);

          // 检查是否有下一页
          const nextToken = list[1];
          if (!nextToken || typeof nextToken !== 'string' || !nextToken.includes('~!!~')) break;
          pageToken = nextToken;

          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return chats;
      },

      /** 单条对话：用 XHR 调 ResolveDriveResource API */
      async getConversationDetails(id) {
        const raw = await this._rpc('ResolveDriveResource', [id]);
        return this._parseConversation(raw, id);
      },

      toMarkdown(data, title, convId) {
        const messages = data?.messages || [];
        const modelName = data?.modelName || 'Gemini';
        const timeStr = formatLocalTime(new Date());
        // 保留 /u/<n>/ 前缀，保证点开 URL 落在正确的 Google 账号上
        const authUser = this._authUserFromUrl();
        const base = authUser && authUser !== '0'
          ? 'https://aistudio.google.com/u/' + authUser
          : 'https://aistudio.google.com';
        const convUrl = convId ? base + '/prompts/' + convId : base;

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + modelName + '`');
        lines.push('- **Time:** ' + timeStr);
        lines.push('- **URL:** ' + convUrl);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (let i = 0; i < messages.length; i++) {
          const msg = messages[i];
          const prev = i > 0 ? messages[i-1] : null;
          const isContinuedModel = (msg.role === 'model' || msg.role === 'assistant') && prev && (prev.role === 'model' || prev.role === 'assistant');

          // 消息体中的 # 标题 → **加粗**（代码块内的不转）
          function convertHeadings(text) {
            return text.replace(/^(#{1,6})\s+(.+)$/gm, (m, hashes, content) => '**' + content.trim() + '**');
          }
          function convertParts(parts) {
            return parts.map(p => ({ ...p, text: convertHeadings(p.text) }));
          }
          const tp = convertParts(msg.parts.filter(p => p.type === 'thought'));
          const tx = convertParts(msg.parts.filter(p => p.type === 'text'));

          if (msg.role === 'user') {
            lines.push('### \u{1F9D1}\u{200D}\u{1F4BB} User');
            lines.push('');
            for (const part of tx) lines.push(part.text);
            lines.push('');
          } else if (msg.role === 'system') {
            lines.push('### \u{2699}\u{FE0F} System');
            lines.push('');
            for (const part of tx) lines.push(part.text);
            lines.push('');
          } else {
            if (!isContinuedModel) {
              lines.push('### \u{1F916} Assistant');
              lines.push('');
            }

            if (tp.length > 0) {
              lines.push('#### \u{1F914} Thought Process');
              lines.push('');
              for (const part of tp) lines.push(part.text);
              lines.push('');

              if (tx.length > 0) {
                lines.push('#### \u{1F4A1} Response');
                lines.push('');
                for (const part of tx) lines.push(part.text);
                lines.push('');
              }
            } else if (isContinuedModel && tx.length > 0) {
              lines.push('#### \u{1F4A1} Response');
              lines.push('');
              for (const part of tx) lines.push(part.text);
              lines.push('');
            } else {
              for (const part of tx) lines.push(part.text);
            }

            if (!isContinuedModel) {
              lines.push('');
            }
          }
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },

      // ──── RPC 调用 ────

      /** SAPISID cookie 值（读写缓存用） */
      _sapisid: '',

      /** 从 Cookie 中读取 SAPISID 值 */
      _getSAPISID() {
        if (this._sapisid) return this._sapisid;
        const cookies = document.cookie.split(';').map(c => c.trim());
        for (const c of cookies) {
          if (c.startsWith('SAPISID=')) {
            this._sapisid = c.substring(8);
            return this._sapisid;
          }
        }
        return '';
      },

      /** 从 URL /u/<n>/ 前缀提取 Google 账号索引（无前缀或非浏览器环境默认 0） */
      _authUserFromUrl() {
        try {
          const m = window.location.pathname.match(/^\/u\/(\d+)\//);
          return m ? m[1] : '0';
        } catch (e) {
          return '0';
        }
      },

      /** 实时计算 SAPISIDHASH */
      async _computeSAPISIDHash() {
        const sapisid = this._getSAPISID();
        if (!sapisid) throw new Error('SAPISID cookie 不可用');
        const ts = Math.floor(Date.now() / 1000);
        const origin = 'https://aistudio.google.com';
        const msg = ts + ' ' + sapisid + ' ' + origin;
        const enc = new TextEncoder().encode(msg);
        const buf = await crypto.subtle.digest('SHA-1', enc);
        const hash = Array.from(new Uint8Array(buf))
          .map(b => b.toString(16).padStart(2, '0')).join('');
        return ts + '_' + hash;
      },

      /** 从页面的 JSON config 中提取 API key（不硬编码） */
      _getApiKey() {
        if (this._apiKey) return this._apiKey;
        for (const s of document.scripts) {
          if (s.type === 'application/json') {
            try {
              const data = JSON.parse(s.textContent);
              if (data.WIu0Nc) {
                this._apiKey = data.WIu0Nc;
                return this._apiKey;
              }
            } catch {}
          }
        }
        throw new Error('API key 未找到：页面 JSON config 结构可能已变更');
      },

      /** 调用 Google AI Studio RPC API */
      async _rpc(method, body) {
        const sapisidHash = await this._computeSAPISIDHash();
        const apiKey = this._getApiKey();

        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST',
            'https://alkalimakersuite-pa.clients6.google.com/'
            + '$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/'
            + method
          );
          xhr.withCredentials = true;
          xhr.setRequestHeader('Content-Type', 'application/json+protobuf');
          xhr.setRequestHeader('X-Goog-Api-Key', apiKey);
          xhr.setRequestHeader('X-Goog-AuthUser', this._authUserFromUrl());
          xhr.setRequestHeader('Authorization', 'SAPISIDHASH ' + sapisidHash);

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                resolve(JSON.parse(xhr.responseText));
              } catch (e) {
                reject(new Error('响应解析失败: ' + e.message));
              }
            } else {
              reject(new Error('API ' + xhr.status + ': ' + xhr.responseText.substring(0, 200)));
            }
          };
          xhr.onerror = () => reject(new Error('API 网络错误'));
          xhr.send(JSON.stringify(body));
        });
      },

      /** 从 ResolveDriveResource 响应中提取消息 */
      _parseConversation(raw, id) {
        // 响应格式：[[实际数据...]] —— 外层数组包一层
        // 实际数据：
        // [
        //   0: "prompts/{id}"  (resource name)
        //   1: null
        //   2: null
        //   3: [..., "models/gemini-xxx", ...]  (model info)
        //   4: ["标题", ...]  (title + author info)
        //   ...
        //   12: ["系统提示文本"]  (system prompt)
        //   13: [  (conversation turns)
        //     [
        //       ["用户消息", ..., "user", ...],
        //       ["模型回复", ...]
        //     ]
        //   ]
        // ]
        // 注意：外层可能有一层包装数组
        let arr = Array.isArray(raw) ? raw : [];
        // 解一层包装
        if (arr.length === 1 && Array.isArray(arr[0])) arr = arr[0];

        // 模型名 —— arr[3][2] = "models/gemini-3.1-pro-preview"
        let modelName = 'Gemini';
        if (Array.isArray(arr[3]) && typeof arr[3][2] === 'string') {
          modelName = arr[3][2].replace('models/', '');
        }

        // 标题 —— arr[4][0]
        let title = '';
        if (Array.isArray(arr[4]) && typeof arr[4][0] === 'string') {
          title = arr[4][0];
        }

        // 系统提示 —— arr[12]
        const systemPrompt = Array.isArray(arr[12]) ? arr[12].filter(s => typeof s === 'string') : [];

        // 对话轮次 —— arr[13]
        const messages = [];
        const turnGroups = Array.isArray(arr[13]) ? arr[13] : [];

        if (systemPrompt.length > 0) {
          messages.push({ role: 'system', parts: systemPrompt.map(t => ({ type: 'text', text: t })) });
        }

        for (const group of turnGroups) {
          if (!Array.isArray(group)) continue;
          let prevWasUser = false;
          for (const msgArr of group) {
            if (!Array.isArray(msgArr)) continue;
            // 消息文本在 index 0
            const text = typeof msgArr[0] === 'string' ? msgArr[0] : '';
            if (!text || text.length < 2) continue;
            // 角色：index 8 通常是 "user"，model 没有此标记
            const role = msgArr[8] === 'user' ? 'user' : 'model';

            // 判断是否为思考过程：
            // 模型消息，以 ** 开头，且内容含分析/评估类关键词
            let partType = 'text';
            if (role === 'model' && /^\s*\*\*/.test(text)) {
              const firstLine = text.split('\n')[0].replace(/\*\*/g, '').trim().toLowerCase();
              if (/^(assess|evaluat|analyz|consider|classify|identif|defin|determin|reflect|break down|dissect|categoriz|think|thought|构思|评估|分析|思考|拆解)/.test(firstLine)) {
                partType = 'thought';
              }
            }

            messages.push({
              role,
              parts: [{ type: partType, text: text.trim() }],
            });
            prevWasUser = (role === 'user');
          }
        }

        // 如果没找到对话，全量扫描
        if (messages.length === 0) {
          this._scanAllStrings(arr, messages);
        }

        return { messages, modelName, title, promptId: id };
      },

      /** 兜底：全量扫描所有长文本 */
      _scanAllStrings(data, result) {
        if (!data || typeof data !== 'object') return;
        if (Array.isArray(data)) {
          for (const item of data) {
            if (typeof item === 'string' && item.length > 100 && item.length < 500000) {
              result.push({ role: 'model', parts: [{ type: 'text', text: item }] });
            } else if (Array.isArray(item)) {
              this._scanAllStrings(item, result);
            }
          }
        }
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[openai]  OpenAI ChatGPT
    // ═══════════════════════════════════════════════════════
    // 两个 API 都是同源 /backend-api/*，页面 fetch 自动带 cookie；
    // 认证头优先从 /api/auth/session 拿 accessToken，失败再扫 localStorage。
    {
      id: 'openai',
      name: 'OpenAI ChatGPT',
      detect: () => window.location.hostname === 'chatgpt.com',

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/c\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      /** 从 /api/auth/session 或 localStorage 中提取 accessToken */
      async _token() {
        try {
          const r = await fetch('/api/auth/session', { headers: { 'accept': 'application/json' } });
          const d = await r.json();
          if (d && d.accessToken) return d.accessToken;
        } catch (e) { /* 忽略 */ }
        try {
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key) continue;
            const raw = localStorage.getItem(key);
            if (!raw || !raw.includes('accessToken')) continue;
            const parsed = JSON.parse(raw);
            if (parsed && parsed.accessToken) return parsed.accessToken;
          }
        } catch (e) { /* 忽略 */ }
        return '';
      },

      async _headers() {
        const h = { 'accept': '*/*' };
        const token = await this._token();
        if (token) h['authorization'] = 'Bearer ' + token;
        return h;
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        const pageSize = 100; // 服务端支持一页 100 条（实测可一次拿全）；超大账号仍会循环翻页
        let offset = 0;
        const headers = await this._headers();

        while (allChats.length < limit) {
          const params = new URLSearchParams({
            offset: String(offset),
            limit: String(pageSize),
            order: 'updated',
            is_archived: 'false',
            is_starred: 'false',
          });
          const r = await fetch(`/backend-api/conversations?${params}`, { headers });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          const items = body.items || [];
          if (!items.length) break;

          allChats.push(...items);
          if (onProgress) onProgress(allChats.length);

          // 注意：服务端 total 随 offset 漂移（非真实总数），不能作为停止条件
          if (items.length < pageSize) break;  // 不足一页 = 到底了
          offset += items.length;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit).map((c) => ({
          id: c.id || '',
          title: (c.title || '').trim(),
          create_time: c.create_time,
          update_time: c.update_time,
        })).filter((c) => c.id);
      },

      async getConversationDetails(id) {
        const headers = await this._headers();
        const r = await fetch(`/backend-api/conversation/${encodeURIComponent(id)}`, { headers });
        if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
        return r.json();
      },

      /** 提取一条消息的可导出正文（跳过工具调用/代码执行） */
      _messageText(m) {
        const c = m.content;
        if (!c) return '';
        if (typeof c === 'string') return c; // 旧格式兜底
        if (c.content_type === 'text' && Array.isArray(c.parts)) {
          // parts 可能是字符串，也可能是 {text, ...} 对象
          return c.parts.map((p) => (typeof p === 'string' ? p : (p && p.text) || '')).join('');
        }
        // content_type === 'code'（工具调用 search/browser 等）不导出
        return '';
      },

      /** 将 ChatGPT 对话数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const mapping = data.mapping || {};
        const messages = Object.values(mapping)
          .filter((n) => n && n.message && n.message.author)
          .map((n) => n.message)
          .sort((a, b) => (a.create_time ?? 0) - (b.create_time ?? 0));
        if (!messages.length) throw new Error('未找到消息数据');

        // 模型名：优先取真实模型 slug（default_model_slug 常为 'auto'）
        let model = data.default_model_slug || '';
        if (!model || model === 'auto') {
          const firstAssistant = messages.find((m) => m.author.role === 'assistant');
          model = (firstAssistant?.metadata && firstAssistant.metadata.model_slug) || '';
        }
        model = model || 'unknown';

        const createTime = data.create_time;
        const timeStr = createTime
          ? formatLocalTime(new Date(createTime * 1000))
          : 'unknown';
        const convUrl = convId
          ? `https://chatgpt.com/c/${convId}`
          : 'https://chatgpt.com';

        // markdown 井号标题 → 加粗（保留突出感，不破坏标题层级）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, (m, c) => {
          const inner = c.trim();
          return '**' + inner + (inner.endsWith('**') ? '' : '**');
        });
        // 去掉 canvas 标记行（:::writing{...} 等）
        const stripCanvas = (s) => s.split('\n').filter((l) => !/^:::/.test(l.trim())).join('\n');
        const clean = (s) => stripCanvas(stripHashes(s)).trim();

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + model + '`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const m of messages) {
          const role = m.author.role;
          let text = this._messageText(m);

          // 引用占位符（\uE000cite\uE002turn0search0\uE001）→ [N]，并收集 References
          let refs = [];
          const meta = m.metadata;
          if (meta && Array.isArray(meta.content_references)) {
            for (const ref of meta.content_references) {
              const mt = ref.matched_text;
              if (!mt || !mt.includes('cite')) continue; // 跳过 sources_footnote 等
              if (!text.includes(mt)) continue;
              const n = refs.length + 1;
              refs.push({
                n,
                title: (ref.items?.[0]?.title || '').trim(),
                url: ref.items?.[0]?.url || ref.safe_urls?.[0] || '',
              });
              text = text.split(mt).join(`[${n}]`);
            }
          }

          text = clean(text);
          if (!text) continue;

          if (role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(text);
            lines.push('');
          } else if (role === 'assistant') {
            lines.push('### 🤖 Assistant');
            lines.push('');
            lines.push(text);
            lines.push('');
            // 该消息引用列表
            if (refs.length) {
              lines.push('#### References');
              lines.push('');
              for (const r of refs) {
                lines.push(r.url ? `- [${r.n}] ${r.title} (${r.url})` : `- [${r.n}] ${r.title}`);
              }
              lines.push('');
            }
          }
          // system / tool 消息不导出
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[grok]  Grok (x.com)
    // ═══════════════════════════════════════════════════════
    // 两个 API 都是 x.com 的 GraphQL 接口：
    //   - 列表：GrokHistory，cursor 分页（variables.cursor，base64 游标）
    //   - 单条：GrokConversationItemsByRestId，同样支持 cursor 翻页
    // 认证：X 公共 Bearer token（硬编码）+ cookie 里的 ct0 作为 x-csrf-token。
    {
      id: 'grok',
      name: 'Grok',
      detect: () => window.location.hostname === 'x.com',

      _headers() {
        let ct0 = '';
        try {
          const m = document.cookie.match(/ct0=([^;]+)/);
          if (m) ct0 = m[1];
        } catch (e) { /* ignore */ }
        return {
          'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
          'x-csrf-token': ct0,
          'x-twitter-auth-type': 'OAuth2Session',
          'content-type': 'application/json',
          'accept': '*/*',
        };
      },

      getCurrentConversationId: () => {
        const m = window.location.search.match(/[?&]conversation=(\d+)/);
        return m ? m[1] : null;
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        const headers = this._headers();
        let cursor = null;

        while (allChats.length < limit) {
          const variables = cursor ? { cursor } : {};
          const url = `/i/api/graphql/9Hyh5D4-WXLnExZkONSkZg/GrokHistory?variables=${encodeURIComponent(JSON.stringify(variables))}`;
          const r = await fetch(url, { headers });
          if (!r.ok) throw new Error(`列表API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          const history = body?.data?.grok_conversation_history;
          const items = history?.items || [];
          if (!items.length) break;

          allChats.push(...items);
          if (onProgress) onProgress(allChats.length);

          cursor = history?.cursor || null;
          if (!cursor) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit).map((c) => {
          const item = {
            id: c?.grokConversation?.rest_id || '',
            title: (c.title || '').trim(),
            created_at_ms: c.created_at_ms,
          };
          // 记录 id → 标题 缓存，供详情导出文件名使用（Grok 标题可编辑，以列表接口为准）
          if (item.id) {
            this._titleCache = this._titleCache || {};
            this._titleCache[item.id] = item.title;
          }
          return item;
        }).filter((c) => c.id);
      },

      /** 从列表 API 翻页查找单个对话的标题（用户可编辑的真实标题） */
      async _lookupTitle(id) {
        const headers = this._headers();
        let cursor = null;
        for (let i = 0; i < 20; i++) {
          const variables = cursor ? { cursor } : {};
          const url = `/i/api/graphql/9Hyh5D4-WXLnExZkONSkZg/GrokHistory?variables=${encodeURIComponent(JSON.stringify(variables))}`;
          const r = await fetch(url, { headers });
          if (!r.ok) break;
          const body = await r.json();
          const history = body?.data?.grok_conversation_history;
          const items = history?.items || [];
          const hit = items.find((c) => c?.grokConversation?.rest_id === String(id));
          if (hit) return (hit.title || '').trim();
          cursor = history?.cursor || null;
          if (!cursor || !items.length) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }
        return '';
      },

      async getConversationDetails(id) {
        const headers = this._headers();
        const allItems = [];
        let cursor = null;

        // 长对话分页拿完（每页约 20-50 条）
        for (let i = 0; i < 50; i++) {
          const variables = cursor ? { restId: id, cursor } : { restId: id };
          const url = `/i/api/graphql/WVj1_t_sZOZSTB0kxDmDTw/GrokConversationItemsByRestId?variables=${encodeURIComponent(JSON.stringify(variables))}`;
          const r = await fetch(url, { headers });
          if (!r.ok) throw new Error(`详情API ${r.status}: ${r.statusText}`);
          const body = await r.json();
          const g = body?.data?.grok_conversation_items_by_rest_id;
          const items = g?.items || [];
          if (!items.length) break;

          allItems.push(...items);
          cursor = g?.cursor || null;
          if (!cursor) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        // 详情 API 不含标题：优先用列表缓存，否则查列表接口（Grok 标题可编辑，以列表为准）
        const title = (this._titleCache && this._titleCache[id]) || await this._lookupTitle(id);

        return { items: allItems, title };
      },

      /** 将 Grok 对话数据转为 Markdown */
      toMarkdown(data, title, convId) {
        const items = data?.items || [];
        // 同一时间戳 = 同一轮问答：User 提问必须排在 Agent 回答之前
        const roleOrder = { User: 0, Agent: 1 };
        const messages = [...items].sort((a, b) => {
          const t = (a.created_at_ms ?? 0) - (b.created_at_ms ?? 0);
          if (t !== 0) return t;
          return (roleOrder[a.sender_type] ?? 2) - (roleOrder[b.sender_type] ?? 2);
        });
        if (!messages.length) throw new Error('未找到消息数据');

        const firstTime = messages.find((m) => m.created_at_ms)?.created_at_ms;
        const timeStr = firstTime
          ? formatLocalTime(new Date(firstTime))
          : 'unknown';
        const convUrl = convId
          ? `https://x.com/i/grok?conversation=${convId}`
          : 'https://x.com/i/grok';

        // markdown 井号标题 → 加粗（若标题行本身已被 ** 包裹则不重复包裹）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, (m, c) => {
          const inner = c.trim();
          return '**' + inner + (inner.endsWith('**') ? '' : '**');
        });

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `Grok`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const it of messages) {
          const text = (it.message || '').trim();
          if (!text) continue;

          if (it.sender_type === 'User') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
            continue;
          }

          // Agent：先把所有引用占位符换成 [[CITE:cardId]]，再统一编号
          let body = text.replace(/<grok:render\s+card_id="([^"]+)"[^>]*>.*?<\/grok:render>/gs, (m, cardId) => `[[CITE:${cardId}]]`);
          const cards = (it.card_attachments || [])
            .map((c) => { try { return JSON.parse(c); } catch { return null; } })
            .filter(Boolean);

          const refs = [];
          const used = new Set();
          body = body.replace(/\[\[CITE:([^\]]+)\]\]/g, (m, cardId) => {
            if (used.has(cardId)) return ''; // 同一卡片重复引用只计一次
            used.add(cardId);
            const card = cards.find((c) => String(c.id) === String(cardId));
            const n = refs.length + 1;
            refs.push({ n, url: card?.url || '' });
            return `[${n}]`;
          });

          lines.push('### 🤖 Assistant');
          lines.push('');
          lines.push(stripHashes(body));
          lines.push('');

          if (refs.length) {
            lines.push('#### References');
            lines.push('');
            for (const r of refs) {
              lines.push(r.url ? `- [${r.n}] ${r.url}` : `- [${r.n}]`);
            }
            lines.push('');
          }
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[gemini]  Google Gemini
    // ═══════════════════════════════════════════════════════
    // 走 Google batchexecute RPC（_/BardChatUi/data/batchexecute）：
    //   - 列表：MaZiqc，参数 [20, "<游标protobuf>", [0,null,1]]，每页 20 条，响应带新游标
    //   - 单条：hNvQHb，参数 ["c_<会话ID>", 500, null, 1, [0], [4], null, 1]（500 = 一次拿全）
    // 认证：同源 cookie；每个请求需先取 xsrf（响应 48448350 字段）再带 at 参数重试。
    {
      id: 'gemini',
      name: 'Google Gemini',
      detect: () => window.location.hostname === 'gemini.google.com',

      /** 从页面已发出的 batchexecute 请求里提取 bl（构建版本）和 f.sid */
      _pageParams() {
        let bl = 'boq_assistant-bard-web-server_20260730.21_p0';
        let sid = '0';
        try {
          const e = performance.getEntriesByType('resource').find((x) => x.name.includes('batchexecute'));
          if (e) {
            const blm = e.name.match(/bl=([^&]+)/);
            if (blm) bl = decodeURIComponent(blm[1]);
            const s = e.name.match(/f\.sid=(-?\d+)/);
            if (s) sid = s[1];
          }
        } catch (e) { /* ignore */ }
        return { bl, sid };
      },

      /** batchexecute 通用调用：单次请求，at 从页面 HTML 提取 */
      async _rpc(rpc, proto, path) {
        const { bl, sid } = this._pageParams();

        // XSRF/at：页面 HTML 里 "SNlM0e":"<token>:<timestamp>"（备用正则兜底）
        let at = '';
        try {
          const html = document.documentElement.innerHTML;
          const m = html.match(/"SNlM0e":"([^"]+)"/);
          if (m) at = m[1];
          else {
            const m2 = html.match(/[A-Za-z0-9_-]{20,}:\d{13}/);
            if (m2) at = m2[0];
          }
        } catch (e) { /* ignore */ }

        // 客户端会话 UUID（服务端不校验，随机即可）
        let uuid = '';
        try {
          uuid = (crypto.randomUUID
            ? crypto.randomUUID()
            : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
              })).toUpperCase();
        } catch (e) { /* ignore */ }

        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'X-Same-Domain': '1',
          'x-goog-ext-73010989-jspb': '[0]',
          'x-goog-ext-525001261-jspb': `[1,null,null,null,null,null,null,null,[4,5,6,8],null,null,null,null,null,3,1,"${uuid}"]`,
        };

        const params = new URLSearchParams({
          rpcids: rpc,
          'source-path': path,
          bl,
          'f.sid': sid,
          hl: 'en',
          _reqid: String(Date.now() % 10000000),
          rt: 'c',
        });

        // f.req 需要三层数组：[[["rpc","<proto>",null,"generic"]]]（两层会被 400 拒绝）
        const body = 'f.req=' + encodeURIComponent(JSON.stringify([[[rpc, proto, null, 'generic']]])) + '&at=' + encodeURIComponent(at) + '&';

        const r = await fetch('/_/BardChatUi/data/batchexecute?' + params.toString(), { method: 'POST', headers, body });
        if (!r.ok) throw new Error(`RPC ${rpc} ${r.status}: ${r.statusText}`);
        const t = await r.text();
        const m = t.match(/^\)\]\}['"]?\s*\n\d+\n([\s\S]*?)\n\d+\n/);
        if (!m) throw new Error(`RPC ${rpc} 响应解析失败`);
        const arr = JSON.parse(m[1]);
        const wrb = arr.find((x) => Array.isArray(x) && x[0] === 'wrb.fr');
        if (!wrb || wrb[2] === undefined) throw new Error(`RPC ${rpc} 无数据`);
        return JSON.parse(wrb[2]);
      },

      getCurrentConversationId: () => {
        const match = window.location.pathname.match(/^\/app\/([^\/?]+)/);
        return match ? match[1] : null;
      },

      async getAllConversations(onProgress) {
        const allChats = [];
        const limit = CONFIG.DEBUG_LIMIT || Infinity;
        let cursor = null;

        for (let i = 0; i < 100; i++) {
          const proto = JSON.stringify([20, cursor || '', [0, null, 1]]);
          const data = await this._rpc('MaZiqc', proto, '/app');
          const items = (data && data[2]) || [];
          if (!items.length) break;

          for (const c of items) {
            const id = (c[0] || '').replace(/^c_/, '');
            const title = c[1] || '';
            // 记录 id → 标题 缓存，供详情导出文件名使用
            if (id) {
              this._titleCache = this._titleCache || {};
              this._titleCache[id] = title;
            }
            allChats.push({ id, title, t: c[5] });
          }
          if (onProgress) onProgress(allChats.length);

          cursor = (data && data[1]) || null;
          if (!cursor || !cursor.length) break;
          if (allChats.length >= limit) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return allChats.slice(0, limit);
      },

      /** 从列表 API 翻页查找单个对话的标题 */
      async _lookupTitle(id) {
        let cursor = null;
        for (let i = 0; i < 20; i++) {
          const proto = JSON.stringify([20, cursor || '', [0, null, 1]]);
          const data = await this._rpc('MaZiqc', proto, '/app');
          const items = (data && data[2]) || [];
          const hit = items.find((c) => (c[0] || '').replace(/^c_/, '') === String(id));
          if (hit) return hit[1] || '';
          cursor = (data && data[1]) || null;
          if (!cursor || !cursor.length) break;
          await sleep(CONFIG.API_PAGE_DELAY);
        }
        return '';
      },

      async getConversationDetails(id) {
        const proto = JSON.stringify(['c_' + id, 500, null, 1, [0], [4], null, 1]);
        const data = await this._rpc('hNvQHb', proto, '/app/' + id);
        // 标题优先用列表缓存，否则查列表接口（详情接口不含标题）
        const title = (this._titleCache && this._titleCache[id]) || await this._lookupTitle(id);
        return { turns: (data && data[0]) || [], title };
      },

      /** 将 Gemini 对话数据转为 Markdown */
      toMarkdown(data, title, convId) {
        // API 返回最新轮次在前，反转成时间正序
        const turns = [...((data && data.turns) || [])].reverse();
        if (!turns.length) throw new Error('未找到消息数据');

        // 模型名：取第一条助手消息的模型字段（turn[3][21]）
        let model = 'Gemini';
        for (const turn of turns) {
          const asst = turn && turn[3];
          if (asst && typeof asst[21] === 'string' && asst[21].trim()) {
            model = asst[21].trim();
            break;
          }
        }

        const convUrl = convId
          ? `https://gemini.google.com/app/${convId}`
          : 'https://gemini.google.com/app';

        // markdown 井号标题 → 加粗（若标题行本身已被 ** 包裹则不重复包裹）
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, (m, c) => {
          const inner = c.trim();
          return '**' + inner + (inner.endsWith('**') ? '' : '**');
        });

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `' + model + '`');
        lines.push('- **Time:** unknown');
        lines.push(`- **URL:** ${convUrl}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const turn of turns) {
          // 用户消息：turn[2] = [["文本", ...], ...]
          const user = turn && turn[2];
          if (user && Array.isArray(user[0]) && typeof user[0][0] === 'string') {
            const text = user[0][0].trim();
            if (text) {
              lines.push('### 🧑‍💻 User');
              lines.push('');
              lines.push(stripHashes(text));
              lines.push('');
            }
          }

          // 助手消息：turn[3][0] = [block...]，block = ["rc_id", [正文], [null, 引用列表]]
          const asst = turn && turn[3];
          if (asst && Array.isArray(asst[0])) {
            const blocks = asst[0];
            for (const block of blocks) {
              if (!Array.isArray(block) || !Array.isArray(block[1])) continue;
              let body = block[1].join('');

              // 引用：block[2] = [null, [ref...]]，ref = [content, [1], [[url,title]], "spp_id"]
              //        content = ["引用文本", null, null, [[s,e]...]]（spans 标记正文中引用文本的范围）
              const refsData = block[2];
              const refList = (refsData && Array.isArray(refsData[1])) ? refsData[1] : [];
              const refs = refList.map((r, i) => {
                const content = Array.isArray(r) ? r[0] : null;
                const urls = Array.isArray(r) && Array.isArray(r[2]) ? r[2] : [];
                const first = Array.isArray(urls[0]) ? urls[0] : [];
                let url = first[0] || '';
                if (url) url = url.split('#:~:')[0]; // 去掉引文锚点
                return {
                  n: i + 1,
                  spans: (content && Array.isArray(content[3])) ? content[3] : [],
                  url,
                  title: first[1] || '',
                };
              }).filter((r) => r.url);

              // 保留引用文本，在其结尾插入 [N]（按位置从后往前，偏移不受影响）
              const all = [];
              for (const r of refs) {
                for (const sp of r.spans) {
                  if (Array.isArray(sp) && sp.length === 2) all.push({ s: sp[0], e: sp[1], n: r.n });
                }
              }
              all.sort((a, b) => b.s - a.s);
              for (const { s, e, n } of all) {
                if (s >= 0 && e >= s && e <= body.length) {
                  body = body.slice(0, e) + `[${n}]` + body.slice(e);
                }
              }

              body = body.trim();
              if (!body) continue;
              lines.push('### 🤖 Assistant');
              lines.push('');
              lines.push(stripHashes(body));
              lines.push('');
              if (refs.length) {
                lines.push('#### References');
                lines.push('');
                for (const r of refs) {
                  lines.push(r.title ? `- [${r.n}] ${r.title} ${r.url}` : `- [${r.n}] ${r.url}`);
                }
                lines.push('');
              }
            }
          }
        }

        return lines.join('\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[arena]  Arena AI
    // ═══════════════════════════════════════════════════════
    {
      id: 'arena',
      name: 'Arena AI',
      detect: () => window.location.hostname === 'arena.ai',

      /** 会话元信息缓存：id -> history/unified 条目（含 type / title / createdAt） */
      _convMeta: new Map(),

      /** 模型注册表缓存：modelId -> displayName（从页面 RSC 的 initialModels 解析） */
      _models: null,

      getCurrentConversationId: () => {
        const m1 = window.location.pathname.match(/^\/c\/([^\/?]+)/);
        if (m1) return m1[1];
        const m2 = window.location.pathname.match(/^\/agent\/([^\/?]+)/);
        return m2 ? m2[1] : null;
      },

      /** 从页面 RSC（initialModels）加载 模型id -> 显示名 映射 */
      async _loadModels() {
        if (this._models) return this._models;
        const map = new Map();
        try {
          const chunks = [];
          for (const s of document.querySelectorAll('script')) {
            const t = s.textContent || '';
            const re = /__next_f\.push\(\[1,"((?:\\.|[^"\\])*)"\]\)/g;
            let m;
            while ((m = re.exec(t))) {
              try { chunks.push(JSON.parse('"' + m[1] + '"')); } catch (e) { /* ignore */ }
            }
          }
          const flight = chunks.join('');
          const idx = flight.indexOf('initialModels');
          if (idx >= 0) {
            const arrStart = flight.indexOf('[', idx);
            let depth = 0, inStr = false, esc = false, end = -1;
            for (let i = arrStart; i < flight.length; i++) {
              const c = flight[i];
              if (inStr) {
                if (esc) { esc = false; continue; }
                if (c === '\\') { esc = true; continue; }
                if (c === '"') inStr = false;
                continue;
              }
              if (c === '"') { inStr = true; continue; }
              if (c === '[') depth++;
              else if (c === ']') { depth--; if (depth === 0) { end = i + 1; break; } }
            }
            if (end > 0) {
              for (const mod of JSON.parse(flight.slice(arrStart, end))) {
                const name = mod.displayName || mod.publicName || mod.name;
                if (mod.id && name) map.set(mod.id, name);
              }
            }
          }
        } catch (e) { /* 模型名解析失败时用 modelId 兜底 */ }
        this._models = map;
        return map;
      },

      _modelName(id) {
        if (!id) return 'unknown';
        return (this._models && this._models.get(id)) || id;
      },

      /** 拉取单个会话的列表元信息（agent 模式需要 title/createdAt） */
      async _ensureConvMeta(id) {
        if (this._convMeta.has(id)) return this._convMeta.get(id);
        try {
          const r = await fetch('/api/history/unified?limit=50&includeArchived=false', { headers: { accept: '*/*' } });
          if (r.ok) {
            const body = await r.json();
            for (const e of body?.entries || []) this._convMeta.set(e.id, e);
          }
        } catch (e) { /* ignore */ }
        return this._convMeta.get(id) || null;
      },

      async getAllConversations(onProgress) {
        const all = [];
        let cursor = '';
        const limit = CONFIG.DEBUG_LIMIT || Infinity;

        while (all.length < limit) {
          const url = '/api/history/unified?limit=50&includeArchived=false'
            + (cursor ? '&cursor=' + encodeURIComponent(cursor) : '');
          const r = await fetch(url, { headers: { accept: '*/*' } });
          if (!r.ok) throw new Error('history API ' + r.status + ': ' + r.statusText);
          const body = await r.json();
          const entries = body?.entries || [];
          if (!entries.length) break;

          for (const e of entries) this._convMeta.set(e.id, e);
          all.push(...entries);
          if (onProgress) onProgress(all.length);

          const pag = body?.pagination || {};
          if (!pag.hasMore || !pag.cursor) break;
          cursor = pag.cursor;
          await sleep(CONFIG.API_PAGE_DELAY);
        }

        return all.slice(0, limit).map((e) => ({
          id: e.id,
          title: e.title || '',
          type: e.type,
          mode: e.mode,
          productMode: e.productMode,
          createdAt: e.createdAt,
          updatedAt: e.updatedAt,
          modelAId: e.modelAId,
          modelBId: e.modelBId,
          modelAOrganization: e.modelAOrganization,
          modelBOrganization: e.modelBOrganization,
        }));
      },

      async getConversationDetails(id) {
        const meta = this._convMeta.get(id);
        const type = meta?.type || (window.location.pathname.startsWith('/agent/') ? 'agentic' : 'evaluation');
        await this._loadModels(); // toMarkdown 是同步的，模型名必须提前就绪
        if (type === 'agentic') return this._getAgentConversation(id);
        return this._getEvaluation(id);
      },

      async _getEvaluation(id) {
        const r = await fetch('/api/evaluation/' + id, { headers: { accept: '*/*' } });
        if (!r.ok) throw new Error('evaluation API ' + r.status + ': ' + r.statusText);
        return r.json();
      },

      async _getAgentConversation(id) {
        const r = await fetch('/agent/' + id + '?_rsc=1', { headers: { accept: '*/*', rsc: '1' } });
        if (!r.ok) throw new Error('agent RSC ' + r.status + ': ' + r.statusText);
        const flight = await r.text();
        const meta = await this._ensureConvMeta(id);
        return {
          type: 'agentic',
          sessionId: id,
          title: meta?.title || '',
          createdAt: meta?.createdAt || null,
          messages: this._parseAgentRsc(flight),
        };
      },

      /** 解析 Next.js RSC（Flight）payload：取 {"messages":[...]} 块并解析 $id 引用
       * 注意：Flight 的 T chunk 会粘在前一个 chunk 内容末尾（不换行），且内容长度按字节计 */
      _parseAgentRsc(flight) {
        const text = String(flight);
        const bytes = new TextEncoder().encode(text);
        const decoder = new TextDecoder('utf-8');

        // 1. 定位 {"messages" JSON 块
        const start = text.indexOf('{"messages"');
        if (start < 0) throw new Error('agent RSC: messages block not found');
        const jsonStr = this._extractBalancedJson(text, start);
        const raw = JSON.parse(jsonStr);

        // 2. 扫描所有 `id:T<hex>,` 文本 chunk（任意位置，含粘在行中的）
        const tChunks = new Map();
        const re = /(^|[^0-9a-f])([0-9a-f]+):T([0-9a-fA-F]+),/g;
        let m;
        while ((m = re.exec(text))) {
          const id = m[2];
          if (tChunks.has(id)) continue;
          const len = parseInt(m[3], 16);
          const contentStartStr = m.index + m[0].length;
          const byteStart = new TextEncoder().encode(text.slice(0, contentStartStr)).length;
          const contentBytes = bytes.subarray(byteStart, byteStart + len);
          tChunks.set(id, decoder.decode(contentBytes));
        }

        // 3. 递归解析 $id 引用（仅文本 chunk）
        const resolve = (value) => {
          if (typeof value === 'string') {
            const ref = value.match(/^\$([0-9a-zA-Z]+)$/);
            if (ref) {
              const content = tChunks.get(ref[1]);
              if (content !== undefined) return content;
            }
            return value;
          }
          if (Array.isArray(value)) return value.map((v) => resolve(v));
          if (value && typeof value === 'object') {
            const out = {};
            for (const k of Object.keys(value)) out[k] = resolve(value[k]);
            return out;
          }
          return value;
        };

        const resolved = resolve(raw);
        return Array.isArray(resolved.messages) ? resolved.messages : [];
      },

      /** 从 start 起提取配平的 JSON 对象 */
      _extractBalancedJson(s, start) {
        let depth = 0, inStr = false, esc = false;
        for (let i = start; i < s.length; i++) {
          const c = s[i];
          if (inStr) {
            if (esc) { esc = false; continue; }
            if (c === '\\') { esc = true; continue; }
            if (c === '"') inStr = false;
            continue;
          }
          if (c === '"') { inStr = true; continue; }
          if (c === '{') depth++;
          else if (c === '}') {
            depth--;
            if (depth === 0) return s.slice(start, i + 1);
          }
        }
        throw new Error('agent RSC: unbalanced JSON');
      },

      /** 将 Arena 数据转为 Markdown（契约见 docs/ChatFormat.arena.md） */
      toMarkdown(data, title, convId) {
        const stripHashes = (s) => s.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
        const mode = this._detectMode(data);

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Mode:** `' + mode + '`');
        if (mode !== 'agent') {
          const models = this._collectModels(data);
          if (models.length) lines.push('- **Models:** ' + models.map((m) => '`' + m + '`').join(', '));
        }
        const votes = this._collectVotes(data);
        if (votes.length) lines.push('- **Votes:** ' + votes.join(', '));
        lines.push('- **Time:** ' + this._formatTime(data?.createdAt));
        const url = mode === 'agent'
          ? 'https://arena.ai/agent/' + convId
          : 'https://arena.ai/c/' + convId;
        lines.push('- **URL:** ' + url);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        if (mode === 'agent') this._renderAgentBody(lines, data, stripHashes);
        else this._renderEvaluationBody(lines, data, stripHashes);

        return lines.join('\n');
      },

      _detectMode(data) {
        if (data?.type === 'agentic') return 'agent';
        const m = data?.mode;
        if (m === 'direct-battle') return 'direct-chat';
        return m || 'unknown';
      },

      /** battle / side-by-side / direct-chat 共用渲染：一轮 = User + 各模型回答 + 投票 */
      _renderEvaluationBody(lines, data, stripHashes) {
        const messages = data?.messages || [];
        const pendingVotes = new Map();
        for (const fb of data?.pairwiseFeedbacks || []) {
          if (fb && fb.id) pendingVotes.set(fb.id, { fb, emitted: new Set() });
        }

        for (const msg of messages) {
          if (msg?.status && msg.status !== 'success') continue;
          const content = String(msg?.content || '').trim();
          if (!content) continue;

          if (msg.role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(content));
            lines.push('');
            continue;
          }

          lines.push('### 🤖 Assistant — ' + this._modelName(msg.modelId));
          lines.push('');
          lines.push(stripHashes(content));
          lines.push('');

          // 投票行：该轮两条助手消息都输出后追加
          for (const pv of pendingVotes.values()) {
            const { fb, emitted } = pv;
            if (fb.messageAId === msg.id || fb.messageBId === msg.id) {
              emitted.add(msg.id);
              if (emitted.size >= 2) {
                lines.push('> 🏆 **Vote:** ' + this._voteText(fb));
                lines.push('');
                pendingVotes.delete(fb.id);
              }
              break;
            }
          }
        }
      },

      /** agent 模式渲染：Thought Process + Response 固定两段，引用收集到末尾 */
      _renderAgentBody(lines, data, stripHashes) {
        const messages = data?.messages || [];
        const urlToNum = new Map();
        const refList = [];

        for (const msg of messages) {
          if (msg.role === 'user') {
            const texts = (msg.parts || [])
              .filter((p) => p.type === 'text' && p.text)
              .map((p) => p.text);
            const text = texts.join('\n\n').trim();
            if (!text) continue;
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(text));
            lines.push('');
          } else if (msg.role === 'assistant') {
            const thoughts = (msg.parts || [])
              .filter((p) => p.type === 'reasoning' && p.text)
              .map((p) => p.text);
            const texts = (msg.parts || [])
              .filter((p) => p.type === 'text' && p.text)
              .map((p) => p.text);
            if (!thoughts.length && !texts.length) continue;

            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thoughts.length) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thoughts.join('\n\n')));
              lines.push('');
            }
            if (texts.length) {
              const joined = texts.join('\n\n');
              lines.push('#### 💡 Response');
              lines.push('');
              lines.push(stripHashes(this._processCitations(joined, urlToNum, refList)));
              lines.push('');
            }
          }
        }

        if (refList.length) {
          lines.push('### References');
          lines.push('');
          refList.forEach((url, i) => {
            lines.push('- [' + (i + 1) + '] ' + url);
          });
          lines.push('');
        }
      },

      /** 正文 [N](url) 引用 → [N]，URL 去重后按序编号（全局跨消息） */
      _processCitations(text, urlToNum, refList) {
        const re = /\[(\d+)\]\((https?:\/\/[^)\s]+)\)/g;
        const matches = [];
        let m;
        while ((m = re.exec(text))) {
          let num;
          if (urlToNum.has(m[2])) num = urlToNum.get(m[2]);
          else {
            num = refList.length + 1;
            urlToNum.set(m[2], num);
            refList.push(m[2]);
          }
          matches.push({ start: m.index, end: m.index + m[0].length, num });
        }
        let out = text;
        for (let i = matches.length - 1; i >= 0; i--) {
          const mm = matches[i];
          out = out.slice(0, mm.start) + '[' + mm.num + ']' + out.slice(mm.end);
        }
        return out;
      },

      _collectModels(data) {
        const seen = new Set();
        const out = [];
        for (const msg of data?.messages || []) {
          if (msg?.role !== 'assistant' || !msg.modelId) continue;
          const name = this._modelName(msg.modelId);
          if (!seen.has(name)) {
            seen.add(name);
            out.push(name);
          }
        }
        return out;
      },

      _collectVotes(data) {
        const counts = new Map();
        for (const fb of data?.pairwiseFeedbacks || []) {
          const v = this._voteText(fb);
          if (!v) continue;
          counts.set(v, (counts.get(v) || 0) + 1);
        }
        return [...counts.entries()].map(([v, n]) => v + ' × ' + n);
      },

      _voteText(fb) {
        const v = fb?.value;
        if (v === 'a' || v === 'model_a') return this._modelName(fb.modelAId) + ' wins';
        if (v === 'b' || v === 'model_b') return this._modelName(fb.modelBId) + ' wins';
        if (v === 'tie') return 'tie';
        if (v === 'both_bad') return 'both bad';
        if (v === 'both_good') return 'both good';
        return v || '';
      },

      _formatTime(str) {
        if (!str) return 'unknown';
        // 补全 +00 → +00:00，否则 V8 解析不了
        const norm = String(str).replace(' ', 'T').replace(/([+-]\d{2})$/, '$1:00');
        const d = new Date(norm);
        if (isNaN(d.getTime())) return String(str);
        return formatLocalTime(d);
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[mistral]  Mistral Le Chat
    // ═══════════════════════════════════════════════════════
    // 列表: tRPC GET /api/trpc/chat.last?batch=1&input=...（cursor 翻页, nextCursor 结束）
    // 详情: Next.js RSC 流 GET /chat/<id>?_rsc=<nonce>（需 RSC: 1 头），
    //       从 flight 流提取 "chat":{...} 元数据 + "initialMessages":[...] 消息数组。
    //       flight 里的 Date 带 $D 前缀（"$D2026-..."），提取后需剥离。
    // 消息: {role: user|assistant, content: markdown 正文,
    //        contentChunks: [{type:'tool_call', publicResult:{<id>:{url,title,rank}}},
    //                        {type:'reference', referenceIds:[...]}, {type:'text', text}]}
    {
      id: 'mistral',
      name: 'Mistral Le Chat',
      detect: () => window.location.hostname === 'chat.mistral.ai',

      getCurrentConversationId: () => {
        const m = window.location.pathname.match(/^\/chat\/([^\/?]+)/);
        return m ? m[1] : null;
      },

      async _trpc(procedures, inputs) {
        const input = encodeURIComponent(JSON.stringify(
          Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, { json: v }]))
        ));
        const r = await fetch(`/api/trpc/${procedures}?batch=1&input=${input}`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'accept': 'application/json' },
        });
        const text = await r.text();
        if (!r.ok) throw new Error(`Mistral API ${r.status}: ${text.slice(0, 120)}`);
        let data;
        try { data = JSON.parse(text); } catch (e) { data = []; }
        return data;
      },

      /** 从 RSC flight 流里提取 "key":<json 值>（括号配对，支持嵌套对象/数组；fromIndex 可选搜索起点） */
      _extractRscValue(t, key, fromIndex = 0) {
        const start = t.indexOf(`"${key}":`, fromIndex);
        if (start < 0) return undefined;
        let i = start + key.length + 3; // 跳过 "key":
        while (i < t.length && /\s/.test(t[i])) i++;
        const ch = t[i];
        if (ch === '{' || ch === '[') {
          const open = ch;
          const close = ch === '{' ? '}' : ']';
          let depth = 0, inStr = false, esc = false;
          for (let j = i; j < t.length; j++) {
            const c = t[j];
            if (inStr) {
              if (esc) esc = false;
              else if (c === '\\') esc = true;
              else if (c === '"') inStr = false;
              continue;
            }
            if (c === '"') inStr = true;
            else if (c === open) depth++;
            else if (c === close) { depth--; if (depth === 0) return t.slice(i, j + 1); }
          }
        } else if (ch === '"') {
          for (let j = i + 1; j < t.length; j++) {
            if (t[j] === '\\') j++;
            else if (t[j] === '"') return t.slice(i, j + 1);
          }
        }
        return undefined;
      },

      /** flight 流里可能有多处 "chat":，锚定到真正的对话对象（带 id 的那个） */
      _findChatAnchor(t) {
        const a = t.indexOf('"chat":{"id"');
        if (a >= 0) return a;
        // 兜底：没有 id 开头也试第一个
        return t.indexOf('"chat":');
      },

      /** 从 RSC flight 流里解析 $N 引用（reasoning 文本以 "$90" 形式存在，指向流中 "90:" 行）
       *  行格式: "90:T<hex>,<utf-8 文本...>" 或 "90:\"<json 字符串>\""；文本到下一个行号前缀结束 */
      _resolveFlightRef(t, ref) {
        const num = String(ref || '').replace(/^\$/, '');
        if (!/^[0-9a-fA-F]+$/.test(num)) return '';
        const m = t.match(new RegExp('(?:^|\\n)' + num + ':', 'm'));
        if (!m) return '';
        let rest = t.slice(m.index + m[0].length);
        if (rest.startsWith('"')) {
          let out = '';
          for (let i = 1; i < rest.length; i++) {
            const ch = rest[i];
            if (ch === '\\') {
              const n = rest[i + 1];
              if (n === 'n') out += '\n';
              else if (n === 't') out += '\t';
              else if (n === 'r') out += '\r';
              else if (n === '"') out += '"';
              else if (n === '\\') out += '\\';
              else out += n;
              i++;
              continue;
            }
            if (ch === '"') break;
            out += ch;
          }
          return out;
        }
        if (rest.startsWith('T')) {
          // T<hex 字节长度>,<utf-8 文本>：按长度精确截取（reasoning 文本可能含字面换行）
          const comma = rest.indexOf(',');
          if (comma < 0) return '';
          const byteLen = parseInt(rest.slice(1, comma), 16);
          const body = rest.slice(comma + 1);
          if (byteLen > 0 && body.length >= byteLen) {
            try {
              const bytes = new TextEncoder().encode(body);
              return new TextDecoder().decode(bytes.slice(0, byteLen)).trim();
            } catch (e) { /* fallthrough */ }
          }
          // 兜底：到下一个行号前缀（\n<hex>:）
          const end = body.search(/\n[0-9a-fA-F]+:/);
          return (end >= 0 ? body.slice(0, end) : body).trim();
        }
        return '';
      },

      /** 消息里 reasoning（思考）块文本：contentChunks 中 _context.type === 'reasoning' 的 text chunk */
      _extractThinking(m) {
        const parts = [];
        for (const ch of (m?.contentChunks || [])) {
          if (ch?.type === 'text' && ch?._context?.type === 'reasoning' && ch.text) {
            parts.push(ch.text);
          }
        }
        return parts.join('\n\n').trim();
      },

      async getAllConversations(onProgress) {
        const all = [];
        let cursor = null;
        while (true) {
          const input = {
            chatVisibility: 'private',
            chatPermission: 'write',
            includeProjectChats: false,
            productType: 'chat',
            direction: 'forward',
          };
          if (cursor) input.cursor = cursor;
          const resp = await this._trpc('chat.last', { 0: input });
          const json = resp?.[0]?.result?.data?.json || {};
          const items = Array.isArray(json.items) ? json.items : [];
          let added = 0;
          for (const it of items) {
            if (!it.id) continue;
            all.push({
              id: it.id,
              title: (it.userTitle || it.generatedTitle || it.title || it.id).trim(),
              updated_at: it.updatedAt,
            });
            added++;
          }
          if (onProgress) onProgress(all.length);
          if (!items.length || !added || !json.nextCursor) break;
          cursor = json.nextCursor;
          await sleep(CONFIG.API_PAGE_DELAY);
        }
        return all;
      },

      async getConversationDetails(id) {
        if (!id) throw new Error('缺少 Mistral chatId');
        const r = await fetch(`/chat/${id}?_rsc=${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, {
          credentials: 'include',
          headers: { 'RSC': '1', 'accept': '*/*' },
        });
        const text = await r.text();
        if (!r.ok) throw new Error(`Mistral RSC ${r.status}: ${text.slice(0, 120)}`);

        let chat = null;
        try {
          const anchor = this._findChatAnchor(text);
          const raw = anchor >= 0 ? this._extractRscValue(text, 'chat', anchor) : undefined;
          chat = raw ? JSON.parse(raw) : null;
        } catch (e) { chat = null; }
        let messages = [];
        try {
          const raw = this._extractRscValue(text, 'initialMessages');
          messages = raw ? JSON.parse(raw) : [];
        } catch (e) { messages = []; }
        if (!Array.isArray(messages)) messages = [];

        // 剥离 flight 的 $D Date 前缀（"$D2026-08-12T..." → "2026-08-12T..."）
        const stripDates = (obj) => {
          if (typeof obj === 'string') return obj.replace(/^\$D/, '');
          if (Array.isArray(obj)) return obj.map(stripDates);
          if (obj && typeof obj === 'object') {
            const out = {};
            for (const k of Object.keys(obj)) out[k] = stripDates(obj[k]);
            return out;
          }
          return obj;
        };
        if (chat) chat = stripDates(chat);
        if (messages.length) {
          // reasoning chunk 的 text 是 "$N" 引用 → 在原始 flight 流里解析成真实文本
          const resolveChunk = (ch) => {
            if (ch?._context?.type === 'reasoning' && /^\$[0-9a-fA-F]+$/.test(String(ch.text || ''))) {
              ch.text = this._resolveFlightRef(text, ch.text) || ch.text;
            }
            return ch;
          };
          messages = stripDates(messages.map((m) => ({
            ...m,
            contentChunks: Array.isArray(m?.contentChunks) ? m.contentChunks.map(resolveChunk) : m.contentChunks,
          })));
        }

        const title = (chat?.userTitle || chat?.generatedTitle || '').trim();
        return { id, title, chat, initialMessages: messages };
      },

      _collectRefs(contentChunks) {
        // tool_call.publicResult: {<id>: {url, title, rank, ...}}
        const byId = new Map();
        for (const ch of (contentChunks || [])) {
          if (ch?.type !== 'tool_call' || !ch.publicResult) continue;
          for (const [k, v] of Object.entries(ch.publicResult)) {
            if (!v?.url) continue;
            if (!byId.has(k)) byId.set(k, { url: v.url, title: v.title || '', rank: Number(v.rank) || 999 });
          }
        }
        return [...byId.values()].sort((a, b) => a.rank - b.rank);
      },

      toMarkdown(data, title, convId) {
        const id = convId || data?.id || data?.chatId || '';
        // flight 流里 initialMessages 是逆序的（最新在前），按 createdAt 升序排回时间正序
        const timeOf = (m) => {
          const t = new Date(m?.createdAt || '').getTime();
          return Number.isFinite(t) ? t : Number.MAX_SAFE_INTEGER;
        };
        const messages = [...(Array.isArray(data?.initialMessages) ? data.initialMessages : [])]
          .sort((a, b) => timeOf(a) - timeOf(b));
        const updatedAt = data?.chat?.updatedAt || data?.updatedAt;
        const timeStr = updatedAt ? formatLocalTime(new Date(updatedAt)) : 'unknown';
        const url = id ? `https://chat.mistral.ai/chat/${id}` : 'https://chat.mistral.ai';
        const stripHashes = (s) => String(s || '').replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        const allRefs = [];
        const seenUrls = new Set();
        for (const m of messages) {
          for (const ref of this._collectRefs(m?.contentChunks)) {
            if (seenUrls.has(ref.url)) continue;
            seenUrls.add(ref.url);
            allRefs.push(ref);
          }
        }

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `Mistral Le Chat`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${url}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const m of messages) {
          if (!m || typeof m !== 'object') continue;
          const role = String(m.role || '').toLowerCase();
          const body = stripHashes(m.content || '').trim();
          if (!body) continue;
          if (role === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(body);
            lines.push('');
          } else {
            const thinking = stripHashes(this._extractThinking(m));
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thinking) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(thinking);
              lines.push('');
              lines.push('#### 💡 Response');
              lines.push('');
            }
            lines.push(body);
            lines.push('');
          }
        }

        if (allRefs.length > 0) {
          lines.push('---');
          lines.push('');
          lines.push('### References');
          lines.push('');
          allRefs.forEach((ref, i) => {
            lines.push(ref.title ? `- [${i + 1}] ${ref.title} ${ref.url}` : `- [${i + 1}] ${ref.url}`);
          });
          lines.push('');
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },

    // ═══════════════════════════════════════════════════════
    //  ADAPTER[sakana]  Sakana AI Chat
    // ═══════════════════════════════════════════════════════
    // 列表: GET /api/v2/conversations（一次返回全部，无分页）→ {json:{conversations:[{id,title,updatedAt}]}}
    // 详情: GET /api/v2/conversations/<id> → {json:{messages:[{from,content,order,...}], title}}
    // thinking 在 content 里：<plan>...</plan>（Osaka 方言模型）或 <think>...</think>（thinking 模式），
    //   正文在 <answer>...</answer>；部分消息 <think><think> 双开但单个闭合，取第一个 </think>。
    {
      id: 'sakana',
      name: 'Sakana AI',
      detect: () => window.location.hostname === 'chat.sakana.ai',

      getCurrentConversationId: () => {
        const m = window.location.pathname.match(/^\/conversation\/([^\/?]+)/);
        return m ? m[1] : null;
      },

      async _get(path) {
        const r = await fetch(path, {
          credentials: 'include',
          headers: { 'accept': 'application/json' },
        });
        const text = await r.text();
        if (!r.ok) throw new Error(`Sakana API ${r.status}: ${text.slice(0, 120)}`);
        let data;
        try { data = JSON.parse(text); } catch (e) { data = {}; }
        return data?.json ?? data;
      },

      async getAllConversations(onProgress) {
        const data = await this._get('/api/v2/conversations');
        const list = Array.isArray(data?.conversations) ? data.conversations : [];
        const all = [];
        for (const c of list) {
          const cid = c.id || c._id;
          if (!cid) continue;
          all.push({
            id: cid,
            title: (c.title || cid).trim(),
            updated_at: c.updatedAt,
          });
        }
        if (onProgress) onProgress(all.length);
        return all;
      },

      async getConversationDetails(id) {
        if (!id) throw new Error('缺少 Sakana conversationId');
        const data = await this._get(`/api/v2/conversations/${encodeURIComponent(id)}`);
        return {
          id,
          title: data?.title || '',
          updatedAt: data?.updatedAt,
          messages: Array.isArray(data?.messages) ? data.messages : [],
        };
      },

      /** 拆 content：<plan>/<think> → 思考，<answer> → 正文，其余 → 正文 */
      _splitContent(content) {
        const text = String(content || '');
        const thoughts = [];
        let m;
        const planRe = /<plan>([\s\S]*?)<\/plan>/g;
        while ((m = planRe.exec(text))) thoughts.push(m[1]);
        const thinkRe = /<think>([\s\S]*?)<\/think>/g;
        while ((m = thinkRe.exec(text))) thoughts.push(m[1].replace(/^<think>\s*/, ''));
        const answers = [];
        const ansRe = /<answer>([\s\S]*?)<\/answer>/g;
        while ((m = ansRe.exec(text))) answers.push(m[1]);
        let answer;
        if (answers.length) {
          answer = answers.join('\n\n');
        } else {
          answer = text
            .replace(/<plan>[\s\S]*?<\/plan>/g, '')
            .replace(/<think>[\s\S]*?<\/think>/g, '')
            .replace(/<\/?[a-zA-Z_]+>/g, '')
            .trim();
        }
        return { thought: thoughts.join('\n\n').trim(), answer: answer.trim() };
      },

      /** 清理 content：把搜索引用标签 <source-chip title="X" url="Y" /> 转成 markdown 链接 */
      _cleanContent(s) {
        return String(s || '').replace(/<source-chip\b[^>]*>/gi, (match) => {
          const t = (match.match(/title="([^"]*)"/i) || [])[1] || '';
          const u = (match.match(/url="([^"]*)"/i) || [])[1] || '';
          if (u) return t ? `[${t}](${u})` : `<${u}>`;
          return '';
        });
      },

      toMarkdown(data, title, convId) {
        const id = convId || data?.id || '';
        const messages = [...(Array.isArray(data?.messages) ? data.messages : [])]
          .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
        const timeStr = data?.updatedAt
          ? formatLocalTime(new Date(data.updatedAt))
          : 'unknown';
        const url = id ? `https://chat.sakana.ai/conversation/${id}` : 'https://chat.sakana.ai';
        const stripHashes = (s) => String(s || '').replace(/^#{1,6}\s+(.+)$/gm, '**$1**');

        const lines = [];
        lines.push('## Metadata');
        lines.push('');
        lines.push('- **Model:** `Sakana AI`');
        lines.push(`- **Time:** ${timeStr}`);
        lines.push(`- **URL:** ${url}`);
        lines.push('');
        lines.push('## Conversation');
        lines.push('');

        for (const m of messages) {
          if (!m || typeof m !== 'object') continue;
          const from = String(m.from || '').toLowerCase();
          if (from === 'system') continue;
          const parts = this._splitContent(m.content);
          const thought = this._cleanContent(parts.thought);
          const answer = this._cleanContent(parts.answer);
          if (!thought && !answer) continue;
          if (from === 'user') {
            lines.push('### 🧑‍💻 User');
            lines.push('');
            lines.push(stripHashes(answer));
            lines.push('');
          } else {
            lines.push('### 🤖 Assistant');
            lines.push('');
            if (thought) {
              lines.push('#### 🤔 Thought Process');
              lines.push('');
              lines.push(stripHashes(thought));
              lines.push('');
              if (answer) {
                lines.push('#### 💡 Response');
                lines.push('');
              }
            }
            if (answer) {
              lines.push(stripHashes(answer));
              lines.push('');
            }
          }
        }

        return lines.join('\n').replace(/\n{3,}/g, '\n\n');
      },
    },
  ];


  // =============================================================
  //  ⚙️  核心引擎（平台无关 — 不要改！）
  //  =============================================================
  //  LLM 注意: 从这里往下到文件末尾是平台无关的通用逻辑。
  //  你不需要、也不应该修改它们。所有供应商差异都在上面的
  //  PLATFORM_ADAPTERS 里处理。改这里 = 所有平台一起坏。
  //  =============================================================

  // ---- i18n ----
  const LANG = (navigator.language || '').startsWith('zh') ? 'zh' : 'en';
  const TXT = {
    exportAll:   LANG === 'zh' ? '导出全部聊天' : 'Export all chats',
    exportSingle: LANG === 'zh' ? '导出当前对话' : 'Export this chat',
    fetching:    LANG === 'zh' ? (n) => `获取列表 ${n} 条` : (n) => `Fetching ${n} chats`,
    packing:     LANG === 'zh' ? '打包 ZIP' : 'Packing ZIP',
    saveAfterChat: LANG === 'zh' ? '保存到 AfterChat' : 'Save to AfterChat',
    singleOnly: LANG === 'zh' ? '请在单条对话页使用' : 'Open one chat first',
    upToDate: LANG === 'zh' ? '全部已导出 · Shift+点击强制全量' : 'All exported · Shift+click for full',
    reportSkipped: (m, k) => LANG === 'zh' ? `新增 ${m} 条 · 跳过 ${k} 条` : `Added ${m} · Skipped ${k}`,
    reportExported: (n) => LANG === 'zh' ? `已导出 ${n} 条` : `Exported ${n}`,
  };

  // ---- 通用工具（不要改） ----
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  /** 将字符串转为安全的文件名（替换非法字符、限制长度） */
  function sanitizeFilename(name, maxLen) {
    maxLen = maxLen || 60;
    let safe = String(name || '')
      .replace(/[\\/:*?"<>|]/g, '_')
      .replace(/[\x00-\x1f\x7f]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (safe.length > maxLen) safe = safe.substring(0, maxLen).replace(/[\s._-]+$/, '');
    return safe || 'untitled';
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadText(content, filename, mimeType) {
    downloadBlob(new Blob([content], { type: mimeType || 'text/plain' }), filename);
  }

  function downloadJSON(data, filename) {
    downloadText(JSON.stringify(data, null, 2), filename, 'application/json');
  }

  const ZIP_TEXT_ENCODER = new TextEncoder();
  const ZIP_CRC32_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  function zipCrc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) {
      crc = ZIP_CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function zipDosTime(date) {
    const year = Math.max(1980, date.getFullYear());
    return {
      time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
      date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    };
  }

  function makeZipBlob(files) {
    const chunks = [];
    const central = [];
    let offset = 0;
    const now = zipDosTime(new Date());

    for (const file of files) {
      const nameBytes = ZIP_TEXT_ENCODER.encode(file.name);
      const contentBytes = typeof file.content === 'string'
        ? ZIP_TEXT_ENCODER.encode(file.content)
        : file.content;
      const crc = zipCrc32(contentBytes);

      const local = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(local.buffer);
      localView.setUint32(0, 0x04034b50, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0x0800, true); // UTF-8 filenames
      localView.setUint16(8, 0, true);      // store, no compression
      localView.setUint16(10, now.time, true);
      localView.setUint16(12, now.date, true);
      localView.setUint32(14, crc, true);
      localView.setUint32(18, contentBytes.length, true);
      localView.setUint32(22, contentBytes.length, true);
      localView.setUint16(26, nameBytes.length, true);
      localView.setUint16(28, 0, true);
      local.set(nameBytes, 30);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      centralView.setUint32(0, 0x02014b50, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(8, 0x0800, true);
      centralView.setUint16(10, 0, true);
      centralView.setUint16(12, now.time, true);
      centralView.setUint16(14, now.date, true);
      centralView.setUint32(16, crc, true);
      centralView.setUint32(20, contentBytes.length, true);
      centralView.setUint32(24, contentBytes.length, true);
      centralView.setUint16(28, nameBytes.length, true);
      centralView.setUint16(30, 0, true);
      centralView.setUint16(32, 0, true);
      centralView.setUint16(34, 0, true);
      centralView.setUint16(36, 0, true);
      centralView.setUint32(38, 0, true);
      centralView.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);

      chunks.push(local, contentBytes);
      central.push(centralHeader);
      offset += local.length + contentBytes.length;
    }

    const centralSize = central.reduce((sum, item) => sum + item.length, 0);
    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(4, 0, true);
    endView.setUint16(6, 0, true);
    endView.setUint16(8, files.length, true);
    endView.setUint16(10, files.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, offset, true);
    endView.setUint16(20, 0, true);

    return new Blob([...chunks, ...central, end], { type: 'application/zip' });
  }

  function downloadZip(files, filename) {
    downloadBlob(makeZipBlob(files), filename);
  }

  function getAfterChatWorkspace() {
    try {
      const stored = localStorage.getItem('chat-export-afterchat-workspace');
      if (stored && stored.trim()) return stored.trim();
    } catch {}
    return CONFIG.AFTERCHAT_WORKSPACE || '';
  }

  function base64UrlEncodeUtf8(text) {
    const bytes = ZIP_TEXT_ENCODER.encode(text);
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode(...chunk);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  function buildAfterChatCaptureUrl(title, options) {
    options = options || {};
    const workspace = getAfterChatWorkspace();
    if (!workspace) throw new Error('Missing AfterChat workspace');

    const params = new URLSearchParams();
    if (workspace) params.set('workspace', workspace);
    params.set('title', title || 'Web Capture');
    params.set('source', window.location.href);
    if (options.clipboard) {
      params.set('clipboard', '1');
    } else if (options.content) {
      params.set('content_b64', base64UrlEncodeUtf8(options.content));
    }
    return `afterchat://capture?${params.toString()}`;
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (err) {
        console.warn('Clipboard API failed, falling back to execCommand:', err);
      }
    }

    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', 'readonly');
    ta.style.cssText = 'position: fixed; top: -9999px; left: -9999px; opacity: 0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (!ok) throw new Error('Failed to copy markdown to clipboard');
  }

  function openAfterChatDeepLink(url) {
    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function getChatTitle(data, fallbackTitle) {
    return data?.store?.rawConversationResponse?.chatName
      || data?.chat?.name
      || data?.chatResp?.chat?.name
      || data?.conversation?.name
      || data?.conversationInfo?.downlink_body?.get_conv_info_downlink_body?.conversation_info?.name
      || data?.session?.title
      || data?.sessionResp?.data?.title
      || data?.title
      || data?.chat_session?.title
      || fallbackTitle
      || (typeof document !== 'undefined' ? document.title : '')
      || 'untitled';
  }

  function normalizeTimestamp(value) {
    if (value === null || value === undefined || value === '') return null;
    if (Array.isArray(value) && value.length > 0) {
      const seconds = Number(value[0]);
      const nanos = Number(value[1] || 0);
      if (Number.isFinite(seconds)) return seconds * 1000 + (Number.isFinite(nanos) ? nanos / 1e6 : 0);
      return null;
    }
    if (typeof value === 'number') {
      if (!Number.isFinite(value)) return null;
      return value < 10000000000 ? value * 1000 : value;
    }
    if (typeof value === 'string') {
      const numeric = Number(value);
      if (Number.isFinite(numeric) && value.trim() !== '') {
        return numeric < 10000000000 ? numeric * 1000 : numeric;
      }
      const parsed = Date.parse(value);
      return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
  }

  function getConversationSortTime(conv) {
    const candidates = [
      conv?.updateTimeUtc,
      conv?.updated_at,
      conv?.updatedAt,
      conv?.update_time,
      conv?.updateTime,
      conv?.update_ts,
      conv?.lastEdit,
      conv?.created_at_ms,
      conv?.createTimeUtc,
      conv?.createTime,
      conv?.created_at,
      conv?.create_time,
      conv?.t,
    ];
    for (const value of candidates) {
      const ts = normalizeTimestamp(value);
      if (ts !== null) return ts;
    }
    return null;
  }

  // ---- 增量导出锚点（localStorage，仅存时间戳元数据，不含对话内容） ----
  function loadExportAnchor(adapterId) {
    try {
      const n = Number(localStorage.getItem('m365-export-anchor-' + adapterId));
      return Number.isFinite(n) && n > 0 ? n : null;
    } catch (e) { return null; }
  }

  function saveExportAnchor(adapterId, conversations) {
    try {
      let maxT = 0;
      for (const c of conversations) {
        const t = getConversationSortTime(c);
        if (t !== null && t > maxT) maxT = t;
      }
      if (maxT > 0) localStorage.setItem('m365-export-anchor-' + adapterId, String(maxT));
    } catch (e) { /* localStorage 不可用时静默跳过增量 */ }
  }

  function orderConversationsForZip(conversations) {
    const withIndex = conversations.map((conv, index) => ({
      conv,
      index,
      time: getConversationSortTime(conv),
    }));

    // 统一排序：有时间按时间降序（最新在前），无时间的垫底（保持原相对顺序）
    return withIndex
      .sort((a, b) => {
        if (a.time === null && b.time === null) return a.index - b.index;
        if (a.time === null) return 1;
        if (b.time === null) return -1;
        return (b.time - a.time) || (a.index - b.index);
      })
      .map((item) => item.conv);
  }

  function makeMarkdownZipFilename(conv, index, total, usedNames) {
    const title = sanitizeFilename(conv.title || 'untitled', 100);
    const ts = getConversationSortTime(conv);
    let prefix;
    if (ts !== null) {
      // 本地时间前缀 YYYYMMDD-HHMMSS：跨平台/跨批次文件名天然按时间排序
      const d = new Date(ts);
      const p2 = (n) => String(n).padStart(2, '0');
      prefix = `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}${p2(d.getSeconds())}`;
    } else {
      // 拿不到时间：回退序号前缀，保证文件名可区分且不撞名
      const width = Math.max(String(total).length, 3);
      prefix = String(index + 1).padStart(width, '0');
    }
    const base = `${prefix}-${title}`;
    let filename = `${base}.md`;
    let n = 2;
    while (usedNames.has(filename)) {
      filename = `${base}-${n}.md`;
      n++;
    }
    usedNames.add(filename);
    return filename;
  }

  function buildFailureMarkdown(meta, failures) {
    const lines = [];
    lines.push('# Export Failures');
    lines.push('');
    lines.push('## Metadata');
    lines.push('');
    lines.push(`- **Platform:** \`${meta.platform}\``);
    lines.push(`- **Export Time:** ${meta.exportTime}`);
    lines.push(`- **Total Conversations:** ${meta.totalConversations}`);
    lines.push(`- **Exported:** ${meta.exported}`);
    lines.push(`- **Failed:** ${meta.failed}`);
    lines.push('');
    lines.push('## Failed Conversations');
    lines.push('');
    for (const item of failures) {
      lines.push(`- **${item.title || 'untitled'}**`);
      lines.push(`  - ID: \`${item.id || 'unknown'}\``);
      lines.push(`  - Error: ${item.error || 'unknown error'}`);
    }
    lines.push('');
    return lines.join('\n');
  }

  // ---- SVG 图标（不要改，除非换图标样式） ----
  const ICONS = {
    download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    hourglass: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3 L20 3 L14 10 L20 21 L4 21 L10 10 Z"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  };

  // ---- Trusted Types 安全写入 ----
  // 部分站点（如 Google AI Studio）CSP 要求 TrustedHTML，直接 el.innerHTML 会抛
  // TypeError，导致按钮图标/进度环渲染失败。优先走 Trusted Types policy，
  // 页面未启用 Trusted Types 时回退为普通赋值。
  function setInnerHTML(el, html) {
    if (
      window.__m365TTFailed !== true
      && window.trustedTypes
      && window.trustedTypes.createPolicy
      && !window.__m365TTPolicy
    ) {
      try {
        window.__m365TTPolicy = window.trustedTypes.createPolicy('m365-inner-html', {
          createHTML: (s) => s,
        });
      } catch (e) {
        // CSP 禁止创建自定义 policy（如 trusted-types 'none'）：标记后走普通赋值
        window.__m365TTFailed = true;
      }
    }
    if (window.__m365TTPolicy) {
      el.innerHTML = window.__m365TTPolicy.createHTML(html);
    } else {
      el.innerHTML = html;
    }
  }

  const RING_SVG_SIZE = 36;
  const RING_CENTER = 18;
  const RING_RADIUS = 15.5;
  const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

  function createRingSVG(progress, size) {
    const sz = size || RING_SVG_SIZE;
    const offset = progress >= 0
      ? RING_CIRCUMFERENCE * (1 - Math.min(progress, 100) / 100)
      : RING_CIRCUMFERENCE * 0.75;
    const spinAnim = progress < 0
      ? 'animation: m365-spin 1.2s linear infinite; transform-origin: center;'
      : 'transition: stroke-dashoffset 0.3s ease;';
    return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${RING_SVG_SIZE} ${RING_SVG_SIZE}">
      <circle cx="${RING_CENTER}" cy="${RING_CENTER}" r="${RING_RADIUS}" fill="none" stroke="#e8e8e8" stroke-width="2"/>
      <circle cx="${RING_CENTER}" cy="${RING_CENTER}" r="${RING_RADIUS}" fill="none" stroke="#242424" stroke-width="2" stroke-dasharray="${RING_CIRCUMFERENCE}" stroke-dashoffset="${offset}" transform="rotate(-90 ${RING_CENTER} ${RING_CENTER})" style="${spinAnim}"/>
    </svg>`;
  }

  function animateRingOnce(ringEl) {
    return new Promise((resolve) => {
      ringEl.style.display = '';
      setInnerHTML(ringEl, createRingSVG(0, RING_SVG_SIZE));
      const path = ringEl.querySelector('circle:last-child');
      if (!path) { resolve(); return; }
      const duration = 500;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const pct = Math.min(elapsed / duration, 1);
        path.style.transition = 'none';
        path.setAttribute('stroke-dashoffset', RING_CIRCUMFERENCE * (1 - pct));
        if (pct < 1) { requestAnimationFrame(tick); } else { resolve(); }
      }
      requestAnimationFrame(tick);
    });
  }

  // ---- 按钮状态控制器（不要改） ----
  // LLM 注意: 这是 UI 状态机，startExportProcess 依赖它的生命周期。
  // 改它的接口 = 核心导出流程也要跟着改。
  function createController(btn, ringEl, tooltipEl) {
    let state = 'idle';
    let doneTimer = null;
    /** @type {PlatformAdapter|null} */
    let _adapter = null;

    const ui = {
      isSingleMode: false,

      setIcon(name) {
        setInnerHTML(btn, ICONS[name] || ICONS.download);
        btn.style.transition = 'none';
        btn.style.opacity = '0.3';
        void btn.offsetHeight;
        btn.style.transition = '';
        btn.style.opacity = '1';
      },

      setProgress(pct) {
        if (pct === null || pct === undefined) { ringEl.style.display = 'none'; return; }
        if (pct === this._lastPct) return;
        this._lastPct = pct;
        ringEl.style.display = '';
        setInnerHTML(ringEl, createRingSVG(pct));
      },

      setTooltip(text) {
        tooltipEl.textContent = text || '';
        tooltipEl.style.display = text ? '' : 'none';
      },

      /** 根据适配器刷新按钮模式（单条/全部）和气泡文字 */
      updateLabel(adapter) {
        if (adapter) _adapter = adapter;
        if (!_adapter) return;
        this.isSingleMode = !!_adapter.getCurrentConversationId();
        const label = this.isSingleMode ? TXT.exportSingle : TXT.exportAll;
        tooltipEl.textContent = label;
      },

      idle() {
        if (doneTimer) { clearTimeout(doneTimer); doneTimer = null; }
        state = 'idle';
        this.updateLabel();
        ui.setIcon('download');
        ui.setProgress(null);
        tooltipEl.style.display = 'none';
        btn.disabled = false;
      },

      start() {
        state = 'exporting';
        ui.setIcon('hourglass');
        ui.setProgress(-1);
        if (this.isSingleMode) ui.setTooltip('');
        btn.disabled = true;
      },

      updateProgress(pct, tooltipText) {
        if (state !== 'exporting') return;
        ui.setProgress(pct);
        if (tooltipText && !this.isSingleMode) {
          tooltipEl.textContent = tooltipText;
        }
      },

      async done(reportText) {
        if (this.isSingleMode) await animateRingOnce(ringEl);
        state = 'done';
        ui.setIcon('check');
        if (!this.isSingleMode) ui.setProgress(100);
        btn.disabled = false;
        if (doneTimer) clearTimeout(doneTimer);
        if (reportText) {
          // 完成汇报：显示 tooltip 3s 后 idle（渐进披露的最后一步）
          ui.setTooltip(reportText);
          doneTimer = setTimeout(() => { ui.idle(); doneTimer = null; }, 3000);
        } else {
          tooltipEl.style.display = 'none';
          doneTimer = setTimeout(() => { ui.idle(); doneTimer = null; }, 2000);
        }
      },

      error(errMsg) {
        state = 'error';
        ui.setIcon('check');
        ui.setProgress(null);
        ui.setTooltip(errMsg || '');
        btn.disabled = false;
        if (doneTimer) clearTimeout(doneTimer);
        doneTimer = setTimeout(() => { ui.idle(); doneTimer = null; }, 4000);
      },

      isIdle() { return state === 'idle'; },
    };

    return ui;
  }

  // ---- 通用导出流程（不要改） ----
  // LLM 注意: 这是核心编排逻辑，所有平台共享一份。
  // 它不知道也无需知道具体平台的 API 细节——那些都在适配器里。
  // 想调导出行为（如文件格式、限速）去改上面的 CONFIG。
  async function startExportProcess(adapter, ui) {
    ui.start();
    let reportText = null;

    try {
      const conversationId = adapter.getCurrentConversationId();

      if (conversationId) {
        // ---- 单条导出 ----
        ui.updateProgress(-1, '');

        const data = await adapter.getConversationDetails(conversationId);
        if (data?.store) delete data.store.zeroQuery;

        // 从 API 数据中提取标题（各适配器路径不同，统一兜底到 document.title）
        const chatTitle = getChatTitle(data, '当前对话');
        const safeTitle = sanitizeFilename(chatTitle);

        if (typeof adapter.toMarkdown === 'function') {
          const md = adapter.toMarkdown(data, chatTitle, conversationId);
          downloadText(md, `${safeTitle}.md`);
        } else {
          const exportData = {
            platform: adapter.id,
            exportTime: formatLocalTime(new Date()),
            totalConversations: 1,
            exported: 1,
            failed: 0,
            conversations: [{ title: chatTitle, id: conversationId, data }],
          };
          downloadJSON(exportData, `${safeTitle}.json`);
        }
      } else {
        // ---- 全部导出 ----
        const conversations = await adapter.getAllConversations((count) => {
          ui.updateProgress(-1, TXT.fetching(count));
        });

        if (!conversations || conversations.length === 0) {
          ui.done();
          return;
        }

        // 增量导出：跳过 updatedAt ≤ 上次锚点的会话（只导新增/更新的）
        // Shift+左键点击会在 onclick 里先把锚点重置到最早，再走本流程：
        // 锚点不存在 → 不过滤 → 自然全量；导出成功后锚点自动推进到最新
        let freshList = conversations;
        if (CONFIG.INCREMENTAL) {
          const anchor = loadExportAnchor(adapter.id);
          if (anchor) {
            freshList = conversations.filter((c) => {
              const t = getConversationSortTime(c);
              // 拿不到时间的会话保守处理：宁重复不漏，始终导出
              return t === null || t > anchor;
            });
          }
        }

        if (!freshList || freshList.length === 0) {
          // 全部已被增量锚点跳过：走完成汇报路径（tooltip 3s，提示 Shift+点击强制全量）
          ui.done(TXT.upToDate);
          return;
        }

        const limitedList = (CONFIG.DEBUG_LIMIT > 0 && freshList.length > CONFIG.DEBUG_LIMIT)
          ? freshList.slice(0, CONFIG.DEBUG_LIMIT)
          : freshList;
        const exportList = limitedList;
        const zipList = orderConversationsForZip(limitedList);

        const canExportMarkdownZip = typeof adapter.toMarkdown === 'function';
        const results = [];
        const markdownById = new Map();
        const zipFiles = [];
        const usedZipNames = new Set();
        const failures = [];
        let successCount = 0;
        let failCount = 0;
        const total = exportList.length;

        for (let i = 0; i < total; i++) {
          const conv = exportList[i];
          const pct = Math.round((i / total) * 100);
          const displayTitle = String(conv.title || conv.id || 'untitled');
          const shortTitle = displayTitle.substring(0, 8) + (displayTitle.length > 8 ? '…' : '');
          ui.updateProgress(pct, `${i + 1}/${total}  ${shortTitle}`);

          try {
            const data = await adapter.getConversationDetails(conv.id);
            if (data?.store) delete data.store.zeroQuery;
            const chatTitle = getChatTitle(data, conv.title || conv.id || 'untitled');
            if (canExportMarkdownZip) {
              const md = adapter.toMarkdown(data, chatTitle, conv.id);
              markdownById.set(conv.id, { title: chatTitle, id: conv.id, content: md });
            } else {
              results.push({ title: chatTitle, id: conv.id, data });
            }
            successCount++;
          } catch (err) {
            console.error(`获取对话 ${conv.id} 失败:`, err);
            const failure = {
              title: conv.title || 'untitled',
              id: conv.id,
              error: err?.message || String(err),
            };
            failures.push(failure);
            if (!canExportMarkdownZip) results.push(failure);
            failCount++;
          }

          if (i < total - 1) await sleep(CONFIG.API_DELAY);
        }

        const exportMeta = {
          platform: adapter.id,
          exportTime: formatLocalTime(new Date()),
          totalConversations: total,
          exported: successCount,
          failed: failCount,
        };

        ui.updateProgress(99, TXT.packing);

        if (canExportMarkdownZip) {
          for (let i = 0; i < zipList.length; i++) {
            const conv = zipList[i];
            const item = markdownById.get(conv.id);
            if (!item) continue;
            zipFiles.push({
              // 传完整 conv（含时间字段），title 用详情标题：文件名前缀用会话时间
              name: makeMarkdownZipFilename({ ...conv, title: item.title }, i, zipList.length, usedZipNames),
              content: item.content,
            });
          }
          if (failures.length > 0) {
            zipFiles.push({
              name: 'export-failures.md',
              content: buildFailureMarkdown(exportMeta, failures),
            });
          }
          downloadZip(zipFiles, `${CONFIG.EXPORT_PREFIX}-${adapter.id}-all-${Date.now()}.zip`);
        } else {
          downloadJSON(
            { ...exportMeta, conversations: results },
            `${CONFIG.EXPORT_PREFIX}-${adapter.id}-all-${Date.now()}.json`
          );
        }

        // 增量锚点：全部成功才推进（有失败保留旧锚点，下次重试含失败条目；宁重复不漏）
        if (CONFIG.INCREMENTAL && failCount === 0) {
          saveExportAnchor(adapter.id, conversations);
        }

        // 完成汇报：新增 M 条（本次成功导出的），跳过 K 条（增量过滤掉的）；无跳过时只报导出数
        const skippedCount = conversations.length - freshList.length;
        reportText = skippedCount > 0
          ? TXT.reportSkipped(successCount, skippedCount)
          : TXT.reportExported(successCount);
      }

      ui.done(reportText);
    } catch (err) {
      console.error('导出失败:', err);
      ui.error(err.message);
    }
  }

  async function saveCurrentConversationToAfterChat(adapter, ui) {
    ui.start();

    try {
      const conversationId = adapter.getCurrentConversationId();
      if (!conversationId) throw new Error(TXT.singleOnly);
      if (typeof adapter.toMarkdown !== 'function') {
        throw new Error('Current platform does not support Markdown export');
      }

      ui.updateProgress(-1, TXT.saveAfterChat);

      const data = await adapter.getConversationDetails(conversationId);
      if (data?.store) delete data.store.zeroQuery;

      const chatTitle = getChatTitle(data, '当前对话');
      const md = adapter.toMarkdown(data, chatTitle, conversationId);
      const encoded = base64UrlEncodeUtf8(md);
      let url = encoded.length <= 30000
        ? buildAfterChatCaptureUrl(chatTitle, { content: md })
        : '';

      if (!url) {
        await copyTextToClipboard(md);
        url = buildAfterChatCaptureUrl(chatTitle, { clipboard: true });
      }
      openAfterChatDeepLink(url);

      ui.done();
    } catch (err) {
      console.error('保存到 AfterChat 失败:', err);
      ui.error(err?.message || String(err));
    }
  }

  // ---- SPA 导航监听（不要改） ----
  // LLM 注意: 劫持 pushState/replaceState 是为了捕获 SPA 路由变化。
  // 如果平台不是 SPA，这段无副作用；如果是，少了它按钮模式就不刷新。
  function watchURL(ui, adapter) {
    let lastUrl = window.location.href;

    function checkURL() {
      if (window.location.href === lastUrl) return;
      lastUrl = window.location.href;
      if (!ui.isIdle()) return;
      ui.updateLabel(adapter);
    }

    // 劫持 pushState / replaceState（M365 Copilot SPA 的核心手段）
    const origPushState = history.pushState;
    history.pushState = function (...args) {
      origPushState.apply(this, args);
      requestAnimationFrame(checkURL);
    };
    const origReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      origReplaceState.apply(this, args);
      requestAnimationFrame(checkURL);
    };

    window.addEventListener('popstate', () => requestAnimationFrame(checkURL));
    document.addEventListener('click', () => setTimeout(checkURL, 150), true);
    // UI 被站点移除后重建时会再次调用 watchURL；清掉旧定时器避免累积
    if (window.__m365UiTimer) clearInterval(window.__m365UiTimer);
    window.__m365UiTimer = setInterval(checkURL, 1500);
  }

  // ---- UI 构建（可以改样式） ----
  // LLM 注意: 布局、颜色、字体等 cssText 可以随便改。
  // 但不要改 createController / startExportProcess / watchURL 的调用方式。

  // ---- UI 自愈：部分站点（如 chatgpt.com）应用挂载完成后会重建 body/html 顶层子节点，
  //      把挂在 body 下的按钮容器一并清掉；用 MutationObserver 监测（只盯 html/body 两层），
  //      被移除后自动重建。带节流/暂停：避免与持续清节点的站点死磕，也避免过度重建。 ----
  const UI_HEAL_MIN_INTERVAL = 500;  // 两次重建的最小间隔(ms)
  const UI_HEAL_MAX_BURST = 8;       // 连续重建次数上限，超过后暂停
  const UI_HEAL_PAUSE = 30000;       // 暂停时长(ms)

  function ensureUIAlive(adapter) {
    const win = window;
    if (win.__m365UiGuard) { win.__m365UiGuard.reattach(); return; }

    let lastHealAt = 0;
    let burst = 0;
    let pauseUntil = 0;
    let pendingTimer = null;

    const heal = () => {
      pendingTimer = null;
      if (document.getElementById('m365-export-container')) return;
      const now = Date.now();
      if (now < pauseUntil) return;                     // 暂停期:不再自动重建
      if (now - lastHealAt < UI_HEAL_MIN_INTERVAL) {    // 节流:稍后补一次
        if (!pendingTimer) pendingTimer = setTimeout(heal, UI_HEAL_MIN_INTERVAL);
        return;
      }
      lastHealAt = now;
      if (++burst > UI_HEAL_MAX_BURST) {                // 持续被清:降级,避免死磕
        burst = 0;
        pauseUntil = now + UI_HEAL_PAUSE;
        console.warn('[AfterChat] 页面反复移除导出按钮，已暂停自动重建 30s');
        return;
      }
      try { createUI(adapter); } catch (e) { console.error('重建导出按钮失败:', e); }
    };

    const mo = new MutationObserver(() => heal());
    const state = {
      reattach() {
        try { mo.disconnect(); } catch {}
        // 只观察两层，不扫全树：站点重建 body 子节点或替换 body 元素都能捕获，
        // 聊天流式输出的深层变更不会触发回调，避免不必要的开销。
        try { mo.observe(document.documentElement, { childList: true, subtree: false }); } catch {}
        try { if (document.body) mo.observe(document.body, { childList: true, subtree: false }); } catch {}
      },
    };
    state.reattach();
    win.__m365UiGuard = state;
  }

  function createUI(adapter) {
    ensureUIAlive(adapter);
    if (document.getElementById('m365-export-container')) return;

    const container = document.createElement('div');
    container.id = 'm365-export-container';
    container.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; z-index: 999999;
      font-family: "Segoe Sans", "Segoe UI", sans-serif;
    `;

    const tooltip = document.createElement('div');
    tooltip.id = 'm365-export-tooltip';
    tooltip.style.cssText = `
      position: absolute; bottom: calc(100% + 10px); right: 0;
      background: #ffffff; color: #242424;
      border: 1px solid #e8e8e8;
      padding: 5px 10px; border-radius: 7px;
      font-size: 12px; white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      display: none; pointer-events: none;
    `;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative; width: 36px; height: 36px;
      margin-left: auto;
    `;

    const ringEl = document.createElement('div');
    ringEl.id = 'm365-ring';
    ringEl.style.cssText = `
      position: absolute; inset: 0;
      display: none; pointer-events: none;
    `;

    const btn = document.createElement('button');
    btn.id = 'm365-export-btn';
    btn.style.cssText = `
      width: 36px; height: 36px; border-radius: 50%;
      background: #ffffff; border: 1px solid #e0e0e0;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      color: #242424;
      padding: 0;  /* 阻止 AI Studio 等全局 button padding 覆盖 */
      transition: background 0.15s, border-color 0.15s, opacity 0.15s ease;
    `;

    btn.onmouseenter = () => {
      btn.style.background = '#f5f5f5';
      btn.style.borderColor = '#d0d0d0';
      if (tooltip.textContent) tooltip.style.display = '';
    };
    btn.onmouseleave = () => {
      btn.style.background = '#ffffff';
      btn.style.borderColor = '#e0e0e0';
      tooltip.style.display = 'none';
    };

    wrapper.appendChild(ringEl);
    wrapper.appendChild(btn);
    container.appendChild(tooltip);
    container.appendChild(wrapper);
    document.body.appendChild(container);

    if (!document.getElementById('m365-style-anim')) {
      const s = document.createElement('style');
      s.id = 'm365-style-anim';
      s.textContent = `@keyframes m365-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
      document.head.appendChild(s);
    }

    const ui = createController(btn, ringEl, tooltip);
    ui.updateLabel(adapter);
    ui.idle();               // 初始化状态 + 渲染下载图标

    btn.onclick = async (e) => {
      if (!ui.isIdle()) return;
      ui.updateLabel(adapter);
      if (e && e.shiftKey) {
        // Shift+左键单击 = 强制全量导出：把增量锚点重置到最早，
        // 然后走普通导出流程（锚点不存在 → 不过滤 → 全量），
        // 导出结束后 saveExportAnchor 会自动把锚点推进到最新。
        // 若导出失败锚点保持为空，下次点击仍是全量重试，失败会话不会丢失。
        try { localStorage.removeItem('m365-export-anchor-' + adapter.id); } catch (e2) { /* ignore */ }
      }
      await startExportProcess(adapter, ui);
    };

    btn.oncontextmenu = async (e) => {
      e.preventDefault();
      if (!ui.isIdle()) return;
      ui.updateLabel(adapter);
      if (!ui.isSingleMode) {
        ui.error(TXT.singleOnly);
        return;
      }
      await saveCurrentConversationToAfterChat(adapter, ui);
    };

    watchURL(ui, adapter);
  }

  // ---- 启动（不要改） ----
  // LLM 注意: 自动检测平台、自动挂载 UI。不需要手动调用。
  function initialize() {
    const adapter = PLATFORM_ADAPTERS.find((p) => p.detect());
    if (!adapter) {
      console.log('通用导出器: 未识别到当前平台');
      return;
    }
    console.log(`通用导出器: 已激活 [${adapter.name}]`);

    if (document.readyState === 'complete') {
      createUI(adapter);
    } else {
      window.addEventListener('load', () => createUI(adapter));
    }
  }

  try { initialize(); } catch {}

  // 导出给 Bun 测试（浏览器下 module 不存在，无副作用）
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLATFORM_ADAPTERS };
  }
})();
