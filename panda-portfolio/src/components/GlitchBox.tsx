import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  live?: boolean;
  className?: string;
};

/** 复古 glitch 效果容器：底层画面 + 红/青两路错位剪切层 */
export default function GlitchBox({ children, live = false, className = "" }: Props) {
  return (
    <div className={`glitch-box ${live ? "glitch-live" : ""} ${className}`}>
      <div className="gl-base">{children}</div>
      <div className="gl-layer gl-layer--a" aria-hidden="true">
        {children}
      </div>
      <div className="gl-layer gl-layer--b" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
