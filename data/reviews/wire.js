export default {
    id: 'wire',
    website: 'https://wire.com',
    index: 259,
    name: 'Wire',
    tagline: 'End-to-end encrypted team messaging with no phone number.',
    category: 'Messaging',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 3.1,
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Kudelski Security (2018), NCC Group (2017)',
    relatedArticles: [],
    verdict: 'A fully audited, open source E2E encrypted messenger that works without a phone number — best suited for teams.',
    pros: [
      'No phone number required — sign up with email or username',
      'End-to-end encrypted messages, calls, and file sharing',
      'Fully open source clients and server',
      'Works on all major platforms including web',
      'Independent security audits published publicly',
      'Self-hosting option available for organisations',
      'Good for team collaboration with channels and conference calls',
    ],
    cons: [
      'Collects some metadata (who talks to whom, account creation info)',
      'Business model relies on paid enterprise tier — privacy model may shift over time',
      'Less focused on anonymous use than Signal or SimpleX',
      'Consumer use has declined — primarily an enterprise product now',
    ],
    content: `
      <h2>Why Wire?</h2>
      <p>Wire started as a consumer messaging app — a privacy-friendly alternative to WhatsApp. It has since shifted focus toward business and team communication. But the core privacy properties remain strong, and it's still one of the few fully open source messengers that works on every platform.</p>
      <p>Unlike Signal, Wire doesn't need a phone number. You can sign up with just an email address, or even anonymously without one. That makes it more accessible for people who don't want to tie their messaging to a phone.</p>

      <h2>How it works</h2>
      <p>Wire uses the Messaging Layer Security (MLS) protocol and its own Proteus protocol (derived from Signal's) for end-to-end encryption. All messages, voice calls, video calls, and file transfers are encrypted on your device before they're sent. Wire's servers relay encrypted data but can't read it.</p>
      <p>Wire also supports disappearing messages and guest rooms for external collaborators — useful for team settings.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Wire uses end-to-end encryption for all communications. This means the encrypted data passes through Wire's servers, but only the intended recipients hold the keys to decrypt it. Wire the company sees only ciphertext — not your messages.</div></div>

      <h2>Open source and audited</h2>
      <p>All Wire client apps are open source. The server code is also publicly available, which is rarer than you'd think — most messaging apps only publish the client side. Wire has been audited by NCC Group and Kudelski Security. Results are published on their website.</p>
      <p>Organisations can self-host Wire on their own servers. That means complete control over where your data lives — useful for companies with strict compliance requirements.</p>

      <h2>What it collects</h2>
      <p>Wire collects some metadata: when accounts were created, who is connected to whom, and some usage data. This is more than Signal or SimpleX collect. Wire's privacy policy is clear about this, but it's worth knowing if you're looking for the absolute minimum data footprint.</p>
      <p>For personal use where metadata matters most, Signal or SimpleX are stronger choices. For team settings where cross-platform support and self-hosting matter, Wire is compelling.</p>

      <h2>Verdict</h2>
      <p>Wire is a solid, audited, open source messenger with strong encryption. Its shift toward enterprise means it's less focused on individual privacy than it once was. But if you need a privacy-respecting team messenger — especially one you can self-host — Wire deserves serious consideration.</p>
    `
  };
