export default {
    id: 'pia',
    website: 'https://www.privateinternetaccess.com',
    index: 47,
    name: 'Private Internet Access (PIA)',
    tagline: 'Highly configurable, proven no-logs VPN',
    category: 'Networks',
    scores: {
      dataPrivacy: 25,
      security: 28,
      tracking: 18,
      userControl: 10,
      transparency: 10,
      total: 91
    },
    externalScores: {
      appStore: 4.7,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Paid',
    openSource: true,
    auditedBy: 'Deloitte',
    relatedArticles: ['vpn-explainer', 'practical-privacy-stack'],
    verdict: 'Private Internet Access (PIA) is a veteran VPN provider with a massive server network and a no-logs policy that has been proven in court multiple times. It is highly configurable for advanced users.',
    pros: [
      'No-logs policy proven in multiple US court cases',
      'Desktop apps are open-source and highly customisable',
      'Supports port forwarding and advanced network tweaks',
      'Very affordable on long-term plans'
    ],
    cons: [
      'Based in the US (part of the Five Eyes intelligence alliance)',
      'Owned by Kape Technologies, a conglomerate that concerns some privacy purists'
    ],
    content: `
      <h2>A Proven Track Record</h2>
      <p>PIA has something very few VPNs have: court-proven privacy. On multiple occasions, US law enforcement has subpoenaed PIA for user data, and PIA has testified under oath that they have nothing to hand over because they do not keep logs. This real-world test is far more valuable than marketing promises.</p>
      
      <h2>For the Tinkerers</h2>
      <p>PIA is particularly popular with advanced users. The desktop applications expose a wealth of settings, allowing you to choose your exact encryption ciphers, handshake methods, and MTU sizes. It also supports port forwarding, which is highly useful for specific networking tasks like self-hosting or optimized P2P file sharing.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>While PIA is based in the US — which is generally a negative for privacy services due to surveillance laws — their consistent ability to prove in court that they do not log data mitigates much of this risk. However, users with extreme threat models might still prefer a provider outside the Five Eyes alliance, like Mullvad or Proton VPN.</div></div>

      <h2>Verdict</h2>
      <p>If you want a highly configurable VPN that is inexpensive and has a proven track record of fighting for user privacy in court, PIA is a solid choice, despite its corporate ownership.</p>
    `
  };
