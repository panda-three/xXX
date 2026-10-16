import { PHONE, SOCIALS } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import { Icon } from "../icons";

export default function ContactSection() {
  return (
    <section className="site-section" id="contact">
      <div className="sec-container">
        <SectionTitle label="// contact" icon="contact" delay={0.1} />

        <p
          className="sec-p anim-fadeup mx-auto max-w-[720px] text-center"
          style={{ animationDelay: "0.4s" }}
        >
          如果你对 AI 教育、课堂教学、软件开发或任何合作感兴趣，欢迎随时联系我。
        </p>
        <br />
        <p
          className="sec-p anim-fadeup mx-auto max-w-[720px] text-center"
          style={{ animationDelay: "0.55s" }}
        >
          我总是乐于分享与交流。^_^（电话 / 微信：{PHONE}）
        </p>

        <div className="contact-icons anim-fadeup" style={{ animationDelay: "0.75s" }}>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s.icon}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <span className="sr-only">{s.label}</span>
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
