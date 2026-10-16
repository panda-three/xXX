import { DESIGN_PROJECTS } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";
import { BrowserVisual, CanvasVisual, PhoneVisual } from "../CardVisuals";

export default function DesignSection() {
  return (
    <section className="site-section" id="design">
      <div className="sec-container">
        <SectionTitle label="// design" icon="design" delay={0.1} />

        <div className="flex flex-wrap gap-6">
          {/* 左侧大卡 */}
          <div className="w-full md:w-[calc(50%-12px)]">
            <ProjectCard project={DESIGN_PROJECTS[0]} delay={0.3}>
              <CanvasVisual />
            </ProjectCard>
          </div>

          {/* 右侧两张堆叠 */}
          <div className="flex w-full flex-col gap-6 md:w-[calc(50%-12px)]">
            <ProjectCard project={DESIGN_PROJECTS[1]} delay={0.45}>
              <PhoneVisual />
            </ProjectCard>
            <ProjectCard project={DESIGN_PROJECTS[2]} delay={0.6}>
              <BrowserVisual />
            </ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
}
