import Link from 'next/link'
import { Shell } from '@/components/Shell'

export default function NotFound() {
  return <Shell><article className="prose"><p className="eyebrow">404</p><h1>Page not found</h1><p>This page may have moved. Browse the reading guide or search for a topic.</p><p><Link href="/">Overview</Link> · <Link href="/docs/reading/">Reading guide</Link></p></article></Shell>
}
