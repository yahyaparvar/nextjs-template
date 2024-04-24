'use client'
import { useTheme } from 'next-themes'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme()
  const ref = useRef(null)
  useLayoutEffect(() => {
    setTheme(resolvedTheme!)
  }, [])
  useEffect(() => setMounted(true), [])
  useOnClickOutside(ref, () => setIsOpen(false))
  if (!mounted)
    return (
      <div className='relative inline-block h-[40px] min-w-[6.25rem] text-left'></div>
    )

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={ref} className='relative inline-block min-w-[6.25rem] text-left'>
      <div>
        <button
          type='button'
          className='inline-flex w-full items-center justify-between rounded-md border bg-background px-4 py-2 text-sm font-medium text-destructive shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
          id='options-menu'
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <FiSun />
          <span className='ml-2'>{theme}</span>
        </button>
      </div>
      {isOpen && (
        <div className='bg-dropdown absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {themes.map(themeItem => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem)
                    setIsOpen(false)
                  }}
                  className={`hover:bg-dropdownHover block w-full px-4 py-2 text-sm ${
                    themeItem === theme
                      ? 'bg-selected hover:bg-selected text-primary'
                      : 'text-secondary'
                  }`}
                >
                  {themeItem}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
