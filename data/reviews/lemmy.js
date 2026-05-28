export default {
    id: 'lemmy',
    website: 'https://join-lemmy.org',
    index: 285,
    name: 'Lemmy',
    tagline: 'Reddit-style communities, no corporate owner.',
    category: 'Social Media',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 19,
      userControl: 10,
      transparency: 10,
      total: 99
    },
    externalScores: {
      appStore: 4.8,
      playStore: 4.5,
    },
    platforms: ['Web', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A decentralised Reddit alternative with no ads, no tracking, and communities you can actually own.',
    pros: [
      'No ads, no tracking, no algorithmic feed',
      'Federated — connect with Mastodon users and other ActivityPub platforms',
      'Self-hostable for full control over your community',
      'Chronological and ranked feeds without engagement manipulation',
      'Fully open source',
      'iOS and Android clients available',
    ],
    cons: [
      'Server admins can read your posts and private messages',
      'Private messages are not end-to-end encrypted',
      'Instance choice matters — some communities have poor moderation',
      'Smaller communities than Reddit for most niche topics',
    ],
    content: `
      <h2>Why Lemmy?</h2>
      <p>Reddit went public and changed its API rules in 2023, killing off third-party apps and confirming what many suspected: Reddit's priority is revenue, not community.</p>
      <p>Lemmy offers the same idea — topic-based communities, upvotes, comments, links — but with no company in charge. Communities are run by the people in them.</p>

      <h2>How it works</h2>
      <p>Lemmy is made of many independent servers, each hosting communities (called "communities" instead of subreddits). You join one server and can then browse, post, and comment in communities on any other Lemmy server.</p>
      <p>Like Mastodon, Lemmy uses ActivityPub. This means a Mastodon user can follow a Lemmy community and see posts in their Mastodon feed. It's all connected.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Lemmy's federation means a post in a community on one server automatically shows up for users on other servers who subscribe to that community. There's no central database — each server keeps its own copy of the conversations it's involved in.</div></div>

      <h2>Who sees your data?</h2>
      <p>Public posts are visible to anyone across the federated network. Your server's admin has access to your posts, comments, and any private messages you send through the platform.</p>
      <p>Private messages in Lemmy are not encrypted. Treat them like emails — readable by server admins on both ends.</p>
      <p>There are no ads and no third-party tracking scripts on the core Lemmy software. Individual instances might add things, so check your instance before signing up.</p>

      <h2>Limitations to know</h2>
      <p>The quality of your experience depends heavily on which instance you join. Some are well-moderated and stable. Others are not. Do a little research before picking one.</p>
      <p>Communities are smaller than equivalent Reddit communities for most topics. That's changing, but it's still a real difference.</p>

      <h2>Verdict</h2>
      <p>Lemmy is the most mature decentralised Reddit alternative available. No ads, no tracking, federated communities, and real self-hosting options. If you care about privacy and community ownership, it's worth switching — just pick a good instance.</p>
    `
  };
