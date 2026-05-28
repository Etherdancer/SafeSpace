export default {
    id: 'mastodon',
    website: 'https://joinmastodon.org',
    index: 282,
    name: 'Mastodon',
    tagline: 'Social media you control, not a corporation.',
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
      appStore: 4.6,
    },
    platforms: ['Web', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A genuinely decentralised Twitter alternative where no single company owns your data or feed.',
    pros: [
      'No ads, no algorithmic feed manipulation',
      'You can self-host your own instance for full control',
      'Federated across thousands of servers — no single point of failure',
      'No tracking pixels or third-party ad scripts',
      'Fully open source with an active community',
    ],
    cons: [
      'Privacy depends on which server you join — the admin can read your posts',
      'Direct messages are not end-to-end encrypted',
      'Public posts are truly public and spread across many servers — hard to delete completely',
      'Self-hosting requires technical know-how',
    ],
    content: `
      <h2>Why Mastodon?</h2>
      <p>Twitter and X are run by one company. That company decides what you see, what ads you get, and what data they keep about you. Mastodon throws that model away.</p>
      <p>Instead of one central server, Mastodon is thousands of independent servers talking to each other. You pick a server to join — or run your own. No one company is in charge.</p>

      <h2>How it works</h2>
      <p>Mastodon uses a protocol called ActivityPub. Think of it like email: Gmail and Outlook users can email each other even though they're on different servers. Mastodon works the same way. Your account on one server can follow and talk to accounts on any other Mastodon server — or even other ActivityPub apps like Pixelfed or PeerTube.</p>
      <p>Your posts, follows, and timeline all live on the server you chose. If you don't like that server, you can move your account (including your followers) to a different one.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Mastodon's ActivityPub protocol means your posts are sent between servers in the open. Public posts can be seen and stored by any server in the network. If you want something private, don't post it publicly — and remember, DMs are not encrypted.</div></div>

      <h2>Who sees your data?</h2>
      <p>Your server admin can see your posts, including followers-only ones. They cannot see your password, but they can see everything else stored on their server.</p>
      <p>This means choosing a trusted server matters a lot. Look for servers with a clear privacy policy and moderation rules. You can also host your own.</p>
      <p>There are no ads. There is no algorithmic feed. No one is selling your behaviour to advertisers. What you see is just posts, in chronological order, from people you follow.</p>

      <h2>Limitations to know</h2>
      <p>Mastodon is not anonymous. Your username and public posts are visible across the whole network. Deleting a post removes it from your server, but copies may already exist on other servers that cached it.</p>
      <p>Direct messages look private but are stored unencrypted on both the sender's and receiver's servers. Treat DMs like emails — not like Signal messages.</p>

      <h2>Verdict</h2>
      <p>Mastodon is one of the best alternatives to corporate social media. No ads, no surveillance capitalism, no black-box algorithm. Your biggest privacy choice is picking a trustworthy server — or hosting your own.</p>
    `
  };
