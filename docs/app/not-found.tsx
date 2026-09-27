import Link from 'next/link'
import { Shell } from '@/components/Shell'

export default function NotFound() {
  return <Shell><article className="prose"><p className="eyebrow">404</p><h1>Page not found</h1><p>This page may have moved. Browse the course outline or search for a topic.</p><p><Link href="/">Course overview</Link> · <Link href="/docs/lectures/">Weekly outline</Link></p></article></Shell>
}
