import { genPageMetadata } from 'app/[locale]/seo'
import { Metadata } from 'next'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'

type AboutProps = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: AboutProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'about')
  return genPageMetadata({
    title: t('about'),
    params: { locale: locale },
  })
}

export default async function Page({ params: { locale } }: AboutProps) {
  const { t } = await createTranslation(locale, 'about')
  return (
    <>
      <div>{t('about')}</div>
    </>
  )
}
