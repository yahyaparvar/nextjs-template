'use client'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const options: Option[] = [
    { country: 'English', code: 'en' }, // Native name is the same
    { country: 'Deutsch', code: 'de' },
    { country: 'Français', code: 'fr' },
    { country: 'Español', code: 'es' },
    { country: 'Русский', code: 'ru' },
    { country: '日本語', code: 'ja' },
    { country: 'العربية', code: 'ar' },
    { country: 'فارسی', code: 'fa' }
  ]

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
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                        pathname === `/${lang.code}`
                          ? 'bg-selected text-primary hover:bg-selected'
                          : 'text-secondary'
                      }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
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
