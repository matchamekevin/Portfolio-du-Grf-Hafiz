import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "SIFA",
    href: "https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911?share=copy&fl=ip&fe=ec",
    img: "/image/Showreel/sifa-couverture.jpg",
    subKey: "p1_s",
    delay: "delay-100"
  },
  {
    title: "L'ordure",
    href: "https://vimeo.com/share/23f798bf-ff64-418d-9ac0-acaf66de797c?share=copy&fl=ip&fe=ec",
    img: "/image/Showreel/l-ordure.jpg",
    subKey: "p2_s",
    delay: "delay-200"
  },
  {
    title: "EOL",
    href: "https://vimeo.com/share/85069dc2-f373-4ff8-9f44-47a1a0bfe447?share=copy&fl=ip&fe=ec",
    img: "/image/Showreel/eol.jpg",
    subKey: "p3_s",
    delay: "delay-300"
  },
  {
    title: "Le Coup de Grâce",
    href: "https://vimeo.com/share/f3f47667-4644-421c-843a-d5fe33bb0bd1?share=copy&fl=sv&fe=ci",
    img: "/image/Showreel/le-coup-de-grace.jpg",
    subKey: "p4_s",
    delay: "delay-500"
  },
  {
    title: "SIFA",
    href: "https://youtu.be/26vJxzBDgro?si=M1kK0OxSQf2w6N6l",
    img: "https://img.youtube.com/vi/26vJxzBDgro/maxresdefault.jpg",
    subKey: "p5_s",
    delay: "delay-100"
  }
];

export default function Showreel() {
  const { t } = useI18n();
  return (
    <section className="py-xl bg-surface-container-lowest/50" id="showreel">
      <div className="max-w-container-max mx-auto px-md">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-lg gap-base">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-base block">
              {t("sr_eyebrow")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t("sr_title")}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">
            {t("sr_desc")}
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-md">
          {PROJECTS.map((p) => (
            <Reveal key={p.title} className={`${p.delay} w-full md:w-[calc(50%_-_12px)]`}>
              <a
                className="group relative technical-border bg-surface-container/40 overflow-hidden cursor-pointer block"
                href={p.href}
                target="_blank"
                rel="noopener"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-display-lg text-primary scale-90 group-hover:scale-100 transition-transform duration-300">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="p-md flex justify-between items-center border-t border-outline-variant/30">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{p.title}</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant">{t(p.subKey)}</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                    arrow_outward
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
