import sys
import json
import os
import re
from datetime import datetime

guides_path = os.path.join(os.path.dirname(__file__), "data", "guides.js")
software_path = os.path.join(os.path.dirname(__file__), "data", "software.js")

def add_draft(content_type, input_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Force draft to be true
    data["draft"] = True

    if content_type == 'article':
        add_article(data)
    elif content_type == 'review':
        add_review(data)
    else:
        print("Unknown content type. Use 'article' or 'review'.")
        sys.exit(1)

def dict_to_js_string(d):
    # Very basic JS object serialization, assuming simple strings and arrays
    lines = ["  {"]
    for k, v in d.items():
        if k == 'content':
            # Handle template literal properly
            content = v.replace('`', '\\`')
            lines.append(f"    content: `\n{content}\n    `")
        elif isinstance(v, bool):
            lines.append(f"    {k}: {'true' if v else 'false'},")
        elif isinstance(v, int):
            lines.append(f"    {k}: {v},")
        elif isinstance(v, list):
            items = ', '.join(f"'{str(x).replace(chr(39), chr(92)+chr(39))}'" for x in v)
            lines.append(f"    {k}: [{items}],")
        else:
            val = str(v).replace(chr(39), chr(92)+chr(39))
            lines.append(f"    {k}: '{val}',")
    lines.append("  },")
    return "\n".join(lines)

def add_article(data):
    with open(guides_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Increment indices
    def repl(m):
        return f"index: {int(m.group(1)) + 1}"
    content = re.sub(r'index:\s*(\d+)', repl, content)

    data['index'] = 1
    if 'date' not in data:
        data['date'] = datetime.now().strftime("%Y-%m-%d")

    js_str = dict_to_js_string(data)
    content = content.replace('const ARTICLES = [', 'const ARTICLES = [\n' + js_str)

    with open(guides_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Draft article successfully added to data/guides.js")

def add_review(data):
    with open(software_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find highest index
    matches = re.findall(r'index:\s*(\d+)', content)
    highest_index = max([int(m) for m in matches]) if matches else 0
    data['index'] = highest_index + 1

    js_str = dict_to_js_string(data)
    content = content.replace('];\n\nexport default REVIEWS;', js_str + '\n];\n\nexport default REVIEWS;')

    with open(software_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Draft review successfully added to data/software.js")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python add_draft.py <article|review> <input_json_file>")
        sys.exit(1)
    
    add_draft(sys.argv[1], sys.argv[2])
