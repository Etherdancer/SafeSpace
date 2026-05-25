export default {
    id: 'addy-io',
    website: 'https://addy.io',
    index: 50,
    name: 'Addy.io',
    tagline: 'Open-source email forwarding and aliases',
    category: 'Email',
    scores: {
      dataPrivacy: 28,
      security: 28,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 95
    },
    platforms: ['Web', 'Browser Extensions'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Addy.io (formerly AnonAddy) is a powerful, open-source tool for creating unlimited email aliases. It sits between websites and your real inbox, protecting your identity and stopping spam.',
    pros: [
      'Creates unlimited email aliases on the fly',
      'Open-source and can be self-hosted',
      'Supports PGP encryption for forwarded emails',
      'Excellent free tier'
    ],
    cons: [
      'Replying from aliases requires a bit of setup',
      'Less polished interface compared to SimpleLogin'
    ],
    content: `
      <h2>Protecting Your Real Email Address</h2>
      <p>Every time you give a website your real email address, you are giving them a unique identifier that data brokers use to track you across the internet. Addy.io solves this by providing unlimited alias addresses (like <code>shopping@yourusername.anonaddy.com</code>). You give the alias to the website, Addy.io receives the email, and forwards it to your real inbox.</p>
      
      <h2>Containment and Control</h2>
      <p>If a website gets hacked or sells your address to spammers, you will know exactly who leaked it because the spam will come to that specific alias. You can then toggle a switch in Addy.io to turn that alias off, instantly stopping the spam without affecting any of your other accounts.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>For advanced users, Addy.io supports PGP encryption. Even if you use a standard provider like Gmail, Addy.io can encrypt all incoming emails with your public PGP key before forwarding them, meaning Google cannot read the contents of your forwarded mail.</div></div>

      <h2>Verdict</h2>
      <p>Addy.io is a fantastic, open-source alternative to SimpleLogin or Apple's Hide My Email. Using an alias service is one of the most effective ways to reduce spam and compartmentalize your digital life.</p>
    `
  };
