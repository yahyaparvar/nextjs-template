'use client'
import Link from 'next/link';
import { FC } from 'react'
import GithubIcon from '../icons/github'
import LogoIcon from '../icons/logo'
import ThemeSwitch from './ThemeSwitch'
import Button from '../components/Button'
import { Initiatives } from '../components/Initiatives'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>uplift</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        {/* <nav className='mr-2 inline-flex gap-5'>
          <Link href={`/about`}>
            About
          </Link>
          <a href=''>Support</a>
          <a href=''>Other</a>
        </nav> */}
        {/* <Button className='bg-yellow-700 ml-10 mr-5'>Inititives</Button> */}
        <Initiatives/>
        <ThemeSwitch />
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='ml-1 size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}