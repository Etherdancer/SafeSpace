export default {
    id: 'briar',
    website: 'https://briarproject.org',
    index: 258,
    name: 'Briar',
    tagline: 'Peer-to-peer messages over Tor — no server needed.',
    category: 'Messaging',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 99
    },
    externalScores: {
      appStore: 4.5,
    },
    platforms: ['Android', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53 (2017)',
    relatedArticles: [],
    verdict: 'A peer-to-peer encrypted messenger that works even when the internet is down — built for high-risk environments.',
    pros: [
      'No central server — messages go directly between devices',
      'Works over Tor, Wi-Fi, and Bluetooth',
      'Can work without any internet connection at all',
      'No phone number, email, or account required',
      'End-to-end encrypted for all message types',
      'Fully open source',
      'Designed for journalists, activists, and high-risk users',
    ],
    cons: [
      'Android only for mobile (iOS not available)',
      'Desktop app (Linux) is still in beta',
      'Both people must be online at the same time for Tor delivery',
      'Smaller user base',
      'Battery and bandwidth usage can be higher than other messengers',
    ],
    content: `
      <h2>Why Briar?</h2>
      <p>Most messengers rely on servers. Even the private ones. Briar doesn't. Messages go directly from your device to your contact's device — peer to peer.</p>
      <p>This means there's no server to subpoena. No company database that can be breached. No infrastructure that can be taken offline to silence you. Briar was designed for people in situations where that matters: journalists, activists, people living under repressive governments.</p>

      <h2>How it works</h2>
      <p>Briar connects to your contacts through multiple routes depending on what's available. Over the internet, it uses Tor — the anonymising network — so your IP address is hidden even from your contact. Over a local Wi-Fi network, messages travel directly between phones. And when there's no internet or Wi-Fi at all, Briar can sync messages via Bluetooth.</p>
      <p>All messages are end-to-end encrypted regardless of which route they take. No one in the middle can read them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Briar uses Tor's onion routing for internet connections. This means your messages travel through at least three encrypted hops before reaching your contact's device. Neither your internet provider nor Briar's developers can see who you're talking to or what you're saying.</div></div>

      <h2>No account, no metadata</h2>
      <p>You don't sign up for Briar. You install the app and create a local identity — a name and a cryptographic key pair, stored only on your device. To connect with someone, you exchange a link or QR code in person, or over another channel.</p>
      <p>Because there's no server, there's also no metadata stored anywhere central. The only record of your conversations exists on your device and your contact's device.</p>

      <h2>Works without the internet</h2>
      <p>This is Briar's most unusual feature. If you're at a protest with no cell service, or in a disaster zone, or simply in a building with no signal, Briar can still deliver messages to people nearby using Wi-Fi or Bluetooth. Your phone and their phone sync directly.</p>
      <p>This is called a delay-tolerant or mesh network. It's rare in consumer messaging apps, and it's genuinely useful in emergencies.</p>

      <h2>Verdict</h2>
      <p>Briar is built for extreme conditions. If you're a journalist, an activist, or someone who needs messaging that works even when everything else fails, Briar is worth learning. For everyday use, the Tor-based latency and Android-only limitation make it better suited as a specialist tool than a daily driver.</p>
    `
  };
