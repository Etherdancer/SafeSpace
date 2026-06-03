export default {
  id: 'aetherworks',
  website: 'https://github.com/Etherdancer/AetherWorks',
  index: 1001,
  name: 'AetherWorks',
  tagline: 'Decentralized, serverless P2P social network and encrypted vault',
  category: 'Social / Storage',
  scores: {
    dataPrivacy: 30,
    security: 30,
    tracking: 20,
    userControl: 10,
    transparency: 10,
    total: 100
  },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community',
  relatedArticles: [],
  verdict: 'AetherWorks is an unparalleled tool for absolute privacy and local-first sovereign networking. With zero servers, peer-to-peer sharing, and local encrypted vaults, it guarantees that your data never falls into corporate hands.',
  pros: [
    '100% offline-first and serverless architecture',
    'Zero telemetry or tracking',
    'Hardware-backed encryption (AES-256-GCM and SQLCipher)',
    'Fictional profiles protect your real identity'
  ],
  cons: [
    'Peer-to-peer design means content sharing requires network proximity',
    'Android only (via F-Droid or GitHub Releases)'
  ],
  draft: false,
  content: `
<h2>Why AetherWorks?</h2>
<p>AetherWorks flips the standard model of social networks and cloud storage on its head. Instead of trusting a company's server, <strong>you are the server</strong>. It is built from the ground up to ensure absolute privacy by eliminating the cloud entirely.</p>

<div class="callout callout--tip">
  <span class="callout__icon">&#128161;</span>
  <div>
    <b>Technical:</b> AetherWorks utilizes mDNS, BLE, and Wi-Fi Direct wrapped in TLS 1.3 for peer-to-peer synchronization without any centralized infrastructure.
    <br><br>
    <b>Plain:</b> Your phone talks directly to other phones nearby to share data securely, bypassing the internet entirely so no company can watch what you do.
  </div>
</div>

<h2>How it keeps you safe</h2>
<p>Every profile is fictional. All your passwords, notes, and private data are locked in a local vault encrypted with keys stored in your device's secure hardware. Only what you explicitly choose to share is broadcasted to verified peers.</p>

<div class="callout callout--tip">
  <span class="callout__icon">&#128161;</span>
  <div>
    <b>Technical:</b> Data is encrypted at rest using AES-256-GCM and SQLCipher, locked behind Android Keystore hardware-backed keys, and access is guarded by a custom in-app secure keyboard.
    <br><br>
    <b>Plain:</b> Your stuff is scrambled so tightly that even if someone steals your phone, they can't read it, and the app uses a special keyboard so snooping software can't steal your master password.
  </div>
</div>

<h2>Verdict</h2>
<p>If you want absolute sovereignty over your data and are comfortable with a decentralized, serverless model, AetherWorks is a fantastic choice for private communication and secure local storage.</p>
  `
};
