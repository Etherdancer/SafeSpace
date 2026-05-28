export default {
    id: 'disroot',
    website: 'https://disroot.org',
    index: 262,
    name: 'Disroot',
    tagline: 'Community-run privacy services — email included, free.',
    category: 'Email',
    scores: {
      dataPrivacy: 26,
      security: 28,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 91
    },
    externalScores: {
      playStore: 3.6,
    },
    platforms: ['Web'],
    pricing: 'Free / Donation',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A community-run, donation-funded privacy email and services platform based in the Netherlands — free, ethical, and open source.',
    pros: [
      'Completely free — runs on community donations',
      'Open source infrastructure throughout',
      'No ads, no tracking, no selling data',
      'Based in the Netherlands with good privacy laws',
      'Includes email, cloud storage, Nextcloud, forum, and more',
      'Transparent about how the service is run',
      'IMAP/SMTP compatible with any email client',
    ],
    cons: [
      'No formal security audits',
      'Small team — uptime may be less reliable than commercial providers',
      'No customer support in the commercial sense',
      'Registration requires completing an application form',
      'Limited storage capacity',
    ],
    content: `
      <h2>Why Disroot?</h2>
      <p>Most privacy email providers cost money. Disroot doesn't. It's run by a small community of volunteers in the Netherlands, funded entirely by donations. In return, you get email, cloud storage, a Nextcloud instance, and more — all with no ads and no data selling.</p>
      <p>It's the kind of service that exists because people believe the internet should be open and private by default, not because it's a profitable business.</p>

      <h2>How it works</h2>
      <p>Disroot provides a standard email address (@disroot.org) that works over IMAP and SMTP. You can use it in any email client — Thunderbird, K-9 Mail, Apple Mail, or whatever you prefer. There's also a webmail interface.</p>
      <p>PGP encryption works through standard clients. Disroot doesn't provide an integrated PGP solution in the webmail, so you'll need a client-side tool or browser extension if you want encrypted email.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Disroot runs on open source software throughout — Roundcube for webmail, Nextcloud for file storage, Postfix and Dovecot for email infrastructure. All of these are well-established, widely audited open source projects that don't have hidden proprietary components.</div></div>

      <h2>The community model</h2>
      <p>Disroot is not a company. It's a collective. This has real privacy benefits — there's no investor pressure to monetise user data, no business model that depends on knowing things about you. The only reason Disroot exists is to provide the service.</p>
      <p>The tradeoff is reliability. A small volunteer team can't match the uptime SLAs of a paid service. Disroot is transparent about this on their website.</p>

      <h2>Getting an account</h2>
      <p>Disroot isn't quite open registration. You fill in a short form explaining how you intend to use the service. This is to prevent abuse, not to collect your data. Once approved, your account is yours — no payment, no subscription.</p>
      <p>If you find the service useful, donating keeps it running for everyone.</p>

      <h2>Verdict</h2>
      <p>Disroot is a genuine community effort. If you want free, ethical email from people who care about privacy and can't afford or don't want to pay for a commercial service, Disroot is a strong choice. Just go in knowing it's volunteer-run, and donate if you can.</p>
    `
  };
