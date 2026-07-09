import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const CINEMA = [
  { title: "SIFA", role: "f1_r", meta: "2024 · Togo" },
  { title: "Une fiancée à la barre", role: "f2_r", meta: "2023 · Togo" },
  { title: "Le retour sur la terre des ancêtres", role: "f3_r", meta: "2023 · Bénin / Canada" },
  { title: "Togoland Projections", role: "f4_r", meta: "2022 · Togo / France / Allemagne" },
  { title: "Agome Seva, de l'ombre à la lumière", role: "f5_r", meta: "2022 · Togo / Belgique" }
];

const THEATRE = [
  { title: "Young Confession", role: "f6_r", meta: "2024 · Allemagne" },
  { title: "Les statues rêvent aussi, vision d'un retour — Acte 2", role: "f7_r", meta: "2023 · Burkina Faso" }
];

const ACCENT = {
  primary: { text: "text-primary", hover: "group-hover:text-primary" },
  secondary: { text: "text-secondary", hover: "group-hover:text-secondary" }
};

function Entry({ item, accent }) {
  const { t } = useI18n();
  const A = ACCENT[accent];
  return (
    <Reveal className="flex flex-col md:flex-row justify-between p-md technical-border bg-surface-container-low/40 hover:bg-surface-container transition-all hover:border-primary/40 group">
      <div>
        <h4 className={`font-headline-md text-headline-md text-on-surface ${A.hover} transition-colors`}>
          {item.title}
        </h4>
        <p className="font-body-md text-body-md text-on-surface-variant">{t(item.role)}</p>
      </div>
      <span className={`font-label-md text-label-md ${A.text} mt-base md:mt-0 opacity-70 ${A.hover} group-hover:opacity-100 transition-opacity`}>
        {item.meta}
      </span>
    </Reveal>
  );
}

export default function Experiences() {
  const { t } = useI18n();
  return (
    <section className="py-xl bg-background/50" id="experiences">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2
              className="font-headline-lg text-headline-lg text-on-surface sticky top-24"
              dangerouslySetInnerHTML={{ __html: t("exp_title") }}
            />
            <div className="mt-md space-y-md">
              <div className="technical-border p-md bg-surface-container-low/80 hover:bg-surface-container-high transition-all hover:border-tertiary/40 group">
                <span className="material-symbols-outlined text-tertiary mb-base group-hover:scale-110 transition-transform">verified</span>
                <p className="font-body-md text-body-md text-on-surface">{t("dante_t")}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{t("dante_s")}</p>
              </div>
              <div className="technical-border p-md bg-surface-container-low/80">
                <span className="material-symbols-outlined text-secondary mb-base">language</span>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-xs">{t("lang_t")}</p>
                <p className="font-body-md text-body-md text-on-surface">{t("lang_v")}</p>
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
                {CINEMA.map((item) => (
                  <Entry key={item.title} item={item} accent="primary" />
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
                {THEATRE.map((item) => (
                  <Entry key={item.title} item={item} accent="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
