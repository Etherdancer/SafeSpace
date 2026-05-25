export default {
    id: 'simplelogin',
    website: 'https://simplelogin.io',
    index: 5,
    name: 'SimpleLogin',
    tagline: 'Protect your real email with disposable aliases',
    category: 'Email',
    scores: {
      dataPrivacy: 29,
      security: 28,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    platforms: ['Browser', 'iOS', 'Android'],
    pricing: 'Free (15 aliases) / €30/yr Premium (unlimited)',
    openSource: true,
    auditedBy: 'Community reviewed; acquired by Proton in 2022',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'SimpleLogin solves the problem of giving your real email to every website you sign up for. Create a unique alias for each service — forward or burn it whenever you like.',
    pros: [
      'Your real email address is never exposed to third parties',
      'Create unique aliases per website — track which services leak your email',
      'Open source and now owned by Proton (privacy-friendly acquisition)',
      'Works with any existing email address',
      'Free tier with 15 aliases is enough to get started',
    ],
    cons: [
      'Free tier limited to 15 aliases',
      'Adds a small layer of complexity to email management',
      'Replies from aliases require using the SimpleLogin interface or app',
    ],
    content: `
      <h2>The Problem It Solves</h2>
      <p>Every website you sign up for gets your email address. Over time, this means dozens of companies have your email, can sell it, can have it stolen in a breach, and can spam you. When you get spam or a suspicious email, you often can't tell which service leaked your address.</p>
      <p>SimpleLogin solves this by giving you a different email address for every service. Your real email address stays private. All emails to your aliases are forwarded to your real inbox. If a service starts spamming you or appears in a breach, you delete that specific alias — your real email is untouched.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>SimpleLogin acts like a post office box. Each website gets a different box number — all mail still ends up in your real mailbox, and nobody sees your real address. Technically, it's an email proxy: it generates unique alias addresses and rewrites inbound message headers to forward them to you. When you reply, the original sender only ever sees the alias. If a box starts getting junk, you delete it.</div></div>

      <h2>How It Works</h2>
      <ol>
        <li>Sign up at <strong>simplelogin.io</strong> with your real email address. This is the only place SimpleLogin knows your real address.</li>
        <li>When you sign up for a new website, click the SimpleLogin browser extension (or create an alias in the app) and generate an alias like <code>random-word-123@simplelogin.com</code>.</li>
        <li>Use that alias as your email for that website. The website never sees your real address.</li>
        <li>Emails sent to that alias arrive in your real inbox as normal. You can reply — replies appear to come from the alias, not your real address.</li>
        <li>If you start getting spam from that alias, or see it appear in a breach, delete the alias. That service can no longer reach you.</li>
      </ol>

      <h2>Spotting Data Leaks</h2>
      <p>If you use a unique alias for every service and suddenly start getting spam to one specific alias, you know exactly which company leaked or sold your email. This is genuinely useful intelligence about which services are trustworthy.</p>

      <h2>Verdict</h2>
      <p>SimpleLogin is a simple, affordable layer of protection against email-based tracking and spam. The free tier with 15 aliases is enough for most people's most important accounts. The premium tier at €30/year is worth it if you want unlimited aliases for everything.</p>
    `
  };
