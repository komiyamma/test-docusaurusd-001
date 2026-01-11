# 画像生成予約リスト

下記の Chapter の記事内容に基づき、理解を助ける挿絵を計画します。
スタイルは `picture/style_guide.md` の「モダンフラットベクター風」を使用します。

---

## 🎨 共通設定 (Common Settings)
*   **Style**: Modern Flat Vector (Clean Line Art)
*   **Target Audience**: Japanese learners
    *   **CRITICAL MUST-FOLLOW RULE**: NEVER RENDER the text "Target Audience" or "Japanese learners" in the image. This is purely prompt metadata.
    *   **STRICTLY FORBIDDEN**: Writing meta-instructions as visible text in the illustration is prohibited.
*   **Text/Label Rules**: English for Code, Japanese for others (keep simple)



## Chapter 080: Next Revalidate Flow
- **File**: `next_study_080_next_revalidate.png`
- **Section**: `## 2) 図でイメージ！「1回目は取りに行く → 期限内は再利用 → 期限切れは裏で更新」🧊🔁`
- **Prompt**: Timeline of Revalidate. T=0: Fetch Fresh. T=5: Return Cached (Fast). T=61 (Expired): Return Stale then Background Fetch New. Visualizing ISR-like behavior on a timeline. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Fetch", "Cache (Hit)", "Background Update". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 088: Route Handler Proxy Pattern
- **File**: `next_study_088_proxy_pattern.png`
- **Section**: `## 2) 全体の流れ（図でスッキリ🧠）`
- **Prompt**: Route Handler as a Proxy. Client (Browser) -> Internal API (`/api/me`) -> Server (Route Handler) adding "Secret Key" -> External API. Hiding secrets from the browser. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Client", "Route Handler", "Secret Key", "External API". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 092: Suspense Fallback UI
- **File**: `next_study_092_fallback_ui.png`
- **Section**: `## 2) イメージ図：fallback → 本体に差し替え 🌊🔁`
- **Prompt**: Transition diagram. State 1: "Loading..." with Skeleton UI (bones/gray blocks). State 2: Actual Content appears (replacing skeleton). Visualizing Suspense behavior. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Fallback (Skeleton)", "Main Content", "Suspense". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 103: Route Segments (Loading/Error/404)
- **File**: `next_study_103_route_segments.png`
- **Section**: `## どこに置くの？ “区間（セグメント）” で効くよ🧠🗺️`
- **Prompt**: Directory hierarchy visualization. A folder `articles/` contains `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`. Visualizing that these special files wrap the `page.tsx` content. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "page.tsx", "Wrappers", "loading/error". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 110: Status Code Handling
- **File**: `next_study_110_status_codes.png`
- **Section**: `## 図解：Route Handler の判断ルート🚦🧠`
- **Prompt**: Decision flowchart for API status. "Auth?" -> No=401. "Input OK?" -> No=400. "Success?" -> Yes=200, No=500. A traffic light system for API responses. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "401 Unauthorized", "400 Bad Request", "200 OK", "500 Error". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 135: Server Action Flow (`use server`)
- **File**: `next_study_135_use_server.png`
- **Section**: `## 2) 図でイメージする（全体の流れ）🗺️`
- **Prompt**: Form submission flow. User fills Form -> Clicks Submit -> Browser sends POST -> Server executes function directly (`use server`). Skips the need for manual API endpoints. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Form", "Server Action", "use server". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 197: Blog OGP Setup
- **File**: `next_study_197_ogp_chart.png`
- **Section**: `## 2) まずはイメージ図（何が起きるの？）🧠💡`
- **Prompt**: Conceptual illustration of Open Graph Protocol. A plain URL text link transforming into a rich graphical card with Title, Description, and Image. Emphasizing the visual appeal on Social Media. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "URL Link", "OGP Card", "Title", "Image". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 198: Eyecatch Optimization
- **File**: `next_study_198_eyecatch_opt.png`
- **Section**: `## 🧠 まずは全体像（画像が速くなる流れ）✨`
- **Prompt**: Process flow of optimizing a Hero Image. A large heavy original image -> Trimming/Resizing -> Compression -> Resulting in a light, fast-loading 'next/image'. Visualizing the speed gain. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Original (Heavy)", "Resize / Compress", "Optimized (Fast)". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 199: Core Web Vitals 3 Pillars
- **File**: `next_study_199_cwv_pillars.png`
- **Section**: `## 1) Core Web Vitals ってなに？🍀`
- **Prompt**: Illustration of the three Core Web Vitals pillars. 1. A stopwatch representing Loading Speed (LCP). 2. A finger tapping a button representing Responsiveness (INP). 3. A ruler measuring layout stability (CLS). Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "LCP (Speed)", "INP (Response)", "CLS (Stability)". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 200: Heavy Image Checklist
- **File**: `next_study_200_image_debug.png`
- **Section**: `## まずは全体の流れ（診断フロー）🧭🔍`
- **Prompt**: A debugging scene for heavy images. A detective or user with a magnifying glass checking a large image file. Identifying 'Size', 'Format', and 'Priority' as suspects. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Check Size", "Check Format", "Check Priority". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済

## Chapter 284: Valibot Flatten Error
- **File**: `next_study_284_valibot_flatten.png`
- **Section**: `## 3) API を作る（サーバーで“最後の砦”🛡️）📡✨`
- **Prompt**: Visualizing the 'flatten' concept for errors. A complicated, nested error object (tangled lines/nodes) passing through a funnel or filter and emerging as a clean, simple flat list of messages. Target Audience: Japanese learners (Do NOT render the text 'Target Audience'). Text/Labels: "Nested Error", "Flatten Function", "Simple List". Style: Modern Flat Vector (Clean Line Art).
- **Status**: [x] 生成済
