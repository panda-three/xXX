import type { CSSProperties } from "react";
import type { NavItem } from "@/lib/content";
import { Icon } from "./icons";

type Props = {
  item: NavItem;
  dark?: boolean;
  active?: boolean;
  onNavigate?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
};

export default function ElementBox({
  item,
  dark = false,
  active = false,
  onNavigate,
  className = "",
  style,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item.key);
    }
  };
  return (
    <a
      href={item.href}
      data-name={item.key}
      onClick={handleClick}
      className={`element-box ${dark ? "element-box--dark" : ""} ${
        active ? "active" : ""
      } ${className}`}
      style={style}
      aria-label={item.full}
    >
      <span className="eb-text">
        <span aria-hidden="true" className="abbr">
          {item.abbr}
        </span>
        <span className="full">{item.full}</span>
      </span>
      <span className="eb-icon">
        <Icon name={item.icon} />
      </span>
    </a>
  );
}
