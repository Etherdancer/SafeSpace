export default {
    id: 'mailfence',
    website: 'https://mailfence.com',
    index: 263,
    name: 'Mailfence',
    tagline: 'Belgian encrypted email with integrated PGP.',
    category: 'Email',
    scores: {
      dataPrivacy: 23,
      security: 24,
      tracking: 17,
      userControl: 8,
      transparency: 7,
      total: 79
    },
    platforms: ['Web'],
    pricing: 'Free / Paid',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'A Belgian privacy email with built-in PGP key management — good for those who want end-to-end encryption without extra tools.',
    pros: [
      'PGP encryption and key management built directly into webmail',
      'Based in Belgium under GDPR and Belgian privacy law',
      'Free tier available',
      'Supports digital signatures for email authenticity',
      'Includes calendar, contacts, and document storage',
      'No ads on any tier',
      'Can receive encrypted mail from non-PGP users via password-protected messages',
    ],
    cons: [
      'Not open source',
      'No independent security audit published',
      'Free tier has limited storage and features',
      'Belgian law allows some government data access with a court order',
      'Not zero-knowledge — Mailfence can access unencrypted stored mail',
    ],
    content: `
      <h2>Why Mailfence?</h2>
      <p>Most email providers bolt PGP encryption on as an afterthought, or leave it entirely to you. Mailfence builds it in. You can generate PGP keys, import existing ones, and sign or encrypt outgoing email directly from the webmail interface — no extra software needed.</p>
      <p>It's a good fit for people who want to start using encrypted email but find the usual setup process (Thunderbird + Enigmail, or similar) a bit daunting.</p>

      <h2>How it works</h2>
      <p>Mailfence is a full email service with IMAP and SMTP access. The webmail interface includes a built-in OpenPGP key store. When you compose an email, you can choose to sign it (proving it came from you), encrypt it (so only the recipient can read it), or both.</p>
      <p>If you're emailing someone who doesn't use PGP, you can still send them a password-protected encrypted message — they get a link and use a password to read it. Less secure than true end-to-end PGP, but better than plain text.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Mailfence uses OpenPGP for end-to-end encryption. Your private key is stored encrypted on Mailfence's servers, protected by your passphrase. Decryption happens in your browser — Mailfence's servers never see your plaintext private key if you set a strong passphrase.</div></div>

      <h2>Belgian jurisdiction</h2>
      <p>Mailfence is operated by ContactOffice in Belgium. Belgian law and GDPR apply. This gives meaningful protections — authorities need a court order to access your data, and EU data protection rules create real obligations on the company.</p>
      <p>Mailfence does publish a privacy policy that is reasonably clear. They are transparent about Belgian wiretapping law and what it means for their service. However, they have not published a formal transparency report or had an independent audit.</p>

      <h2>What's included</h2>
      <p>Mailfence comes with email, a calendar, contacts sync, and document storage. The free tier gives you 500 MB of email storage and 500 MB of document space — enough to try the service. Paid plans start from a few euros per month.</p>

      <h2>Verdict</h2>
      <p>Mailfence hits a good middle ground — more privacy-serious than Gmail, easier to use with encryption than most. The lack of an independent audit is its biggest weakness. If you want integrated PGP without fighting with extra software, Mailfence makes that genuinely easy.</p>
    `
  };
