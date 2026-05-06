const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace font weights
css = css.replace(/font-weight:\s*800/g, 'font-weight: 600');
css = css.replace(/font-weight:\s*700/g, 'font-weight: 500');

// Replace letter spacing
css = css.replace(/letter-spacing:\s*-0\.03em/g, 'letter-spacing: -0.01em');
css = css.replace(/letter-spacing:\s*-0\.02em/g, 'letter-spacing: -0.01em');

fs.writeFileSync(cssPath, css);
console.log('Typography updated for elegant look');
