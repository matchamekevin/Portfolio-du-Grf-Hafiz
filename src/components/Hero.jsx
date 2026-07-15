import { useI18n } from "../i18n/I18nContext";
import ThreeScene from "./ThreeScene";

const TAGS = [
  { l: "hero_tag1_l", v: "Tournages & Post-prod" },
  { l: "hero_tag2_l", v: "Théâtre & Live" },
  { l: "hero_tag3_l", v: ["CANAL+ & ", { text: "le cinéma parle", href: "mailto:lecinemaparle@gmail.com" }] }
];

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] flex items-start overflow-hidden border-b border-outline-variant pt-8 md:pt-12">
      <div className="relative z-10 max-w-container-max mx-auto px-md w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8 animate-fade-in-up">
          <div className="flex items-center gap-base mb-md">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest">
              {t("hero_status")}
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">Lomé, Togo</span>
          </div>
          <h1
            className="font-display-lg text-display-lg text-on-surface mb-md"
            dangerouslySetInnerHTML={{ __html: t("hero_title") }}
          />
          <p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg delay-100 opacity-0 animate-fade-in-up"
            dangerouslySetInnerHTML={{ __html: t("hero_sub") }}
          />
          <div className="flex flex-wrap gap-base delay-200 opacity-0 animate-fade-in-up">
            {TAGS.map((tag) => (
              <div
                key={tag.l}
                className="px-md py-sm technical-border bg-surface-container/50 hover:bg-surface-container-high transition-colors hover:border-primary/50 group"
              >
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1 uppercase group-hover:text-primary transition-colors">
                  {t(tag.l)}
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  {Array.isArray(tag.v)
                    ? tag.v.map((part, i) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <a key={i} href={part.href} className="text-primary hover:underline">{part.text}</a>
                        )
                      )
                    : tag.v}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 hidden md:block opacity-0 animate-fade-in-up delay-300">
          <div
            className="relative aspect-[3/4] technical-border bg-surface-container/30 overflow-hidden group"
            id="three-container"
          >
            <div className="absolute bottom-md left-md z-10">
              <span className="font-label-sm text-label-sm text-primary uppercase bg-background/80 px-2 py-1">
                {t("hero_badge")}
              </span>
            </div>
            <ThreeScene />
          </div>
        </div>
      </div>
    </section>
  );
}
