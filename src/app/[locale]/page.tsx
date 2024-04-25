import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Button from './components/Button'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          A{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            Booster
          </span>
          <br />
          to Your NextJS Apps
        </h1>
        <div className='text-text-secondary my-6 px-20 text-center text-2xl'>
          An approachable, performant and versatile boilerplate for building SSR
          applications.
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <Button rounded size='large'>
            Use Template
          </Button>
          <Button rounded size='large' variant='secondary'>
            Learn More!
          </Button>
        </div>
      </section>
    </div>
  )
}
