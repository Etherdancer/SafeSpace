export default {
  id: 'typewise',
  website: 'https://typewise.app',
  index: 206,
  name: 'Typewise',
  tagline: 'On-device AI keyboard with a privacy-first promise.',
  category: 'Keyboard',
  scores: {
      dataPrivacy: 24,
      security: 27,
      tracking: 18,
      userControl: 9,
      transparency: 6,
      total: 84
    },
    externalScores: {
      appStore: 3.8,
    },
  platforms: ['iOS', 'Android'],
  pricing: 'Freemium',
  openSource: false,
  auditedBy: 'Not independently audited',
  relatedArticles: [],
  verdict: 'Typewise makes strong on-device privacy promises and its AI model runs locally, but the closed source code means those promises cannot be independently confirmed.',
  pros: [
    'AI autocorrect and predictions run entirely on-device',
    'No typing data sent to the cloud',
    'Swiss company — subject to strong EU/Swiss data protection law',
    'Works offline without any network connection',
  ],
  cons: [
    'Closed source — cannot verify on-device claims independently',
    'Freemium model restricts some features behind a paywall',
    'No third-party security audit published',
    'Smaller community than mainstream keyboards',
  ],
  content: `
    <h2>Why Typewise?</h2>
    <p>Typewise is a keyboard app built around one claim: your typing never leaves your phone. No cloud autocorrect, no data collection, no sending keystrokes to a server. Everything — including an AI language model — runs locally on your device.</p>
    <p>They are a Swiss company, which means they operate under some of the strictest data protection laws in the world. That is a meaningful structural guarantee on top of their technical claims.</p>

    <h2>How it works</h2>
    <p>Typewise ships with a compressed AI language model stored inside the app. When you type, the model predicts your next word and corrects errors — all without an internet connection. The model was trained on general text data before the app was published; your personal typing is never used to train or update it.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine a very smart dictionary that already knows how language works and lives entirely inside your phone. It can predict what you are trying to say, but it never needs to call home to do it — and it never learns anything specific about you.</div></div>

    <h2>Swiss law as a backstop</h2>
    <p>Switzerland has strong privacy laws independent of the EU — though they align closely with GDPR. Being incorporated there means Typewise faces real legal consequences if it mishandles data. That is not a substitute for open source code, but it does add a layer of accountability that many keyboard makers do not have.</p>

    <h2>Still closed source</h2>
    <p>Typewise is not open source. You cannot read the code to confirm that the on-device model is the only thing running. The privacy promises are genuine-sounding and legally backed, but they are still promises. For a keyboard that sees every word you type, that is worth keeping in mind.</p>

    <h2>Verdict</h2>
    <p>Typewise is one of the more credible privacy-focused keyboards available. The on-device AI model is real, the Swiss legal backing adds weight, and there is no obvious business model that depends on selling your data. The closed source code is the main caveat. A solid choice if you want something better than the defaults without diving into open-source-only tools.</p>
  `
};
