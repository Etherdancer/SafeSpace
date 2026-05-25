export default {
    id: '2fas',
    website: 'https://2fas.com',
    index: 19,
    name: '2FAS',
    tagline: 'The best offline, open-source authenticator',
    category: 'Two-Factor Authentication',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 100
    },
    platforms: ['iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Independent community audits',
    relatedArticles: ['password-managers-guide'],
    verdict: '2FAS is currently the most highly recommended two-factor authentication app. It works entirely offline, requires no account, and doesn\'t try to lock you into a proprietary cloud.',
    pros: [
      'Works completely offline with no account required',
      'Fully open source',
      'Supports local, encrypted backups',
      'Can optionally sync backups via your own iCloud or Google Drive',
      'Free with no ads or tracking'
    ],
    cons: [
      'No official desktop app (browser extension requires mobile app connection)'
    ],
    content: `
      <h2>What Is 2FAS?</h2>
      <p>2FAS is a two-factor authentication app for iPhone and Android. Instead of relying on text messages for login codes — which can be intercepted — 2FAS generates a fresh six-digit code every 30 seconds for each of your accounts. Even if someone has your password, they cannot get in without the current code from your phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Two-factor authentication adds a second check to your login: something you know (your password) and something you have (the code on your phone). The code changes every 30 seconds and is calculated from a secret key stored on your device — it is never sent over the internet, so it cannot be intercepted the way a text message can.</div></div>

      <h2>Why 2FAS Over Google Authenticator?</h2>
      <p>Google Authenticator syncs your codes to your Google account, which means if your Google account is compromised, your two-factor codes could be too. 2FAS stores everything locally on your device, encrypted. You can optionally back up to your own iCloud or Google Drive — but that sync is your choice, not automatic.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Search for "2FAS" in the App Store (iPhone) or Google Play Store (Android). Install the app.</li>
        <li>Open 2FAS. You do not need to create an account.</li>
        <li>Tap the + button to add a new account. Scan the QR code shown by whatever service you are enabling 2FA for.</li>
        <li>2FAS will immediately show the six-digit code for that account. Enter it on the website to confirm.</li>
        <li><strong>Back up your codes:</strong> Go to Settings &gt; Backup and export an encrypted backup. Store it somewhere safe — your computer or an external drive.</li>
      </ol>

      <h2>Verdict</h2>
      <p>2FAS is the most recommended two-factor authentication app for both iPhone and Android. It is free, fully open source, works offline, and requires no account. If you use 2FA — and you should — this is where to keep your codes.</p>
    `
  };
