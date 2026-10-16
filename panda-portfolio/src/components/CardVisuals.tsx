/**
 * 项目卡片内的装饰性"界面模拟图"（CSS 绘制，灰度 + 蓝色点缀，与原站截图风格一致）
 */

/** 终端/协作系统视觉 —— AI Agent 工程化协作系统 */
export function TerminalVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2c33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#656878]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c3c4cd]" />
        <span className="ml-2 text-[10px] font-bold text-[#656878]">AI Agent · 协作终端</span>
      </div>
      <div className="mt-2 flex-1 space-y-1.5 border border-[#c3c4cd] bg-white p-2.5 font-mono text-[10px] leading-tight text-[#2b2c33]">
        <p><span className="font-bold text-[#2196f3]">USER</span> → 需求对齐：课程教案 V2</p>
        <p><span className="font-bold text-[#2b2c33]">AGENT</span> → 拆分为 PRD / Issue 切片</p>
        <p><span className="font-bold text-[#2196f3]">USER</span> → 按切片执行 + TDD 验证</p>
        <p><span className="font-bold text-[#2b2c33]">AGENT</span> → 测试通过，产出 Handoff</p>
        <p className="text-[#656878]">→ 沉淀至 Obsidian 知识库 ✓</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {["PRD", "Issue", "TDD", "E2E", "Bugfix", "Handoff"].map((t) => (
          <span key={t} className="border border-[#2b2c33] px-1.5 py-0.5 text-[9px] font-bold text-[#2b2c33]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** 代码编辑器视觉 —— C 语言教学教练 */
export function CodeVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2c33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#656878]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c3c4cd]" />
        <span className="ml-2 text-[10px] font-bold text-[#656878]">lesson.c</span>
      </div>
      <div className="mt-2 flex-1 border border-[#c3c4cd] bg-white p-2.5 font-mono text-[10px] leading-[1.5] text-[#2b2c33]">
        <p><span className="text-[#2196f3]">#include</span> &lt;stdio.h&gt;</p>
        <p><span className="text-[#2b2c33]">int</span> main() {"{"}</p>
        <p className="pl-3"><span className="text-[#656878]">// 苏格拉底式追问</span></p>
        <p className="pl-3">printf(<span className="text-[#2196f3]">"错因定位：%s"</span>, hint);</p>
        <p>{"}"}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {["7 种题型", "24 类卡点", "12 种骨架"].map((t) => (
          <span key={t} className="border border-[#2b2c33] px-1.5 py-0.5 text-[9px] font-bold text-[#2b2c33]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** 文件树视觉 —— Obsidian AI 知识库 */
export function KnowledgeVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2c33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#656878]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c3c4cd]" />
        <span className="ml-2 text-[10px] font-bold text-[#656878]">知识库 vault</span>
      </div>
      <div className="mt-2 flex-1 space-y-1 border border-[#c3c4cd] bg-white p-2.5 font-mono text-[10px] leading-tight text-[#2b2c33]">
        <p className="text-[#2196f3]">📁 raw /</p>
        <p className="pl-3 text-[#656878]">├─ 课堂实录 / 原始材料</p>
        <p className="text-[#2b2c33]">📁 process /</p>
        <p className="pl-3 text-[#656878]">├─ 主题加工 · 教案迭代</p>
        <p className="text-[#2196f3]">📁 outputs /</p>
        <p className="pl-3 text-[#656878]">└─ 成果输出 · 复盘</p>
        <p className="border-t border-[#ededf0] pt-1 font-bold">MEMORY.md <span className="font-normal text-[#656878]">← 长期记忆</span></p>
      </div>
      <div className="mt-2 flex gap-1">
        {["18 周", "1500+ 文件"].map((t) => (
          <span key={t} className="border border-[#2b2c33] px-1.5 py-0.5 text-[9px] font-bold text-[#2b2c33]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** 画布视觉 —— Storm AI 创作工作台 */
export function CanvasVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2b2c33]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#656878]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c3c4cd]" />
        <span className="ml-2 text-[10px] font-bold text-[#656878]">Storm · 无限画布</span>
      </div>
      <div className="dots-dk relative mt-2 flex-1 border border-[#c3c4cd] bg-white">
        <div className="absolute left-[12%] top-[18%] h-[34%] w-[24%] border border-[#2b2c33] bg-[#e6e8ea]" />
        <div className="absolute right-[14%] top-[14%] h-[30%] w-[22%] border border-[#2196f3] bg-[#dbe9f9]" />
        <div className="absolute bottom-[12%] left-[30%] h-[26%] w-[20%] border border-[#2b2c33] bg-[#e6e8ea]" />
        <span className="absolute bottom-1.5 right-1.5 text-[9px] font-bold text-[#2b2c33]">生成 → 整理 → 复用</span>
      </div>
    </div>
  );
}

/** 手机视觉 —— 抽奖小程序 */
export function PhoneVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f0f1f3]">
      <div className="flex h-[72%] w-[38%] flex-col items-center border-[3px] border-[#2b2c33] bg-white p-2">
        <span className="mt-1 text-[9px] font-bold text-[#656878]">幸运抽奖</span>
        <div className="mt-2 flex h-[58%] w-full items-center justify-center border border-[#c3c4cd] bg-[#f7f7f7]">
          <div className="relative h-16 w-16 rounded-full border-[3px] border-[#2b2c33]">
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-[#2196f3]">GO</span>
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2196f3]" />
          </div>
        </div>
        <span className="mt-2 w-full bg-[#2b2c33] py-1 text-center text-[9px] font-bold text-white">立即抽奖</span>
      </div>
    </div>
  );
}

/** 浏览器视觉 —— 分销网站 */
export function BrowserVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-4">
      <div className="flex items-center gap-1.5 rounded-t border border-b-0 border-[#c3c4cd] bg-white px-2 py-1">
        <span className="h-2 w-2 rounded-full bg-[#2b2c33]" />
        <span className="h-2 w-2 rounded-full bg-[#656878]" />
        <span className="h-2 w-2 rounded-full bg-[#c3c4cd]" />
        <span className="ml-2 flex-1 border border-[#ededf0] px-2 text-[9px] text-[#656878]">dist.shop</span>
      </div>
      <div className="flex-1 space-y-1.5 border border-[#c3c4cd] bg-white p-2.5">
        <div className="h-3 w-1/2 border border-[#2b2c33] bg-[#f7f7f7]" />
        <div className="h-3 w-2/3 border border-[#c3c4cd] bg-[#f7f7f7]" />
        <div className="flex gap-1.5 pt-1">
          <div className="h-10 flex-1 border border-[#2b2c33] bg-[#e6e8ea]" />
          <div className="h-10 flex-1 border border-[#c3c4cd] bg-[#f7f7f7]" />
          <div className="h-10 flex-1 border border-[#c3c4cd] bg-[#f7f7f7]" />
        </div>
        <div className="h-3 w-1/3 border border-[#2196f3] bg-[#dbe9f9]" />
      </div>
    </div>
  );
}
