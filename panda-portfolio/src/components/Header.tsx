"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/content";
import Logo from "./Logo";
import ElementBox from "./ElementBox";
import { Icon } from "./icons";

type Props = {
  route: string;
  onNavigate: (key: string) => void;
};

export default function Header({ route, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // 滚动隐藏/显示 header（与原站行为一致）
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 100) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavigate = useCallback(
    (key: string) => {
      closeMenu();
      onNavigate(key);
    },
    [closeMenu, onNavigate]
  );

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleNavigate("hello");
  };

  return (
    <>
      <header className={`site-header ${hidden ? "hide" : ""} ${menuOpen ? "dark" : ""}`}>
        <div className="logo anim-fadeup" style={{ animationDelay: "0.4s" }}>
          <a
            href="#/hello/"
            data-name="hello"
            aria-label="Home"
            onClick={handleLogoClick}
            className="block"
          >
            <Logo color="#383838" />
          </a>
        </div>

        <button
          className={`menu-btn anim-fadein ${menuOpen ? "active" : ""}`}
          style={{ animationDelay: "0.5s" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="menu-box tl" />
          <span className="menu-box tr" />
          <span className="menu-box bl" />
          <span className="menu-box br" />
        </button>
      </header>

      {/* 全屏菜单遮罩 */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-top-fade" />
        <button className="menu-close anim-fadein" onClick={closeMenu} aria-label="Close menu">
          <Icon name="cross" className="text-[2.4em]" />
        </button>

        <div className="absolute inset-0 flex items-center justify-center">
          <ul className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:gap-8">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.key} className="anim-fadeup" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
                <ElementBox
                  item={item}
                  dark
                  active={route === item.key}
                  onNavigate={handleNavigate}
                  className="h-[104px] w-[168px] md:h-[128px] md:w-[200px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
