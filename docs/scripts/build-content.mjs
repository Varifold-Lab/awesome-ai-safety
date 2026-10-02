import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'

const docs = fileURLToPath(new URL('../', import.meta.url))
const root = path.resolve(docs, '..')
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')
const repository = 'https://github.com/Varifold-Lab/awesome-ai-safety'
const slugify = value => value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')
const textOf = node => node.type === 'text' || node.type === 'inlineCode' || node.type === 'inlineMath'
  ? node.value : (node.children || []).map(textOf).join('')

async function markdownFiles(directory) {
  const files = []
  for (const item of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = path.posix.join(directory, item.name)
    if (item.isDirectory()) files.push(...await markdownFiles(relative))
    else if (item.name.endsWith('.md')) files.push(relative)
  }
  return files.sort()
}

const sources = ['README.md']
for (const directory of ['Lectures', 'notes', 'projects', 'relatedpapers']) sources.push(...await markdownFiles(directory))

function routeFor(source) {
  const fixed = {
    'README.md': '/docs/course/',
    'Lectures/README.md': '/docs/lectures/',
    'Lectures/Resources.md': '/docs/resources/',
    'notes/README.md': '/docs/notes/',
    'projects/README.md': '/docs/projects/',
    'relatedpapers/README.md': '/docs/papers/',
    'notes/Reading Guide.md': '/docs/reading/',
  }
  if (fixed[source]) return fixed[source]
  if (source.startsWith('notes/reading/')) return `/docs/reading/${slugify(path.posix.basename(source, '.md'))}/`
  const lecture = path.posix.basename(source).match(/^Lecture (\d+) -/)
  if (lecture) return `/docs/lectures/lecture-${lecture[1]}/`
  return `/docs/${source.replace(/\.md$/, '').split('/').filter(part => part !== 'README').map(slugify).join('/')}/`
}

const routes = new Map(sources.map(source => [source, routeFor(source)]))
if (new Set(routes.values()).size !== sources.length) throw new Error('Duplicate documentation route')

function rewriteLinks(source) {
  return () => tree => visit(tree, 'link', node => {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(node.url)) return
    const match = node.url.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/)
    const [, pathname, query = '', hash = ''] = match
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(source), decodeURIComponent(pathname)))
    const route = routes.get(target)
    if (!route) throw new Error(`Unresolved local link in ${source}: ${node.url}`)
    node.url = `${basePath}${route}${query}${hash}`
  })
}

// Keep every source paragraph in the export while making the edited prose the default view.
function collapseTranscript() {
  return tree => {
    const index = tree.children.findIndex(node => node.type === 'element' && node.tagName === 'h2'
      && node.properties.id === 'full-lecture-text')
    if (index < 0) return
    tree.children[index].children = [{ type: 'text', value: 'Full source transcript' }]
    const transcript = tree.children.splice(index + 1)
    tree.children.push({ type: 'element', tagName: 'details', properties: { className: ['source-transcript'] }, children: [
      { type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: 'Read the complete transcript' }] },
      ...transcript,
    ] })
  }
}

const pages = []
for (const source of sources) {
  const markdown = await readFile(path.join(root, source), 'utf8')
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkMath).parse(markdown)
  const title = textOf(tree.children.find(node => node.type === 'heading' && node.depth === 1) || { children: [] })
  if (!title) throw new Error(`Missing title: ${source}`)
  const description = textOf(tree.children.find(node => node.type === 'paragraph') || { children: [] }).slice(0, 220)
  const headings = []
  const html = String(await unified().use(remarkParse).use(remarkGfm).use(remarkMath)
    .use(rewriteLinks(source)).use(remarkRehype).use(rehypeSlug)
    .use(collapseTranscript)
    .use(() => tree => visit(tree, 'element', node => {
      if (['h2', 'h3'].includes(node.tagName)) headings.push({ id: node.properties.id, title: textOf(node), level: Number(node.tagName[1]) })
    }))
    .use(rehypeKatex, { strict: 'error', throwOnError: true }).use(rehypeStringify).process(markdown))
  if (html.includes('katex-error')) throw new Error(`Invalid math in ${source}`)
  const href = routes.get(source)
  const lecture = source.match(/\/Lecture (\d+) -/)
  const archive = source === 'README.md' || source.startsWith('Lectures/') || source === 'projects/Weekly Research Seeds.md'
  const section = source === 'notes/Reading Guide.md' || source.startsWith('notes/reading/') ? 'Reading guide'
    : source === 'Lectures/Resources.md' ? 'Resources' : source.startsWith('Lectures/') ? 'Course archive' : source.startsWith('notes/') ? 'Notes'
    : source.startsWith('projects/') ? 'Research projects' : source.startsWith('relatedpapers/') ? 'Reading' : 'Course'
  pages.push({ title, description, href, slug: href.split('/').filter(Boolean).slice(1), source,
    sourceUrl: `${repository}/blob/main/${source.split('/').map(encodeURIComponent).join('/')}`,
    html, headings, section, archive, lecture: lecture ? Number(lecture[1]) : null,
    text: tree.children.map(textOf).join(' ') })
}

const output = path.join(docs, '.generated')
await mkdir(output, { recursive: true })
await writeFile(path.join(output, 'pages.json'), JSON.stringify(pages, null, 2))
await writeFile(path.join(output, 'search.json'), JSON.stringify(pages.map(({ title, description, href, text, section, archive }) => ({ title, description, href, text, section, archive }))))
console.log(`Prepared ${pages.length} Markdown pages with math, navigation, and search.`)
