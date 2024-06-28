'use client'

import Button from './components/Button'

import { Press_Start_2P } from 'next/font/google'
const inter = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

export default function DashboardPage() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(url + '/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching the message:', error));
  }, [])
  console.log(url + '/api/hello')

  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
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
              Get Started!
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Progress</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
                hi 1
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Socialize</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              hi 2
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Level up!</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              hi 3
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}