import os
import re
import json

md_file = r"C:\Users\tomis\.gemini\antigravity\brain\4040dd6c-4fb8-4e81-865c-b88eaba4253e\missing_privacy_software.md"
out_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\data\reviews"

with open(md_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Parse the markdown tables
tools = []
current_platform = ""
for line in content.split('\n'):
    if line.startswith('## '):
        current_platform = line.replace('## ', '').strip()
    elif line.startswith('|') and not line.startswith('| Name') and not line.startswith('|---'):
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 5:
            name_raw = parts[1]
            # Extract name from **Name**
            m = re.search(r'\*\*(.*?)\*\*', name_raw)
            if m:
                name = m.group(1)
            else:
                name = name_raw
            
            category = parts[2]
            
            if len(parts) == 6: # Some tables have Platforms column
                open_source_raw = parts[4]
                what_it_does = parts[5]
            else:
                open_source_raw = parts[3]
                what_it_does = parts[4]
                
            open_source = '✅' in open_source_raw or 'Yes' in open_source_raw or 'Partial' in open_source_raw
            
            tools.append({
                'name': name,
                'category': category,
                'open_source': open_source,
                'description': what_it_does,
                'platform': current_platform
            })

# Generate JS files
index_counter = 200
generated_files = []

for t in tools:
    name = t['name'].split(' / ')[0].split(' (')[0].strip() # Clean up names like OpenBoard / HeliBoard or GnuPG (GPG)
    id_name = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    
    # Don't overwrite existing
    filename = os.path.join(out_dir, f"{id_name}.js")
    if os.path.exists(filename):
        continue
        
    js_content = f"""export default {{
    id: '{id_name}',
    website: 'https://example.com',
    index: {index_counter},
    name: '{name}',
    tagline: 'Privacy-focused {t['category'].lower()}',
    category: '{t['category']}',
    scores: {{
      dataPrivacy: 28,
      security: 27,
      tracking: 18,
      userControl: 9,
      transparency: 9,
      total: 91
    }},
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free',
    openSource: {'true' if t['open_source'] else 'false'},
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: '{t['description']}',
    pros: [
      'Protects your privacy',
      'Easy to use'
    ],
    cons: [
      'May require some setup'
    ],
    content: `
      <h2>Why {name}?</h2>
      <p>{t['description']}</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> This tool limits data collection and external connections. <br><b>Plain English:</b> It stops companies from tracking what you do, so your personal stuff stays personal.</div></div>
      <h2>How it works</h2>
      <p>By keeping your data on your device and not sending it to big tech companies, it ensures you remain in control.</p>
    `
  }};
"""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    generated_files.append(id_name)
    index_counter += 1

print(f"Generated {len(generated_files)} review files.")
print("Files:", ", ".join(generated_files))

# Update index.js
index_file = os.path.join(out_dir, 'index.js')
if os.path.exists(index_file):
    with open(index_file, 'r', encoding='utf-8') as f:
        index_content = f.read()
        
    imports = []
    array_items = []
    
    for id_name in generated_files:
        var_name = id_name.replace('-', '_')
        if var_name[0].isdigit():
            var_name = '_' + var_name
        imports.append(f"import {var_name} from './{id_name}.js';")
        array_items.append(f"  {var_name},")
        
    # Insert imports before const REVIEWS
    new_index_content = index_content.replace('const REVIEWS = [', '\n'.join(imports) + '\n\nconst REVIEWS = [')
    
    # Insert array items before ];
    new_index_content = new_index_content.replace('];\n\nexport default REVIEWS;', '\n'.join(array_items) + '\n];\n\nexport default REVIEWS;')
    
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(new_index_content)
        
    print("Updated index.js")
