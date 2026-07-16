import { lazy, Suspense } from "react";
import { useI18n } from "../i18n/I18nContext";
import { useSiteData } from "../contexts/SiteDataContext";
import Reveal from "./Reveal";

const ParcoursScene = lazy(() => import("./ParcoursScene"));

export default function Skills() {
  const { t } = useI18n();
  const { skills = [] } = useSiteData();

  const bySection = (section) => skills.find((s) => s.section === section);
  const software = bySection("sk_software");
  const tools = bySection("sk_tools");
  const dante = bySection("dante_b_t");
  const education = bySection("education");
  const training = bySection("training");

  const toolItems = tools?.items || [];
  const softwareItems = software?.items || [];

  return (
    <section className="py-xl bg-surface-container-lowest/50" id="competences">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-base">
          <Reveal className="md:col-span-2 md:row-span-2 technical-border p-lg bg-surface-container-low/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors group">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase mb-base block">{t("sk_software")}</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">{t("sk_mastering")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{t("sk_tools")}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  {softwareItems.map((item) => (
                    <li key={item} className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{t("sk_metiers")}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  {toolItems.map((item) => (
                    <li key={item} className="hover:text-primary transition-colors cursor-default">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {dante && (
            <Reveal className="md:col-span-2 technical-border p-md bg-surface-container-high/60 border-primary/40 flex items-center gap-md hover:bg-surface-container-highest transition-colors cursor-default">
              <div className="w-16 h-16 shrink-0 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="font-label-lg text-label-lg text-primary font-bold">Dante</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface">{t("dante_b_t")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant break-words">{dante.items.join(", ")}</p>
              </div>
            </Reveal>
          )}

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-secondary">school</span>
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{t("form_t")}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{education?.items?.join(", ") || ""}</p>
            </div>
          </Reveal>

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-secondary">groups</span>
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{t("trans_t")}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{training?.items?.join(", ") || ""}</p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4 technical-border p-md bg-surface-container-low/60 flex flex-col md:flex-row gap-md hover:bg-surface-container-high transition-colors overflow-hidden">
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 mx-auto md:mx-0 md:shrink-0 technical-border bg-surface-container/30 overflow-hidden shrink-0">
              <Suspense fallback={null}>
                <ParcoursScene />
              </Suspense>
            </div>
            <div className="flex-1 flex flex-col gap-base text-left md:pl-lg">
              <span className="font-headline-lg text-headline-lg text-primary uppercase">{t("edu_t")}</span>
              {education?.items?.map((e) => (
                <div key={e} className="flex items-center gap-xs hover:text-primary transition-colors cursor-default">
                  <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_right</span>
                  <span className="font-body-md text-body-md">{e}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
