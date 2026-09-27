import pages from '@/.generated/pages.json'

export const documents = pages
export type Document = typeof pages[number]
export const lectures = documents.filter(page => page.lecture !== null).sort((a, b) => (a.lecture ?? 0) - (b.lecture ?? 0))
export const getDocument = (href: string) => documents.find(page => page.href === href)
export const navigation = [
  { title: 'Course', items: [
    { title: 'Overview', href: '/' },
    { title: 'Course information', href: '/docs/course/' },
    { title: 'Weekly outline', href: '/docs/lectures/' },
  ] },
  { title: 'Lecture companions', items: lectures.map(page => ({ title: `${String(page.lecture).padStart(2, '0')} · ${page.title}`, href: page.href })) },
  { title: 'Study & research', items: [
    { title: 'Course notes', href: '/docs/notes/' },
    { title: 'Research projects', href: '/docs/projects/' },
    { title: 'Weekly research seeds', href: '/docs/projects/weekly-research-seeds/' },
    { title: 'Reading & resources', href: '/docs/resources/' },
    { title: 'Related papers', href: '/docs/papers/' },
  ] },
]
