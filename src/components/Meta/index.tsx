import { baseurl, getHrefLang } from "@/utils/constants"

export interface MetaProps {
  title: string
  description: string
  locale?: string
  image?: string
  pageurl?: string
}


export const Meta = ({ title, description, locale = 'en', pageurl, image = `${baseurl}/howtouse.gif` }: MetaProps) => {
  const getUrl = (lang: string) => pageurl ? `${getHrefLang(lang)}${pageurl}` : getHrefLang(lang)
  const url = getUrl(locale);

  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <link rel="alternate" hrefLang="x-default" href={getHrefLang('en')} />
    <link rel="alternate" hrefLang="en" href={getHrefLang('en')} />
    <link rel="alternate" hrefLang="zh" href={getHrefLang('zh')} />
    {/* <link rel="alternate" hrefLang="de" href={getHrefLang('de')} />
    <link rel="alternate" hrefLang="ko" href={getHrefLang('ko')} />
    <link rel="alternate" hrefLang="es" href={getHrefLang('es')} />
    <link rel="alternate" hrefLang="pt" href={getHrefLang('pt')} />
    <link rel="alternate" hrefLang="vi" href={getHrefLang('vi')} />
    <link rel="alternate" hrefLang="fr" href={getHrefLang('fr')} /> */}
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={"ReplaceAnything"} />
    <meta name="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content={locale} />
    <meta property="twitter:site" content={title} />
    <meta name="twitter:image" content={image} />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:type" content="website" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:description" content={description} />
  </>
}