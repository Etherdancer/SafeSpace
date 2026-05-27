export default {
    id: 'quad9',
    website: 'https://quad9.net',
    index: 256,
    name: 'Quad9',
    tagline: 'Non-profit DNS that blocks malware — no personal data kept.',
    category: 'DNS',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 17,
      userControl: 7,
      transparency: 8,
      total: 83
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Web'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'A trustworthy non-profit DNS resolver that blocks malicious domains and keeps no personal logs — easy to set up, zero cost.',
    pros: [
      'Operated by a non-profit — no commercial incentive to sell your data',
      'Blocks known malware and phishing domains automatically',
      'No personal data logged — queries are anonymised',
      'Supports DoH and DoT for encrypted DNS',
      'Free to use, no account needed',
      'Servers in 90+ countries for low latency',
      'Based in Switzerland — strong legal privacy protections',
    ],
    cons: [
      'You still trust a third party with your DNS queries',
      'Not open source — you can\'t inspect the server software',
      'Malware blocking uses a threat feed — false positives can occur',
      'Less control than running your own DNS resolver',
    ],
    content: `
      <h2>Why Quad9?</h2>
      <p>Most people use their internet provider's DNS by default. That's a problem — your provider can see every domain you look up, and many sell that data to advertisers.</p>
      <p>Quad9 is a free alternative. Change one setting on your device or router, and your DNS queries go to Quad9 instead. They don't sell your data. They don't store personal information. They're a non-profit.</p>

      <h2>How it works</h2>
      <p>Quad9's primary address is 9.9.9.9 — easy to remember. When your device needs to look up a domain, it asks Quad9 instead of your provider. Quad9 checks the domain against a threat intelligence feed and blocks it if it's known to be malicious.</p>
      <p>Your internet provider still sees that you're talking to 9.9.9.9, but they can't see which specific domains you're looking up. For full encryption, use Quad9's DoH or DoT addresses.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Quad9 strips the last octet of your IP address before any query is processed, then discards it entirely after routing. This is called IP truncation — it means even Quad9 cannot reconstruct your full IP address from their logs.</div></div>

      <h2>Non-profit and Switzerland-based</h2>
      <p>Quad9 is run by a Swiss non-profit foundation. This matters for two reasons. First, there's no business model built around your data — the service is funded by donations and partnerships, not ad revenue. Second, Swiss law offers some of the strongest privacy protections in the world.</p>
      <p>Quad9 publishes a clear privacy policy explaining exactly what data they process and why. No fine print hiding a data pipeline.</p>

      <h2>Encrypted DNS</h2>
      <p>Quad9 supports DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT). Most modern operating systems and browsers can use these directly. When you use them, even your internet provider can't see your DNS queries.</p>
      <p>The plain DNS address (9.9.9.9) still works and is fine for most people. But if you want maximum privacy, set up DoH or DoT.</p>

      <h2>Verdict</h2>
      <p>Quad9 is one of the best simple upgrades you can make to your privacy setup. It takes two minutes to configure, costs nothing, and is run by people who have no reason to misuse your data. If you're not running your own DNS resolver, Quad9 is a smart default.</p>
    `
  };
