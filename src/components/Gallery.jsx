import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const SHOTS = [
  { src: "/image/quelques-images-de-tournages/im1.jpeg", alt: "Tournage", cap: "g_cap1" },
  { src: "/image/quelques-images-de-tournages/im2.jpeg", alt: "Prise de son", cap: "g_cap2" },
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section className="py-xl bg-surface-container-lowest/50" id="galerie">
      <div className="max-w-container-max mx-auto px-md">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-lg gap-base">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-base block">
              {t("g_eyebrow")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t("g_title")}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">
            {t("g_desc")}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-start">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} className={i === 1 ? "delay-100" : ""}>
              <figure className="group technical-border bg-surface-container/40 overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <figcaption className="p-sm font-label-sm text-label-sm text-on-surface-variant border-t border-outline-variant/30">
                  {t(shot.cap)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
