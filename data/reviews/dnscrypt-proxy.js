export default {
  id: 'dnscrypt-proxy',
  website: 'https://github.com/DNSCrypt/dnscrypt-proxy',
  index: 233,
  name: 'dnscrypt-proxy',
  tagline: 'Encrypt your DNS queries on any platform.',
  category: 'DNS',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 97
    },
    externalScores: {
      appStore: 4.5,
      playStore: 4.5,
    },
  platforms: ['Windows', 'macOS', 'Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'dnscrypt-proxy is the easiest way to encrypt your DNS traffic and block trackers at the system level.',
  pros: [
    'Supports DNSCrypt, DNS-over-HTTPS (DoH), and DNS-over-TLS (DoT) protocols',
    'Built-in blocklists for ads, trackers, and malware domains',
    'Works on Windows, macOS, and Linux — easy to configure',
    'Anonymised DNSCrypt relays hide your IP from even the DNS resolver',
  ],
  cons: [
    'You are still trusting the DNS resolver you choose — it is not zero-trust',
    'Anonymised DNSCrypt requires compatible resolvers — availability is limited',
    'No graphical interface — configuration is done via a text file',
  ],
  content: `
    <h2>Why dnscrypt-proxy?</h2>
    <p>Ordinary DNS queries travel across the internet in plain text. Anyone on your network — your router, your internet provider, a coffee shop — can see every domain you look up. dnscrypt-proxy fixes this by encrypting your DNS queries so that only the resolver you choose can read them.</p>
    <p>It runs as a background service on your computer and acts as a local DNS proxy. Your applications send queries to it, and it encrypts and forwards them to a privacy-respecting DNS server of your choice.</p>

    <h2>How it works</h2>
    <p>dnscrypt-proxy listens on your machine at a local address (typically 127.0.0.1:53). Your operating system is configured to use this as its DNS server. When a query arrives, dnscrypt-proxy encrypts it using DNSCrypt, DNS-over-HTTPS, or DNS-over-TLS and forwards it to a remote resolver. The response comes back encrypted and is decrypted locally before being returned to the app.</p>
    <p>Your internet provider sees encrypted traffic to a known server — not a list of every domain you visit.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Normally, DNS lookups are like shouting a website name in a crowded room. dnscrypt-proxy is like whispering it in a sealed envelope. Everyone can see an envelope went somewhere, but only the recipient can read what is inside.</div></div>

    <h2>Anonymised DNSCrypt</h2>
    <p>Even with encrypted DNS, the resolver you use can still see your IP address and what you are looking up. Anonymised DNSCrypt adds a relay layer. Your query goes to a relay first (encrypted), and the relay forwards it to the resolver without your IP attached. The resolver sees the relay's IP. The relay cannot read the query. Neither knows both who you are and what you are asking.</p>

    <h2>Built-in blocking</h2>
    <p>dnscrypt-proxy supports blocklist files that block DNS queries for known ad servers, trackers, and malware domains. You can point it at any blocklist in the right format and it will refuse to resolve blocked domains. Combined with encryption, this makes it a powerful privacy tool at the system level — protecting every app on your machine, not just your browser.</p>
  `
};
