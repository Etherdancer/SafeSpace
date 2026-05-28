export default {
  id: 'invizible-pro',
  website: 'https://github.com/Gedsh/InviZible',
  index: 214,
  name: 'InviZible Pro',
  tagline: 'Tor, I2P, and DNSCrypt together on Android.',
  category: 'Privacy Tools',
  scores: {
      dataPrivacy: 25,
      security: 30,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 92
    },
    externalScores: {
      appStore: 4.5,
    },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'A powerful, free privacy toolkit that brings Tor, I2P, and encrypted DNS to Android in one app — for users who need serious anonymity tools.',
  pros: [
    'Combines Tor, I2P, and DNSCrypt in a single app',
    'Can route all device traffic through Tor, not just one browser',
    'Open source and free',
    'Works without root on most devices',
  ],
  cons: [
    'Complex to configure — not suitable for beginners',
    'Tor routing slows down all internet traffic significantly',
    'Uses the VPN slot — cannot run alongside another VPN',
    'I2P and Tor are strong tools that require understanding to use safely',
  ],
  content: `
    <h2>Why InviZible Pro?</h2>
    <p>Tor Browser on Android protects your browsing. But what about your other apps? InviZible Pro can route all your device's traffic through Tor — not just one browser. It also encrypts your DNS and offers access to the I2P network, a separate anonymous network designed for internal services.</p>
    <p>This is a tool for people who need serious anonymity, not just ad blocking.</p>

    <h2>How it works</h2>
    <p>InviZible Pro integrates three separate privacy technologies into one Android app. DNSCrypt encrypts your DNS queries so your ISP cannot read which domains you look up. Tor routes your traffic through a chain of volunteer servers to hide your IP address and location. I2P is an overlay network for communicating with services hosted inside the I2P network itself. You can run these independently or combine them.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>DNSCrypt seals the address labels on your messages. Tor routes them through several relay stations so no one can trace where they came from. I2P connects you to a completely separate hidden network. InviZible Pro can do all three at once — think of it as a privacy Swiss Army knife for your internet connection.</div></div>

    <h2>Full device Tor routing</h2>
    <p>On rooted devices, InviZible Pro can route all traffic through Tor — every app, every connection. On non-rooted devices, it uses the VPN interface to approximate the same result. This is significantly more powerful than Tor Browser, which only protects the browser itself.</p>

    <h2>Know what you are doing</h2>
    <p>Tor and I2P are strong tools — but they have limits. Tor does not make you completely anonymous if you log into accounts that identify you. I2P is a different network with its own learning curve. InviZible Pro is not a "set it and forget it" app. Using it well requires understanding what each component does. The documentation is worth reading before you rely on it for anything serious.</p>

    <h2>Verdict</h2>
    <p>InviZible Pro is one of the most capable privacy tools available on Android. If you need system-wide Tor routing, encrypted DNS, and access to I2P — all free and open source — this is the app. It is not for beginners, but for technically confident users with serious privacy needs, it is excellent.</p>
  `
};
