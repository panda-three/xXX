import { COMPANIES, SKILLS } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import SkillBar from "../SkillBar";

export default function AboutSection() {
  return (
    <section className="site-section" id="about">
      <div className="sec-container">
        <SectionTitle label="// about" icon="about" delay={0.1} />

        <div className="flex flex-wrap">
          {/* 左列：定位陈述 */}
          <div className="sec-col-6 mb-8 pr-6 md:mb-0">
            <p className="sec-p anim-fadeup" style={{ animationDelay: "0.35s" }}>
              作为 <strong>AI 教育工作者</strong>｜<strong>中职计算机一线教师</strong>｜
              <strong>软件开发实践者</strong>，我喜欢被难题挑战：<strong>创造</strong>
              真正解决课堂问题的 AI 产品，<strong>想象</strong>更有趣的师生交互，并
              <strong>开发</strong>最好的学习体验。
            </p>
            <p className="sec-p anim-fadeup mt-6" style={{ animationDelay: "0.55s" }}>
              大部分时候，我从零手写一切：课程、代码、知识库、AI 工作流——都用结构化方法自己搭建。
              自研 AI 教学反馈系统已在中职课堂完成两轮验证迭代，5 年一线执教，所带学生公办专科升学率{" "}
              <strong>60%</strong>。从产品设计到课堂落地，我走完全程。
            </p>
          </div>

          {/* 右列：技能条 */}
          <div className="sec-col-6 md:pl-8">
            <h2
              className="anim-fadeup font-sans text-[2.4em] font-bold leading-none"
              style={{ animationDelay: "0.45s" }}
            >
              Skillset Breakdown
            </h2>
            <div className="mt-6">
              {SKILLS.map((s, i) => (
                <SkillBar key={s.label} skill={s} delay={0.55 + i * 0.15} />
              ))}
            </div>
          </div>
        </div>

        <hr className="anim-fadein my-10 border-0 border-t border-[#e0e0e0]" style={{ animationDelay: "1.2s" }} />

        <div className="logos-row anim-fadeup" style={{ animationDelay: "1.3s" }}>
          <p className="sec-p mb-4">Some of the companies I've worked on projects for:</p>
          <ul>
            {COMPANIES.map((c) => (
              <li key={c} className="anim-fadeup" style={{ animationDelay: `${1.3 + 0.15 * COMPANIES.indexOf(c)}s` }}>
                <span className="logo-tile">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
