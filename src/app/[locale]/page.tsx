import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default function DashboardPage() {
  const t = useTranslations('')
  return <div>
    <section>
    <h1></h1>
    </section>
  </div>
}
