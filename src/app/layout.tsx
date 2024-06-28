import { ThemeProvider } from '@/src/app/components/ThemeProvider'
import type { Metadata } from 'next'
import { Inter, Rubik, Space_Grotesk, Press_Start_2P} from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
})
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik'
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press_start_2p',
  weight: '400', // Example weight value, adjust as per function definition
  style: 'normal', // Example style value, adjust as per function definition
  display: 'block', // Example display value, adjust as per function definition
  preload: true, // Example preload value, adjust as per function definition
  fallback: ['fallback-font-name'], // Example fallback value, adjust as per function definition
  adjustFontFallback: true, // Example adjustFontFallback value, adjust as per function definition
});
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
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${space_grotesk.variable} ${rubik.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light',
            'dark'
          ]}
        >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='mx-auto max-w-screen-2xl'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}