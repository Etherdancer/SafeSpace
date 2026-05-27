export default {
  id: 'onion-browser',
  website: 'https://onionbrowser.com',
  index: 203,
  name: 'Onion Browser',
  tagline: 'Tor browsing on iOS — free and open source.',
  category: 'Browser',
  scores: {
    dataPrivacy: 27,
    security: 25,
    tracking: 19,
    userControl: 8,
    transparency: 9,
    total: 88
  },
  platforms: ['iOS'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Endorsed by the Tor Project',
  relatedArticles: [],
  verdict: 'The only Tor-powered browser for iOS recommended by the Tor Project itself — strong anonymity, with some iOS limitations to understand.',
  pros: [
    'Routes all traffic through the Tor network for anonymity',
    'Officially endorsed by the Tor Project',
    'Open source and free',
    'Blocks scripts, fingerprinting, and third-party cookies by default',
  ],
  cons: [
    'Slower than normal browsing due to Tor routing',
    'iOS WebKit restrictions limit some Tor protections available on desktop',
    'Some websites block Tor exit nodes',
    'Not suitable for high-bandwidth activities like streaming',
  ],
  content: `
    <h2>Why Onion Browser?</h2>
    <p>Most browsers hide what you do from trackers — but they still let your internet provider and websites see roughly who you are and where you are. Onion Browser goes further. It routes your traffic through the Tor network, which makes it much harder for anyone to trace what you are doing back to you.</p>
    <p>It is the only Tor-powered browser for iPhone that the Tor Project itself recommends.</p>

    <h2>How it works</h2>
    <p>The Tor network is a chain of volunteer-run servers around the world. Your traffic bounces through at least three of them before reaching its destination. Each server only knows the previous and next hop — no single server knows both who you are and what you are accessing.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine passing a secret note through three friends in a row. Each friend only knows who gave them the note and who to pass it to next — nobody in the chain knows the full picture of where it started and where it is going.</div></div>

    <h2>iOS has limits</h2>
    <p>Apple requires all iOS browsers to use WebKit, the same engine that powers Safari. This means Onion Browser cannot use Firefox's engine like Tor Browser on desktop does. Some of the stronger anti-fingerprinting protections in the desktop Tor Browser are not possible on iOS because of this restriction. Onion Browser is still the best option on iOS — just know it is slightly weaker than Tor Browser on a desktop.</p>

    <h2>Security settings</h2>
    <p>Onion Browser lets you choose a security level: Bronze, Silver, or Gold. Higher levels block more things — JavaScript, fonts, certain media — in exchange for better protection. Most users should start at Silver and move to Gold if they need stronger anonymity.</p>

    <h2>Verdict</h2>
    <p>Onion Browser is the right choice if you need Tor on an iPhone. It is free, open source, and backed by the Tor Project. Just go in knowing that iOS puts a ceiling on what any browser can do, and that Tor makes browsing slower by design.</p>
  `
};
