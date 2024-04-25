'use client'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

export const Header = () => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <a href='/'>
        <div className='flex flex-row items-center'>
          <div className='h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='ml-2 mt-2 select-none'>Template</strong>
        </div>
      </a>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <a href=''>About</a>
          <a href=''>Support</a>
          <a href=''>Other</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
