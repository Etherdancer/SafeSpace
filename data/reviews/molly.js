export default {
    id: 'molly',
    website: 'https://molly.im',
    index: 216,
    name: 'Molly',
    tagline: 'A hardened fork of Signal for Android',
    category: 'Messaging',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 5,
    },
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'Molly takes the already excellent security of Signal and adds extra physical protection for your device data.',
    pros: [
      'Same excellent end-to-end encryption as Signal',
      'Protects your message database with a separate passphrase',
      'Shreds RAM to prevent memory extraction attacks',
      'Can connect through Tor for anonymous routing'
    ],
    cons: [
      'Only available on Android',
      'Slightly more complex to set up than standard Signal'
    ],
    content: `
      <h2>Why Molly?</h2>
      <p>Signal is already the gold standard for private messaging, protecting your texts from interception over the internet. But what happens if someone physically takes your phone while it's unlocked? Molly is an unofficial, open-source version of Signal designed specifically to protect your data from physical access.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Molly implements database encryption at rest with a custom passphrase and uses RAM shredding to wipe memory when locked. <br><b>Plain English:</b> It adds a special lock specifically for your messages, and deletes its own tracks in your phone's memory so no one can extract your chats if your phone is stolen.</div></div>

      <h2>How it works</h2>
      <p>Molly connects to the exact same servers as Signal. You can chat with all your regular Signal contacts without them ever knowing you're using a different app. The differences are entirely on your own phone.</p>
      
      <h2>Extra Security Features</h2>
      <p>Molly allows you to lock the app with a completely different password than your phone's lock screen. It also has a feature to route all your messages through the Tor network, hiding your IP address from Signal's servers.</p>
    `
  };
