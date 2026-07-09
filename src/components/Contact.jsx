import { useI18n } from "../i18n/I18nContext";
import Reveal from "./Reveal";

const OPTIONS = ["opt1", "opt2", "opt3", "opt4", "opt5"];

export default function Contact() {
  const { t } = useI18n();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const subject = encodeURIComponent("Nouveau message — " + (d.get("name") || ""));
    const body = encodeURIComponent(
      "Projet: " + d.get("project") + "\n\n" + d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")"
    );
    window.location.href = "mailto:caledboukari@yahoo.com?subject=" + subject + "&body=" + body;
  };

  return (
    <section className="py-xl bg-surface-container-lowest/50 border-t border-outline-variant/30" id="contact">
      <div className="max-w-container-max mx-auto px-md grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <Reveal className="lg:col-span-4 space-y-md">
          <div className="studio-border bg-surface rounded-lg p-md space-y-lg h-full technical-border">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{t("contact_title")}</h3>
            <div className="space-y-md">
              <a className="block group" href="mailto:caledboukari@yahoo.com">
                <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                  <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_email")}</p>
                  <p className="font-body-lg text-primary mt-xs truncate">caledboukari@yahoo.com</p>
                </div>
              </a>
              <a className="block group" href="tel:+22893707051">
                <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                  <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_phone")}</p>
                  <p className="font-body-lg text-primary mt-xs">+228 93 70 70 51</p>
                </div>
              </a>
              <a className="block group" href="tel:+22899849707">
                <div className="p-md bg-surface-container technical-border glow-amber transition-all">
                  <p className="font-label-sm text-on-surface-variant uppercase">{t("c_label_phone2")}</p>
                  <p className="font-body-lg text-primary mt-xs">+228 99 84 97 07</p>
                </div>
              </a>
            </div>
            <div className="pt-md space-y-sm">
              <p className="font-label-sm text-on-surface-variant uppercase border-b border-outline-variant pb-2">{t("c_avail")}</p>
              <div className="flex items-center gap-base">
                <span className="led-indicator led-active" />
                <span className="font-body-md">{t("c_avail1")}</span>
              </div>
              <div className="flex items-center gap-base opacity-70">
                <span className="led-indicator led-active" />
                <span className="font-body-md">Lomé, Togo — International / Remote</span>
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
                <select
                  className="w-full bg-surface-container-lowest border border-outline-variant p-md focus:border-primary focus:ring-0 text-on-surface font-body-md transition-all"
                  name="project"
                >
                  {OPTIONS.map((o) => (
                    <option key={o} value={t(o)}>{t(o)}</option>
                  ))}
                </select>
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
                  className="bg-primary text-on-primary font-label-md uppercase tracking-widest px-xl py-md hover:brightness-110 active:scale-95 transition-all glow-amber"
                  type="submit"
                >
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
