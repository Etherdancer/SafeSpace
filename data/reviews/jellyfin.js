export default {
    id: 'jellyfin',
    website: 'https://jellyfin.org',
    index: 277,
    name: 'Jellyfin',
    tagline: 'Your own private Netflix',
    category: 'Media Player',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 19,
      userControl: 10,
      transparency: 10,
      total: 92
    },
    externalScores: {
      appStore: 4.1,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'If you have your own collection of movies and shows, Jellyfin is the best way to stream them without any corporate tracking.',
    pros: [
      'Zero tracking, zero telemetry, and zero ads',
      'Completely free with no premium paywalls',
      'You control the server and all the data'
    ],
    cons: [
      'Requires you to provide your own media files',
      'You have to set up and run the server yourself'
    ],
    content: `
      <h2>Why Jellyfin?</h2>
      <p>Streaming services like Netflix and Spotify track every second of your viewing habits. Even personal media server apps like Plex require you to log in through their central servers and collect telemetry data about how you use the app. Jellyfin is a completely free, open-source alternative that doesn't track a single thing.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Jellyfin is a self-hosted media system with no external authentication dependencies and zero telemetry callbacks. <br><b>Plain English:</b> It runs entirely on your own computer. It doesn't connect to a "Jellyfin headquarters" because there isn't one. Nobody knows what you are watching except you.</div></div>

      <h2>How it works</h2>
      <p>You install the Jellyfin Server on a computer in your house and point it at a folder full of your movies, TV shows, or music. Jellyfin automatically downloads posters and descriptions. You can then install the Jellyfin app on your phone, tablet, or smart TV, and stream your media perfectly over your home Wi-Fi.</p>
      
      <h2>No Paywalls</h2>
      <p>Unlike its competitors, Jellyfin doesn't hide features like hardware transcoding, offline downloading, or mobile playback behind a monthly subscription. It is 100% free forever.</p>
    `
  };
