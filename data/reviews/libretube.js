export default {
    id: 'libretube',
    website: 'https://libre-tube.github.io',
    index: 218,
    name: 'LibreTube',
    tagline: 'YouTube without connecting to Google',
    category: 'Media Player',
    scores: {
      dataPrivacy: 29,
      security: 26,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 94
    },
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'An excellent, modern-looking YouTube alternative that physically sits between you and Google\'s servers.',
    pros: [
      'Your phone never connects directly to Google',
      'Built-in SponsorBlock to skip sponsored segments',
      'Modern, slick user interface',
      'No ads or tracking'
    ],
    cons: [
      'Piped instances can occasionally go down or be slow',
      'Requires downloading outside the Google Play Store'
    ],
    content: `
      <h2>Why LibreTube?</h2>
      <p>While tools like NewPipe connect to YouTube anonymously, your phone is still technically talking directly to Google's servers. LibreTube takes privacy a step further by using intermediate servers called "Piped instances."</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> LibreTube routes your video requests through decentralized Piped proxy servers, preventing Google from seeing your IP address. <br><b>Plain English:</b> Instead of your phone asking Google for a video, your phone asks a proxy server, and the proxy server asks Google. Google never knows you exist.</div></div>

      <h2>How it works</h2>
      <p>LibreTube has a beautiful, modern design that feels very similar to the official YouTube app. Because it relies on Piped, you can actually create an account on a Piped server to sync your subscriptions across different devices, all without giving Google any of your data.</p>
      
      <h2>Built-in Sponsor Skipping</h2>
      <p>LibreTube integrates a community-driven tool called SponsorBlock. When a YouTuber stops the video to read an ad for a VPN or meal kit, LibreTube will automatically skip past that segment so you can get right back to the content.</p>
    `
  };
