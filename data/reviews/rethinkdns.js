export default {
  id: 'rethinkdns',
  website: 'https://rethinkdns.com',
  index: 212,
  name: 'RethinkDNS',
  tagline: 'Android firewall and encrypted DNS in one open app.',
  category: 'Firewall',
  scores: {
    dataPrivacy: 28,
    security: 26,
    tracking: 19,
    userControl: 10,
    transparency: 9,
    total: 92
  },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'One of the most capable privacy tools on Android — combines firewall, DNS encryption, and ad blocking in a single free, open-source app.',
  pros: [
    'Firewall + encrypted DNS + blocklists all in one app',
    'Blocks ads and trackers at the DNS level across all apps',
    'Per-app firewall rules with no root required',
    'Fully open source and available on F-Droid',
    'Works with any DNS-over-HTTPS or DNS-over-TLS resolver',
  ],
  cons: [
    'Uses the Android VPN slot — cannot run alongside another VPN',
    'Interface can be overwhelming for new users',
    'No iOS version',
  ],
  content: `
    <h2>Why RethinkDNS?</h2>
    <p>Most firewall apps block connections. Most DNS apps encrypt your DNS queries. Most ad blockers filter domains. RethinkDNS does all three at once — in one app, for free, with no account required.</p>
    <p>It is one of the most powerful privacy tools available for a standard Android phone, and it requires no root access.</p>

    <h2>How it works</h2>
    <p>RethinkDNS runs a local VPN on your device, similar to NetGuard. All traffic from all apps passes through it. The app then applies three layers: it encrypts your DNS queries using DNS-over-HTTPS or DNS-over-TLS, it filters domains against blocklists you choose, and it enforces per-app firewall rules. Everything runs locally — no traffic is routed through RethinkDNS's servers unless you specifically choose their resolver.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of RethinkDNS as a very smart border checkpoint for your phone's internet traffic. It encrypts the address labels on outgoing messages, checks if those addresses are known bad actors, and has a separate list of which apps are even allowed to send messages in the first place.</div></div>

    <h2>Blocklists you control</h2>
    <p>RethinkDNS ships with dozens of blocklists — ad servers, tracker domains, malware, social media, and more. You pick which lists to enable. The lists are downloaded to your device and applied locally. Your DNS queries do not need to pass through RethinkDNS's servers to benefit from blocking.</p>

    <h2>Per-app firewall</h2>
    <p>Like NetGuard, RethinkDNS lets you set rules per app. You can allow an app on Wi-Fi but block it on mobile data. Or block it from running in the background entirely. You can also see a live log of every DNS query each app makes — which is a surprisingly revealing window into what your apps are doing.</p>

    <h2>Verdict</h2>
    <p>RethinkDNS packs more genuine privacy protection into a single free, open-source app than almost anything else on Android. The interface takes some learning, but the level of control it gives you is exceptional. If you use Android and care about privacy, this is one of the first apps to install.</p>
  `
};
