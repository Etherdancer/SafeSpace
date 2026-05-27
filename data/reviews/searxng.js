export default {
    id: 'searxng',
    website: 'https://docs.searxng.org',
    index: 21,
    name: 'SearXNG',
    tagline: 'A privacy-respecting metasearch engine',
    category: 'Search Engines',
    scores: {
      dataPrivacy: 29,
      security: 26,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 94
    },
    platforms: ['Browser'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['anonymous-browsing'],
    verdict: 'SearXNG pulls results from Google, Bing, and other engines, but completely hides your identity from them. You get the quality of mainstream search without the tracking.',
    pros: [
      'Combines results from multiple search engines',
      'Completely open source',
      'Does not track or profile you',
      'Can be self-hosted for maximum privacy'
    ],
    cons: [
      'Public instances can sometimes be blocked by Google (causing missing results)',
      'Interface is less polished than DuckDuckGo'
    ]
  ,
    content: ''
  };
