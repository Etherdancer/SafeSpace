export default {
  id: 'dnscloak',
  website: 'https://github.com/s-s/dnscloak',
  index: 202,
  name: 'DNSCloak',
  tagline: 'Encrypted DNS on iOS, no server middleman.',
  category: 'DNS',
  scores: {
    dataPrivacy: 26,
    security: 27,
    tracking: 18,
    userControl: 9,
    transparency: 9,
    total: 89
  },
  platforms: ['iOS'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'A powerful encrypted DNS client for iOS that gives you full control over which resolver you trust and how your DNS traffic is protected.',
  pros: [
    'Supports DNSCrypt and DNS-over-HTTPS — two strong encryption protocols',
    'Works with any compatible DNS resolver, not just one provider',
    'Open source — the code is public and auditable',
    'Blocks ads and trackers via DNS filtering',
  ],
  cons: [
    'iOS only — no Android or desktop version',
    'Setup requires some technical knowledge to configure well',
    'Cannot run alongside a VPN on iOS due to the VPN slot limit',
  ],
  content: `
    <h2>Why DNSCloak?</h2>
    <p>Every time you visit a website, your phone first asks a DNS server: "What is the address for this site?" By default, that question is sent in plain text. Anyone on your network — your ISP, your router, anyone — can read it. DNSCloak encrypts that question so only the resolver you choose can see it.</p>
    <p>DNSCloak is aimed at people who want real control over their DNS privacy, not just a prettier settings screen.</p>

    <h2>How it works</h2>
    <p>DNSCloak is a front-end for dnscrypt-proxy, a well-established open-source DNS encryption tool. It supports DNSCrypt and DNS-over-HTTPS (DoH) — both are protocols that wrap your DNS queries in encryption before they leave your device. You choose a resolver from a public list, and all DNS traffic is encrypted to that server.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Without encryption, your DNS queries are like postcards — anyone who handles them can read them. DNSCloak puts each query in a sealed envelope before it leaves your phone. Only the server you picked can open it.</div></div>

    <h2>Pick your resolver</h2>
    <p>DNSCloak does not force you to use one DNS provider. It loads a public list of hundreds of verified resolvers. You can filter by features: no-logging, ad-blocking, DNSSEC support, or location. You are in charge of who handles your DNS queries.</p>

    <h2>Ad and tracker blocking via DNS</h2>
    <p>Many resolvers on the list block known ad and tracker domains at the DNS level. That means requests to those domains never get answered — the app trying to reach them gets no response. This works across all apps on your phone, not just Safari.</p>

    <h2>Verdict</h2>
    <p>DNSCloak is one of the most privacy-respecting DNS tools available on iOS. It is open source, flexible, and puts you in control of your resolver. It takes a few minutes to set up properly, but once it is running, your DNS traffic is encrypted and you control where it goes.</p>
  `
};
