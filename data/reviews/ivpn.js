export default {
    id: 'ivpn',
    website: 'https://www.ivpn.net',
    index: 253,
    name: 'IVPN',
    tagline: 'No email. No logs. Just an account number.',
    category: 'VPN',
    scores: {
      dataPrivacy: 29,
      security: 28,
      tracking: 19,
      userControl: 9,
      transparency: 9,
      total: 94
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Paid',
    openSource: true,
    auditedBy: 'Cure53 (2019, 2022)',
    relatedArticles: [],
    verdict: 'One of the most privacy-serious VPNs available — no email, no logs, and fully audited open source apps.',
    pros: [
      'No email required to sign up — you get an account number only',
      'Anonymous payment via cash or Monero',
      'No connection logs or activity logs of any kind',
      'Apps are fully open source and audited by Cure53',
      'Multi-hop VPN and built-in firewall (killswitch)',
      'WireGuard and OpenVPN support',
      'AntiTracker blocks ads and trackers at the VPN level',
    ],
    cons: [
      'Costs money — no free tier',
      'Fewer servers than mass-market VPNs',
      'No browser extension',
    ],
    content: `
      <h2>Why IVPN?</h2>
      <p>Most VPNs ask for your email address to create an account. IVPN doesn't. When you sign up, you get an account number. That's it. There's no email tied to you, no username, nothing that links your account to a real identity.</p>
      <p>This matters because even if IVPN's servers were seized, there would be nothing to hand over. They simply don't have your data.</p>

      <h2>How it works</h2>
      <p>IVPN routes your internet traffic through an encrypted tunnel to one of their servers. Websites you visit see the VPN server's IP address — not yours. IVPN supports both WireGuard and OpenVPN protocols.</p>
      <p>WireGuard is the newer, faster option. OpenVPN is the tried-and-tested classic. Both are strong choices.</p>
      <p>IVPN also offers multi-hop: your traffic can bounce through two servers in different countries before reaching its destination. That makes tracing you even harder.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>IVPN's account system uses randomly generated account numbers with no associated email address. Even if someone obtained IVPN's account database, they couldn't link any account to a real person.</div></div>

      <h2>AntiTracker</h2>
      <p>IVPN has a built-in tracker and ad blocker called AntiTracker. It works at the DNS level inside the VPN tunnel. You don't need a separate browser extension — it just works for every app on your device.</p>
      <p>There's also a "Hardcore Mode" that blocks Google and Facebook domains outright. That's aggressive, but it's your choice to turn it on.</p>

      <h2>Audited and open source</h2>
      <p>All IVPN apps (Windows, macOS, Linux, iOS, Android) are open source. You can read the code. Security firm Cure53 has independently audited IVPN twice — once in 2019 and again in 2022. The results are published on IVPN's website.</p>
      <p>They also publish a warrant canary and have a clear, minimal privacy policy. No legal jargon walls.</p>

      <h2>Verdict</h2>
      <p>IVPN costs more than nothing, but it gives you more than most. If you take your privacy seriously and want a VPN that's been built from the ground up to collect as little as possible, IVPN is one of the best choices available.</p>
    `
  };
