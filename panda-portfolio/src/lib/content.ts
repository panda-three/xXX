export type IconName =
  | "about"
  | "achievements"
  | "coding"
  | "design"
  | "contact"
  | "infinite"
  | "linkedin"
  | "twitter"
  | "github"
  | "medium"
  | "email"
  | "chevronRight"
  | "cross"
  | "warning";

/** 菜单 / 导航条目（与原站一致：首项为 home/infinite） */
export type NavItem = {
  key: string;
  abbr: string;
  full: string;
  icon: IconName;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { key: "hello", abbr: "⟨/⟩", full: "infinite", icon: "infinite", href: "#/hello/" },
  { key: "about", abbr: "Ab", full: "about", icon: "about", href: "#/about/" },
  {
    key: "achievements",
    abbr: "Ac",
    full: "achievements",
    icon: "achievements",
    href: "#/achievements/",
  },
  { key: "coding", abbr: "Co", full: "coding", icon: "coding", href: "#/coding/" },
  { key: "design", abbr: "De", full: "design", icon: "design", href: "#/design/" },
  { key: "contact", abbr: "Ct", full: "contact", icon: "contact", href: "#/contact/" },
];

/** hello 首页导航（不含 home） */
export const HELLO_NAV: NavItem[] = NAV_ITEMS.slice(1);

export type Skill = { label: string; percent: number };

export const SKILLS: Skill[] = [
  { label: "AI 教学产品与课堂落地", percent: 95 },
  { label: "中职计算机教学（C / Java）", percent: 90 },
  { label: "AI 辅助开发（CodeX / Claude Code）", percent: 85 },
  { label: "Next.js + Tailwind + Vercel", percent: 80 },
  { label: "Prompt 工程 / 自定义 Skill", percent: 80 },
  { label: "Obsidian 结构化知识库", percent: 75 },
];

export const COMPANIES = ["传智中专", "传智专修学院", "杭州不匠科技"];

export const TEACHING_SUBJECTS = [
  "Java 程序设计",
  "C 语言程序设计",
  "电子技术基础",
  "计算机原理",
  "网页设计",
];

export const AI_PROJECTS = [
  "AI Agent 工程化协作系统",
  "C 语言教学教练",
  "Obsidian AI 知识库工作流",
  "Storm AI 图像与视频创作工作台",
];

export type Nomination = { title: string; light: string };

export const NOMINATIONS: Nomination[] = [
  { title: "软件设计师", light: "中级职称" },
  { title: "教师资格证", light: "中职计算机" },
  { title: "一等奖", light: "上海市软件大赛" },
  { title: "三等奖", light: "宿迁市技能大赛" },
  { title: "优秀教师", light: "院校年度" },
  { title: "升学率 60%", light: "公办专科" },
  { title: "就业率 99%", light: "带教班级" },
  { title: "AI 反馈系统", light: "自研已两轮验证" },
  { title: "知识库 18 周", light: "Obsidian 持续运转" },
  { title: "1500+ 文件", light: "Markdown 知识库" },
  { title: "233 用户", light: "Storm 工作台上线" },
  { title: "20 → 3-4 轮", light: "长任务对话压缩" },
];

export const RIBBONS = [
  "软设中级",
  "中职教资",
  "一等奖",
  "三等奖",
  "年度优秀教师",
  "升学 60%",
  "就业 99%",
  "知识库 18 周",
  "233 用户",
];

export type Project = {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
};

export const CODING_PROJECTS: Project[] = [
  {
    title: "AI Agent 工程化协作系统",
    desc: "上下文管理 → 需求对齐 → TDD/E2E 验证 → Handoff 交接，长任务从 20 轮压缩到 3-4 轮。",
    href: "https://github.com/panda-three/memory-base-codex",
  },
  {
    title: "C 语言教学教练",
    desc: "7 种题型 × 苏格拉底式追问 · 24 类卡点定位 · 12 种骨架识别，已完成两轮课堂验证。",
    href: "https://www.coze.cn/store/agent/7656316723591249966?bot_id=true",
  },
  {
    title: "Obsidian AI 知识库工作流",
    desc: "raw → process → outputs → 周复盘 → MEMORY.md，18 周持续运转，1500+ 文件。",
    href: "https://github.com/panda-three/memory-base-codex",
  },
];

export const DESIGN_PROJECTS: Project[] = [
  {
    title: "Storm AI 图像与视频创作工作台",
    desc: "无限画布 + 生成→整理→复用闭环，已上线，233 位真实用户。",
    href: "https://www.zlaction.online",
  },
  {
    title: "抽奖小程序",
    desc: "微信小程序，配套 Github 开源地址。",
    href: "#",
  },
  {
    title: "分销网站",
    desc: "分销业务网站，配套 Github 开源地址。",
    href: "#",
  },
];

export type Social = { icon: IconName; label: string; href: string };

export const SOCIALS: Social[] = [
  { icon: "linkedin", label: "LinkedIn", href: "#" },
  { icon: "twitter", label: "Twitter", href: "#" },
  { icon: "github", label: "GitHub", href: "https://github.com/panda-three" },
  { icon: "medium", label: "Medium", href: "#" },
  { icon: "email", label: "Email", href: "mailto:zhoulei.panda@gmail.com" },
];

export const PHONE = "19517827031";
