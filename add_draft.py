import sys
import json
import os
import re
from datetime import datetime

base_dir = os.path.dirname(__file__)
articles_dir = os.path.join(base_dir, "data", "articles")
reviews_dir = os.path.join(base_dir, "data", "reviews")

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
    lines = ["{"]
    for k, v in d.items():
        if k == 'content':
            content = v.replace('`', '\\`')
            lines.append(f"  content: `\n{content}\n  `")
        elif isinstance(v, bool):
            lines.append(f"  {k}: {'true' if v else 'false'},")
        elif isinstance(v, int):
            lines.append(f"  {k}: {v},")
        elif isinstance(v, list):
            items = ', '.join(f"'{str(x).replace(chr(39), chr(92)+chr(39))}'" for x in v)
            lines.append(f"  {k}: [{items}],")
        else:
            val = str(v).replace(chr(39), chr(92)+chr(39))
            lines.append(f"  {k}: '{val}',")
    lines.append("}")
    return "\n".join(lines)

def update_index_file(index_path, var_name, id_val, array_name):
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add import at the top
    import_stmt = f"import {var_name} from './{id_val}.js';\n"
    content = import_stmt + content

    # Add variable to the array
    insert_str = f"  {var_name},\n"
    # Find the end of the array, for example '];'
    content = content.replace(f"const {array_name} = [\n", f"const {array_name} = [\n{insert_str}")

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)

def add_article(data):
    # Calculate next index based on existing files or just dummy
    data['index'] = 1
    if 'date' not in data:
        data['date'] = datetime.now().strftime("%Y-%m-%d")
        
    id_val = data.get('id', 'new-article')
    var_name = id_val.replace('-', '_')

    js_str = dict_to_js_string(data)
    out_file = os.path.join(articles_dir, f"{id_val}.js")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(f"export default {js_str};\n")
    
    update_index_file(os.path.join(articles_dir, 'index.js'), var_name, id_val, "ARTICLES")
    print(f"Draft article successfully added to data/articles/{id_val}.js")

def add_review(data):
    # Dummy index logic since we don't know easily anymore
    data['index'] = 1000 
        
    id_val = data.get('id', 'new-review')
    var_name = id_val.replace('-', '_')

    js_str = dict_to_js_string(data)
    out_file = os.path.join(reviews_dir, f"{id_val}.js")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(f"export default {js_str};\n")
    
    update_index_file(os.path.join(reviews_dir, 'index.js'), var_name, id_val, "REVIEWS")
    print(f"Draft review successfully added to data/reviews/{id_val}.js")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python add_draft.py <article|review> <input_json_file>")
        sys.exit(1)
    
    add_draft(sys.argv[1], sys.argv[2])
