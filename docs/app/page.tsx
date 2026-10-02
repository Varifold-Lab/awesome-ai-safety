import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { readingPath } from '@/lib/content'

export default function Home() {
  return <Shell headings={[{ id: 'start', title: 'Choose a starting point', level: 2 }, { id: 'foundations', title: 'Build the foundations', level: 2 }, { id: 'questions', title: 'Explore safety questions', level: 2 }, { id: 'research', title: 'Find a research question', level: 2 }]}>
    <article className="prose home">
      <p className="eyebrow">VARIFOLD / LEARNING</p>
      <h1>Mathematics<br />for AI Safety</h1>
      <p className="course-attribution">Based on Professor <a href="https://www.math.toronto.edu/ylio/">Yevgeny Liokumovich</a>&apos;s <em>Mathematics for AI Safety</em> course at the Fields Institute. Varifold&apos;s edited notes bring the material together by topic and reading order.</p>
      <p className="attribution-links"><a href="https://www.fields.utoronto.ca/activities/26-27/SGC-safety">Fields Institute course ↗</a><a href="https://www.youtube.com/playlist?list=PLZhkBbRD_dJM">YouTube recordings ↗</a><Link href="/docs/lectures/">Source archive</Link></p>
      <p className="lead">Explore the mathematical ideas behind model behavior, AI development, and alignment. Follow a reading path or begin with the question you want to understand.</p>
      <p className="intro-links"><Link href="/docs/reading/">Open the reading guide →</Link><Link href="/docs/papers/">Browse the papers</Link></p>
      <h2 id="start">Choose a starting point</h2>
      <div className="entry-grid">
        <Link href="/docs/reading/language-models-and-loss/"><strong>Understand how models learn</strong><span>Start with probability and loss, then move to scaling and generalization.</span></Link>
        <Link href="/docs/reading/capabilities-and-ai-research-feedback/"><strong>Understand safety risks</strong><span>Begin with capabilities, incentives, and research feedback.</span></Link>
        <Link href="/docs/reading/research-directions/"><strong>Find a research problem</strong><span>Connect open questions to the concepts and papers they need.</span></Link>
      </div>
      {[{ group: 'Foundations', id: 'foundations', title: 'Build the foundations', description: 'Read these topics in order to connect model predictions to learning behavior.' },
        { group: 'Safety questions', id: 'questions', title: 'Explore safety questions', description: 'Choose a question and follow its connections to the foundations.' }].map(section => <section key={section.id}>
        <h2 id={section.id}>{section.title}</h2><p>{section.description}</p>
        <div className="topic-list">{readingPath.filter(item => item.group === section.group).map(item => <Link href={item.href} key={item.href} className="topic-row">
          <span><strong>{item.title}</strong><span>{item.description}</span><small>Background: {item.prerequisite}</small></span>
          <span className="topic-arrow" aria-hidden="true">→</span>
        </Link>)}</div>
      </section>)}
      <h2 id="research">Find a research question</h2>
      <p>The research guide groups nine open directions by learning theory, interpretability, AI research feedback, objectives, and multi-agent behavior.</p>
      <div className="study-grid">
        <Link href="/docs/reading/research-directions/"><strong>Research directions</strong><span>Open questions, prerequisites, and references.</span></Link>
        <Link href="/docs/projects/"><strong>Developing proposals</strong><span>From an open question to a concrete study.</span></Link>
        <Link href="/docs/papers/"><strong>Related papers</strong><span>An annotated bibliography organized by subject.</span></Link>
        <Link href="/docs/reading/research-practice/"><strong>Research practice</strong><span>Small experiments and models to turn a question into a result.</span></Link>
      </div>
    </article>
  </Shell>
}
