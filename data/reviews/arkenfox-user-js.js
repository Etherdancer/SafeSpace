export default {
    id: 'arkenfox-user-js',
    website: 'https://github.com/arkenfox/user.js',
    index: 252,
    name: 'Arkenfox',
    tagline: 'The ultimate privacy shield for Firefox',
    category: 'Browser Hardening',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 99
    },
    platforms: ['Linux', 'macOS', 'Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'For advanced users who want maximum privacy, Arkenfox transforms Firefox into a fortress.',
    pros: [
      'Drastically reduces browser fingerprinting',
      'Disables all hidden Mozilla telemetry and data collection',
      'Maintained by a dedicated community of privacy experts'
    ],
    cons: [
      'Strict settings can break some websites',
      'Requires reading instructions to install properly (no "install" button)'
    ],
    content: `
      <h2>Why Arkenfox?</h2>
      <p>Firefox is a great privacy browser, but out of the box, it still collects some usage data and leaves a few doors open for convenience. Firefox has hundreds of hidden privacy settings that you can't see in the normal menus. Arkenfox is a pre-made configuration file that flips all those hidden switches to "maximum privacy."</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Arkenfox is a heavily curated <code>user.js</code> file that overwrites Firefox's default <code>about:config</code> preferences to mitigate tracking, fingerprinting, and telemetry. <br><b>Plain English:</b> It's a master blueprint. When you place this file inside Firefox's folder, Firefox reads it and instantly hardens its own internal security systems.</div></div>

      <h2>How it works</h2>
      <p>You don't install Arkenfox like a normal extension. Instead, you download a file and place it in your Firefox profile folder. Once you restart the browser, it applies hundreds of tweaks: it blocks fingerprinting, stops websites from reading your battery level, isolates website cookies from each other, and turns off Mozilla's own tracking.</p>
      
      <h2>A Warning</h2>
      <p>Because Arkenfox is so strict, it can occasionally break interactive features on complex websites (like online banking). It is designed for users who are willing to occasionally tweak a setting or use a secondary browser for broken sites in exchange for maximum privacy.</p>
    `
  };
