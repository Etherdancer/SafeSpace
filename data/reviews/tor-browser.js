export default {
    id: 'tor-browser',
    website: 'https://www.torproject.org',
    index: 8,
    name: 'Tor Browser',
    tagline: 'Strongest anonymity available for everyday browsing',
    category: 'Browsers',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Multiple independent security researchers; widely peer-reviewed',
    relatedArticles: ['anonymous-browsing', 'browser-fingerprinting', 'privacy-vs-convenience'],
    verdict: 'The most private browser you can use. Slower than normal browsing, but provides a level of anonymity that no other consumer tool approaches. Essential for sensitive research.',
    pros: [
      'Routes traffic through three separate computers — your IP is hidden from websites',
      'All Tor Browser users share an identical fingerprint — you blend into the crowd',
      'Clears all data automatically when you close it',
      'Free, open source, developed and maintained by the Tor Project non-profit',
      'Works on Windows, Mac, Linux, and Android',
    ],
    cons: [
      'Significantly slower than normal browsing due to multi-hop routing',
      'Some websites block Tor exit nodes',
      'Streaming video and file downloads are impractical',
      'Not available on iPhone (due to Apple App Store policies)',
    ],
    content: `
      <h2>How Tor Works</h2>
      <p>Normally when you visit a website, your request goes directly from your device to that website. The website sees your IP address (your internet location), and your internet provider sees which website you visited.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your request is wrapped in three locked envelopes and passed through three different computers around the world. Each computer opens only its own envelope and passes the next one on. By the time your request reaches the website, it comes from the last computer — not from you. No one in the chain knows the full picture. Technically: Tor (The Onion Router) encrypts traffic in three nested layers and routes it through a circuit of three volunteer-operated relays. Each relay decrypts one layer and forwards the packet. The entry node knows your IP but not the destination; the exit node connects to the website but only knows the previous relay.</div></div>

      <h2>The Fingerprint Problem — Solved</h2>
      <p>One of Tor Browser's most powerful features is that every user looks identical to websites. Tor Browser is a modified version of Firefox that reports exactly the same screen size, the same fonts, the same system details to every website — regardless of what your actual hardware is. You don't stand out; you blend into a crowd of tens of thousands of identical-looking Tor users.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every person using Tor Browser looks exactly the same to websites — same window size, same pretend screen, same pretend fonts. You don't just have a disguise; you're wearing the exact same disguise as thousands of other people. Tor Browser achieves this by shipping with a fixed window size (1000×800 by default), disabling JavaScript APIs that leak hardware details, and standardising font enumeration and canvas rendering.</div></div>

      <h2>Important Rules for Tor Browser</h2>
      <ul>
        <li><strong>Don't log in to personal accounts.</strong> If you sign in to your Gmail while using Tor, Google knows it's you. The anonymity is completely broken. Use Tor for browsing that you want kept separate from your identity — research, reading, information gathering.</li>
        <li><strong>Don't install extensions.</strong> Every extension changes your fingerprint and makes you distinguishable from other Tor users.</li>
        <li><strong>Don't resize the window.</strong> Tor Browser opens at a standardised size. Making it bigger or smaller changes your fingerprint.</li>
        <li><strong>Don't download files and open them outside Tor.</strong> Opening a document in Word or a PDF reader can leak your real IP address.</li>
      </ul>

      <h2>How to Install and Use Tor Browser</h2>
      <ol>
        <li>Go to <strong>torproject.org</strong> and click "Download Tor Browser."</li>
        <li>Run the installer. It works like any other programme installation.</li>
        <li>Open Tor Browser and click "Connect." It will spend a few seconds connecting to the Tor network.</li>
        <li>Browse normally. Tor handles the rest automatically. The address bar will show a small ".onion available" icon on some sites — these are Tor-native addresses that are even more private.</li>
        <li>When you're done, close Tor Browser. All your browsing history, cookies, and data are automatically deleted.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Tor Browser is not for everyday browsing — it's too slow for that. But for any browsing where you genuinely need your identity separated from what you're looking at — researching sensitive medical topics, reading news about your country's government, background research of any kind — it's the right tool and nothing else comes close.</p>
    `
  };
