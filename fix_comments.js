const fs = require('fs');
const path = require('path');

const compsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(compsDir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(compsDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    // replace <!-- comment --> with {/* comment */}
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    fs.writeFileSync(fullPath, content);
  }
}
console.log('Comments fixed');
