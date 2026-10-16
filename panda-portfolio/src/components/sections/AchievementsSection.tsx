import { AI_PROJECTS, NOMINATIONS, RIBBONS, TEACHING_SUBJECTS } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import GlitchBox from "../GlitchBox";

/** 资质面板视觉（带 glitch 的"AI 教学反馈系统"界面） */
function BetaVisual() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f0f1f3] p-3">
      <div className="flex items-center justify-between border border-[#c3c4cd] bg-white px-2 py-1">
        <span className="text-[9px] font-bold text-[#2b2c33]">AI 教学反馈系统</span>
        <span className="text-[8px] font-bold text-[#2196f3]">已两轮验证</span>
      </div>
      <div className="mt-1.5 grid flex-1 grid-cols-2 gap-1.5">
        {[
          ["7 种题型", "路由"],
          ["24 类卡点", "定位"],
          ["12 种骨架", "识别"],
          ["60%", "升学率"],
        ].map(([v, k]) => (
          <div key={k} className="flex flex-col items-center justify-center border border-[#c3c4cd] bg-white">
            <span className="text-[13px] font-bold text-[#2b2c33]">{v}</span>
            <span className="text-[8px] text-[#656878]">{k}</span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 border border-[#c3c4cd] bg-white px-2 py-1 text-[8px] leading-snug text-[#656878]">
        错后复练行为出现可观察改善 ✓
      </div>
    </div>
  );
}

function RibbonMedal() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
      <polygon points="20,3 24,12 34,13 26,20 28,30 20,25 12,30 14,20 6,13 16,12" fill="#2b2c33" />
      <rect x="17" y="31" width="6" height="5" fill="#2196f3" />
    </svg>
  );
}

export default function AchievementsSection() {
  return (
    <section className="site-section" id="achievements">
      <div className="sec-container">
        <SectionTitle label="// achievements" icon="achievements" delay={0.1} />

        <div className="flex flex-wrap">
          {/* 左列：荣誉陈述 + glitch 视觉 + 知识库链接 */}
          <div className="sec-col-6 mb-8 pr-6 md:mb-0">
            <p className="sec-p anim-fadeup" style={{ animationDelay: "0.35s" }}>
              很幸运，我在过去的教学与开发实践中收获了一些认可：持有{" "}
              <strong>软件设计师（中级）</strong>与 <strong>中职计算机教师资格证</strong>
              ；指导学生荣获<strong>上海市软件大赛一等奖</strong>、<strong>宿迁市技能大赛三等奖</strong>；
              获评<strong>院校年度优秀教师</strong>。所带学生公办专科升学率达{" "}
              <strong>60%</strong>，带教班级整体就业率达 <strong>99%</strong>。
            </p>

            <GlitchBox
              live
              className="anim-fadeup mt-6 border-[6px] border-[#2b2c33]"
            >
              <div className="h-[150px]">
                <BetaVisual />
              </div>
            </GlitchBox>

            <p className="anim-fadeup mt-4 text-center" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com/panda-three/memory-base-codex"
                target="_blank"
                rel="noreferrer"
                className="glitch-text text-[0.9em] font-bold text-[#2b2c33]"
                data-text="github.com/panda-three/memory-base-codex"
              >
                github.com/panda-three/memory-base-codex
              </a>
            </p>
          </div>

          {/* 右列：Articles / Presentations */}
          <div className="sec-col-6 md:pl-8">
            <div className="listing anim-fadeup" style={{ animationDelay: "0.45s" }}>
              <h2>Articles</h2>
              <ul>
                {TEACHING_SUBJECTS.map((s) => (
                  <li key={s}>
                    <a href="#/about/" onClick={(e) => e.preventDefault()}>{s}</a>
                  </li>
                ))}
              </ul>
              <h2>Presentations</h2>
              <ul>
                {AI_PROJECTS.map((p) => (
                  <li key={p}>
                    <a href="#/coding/" onClick={(e) => e.preventDefault()}>{p}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="anim-fadein my-8 border-0 border-t border-[#e0e0e0]" style={{ animationDelay: "1s" }} />

        {/* 荣誉网格 */}
        <div className="anim-fadeup" style={{ animationDelay: "1.05s" }}>
          <h2 className="text-center font-sans text-[2em] font-bold leading-none">Nominations</h2>
          <ul className="mx-auto mt-6 grid max-w-[860px] grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {NOMINATIONS.map((n, i) => (
              <li key={n.title} className="nomination anim-fadein" style={{ animationDelay: `${1.1 + i * 0.08}s` }}>
                <span className="nm-corner nm-corner--ul anim-corner" style={{ left: 0, top: 0 }} />
                <span className="nm-corner nm-corner--ur anim-corner-n" style={{ right: 0, top: 0 }} />
                <span className="nm-corner nm-corner--bl anim-corner-s" style={{ left: 0, bottom: 0 }} />
                <span className="nm-corner nm-corner--br anim-corner-e" style={{ right: 0, bottom: 0 }} />
                <span className="nm-pattern pattern-lg" />
                <span className="nm-title">
                  {n.title}
                  <span className="nm-light">{n.light}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="anim-fadein my-8 border-0 border-t border-[#e0e0e0]" style={{ animationDelay: "1.8s" }} />

        {/* 缎带 */}
        <div className="anim-fadeup text-center" style={{ animationDelay: "1.85s" }}>
          <p className="sec-p mb-5">Some of the ribbons I have collected over the years:</p>
          <div className="flex flex-wrap justify-center">
            {RIBBONS.map((r, i) => (
              <span
                key={r}
                className="ribbon-tile anim-fadeup"
                style={{ animationDelay: `${1.9 + i * 0.1}s` }}
              >
                <RibbonMedal />
                <span className="mt-1 max-w-[84px] text-center text-[9px] font-bold leading-tight text-[#2b2c33]">
                  {r}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
