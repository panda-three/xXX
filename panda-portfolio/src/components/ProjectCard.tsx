import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/lib/content";
import { Icon } from "./icons";

type Props = {
  project: Project;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** 项目卡片：视觉区 + 标题/描述 + "See case study" CTA，hover 蓝→黑扫过 */
export default function ProjectCard({
  project,
  delay = 0,
  className = "",
  style,
  children,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.href === "#") {
      e.preventDefault();
    }
  };
  return (
    <a
      href={project.href}
      target={project.external === false ? undefined : "_blank"}
      rel={project.external === false ? undefined : "noreferrer"}
      onClick={handleClick}
      className={`project-card anim-cardup ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {/* 卡片视觉区 */}
      <div className="absolute inset-0 z-0 bg-[#f7f7f7]">{children}</div>

      {/* hover 扫过层：蓝 → 黑 */}
      <span className="pc-sweep pc-sweep--blue" />
      <span className="pc-sweep pc-sweep--dark" />

      <span className="pc-text">
        <span className="pc-title">{project.title}</span>
        <span className="pc-desc">{project.desc}</span>
        <span className="pc-cta">
          See case study
          <span className="pc-cta-icon">
            <Icon name="chevronRight" />
            <Icon name="chevronRight" />
          </span>
        </span>
      </span>
    </a>
  );
}
