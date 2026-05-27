import os
import sys
import re

def validate_reviews(reviews_dir):
    errors = []
    required_keys = ['id', 'name', 'category', 'scores', 'platforms', 'pricing', 'openSource', 'verdict', 'pros', 'cons', 'content']

    for filename in os.listdir(reviews_dir):
        if not filename.endswith('.js') or filename == 'index.js':
            continue
            
        filepath = os.path.join(reviews_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check for export default {
                if "export default {" not in content:
                    errors.append(f"{filename}: Missing 'export default {{' declaration.")
                
                # Check required keys
                for k in required_keys:
                    if f"{k}:" not in content and f"{k} :" not in content:
                        errors.append(f"{filename}: Missing required property '{k}'.")

                # Check for unescaped single quotes inside single quoted strings (simple heuristic)
                lines = content.split('\n')
                for i, line in enumerate(lines):
                    match = re.match(r"^\s*(tagline|name|category|pricing|auditedBy|verdict|website):\s*'(.*)", line)
                    if match:
                        val = match.group(2)
                        unescaped = re.sub(r"\\'", "", val)
                        # We expect the line to end with a single quote and a comma: ',
                        # If there are more than 1 single quote remaining, there's likely an unescaped one inside
                        # which will cause a SyntaxError in JavaScript.
                        # Wait, what if the string has no comma? just ', or '
                        if unescaped.count("'") > 1 and not line.strip().endswith("',"):
                            # This is a bit too strict, let's just check if it has more than 1 quote and doesn't end cleanly.
                            pass
                        if unescaped.count("'") > 1 and line.strip().endswith("',"):
                            # If it ends with ', the last quote is closed. So count should be 1.
                            if unescaped.count("'") > 1:
                                errors.append(f"{filename}:{i+1}: Possible unescaped single quote -> {line.strip()}")
        except Exception as e:
            errors.append(f"Could not read {filename}: {str(e)}")
            
    if errors:
        print("Validation Failed! Found the following errors:")
        for error in errors:
            print(" -", error)
        sys.exit(1)
    else:
        print("All reviews passed basic validation!")
        sys.exit(0)

if __name__ == '__main__':
    validate_reviews('data/reviews')
