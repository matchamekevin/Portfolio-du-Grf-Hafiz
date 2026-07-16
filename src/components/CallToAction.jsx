import { useSiteData } from "../contexts/SiteDataContext";
import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

export default function CallToAction() {
  const { cta } = useSiteData();
  const { t } = useI18n();
  if (!cta) return null;
  const title = t("db.cta.title") || cta.title;
  const titleAccent = t("db.cta.titleAccent") || cta.titleAccent;
  const description = t("db.cta.description") || cta.description;
  const engageLabel = t("db.cta.engageLabel") || cta.engageLabel;
  const cvLabel = t("db.cta.cvLabel") || cta.cvLabel;
  const titleHtml = titleAccent
    ? `${title} <span class="text-primary">${titleAccent}</span>`
    : title;
  return (
    <section className="py-xl border-t border-outline-variant/30">
      <Reveal className="max-w-container-max mx-auto px-md text-center">
        <h2
          className="font-display-lg text-3xl sm:text-5xl md:text-display-lg text-on-surface mb-md break-words"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-xl">{description}</p>
        <div className="flex flex-col md:flex-row justify-center gap-md">
          <a
            className="px-lg py-md bg-primary text-on-primary font-body-md text-body-md uppercase tracking-widest glow-amber hover:brightness-110 hover:-translate-y-px active:scale-95 transition-all rounded-lg"
            href={cta.engageHref}
          >
            {engageLabel}
          </a>
          <a
            className="px-lg py-md technical-border bg-surface-container/40 hover:bg-surface-container font-body-md text-body-md uppercase tracking-widest transition-all rounded-lg active:scale-95"
            href={cta.cvHref}
          >
            {cvLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
