export default {
    id: 'tuta-mail',
    website: 'https://tuta.com',
    index: 48,
    name: 'Tuta Mail',
    tagline: 'Privacy-maximalist encrypted email',
    category: 'Email',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    platforms: ['Web', 'Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'SySS GmbH',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Tuta (formerly Tutanota) is a privacy-first email service based in Germany. It encrypts more of your data than almost any competitor, including subject lines and calendar entries.',
    pros: [
      'Encrypts subject lines, address books, and calendars (unlike many competitors)',
      'Does not use third-party push notification services from Google or Apple',
      'Open-source clients across all platforms',
      'Generous free tier with no ads'
    ],
    cons: [
      'Does not support standard IMAP/SMTP (you must use their app)',
      'Search functionality is slightly clunky because it has to search encrypted data locally'
    ],
    content: `
      <h2>Going the Extra Mile for Encryption</h2>
      <p>Tuta is one of the most uncompromising email providers when it comes to privacy. While other secure email providers encrypt the body of your message, Tuta goes further by encrypting the subject line, your entire calendar, and your address book end-to-end.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Because everything is encrypted before it reaches Tuta's servers in Germany, they cannot read your emails, hand them over to authorities, or scan them for advertising. They even built their own push notification system for Android to avoid relying on Google Play Services, which is a massive win for users of de-Googled phones like GrapheneOS.</div></div>

      <h2>The IMAP Trade-Off</h2>
      <p>The main drawback of Tuta is that you cannot use it with standard email clients like Apple Mail, Thunderbird, or Outlook. Because of their unique encryption architecture, you must use their official apps or web interface. This ensures security, but reduces flexibility.</p>

      <h2>Verdict</h2>
      <p>If you are looking for the absolute maximum level of encryption and privacy in an email provider, and are willing to use dedicated apps, Tuta is a fantastic alternative to Proton Mail.</p>
    `
  };
