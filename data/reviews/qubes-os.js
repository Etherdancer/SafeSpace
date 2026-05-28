export default {
    id: 'qubes-os',
    website: 'https://www.qubes-os.org',
    index: 33,
    name: 'Qubes OS',
    tagline: 'A reasonably secure operating system',
    category: 'Operating Systems',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 97
    },
    externalScores: {
      appStore: 3.4,
    },
    platforms: ['PC'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Qubes OS isolates different tasks into completely separate virtual machines. If one part of your system gets hacked, the rest remains perfectly safe. It is highly secure, but incredibly demanding.',
    pros: [
      'Unparalleled security through isolation (compartmentalization)',
      'A compromised app cannot access data from other apps',
      'Allows running Windows and Linux apps side-by-side securely',
      'Open source and praised by security experts'
    ],
    cons: [
      'Extremely steep learning curve',
      'Requires very powerful hardware (lots of RAM and a specific CPU)',
      'Hardware compatibility is limited'
    ]
  ,
    content: ''
  };
