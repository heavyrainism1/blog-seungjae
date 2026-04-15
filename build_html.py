import re

def to_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Strip imports and React component wrappers
    content = re.sub(r'import .*?\n', '', content)
    content = re.sub(r'export default function \w+\(\) \{\n\s*return \(\n', '', content)
    content = re.sub(r'const \w+: React\.FC = \(\) => \{\n\s*return \(\n', '', content)
    content = re.sub(r'  \);\n\};\nexport default \w+;\n?', '', content)
    content = re.sub(r'  \);\n\}\n?', '', content)
    
    # Replace className with class
    content = content.replace('className=', 'class=')
    
    # Replace Link with a
    content = content.replace('<Link to=', '<a href=')
    content = content.replace('</Link>', '</a>')
    
    # Replace JSX comments
    content = re.sub(r'\{\/\* (.*?) \*\/\}', r'<!-- \1 -->', content)
    content = re.sub(r'\{\/\*(.*?)\*\/\}', r'<!-- \1 -->', content)
    
    # Replace onSubmit={(e) => e.preventDefault()}
    content = content.replace('onSubmit={(e) => e.preventDefault()}', 'onsubmit="event.preventDefault();"')
    
    return content.strip()

home = to_html('src/pages/Home.tsx')
posts = to_html('src/pages/Posts.tsx')
series = to_html('src/pages/Series.tsx')
navbar = to_html('src/components/Navbar.tsx')
footer = to_html('src/components/Footer.tsx')

tailwind_config = """tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed-dim": "#c3c6cf",
                        "inverse-on-surface": "#eaf2fa",
                        "surface-bright": "#f6faff",
                        "surface-container-low": "#edf4fd",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#c0c7d4",
                        "error-container": "#ffdad6",
                        "surface": "#f6faff",
                        "on-background": "#151d22",
                        "on-tertiary-fixed-variant": "#3f4850",
                        "on-primary-fixed": "#001c38",
                        "tertiary-fixed-dim": "#bec7d2",
                        "on-primary-fixed-variant": "#004882",
                        "surface-container-high": "#e1e9f1",
                        "primary-fixed": "#d3e4ff",
                        "on-error-container": "#93000a",
                        "outline": "#717783",
                        "surface-container": "#e7eff7",
                        "on-primary-container": "#003a6b",
                        "on-secondary-fixed-variant": "#43474e",
                        "inverse-primary": "#a2c9ff",
                        "secondary-fixed": "#dfe2eb",
                        "on-surface-variant": "#414752",
                        "surface-dim": "#d3dbe3",
                        "on-tertiary": "#ffffff",
                        "primary": "#0060aa",
                        "surface-variant": "#dbe3ec",
                        "surface-container-highest": "#dbe3ec",
                        "tertiary": "#565f69",
                        "on-secondary-container": "#61646c",
                        "on-surface": "#151d22",
                        "on-tertiary-container": "#313a43",
                        "inverse-surface": "#293138",
                        "secondary-container": "#dfe2eb",
                        "on-tertiary-fixed": "#141c24",
                        "on-error": "#ffffff",
                        "tertiary-container": "#9ba4ae",
                        "primary-container": "#58a6ff",
                        "surface-tint": "#0060aa",
                        "tertiary-fixed": "#dae3ee",
                        "primary-fixed-dim": "#a2c9ff",
                        "on-secondary-fixed": "#181c22",
                        "on-primary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "error": "#ba1a1a",
                        "background": "#f6faff",
                        "secondary": "#5b5e66"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Inter"],
                        "body": ["Inter"],
                        "label": ["Space Grotesk"],
                        "mono": ["JetBrains Mono"]
                    }
                }
            }
        }"""

html = f"""<!DOCTYPE html>
<html class="light" lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&family=Space+Grotesk:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<!-- Tailwind CDN -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
{tailwind_config}
</script>
<style>
body {{
  background-color: #f6faff;
  color: #151d22;
}}
.material-symbols-outlined {{
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}}
section {{
  position: relative;
}}
section::before {{
  content: '';
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, #f6faff, transparent);
  pointer-events: none;
}}
</style>
</head>
<body class="font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
  <div class="flex flex-col min-h-screen relative w-full">
    {navbar}
    
    <main class="flex-1 w-full relative z-10 space-y-12">
{home}

      <div class="max-w-7xl mx-auto px-12">
          <div class="w-full h-[1px] bg-outline-variant/30"></div>
      </div>

{posts}

      <div class="max-w-7xl mx-auto px-12">
          <div class="w-full h-[1px] bg-outline-variant/30"></div>
      </div>

{series}
    </main>

    {footer}
  </div>
</body>
</html>
"""

with open('single_page_blog.html', 'w', encoding='utf-8') as f:
    f.write(html)
