export default {
    id: 'onionshare',
    website: 'https://onionshare.org',
    index: 28,
    name: 'OnionShare',
    tagline: 'Anonymous file sharing over Tor',
    category: 'Networks',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 99
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Least Authority',
    relatedArticles: ['file-sharing'],
    verdict: 'OnionShare lets you securely and anonymously share files of any size directly from your computer to someone else, using the Tor network. It leaves no trace on any server.',
    pros: [
      'Files never touch a central server (peer-to-peer)',
      'Uses the Tor network for total anonymity',
      'Receiver only needs the Tor Browser to download',
      'Open source and audited'
    ],
    cons: [
      'Both sender and receiver must be online at the same time',
      'Transfers over Tor can be very slow'
    ]
  };
