'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

type Group = { title: string; items: { title: string; href: string }[] }

export function Navigation({ groups, onNavigate }: { groups: Group[]; onNavigate?: () => void }) {
  const pathname = usePathname().replace(/\/$/, '') || '/'
  return <nav aria-label="Course documentation">{groups.map(group => <section className="nav-group" key={group.title}>
    <h2>{group.title}</h2>
    {group.items.map(item => <Link key={item.href} href={item.href} onClick={onNavigate}
      aria-current={pathname === (item.href.replace(/\/$/, '') || '/') ? 'page' : undefined}>{item.title}</Link>)}
  </section>)}</nav>
}

export function MobileNavigation({ groups }: { groups: Group[] }) {
  const details = useRef<HTMLDetailsElement>(null)
  return <details className="mobile-navigation" ref={details}>
    <summary>Browse course</summary>
    <Navigation groups={groups} onNavigate={() => { if (details.current) details.current.open = false }} />
  </details>
}
