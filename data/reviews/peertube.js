export default {
    id: 'peertube',
    website: 'https://joinpeertube.org',
    index: 284,
    name: 'PeerTube',
    tagline: 'Video hosting without YouTube's surveillance.',
    category: 'Social Media',
    scores: {
      dataPrivacy: 23,
      security: 19,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 79
    },
    platforms: ['Web'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A federated, self-hostable video platform that puts videos under your control, not an ad platform.',
    pros: [
      'No ads by default — server admins choose their own rules',
      'Self-hostable for complete data ownership',
      'Uses peer-to-peer delivery to reduce server load without central control',
      'Federated with Mastodon and other ActivityPub apps',
      'No algorithmic recommendations pushing engagement bait',
      'Fully open source',
    ],
    cons: [
      'Privacy depends on the server you use — admins have access to uploaded content',
      'Peer-to-peer streaming reveals your IP to other viewers watching the same video',
      'Much smaller content library than YouTube',
      'No mobile app — browser only',
    ],
    content: `
      <h2>Why PeerTube?</h2>
      <p>YouTube is Google. Google builds an advertising profile on everyone who watches a video — even without an account. Every click, every pause, every search feeds that profile.</p>
      <p>PeerTube is a video platform where no single company is in control. Anyone can run a PeerTube server, upload videos, and connect with other PeerTube servers.</p>

      <h2>How it works</h2>
      <p>PeerTube uses two technologies together. First, it federates using ActivityPub — the same protocol as Mastodon. That means a PeerTube instance can share videos with other instances, and Mastodon users can follow PeerTube channels.</p>
      <p>Second, when you watch a video, your browser also helps deliver it to other viewers using WebRTC peer-to-peer streaming. This reduces the bandwidth cost for the server hosting the video.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When you watch a PeerTube video, your browser can share pieces of that video with other people watching at the same time. This is called peer-to-peer, or P2P. It means your IP address is visible to those other viewers — like a BitTorrent download. You can disable this in the video player settings if you prefer not to share.</div></div>

      <h2>Who sees your data?</h2>
      <p>There are no ads and no cross-site tracking by default. But the server admin has access to uploaded videos, view counts, and any account data you provide.</p>
      <p>If P2P streaming is enabled (it is by default on most instances), your IP address is exposed to other viewers of the same video. This is a real privacy trade-off worth knowing about.</p>
      <p>Some PeerTube instances may embed third-party players or analytics — check your instance's privacy policy before using it.</p>

      <h2>Limitations to know</h2>
      <p>PeerTube has no official mobile app. You watch in a browser. Some third-party apps exist but vary in quality.</p>
      <p>The content library is much smaller than YouTube. PeerTube is best for creators who want to publish on their own terms, not for finding mainstream content.</p>

      <h2>Verdict</h2>
      <p>PeerTube is the right tool for creators and communities who want to publish video without feeding Google's ad machine. The P2P IP exposure is worth knowing about, and you should pick a trusted instance. But for a YouTube alternative that respects privacy, it's the best option available.</p>
    `
  };
