import type { IconName } from "@/lib/content";
import { Icon } from "./icons";

type Props = {
  label: string;
  icon: IconName;
  delay?: number;
};

/** 区块标题：深色点阵底条 + 白色粗体 + 蓝色左竖线 + 右侧图标 */
export default function SectionTitle({ label, icon, delay = 0 }: Props) {
  return (
    <h1 className="section-title anim-fadein" style={{ animationDelay: `${delay}s` }}>
      <span className="st-bar anim-bar" style={{ animationDelay: `${delay}s` }} />
      <span className="st-text anim-fadein" style={{ animationDelay: `${delay + 0.25}s` }}>
        {label}
      </span>
      <span className="st-icon anim-popin" style={{ animationDelay: `${delay + 0.5}s` }}>
        <Icon name={icon} />
      </span>
    </h1>
  );
}
