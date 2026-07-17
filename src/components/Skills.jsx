import { lazy, Suspense } from "react";
import { useTranslations } from "../hooks/useTranslations.jsx";
import { useSiteData } from "../contexts/SiteDataContext";
import Reveal from "./Reveal";
import Icon from "./Icon";

const ParcoursScene = lazy(() => import("./ParcoursScene"));

export default function Skills() {
  const { t, tr } = useTranslations();
  const { skills = [] } = useSiteData();

  const bySection = (section) => skills.find((s) => s.section === section);
  const software = bySection("sk_software");
  const tools = bySection("sk_tools");
  const dante = bySection("dante_b_t");
  const education = bySection("education");
  const training = bySection("training");

  const toolItems = tools?.items || [];
  const softwareItems = software?.items || [];
  const educationItems = education?.items || [];
  const trainingItems = training?.items || [];

  const softwareIdx = skills.findIndex((s) => s.section === "sk_software");
  const toolsIdx = skills.findIndex((s) => s.section === "sk_tools");
  const danteIdx = skills.findIndex((s) => s.section === "dante_b_t");
  const educationIdx = skills.findIndex((s) => s.section === "education");
  const trainingIdx = skills.findIndex((s) => s.section === "training");

  const sectionKey = (idx, fallbackKey) => idx >= 0 ? `db.skills.section${idx + 1}.section` : fallbackKey;
  const titleKey = (idx, fallbackKey) => idx >= 0 ? `db.skills.section${idx + 1}.title` : fallbackKey;
  const itemKey = (idx, itemIdx, fallback) => idx >= 0 ? `db.skills.section${idx + 1}.item${itemIdx + 1}` : fallback;

  return (
    <section className="py-xl bg-surface-container-lowest/50" id="competences">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-base">
          <Reveal className="md:col-span-2 md:row-span-2 technical-border p-lg bg-surface-container-low/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors group">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase mb-base block">{tr(sectionKey(softwareIdx, "sk_software"), t("sk_software"))}</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">{tr(titleKey(softwareIdx, "sk_mastering"), t("sk_mastering"))}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{tr(sectionKey(toolsIdx, "sk_tools"), t("sk_tools"))}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  {softwareItems.map((item, i) => (
                    <li key={item} className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> {tr(itemKey(softwareIdx, i, item), item)}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{tr(titleKey(toolsIdx, "sk_metiers"), t("sk_metiers"))}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  {toolItems.map((item, i) => (
                    <li key={item} className="hover:text-primary transition-colors cursor-default">{tr(itemKey(toolsIdx, i, item), item)}</li>
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
                <h3 className="font-headline-md text-headline-md text-on-surface">{tr(sectionKey(danteIdx, "dante_b_t"), t("dante_b_t"))}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant break-words">{dante.items.map((item, i) => tr(itemKey(danteIdx, i, item), item)).join(", ")}</p>
              </div>
            </Reveal>
          )}

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <Icon name="school" className="text-secondary" />
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{tr(sectionKey(educationIdx, "form_t"), t("form_t"))}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{educationItems.map((item, i) => tr(itemKey(educationIdx, i, item), item)).join(", ")}</p>
            </div>
          </Reveal>

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <Icon name="groups" className="text-secondary" />
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{tr(sectionKey(trainingIdx, "trans_t"), t("trans_t"))}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{trainingItems.map((item, i) => tr(itemKey(trainingIdx, i, item), item)).join(", ")}</p>
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
              {educationItems.map((e, i) => (
                <div key={i} className="flex items-center gap-xs hover:text-primary transition-colors cursor-default">
                  <Icon name="arrow_right" className="text-sm text-on-surface-variant" />
                  <span className="font-body-md text-body-md">{tr(itemKey(educationIdx, i, e), e)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
