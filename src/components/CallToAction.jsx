import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

export default function CallToAction() {
  const { t } = useI18n();
  return (
    <section className="py-xl border-t border-outline-variant/30">
      <Reveal className="max-w-container-max mx-auto px-md text-center">
        <h2
          className="font-display-lg text-display-lg text-on-surface mb-md"
          dangerouslySetInnerHTML={{ __html: t("cta_title") }}
        />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-xl">{t("cta_desc")}</p>
        <div className="flex flex-col md:flex-row justify-center gap-md">
          <a
            className="px-lg py-sm bg-primary text-on-primary font-body-md text-body-md uppercase tracking-widest glow-amber hover:brightness-110 hover:-translate-y-px active:scale-95 transition-all rounded-lg"
            href="mailto:caledboukari@yahoo.com"
          >
            {t("cta_engage")}
          </a>
          <a
            className="px-lg py-sm technical-border bg-surface-container/40 hover:bg-surface-container font-body-md text-body-md uppercase tracking-widest transition-all rounded-lg active:scale-95"
            href="mailto:caledboukari@yahoo.com?subject=CV%20Caled%20Boukari"
          >
            {t("cta_cv")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
