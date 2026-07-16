import { lazy, Suspense } from "react";
import { useSiteData } from "../contexts/SiteDataContext";
import { useI18n } from "../i18n/I18nContext";

const ThreeScene = lazy(() => import("./ThreeScene"));

export default function Hero() {
  const { hero, contact } = useSiteData();
  const { t, tr } = useI18n();

  const status = hero?.status || t("hero_status");
  const title = hero?.title || t("hero_title");
  const subtitle = hero?.subtitle || t("hero_sub");
  const badge = hero?.badge || t("hero_badge");
  const availability = contact?.availability || t("hero_status");
  const location = contact?.location || "Lome, Togo";

  const tags = Array.isArray(hero?.tags) && hero.tags.length > 0
    ? hero.tags
    : [];

  return (
    <section className="relative min-h-[480px] md:min-h-[680px] flex items-start overflow-hidden border-b border-outline-variant pt-8 md:pt-12">
      <div className="relative z-10 max-w-container-max mx-auto px-md w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 animate-fade-in-up">
          <div className="flex items-center gap-base mb-md">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest">{t("c_avail")} :</span>
            <span className="font-label-md text-label-md text-on-surface-variant">{availability} · {location}</span>
          </div>
          <h1
            className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-surface mb-md break-words"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg delay-100 opacity-0 animate-fade-in-up"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <div className="flex flex-wrap gap-xs sm:gap-base delay-200 opacity-0 animate-fade-in-up">
            {tags.map((tag, i) => {
              const label = tag.l || String(i + 1).padStart(2, "0");
              return (
                <div
                  key={i}
                  className="px-sm sm:px-md py-xs sm:py-sm technical-border bg-surface-container/50 hover:bg-surface-container-high transition-colors hover:border-primary/50 group min-w-0"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase group-hover:text-primary transition-colors">
                    {label}
                  </span>
                    <span className="font-body-md text-body-md text-on-surface break-words">
                    {Array.isArray(tag.v)
                      ? tag.v.map((part, j) =>
                          typeof part === "string" ? (
                            part
                          ) : (
                            <a key={j} href={part.href} className="text-primary hover:underline">{part.text}</a>
                          )
                        )
                      : tag.v}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block opacity-0 animate-fade-in-up delay-300">
          <div
            className="relative aspect-[3/4] technical-border bg-surface-container/30 overflow-hidden group"
            id="three-container"
          >
            <div className="absolute bottom-md left-md z-10">
              <span className="font-label-sm text-label-sm text-primary uppercase bg-background/80 px-2 py-1">
                {badge}
              </span>
            </div>
            <Suspense fallback={null}>
              <ThreeScene />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
