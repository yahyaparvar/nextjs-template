'use client'

import Button from './components/Button'
import { BottomNavigation } from './components/BottomNavigation'
import { ProfileStats } from './components/ProfileStats'

import { Press_Start_2P } from 'next/font/google'
const inter = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

export default function DashboardPage() {
  // const [message, setMessage] = useState('')

  // useEffect(() => {
  //   fetch(url + '/api/hello')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message))
  //     .catch(error => console.error('Error fetching the message:', error));
  // }, [])
  // console.log(url + '/api/hello')

  return (
    <div>
      <section className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-center text-9xl font-extrabold leading-tight'>

        <span className={`text-center text-9xl font-extrabold leading-tight ${inter.className} bg-span-bg bg-clip-text text-transparent`}>
          uplift
        </span>
          <br />
        </h1>
        <div className='my-6 px-20 text-center text-3xl text-text-secondary'>
            level up with your friends in real life
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
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
      <div>
        <ProfileStats />
        <div style={{ marginBottom: '20px' }}></div>
      </div>
      <div>
        <ProfileStats/>
      </div>
      <BottomNavigation/>
    </div>
  )
}