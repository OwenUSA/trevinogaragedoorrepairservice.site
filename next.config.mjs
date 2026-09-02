/** @type {import('next').NextConfig} */

// En GitHub Pages el sitio no vive en la raiz del dominio sino en
// /<nombre-del-repo>/. El workflow de .github/workflows/pages.yml pasa esa ruta
// en PAGES_BASE_PATH. En local la variable no existe y el build sale igual que
// siempre, servido desde la raiz.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  // Export estatico: el build deja en out/ el mismo HTML+CSS que habia antes,
  // sin servidor. Se puede alojar en cualquier sitio.
  output: 'export',
  // /Doral -> out/Doral/index.html, para conservar las URLs limpias del sitio viejo
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
