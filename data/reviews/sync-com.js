export default {
    id: 'sync-com',
    website: 'https://www.sync.com',
    index: 269,
    name: 'Sync.com',
    tagline: 'Zero-knowledge cloud storage based in Canada',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 27,
      security: 29,
      tracking: 17,
      userControl: 9,
      transparency: 6,
      total: 88
    },
    externalScores: {
      appStore: 4.1,
    },
    platforms: ['Windows', 'macOS', 'iOS', 'Android', 'Web'],
    pricing: 'Free / Paid',
    openSource: false,
    auditedBy: 'Not independently audited; security claims are self-reported',
    relatedArticles: [],
    verdict: 'Sync.com offers genuine zero-knowledge encryption with a polished experience, but closed source means you have to take their word for it.',
    pros: [
      'True zero-knowledge encryption — Sync.com cannot read your files',
      'Based in Canada, outside US jurisdiction',
      'Generous free tier (5 GB)',
      'Secure sharing links with password protection and expiry',
      'Simple, polished desktop and mobile apps',
    ],
    cons: [
      'Closed source — security claims cannot be independently verified',
      'No formal independent security audit published',
      'Web interface requires JavaScript — some privacy trade-off',
      'Slower sync speeds compared to non-zero-knowledge competitors',
    ],
    content: `
      <h2>Why Sync.com?</h2>
      <p>Most cloud storage services can read your files. They have to — they store the encryption keys themselves. Sync.com is different. It uses zero-knowledge encryption, meaning your files are encrypted on your device before they ever leave it. Sync.com holds encrypted data, not readable data.</p>
      <p>It is a commercially polished product with a working free tier. If you want Dropbox-style convenience without giving up privacy, Sync.com is one of the most accessible options.</p>

      <h2>How the encryption works</h2>
      <p>Sync.com encrypts your files client-side using AES-256 before upload. The encryption key is derived from your password, which Sync.com never receives or stores. TLS protects data in transit. On their servers, only ciphertext lives — they cannot hand your files to anyone in readable form.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Zero-knowledge means the company literally does not have the key to your files. Even if a government showed up with a warrant, Sync.com could only hand over scrambled data they cannot read themselves.</div></div>

      <h2>The closed-source problem</h2>
      <p>Sync.com makes strong claims about their encryption. The problem is the code is not public, so no one outside the company can verify those claims are implemented correctly. This is the fundamental limitation of any closed-source security tool.</p>
      <p>There is no published independent audit. That is a gap. A company can say all the right things and still have a flaw in their implementation that nobody outside has found.</p>

      <h2>Sharing and collaboration</h2>
      <p>Sync.com lets you share files and folders with password-protected links and expiry dates. Recipients do not need a Sync.com account. This is one of its best features for practical day-to-day use.</p>
      <p>Collaboration on shared folders works but is not as seamless as Google Drive. Zero-knowledge comes with trade-offs — server-side features like full-text search and previews are limited.</p>

      <h2>Verdict</h2>
      <p>Sync.com is a solid choice if you want zero-knowledge cloud storage without running your own server. The closed-source codebase is a real limitation, but Canada's privacy laws and the zero-knowledge architecture provide meaningful protection. For full verification, look at Nextcloud or Internxt instead.</p>
    `
  };
