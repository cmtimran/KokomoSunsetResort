const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/page.tsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/import\s+Navbar\s+from\s+['\"]@\/components\/Navbar['\"]\n?/g, '');
    content = content.replace(/import\s+Footer\s+from\s+['\"]@\/components\/Footer['\"]\n?/g, '');
    content = content.replace(/\s*<Navbar\s*\/>\n?/g, '');
    content = content.replace(/\s*<Footer\s*\/>\n?/g, '');
    fs.writeFileSync(file, content);
    console.log('Cleaned ' + file);
});
console.log('Done cleaning ' + files.length + ' files');
