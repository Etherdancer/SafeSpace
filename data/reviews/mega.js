export default {
    id: 'mega',
    website: 'https://mega.io',
    index: 104,
    name: 'MEGA',
    tagline: 'Secure cloud storage with huge free space',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 18,
      userControl: 8,
      transparency: 7,
      total: 84
    },
    platforms: ['Web', 'iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Generous Free tier / Paid',
    openSource: true,
    auditedBy: 'Independent audits (client-side)',
    relatedArticles: [],
    verdict: 'MEGA is famous for offering a huge amount of free storage space. It is also very secure, encrypting your files so that MEGA itself cannot read them. It is a great budget-friendly option for private backups.',
    pros: [
      'Very generous free storage tier (usually 20GB)',
      'Client-side encryption means they cannot see your files',
      'Excellent cross-platform support, including Linux',
      'Fast upload and download speeds',
      'Open-source client apps'
    ],
    cons: [
      'Based in New Zealand, which is part of the "Five Eyes" intelligence network',
      'Source code for their server infrastructure is not public',
      'A past change in ownership caused some trust concerns in the privacy community'
    ],
    content: `
      <h2>Why MEGA?</h2>
      <p>MEGA is a popular cloud storage service because it gives you a lot of space for free, and it secures your files properly. Like Proton Drive, it uses client-side encryption. That means your files are scrambled into an unreadable mess before they leave your computer. MEGA does not have the key to unscramble them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Because of this strong encryption, if you forget your MEGA password, you lose all your files. MEGA cannot reset your password for you because your password is the key to unlock your data.</div></div>

      <h2>Sharing Made Easy</h2>
      <p>MEGA makes it very easy to share large files securely. You can generate a link for a file and send the password separately to a friend. This ensures that even if someone intercepts the link, they cannot open the file.</p>

      <h2>A Note on Location</h2>
      <p>MEGA is based in New Zealand. This country shares intelligence with the US and UK. While this sounds scary, MEGA's encryption means that even if the government asks for your files, MEGA can only give them scrambled code.</p>

      <h2>Verdict</h2>
      <p>MEGA is the perfect choice for anyone who needs to store a lot of data privately but doesn't want to pay a high monthly subscription. It balances excellent security with incredible value.</p>
    `
  };
