import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const METIERS = ["m1", "m2", "m3", "m4"];

const EDU = [
  "Münchner Kammerspiele (Munich, 2024)",
  "AWUI Media International (Abidjan, 2020–2022)",
  "Festival EMERGENCE (Lomé, 2015)",
  "Baccalauréat — Économie (Kara, 2014)"
];

export default function Skills() {
  const { t } = useI18n();
  return (
    <section className="py-xl bg-surface-container-lowest/50" id="competences">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-base">
          <Reveal className="md:col-span-2 md:row-span-2 technical-border p-lg bg-surface-container-low/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors group">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase mb-base block">{t("sk_software")}</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">{t("sk_mastering")}</h2>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{t("sk_tools")}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  <li className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> Avid Pro Tools</li>
                  <li className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> Ableton Live</li>
                  <li className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> Reaper</li>
                  <li className="flex items-center gap-xs"><span className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" /> Adobe Audition</li>
                </ul>
              </div>
              <div className="space-y-base">
                <p className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30 pb-xs">{t("sk_metiers")}</p>
                <ul className="font-body-md text-body-md text-on-surface space-y-1">
                  {METIERS.map((k) => (
                    <li key={k} className="hover:text-primary transition-colors cursor-default">{t(k)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2 technical-border p-md bg-surface-container-high/60 border-primary/40 flex items-center gap-md hover:bg-surface-container-highest transition-colors cursor-default">
            <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="font-label-md text-label-md text-primary font-bold">L1-3</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">{t("dante_b_t")}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{t("dante_b_s")}</p>
            </div>
          </Reveal>

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-secondary">school</span>
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{t("form_t")}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Münchner Kammerspiele · AWUI Media · Festival EMERGENCE</p>
            </div>
          </Reveal>

          <Reveal className="technical-border p-md bg-surface-container/60 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-secondary">groups</span>
            <div>
              <h4 className="font-body-lg text-body-lg text-on-surface mt-lg">{t("trans_t")}</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Formateur — CANAL+, ONACIG, ATCNA, WELTFILME</p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4 technical-border p-md bg-surface-container-low/60 flex flex-wrap gap-lg items-center hover:bg-surface-container-high transition-colors">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">{t("edu_t")}</span>
            {EDU.map((e) => (
              <div key={e} className="flex items-center gap-xs hover:text-primary transition-colors cursor-default">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_right</span>
                <span className="font-body-md text-body-md">{e}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
