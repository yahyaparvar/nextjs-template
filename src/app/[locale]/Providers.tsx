import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const Providers = ({
  children,
  locale
}: {
  children: ReactNode
  locale: string
}) => {
  const messages = useMessages()
  return (
    <ThemeProvider
      attribute='class'
      enableSystem
      defaultTheme='dark'
      enableColorScheme={false}
      themes={['light', 'dark', 'custom']}
    >
      <NextIntlClientProvider
        locale={locale}
        messages={messages as AbstractIntlMessages}
      >
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}

export default Providers
