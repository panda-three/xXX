import { HELLO_NAV, SOCIALS } from "@/lib/content";
import ElementBox from "../ElementBox";
import { Icon } from "../icons";

type Props = {
  onNavigate: (key: string) => void;
};

export default function HelloSection({ onNavigate }: Props) {
  return (
    <section className="site-section" id="hello">
      <div className="sec-container">
        <div className="mx-auto w-full max-w-[980px] px-[2%] md:pl-[8%] md:pr-[4%]">
          <h1 className="hello-title">
            <span className="st-bar anim-bar" style={{ animationDelay: "0.15s" }} />
            <span
              className="st-text anim-fadein"
              style={{ animationDelay: "0.45s" }}
            >
              Hello World...
            </span>
          </h1>

          <p className="sec-p anim-fadeup" style={{ animationDelay: "0.55s" }}>
            我是
            <a
              href="#/about/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
              className="mx-1 bg-[#2b2c33] px-1 text-white"
            >
              周磊（Panda）
            </a>
            ，一名 AI 教育工作者｜中职计算机一线教师｜软件开发实践者。我把 AI
            真正带进中职课堂，也用课堂的经验反哺 AI——力求让教学产品实用、好懂、有美感。
          </p>

          <p className="sec-p anim-fadeup" style={{ animationDelay: "0.7s" }}>
            想多了解一点
            <a
              href="#/about/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
              className="mx-1 bg-[#2b2c33] px-1 text-white"
            >
              about my skills
            </a>
            ，或随意看看我的
            <a
              href="#/coding/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("coding");
              }}
              className="mx-1 bg-[#2b2c33] px-1 text-white"
            >
              coding
            </a>
            与
            <a
              href="#/design/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("design");
              }}
              className="mx-1 bg-[#2b2c33] px-1 text-white"
            >
              design
            </a>
            作品。
          </p>

          <hr className="anim-fadein my-8 border-0 border-t border-[#e0e0e0]" style={{ animationDelay: "0.8s" }} />

          <nav className="hello-nav anim-fadeup" style={{ animationDelay: "0.85s" }} aria-label="Section navigation">
            <ul>
              {HELLO_NAV.map((item, i) => (
                <li key={item.key} className="anim-fadeup" style={{ animationDelay: `${0.85 + i * 0.1}s` }}>
                  <ElementBox
                    item={item}
                    onNavigate={onNavigate}
                    className="h-[104px] w-[130px]"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="contact-icons anim-fadeup" style={{ animationDelay: "1.2s" }}>
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
      </div>
    </section>
  );
}
