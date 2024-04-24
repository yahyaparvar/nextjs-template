'use client'
import { capitalize } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }

  const router = useRouter()
  const pathname = usePathname()

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)

  const options: Option[] = [
    { country: 'English', code: 'en' },
    { country: 'French', code: 'fr' },
    { country: 'Japanese', code: 'ja' },
    { country: 'German', code: 'de' },
    { country: 'Russian', code: 'ru' }
  ]

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false)
    router.push(`/${option.code}`)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative text-lg'>
        <Button
          className='inline-flex items-center gap-3'
          size='small'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Language
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='bg-dropdown absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map(lang => {
                return (
                  <button
                    key={lang.code}
                    onMouseDown={e => {
                      e.preventDefault()
                      setOption(lang)
                    }}
                    className={`hover:bg-dropdownHover block w-full px-4 py-2 text-left text-sm ${
                      pathname === `/${lang.code}`
                        ? 'bg-selected hover:bg-selected text-primary'
                        : 'text-secondary'
                    }`}
                  >
                    {capitalize(lang.country)}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LangSwitcher
