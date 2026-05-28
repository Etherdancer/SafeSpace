export default {
    id: 'matrix',
    website: 'https://matrix.org',
    index: 27,
    name: 'Matrix / Element',
    tagline: 'Decentralized, encrypted messaging',
    category: 'Networks',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 97
    },
    externalScores: {
      appStore: 3.4,
      playStore: 3.5,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'NCC Group',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'Matrix is a decentralized communication protocol (like email, but for instant messaging). Element is the most popular app for it. It offers end-to-end encrypted chats without tying you to a central company.',
    pros: [
      'Decentralized: no single company owns the network',
      'End-to-end encrypted by default in private rooms',
      'Open source protocol and clients',
      'You can host your own server'
    ],
    cons: [
      'Key verification across devices can be confusing for new users',
      'Metadata (who talks to who) is visible to the server operators'
    ]
  ,
    content: ''
  };
