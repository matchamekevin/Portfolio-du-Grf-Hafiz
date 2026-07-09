import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="w-full py-xl bg-surface-container-lowest/80 border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-md max-w-container-max mx-auto gap-base">
        <div className="flex flex-col gap-xs text-center md:text-left">
          <span className="font-headline-md text-headline-md text-on-surface">Caled Boukari</span>
          <p
            className="text-secondary font-label-md text-label-md"
            dangerouslySetInnerHTML={{ __html: t("footer_copy") }}
          />
        </div>
        <div className="flex gap-lg">
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all underline-offset-4 hover:underline" href="mailto:caledboukari@yahoo.com">Email</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all underline-offset-4 hover:underline" href="tel:+22893707051">+228 93 70 70 51</a>
          <a className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all underline-offset-4 hover:underline" href="https://vimeo.com/share/4c7766c4-9c98-4a17-a846-f3413501a911" target="_blank" rel="noopener">Vimeo</a>
        </div>
      </div>
    </footer>
  );
}
