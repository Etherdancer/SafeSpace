export default {
  id: 'fleksy',
  website: 'https://fleksy.com',
  index: 205,
  name: 'Fleksy',
  tagline: 'Fast on-device keyboard that keeps typing local.',
  category: 'Keyboard',
  scores: {
    dataPrivacy: 20,
    security: 18,
    tracking: 14,
    userControl: 6,
    transparency: 5,
    total: 63
  },
  platforms: ['iOS', 'Android'],
  pricing: 'Freemium',
  openSource: false,
  auditedBy: 'Not independently audited',
  relatedArticles: [],
  verdict: 'Fleksy claims on-device processing but is closed source and freemium, making it hard to fully verify its privacy promises.',
  pros: [
    'Claims all typing stays on-device without cloud processing',
    'Fast autocorrect engine',
    'Does not require a network connection to function',
    'Available on both iOS and Android',
  ],
  cons: [
    'Closed source — privacy claims cannot be independently verified',
    'Freemium model with locked themes and extensions',
    'No independent security audit',
    'SDK version is used by third-party apps — introduces supply chain uncertainty',
  ],
  content: `
    <h2>Why Fleksy?</h2>
    <p>Your keyboard sees everything you type — passwords, messages, searches, medical terms, private thoughts. Most default keyboards send some of that data to the cloud for autocorrect and prediction. Fleksy claims to do all of that processing on your device instead.</p>
    <p>That is the right approach. The question is whether you can verify it.</p>

    <h2>How it works</h2>
    <p>Fleksy uses a local autocorrect engine that runs entirely on your phone. It does not send keystrokes to a server. The prediction model is baked into the app rather than fetched from the cloud. This means Fleksy works offline and, according to its developers, your typing never leaves your device.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Most smart keyboards work like a spell-checker that lives in the cloud — you type, it sends your words out, gets suggestions back, and shows them. Fleksy keeps the spell-checker on your phone. Nothing leaves. It is slower to improve over time, but it stays private.</div></div>

    <h2>The trust problem</h2>
    <p>Fleksy is not open source. The code is private. That means you have to take the company's word that typing stays local. There is no independent audit to point to. For most users that might be acceptable, but for a keyboard — one of the most sensitive apps on your phone — it is a meaningful gap.</p>

    <h2>The SDK angle</h2>
    <p>Fleksy also sells its keyboard engine as an SDK to other app developers. This means the same technology runs inside third-party apps you may already have installed. The privacy properties of those integrations depend on how each developer implements it — Fleksy cannot guarantee how others use their engine.</p>

    <h2>Verdict</h2>
    <p>Fleksy is better than Google or Apple's default keyboards from a privacy standpoint — at least by its own claims. But without open source code or an independent audit, those claims cannot be fully verified. If you want a keyboard with verifiable privacy, look at HeliBoard on Android instead.</p>
  `
};
