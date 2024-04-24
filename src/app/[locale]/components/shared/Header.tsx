'use client'
import LangSwitcher from '../LangSwitcher'
import ThemeSwitch from '../ThemeSwitch'

export const Header = () => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row justify-between p-6'>
      <div>dkwjiohewn</div>
      <div className='flex flex-row gap-3'>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
