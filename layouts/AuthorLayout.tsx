import { ReactNode } from 'react'
import Image from '@/components/Image'

import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { createTranslation } from 'app/[locale]/i18n/server'
import { Authors } from '.contentlayer/generated/types'

interface AuthorLayoutProps {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  params: { locale: LocaleTypes }
}

export default async function AuthorLayout({
  children,
  content,
  params: { locale },
}: AuthorLayoutProps) {
  const { name, avatar, occupation, company, twitter, linkedin, github } = content
  const { t } = await createTranslation(locale, 'about')

  return <div>{children}</div>
}
