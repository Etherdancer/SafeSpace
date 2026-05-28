export default {
    id: 'nuclear',
    website: 'https://nuclear.js.org',
    index: 278,
    name: 'Nuclear',
    tagline: 'A free music player that streams from everywhere',
    category: 'Media Player',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 92
    },
    externalScores: {
      appStore: 4.5,
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A fantastic, tracker-free alternative to Spotify that pulls music from free sources across the internet.',
    pros: [
      'Completely free with no ads',
      'Does not require an account to listen to music',
      'Downloads music for offline listening'
    ],
    cons: [
      'Relies on external sources (like YouTube) which can sometimes break',
      'Not available on mobile phones yet'
    ],
    content: `
      <h2>Why Nuclear?</h2>
      <p>Spotify and Apple Music require accounts, charge monthly fees, and track exactly what you listen to in order to feed their recommendation algorithms. Nuclear provides a very similar experience—a beautiful interface with millions of songs—but without the tracking or the price tag.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Nuclear acts as an aggregator, anonymously scraping and streaming audio from free sources like YouTube, SoundCloud, and Bandcamp. <br><b>Plain English:</b> When you search for a song, Nuclear looks for free versions of that song across the internet and plays it for you in a clean, ad-free interface.</div></div>

      <h2>How it works</h2>
      <p>You simply open the app, search for an artist or song, and hit play. Because Nuclear isn't a central streaming service, you don't need to log in. Your playlists and listening history are saved only on your local computer.</p>
      
      <h2>Discovering Music</h2>
      <p>Despite being completely decentralized, Nuclear still has features to help you discover new music. It can show you similar artists, popular tracks, and lyrics, all pulled anonymously from open databases.</p>
    `
  };
