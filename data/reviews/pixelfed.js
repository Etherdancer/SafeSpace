export default {
    id: 'pixelfed',
    website: 'https://pixelfed.org',
    index: 283,
    name: 'Pixelfed',
    tagline: 'Photo sharing without the surveillance.',
    category: 'Social Media',
    scores: {
      dataPrivacy: 22,
      security: 19,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 78
    },
    platforms: ['Web', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A decentralised, ad-free Instagram alternative that keeps your photos off corporate servers.',
    pros: [
      'No ads, no tracking, no algorithmic manipulation',
      'Federated with Mastodon and other ActivityPub apps',
      'Self-hostable for full data ownership',
      'Chronological feed — no engagement bait',
      'Fully open source',
    ],
    cons: [
      'Privacy depends on your server admin — posts are not end-to-end encrypted',
      'Smaller community than Instagram',
      'iOS and Android apps are still maturing',
      'Public photos spread across federated servers and can be hard to fully delete',
    ],
    content: `
      <h2>Why Pixelfed?</h2>
      <p>Instagram is owned by Meta. Meta tracks everything you do — what you look at, how long you pause on a photo, where you are. That data funds a giant ad machine.</p>
      <p>Pixelfed is the opposite. It's photo sharing built around the idea that your pictures belong to you, not a corporation.</p>

      <h2>How it works</h2>
      <p>Like Mastodon, Pixelfed is made up of independent servers. You join one (or host your own), upload photos, and follow other people. Your feed shows posts in chronological order — no algorithm deciding what you see.</p>
      <p>Because Pixelfed uses the ActivityPub protocol, you can follow Mastodon accounts from Pixelfed and vice versa. It's all one connected web of services, none of which are owned by a single company.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Pixelfed talks to Mastodon, PeerTube, and other apps using a shared protocol called ActivityPub. It's like different social networks all speaking the same language — so you can follow anyone, anywhere in the network, from one account.</div></div>

      <h2>Who sees your photos?</h2>
      <p>Public posts are visible across the entire federated network. Your server admin has access to everything stored on their server.</p>
      <p>Pixelfed does have private account settings. You can require approval for followers and restrict your posts to followers only. But this is access control, not encryption — it's not the same as end-to-end encryption.</p>
      <p>There are no ads. No behaviour tracking. No selling your data to third parties. The server you're on is run by a person or a community, not an advertising business.</p>

      <h2>Limitations to know</h2>
      <p>If you post a photo publicly, copies of it may be cached on other federated servers. Deleting it from your server doesn't guarantee it disappears everywhere.</p>
      <p>Server trust matters. Pick a server with a clear, honest privacy policy — or run your own if you want complete control.</p>

      <h2>Verdict</h2>
      <p>Pixelfed is a solid, privacy-respecting Instagram alternative. No ads, no tracking, no algorithmic feed. The trade-off is a smaller community and the need to pick a trusted server. For anyone who wants photo sharing without surveillance, it's an easy recommendation.</p>
    `
  };
