export default {
    id: 'tails',
    website: 'https://tails.net',
    index: 32,
    name: 'Tails',
    tagline: 'The amnesic incognito live system',
    category: 'Operating Systems',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 4.9,
      playStore: 3.8,
    },
    platforms: ['USB/DVD (PC/Mac)'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53, multiple academic audits',
    relatedArticles: ['linux-privacy-security', 'anonymous-browsing'],
    verdict: 'Tails is a portable operating system you start from a USB stick. It routes all traffic through Tor and leaves absolutely no trace on the computer you use it on. It is the gold standard for anonymous browsing.',
    pros: [
      'Leaves zero trace on the host computer',
      'Forces all internet connections through the Tor network',
      'Includes built-in encryption tools',
      'Can be booted on almost any computer'
    ],
    cons: [
      'Not designed for daily use as a main operating system',
      'Requires rebooting your computer to use'
    ]
  ,
    content: ''
  };
