export default {
    id: 'brave-search',
    website: 'https://search.brave.com',
    index: 102,
    name: 'Brave Search',
    tagline: 'An independent, private search engine',
    category: 'Search Engine',
    scores: {
      dataPrivacy: 26,
      security: 27,
      tracking: 18,
      userControl: 8,
      transparency: 8,
      total: 87
    },
    platforms: ['Web'],
    pricing: 'Free (Premium option available)',
    openSource: false,
    auditedBy: 'Internal audits',
    relatedArticles: ['metadata-problem'],
    verdict: 'Brave Search is one of the few search engines that doesn\'t rely on Google or Bing. It provides excellent results using its own independent index while completely protecting your privacy.',
    pros: [
      'Uses its own independent web index',
      'Does not track searches or profile users',
      'Clean interface with no intrusive ads',
      'Built-in AI summarisation (Goggles) without privacy invasion',
      'Transparent about when it falls back to third-party results'
    ],
    cons: [
      'Not entirely open-source',
      'Results for niche topics can sometimes trail Google',
      'AI features might not appeal to everyone'
    ],
    content: `
      <h2>Why Brave Search?</h2>
      <p>Most "private" search engines actually just borrow their results from Microsoft Bing or Google. Brave Search is different. It built its own index of the web from scratch. This means it offers a truly independent alternative to the big tech companies.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When you search, Brave doesn't record who you are, what your IP address is, or what you searched for. Every search is treated as if it's your first one ever.</div></div>

      <h2>Features That Matter</h2>
      <p>Brave Search includes a feature called "Goggles," which lets you filter search results based on specific rules (like prioritizing independent blogs or tech news). It also has an AI summariser that reads pages for you without sending your data to a third-party AI company.</p>

      <h2>Independence is Key</h2>
      <p>Because Brave does not rely on Google or Bing, it cannot be censored or manipulated by them. While this sometimes means very obscure searches aren't as accurate, for 99% of daily queries, the results are fantastic.</p>

      <h2>Verdict</h2>
      <p>If you want to support a truly independent internet while keeping your search history completely private, Brave Search is the best tool available. It proves you don't need to hand over your data to get good search results.</p>
    `
  };
