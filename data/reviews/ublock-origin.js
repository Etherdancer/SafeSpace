export default {
    id: 'ublock-origin',
    website: 'https://ublockorigin.com',
    index: 9,
    name: 'uBlock Origin',
    tagline: 'The most effective content blocker ever made',
    category: 'Browser Extensions',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Firefox', 'Chrome', 'Edge', 'Opera'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Continuous community review on GitHub',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'privacy-vs-convenience'],
    verdict: 'Install this immediately. It\'s the single highest-impact privacy action available for your browser. Free, lightweight, and blocks thousands of trackers automatically.',
    pros: [
      'Blocks ads, trackers, malware sites, and fingerprinting scripts by default',
      'Extremely lightweight — uses less memory than most other blockers',
      'Fully open source and independently developed (no advertising industry ties)',
      'Blocks cookie consent banners (with optional filter lists)',
      'Highly configurable for advanced users who want more control',
    ],
    cons: [
      'Occasionally breaks website functionality (fixed by clicking the uBlock Origin icon and disabling for that site)',
      'Chrome version will become less powerful in future due to Google\'s Manifest V3 restrictions',
      'Advanced "medium mode" has a learning curve',
    ],
    content: `
      <h2>What Does uBlock Origin Actually Do?</h2>
      <p>When you visit a website, the page you're reading is rarely the only thing loading. Most websites also load dozens of invisible "third-party" scripts from advertising and tracking companies — Google, Facebook, TikTok, dozens of data brokers you've never heard of. These scripts track your behaviour, build profiles about you, and follow you across every website that loads them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Before your browser even sends a request to a tracking company, uBlock Origin steps in and says "no." The tracker never loads and never gets the chance to watch what you do. It does this by intercepting outgoing network requests at the browser level and comparing each request's origin domain against community-maintained blocklists (EasyList, EasyPrivacy, uBlock filters, etc.).</div></div>

      <h2>Is It Actually Different From Other Ad Blockers?</h2>
      <p>Yes. Most popular ad blockers — Adblock Plus, for example — accept money from advertising companies through an "Acceptable Ads" programme, which allows certain ads through. uBlock Origin has no such arrangement. It blocks everything on its lists, period. It's developed by a single independent developer (Raymond Hill) who has no financial relationship with the advertising industry.</p>

      <h2>What Gets Blocked by Default</h2>
      <ul>
        <li>Advertising from all major networks (Google Ads, Facebook Ads, etc.)</li>
        <li>Tracking scripts (Google Analytics, Facebook Pixel, TikTok Pixel, etc.)</li>
        <li>Known malware and phishing domains — it's also a security tool</li>
        <li>Cryptomining scripts that use your computer's power without asking</li>
      </ul>
      <p>With optional filter lists enabled (EasyPrivacy and uBlock Annoyances), it also blocks:</p>
      <ul>
        <li>Cookie consent banners (the "Accept all cookies" popups)</li>
        <li>Social media sharing buttons that track you even if you don't click them</li>
        <li>Many newsletter signup popups</li>
      </ul>

      <h2>How to Install and Set Up</h2>
      <ol>
        <li><strong>In Firefox:</strong> Go to addons.mozilla.org and search "uBlock Origin." Click "Add to Firefox."</li>
        <li><strong>In Chrome or Edge:</strong> Go to the Chrome Web Store and search "uBlock Origin." Click "Add to Chrome." <em>Important: install "uBlock Origin" — not "uBlock" (a different, unrelated product) and not "uBlock Origin Lite" (a weaker version).</em></li>
        <li>Once installed, it works immediately. No setup needed.</li>
        <li><strong>Optional stronger setup:</strong> Click the uBlock Origin icon, then click the gear/settings icon. Go to "Filter lists." Tick "EasyPrivacy" and "uBlock filters – Annoyances." Click "Apply changes." Now it also blocks cookie banners and social tracking buttons.</li>
      </ol>

      <h2>The Chrome Problem</h2>
      <p>Google is making changes to how Chrome extensions work (called "Manifest V3") that will permanently limit uBlock Origin's effectiveness in Chrome and Chromium-based browsers.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Google is changing the rules for Chrome extensions in a way that lets fewer tracking scripts be blocked — uBlock Origin will be weaker on Chrome. On Firefox, those restrictions don't apply and the full blocker works indefinitely. This is a strong practical reason to use Firefox. The technical reason: Manifest V3 replaces the <code>webRequest</code> API's blocking capability with a declarativeNetRequest API that limits the number of filterable rules and removes dynamic rule evaluation.</div></div>

      <h2>Verdict</h2>
      <p>uBlock Origin is the first thing we recommend to anyone who asks about online privacy. It's free, it works immediately, and it blocks thousands of tracking scripts without you having to do anything. Install it now.</p>
    `
  };
