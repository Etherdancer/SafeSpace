export default {
    id: 'blokada',
    website: 'https://blokada.org',
    index: 221,
    name: 'Blokada',
    tagline: 'System-wide ad and tracker blocker',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 23,
      security: 26,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 88
    },
    externalScores: {
      appStore: 3.9,
    },
    platforms: ['Android', 'iOS'],
    pricing: 'Free (v5) / Paid (v6)',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A great way to block ads inside of apps, not just in your web browser.',
    pros: [
      'Blocks ads and trackers inside all your installed apps',
      'Does not require "rooting" or hacking your device',
      'Shows you a live log of which apps are trying to track you'
    ],
    cons: [
      'The newest version (v6) is a paid cloud service; you must find v5 for the free local version',
      'Takes up your phone\'s VPN slot'
    ],
    content: `
      <h2>Why Blokada?</h2>
      <p>Installing an ad-blocker in your web browser is easy. But what about the ads and hidden trackers inside your weather app, your games, or your news reader? Blokada sits in the background and intercepts these hidden tracking attempts before they leave your phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Blokada utilizes the Android/iOS local VPN API to route all DNS requests through a local sinkhole, dropping requests to known tracking domains. <br><b>Plain English:</b> It pretends to be a VPN, but it never actually connects to the outside world. It just uses the VPN system to inspect the addresses your apps are trying to talk to, and blocks the ones known for tracking.</div></div>

      <h2>How it works</h2>
      <p>Once you turn it on, Blokada runs silently. If a flashlight app tries to send your location to an advertising server, Blokada sees the request and blocks it instantly. The app still works, but the tracker fails.</p>
      
      <h2>Version Confusion</h2>
      <p>Blokada recently changed their business model. Blokada v6 is a paid cloud service. However, they still provide Blokada v5 for free on their website (and F-Droid). We strongly recommend downloading v5, as it processes everything locally on your phone for free.</p>
    `
  };
