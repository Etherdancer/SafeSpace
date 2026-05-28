export default {
    id: 'adguard-home',
    website: 'https://adguard.com/en/adguard-home/overview.html',
    index: 255,
    name: 'AdGuard Home',
    tagline: 'Self-hosted DNS blocker with built-in DoH and DoT.',
    category: 'DNS',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 4.8,
    },
    platforms: ['Linux', 'Windows', 'macOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A polished self-hosted DNS blocker with encryption built in — great for those who want more than Pi-hole out of the box.',
    pros: [
      'Built-in DoH and DoT support — no extra tools needed',
      'Clean, modern web interface',
      'Rewrites and custom DNS rules',
      'Per-client filtering (different rules for different devices)',
      'Completely free and fully open source',
      'Your data stays on your hardware',
      'Blocks ads across your whole network',
    ],
    cons: [
      'Requires always-on hardware to run',
      'Some setup required',
      'Backed by AdGuard the company — check their broader products separately',
    ],
    content: `
      <h2>Why AdGuard Home?</h2>
      <p>AdGuard Home does the same core job as Pi-hole — it blocks ads and trackers for your whole network at the DNS level. But it comes with some features built in that Pi-hole needs extra configuration for, especially DNS encryption.</p>
      <p>If you want a self-hosted DNS blocker that's easier to get running with encrypted DNS from day one, AdGuard Home is a strong choice.</p>

      <h2>How it works</h2>
      <p>You install AdGuard Home on a computer that's always on. You point your router (or individual devices) to use it as their DNS server. AdGuard Home checks every domain lookup against its blocklists and blocks the ones tied to ads and trackers.</p>
      <p>The web interface shows you live query logs, statistics, and lets you manage everything through a browser — no command line required for day-to-day use.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>AdGuard Home supports DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) natively. This means your DNS queries are encrypted in transit — your internet provider sees an encrypted connection, not a list of every website you visit.</div></div>

      <h2>Per-client rules</h2>
      <p>One thing AdGuard Home does that Pi-hole makes harder: per-client settings. You can give your kids' devices stricter filtering, while leaving your own device less restricted. Each client gets its own profile.</p>
      <p>You can also write custom DNS rewrite rules — useful for pointing a local domain name to a home server, for example.</p>

      <h2>Open source and self-hosted</h2>
      <p>AdGuard Home is fully open source on GitHub. Because it runs on your own hardware, your DNS query history never leaves your home. The AdGuard company doesn't see your traffic — they just write the software.</p>
      <p>This is different from AdGuard's commercial products (browser extensions, Android app), which are separate and cloud-based. AdGuard Home is its own thing.</p>

      <h2>Verdict</h2>
      <p>AdGuard Home is Pi-hole's most capable self-hosted competitor. It's slightly more polished out of the box, especially around DNS encryption. Both are excellent. Your choice might come down to which interface you prefer.</p>
    `
  };
