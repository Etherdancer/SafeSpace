export default {
  id: 'adguard',
  website: 'https://adguard.com',
  index: 201,
  name: 'AdGuard',
  tagline: 'Block ads and trackers everywhere, not just your browser.',
  category: 'Browser Extension',
  scores: {
    dataPrivacy: 24,
    security: 23,
    tracking: 17,
    userControl: 8,
    transparency: 7,
    total: 79
  },
  platforms: ['iOS', 'Android', 'Windows', 'macOS'],
  pricing: 'Freemium',
  openSource: true,
  auditedBy: 'Core libraries open source; desktop app not fully open source',
  relatedArticles: [],
  verdict: 'A solid cross-platform blocker with a strong free tier, though the closed-source desktop app and cloud DNS features require some trust.',
  pros: [
    'Blocks ads and trackers across browsers and apps',
    'Core filtering engine is open source',
    'Works on iOS, Android, Windows, and macOS',
    'Custom filter list support gives advanced users full control',
  ],
  cons: [
    'Desktop application is not fully open source',
    'Some features route DNS queries through AdGuard servers',
    'Premium subscription required for the best features on mobile',
    'Cloud-based DNS mode requires trusting AdGuard with your DNS queries',
  ],
  content: `
    <h2>Why AdGuard?</h2>
    <p>AdGuard is one of the most widely used ad and tracker blockers available. It works as a browser extension, a standalone app, and a system-wide filter depending on your platform. It covers more ground than most tools.</p>
    <p>The free tier is genuinely useful. You do not need to pay to get meaningful privacy protection.</p>

    <h2>How it works</h2>
    <p>AdGuard maintains large lists of known ad servers, trackers, and malicious domains. When your browser or app tries to connect to one of those addresses, AdGuard intercepts the request and blocks it. On desktop, it can filter traffic from all apps using a local proxy. On mobile, it uses the system VPN interface.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine every website you visit is a shop, and most shops have someone following you around with a clipboard writing down everything you look at. AdGuard spots those clipboard people and stops them from entering the shop with you.</div></div>

    <h2>Open source — but not all of it</h2>
    <p>AdGuard's filtering engine and browser extensions are open source. Anyone can read the code. But the full desktop application for Windows and macOS is not open source. That means you can check how the core filtering works, but not every part of the app you install on your computer.</p>
    <p>This is not a dealbreaker — the extensions are excellent. But it is worth knowing.</p>

    <h2>The DNS question</h2>
    <p>AdGuard offers its own DNS service. Using it means your DNS queries — essentially a log of every website you try to visit — go through AdGuard's servers. They publish a privacy policy saying they do not log this data permanently, but it still requires trusting a third party. If you want zero DNS trust, use a local DNS option instead.</p>

    <h2>Verdict</h2>
    <p>AdGuard is a capable, well-maintained blocker that works across all major platforms. It is not perfectly transparent — the desktop app is closed source — but the protection it provides is real and meaningful. A good choice for users who want one tool that works everywhere.</p>
  `
};
