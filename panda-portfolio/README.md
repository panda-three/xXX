# Panda Portfolio — 周磊（Panda）个人作品集站

将 [oninross.github.io/infinite-imaginations](https://oninross.github.io/infinite-imaginations/) 以 **1:1 视觉/交互风格** 复刻的个人单页作品集站，内容替换为周磊（AI 教育｜中职计算机教师｜软件开发）的个人简历（`简历-终版.md`）。

- 技术栈：**Next.js 16（App Router）+ Tailwind CSS v4 + TypeScript**，纯前端，无后端依赖。
- 动画：全部使用 CSS keyframes 实现（原站为 GSAP/TweenMax，本复刻不引入 GSAP）。

## 运行

```bash
npm install
npm run dev      # 开发模式 → http://localhost:3000
npm run build    # 生产构建
npm run start    # 生产模式
```

## 区块（hash 路由）

| 路由 | 区块 | 内容来源 |
|---|---|---|
| `#/hello/` | 首页：Hello World 标题 + 自我介绍 + 导航盒 + 社交图标 | 简历概览 |
| `#/about/` | 关于：正文 + Skillset Breakdown 6 条技能条 + 合作企业 | 简历经历/技能 |
| `#/achievements/` | 荣誉：AI 教学反馈系统视觉 + Articles（5 门课）+ Presentations（4 项目）+ Nominations 12 块 + Ribbons 9 块 | 简历成就/奖项 |
| `#/coding/` | 编程作品：AI Agent 协作系统 / C 语言教学教练 / Obsidian 知识库 | 简历项目 |
| `#/design/` | 设计作品：Storm 工作台 / 抽奖小程序 / 分销网站 | 简历项目 |
| `#/contact/` | 联系：合作邀请 + 电话/微信（19517827031）+ 社交图标 | 简历联系 |

## 结构与自定义

- `src/app/page.tsx` — hash 路由主组件（路由切换、动画重放、标题同步）
- `src/app/globals.css` — 设计 token、字体、图案、动画、响应式（html 62.5% 基准）
- `src/lib/content.ts` — **全部简历数据集中在此**，改内容改这里即可
- `src/components/` — 图标/Logo/导航盒/标题条/技能条/项目卡/Glitch 视觉等
- `src/components/sections/` — 6 个区块组件
- `src/app/fonts/` — HelveticaNeue（3 字重）+ EBGaramond + icomoon 图标字体

## 设计要点（对原站的 1:1 复刻）

- 设计 token：ink `#2b2c33` / blue `#2196f3` / gold `#ffeb3b` / pattern `#656878` / light `#ededf0`
- 字号体系：html 62.5%（1em=10px），body 12px；标题 HelveticaNeue Bold（hello 70px / 区块标题 32px），正文 EBGaramond
- 像素感来自点阵/斜纹底 + 红青 glitch 重影，而非外部像素字体
- 交互：全屏菜单 overlay、导航盒 hover/active 蓝色图标层、卡片双宽 sweep + CTA 双箭头滑入、区块切换淡出/淡入
- 卡片视觉全部 CSS 绘制（终端/代码/知识库/画布/手机/浏览器模拟 UI），无外部图片

## 部署

纯静态输出，可直接部署到 Vercel / GitHub Pages：

```bash
npm run build
# 产物在 .next/；Vercel 导入本仓库即可
```
