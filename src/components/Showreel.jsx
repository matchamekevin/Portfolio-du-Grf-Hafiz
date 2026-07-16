import { useI18n } from "../i18n/I18nContext";
import { useSiteData } from "../contexts/SiteDataContext";
import CloudinaryImg from "./admin/CloudinaryImg";
import Reveal from "./Reveal";

export default function Showreel() {
  const { t } = useI18n();
  const { showreel = [] } = useSiteData();

  const projects = showreel
    .filter((p) => p.active)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

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
          {projects.map((p) => (
            <Reveal key={p.id} className={`${p.delay || ""} w-full md:w-[calc(50%_-_12px)]`}>
              <a
                className="group relative technical-border bg-surface-container/40 overflow-hidden cursor-pointer block"
                href={p.href}
                target="_blank"
                rel="noopener"
              >
                <div className="aspect-video relative overflow-hidden">
                  {p.imageUrl ? (
                    <CloudinaryImg
                      src={p.imageUrl}
                      alt={p.title}
                      w={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">play_circle</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-display-lg text-primary scale-90 group-hover:scale-100 transition-transform duration-300">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="p-md flex justify-between items-center border-t border-outline-variant/30">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface truncate">{p.title}</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant">{p.subKey ? t(p.subKey) : ""}</p>
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
