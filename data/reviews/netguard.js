export default {
  id: 'netguard',
  website: 'https://netguard.me',
  index: 211,
  name: 'NetGuard',
  tagline: 'Block any app from the internet — no root needed.',
  category: 'Firewall',
  scores: {
      dataPrivacy: 27,
      security: 28,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 93
    },
    externalScores: {
      appStore: 3.1,
    },
  platforms: ['Android'],
  pricing: 'Freemium',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'A simple, powerful no-root firewall for Android that gives you per-app internet control — one of the best free privacy tools on the platform.',
  pros: [
    'Block any app from accessing Wi-Fi, mobile data, or both',
    'No root required — works on standard Android installs',
    'Open source and available on F-Droid',
    'Logs and filters network connections per app',
  ],
  cons: [
    'Uses the Android VPN slot, so cannot run alongside a VPN',
    'Advanced features (host blocking, traffic log export) require a one-time paid unlock',
    'Does not inspect encrypted HTTPS traffic — only blocks by domain',
    'No iOS version',
  ],
  content: `
    <h2>Why NetGuard?</h2>
    <p>Most Android apps have full internet access by default. They can send data whenever they want. NetGuard lets you change that. You decide which apps are allowed online — and which are cut off completely.</p>
    <p>It requires no root access. That means it works on a standard, unmodified Android phone.</p>

    <h2>How it works</h2>
    <p>NetGuard creates a local VPN on your Android device. All network traffic from your apps is routed through this local VPN, which acts as a filter. NetGuard checks each connection request against your rules and either allows or blocks it. Nothing leaves your device to an external server — the VPN tunnel stays entirely local.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine every app on your phone is trying to make phone calls. NetGuard sits at the exchange and can cut off the line for any app you choose. The app still exists, it just cannot call anyone.</div></div>

    <h2>Per-app control</h2>
    <p>NetGuard shows you every installed app. You flip a switch to allow or block Wi-Fi access. Another switch for mobile data. Want a weather app that only checks data when you open it, not constantly in the background? Block its background access. This level of control is rare without rooting your phone.</p>

    <h2>Advanced features</h2>
    <p>The free version covers per-app blocking. A one-time in-app purchase unlocks DNS-based host blocking (similar to a hosts file), connection logging, and the ability to filter traffic for system apps. These are powerful extras, but the core firewall functionality is completely free.</p>

    <h2>Verdict</h2>
    <p>NetGuard is one of the most useful privacy tools you can install on a standard Android phone. It does not need root, it is open source, and it gives you real control over what your apps can and cannot do on the network. The VPN slot conflict with other VPNs is the main practical limitation.</p>
  `
};
