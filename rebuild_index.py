import os

dir_path = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\data\reviews"
js_files = [f for f in os.listdir(dir_path) if f.endswith('.js') and f != 'index.js']

imports = []
array_items = []

for f in js_files:
    id_name = f.replace('.js', '')
    var_name = id_name.replace('-', '_')
    if var_name[0].isdigit():
        var_name = '_' + var_name
    imports.append(f"import {var_name} from './{f}';")
    array_items.append(f"  {var_name},")

index_content = "\n".join(imports) + "\n\nconst REVIEWS = [\n" + "\n".join(array_items) + "\n];\n\nexport default REVIEWS;\n"

with open(os.path.join(dir_path, 'index.js'), 'w', encoding='utf-8') as f:
    f.write(index_content)
    
print(f"Rebuilt index.js with {len(js_files)} imports.")
