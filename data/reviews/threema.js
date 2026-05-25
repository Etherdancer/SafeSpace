export default {
    id: 'threema',
    website: 'https://threema.ch',
    index: 100,
    name: 'Threema',
    tagline: 'Swiss privacy with no phone number needed',
    category: 'Messaging',
    scores: {
      dataPrivacy: 28,
      security: 29,
      tracking: 20,
      userControl: 8,
      transparency: 8,
      total: 93
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Paid',
    openSource: true,
    auditedBy: 'Cure53, multiple independent audits',
    relatedArticles: ['metadata-problem', 'smartphone-hardening'],
    verdict: 'Threema is an excellent choice for anonymous messaging. By assigning a random ID instead of requiring a phone number, it provides exceptional privacy. The small one-time fee is a fair price for keeping your data out of the hands of advertisers.',
    pros: [
      'No phone number or email required to sign up',
      'End-to-end encrypted by default',
      'Based in Switzerland with strong privacy laws',
      'Open-source and regularly audited',
      'No subscription — just a small one-time fee'
    ],
    cons: [
      'Not free, which limits its user base',
      'Requires you to convince friends to pay to use it',
      'Less feature-rich compared to mainstream messengers'
    ],
    content: `
      <h2>Why Threema?</h2>
      <p>Threema solves one of the biggest problems with modern messaging apps: the requirement to link your account to your phone number. When you sign up, Threema generates a random Threema ID. This means you can chat with people without ever revealing who you are or what your phone number is.</p>
      
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your identity is completely detached from your personal details. You are just a random string of characters to the network.</div></div>

      <h2>How It Keeps You Safe</h2>
      <p>Everything you send on Threema is end-to-end encrypted. This includes messages, voice calls, video calls, and files. Because the company is based in Switzerland, it benefits from some of the strictest privacy laws in the world. They run their own servers and do not collect metadata about who is talking to whom.</p>

      <h2>The Cost of Privacy</h2>
      <p>Unlike Signal, Threema costs a few dollars to download. However, this is a one-time fee, not a subscription. This business model means they do not need to show you ads or sell your data to keep the lights on. You are paying for the product, so you are not the product.</p>

      <h2>Verdict</h2>
      <p>If you need to communicate with absolute anonymity and do not mind paying a small fee, Threema is arguably the best tool for the job. It is highly recommended for anyone who wants to separate their digital identity from their real-world phone number.</p>
    `
  };
