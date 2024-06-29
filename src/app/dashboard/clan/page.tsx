'use client'

// import Button from '../components/Button'
import Button from '../../components/Button'
import { BottomNavigation } from '../../components/BottomNavigation'
import { ProfileStatsClan } from '../../components/ClanForms/ProfileStatsClan'
import Loader from '../../components/TextLoader'
import { CreateClanForm } from '../../components/ClanForms/CreateClan'
import { Dropdown } from '../../components/ClanForms/Dropdown'
import { ChatComponent } from '../../components/ClanForms/ClanChat'
import { BombaclatChat } from '../../components/ClanForms/BombaclatChat'
import { Press_Start_2P } from 'next/font/google'
import { Townhall } from "../../components/Townhall";
const inter = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

export default function DashboardPage() {
  const fuckwit = ["fuck ur mum"]
  const clan = {
    "name": "clan",
    "total_lifted_weight": "1500",
    "num_clan_members" : "15",
    "clan_level" : "9000"
  }

  return (
    <div>
      <section className='flex flex-col items-center justify-center py-10'>
        {/* <h1 className='text-center text-9xl font-extrabold leading-tight'> */}

        <span
          className={`block text-center text-9xl font-extrabold leading-tight ${inter.className} bg-span-bg bg-clip-text text-transparent`}
          style={{ width: '500px', display: 'block', overflow: 'visible' }}
        >
          {clan.name}
        </span>
          <br />
        {/* </h1> */}
        <div className='my-6 px-20 text-center text-3xl text-text-secondary'>
          a member of the {clan.name} since 2024
        {/* REPLACE THESE BUTTONS WITH A MODAL TO LEAVE OR JOIN CLAN */}
        </div>
        {/* <div className='h-20'>
          <Loader texts={fuckwit}/>
        </div> */}
        {/* <div className='mt-4 flex flex-row gap-4'>

          <a
            href='/login'
            target='_blank'
          >
            <Button rounded size='large' className='bg-red-500 text-white'>
              Leave Clan
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div> */}
        <div className='flex'>
          <CreateClanForm/>
          <Button className='bg-green-600 ml-10 mr-10'>Join Clan</Button>
          {/* <Dropdown className='bg-green-600 ml-10'/> */}
          {/* <Button className='bg-red-500 ml-10'>Leave Clan</Button> */}
          <BombaclatChat/>
        </div>
      </section>
      {/* <section className='bg-background-secondary py-8 max-lg:py-10'>
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
      </section> */}


    

      <Townhall />
      <div>
        <ProfileStatsClan />
        <div style={{ marginBottom: '50px' }}></div>
      </div>
      <div>
        {/* <ProfileStatsClan/> */}
        {/* <ChatComponent/> */}
      </div>
      <BottomNavigation/>
    </div>
  )
}