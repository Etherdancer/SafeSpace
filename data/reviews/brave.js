export default {
    id: 'brave',
    website: 'https://brave.com',
    index: 6,
    name: 'Brave Browser',
    tagline: 'Privacy by default, without any configuration',
    category: 'Browsers',
    scores: {
      dataPrivacy: 27,
      security: 28,
      tracking: 19,
      userControl: 9,
      transparency: 9,
      total: 92
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Chromium base audited continuously; community-reviewed Brave additions',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'user-accounts-and-privacy', 'privacy-vs-convenience'],
    verdict: 'The easiest switch from Chrome. Brave blocks ads and trackers by default and randomises your fingerprint. Ignore the built-in crypto features and you have an excellent privacy browser.',
    pros: [
      'Blocks ads, trackers, and fingerprinting scripts out of the box — no setup needed',
      'Randomises your browser fingerprint per website, preventing cross-site tracking',
      'Works exactly like Chrome — same extensions, same websites, smooth switch',
      'Built-in Tor private window mode for occasional anonymous browsing',
      'Excellent mobile app',
    ],
    cons: [
      'Based on Chrome\'s code (Chromium) — contributes to Google\'s dominance of the web',
      'Has a built-in cryptocurrency rewards system (can be ignored, but some find it uncomfortable)',
      'Past controversy over quietly inserting affiliate codes into URLs (resolved, but worth knowing)',
    ],
    content: `
      <h2>Why Brave?</h2>
      <p>Most people use Chrome because it's fast and familiar. Brave is built on exactly the same technology as Chrome (a shared foundation called Chromium), so it looks the same, works the same, and supports all the same extensions. The difference is that Brave has added a powerful layer of privacy protection on top that Chrome deliberately doesn't have.</p>
      <p>Install Brave and from your very first browsing session, you're blocking the trackers that follow you around the web, the ads that fund the tracking, and the fingerprinting scripts that try to identify you. Zero configuration required.</p>

      <h2>What Is Fingerprint Randomisation?</h2>
      <p>Your browser has a kind of invisible name tag. Websites read technical details about your device — your screen size, the fonts you have installed, your graphics hardware — and combine them into a unique fingerprint that identifies you without cookies.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Brave shows a slightly different "face" to each website you visit — Site A and Site B each see different technical details about your device, so they can't match notes and realise it's the same person. It does this by injecting small random offsets into Canvas, WebGL, AudioContext, and font enumeration APIs on a per-origin basis. Other browsers show the same face everywhere.</div></div>

      <h2>The Crypto Stuff (You Can Ignore It)</h2>
      <p>Brave has a built-in system called Basic Attention Token (BAT) that lets you opt into seeing "privacy-preserving ads" and earn small amounts of cryptocurrency in return. This is entirely optional — you can ignore it completely. Brave's privacy features work exactly the same whether or not you engage with BAT. The crypto system is Brave's revenue model, and while some find it philosophically uncomfortable for a privacy tool, it doesn't undermine the privacy features themselves.</p>

      <h2>How to Switch From Chrome</h2>
      <ol>
        <li>Go to <strong>brave.com</strong> and click Download. Install it like any other programme.</li>
        <li>When Brave opens, it will offer to import your bookmarks, history, and passwords from Chrome. Accept — this makes the transition seamless.</li>
        <li>Go to Settings &gt; Search engine and choose DuckDuckGo as your default search engine.</li>
        <li>Install any extensions you use (your Chrome extensions work in Brave) — but minimise them to reduce your fingerprint uniqueness.</li>
        <li>Optionally add uBlock Origin for an extra layer of blocking on top of Brave's built-in shields.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Brave is the best choice for anyone switching from Chrome who wants strong privacy without having to learn anything new. The crypto features are easy to ignore. For users who want even more control and prefer to avoid Chrome's codebase entirely, Firefox is the alternative.</p>
    `
  };
