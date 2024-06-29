'use client'

import Button from './components/Button'
import { BottomNavigation } from './components/BottomNavigation'
import { ProfileStats } from './components/ProfileStats'
import Loader from './components/TextLoader'
import { Press_Start_2P } from 'next/font/google'
import { Shiba } from "./components/Shiba";

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

export default function DashboardPage() {
  const fuckwit = ["fuck ur mum"]

  return (
    <div>
      <section className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-center text-9xl font-extrabold leading-tight'>

          <span className={`text-center text-9xl font-extrabold leading-tight ${pressStart2P.className} bg-span-bg bg-clip-text text-transparent`}>
            uplift
          </span>
          <br />
        </h1>
        <div className='my-6 px-20 text-center text-3xl text-text-secondary'>
          level up with your friends in real life

        </div>
        <div className='h-20'>
          <Loader texts={fuckwit} />
        </div>
        <div className='mt-4 flex flex-row gap-4'>

          <a
            href='/login'
          >
            <Button rounded size='large'>
              Sign up!
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-8 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-md grid-cols-2 md:grid-cols-3 gap-5 px-3 py-3 md:max-w-screen-lg md:gap-7'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Progress</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Socialize</h2>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Level up!</h2>
          </div>
        </div>
      </section>

      <Shiba />
      <div>
        <ProfileStats />
        <div style={{ marginBottom: '20px' }}></div>
      </div>
      <div>
        <ProfileStats />
      </div>
    </div>
  )
}