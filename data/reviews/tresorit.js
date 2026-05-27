export default {
    id: 'tresorit',
    website: 'https://tresorit.com',
    index: 271,
    name: 'Tresorit',
    tagline: 'Swiss-grade zero-knowledge file sharing for teams',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 27,
      security: 27,
      tracking: 16,
      userControl: 9,
      transparency: 6,
      total: 85
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Tresorit commissioned an independent cryptographic audit from Ernst & Young (2016); further internal reviews claimed but not published',
    relatedArticles: [],
    verdict: 'Tresorit is a polished, trustworthy zero-knowledge cloud platform for teams — but the price tag and closed source are real trade-offs.',
    pros: [
      'End-to-end encrypted by default for all files',
      'Swiss law jurisdiction — strong legal privacy protections',
      'Excellent team sharing and access control features',
      'Independently cryptographically audited (E&Y, 2016)',
      'Consistent, well-built apps on every platform',
    ],
    cons: [
      'Closed source — you cannot verify the implementation yourself',
      'Expensive compared to competitors',
      'No free tier — only a short trial',
      'The published audit is from 2016 and covers cryptography only',
    ],
    content: `
      <h2>Why Tresorit?</h2>
      <p>Tresorit targets teams and businesses that handle sensitive documents — legal firms, healthcare providers, financial services. It offers a polished, professional product with genuine end-to-end encryption applied to everything, not just optional folders.</p>
      <p>It is incorporated in Switzerland and stores data in European data centres. Swiss privacy law is among the strongest globally, and the company is not subject to US CLOUD Act demands the way American providers are.</p>

      <h2>How the encryption works</h2>
      <p>Every file is encrypted client-side using AES-256 before upload. Key management uses RSA-4096 and ECC. Tresorit operates a zero-knowledge architecture — they hold encrypted data only. The encryption keys are derived from your credentials and never transmitted to Tresorit in usable form.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Tresorit encrypts your files on your own device before sending them anywhere. Their servers only ever see locked boxes. They do not have a key, so they cannot open them — and neither can anyone who pressures them.</div></div>

      <h2>Team features</h2>
      <p>Tresorit's strongest area is controlled sharing. You can invite people to shared folders with specific permissions — view-only, edit, or no-download. Links can have passwords, expiry dates, and access logs. Admins can manage who has access to what, centrally.</p>
      <p>This makes it genuinely useful for organisations with compliance requirements, not just technically-minded individuals.</p>

      <h2>The closed-source concern</h2>
      <p>Tresorit does not publish its source code. The 2016 Ernst & Young cryptographic audit provides some assurance — E&Y found no critical weaknesses in the cryptographic design. But audits age, and a design audit is not the same as a full code review.</p>
      <p>For an organisation handling very sensitive data, the inability to verify the implementation yourself is a real limitation. For most professional use cases, the Swiss jurisdiction and E&Y audit provide sufficient baseline confidence.</p>

      <h2>Verdict</h2>
      <p>Tresorit is the best closed-source zero-knowledge option for professional teams. The pricing reflects the enterprise positioning — it is not cheap. If budget allows and team features matter, it earns its cost. Individuals would do better with Internxt or Nextcloud.</p>
    `
  };
