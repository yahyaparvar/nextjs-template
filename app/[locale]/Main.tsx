import { createTranslation } from './i18n/server'
import { LocaleTypes } from './i18n/settings'

interface HomeProps {
  params: { locale: LocaleTypes }
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')
  return <div> Main</div>
}
