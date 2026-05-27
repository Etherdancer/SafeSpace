export default {
    id: 'posteo',
    website: 'https://posteo.de/en',
    index: 260,
    name: 'Posteo',
    tagline: 'Anonymous German email for €1 a month.',
    category: 'Email',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 19,
      userControl: 8,
      transparency: 8,
      total: 88
    },
    platforms: ['Web'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'EcoTopTen certified, annual transparency report',
    relatedArticles: [],
    verdict: 'A seriously privacy-focused German email provider that lets you sign up and pay anonymously — rare in the email world.',
    pros: [
      'No personal information required to sign up',
      'Anonymous payment accepted (cash by post)',
      'Stores no IP addresses — not even at login',
      'Supports PGP encryption and can encrypt stored mail',
      'Based in Germany under strong EU and German privacy law',
      'Green energy powered, ethical company',
      'Publishes an annual transparency report',
    ],
    cons: [
      'Costs €1/month — no free tier',
      'Not open source (though standard open protocols used)',
      'Web interface is functional but not flashy',
      'No calendar or office suite included in base plan',
      'Limited storage compared to big providers',
    ],
    content: `
      <h2>Why Posteo?</h2>
      <p>Most email providers need your name, phone number, or an existing email address to sign up. Posteo doesn't. You create an account with a username and password. That's all they know about you.</p>
      <p>You pay €1 a month. If you want to stay completely anonymous, you can mail them cash. Most people use a payment method that doesn't identify them — Posteo deliberately severs the link between payment and account after processing. Your payment details are never stored alongside your account.</p>

      <h2>How it works</h2>
      <p>Posteo is a standard email provider — it works with any email client that supports IMAP and SMTP. You can also use their web interface. It supports PGP encryption, so you can encrypt emails end-to-end with people who also use PGP.</p>
      <p>Posteo can also encrypt everything stored in your account — your inbox, contacts, and calendar — using a key derived from your password. Even Posteo can't read your stored mail if you enable this.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Posteo performs IP stripping on delivery — they remove your IP address from the metadata of every email you send. This prevents your physical location from leaking to the people you email, which most email providers don't bother to do.</div></div>

      <h2>No IP logs</h2>
      <p>Posteo doesn't log IP addresses — not when you log in, not when you send email. This is unusual. Most providers keep connection logs for weeks. If Posteo received a legal demand for your login history, they would have nothing to hand over.</p>

      <h2>Transparency</h2>
      <p>Posteo publishes an annual transparency report listing every legal demand they received and how they responded. They fight requests in court when they believe they're unjustified. They've done this publicly and on record.</p>
      <p>The service isn't open source, but it uses standard open protocols (IMAP, SMTP, JMAP) and is auditable in that sense.</p>

      <h2>Verdict</h2>
      <p>At €1 a month, Posteo is one of the most privacy-serious email providers available at any price. If you want anonymous signup, no IP logging, and a company that actively fights for your privacy in court, Posteo is a compelling choice.</p>
    `
  };
