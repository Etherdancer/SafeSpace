export default {
    id: 'nextdns',
    website: 'https://nextdns.io',
    index: 20,
    name: 'NextDNS',
    tagline: 'A firewall for your entire internet connection',
    category: 'Networks',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 20,
      userControl: 9,
      transparency: 9,
      total: 96
    },
    externalScores: {
      appStore: 4.4,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Routers'],
    pricing: 'Free (up to 300k queries) / €1.99/mo',
    openSource: false,
    auditedBy: 'Not formally audited',
    relatedArticles: ['browser-fingerprinting', 'privacy-vs-convenience'],
    verdict: 'NextDNS allows you to block tracking, ads, and malware at the DNS level. By routing your DNS queries through them, you block trackers across all your apps, not just your browser.',
    pros: [
      'Blocks trackers and ads at the network level',
      'Works across all apps on your phone or computer',
      'Highly customizable blocklists',
      'Detailed analytics (which you can choose not to log)'
    ],
    cons: [
      'Not open source',
      'Requires trusting them with your DNS queries'
    ]
  ,
    content: ''
  };
