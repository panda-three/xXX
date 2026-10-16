import type { IconName } from "@/lib/content";

const CODES: Record<IconName, number> = {
  about: 0xe900,
  email: 0xe901,
  design: 0xe903,
  linkedin: 0xe904,
  coding: 0xe905,
  contact: 0xe906,
  github: 0xe907,
  achievements: 0xe908,
  infinite: 0xe90a,
  warning: 0xe90b,
  chevronRight: 0xe90c,
  cross: 0xe90d,
  twitter: 0xe90e,
  medium: 0xe90f,
};

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`iconfont ${className}`}>
      {String.fromCharCode(CODES[name])}
    </span>
  );
}
