export default {
  id: 'lockdown-privacy',
  website: 'https://lockdownprivacy.com',
  index: 200,
  name: 'Lockdown Privacy',
  tagline: 'Block trackers at the network level on iOS.',
  category: 'Firewall',
  scores: {
    dataPrivacy: 28,
    security: 26,
    tracking: 19,
    userControl: 9,
    transparency: 9,
    total: 91
  },
  platforms: ['iOS'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Confirmed by independent audit (see their open audit page)',
  relatedArticles: [],
  verdict: 'A rare iOS firewall that blocks trackers system-wide, fully on-device, with its code open for anyone to check.',
  pros: [
    'Blocks trackers across all apps, not just the browser',
    'All blocking happens on-device — no traffic leaves to a server',
    'Open source and independently audited',
    'Free with no ads and no account required',
  ],
  cons: [
    'iOS only — not available on Android',
    'VPN tunnel used for blocking cannot run alongside other VPNs',
    'Block list customisation is basic compared to desktop tools',
  ],
  content: `
    <h2>Why Lockdown Privacy?</h2>
    <p>Most apps on your phone are quietly phoning home. They send data about what you do, when you do it, and who you are — to advertisers, analytics firms, and data brokers. Lockdown Privacy stops those calls before they leave your device.</p>
    <p>Unlike browser extensions, Lockdown works across your whole phone. It does not matter which app you are using.</p>

    <h2>How it works</h2>
    <p>Lockdown uses iOS's built-in VPN interface to intercept outgoing network connections. It checks each connection against a block list and drops the ones that match known trackers and ad servers. No traffic is routed through an external server — everything runs locally on your iPhone.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of it like a bouncer at the door of your phone. Every time an app tries to send data somewhere, the bouncer checks the list. If the destination is a known tracker, it gets turned away before it ever leaves your device.</div></div>

    <h2>Open and audited</h2>
    <p>Lockdown publishes its source code and has commissioned independent security audits. The audit results are public. This is not common for iOS apps — most privacy tools ask you to just trust them. Lockdown shows its work.</p>

    <h2>The VPN slot problem</h2>
    <p>iOS only allows one VPN connection at a time. Because Lockdown uses the VPN interface to do its blocking, you cannot run it at the same time as a traditional VPN. You have to choose one or the other. This is an Apple limitation, not a Lockdown flaw.</p>

    <h2>Verdict</h2>
    <p>Lockdown Privacy is one of the best things you can install on an iPhone. It is free, open source, audited, and it genuinely stops trackers across your entire device. The only real downside is that iOS forces you to pick between Lockdown and a VPN — you cannot have both active at once.</p>
  `
};
