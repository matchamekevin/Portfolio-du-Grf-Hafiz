import { useI18n } from "../i18n/I18nContext";
import { useSiteData } from "../contexts/SiteDataContext";
import Reveal from "./Reveal";

const ACCENT = {
  primary: { text: "text-primary", hover: "group-hover:text-primary" },
  secondary: { text: "text-secondary", hover: "group-hover:text-secondary" }
};

function Entry({ item, accent }) {
  const { t } = useI18n();
  const A = ACCENT[accent];
  const role = (item.role && !item.role.includes(" ")) ? t(item.role) : item.role;
  return (
    <Reveal className="flex flex-col md:flex-row md:items-start md:gap-gutter justify-between p-md technical-border bg-surface-container-low/40 hover:bg-surface-container transition-all hover:border-primary/40 group">
      <div className="md:flex-1">
        <h4 className={`font-headline-md text-headline-md text-on-surface ${A.hover} transition-colors`}>
          {item.title}
        </h4>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{role}</p>
      </div>
      <span className={`font-label-md text-label-md text-right md:text-right ${A.text} mt-base md:mt-0 md:shrink-0 opacity-70 ${A.hover} group-hover:opacity-100 transition-opacity`}>
        {item.meta}
      </span>
    </Reveal>
  );
}

export default function Experiences() {
  const { t } = useI18n();
  const { experiences = [], trajectoire } = useSiteData();

  const cinema = experiences
    .filter((e) => e.category === "cinema")
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const theatre = experiences
    .filter((e) => e.category === "theatre")
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const danteItems = trajectoire?.danteItems || [];
  const languages = trajectoire?.languages || [];

  return (
    <section className="py-xl bg-background/50" id="experiences">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <div className="sticky top-14 md:top-24 z-30 relative -mx-3 px-3 pt-6 pb-4 md:pt-10 md:pb-8 bg-surface">
              <h2
                className="font-headline-lg text-headline-lg text-on-surface break-words"
                dangerouslySetInnerHTML={{ __html: t("exp_title") }}
              />
            </div>
            <div className="mt-md space-y-md">
              <div className="technical-border p-md bg-surface-container-low/80 hover:bg-surface-container-high transition-all hover:border-tertiary/40 group">
                <span className="material-symbols-outlined text-tertiary mb-base group-hover:scale-110 transition-transform">verified</span>
                <p className="font-body-md text-body-md text-on-surface">{t("db.trajectoire.danteSubtitle") || trajectoire?.danteSubtitle || t("dante_t")}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{t("db.trajectoire.danteTitle") || trajectoire?.danteTitle || t("dante_s")}</p>
              </div>
              <div className="technical-border p-md bg-surface-container-low/80">
                <span className="material-symbols-outlined text-secondary mb-base">language</span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-xs">{t("lang_t")}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1 list-disc list-inside pl-1">
                  {languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-xl">
            <div>
              <div className="flex items-center gap-base mb-lg">
                <div className="h-px flex-grow bg-outline-variant/30" />
                <h3 className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">{t("exp_cinema")}</h3>
                <div className="h-px w-12 bg-outline-variant/30" />
              </div>
              <div className="space-y-sm">
                {cinema.map((item) => (
                  <Entry key={item.id} item={item} accent="primary" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-base mb-lg">
                <div className="h-px flex-grow bg-outline-variant/30" />
                <h3 className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">{t("exp_theatre")}</h3>
                <div className="h-px w-12 bg-outline-variant/30" />
              </div>
              <div className="space-y-sm">
                {theatre.map((item) => (
                  <Entry key={item.id} item={item} accent="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
