export default {
    id: 'freetube',
    website: 'https://freetubeapp.io',
    index: 17,
    name: 'FreeTube',
    tagline: 'Watch YouTube without Google watching you',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.8,
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'FreeTube lets you watch any public YouTube video without Google knowing. Subscriptions, history, and preferences are stored locally. An excellent desktop YouTube replacement.',
    pros: [
      'Watch YouTube videos without Google building a viewing profile on you',
      'Subscribe to channels — all stored locally, never on Google\'s servers',
      'No ads',
      'Search works exactly like YouTube',
      'Free and open source',
    ],
    cons: [
      'Desktop only (Windows, Mac, Linux) — no mobile app',
      'Cannot access videos that require a YouTube account (age-gated content, etc.)',
      'Not an official YouTube product — could break if YouTube changes their API',
    ],
    content: `
      <h2>The YouTube Privacy Problem</h2>
      <p>YouTube is owned by Google. Every video you watch, every search you make on YouTube, and every channel you subscribe to is logged to your Google account (or your device if you're not logged in) and used to build an advertising profile. YouTube's recommendation algorithm uses your viewing history to keep you engaged — which means it learns a great deal about your interests, opinions, and emotional state.</p>

      <h2>How FreeTube Solves This</h2>
      <p>FreeTube is a desktop app that fetches YouTube videos through alternative methods that don't send identifying information to Google.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>FreeTube fetches video files from YouTube without telling Google who you are. Your watch history and subscriptions are saved on your own computer, not on Google's servers — Google receives a request for the video, but it's not tied to you. FreeTube can use either the Invidious API (a privacy-respecting YouTube front-end proxy) or YouTube's internal API directly; in both modes, no authentication cookies or persistent identifiers are sent. Subscriptions and history are stored in a local SQLite database.</div></div>

      <p>The result: you can watch any public YouTube video, subscribe to any channel, and search YouTube's entire catalogue — without Google logging any of it to your profile.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Go to <strong>freetubeapp.io</strong> and click Download. Choose your operating system.</li>
        <li>Install and open FreeTube. It looks very similar to YouTube — search bar at the top, videos in the main area.</li>
        <li>Search for any video or channel in the search bar. Results appear immediately.</li>
        <li>Click a video to play it. No ads.</li>
        <li>Click Subscribe on any channel — the subscription is saved to your computer, not to Google.</li>
        <li>In Settings, switch to "Local API" under Player Settings for maximum privacy — this routes video requests without using Google's main API.</li>
      </ol>

      <h2>On Mobile</h2>
      <p>FreeTube has no mobile app. On Android, use <strong>NewPipe</strong> (free, open source, from the F-Droid app store or newpipe.net) — it works identically to FreeTube but on your phone. On iPhone, use an Invidious instance in a browser: go to invidious.io, find a working instance, and watch YouTube there.</p>

      <h2>Verdict</h2>
      <p>If you watch YouTube on a computer, install FreeTube. It's an immediate, zero-effort way to stop Google from logging your viewing habits. Works perfectly for most YouTube content and costs nothing.</p>
    `
  };
