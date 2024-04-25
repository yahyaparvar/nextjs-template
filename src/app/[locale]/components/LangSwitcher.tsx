'use client'
import { capitalize } from '@/lib/utils'
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegments
} from 'next/navigation'
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
  const urlSegments = useSelectedLayoutSegments()

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
    router.push(`/${option.code}/${urlSegments.join('/')}`)
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <Button
          className='text-destructive inline-flex w-full items-center justify-between gap-3'
          size='small'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Language
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'>
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
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                      pathname === `/${lang.code}`
                        ? 'bg-selected text-primary hover:bg-selected'
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
