# 更新日志

本项目遵循[语义化版本](https://semver.org/lang/zh-CN/)。本文件记录 `afterchat.user.js` 及配套文档/测试的变更。

## [1.16.0] - 2026-09-07

### 变更

- **duck.ai 支持单条导出：document.title 当定位串，标题反查 IndexedDB**（`feat(duck)`）
  - duck.ai 无每会话 URL，但打开会话时 duck 会把该会话完整标题写入 `document.title`（首页/未开会话时是固定站点标题 `Duck.ai by DuckDuckGo...`）
  - `getCurrentConversationId`：站点固定标题 → `null`（=全部导出）；否则返回 `'t:' + 标题` 定位串
  - `getConversationDetails` 识别 `t:` 前缀 → `_findByTitle` 遍历 `saved-chats`，两侧标题归一化后精确对齐（去零宽/压缩空白/去省略号尾/小写）；多条同名取 `lastEdit` 最新；找不到明确报错，不静默回退全量
  - 首页=全部导出、开会话=单条 .md / 右键存 AfterChat，语义与其它平台一致
  - 测试：`tests/test_convert_duck.ts` 新增定位单元测试（stub IDB 验证归一化/对齐/同名取新）；`bun run tests/test_all.ts` 全绿

## [1.15.0] - 2026-09-07

### 变更

- **增量导出升级：锚点显式化、起点可改**（`feat(incremental)`）
  - 锚点显式化：hover 气泡显示 `从 {上次导出时刻} 起导出`，点时间可改成任意起点（回导/重导）；改动是“一次性”的，导出成功后自愈清空
  - 单击按钮 = 按当前起点导出（默认=上次导出时刻起）；Shift+单击 = 全量快键（本次起点=最早，不再通过删除锚点实现）
  - 锚点推进到 `max(本次下载时刻, 列表最新会话时间)`；零新增也推进；有失败保留旧锚点（宁重复不漏）
  - 完成汇报复用按钮气泡：`已导出 N 条` / `没有新会话 · Shift+单击 全部导出`
  - 文档：新增 `docs/start-anchor-export-spec.md`（规格）与 `docs/prototype/range-picker.html`（手感原型）

## [1.14.0] - 2026-09-07

### 新增

- **Monica（monica.im）适配器**（`feat(monica)`）
  - 列表：`POST api.monica.im/agent_v1/session.v1.SessionService/ListSessions`（`{limit, search, useV2}`，返回即全量，无显式游标）
  - 详情：`POST api.monica.im/api/custom_bot/get_chat_item_list_v2`（`conversation_id` + limit/offset；`chat_item_list.next_offset` 翻页，0 即到底）
  - item_list 为倒序、按 `seq` 升序还原；`item_type: question/reply` 区分角色，`__RENDER_BOT_WELCOME_MSG__` 欢迎语跳过
  - 认证走 `session_id` cookie（跨域 `credentials: include`）；请求头需带 app 同款 `X-Client-*`（缺头详情只回欢迎语）；`X-Client-Id` 用 localStorage 持久化的随机 uuid
  - 模型名取 reply `data.use_model`（如 `claude-haiku-4-5`）
  - 搜索引用：reply `data.sources[]`（key + data.text 首行含 [标题](url)，JSON 二次转义如 \u003d 需还原）→ 收集去重后汇总到对话末尾 `### References`（`- [N] 标题 url`，格式同豆包）
  - 快照测试（含搜索型对话 fixture）+ E2E（真实账号真机）；`bun run tests/test_all.ts` 全绿

## [1.13.0] - 2026-09-07

### 新增

- **Poe（poe.com）适配器**（`feat(poe)`）
  - 列表 `chatsHistoryPageQuery` + `ChatHistoryListWithMessageSearchPaginationQuery`（cursor 翻页，`:微秒:chatId`）；详情 `ChatPageQuery` 首屏 + `ChatListPaginationQuery`（cursor=最老 messageId，`hasPreviousPage` 前翻）拼完整对话
  - 必需请求头最小集实测：`poegraphql`/`poe-queryname`/`poe-tag-id` 固定常量 + `poe-revision`（**服务端不校验值**，取 `__NEXT_DATA__.buildId`）；`poe-formkey`/`poe-tchannel` 实测可省略
  - 列表 `lastInteractionTime` 为微秒，/1000 转 ms 供增量锚点；标题取自 `chatOfCode.title` 并同步 `body.title`（核心 getChatTitle 只认 title）
  - 快照测试（fixture 为真实接口响应）+ `tests/test_e2e_poe.ts` 真浏览器 E2E 5/5 通过；`bun run tests/test_all.ts` 111 pass
  - 已知限制：附件/群聊未渲染（详见 `docs/adapter/poe-adapter.md`；请求常量 hash/tag-id 随 Poe 发版变化，文档含重新抓包教程）

## [1.12.0] - 2026-09-07

### 新增

- **Claude（claude.ai / claude.com）适配器**（`feat(claude)`）
  - 列表 API：`GET /api/organizations/{orgId}/chat_conversations_v2?limit=30&offset={n}&consistency=eventual`，响应 `{ data, has_more }` **offset 翻页**（前端真实请求抓包确认；0 账号版本按 GraphQL `ListConversations` 适配，已废弃）
  - 详情 API：`GET …/chat_conversations/{id}?tree=True&rendering_mode=messages&render_all_tools=true&include_inline_comparison=true&consistency=strong`（查询串与前端一致）
  - 消息按 `current_leaf_message_uuid` parent 链取当前分支（重新生成只导出新分支）；`tool_use.input` 为 **JSON 字符串**（`_toolInput()` 统一 parse，兼容对象形态）
  - 支持思考链、`visualize:show_widget`/artifact/file 工具块、图片/文档/文本附件、Truncated/Interrupted 标记
  - 快照测试 fixture 用真实抓包响应脱敏（正文/ID 全替换，保结构）；`bun run tests/test_all.ts` 全绿（108 pass）
  - E2E 待补：claude.ai Cloudflare 拦截远程调试模式 Firefox，自动化 E2E 暂不可用（详见 `docs/adapter/claude-adapter.md`）

## [1.11.2] - 2026-08-15

### 修复

- **豆包/Dola 全部导出翻页失败**（`fix(doubao)`）
  - 现象：`getAllConversations` 第一页正常（20 条），第二页请求服务端直接返回 `API_712010702 系统内部异常`，全部导出只得到第一页
  - 根因：豆包 IM `recent_conv` 接口的 `conv_version` 必须是**数字**（首屏 `0`、翻页 `Number(next_conv_version)`），适配器误传字符串导致服务端拒绝；且 `direction` 翻页时应由 `3`（FROM_LATEST）切到 `1`（OLDER），`need_coco_*` 仅首屏为 `true`（已对照前端 SDK `s2-lib-conversation-service` 逆向确认）
  - 修复：`_recentBody` 按 SDK 语义构造请求体（数字 `conv_version` + 翻页 `direction: 1` + 仅首屏 `need_coco_*`）；`getAllConversations` 增加「本轮无新增即停止」保护，杜绝重复页死循环
  - 实测：账号 25 条对话第一页 20 + 第二页 5 全部拉出，无重复无报错；快照/E2E 测试全部通过

## [1.11.0] - 2026-08-14

### 新增

- **全部导出增量模式**（`feat(incremental)`）
  - 记录上次导出的**时间锚点**（localStorage，仅存时间戳元数据，不含任何对话内容）
  - 下次全部导出时跳过 `updatedAt ≤ 锚点` 的会话，只下载新增/更新的
  - **Shift+左键点击按钮 = 强制全量导出**（把锚点重置到最早后走普通流程；若导出失败锚点保持为空，下次点击仍是全量重试，失败会话不会丢失），tooltip 与 README 已标注
  - 全部导出成功才推进锚点；有失败保留旧锚点（下次重试含失败条目，宁重复不漏）
  - 锚点缺失或时间拿不到的会话始终导出（保守策略，不丢数据）
  - **渐进式披露**：tooltip 默认只显示「导出全部聊天」；全部被跳过时提示「全部已导出 · Shift+点击强制全量」；完成时弹出 3s 汇报「新增 M 条 · 跳过 K 条」（无跳过时「已导出 N 条」）；`CONFIG.INCREMENTAL` 可关闭
  - **ZIP 文件名改为时间前缀**：`YYYYMMDD-HHMMSS-标题.md`（本地时间，取自会话更新/创建时间），跨平台、跨批次导出混在一起也能按时间排序；拿不到时间的会话回退序号前缀
  - **ZIP 内顺序改为降序**：最新对话在前（与文件名时间排序一致），打开 ZIP 先看到最近的对话
- **AI Studio 列表时间戳提取**：`ListPrompts` 的 `item[4][4][0]`（Google Timestamp 秒+纳秒）→ `updated_at`，`normalizeTimestamp` 已原生支持该格式
- **`getConversationSortTime` 补字段**：kimi（`updateTime`/`createTime`）、ima（`update_ts`）、duck（`lastEdit`）

### 修复

- **AI Studio 下载按钮空白**（Trusted Types CSP）：页面 `require-trusted-types-for 'script'` 拦截所有 `innerHTML` 写入；新增 `setInnerHTML` 优先走 `trustedTypes.createPolicy`，无 Trusted Types 的浏览器（Firefox ≤147）自动回退普通赋值

## [1.10.0] - 2026-08-13

### 新增

- **MiniMax 平台适配器**（`feat(minimax)`）
  - 海外版 `agent.minimax.io` + 国内版 `agent.minimaxi.com`（两端 API 完全同构，一站双域，参考 hunyuan 模式）
  - 列表 `GET /minimax-cloud/api/v1/sidebar/session/tree`（`next_cursor` 翻页）
  - 详情两步走：`GET /minimax-cloud/api/v1/session/<id>`（标题/模型元信息）+ `GET /session/<id>/message?limit=80`（`cursor` 翻页）
  - **认证签名逆向：** `x-signature = md5(x-timestamp + 固定盐 + body)`，盐 `I*7Cf%WZ#S&%1RlZJ&C2` 与算法从页面 webpack 拦截器源码逆向，并用用户提供 cURL 的 `x-signature` 交叉验证吻合；`yy` 头实测服务端不校验（随机值 200）；token 读 `localStorage._token` / `user_detail_agent.token`
  - 导出：`role` → User/Assistant；`msg_type: 2` 的中间态/被替代回复跳过；内嵌 MD5 实现（与 chatglm 同款）
  - 国内版仅从前端代码确认 API 同构（`sys_language=zh` 为唯一差异），消息接口因无账号未实测
  - 新增归档 `docs/adapter/minimax-adapter.md`、快照测试 `tests/test_convert_minimax.ts`（含金标准）与 E2E 测试 `tests/test_e2e_minimax.ts`（Firefox :9223）
  - `@match https://agent.minimax.io/*` + `https://agent.minimaxi.com/*`
- **Dola（豆包国际版）平台适配**（`feat(doubao)`）
  - 域名 `www.dola.com`，三个 IM 接口与豆包完全同构（实测确认），按 hunyuan 模式并入 doubao 适配器一站双域
  - `_siteHost()` 区分站点：兜底 query 参数（`aid` 495671/`region` JP）、导出 URL、Model 兜底（Dola）
  - 新增归档 `docs/adapter/dola-adapter.md`、快照测试 `tests/test_convert_dola.ts` 与 E2E 测试 `tests/test_e2e_dola.ts`（Firefox :9223）
  - `@match https://www.dola.com/*`

### 修改

- **README / 脚本描述**：Dola 拆分为独立平台行；MiniMax 标注双域名；支持平台数 22 → 23；`@description` 16 种语言补 Dola、MiniMax

## [1.9.0] - 2026-08-12

### 新增

- **Sakana AI Chat 平台适配器**（`feat(sakana)`）
  - 域名 `chat.sakana.ai`
  - 列表：`GET /api/v2/conversations`（一次返回全部，无分页；`?p=1` 反而返回空，直接不带参数）
  - 详情：`GET /api/v2/conversations/<id>` → `messages[]`（`from`/`order`/`content`），system 消息跳过
  - **Thinking 支持：** `content` 内嵌 `<plan>...</plan>`（Osaka 模型）与 `<think>...</think>`（thinking 模式，兼容 `<think><think>` 双开单闭）→ `#### 🤔 Thought Process`；`<answer>...</answer>` → `#### 💡 Response`；无 `<answer>` 时去标签后为正文
  - **搜索引用：** `content` 里的 `<source-chip title="X" url="Y" />` 标签 → `[X](Y)` markdown 链接（`_cleanContent`，思考与正文都处理）
  - 新增归档 `docs/adapter/sakana-adapter.md`、快照测试 `tests/test_convert_sakana.ts`（普通 + thinking 两个金标准）与 E2E 测试 `tests/test_e2e_sakana.ts`（Firefox :9223）
  - `@match https://chat.sakana.ai/*`，`@description` 平台列表增至 21 个

## [1.8.0] - 2026-08-12

### 新增

- **Mistral Le Chat 平台适配器**（`feat(mistral)`）
  - 域名 `chat.mistral.ai`
  - 列表：tRPC `GET /api/trpc/chat.last?batch=1&input=...`（`chatVisibility/chatPermission/includeProjectChats/productType/direction`，`nextCursor` 翻页）
  - 详情：**Next.js RSC flight 流** `GET /chat/<id>?_rsc=<nonce>`（需 `RSC: 1` 头），从流里括号配对提取 `chat` 元数据 + `initialMessages` 消息数组；flight Date 的 `$D` 前缀自动剥离
  - 消息 `role` → User/Assistant，正文取 `content`（`initialMessages` 逆序，按 `createdAt` 排回正序）；`contentChunks[type=tool_call].publicResult` 按 `rank` 排序汇总到末尾 `### References`（按 URL 去重）
  - **Thinking 支持：** `_context.type === "reasoning"` 的 text chunk 是思考块，其 `text` 为 `$<hex>` 引用，指向流中 `<hex>:T<字节长>,<文本>` 行；`_resolveFlightRef` 按字节长度精确解析 → `#### 🤔 Thought Process`，正文 → `#### 💡 Response`
  - 新增归档 `docs/adapter/mistral-adapter.md`、快照测试 `tests/test_convert_mistral.ts`（含金标准）与 E2E 测试 `tests/test_e2e_mistral.ts`（Firefox :9223）
  - `@match https://chat.mistral.ai/*`，`@description` 平台列表增至 20 个

## [1.7.1] - 2026-08-12

### 修复

- **chatgpt.com 等站点导出按钮消失**（`fix(ui)`）
  - 现象：打开 ChatGPT 按钮正常显示，但对话列表加载完成后按钮消失
  - 根因：应用挂载完成后会重建 `body`/`html` 顶层子节点（`client-bootstrap` 二次挂载），把挂在 body 下的按钮容器一并清掉
  - 修复：新增 `ensureUIAlive` 自愈观察器（MutationObserver 监听 `document.documentElement` childList），容器被移除后毫秒级自动重建；对全部平台生效

## [1.7.0] - 2026-08-12

### 新增

- **腾讯混元（Hy AI Studio）平台适配器**（`feat(hunyuan)`）
  - 域名 `aistudio.tencent.com`（国内）+ 海外站 `aistudio.tencent.ai`（注意与 Google AI Studio 的 `aistudio.google.com` 区分）
  - 海外站 `aistudio.tencent.ai` 按页面域名自动切 API 域 → `api.hy.tencent.ai`（已实地核实：路径与国内站一致；未登录实测导出）
  - 列表 `POST /api/new-portal/chat/conversation/list`（body `{limit, offset, modelTag:'all'}`，offset 翻页，`totalCount` 结束）
  - 详情 `POST /api/new-portal/user/agent/conversation/v1/detail`（body `{conversationId, offset, limit, chatModelId?, agentId?, lastId?}`）
    - `convs` 按新→旧返回；长对话用 `lastId` 游标翻页（传最旧已加载轮次内任一 conv 的 `chatRecordId`，服务端整轮返回，不丢消息）
    - `modelId` 依赖请求体里的 `chatModelId`：先经列表缓存 `conversationId → chatModelId`（`_ensureModelMap`）再请求详情，保证 `Model:` 正确
    - 详情接口不带标题：同样从列表缓存补齐 `title`，单条导出文件名用真实对话标题
  - 导出：`content[type=thought].msg` → `#### 🤔 Thought Process`；`content[type=text].msg` → 正文；`tool_calls`（JSON 字符串）/ `searchGuid` / `drawWithSearch` 的 docs → 末尾 `### References`（按 index 去重排序）
  - 新增归档 `docs/adapter/hunyuan-adapter.md`、快照测试 `tests/test_convert_hunyuan.ts`（含金标准）与 E2E 测试 `tests/test_e2e_hunyuan.ts`（Firefox :9223）
  - `@match https://aistudio.tencent.com/*`，`@description` 平台列表增至 19 个

## [1.6.0] - 2026-08-08

### 新增

- **Perplexity 平台适配器**（`feat(pplx)`）
  - 列表 `GET /rest/thread/list_recent`（无分页，一次返回全部）+ 详情 `GET /rest/thread/{uuid}`（schematized 响应，`entries[].blocks` 分块：`ask_text.markdown_block` 正文、`web_result_block` 引用源）
  - 认证：同源请求自带 Cookie，仅需 `x-app-apiclient: default` + `x-app-apiversion: 2.18`
  - 每条 entry = 一轮问答：`query_str` → `### 🧑‍💻 User`；正文 `[N]` 引用按 `web_results[N-1].url` 汇总到该轮末尾 `### References`（每 entry 独立编号）；正文井号标题转加粗
  - 详情接口游标翻页：`from_first=true&offset=0` 起，`has_next_page && next_cursor` 时 `from_first=false&offset=<next_cursor>`
  - 新增归档 `docs/adapter/pplx-adapter.md`、快照测试 `tests/test_convert_pplx.ts`（多轮 + 搜索引用两个金标准）与 E2E 测试 `tests/test_e2e_pplx.ts`（Firefox :9223）
  - `@match https://www.perplexity.ai/*`，`@description` 平台列表增至 18 个

## [1.5.0] - 2026-08-06

### 新增

- **DuckDuckGo AI Chat (duck.ai) 平台适配器**（`feat(duck)`）
  - **无后端 API**：聊天记录全部在浏览器 IndexedDB（库 `savedAIChatData`、仓库 `saved-chats`，key = chatId），适配器直接读写本地库，零网络请求
  - duck.ai 无每会话 URL（始终 `https://duck.ai/`）→ `getCurrentConversationId` 恒为 null，仅支持「导出全部」
  - 导出：`reasoning` part → `#### 🤔 Thought Process`；正文引用 `<citation src="1,2"></citation>` 经 `source` part 重编号并汇总到末尾 `### References`（按 URL 去重）；`tool-invocation` 跳过
  - 新增归档 `docs/adapter/duck-adapter.md`、快照测试 `tests/test_convert_duck.ts`（思考链 + 搜索引用两个金标准）与 E2E 测试 `tests/test_e2e_duck.ts`（Helium Chrome :9222 直读 IndexedDB）
  - `@match https://duck.ai/*`，`@description` 平台列表增至 17 个

## [1.4.0] - 2026-08-06

### 新增

- **ChatGLM（智谱清言）平台适配器**（`feat(chatglm)`）
  - 列表 `POST /chatglm/mainchat-api/conversation/recent_list`（page 翻页，`has_more` 结束）
  - 详情 `GET /chatglm/mainchat-api/conversation/messages?assistant_id&conversation_id`（一次返回全部消息；`assistant_id` 先从列表反查）
  - 认证：cookie `chatglm_token` → `authorization: Bearer`；请求需 **x-sign 签名**（`md5(ts-nonce-固定盐)`，ts/nonce 算法与页面前端一致，内嵌 MD5 实现）
  - 导出：`think` block → `#### 🤔 Thought Process`（原样保留）；正文引用 `【turnNsearchM】` 经 `search_results.match_key` 重编号并汇总到末尾 `### References`（按 URL 去重）
  - 新增归档 `docs/adapter/chatglm-adapter.md`、快照测试 `tests/test_convert_chatglm.ts`（含金标准）与 E2E 测试 `tests/test_e2e_chatglm.ts`（Helium Chrome :9222）
  - `@match https://chatglm.cn/*`，`@description` 平台列表增至 16 个

## [1.3.0] - 2026-08-06

### 新增

- **Z.ai 平台适配器**（`feat(zai)`）
  - 列表 `GET /api/v1/chats/?page=N&type=default`（页码翻页，空数组即结束）
  - 详情两步走：`GET /api/v1/chats/<id>` 拿**完整消息树** → `POST /api/v1/chats/<id>/messages/batch` 批量取正文（按 100 个/批分块，长会话不丢消息）
  - 认证：`localStorage['token']` → `authorization: Bearer <jwt>` + `x-region: overseas`
  - 导出：沿消息树活动路径排序；`reasoning` block → `#### 🤔 Thought Process`；正文引用 `【turnNsearchM】` 经 `tool_calls.results` 的 `ref_id` 重编号并汇总到末尾 `### References`（按 URL 去重）
  - 新增归档 `docs/adapter/zai-adapter.md`、快照测试 `tests/test_convert_zai.ts`（含金标准）与 E2E 测试 `tests/test_e2e_zai.ts`（Firefox :9223）
  - `@match https://chat.z.ai/*`，`@description` 平台列表增至 15 个

## [1.2.0] - 2026-08-06

### 新增

- **腾讯 ima 知识库平台适配器**（`feat(ima)`）
  - 列表 `/cgi-bin/history/get_history_list`（cursor 翻页）+ 详情 `/cgi-bin/session_logic/get_session`
  - 认证：`localStorage['ima-universal-local-storage-accountInfo']` → `x-ima-cookie` 请求头（无需 `x-ima-bkn`）
  - 支持 URL `/chat/<id>` 与 `/ai-search?sessionId=<id>` 两种形态
  - 导出：用户提问 → `### 🧑‍💻 User`；思考链 → `#### 🤔 Thought Process`；正文引用 `[N](@ref)` 重编号并汇总到末尾 `### References`（按 URL 去重）
  - 新增归档 `docs/adapter/ima-adapter.md`、快照测试 `tests/test_convert_ima.ts`（含金标准）与 E2E 测试 `tests/test_e2e_ima.ts`（Firefox :9223）
  - `@match https://ima.qq.com/*`，`@description` 平台列表增至 14 个

### 已知限制

- ima 服务端 `get_session` 的 `msgs_limit` 上限为 20 且无向后翻页参数（`msgs_offset` 被忽略），超长对话只能导出最近 20 轮，与网页端打开会话行为一致

## [1.1.0] - 2026-08-05

### 新增

- **arena.ai 平台适配器**（`feat(arena)`）
  - 支持 battle / side-by-side / direct-chat / agent **四种对话模式**的导出
  - battle / side-by-side：多模型轮换，助手消息头带模型名（`### 🤖 Assistant — gpt-5.5`），每轮末尾输出用户投票（`> 🏆 Vote:`），Metadata 含 `Mode` / `Models` / `Votes` 摘要
  - agent 模式：解析 Next.js RSC（React Flight）流，reasoning → `#### 🤔 Thought Process`，正文引用 `[N](url)` 重编号并汇总到末尾 `### References`
  - 模型名经页面 RSC 的 `initialModels` 注册表（900+ 模型）解析为显示名
  - 新增格式契约 `docs/ChatFormat.arena.md`（battle 多结果模式的专用规范）与归档 `docs/adapter/arena-adapter.md`
  - 新增快照测试（4 种模式 + `_parseAgentRsc` 真实 RSC 单测）与 E2E 测试（Helium Chrome :9222）

### 修改

- **时间格式全平台统一**（`feat`）
  - 导出时间由 `YYYY-MM-DD HH:MM:SS UTC` 改为**本地时间 + 数值时区偏移**，如 `2026-08-05 16:00:53 +08:00`
  - 新增共享 helper `formatLocalTime`，11 个平台适配器的 `Time` 与导出元数据 `exportTime`（失败报告/JSON）统一使用
  - 同步更新各平台归档文档示例与全部测试 golden
- **脚本描述补充支持平台列表**：`@description` 列出全部 13 个平台（提升脚本站搜索命中）

### 修复

- **AI Studio 多账号切换**（`fix(aistudio)`）：适配 `/u/<n>/` URL 前缀，确保对话 ID 提取、认证头与导出链接正确对应当前账号

## [1.0.0] - 2026-08-05（基线，本日志记录起点）

- 支持 m365 / chatgpt / deepseek / qwen / qianwen / yuanbao / kimi / doubao / copilot / aistudio / grok / gemini 平台导出
- 单条/全部导出、ZIP 打包、AfterChat 右键保存（`afterchat://capture`）
