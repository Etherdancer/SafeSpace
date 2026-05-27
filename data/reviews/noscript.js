export default {
    id: 'noscript',
    website: 'https://noscript.net/',
    index: 251,
    name: 'NoScript',
    tagline: 'Block all scripts until you decide what to trust.',
    category: 'Browser Extension',
    scores: {
      dataPrivacy: 25,
      security: 27,
      tracking: 19,
      userControl: 10,
      transparency: 9,
      total: 90
    },
    platforms: ['Web'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'One of the most powerful browser security tools available — blocks all active content by default and gives you precise control over what runs on each site.',
    pros: [
      'Blocks JavaScript, WebAssembly, iframes, and other active content by default',
      'Per-site and per-domain trust levels with fine-grained control',
      'Blocks cross-site scripting (XSS) attacks',
      'Included in Tor Browser by default — trusted at the highest level',
      'Fully open source',
      'Very low resource usage',
    ],
    cons: [
      'Breaks many websites until you manually whitelist scripts',
      'Steep learning curve for new users',
      'Firefox-focused (Chromium support is more limited)',
      'Some sites are difficult to use even with partial whitelisting',
    ],
    content: `
      <h2>Why NoScript?</h2>
      <p>JavaScript is the engine that powers most modern websites — but it is also the primary vehicle for browser-based tracking, fingerprinting, and malware delivery. NoScript blocks all JavaScript and other active content by default. Nothing runs unless you allow it.</p>
      <p>It is the bluntest and most effective approach to browser script control available as a free extension. It is included in Tor Browser for good reason.</p>

      <h2>How it works</h2>
      <p>NoScript intercepts browser requests for scripts, iframes, WebAssembly, and other active content types before they load. Each domain is assigned a trust level: Default (block), Trusted (allow), or Untrusted (always block). When you visit a site that needs scripts to function, you see a panel listing every script origin and can selectively allow the ones the site needs while keeping third-party trackers blocked.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Most websites pull in scripts from dozens of different places — some from the site itself, others from ad networks and trackers. NoScript treats every one of those sources as a stranger until you say otherwise. Only the ones you personally vouch for get to run.</div></div>

      <h2>XSS protection</h2>
      <p>NoScript includes an anti-cross-site scripting filter (ABE — Application Boundaries Enforcer). Cross-site scripting is a type of attack where a malicious site injects its scripts into a legitimate site you trust. NoScript's ABE rules detect and block common XSS patterns before they reach the page, giving you a layer of protection even on sites you have trusted.</p>

      <h2>A daily-driver reality check</h2>
      <p>NoScript is genuinely demanding to use day to day. Many sites break immediately without JavaScript. Getting a site to work often requires several rounds of "allow this domain, still broken, allow that domain, still broken." Once you have configured the sites you visit regularly it becomes more manageable, but expect friction during the learning period.</p>
      <p>For many users, a less aggressive alternative like uBlock Origin in medium mode offers a better balance between protection and usability.</p>

      <h2>Verdict</h2>
      <p>NoScript is the most powerful script-blocking tool available for Firefox. It is trusted by Tor Browser, fully open source, and provides genuine protection against both tracking and browser-based attacks. The usability cost is real — but for users who want maximum control over what runs in their browser, nothing else comes close.</p>
    `
  };
