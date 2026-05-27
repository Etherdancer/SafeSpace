export default {
    id: 'thunderbird',
    website: 'https://www.thunderbird.net',
    index: 264,
    name: 'Thunderbird',
    tagline: 'A powerful, local-first email client',
    category: 'Email',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'The best way to read your email on a computer without letting Microsoft or Apple track your inbox.',
    pros: [
      'Downloads your emails to your computer (local-first)',
      'Built-in support for PGP end-to-end encryption',
      'Blocks remote images in emails by default to prevent tracking',
      'Completely free and open-source'
    ],
    cons: [
      'Can look a bit dated out of the box',
      'Mobile app is still in early development (formerly K-9 Mail)'
    ],
    content: `
      <h2>Why Thunderbird?</h2>
      <p>If you use Gmail or Outlook in your web browser, Google and Microsoft can see every email you read, when you read it, and what you click. Thunderbird is a standalone program that downloads your emails directly to your computer. It acts as a middleman that protects you from the companies hosting your email.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Thunderbird blocks remote content loading by default, preventing tracking pixels from firing, and supports native OpenPGP for end-to-end encryption. <br><b>Plain English:</b> Many promotional emails contain invisible "tracking pixels" that tell the sender exactly when you opened the email. Thunderbird blocks these trackers automatically so senders remain blind.</div></div>

      <h2>How it works</h2>
      <p>You can connect Thunderbird to almost any email provider (including Gmail, Outlook, Proton Mail, or your own custom domain). It pulls your messages down to your hard drive. This means you can read your emails offline, and you can back them up securely.</p>
      
      <h2>Built-in Encryption</h2>
      <p>For advanced users, Thunderbird has built-in support for PGP encryption. This allows you to send highly secure, scrambled emails to other people that even your email provider cannot read.</p>
    `
  };
