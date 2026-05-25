export default {
    id: 'session',
    website: 'https://getsession.org',
    index: 45,
    name: 'Session',
    tagline: 'Anonymous messenger with no phone number required',
    category: 'Messaging',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Quarkslab',
    relatedArticles: ['privacy-vs-convenience', 'practical-privacy-stack'],
    verdict: 'Session is an incredibly private messenger that, unlike Signal or WhatsApp, does not require a phone number to sign up. It routes messages through a decentralized network to protect your metadata.',
    pros: [
      'No phone number or email required to sign up',
      'Decentralized routing (onion routing) hides your IP address and metadata',
      'End-to-end encrypted by default',
      'Open-source'
    ],
    cons: [
      'No voice or video calls',
      'Message delivery can occasionally be delayed due to the decentralized network',
      'Smaller user base means convincing friends to switch is harder'
    ],
    content: `
      <h2>Anonymity Over Everything</h2>
      <p>Signal is the gold standard for secure messaging, but it requires a phone number, which inherently links your account to your real-world identity. Session solves this problem. When you start Session, it generates a random "Session ID" — a long string of letters and numbers. You share this ID with people to chat. No phone number, no email, no name required.</p>
      
      <h2>How It Hides Your Metadata</h2>
      <p>Session goes further than just encrypting the contents of your messages. It uses an onion-routing network (similar to Tor) consisting of thousands of community-run nodes.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When you send a message, it bounces through three different servers before reaching the recipient. The first server knows who you are but not the destination. The middle server knows neither. The final server knows the destination but not who sent it. This protects your metadata — nobody, not even the network itself, knows who is talking to whom.</div></div>

      <h2>Verdict</h2>
      <p>Session is not a complete replacement for Signal or WhatsApp because it lacks voice and video calling, and the network can be slightly slower. However, for activists, journalists, or anyone needing true anonymity in their communications, it is one of the best tools available.</p>
    `
  };
