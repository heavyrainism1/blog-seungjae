const fs = require('fs');

function fixClass(file) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/ class="/g, ' className="');
  fs.writeFileSync(file, content);
}

fixClass('src/pages/Home.tsx');
fixClass('src/components/Navbar.tsx');
fixClass('src/components/Footer.tsx');
console.log('Fixed classes');
