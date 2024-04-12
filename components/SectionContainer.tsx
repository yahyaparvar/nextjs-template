import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return <section className="mx-auto max-w-screen-xl px-4">{children}</section>
}
