import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Shell } from '@/components/Shell'
import { documents, lectures } from '@/lib/content'

export const dynamicParams = false
export function generateStaticParams() { return documents.map(page => ({ slug: page.slug })) }
async function resolvePage(params: Promise<{ slug: string[] }>) {
  const { slug } = await params
  return documents.find(page => page.slug.join('/') === slug.join('/'))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const page = await resolvePage(params)
  return { title: page?.title, description: page?.description }
}
export default async function Documentation({ params }: { params: Promise<{ slug: string[] }> }) {
  const page = await resolvePage(params)
  if (!page) notFound()
  const lectureIndex = lectures.findIndex(lecture => lecture.href === page.href)
  const previous = lectures[lectureIndex - 1]
  const next = lectures[lectureIndex + 1]
  return <Shell headings={page.headings}>
    <div className="document-meta"><Link href="/">AI Safety</Link><span>/</span><span>{page.section}</span></div>
    <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
    <div className="document-source"><a href={page.sourceUrl}>View Markdown source ↗</a></div>
    {lectureIndex >= 0 && <nav className="lecture-pagination" aria-label="Adjacent lectures">
      <div>{previous && <Link href={previous.href}><span>← Previous lecture</span>{previous.title}</Link>}</div>
      <div>{next && <Link href={next.href}><span>Next lecture →</span>{next.title}</Link>}</div>
    </nav>}
  </Shell>
}
