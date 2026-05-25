export default {
    id: 'proton-pass',
    website: 'https://proton.me/pass',
    index: 44,
    name: 'Proton Pass',
    tagline: 'Password manager with built-in email aliases',
    category: 'Password Managers',
    scores: {
      dataPrivacy: 28,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 95
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Cure53',
    relatedArticles: ['password-managers-guide', 'practical-privacy-stack'],
    verdict: 'Proton Pass is a strong, open-source password manager that shines if you are already in the Proton ecosystem. Its killer feature is the ability to generate unique email aliases on the fly when signing up for new services.',
    pros: [
      'Built-in email alias generation (hide-my-email)',
      'Open-source and independently audited',
      'Integrates perfectly with Proton Mail and Proton VPN',
      'Strong free tier'
    ],
    cons: [
      'Newer than competitors like Bitwarden, so it lacks some niche advanced features',
      'Web app experience is still evolving'
    ],
    content: `
      <h2>More Than Just Passwords</h2>
      <p>Proton Pass comes from the Swiss company behind Proton Mail. It does everything a good password manager should do — end-to-end encryption, cross-platform syncing, and secure password generation — but it adds one incredibly useful feature: integrated email aliases.</p>
      
      <h2>The Power of Email Aliases</h2>
      <p>When you sign up for a new website, Proton Pass doesn't just generate a strong password; it can also generate a unique, random email address (like <code>word-random@pass.inbox</code>) that forwards to your real email. This means the website never gets your actual email address.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Using unique email aliases is a powerful compartmentalisation technique. If a website gets hacked, the attackers only get a useless alias. If they start sending spam to it, you can simply click a button in Proton Pass to deactivate that alias, instantly stopping the spam without affecting your other accounts.</div></div>

      <h2>Verdict</h2>
      <p>If you already use Proton Mail, Proton Pass is a natural choice. Even if you don't, the integrated alias feature makes it a compelling alternative to Bitwarden for those looking to protect their inbox from spam and tracking.</p>
    `
  };
