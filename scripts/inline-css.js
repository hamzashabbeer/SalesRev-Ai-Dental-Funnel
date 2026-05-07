import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlFile = path.join(distDir, 'index.html');

if (fs.existsSync(htmlFile)) {
  let html = fs.readFileSync(htmlFile, 'utf-8');
  
  // Match the ENTIRE <link rel="stylesheet" ... > tag (including the closing >)
  const cssRegex = /<link[^>]*rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*\/?>/g;
  let match;
  while ((match = cssRegex.exec(html)) !== null) {
    const cssPath = path.join(distDir, match[1]);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      // Replace the FULL tag (match[0]) with inline <style>
      html = html.replace(match[0], `<style>${cssContent}</style>`);
      console.log(`Successfully inlined ${match[1]}`);
    }
  }
  
  // Strip unwanted YouTube preconnects that Lighthouse is flagging
  html = html.replace(/<link[^>]*rel="preconnect"[^>]*href="https:\/\/i\.ytimg\.com"[^>]*\/?>/g, '');
  
  fs.writeFileSync(htmlFile, html);
  console.log('CSS inlining and HTML cleaning complete.');
} else {
  console.error('dist/index.html not found. Run npm run build first.');
}
