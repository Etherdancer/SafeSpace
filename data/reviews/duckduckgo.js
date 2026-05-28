export default {
    id: 'duckduckgo',
    website: 'https://duckduckgo.com',
    index: 14,
    name: 'DuckDuckGo',
    tagline: 'The search engine that doesn\'t track you',
    category: 'Search Engines',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 9,
      total: 95
    },
    externalScores: {
      appStore: 4.8,
    },
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Privacy policy reviewed by EFF and others',
    relatedArticles: ['anonymous-browsing', 'user-accounts-and-privacy', 'privacy-vs-convenience'],
    verdict: 'The easiest first step in reducing your digital footprint. No user profiles, no search history, no personalised tracking. Switch in 2 minutes.',
    pros: [
      'No tracking across sessions — searches are not tied to a profile',
      'No filter bubble — results are the same for everyone',
      'Privacy-respecting browser app blocks trackers on other websites too',
      'Search results are competitive for most everyday queries',
    ],
    cons: [
      'Results are sometimes less relevant than Google for obscure or very specific searches',
      'Not open source — you must trust their privacy policy',
      'Received criticism in 2022 for allowing Microsoft trackers in their app (since corrected)',
    ],
    content: `
      <h2>What Is DuckDuckGo?</h2>
      <p>DuckDuckGo is a search engine — it finds things on the internet, just like Google. The key difference: Google builds a permanent profile of every search you've ever made and uses it to target advertising. DuckDuckGo doesn't track what you search, doesn't store your search history, and doesn't build a profile about you.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you search on DuckDuckGo, it treats you like a stranger it's never met — it doesn't remember your last search, it doesn't know who you are, and there's no record of what you've looked for over time. It does not set persistent user identifiers or tracking cookies, and each search session is stateless. Query parameters are not forwarded to result-page destinations via the referrer header.</div></div>

      <h2>How to Switch</h2>
      <ol>
        <li><strong>In Firefox:</strong> Settings &gt; Search &gt; Default Search Engine &gt; select DuckDuckGo.</li>
        <li><strong>In Chrome:</strong> Settings &gt; Search engine &gt; DuckDuckGo (or Add from the list).</li>
        <li><strong>In Brave:</strong> Settings &gt; Search engine &gt; DuckDuckGo.</li>
        <li><strong>On iPhone (Safari):</strong> Settings &gt; Safari &gt; Search Engine &gt; DuckDuckGo.</li>
        <li><strong>On Android (Chrome):</strong> Chrome Settings &gt; Search engine &gt; DuckDuckGo.</li>
      </ol>
      <p>The switch takes under a minute. Searching feels identical — type something in the address bar, get results. If a result ever feels incomplete, you can search the same term on Startpage (which proxies Google results anonymously) for comparison.</p>

      <h2>DuckDuckGo's Browser and App</h2>
      <p>Beyond search, DuckDuckGo offers a free browser app for iPhone and Android that blocks trackers across all websites you visit, forces HTTPS connections where possible, and clears browsing data with a tap. It's a reasonable everyday mobile browser for non-technical users who want better privacy without any configuration.</p>

      <h2>The 2022 Controversy</h2>
      <p>In 2022, a researcher found that DuckDuckGo's browser app was allowing Microsoft trackers to load on some websites — an exception related to a search deal. DuckDuckGo acknowledged this and removed the exception. This is a reminder that "private" claims deserve scrutiny, but DuckDuckGo's response was appropriately transparent and the issue was corrected.</p>

      <h2>Verdict</h2>
      <p>DuckDuckGo is the easiest and most impactful single change most people can make to their privacy. Switch your default search engine in 2 minutes and immediately stop feeding your search history into Google's advertising machine.</p>
    `
  };
