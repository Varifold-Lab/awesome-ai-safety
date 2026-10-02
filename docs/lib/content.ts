import pages from '@/.generated/pages.json'

export const documents = pages
export type Document = typeof pages[number]
export const lectures = documents.filter(page => page.lecture !== null).sort((a, b) => (a.lecture ?? 0) - (b.lecture ?? 0))
export const getDocument = (href: string) => documents.find(page => page.href === href)

export const readingPath = [
  { title: 'Language models and loss', href: '/docs/reading/language-models-and-loss/', group: 'Foundations',
    description: 'What does a model predict, and what does its training objective measure?', prerequisite: 'Probability and logarithms' },
  { title: 'Scaling and compute', href: '/docs/reading/scaling-and-compute/', group: 'Foundations',
    description: 'How do data, parameters, and compute shape prediction loss?', prerequisite: 'Language models and loss' },
  { title: 'Generalization and learning dynamics', href: '/docs/reading/generalization-and-learning-dynamics/', group: 'Foundations',
    description: 'What explains behavior on new data and changes in learned features?', prerequisite: 'Loss, gradients, and linear algebra' },
  { title: 'Capabilities and AI research feedback', href: '/docs/reading/capabilities-and-ai-research-feedback/', group: 'Safety questions',
    description: 'How could automation, incentives, and research feedback change AI development?', prerequisite: 'Entry point for safety motivation' },
  { title: 'Representations and interpretability', href: '/docs/reading/representations-and-interpretability/', group: 'Safety questions',
    description: 'What features does a model use, and how can we understand or change its behavior?', prerequisite: 'Learning dynamics and linear algebra' },
  { title: 'Agency and interaction', href: '/docs/reading/agency-and-interaction/', group: 'Safety questions',
    description: 'How do goals, corrections, and interactions shape agent behavior?', prerequisite: 'Probability and expected reward' },
  { title: 'Research directions', href: '/docs/reading/research-directions/', group: 'Research',
    description: 'Connect nine open questions to their subjects, prerequisites, and references.', prerequisite: 'Choose a topic to investigate' },
]

const lectureTopics: Record<number, string[]> = {
  1: ['capabilities-and-ai-research-feedback'],
  2: ['language-models-and-loss', 'scaling-and-compute', 'capabilities-and-ai-research-feedback'],
  3: ['generalization-and-learning-dynamics', 'scaling-and-compute', 'representations-and-interpretability'],
  4: ['capabilities-and-ai-research-feedback'],
  5: ['research-directions', 'generalization-and-learning-dynamics', 'agency-and-interaction'],
}
export const readingsForLecture = (lecture: number) => readingPath.filter(item =>
  lectureTopics[lecture]?.some(slug => item.href === `/docs/reading/${slug}/`))

export const navigation = [
  { title: 'Start here', items: [
    { title: 'Overview', href: '/' },
    { title: 'Reading guide', href: '/docs/reading/' },
  ] },
  { title: 'Foundations', items: readingPath.filter(item => item.group === 'Foundations') },
  { title: 'Safety questions', items: readingPath.filter(item => item.group === 'Safety questions') },
  { title: 'Research & reading', items: [
    { title: 'Research directions', href: '/docs/reading/research-directions/' },
    { title: 'Developing proposals', href: '/docs/projects/' },
    { title: 'Research practice', href: '/docs/reading/research-practice/' },
    { title: 'Related papers', href: '/docs/papers/' },
    { title: 'Discussion notes', href: '/docs/notes/' },
  ] },
]
