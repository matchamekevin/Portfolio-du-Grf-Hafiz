import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "SIFA",
    href: "https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911?share=copy&fl=ip&fe=ec",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqgbID6yDUd89Z4eIRrSQFMJVSgRvzZ1xDguWYMuBpJZ00TuQ-zjPJ02keapME24SwUcmrTEUIyRILaRhsTY6yy2Fm1uXtqkhh3x9jSa3mHqWoRaqGqyO4nH9bUj_45bYFj3WSWcTfU9iOTQpP-fwnjihBpsT6LQK9O8-Ci-H8uDejygQyxjT8neZALkmREwGMrAabmfHpMsDyk4pRfHUb-iIQKFCikGtcHQi62axKNGGcPwerHsTp",
    subKey: "p1_s",
    delay: "delay-100"
  },
  {
    title: "L'ordure",
    href: "https://vimeo.com/share/23f798bf-ff64-418d-9ac0-acaf66de797c?share=copy&fl=ip&fe=ec",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQToJ2SDY0O1QUjFWqfMCrPCXkoNi4LidmJlg6NSCNoFfLVONhKOXYC9M9P1pOPGqUJz5f0yIM-8cmW07iTJvYCQbvwko57aRLMoxoWLQJDEPJWHLyMoP_ssEcffM6q7HUUTI14C9C_2llWqKXOdiZEDlXqP_b4AHuQWGzWU0i3dqqE9mVq6L6aN1kMltD4pELhNDB1C7KEeIFgZqWIbBxgqB8Km8pBJGObX-4nySP4blFz1ccHXDP",
    subKey: "p2_s",
    delay: "delay-200"
  },
  {
    title: "EOL",
    href: "https://vimeo.com/share/85069dc2-f373-4ff8-9f44-47a1a0bfe447?share=copy&fl=ip&fe=ec",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_-gB0SqH9V-fIohFImX-KMnEHnqa1-3v2wKvnlIdm8lN_mfNgL9tb0xDUqTSu-Pce2bRQd2US03zpFQg-QOmBJ1201sn1YiZUiA0Cw07ejPu7qA-kR3Xwj2tFbDZdxVlgYIiegEqPux9ezxkUGbrZH2zczGtkErV6kjkSr-mONzVHG8xWqMwKgY0tkmRe3842Idn773j4tA87ENmq-VKfpgIGUFIyZOUpLrhDQeOFsTKNzRCOmXjV",
    subKey: "p3_s",
    delay: "delay-300"
  },
  {
    title: "Le Coup de Grâce",
    href: "https://vimeo.com/share/f3f47667-4644-421c-843a-d5fe33bb0bd1?share=copy&fl=sv&fe=ci",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2z8fmSVYhELgjAy33BTf1LhhQKDX0cFEFRMJQOEWRjmyKGx_-DBvly89NPhREZPjeEeu6TxgX_8XX4O-uNHfHpCaaSjlPIpHdvopbN27SnP-mNd5CGBDrq0oiZza_J_XIQSXuUD7T6CWxHX0aNMgsuZcrjXGRxtkunYqJ_-GELzIniwWROSdPT5F60nRR33k_5C3uYV_jq63iDHqlJ0MxkUlBYw3uKMlOuSbk9CPjIWTFi3mz7n12",
    subKey: "p4_s",
    delay: "delay-500"
  }
];

export default function Showreel() {
  const { t } = useI18n();
  return (
    <section className="py-xl bg-surface-container-lowest/50" id="showreel">
      <div className="max-w-container-max mx-auto px-md">
        <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-base reveal">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-base block">
              {t("sr_eyebrow")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t("sr_title")}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">
            {t("sr_desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {PROJECTS.map((p) => (
            <Reveal key={p.title} className={p.delay}>
              <a
                className="group relative technical-border bg-surface-container/40 overflow-hidden cursor-pointer block"
                href={p.href}
                target="_blank"
                rel="noopener"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${p.img}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-display-lg text-primary scale-90 group-hover:scale-100 transition-transform duration-300">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="p-md flex justify-between items-center border-t border-outline-variant/30">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{p.title}</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant">{t(p.subKey)}</p>
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
