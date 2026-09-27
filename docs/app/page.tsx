import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { lectures } from '@/lib/content'

const summaries: Record<number, string> = {
  1: 'Capabilities, forecasts, and uncertainty',
  2: 'Language models, loss, and scaling laws',
  3: 'Learning dynamics and generalization',
  4: 'AI research automation and feedback loops',
}

export default function Home() {
  return <Shell headings={[{ id: 'lectures', title: 'Lecture companions', level: 2 }, { id: 'study', title: 'Study & research', level: 2 }]}>
    <article className="prose home">
      <p className="eyebrow">VARIFOLD / LEARNING</p>
      <h1>Mathematics<br />for AI Safety</h1>
      <p className="lead">A working collection of lecture companions, mathematical notes, and research questions.</p>
      <div className="course-meta"><span>Fields Institute · Fall 2026</span><span>Instructor: Yevgeny Liokumovich</span></div>
      <p className="intro-links"><Link href="/docs/course/">Course information</Link><Link href="/docs/lectures/">12-week outline</Link></p>
      <h2 id="lectures">Lecture companions</h2>
      <p>Read alongside the recordings. Each companion includes a summary, references, and the available caption text.</p>
      <div className="lecture-list">{lectures.map(page => <Link href={page.href} key={page.href} className="lecture-row">
        <span className="lecture-number">{String(page.lecture).padStart(2, '0')}</span>
        <span><strong>{page.title}</strong><small>{summaries[page.lecture ?? 0] || page.description}</small></span>
        <span className="lecture-arrow" aria-hidden="true">→</span>
      </Link>)}</div>
      <h2 id="study">Study & research</h2>
      <div className="study-grid">
        <Link href="/docs/notes/"><strong>Course notes</strong><span>Questions and explanations across lectures.</span></Link>
        <Link href="/docs/projects/"><strong>Research projects</strong><span>Weekly seeds and developing proposals.</span></Link>
        <Link href="/docs/resources/"><strong>Reading & resources</strong><span>Course readings and related courses.</span></Link>
        <Link href="/docs/papers/"><strong>Related papers</strong><span>An annotated index by research topic.</span></Link>
      </div>
    </article>
  </Shell>
}
