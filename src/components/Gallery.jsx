import { useTranslations } from "../hooks/useTranslations.jsx";
import { useSiteData } from "../contexts/SiteDataContext";
import CloudinaryImg from "./admin/CloudinaryImg";
import Reveal from "./Reveal";

export default function Gallery() {
  const { t, tr } = useTranslations();
  const { gallery = [] } = useSiteData();

  const shots = gallery
    .filter((s) => s.active)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section className="py-xl bg-surface-container-lowest/50" id="galerie">
      <div className="max-w-container-max mx-auto px-md">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-lg gap-base">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-base block">
              {t("g_eyebrow")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t("g_title")}</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">
            {t("g_desc")}
          </p>
        </Reveal>
        <div className="columns-1 md:columns-2 gap-md [column-fill:balance] [&>*]:break-inside-avoid [&>*]:mb-md">
          {shots.map((shot, i) => (
            <Reveal key={shot.id}>
              <figure className="group technical-border bg-surface-container/40 overflow-hidden">
                <CloudinaryImg
                  src={shot.src}
                  alt={tr(`db.gallery.shot${i + 1}.alt`, shot.alt)}
                  w={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
