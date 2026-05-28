export default {
    id: 'startmail',
    website: 'https://www.startmail.com',
    index: 101,
    name: 'StartMail',
    tagline: 'Secure email with unlimited aliases',
    category: 'Email',
    scores: {
      dataPrivacy: 21,
      security: 29,
      tracking: 16,
      userControl: 9,
      transparency: 6,
      total: 81
    },
    externalScores: {
      appStore: 4.7,
      playStore: 4.4,
    },
    platforms: ['Web', 'IMAP/SMTP'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Independent third-party audits',
    relatedArticles: ['metadata-problem', 'user-accounts-and-privacy'],
    verdict: 'StartMail is a fantastic service for keeping your real email address hidden. While it isn\'t fully open-source like some competitors, its powerful alias feature makes it incredibly useful for fighting spam and tracking.',
    pros: [
      'Unlimited, easy-to-create email aliases',
      'Based in the Netherlands (strong privacy protections)',
      'Supports PGP encryption',
      'Allows use with third-party email clients via IMAP/SMTP',
      'No scanning of emails for advertising'
    ],
    cons: [
      'No free tier available',
      'The server software is proprietary (closed-source)',
      'No dedicated mobile apps (relies on web or third-party apps)'
    ],
    content: `
      <h2>Why StartMail?</h2>
      <p>StartMail is built by the same team behind the private search engine Startpage. Its standout feature is the ability to generate unlimited email aliases with a single click. If you are signing up for a newsletter or a new shopping site, you can give them a fake email address that forwards to your real one. If they sell that address to spammers, you simply delete the alias.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>An alias is like a mask for your email. It protects your real address from being leaked in data breaches and stops companies from building a profile on you across different websites.</div></div>

      <h2>Security Features</h2>
      <p>StartMail supports PGP encryption, allowing you to send secure emails even to people who do not use StartMail. It also supports IMAP and SMTP, which means you can use it with your favorite email app on your phone or computer, rather than being forced to use a web browser.</p>

      <h2>The Catch</h2>
      <p>StartMail is not open-source, which means independent security researchers cannot inspect its code to verify its security claims. Additionally, there is no free version of the service. However, for users who value the convenience of built-in aliases and are willing to pay for privacy, it remains a strong choice.</p>

      <h2>Verdict</h2>
      <p>If your primary goal is to stop spam and prevent websites from tracking your main email address, StartMail's unlimited alias feature is incredibly powerful. It is a solid, privacy-respecting alternative to major providers like Gmail.</p>
    `
  };
