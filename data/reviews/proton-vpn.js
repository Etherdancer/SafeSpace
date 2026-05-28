export default {
    id: 'proton-vpn',
    website: 'https://protonvpn.com',
    index: 46,
    name: 'Proton VPN',
    tagline: 'High-speed, open-source VPN from a trusted provider',
    category: 'Networks',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.6,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'SEC Consult',
    relatedArticles: ['vpn-explainer', 'practical-privacy-stack'],
    verdict: 'Proton VPN is one of the most transparent and trustworthy VPNs on the market. It offers a genuinely excellent free tier with no data limits, and a premium tier with advanced routing features.',
    pros: [
      'Strict no-logs policy, based in privacy-friendly Switzerland',
      'The only trustworthy free VPN (no data limits, no ads, no selling data)',
      'Apps are entirely open-source and audited',
      'Secure Core feature routes traffic through privacy-friendly countries first'
    ],
    cons: [
      'Free tier does not support streaming services',
      'Paid tiers are slightly more expensive than some competitors'
    ],
    content: `
      <h2>The Only Free VPN You Should Use</h2>
      <p>Most free VPNs are dangerous. They pay for their servers by logging your traffic and selling your data to advertisers — the exact opposite of what a VPN should do. Proton VPN is the exception. Their free tier is subsidized by paying users, offering unlimited data and strong encryption, though it limits your speed and server choices.</p>
      
      <h2>Advanced Features</h2>
      <p>If you upgrade to the paid tier, Proton VPN offers excellent speeds, support for streaming services, and a feature called "Secure Core."</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Secure Core routes your traffic through servers in privacy-friendly countries (like Switzerland or Iceland) before sending it on to your final destination. This defends against network attacks where an adversary might be monitoring the exit server, adding an extra layer of operational security.</div></div>

      <h2>Verdict</h2>
      <p>Proton VPN and Mullvad are the two best VPNs available. Choose Mullvad for absolute anonymity (cash payments, no accounts), and choose Proton VPN if you want a great free tier, streaming support, or integration with the rest of the Proton ecosystem.</p>
    `
  };
