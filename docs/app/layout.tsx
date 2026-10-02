import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from '@/components/Search'
import 'katex/dist/katex.min.css'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Mathematics for AI Safety · Varifold', template: '%s · AI Safety · Varifold' },
  description: 'Mathematical reading paths through model learning, capabilities, interpretability, and agency. Edited articles, research questions, papers, and complete source materials. A Varifold community learning project.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <div className="brand-family"><a className="lab-brand" href={process.env.NEXT_PUBLIC_LAB_URL || 'https://varifold-lab.github.io/'}>Varifold</a><span className="brand-divider">/</span><Link href="/" className="project-brand">AI Safety</Link></div>
      <div className="header-links"><Search /><a href="https://github.com/Varifold-Lab/awesome-ai-safety">GitHub ↗</a></div>
    </div></header>
    {children}
    <footer className="site-footer"><span>A Varifold community learning project.</span><Link href="/docs/reading/">Reading guide →</Link></footer>
  </body></html>
}
