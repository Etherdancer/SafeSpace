import os
import re

pg_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\privacyguides_repo"
ap_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\awesome_privacy_repo"
reviews_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\data\reviews"

# Pre-load text from PrivacyGuides
pg_text = ""
for root, _, files in os.walk(os.path.join(pg_dir, "docs")):
    for file in files:
        if file.endswith(".md"):
            try:
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    pg_text += f.read().lower() + "\n"
            except:
                pass

# Pre-load text from Awesome Privacy
ap_text = ""
for root, _, files in os.walk(ap_dir):
    for file in files:
        if file.endswith(".md"):
            try:
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    ap_text += f.read().lower() + "\n"
            except:
                pass

count = 0
for filename in os.listdir(reviews_dir):
    if not filename.endswith(".js") or filename == "index.js":
        continue
        
    filepath = os.path.join(reviews_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    id_match = re.search(r"id:\s*'([^']+)'", content)
    name_match = re.search(r"name:\s*'([^']+)'", content)
    
    if not id_match or not name_match:
        continue
        
    tool_id = id_match.group(1).lower()
    tool_name = name_match.group(1).lower()
    
    # Check if tool is explicitly mentioned/recommended
    in_pg = f"/{tool_id}" in pg_text or tool_name in pg_text
    in_ap = f"[{tool_name}]" in ap_text or f"/{tool_id}" in ap_text or tool_name in ap_text

    # Read current scores
    dp_match = re.search(r"dataPrivacy:\s*(\d+)", content)
    sec_match = re.search(r"security:\s*(\d+)", content)
    trk_match = re.search(r"tracking:\s*(\d+)", content)
    uc_match = re.search(r"userControl:\s*(\d+)", content)
    trans_match = re.search(r"transparency:\s*(\d+)", content)
    
    if not (dp_match and sec_match and trk_match and uc_match and trans_match):
        continue
        
    dp = int(dp_match.group(1))
    sec = int(sec_match.group(1))
    trk = int(trk_match.group(1))
    uc = int(uc_match.group(1))
    trans = int(trans_match.group(1))
    
    # Adjust based on evidence
    if in_pg:
        # PrivacyGuides is the gold standard for E2EE and Audits
        dp = max(dp, 29)
        sec = max(sec, 29)
        trans = max(trans, 9)
        trk = max(trk, 19)
        
    if in_ap:
        # Awesome Privacy vets for general anti-tracking
        trk = max(trk, 19)
        sec = max(sec, 26)
        dp = max(dp, 27)

    # Re-cap
    dp = min(dp, 30)
    sec = min(sec, 30)
    trk = min(trk, 20)
    uc = min(uc, 10)
    trans = min(trans, 10)
    total = dp + sec + trk + uc + trans

    # Replace scores block
    score_pattern = re.compile(r"scores:\s*\{[^}]+\}", re.DOTALL)
    new_scores_block = f"""scores: {{
      dataPrivacy: {dp},
      security: {sec},
      tracking: {trk},
      userControl: {uc},
      transparency: {trans},
      total: {total}
    }}"""
    
    new_content, sub_count = score_pattern.subn(new_scores_block, content)
    
    if sub_count > 0 and content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1

print(f"Successfully re-evaluated and updated scores for {count} review files based on local repository research.")
