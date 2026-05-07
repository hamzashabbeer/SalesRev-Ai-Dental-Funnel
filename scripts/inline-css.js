import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlFile = path.join(distDir, 'index.html');

if (fs.existsSync(htmlFile)) {
  let html = fs.readFileSync(htmlFile, 'utf-8');
  
  // Find all CSS links
  const cssRegex = /<link rel="stylesheet".*?href="(.*?)"/g;
  let match;
  while ((match = cssRegex.exec(html)) !== null) {
    const cssPath = path.join(distDir, match[1]);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      html = html.replace(match[0], `<style>${cssContent}</style>`);
      console.log(`Successfully inlined ${match[1]}`);
    }
  }
  
  fs.writeFileSync(htmlFile, html);
} else {
  console.error('dist/index.html not found. Run npm run build first.');
}
