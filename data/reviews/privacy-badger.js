export default {
    id: 'privacy-badger',
    website: 'https://privacybadger.org/',
    index: 250,
    name: 'Privacy Badger',
    tagline: 'Learns to block trackers by watching what they do.',
    category: 'Browser Extension',
    scores: {
      dataPrivacy: 22,
      security: 19,
      tracking: 18,
      userControl: 8,
      transparency: 10,
      total: 77
    },
    platforms: ['Web'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A smart, self-learning tracker blocker from the EFF that does not rely on filter lists — it watches trackers behave and decides for itself.',
    pros: [
      'Made by the EFF, a respected digital rights organisation',
      'Fully open source',
      'Learns which trackers to block by observing behaviour across sites',
      'Does not depend on static filter lists that need constant updating',
      'Sends no data to EFF servers',
      'Available for Chrome, Firefox, and Edge',
    ],
    cons: [
      'Learning period means it is less effective immediately after installation',
      'Does not block all ads — only those that track you',
      'Less comprehensive than uBlock Origin for raw ad blocking',
      'Learning mode has been reduced in scope due to fingerprinting concerns with the learning data',
    ],
    content: `
      <h2>Why Privacy Badger?</h2>
      <p>Most tracker blockers use lists — long catalogues of known bad domains that get blocked on sight. Privacy Badger works differently. It was built by the Electronic Frontier Foundation (EFF) to detect tracking behaviour in real time and block trackers based on what they do, not just who they are.</p>
      <p>A domain that follows you across three unrelated websites gets blocked automatically. No list required.</p>

      <h2>How it works</h2>
      <p>Privacy Badger observes third-party requests as you browse. If it detects that a third-party domain is setting cookies or reading unique identifiers across multiple unrelated sites — the signature of cross-site tracking — it escalates that domain's status from "allow" to "cookie block" to "full block". This happens locally in your browser; no data leaves your machine.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine a detective who watches suspicious characters following you around the city. When someone follows you into three different shops in a row, the detective steps in and blocks them. Privacy Badger does this for trackers — it waits to catch them in the act.</div></div>

      <h2>Complementing other blockers</h2>
      <p>Privacy Badger is not designed to replace uBlock Origin. It catches trackers that list-based blockers might miss — especially new or obscure ones that have not made it into filter lists yet. Running both together gives you broader coverage: list-based blocking from uBlock Origin plus behaviour-based detection from Privacy Badger.</p>
      <p>Privacy Badger also handles a specific type of tracking called link tracking, where sites add identifiers to URLs you click on. It strips these from outgoing links where it can.</p>

      <h2>Zero data collection from EFF</h2>
      <p>Privacy Badger operates entirely locally. The EFF does not receive a list of sites you visit or trackers you encounter. There are no analytics, no telemetry, and no login. The extension is fully open source under the GPLv3 licence.</p>

      <h2>Verdict</h2>
      <p>Privacy Badger is a trustworthy, behaviour-driven tracker blocker from one of the most credible organisations in digital rights. It works best alongside a list-based blocker like uBlock Origin. Together they cover cases neither would catch alone.</p>
    `
  };
