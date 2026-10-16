import type { CSSProperties } from "react";
import type { Skill } from "@/lib/content";

type Props = {
  skill: Skill;
  delay?: number;
  style?: CSSProperties;
};

export default function SkillBar({ skill, delay = 0 }: Props) {
  return (
    <div
      className="skill-bar anim-fadeup"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="sb-fill skill-fill"
        style={{ ["--target" as string]: `${skill.percent}%`, animationDelay: `${delay + 0.15}s` }}
      />
      <span
        className="sb-label anim-fadein"
        style={{ animationDelay: `${delay + 0.35}s` }}
      >
        {skill.label}
      </span>
      <span
        className="sb-percent anim-fadein"
        style={{ animationDelay: `${delay + 0.45}s` }}
      >
        <span className="num">{skill.percent}</span>
        <span className="unit">.0%</span>
      </span>
    </div>
  );
}
