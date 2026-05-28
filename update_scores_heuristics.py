import os
import re

def calculate_scores(content):
    # Parse relevant details
    is_open_source = 'openSource: true' in content
    
    # Extract text content (pros, cons, and body) for keyword searching
    text_to_search = content.lower()
    
    dp = 25
    sec = 25
    trk = 18
    uc = 8
    trans = 8
    
    # --- Data Privacy ---
    if 'zero-knowledge' in text_to_search or 'end-to-end encrypt' in text_to_search or 'e2ee' in text_to_search:
        dp += 4
    if 'offline' in text_to_search or "doesn't track" in text_to_search or 'no tracking' in text_to_search:
        dp += 3
    if 'telemetry' in text_to_search:
        dp -= 3
    if 'metadata' in text_to_search or 'collects some' in text_to_search:
        dp -= 2
    if 'cloud' in text_to_search and 'zero-knowledge' not in text_to_search:
        dp -= 2
    if not is_open_source:
        dp -= 2

    # --- Security ---
    if 'audit' in text_to_search and ('cure53' in text_to_search or 'ncc' in text_to_search or 'trail of bits' in text_to_search or 'radically open security' in text_to_search or 'independent' in text_to_search):
        sec += 4
    if is_open_source:
        sec += 1
    if 'encrypt' in text_to_search:
        sec += 2
    if not is_open_source:
        sec -= 2
        
    # --- Tracking ---
    if 'telemetry' in text_to_search:
        trk -= 2
    if 'third-party' in text_to_search:
        trk -= 2
    if 'google' in text_to_search and ('without google' not in text_to_search and 'de-googled' not in text_to_search):
        trk -= 1
    if 'block ad' in text_to_search or 'blocks ad' in text_to_search or 'block tracker' in text_to_search or 'blocks tracker' in text_to_search:
        trk += 2
    if 'offline' in text_to_search:
        trk += 2

    # --- User Control ---
    if 'self-host' in text_to_search or 'self host' in text_to_search:
        uc += 2
    if 'export' in text_to_search or 'backup' in text_to_search:
        uc += 1
        
    # --- Transparency ---
    if is_open_source:
        trans += 2
    else:
        trans -= 3
    if 'audit' in text_to_search:
        trans += 1
        
    # Cap values
    dp = min(max(dp, 0), 30)
    sec = min(max(sec, 0), 30)
    trk = min(max(trk, 0), 20)
    uc = min(max(uc, 0), 10)
    trans = min(max(trans, 0), 10)
    
    # Specific hardcoded exceptions for major tools where heuristics might miss nuance
    id_match = re.search(r"id:\s*'([^']+)'", content)
    if id_match:
        tool_id = id_match.group(1)
        if tool_id in ['bitwarden', 'signal', 'grapheneos', 'mullvad', 'tails', 'tor-browser', 'qubes-os']:
            dp = max(dp, 29)
            sec = max(sec, 29)
            trk = 20
            trans = 10
        elif tool_id in ['1password', 'protonmail', 'tuta-mail']:
            sec = max(sec, 28)
            dp = max(dp, 28)
    
    total = dp + sec + trk + uc + trans
    return dp, sec, trk, uc, trans, total

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    dp, sec, trk, uc, trans, total = calculate_scores(content)
    
    # Replace scores block
    # We look for the scores: { ... } block
    score_pattern = re.compile(r"scores:\s*\{[^}]+\}", re.DOTALL)
    
    new_scores_block = f"""scores: {{
      dataPrivacy: {dp},
      security: {sec},
      tracking: {trk},
      userControl: {uc},
      transparency: {trans},
      total: {total}
    }}"""
    
    new_content, count = score_pattern.subn(new_scores_block, content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

reviews_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\data\reviews"
count = 0
for filename in os.listdir(reviews_dir):
    if filename.endswith(".js") and filename != "index.js":
        filepath = os.path.join(reviews_dir, filename)
        if process_file(filepath):
            count += 1

print(f"Successfully updated scores in {count} review files.")
