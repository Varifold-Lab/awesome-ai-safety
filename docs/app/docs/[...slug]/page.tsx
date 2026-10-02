import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Shell } from '@/components/Shell'
import { documents, lectures, readingPath, readingsForLecture } from '@/lib/content'

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
  const readingIndex = readingPath.findIndex(item => item.href === page.href)
  const previousReading = readingPath[readingIndex - 1]
  const nextReading = readingPath[readingIndex + 1]
  const related = page.lecture === null ? [] : readingsForLecture(page.lecture)
  return <Shell headings={page.headings}>
    <div className="document-meta"><Link href="/">AI Safety</Link><span>/</span>{page.section === 'Reading guide'
      ? <Link href="/docs/reading/">Reading guide</Link> : page.section === 'Course archive'
        ? <Link href="/docs/lectures/">Course archive</Link> : <span>{page.section}</span>}</div>
    <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
    {readingIndex >= 0 && <nav className="reading-pagination" aria-label="Reading path">
      <div>{previousReading ? <Link href={previousReading.href}><span>← Previous topic</span>{previousReading.title}</Link>
        : <Link href="/docs/reading/"><span>← Start here</span>Reading guide</Link>}</div>
      <div>{nextReading ? <Link href={nextReading.href}><span>Next topic →</span>{nextReading.title}</Link>
        : <Link href="/docs/projects/"><span>Continue →</span>Developing proposals</Link>}</div>
    </nav>}
    {related.length > 0 && <nav className="related-readings" aria-label="Continue by topic"><h2>Continue by topic</h2>
      {related.map(item => <Link key={item.href} href={item.href}>{item.title} →</Link>)}
    </nav>}
    <div className="document-source"><a href={page.sourceUrl}>View Markdown source ↗</a></div>
    {lectureIndex >= 0 && <details className="source-order"><summary>Browse the course sequence</summary><nav className="lecture-pagination" aria-label="Adjacent source lectures">
      <div>{previous && <Link href={previous.href}><span>← Previous lecture</span>{previous.title}</Link>}</div>
      <div>{next && <Link href={next.href}><span>Next lecture →</span>{next.title}</Link>}</div>
    </nav></details>}
  </Shell>
}
