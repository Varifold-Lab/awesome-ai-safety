import type { ReactNode } from 'react'
import { navigation } from '@/lib/content'
import { MobileNavigation, Navigation } from './Navigation'

export function Shell({ children, headings = [] }: { children: ReactNode; headings?: { id: string; title: string; level: number }[] }) {
  return <div className="documentation-shell">
    <aside className="sidebar">
      <div className="desktop-navigation"><p className="sidebar-label">MATHEMATICS FOR AI SAFETY</p><Navigation groups={navigation} /></div>
      <MobileNavigation groups={navigation} />
    </aside>
    <main id="main-content" className="article-column">{children}</main>
    <aside className="contents-column">{headings.length > 0 && <nav aria-label="On this page" className="page-contents">
      <p>On this page</p>{headings.map(heading => <a href={`#${heading.id}`} key={heading.id} className={heading.level === 3 ? 'subheading' : undefined}>{heading.title}</a>)}
    </nav>}</aside>
  </div>
}
