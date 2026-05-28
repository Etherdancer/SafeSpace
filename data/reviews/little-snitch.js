export default {
    id: 'little-snitch',
    website: 'https://www.obdev.at/products/littlesnitch/index.html',
    index: 235,
    name: 'Little Snitch',
    tagline: 'Professional-grade firewall and network monitor for macOS',
    category: 'Firewall',
    scores: {
      dataPrivacy: 23,
      security: 27,
      tracking: 18,
      userControl: 9,
      transparency: 6,
      total: 83
    },
    externalScores: {
      appStore: 4.6,
    },
    platforms: ['macOS'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'If you want absolute, microscopic control over everything your Mac connects to, Little Snitch is the industry standard.',
    pros: [
      'Extremely detailed world map showing exactly where data is going',
      'Granular rules (block an app forever, or just for 5 minutes)',
      'Silently blocks known tracking domains automatically'
    ],
    cons: [
      'Not free (requires a paid license)',
      'Not open-source',
      'Can be overwhelming for non-technical users'
    ],
    content: `
      <h2>Why Little Snitch?</h2>
      <p>While free tools like LuLu are great for basic blocking, sometimes you need to see the bigger picture. Little Snitch not only acts as an outward-facing firewall, but it visually maps out exactly which countries and servers your apps are secretly talking to.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Little Snitch provides deep packet inspection and DNS-based filtering, allowing per-process, per-domain, and per-port connection rules. <br><b>Plain English:</b> It lets you create very specific rules. For example, you can allow a weather app to connect to its forecast server, but block that exact same app from connecting to a Facebook tracking server.</div></div>

      <h2>How it works</h2>
      <p>It runs quietly in the background. When an app tries to connect to the internet, you get an alert with a map showing exactly where the server is located. You can decide what to do on the spot. If it's too annoying, you can switch it to "Silent Mode," where it automatically allows or denies connections based on community-curated lists.</p>
      
      <h2>Visual Network Map</h2>
      <p>The most striking feature is the Network Monitor map. Watching it for five minutes will permanently change how you view your computer, as you watch seemingly innocent apps ping servers in dozens of countries around the world.</p>
    `
  };
