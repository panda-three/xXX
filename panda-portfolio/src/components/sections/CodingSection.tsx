import { CODING_PROJECTS } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";
import { CodeVisual, KnowledgeVisual, TerminalVisual } from "../CardVisuals";

export default function CodingSection() {
  return (
    <section className="site-section" id="coding">
      <div className="sec-container">
        <SectionTitle label="// coding" icon="coding" delay={0.1} />

        <div className="flex flex-wrap gap-6">
          {/* 左侧大卡 */}
          <div className="w-full md:w-[calc(50%-12px)]">
            <ProjectCard project={CODING_PROJECTS[0]} delay={0.3}>
              <TerminalVisual />
            </ProjectCard>
          </div>

          {/* 右侧两张堆叠 */}
          <div className="flex w-full flex-col gap-6 md:w-[calc(50%-12px)]">
            <ProjectCard project={CODING_PROJECTS[1]} delay={0.45}>
              <CodeVisual />
            </ProjectCard>
            <ProjectCard project={CODING_PROJECTS[2]} delay={0.6}>
              <KnowledgeVisual />
            </ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
}
