export default {
    id: 'mullvad',
    website: 'https://mullvad.net',
    index: 10,
    name: 'Mullvad VPN',
    tagline: 'The most privacy-respecting VPN on the market',
    category: 'VPNs',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 4.1,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: '€5/mo flat — no contracts',
    openSource: true,
    auditedBy: 'Cure53 (multiple published audits)',
    relatedArticles: ['vpn-explainer', 'anonymous-browsing', 'smartphone-hardening', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The VPN we recommend without hesitation. No personal info required, no logs, proven by server seizures, flat pricing. This is what a VPN should be.',
    pros: [
      'No email, name, or personal information required to sign up — ever',
      'Pay with cash or cryptocurrency for full anonymity',
      'Server seizures by Swedish police found nothing — no logs proven in practice',
      'RAM-only servers — nothing survives a power cycle',
      'Flat €5/month, no upsells, no tricks',
      'Open source apps, independently audited',
    ],
    cons: [
      'No free trial or free tier',
      'Smaller server network than commercial giants like NordVPN or ExpressVPN',
      'No split tunnelling on iOS',
    ],
    content: `
      <h2>What a VPN Does (and Doesn't Do)</h2>
      <p>A VPN (Virtual Private Network) creates an encrypted tunnel between your device and the VPN company's server. Your internet provider can see that you're connected to a VPN, but can't see what websites you visit. The websites you visit see the VPN server's address, not yours.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>A VPN is like a private tunnel for your internet traffic. Your internet provider can see you've entered the tunnel, but not where it leads. Websites can see the tunnel's exit point, but not that it's you. Mullvad uses WireGuard or OpenVPN to encapsulate your traffic — your ISP sees only an encrypted stream to Mullvad's IP, and the destination website sees Mullvad's exit IP instead of yours.</div></div>

      <p>What a VPN does <em>not</em> do: it doesn't make you anonymous if you're logged in to Google, Facebook, or any account tied to your real identity. It doesn't protect against browser fingerprinting. It shifts trust from your internet provider to the VPN company — so choosing a trustworthy VPN company is everything.</p>

      <h2>Why Mullvad Is Different</h2>
      <p>The VPN market is full of companies whose business is marketing, not privacy. They run YouTube promotions, offer "lifetime" subscriptions, and make extraordinary claims. Mullvad is the opposite: a technically rigorous company that doesn't advertise aggressively and charges a fair, flat price.</p>
      <p>In April 2023, Swedish police raided Mullvad's offices and seized servers. They found nothing — because of how Mullvad's servers are built.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Mullvad's servers work like a whiteboard, not a notebook — everything written on them disappears the moment the power goes off. When Swedish police seized the servers, they got blank whiteboards. No logs. Nothing. This is because Mullvad runs RAM-only servers: all operating data lives in volatile memory (RAM) rather than persistent storage. When power is cut, all data is instantly and permanently erased. There is no disk to seize and image.</div></div>

      <h2>Truly Anonymous Signup</h2>
      <p>Most VPN services ask for your email address, name, and payment details. This creates a record linking you to your VPN use. Mullvad's signup works like this:</p>
      <ol>
        <li>Go to mullvad.net and click "Generate Account Number."</li>
        <li>A random 16-digit number is created. This is your account. No email, no name, no profile.</li>
        <li>Pay €5 to add a month — by card (which creates a payment record) or by cash/cryptocurrency (which doesn't). To pay with cash: Mullvad publishes an office address; you mail them a €5 note with your account number written on paper.</li>
      </ol>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Kill switch:</strong> If the VPN connection drops, your internet is cut off entirely rather than exposing your real IP. Enable this in Settings &gt; "Block internet when disconnected."</li>
        <li><strong>DNS leak protection:</strong> Ensures your DNS queries (website address lookups) also go through the VPN, not your internet provider.</li>
        <li><strong>WireGuard and OpenVPN:</strong> Two encryption protocols. WireGuard is faster and more modern; OpenVPN is older but extremely well-tested. Both are secure.</li>
        <li><strong>Multihop:</strong> Premium option to route traffic through two VPN servers in different countries for extra protection.</li>
      </ul>

      <h2>Verdict</h2>
      <p>Mullvad is what a VPN should be: honest about what it does, proven in practice, fairly priced, and designed around user privacy rather than marketing. It's our recommendation for anyone who wants a VPN.</p>
    `
  };
