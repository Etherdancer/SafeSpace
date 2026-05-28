export default {
    id: 'newpipe',
    website: 'https://newpipe.net',
    index: 217,
    name: 'NewPipe',
    tagline: 'A private, ad-free YouTube experience',
    category: 'Media Player',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 2.7,
      playStore: 4.7,
    },
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'The absolute best way to watch YouTube on Android without feeding Google\'s tracking algorithms.',
    pros: [
      'Completely ad-free without needing a premium subscription',
      'No Google account required to subscribe to channels',
      'Background play and offline downloading',
      'Zero tracking scripts'
    ],
    cons: [
      'Not available in the Google Play Store (must use F-Droid or direct download)',
      'Cannot comment on or like videos'
    ],
    content: `
      <h2>Why NewPipe?</h2>
      <p>The official YouTube app is essentially a giant tracking machine. It monitors exactly what you watch, for how long, when you pause, and where you skip, building a detailed profile of your interests and political views. NewPipe lets you watch all the same videos without any of the surveillance.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> NewPipe acts as an anonymous web scraper that parses YouTube's frontend data without using the official YouTube API or Google Play Services. <br><b>Plain English:</b> Instead of logging in, NewPipe simply "reads" the YouTube website anonymously to get the video for you, meaning Google doesn't know who is watching.</div></div>

      <h2>How it works</h2>
      <p>Because NewPipe doesn't use a Google account, your subscriptions and playlists are saved entirely on your own device. You can still subscribe to all your favorite creators, but Google has no idea what your subscription list looks like.</p>
      
      <h2>Extra Features</h2>
      <p>Besides privacy, NewPipe unlocks features usually reserved for paying users. You can listen to videos in the background while using other apps, turn off your screen, or download videos as video or audio files to watch offline.</p>
    `
  };
