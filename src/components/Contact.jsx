import { useState, useRef, useEffect } from "react";
import { useI18n } from "../i18n/I18nContext";
import { useSiteData } from "../contexts/SiteDataContext";
import Reveal from "./Reveal";

const OPTIONS = ["opt1", "opt2", "opt3", "opt4", "opt5"];

export default function Contact() {
  const { t } = useI18n();
  const { contact } = useSiteData();
  const [project, setProject] = useState("");
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const email = contact?.formEmail || contact?.email || "caledboukari@yahoo.com";
  const phone1 = contact?.phone1 || "+22893707051";
  const phone2 = contact?.phone2 || "";
  const availability = t("db.contact.availability") || contact?.availability || t("c_avail1");
  const location = t("db.contact.location") || contact?.location || "Lome, Togo, International / Remote";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const subject = encodeURIComponent("Nouveau message ,  " + (d.get("name") || ""));
    const body = encodeURIComponent(
      "Projet: " + d.get("project") + "\n\n" + d.get("message") + "\n\n,  " + d.get("name") + " (" + d.get("email") + ")"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-xl bg-surface-container-lowest/50 border-t border-outline-variant/30" id="contact">
      <div className="max-w-container-max mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <Reveal className="lg:col-span-4 space-y-md">
          <div className="studio-border bg-surface rounded-lg p-md space-y-lg h-full technical-border">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t("contact_title")}</h3>
            <div className="space-y-md">
              <a className="block group" href={`mailto:${email}`}>
                <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                  <div className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-lg text-on-surface-variant">mail</span>
                    <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_email")}</p>
                  </div>
                  <p className="font-body-lg text-primary mt-xs truncate">{email}</p>
                </div>
              </a>
              {phone1 && (
                <a className="block group" href={`tel:${phone1}`}>
                  <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                    <div className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-lg text-on-surface-variant">call</span>
                      <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_phone")}</p>
                    </div>
                    <p className="font-body-lg text-primary mt-xs">{phone1}</p>
                  </div>
                </a>
              )}
              {phone2 && (
                <a className="block group" href={`tel:${phone2}`}>
                  <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                    <div className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-lg text-on-surface-variant">smartphone</span>
                      <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_phone2")}</p>
                    </div>
                    <p className="font-body-lg text-primary mt-xs">{phone2}</p>
                  </div>
                </a>
              )}
            </div>
            <div className="pt-md space-y-sm">
              <p className="font-label-sm text-on-surface-variant uppercase border-b border-outline-variant pb-2">{t("c_avail")}</p>
              <div className="flex items-center gap-base">
                <span className="font-body-md">{availability} / {location}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <div className="studio-border bg-surface-container-low rounded-lg overflow-hidden technical-border">
            <div className="module-header flex justify-between items-center">
              <span>Message_Inbound_Buffer</span>
              <div className="flex items-center gap-xs">
                <span className="text-[9px]">ENCRYPTED</span>
                <span className="material-symbols-outlined text-xs">lock</span>
              </div>
            </div>
            <form className="p-md lg:p-lg grid grid-cols-1 md:grid-cols-2 gap-md" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="font-label-sm text-on-surface-variant uppercase">{t("f_name")}</label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant p-md focus:border-primary focus:ring-0 text-on-surface font-body-md transition-all"
                  placeholder={t("ph_name")}
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="space-y-xs">
                <label className="font-label-sm text-on-surface-variant uppercase">{t("f_email")}</label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant p-md focus:border-primary focus:ring-0 text-on-surface font-body-md transition-all"
                  placeholder={t("ph_email")}
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="font-label-sm text-on-surface-variant uppercase">{t("f_project")}</label>
                <div className="relative" ref={ddRef}>
                  <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    className="w-full flex items-center justify-between bg-surface-container-lowest border border-outline-variant p-md focus:border-primary focus:ring-0 text-on-surface font-body-md transition-all cursor-pointer"
                  >
                    <span className={project ? "text-on-surface" : "text-on-surface-variant"}>
                      {project || t("f_project_ph")}
                    </span>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${open ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {open && (
                    <ul className="absolute z-20 mt-1 w-full bg-surface-container-lowest border border-outline-variant shadow-lg max-h-60 overflow-auto">
                      {OPTIONS.map((o) => {
                        const label = t(o);
                        const active = project === label;
                        return (
                          <li key={o}>
                            <button
                              type="button"
                              onClick={() => { setProject(label); setOpen(false); }}
                              className={`w-full text-left flex items-center justify-between gap-base px-md py-md font-body-md transition-colors min-h-[44px] ${active ? "text-primary bg-surface-container-high" : "text-on-surface hover:bg-surface-container-high"}`}
                            >
                              <span>{label}</span>
                              {active && <span className="material-symbols-outlined text-sm text-primary">check</span>}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <input type="hidden" name="project" value={project} />
                </div>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="font-label-sm text-on-surface-variant uppercase">{t("f_message")}</label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant p-md focus:border-primary focus:ring-0 text-on-surface font-body-md transition-all resize-none"
                  placeholder={t("ph_message")}
                  rows="6"
                  name="message"
                  required
                />
              </div>
              <div className="md:col-span-2 flex justify-between items-center pt-md">
                <button
                  className="flex items-center gap-xs justify-center bg-primary text-on-primary font-label-md uppercase tracking-widest px-lg py-md min-h-[48px] hover:brightness-110 active:scale-95 transition-all glow-amber"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-xl -rotate-45">send</span>
                  {t("f_submit")}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
