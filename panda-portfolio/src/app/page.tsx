"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import HelloSection from "@/components/sections/HelloSection";
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CodingSection from "@/components/sections/CodingSection";
import DesignSection from "@/components/sections/DesignSection";
import ContactSection from "@/components/sections/ContactSection";

const ROUTES = ["hello", "about", "achievements", "coding", "design", "contact"] as const;
type Route = (typeof ROUTES)[number];

const SECTION_META: Record<Route, { title: string }> = {
  hello: { title: "AI Educator | infinite imaginations" },
  about: { title: "about | infinite imaginations" },
  achievements: { title: "achievements | infinite imaginations" },
  coding: { title: "coding | infinite imaginations" },
  design: { title: "design | infinite imaginations" },
  contact: { title: "contact | infinite imaginations" },
};

function parseHash(): Route {
  if (typeof window === "undefined") return "hello";
  const m = window.location.hash.match(/#\/([a-z]+)\/?/);
  const r = m ? (m[1] as Route) : "hello";
  return ROUTES.includes(r) ? r : "hello";
}

export default function Page() {
  const [route, setRoute] = useState<Route>("hello");
  const [animNonce, setAnimNonce] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRoute(parseHash());
    const onHash = () => {
      setRoute(parseHash());
      setAnimNonce((n) => n + 1);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    const t = setTimeout(() => setMounted(true), 1100);
    return () => {
      window.removeEventListener("hashchange", onHash);
      clearTimeout(t);
    };
  }, []);

  const navigate = useCallback((key: string) => {
    const target = `#/${key}/`;
    if (window.location.hash === target) {
      setAnimNonce((n) => n + 1); // 同区块重复点击 → 重放入场动画
      window.scrollTo(0, 0);
    } else {
      window.location.hash = target;
    }
  }, []);

  const renderSection = () => {
    switch (route) {
      case "about":
        return <AboutSection key={`about-${animNonce}`} />;
      case "achievements":
        return <AchievementsSection key={`achievements-${animNonce}`} />;
      case "coding":
        return <CodingSection key={`coding-${animNonce}`} />;
      case "design":
        return <DesignSection key={`design-${animNonce}`} />;
      case "contact":
        return <ContactSection key={`contact-${animNonce}`} />;
      default:
        return <HelloSection key={`hello-${animNonce}`} onNavigate={navigate} />;
    }
  };

  useEffect(() => {
    document.title = SECTION_META[route].title;
  }, [route]);

  return (
    <>
      {!mounted && <Loader />}
      <Header route={route} onNavigate={navigate} />
      <main>{renderSection()}</main>
    </>
  );
}
