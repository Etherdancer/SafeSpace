export default {
    id: 'mailbox-org',
    website: 'https://mailbox.org/en/',
    index: 261,
    name: 'Mailbox.org',
    tagline: 'German privacy email with a full office suite included.',
    category: 'Email',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 9,
      total: 96
    },
    externalScores: {
      appStore: 4.6,
    },
    platforms: ['Web'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Annual transparency report',
    relatedArticles: [],
    verdict: 'A solid German privacy email provider that bundles calendar, contacts, and cloud office tools into one tidy package.',
    pros: [
      'Based in Germany with strong privacy law protections',
      'Includes calendar, contacts, tasks, and online office (Collabora)',
      'Supports PGP and S/MIME encryption',
      'Custom domain support',
      'No ads — ever',
      'Publishes a transparency report',
      'Can use a pseudonym to sign up',
    ],
    cons: [
      'Requires payment (from €1/month) — no free tier',
      'Not open source',
      'Requires an existing email to register (unlike Posteo)',
      'Interface can feel dated compared to Gmail',
      'Not zero-knowledge — Mailbox.org can technically access stored mail',
    ],
    content: `
      <h2>Why Mailbox.org?</h2>
      <p>Mailbox.org is aimed at people who want a private email address but also need the extras — a calendar, contacts sync, and something to edit documents in. It bundles all of this into one subscription, hosted in Germany under strict data protection rules.</p>
      <p>Unlike Google Workspace or Microsoft 365, Mailbox.org doesn't build an advertising profile on you. No ads. No tracking. No selling your data.</p>

      <h2>How it works</h2>
      <p>Mailbox.org is a standard email provider that works over IMAP, SMTP, and JMAP. You get a web interface built on Open-Xchange, plus access to a web-based office suite (Collabora Online) for editing documents in the browser. Calendar and contacts sync over CalDAV and CardDAV — standard protocols that work with most apps and devices.</p>
      <p>You can bring your own domain, use aliases, and set up encryption. PGP and S/MIME are both supported in the webmail interface.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Mailbox.org supports PGP encryption in the browser through Mailvelope integration. Your private key never leaves your browser — Mailbox.org's servers only ever see the encrypted version of your email. For this to work, the people you email must also use PGP.</div></div>

      <h2>German jurisdiction</h2>
      <p>Being based in Germany matters. Germany's data protection laws (BDSG) and the EU's GDPR give your data strong legal protections. German companies can't simply hand data to foreign governments — there's a legal process that takes time and creates a paper trail.</p>
      <p>Mailbox.org publishes an annual transparency report showing how many requests they received and what they did with them.</p>

      <h2>What it doesn't do</h2>
      <p>Mailbox.org is not zero-knowledge. They can access your stored emails unless you use PGP or S/MIME to encrypt them. If you need storage-level encryption where the provider literally cannot read your email, look at Posteo's storage encryption feature or ProtonMail instead.</p>

      <h2>Verdict</h2>
      <p>Mailbox.org is the privacy-respecting all-in-one alternative to Google Workspace. If you need email plus calendar plus cloud documents — without handing everything to Google — Mailbox.org is a well-rounded, trustworthy choice.</p>
    `
  };
