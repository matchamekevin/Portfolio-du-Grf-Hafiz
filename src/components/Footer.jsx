import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="w-full py-md bg-surface-container-lowest/80 border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-md max-w-container-max mx-auto gap-md">
        <div className="flex flex-col gap-xs text-center md:text-left">
          <span className="font-headline-sm text-headline-sm text-on-surface">Caled Boukari</span>
          <p
            className="text-secondary font-label-sm text-label-sm"
            dangerouslySetInnerHTML={{ __html: t("footer_copy") }}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all" href="mailto:caledboukari@yahoo.com">
            <span className="material-symbols-outlined text-base">mail</span>
            Email
          </a>
          <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all" href="tel:+22893707051">
            <span className="material-symbols-outlined text-base">call</span>
            +228 93 70 70 51
          </a>
          <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all" href="https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911" target="_blank" rel="noopener">
            <span className="material-symbols-outlined text-base">smart_display</span>
            Vimeo
          </a>
        </div>
      </div>
    </footer>
  );
}
