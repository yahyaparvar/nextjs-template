'use client'
import GithubIcon from '../../icons/github'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

export const Header = () => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-6'>
      <div>dkwjiohewn</div>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <a>About</a>
          <a>Support</a>
          <a>More</a>
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
