/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  turbopack: { root: process.cwd() },
}

export default config
