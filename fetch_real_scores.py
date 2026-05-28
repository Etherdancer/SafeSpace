import os
import re
import time
import requests
import urllib.parse
from google_play_scraper import search, app

reviews_dir = r"c:\Users\tomis\.gemini\antigravity\scratch\SafeSpace\data\reviews"

def get_itunes_rating(term):
    url = f"https://itunes.apple.com/search?term={urllib.parse.quote(term)}&entity=software&limit=1"
    try:
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            data = r.json()
            if data['resultCount'] > 0:
                rating = data['results'][0].get('averageUserRating')
                if rating:
                    return round(rating, 1)
    except Exception as e:
        print(f"iTunes error for {term}: {e}")
    return None

def get_playstore_rating(term):
    try:
        results = search(term, lang="en", country="us", n_hits=1)
        if results and len(results) > 0:
            app_id = results[0]['appId']
            app_info = app(app_id)
            rating = app_info.get('score')
            if rating:
                return round(rating, 1)
    except Exception as e:
        print(f"Play Store error for {term}: {e}")
    return None

count = 0
for filename in os.listdir(reviews_dir):
    if not filename.endswith(".js") or filename == "index.js":
        continue
        
    filepath = os.path.join(reviews_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find the app name
    name_match = re.search(r"name:\s*'([^']+)'", content)
    if not name_match:
        continue
        
    app_name = name_match.group(1)
    
    # Check if externalScores is already added
    if "externalScores:" in content:
        continue
        
    print(f"Fetching ratings for {app_name}...")
    
    ios_rating = get_itunes_rating(app_name)
    android_rating = get_playstore_rating(app_name)
    
    if ios_rating is None and android_rating is None:
        print(f"  No ratings found for {app_name}.")
        continue
        
    print(f"  iOS: {ios_rating}, Android: {android_rating}")
    
    # Format the new block
    external_scores_block = "externalScores: {\n"
    if ios_rating:
        external_scores_block += f"      appStore: {ios_rating},\n"
    if android_rating:
        external_scores_block += f"      playStore: {android_rating},\n"
    external_scores_block += "    },"
    
    # Insert it right after the scores block
    score_pattern = re.compile(r"(scores:\s*\{[^}]+\},)", re.DOTALL)
    
    new_content, sub_count = score_pattern.subn(r"\1\n    " + external_scores_block, content)
    
    if sub_count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        
    # Small delay to respect APIs
    time.sleep(1)

print(f"\nDone! Added external scores to {count} review files.")
