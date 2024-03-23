import { Metadata } from 'next'

import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'
import { Authors } from '.contentlayer/generated/types'
import { allAuthors } from '.contentlayer/generated'

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
  const author = allAuthors.find(
    (a) => a.slug.includes('default') && a.language === locale
  ) as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div>{t('about')}</div>
    </>
  )
}
