import { useI18n } from "../i18n/I18nContext";
import { useSiteData } from "../contexts/SiteDataContext";

export default function Footer() {
  const { t } = useI18n();
  const { footer } = useSiteData();
  if (!footer) return null;
  const footerName = t("db.footer.name") || footer.name;
  const footerCopyright = t("db.footer.copyright") || footer.copyright;
  return (
    <footer className="w-full py-md bg-surface-container-lowest/80 border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-md max-w-container-max mx-auto gap-md">
        <div className="flex flex-col gap-xs text-center md:text-left">
          <span className="font-headline-sm text-headline-sm text-on-surface">{footerName}</span>
          <p
            className="text-secondary font-label-sm text-label-sm"
            dangerouslySetInnerHTML={{ __html: footerCopyright }}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-md sm:gap-lg">
          {footer.email && (
            <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all py-2" href={`mailto:${footer.email}`}>
              <span className="material-symbols-outlined text-base">mail</span>
              {t("c_label_email")}
            </a>
          )}
          {footer.phone && (
            <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all py-2" href={`tel:${footer.phone}`}>
              <span className="material-symbols-outlined text-base">call</span>
              {footer.phone}
            </a>
          )}
          {footer.vimeoUrl && (
            <a className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all py-2" href={footer.vimeoUrl} target="_blank" rel="noopener">
              <span className="material-symbols-outlined text-base">smart_display</span>
              Vimeo
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
