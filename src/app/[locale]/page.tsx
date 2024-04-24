import ThemeSwitch from '@/components/theme-toggle'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import LangSwitcher from './LangSwitcher'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
      {t('hello')}
      <ThemeSwitch />
      <LangSwitcher />
    </>
  )
}
