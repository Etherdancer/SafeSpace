export default {
    id: 'fastmail',
    website: 'https://www.fastmail.com',
    index: 49,
    name: 'Fastmail',
    tagline: 'Lightning-fast, independent email focusing on productivity',
    category: 'Email',
    scores: {
      dataPrivacy: 22,
      security: 25,
      tracking: 18,
      userControl: 8,
      transparency: 8,
      total: 81
    },
    platforms: ['Web', 'iOS', 'Android', 'Standard Email Clients'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Internal audits',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Fastmail is not end-to-end encrypted like Proton or Tuta, but it is vastly better than Gmail. It is a fantastic option for users who want blazing fast email, standard IMAP support, and no ad-scanning, without the friction of full encryption.',
    pros: [
      'Incredibly fast and reliable web interface',
      'Excellent support for standard email apps via IMAP/SMTP',
      'No ads, no tracking, and no scanning of emails for marketing',
      'Great calendar and contacts integration'
    ],
    cons: [
      'Not end-to-end encrypted (Fastmail can technically read your emails)',
      'Based in Australia (Five Eyes alliance)',
      'No free tier'
    ],
    content: `
      <h2>The Middle Ground of Email Privacy</h2>
      <p>Not everyone needs military-grade encryption. For many people, the goal is simply to stop Google or Microsoft from scanning their inbox to build advertising profiles. Fastmail is the perfect solution for this threat model. You pay them directly, so you are the customer, not the product.</p>
      
      <h2>Productivity Over Paranoia</h2>
      <p>Because Fastmail doesn't use end-to-end encryption, it can offer features that secure providers struggle with. Server-side search is lightning fast. You can plug your account into any email app you like. The calendar works flawlessly. It feels just like Gmail, but without the surveillance capitalism.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Fastmail protects your data from advertisers and data brokers, but not from lawful government requests. Because they hold the encryption keys to their servers, they can be compelled by Australian law to hand over your inbox contents. If this is a concern for your threat model, use Proton Mail or Tuta instead.</div></div>

      <h2>Verdict</h2>
      <p>Fastmail is the best choice for professionals and everyday users who want a beautiful, fast, and ad-free email experience, and who are comfortable trusting an independent company with their data rather than relying on strict mathematical encryption.</p>
    `
  };
