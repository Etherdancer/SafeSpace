export default {
    id: 'nextcloud',
    website: 'https://nextcloud.com',
    index: 268,
    name: 'Nextcloud',
    tagline: 'Your own cloud — no one else involved',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 28,
      security: 26,
      tracking: 19,
      userControl: 10,
      transparency: 9,
      total: 92
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free / Paid hosting',
    openSource: true,
    auditedBy: 'Cure53 (multiple audits, most recent 2023); ongoing community review',
    relatedArticles: [],
    verdict: 'Nextcloud is the gold standard for self-hosted cloud storage — if you can run a server, nothing gives you more control.',
    pros: [
      'Fully self-hosted — your data never leaves your own server',
      'Replaces Google Drive, Calendar, Contacts, and more',
      'Audited by Cure53, a respected independent security firm',
      'Huge ecosystem of apps and integrations',
      'End-to-end encryption available for specific folders',
    ],
    cons: [
      'Requires a server to self-host — not beginner-friendly',
      'Managed hosting options mean you trust a third-party provider',
      'End-to-end encryption is an optional add-on, not the default',
      'Can be slow or complex to maintain over time',
    ],
    content: `
      <h2>Why Nextcloud?</h2>
      <p>Google Drive and Dropbox are convenient. They are also someone else's computer. Every file you put there is readable by the company and potentially by anyone they share data with.</p>
      <p>Nextcloud flips that. You run the server. You own the data. No company sits between you and your files.</p>
      <p>It is not just file storage either. Nextcloud includes calendar, contacts, video calls, notes, tasks, and a huge library of community apps — all on your infrastructure.</p>

      <h2>How it works</h2>
      <p>Nextcloud is a PHP application that runs on a web server. You install it on a VPS, a home server, a Raspberry Pi, or a NAS device. Your devices connect to it using the Nextcloud apps, which sync files the same way Dropbox does — but to your own machine.</p>
      <p>Data in transit is protected by TLS. Data at rest is as secure as however you configured your server. Full disk encryption on the server is strongly recommended.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of Nextcloud as building your own Dropbox in your house. Your files live on a hard drive you own. You control who can connect to it. No company has a copy.</div></div>

      <h2>End-to-end encryption</h2>
      <p>Nextcloud supports optional end-to-end encryption for specific folders. When enabled, files are encrypted on your device before upload — even the server cannot read them. This is powerful but comes with trade-offs: encrypted folders lose some features like server-side search and previews.</p>
      <p>This mode uses the Nextcloud End-to-End Encryption app and requires all your devices to have the encryption keys. Lose all your key-holding devices without a backup, and those files are gone.</p>

      <h2>Managed hosting</h2>
      <p>If running your own server sounds like too much work, several providers offer managed Nextcloud hosting. That shifts some administration burden off you, but it also means trusting the hosting provider. Choose one with a strong privacy policy and ideally one located in a privacy-friendly jurisdiction.</p>

      <h2>Verdict</h2>
      <p>For technically capable users, Nextcloud is unmatched. Full control, rich features, independent audits. If you need a managed option, it still beats proprietary cloud storage — but pick your host carefully.</p>
    `
  };
