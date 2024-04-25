import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Temp',
  description: 'create next app By Yahya Parvar!'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          themes={['light', 'dark', 'custom']}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <Header />
            <main className='max-w-screen-2xl'>
            {children}
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
