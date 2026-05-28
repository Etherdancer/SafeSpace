export default {
  id: 'unbound',
  website: 'https://nlnetlabs.nl/projects/unbound/about/',
  index: 232,
  name: 'Unbound',
  tagline: 'Resolve DNS yourself. Trust no one else.',
  category: 'DNS',
  scores: {
      dataPrivacy: 25,
      security: 28,
      tracking: 16,
      userControl: 10,
      transparency: 10,
      total: 89
    },
    externalScores: {
      appStore: 4.9,
    },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'NLnet Labs / community review',
  relatedArticles: [],
  verdict: 'Unbound is the gold-standard self-hosted DNS resolver — fully recursive, validating, and private.',
  pros: [
    'Recursive resolution: queries the root DNS system directly, bypassing third-party resolvers',
    'Full DNSSEC validation to prevent DNS spoofing and cache poisoning attacks',
    'Supports DNS-over-TLS and DNS-over-HTTPS for encrypted queries',
    'Response Policy Zones (RPZ) allow custom blocklists for ads and malware',
  ],
  cons: [
    'Requires server administration knowledge to set up and maintain',
    'Not a plug-and-play solution — configuration files are technical',
    'Root hints must be kept up to date',
  ],
  content: `
    <h2>Why Unbound?</h2>
    <p>When you visit a website, your computer asks a DNS server to translate the domain name into an IP address. Normally, your internet provider's DNS server handles this — which means your provider sees every domain you visit, every time.</p>
    <p>Unbound changes this. It is a recursive DNS resolver you run yourself. It does not ask your internet provider's server. It asks the root DNS system directly and finds the answer itself — no middleman, no logging by a third party.</p>

    <h2>How it works</h2>
    <p>A recursive resolver follows the chain of DNS authority from the root of the internet downwards. Unbound starts by asking a root name server: "Who is responsible for .com?" Then it asks the .com servers: "Who is responsible for example.com?" Then it asks example.com's servers for the actual IP. It caches the result so future lookups are fast.</p>
    <p>Because Unbound does this itself, no external DNS provider ever sees your queries. You get answers directly from the authoritative sources.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Unbound is like looking something up in a library yourself, instead of asking someone to look it up for you. No one else sees what you are searching for. You go straight to the source and find the answer yourself.</div></div>

    <h2>DNSSEC validation</h2>
    <p>Unbound validates DNSSEC signatures on DNS responses. DNSSEC is a system where DNS records are cryptographically signed by the domain owner. Unbound checks those signatures to make sure the answer it received was not tampered with in transit. This protects against cache poisoning attacks, where an attacker tricks your resolver into returning a fake IP address.</p>

    <h2>Blocking with Unbound</h2>
    <p>Unbound can block domains by returning no result (NXDOMAIN) or a specific IP for domains on a blocklist. This is how you turn Unbound into a network-wide ad and tracker blocker for your whole home or office. Combined with a regularly-updated blocklist, it becomes a powerful privacy filter for every device on your network.</p>
  `
};
