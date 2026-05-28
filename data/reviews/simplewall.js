export default {
    id: 'simplewall',
    website: 'https://github.com/henrypp/simplewall',
    index: 244,
    name: 'SimpleWall',
    tagline: 'Lightweight firewall that puts you back in control.',
    category: 'Firewall',
    scores: {
      dataPrivacy: 20,
      security: 26,
      tracking: 16,
      userControl: 9,
      transparency: 10,
      total: 81
    },
    externalScores: {
      appStore: 4.2,
      playStore: 4.3,
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A lean, open-source firewall that filters traffic per application — excellent for blocking Windows from phoning home without complex setup.',
    pros: [
      'Fully open source',
      'Per-application network rules — block or allow each app individually',
      'Built on Windows Filtering Platform, a native Windows API',
      'Portable — no installation needed',
      'Blocks traffic at the packet level, not just port-based rules',
      'Tiny resource footprint',
    ],
    cons: [
      'No DNS-level blocking',
      'Windows only',
      'Requires manual rule decisions for each new app',
      'No cloud threat intelligence or automatic rule updates',
    ],
    content: `
      <h2>Why SimpleWall?</h2>
      <p>Windows has a built-in firewall but it is awkward to use and does not make it easy to block specific apps from reaching the internet. SimpleWall fixes this. It wraps the Windows Filtering Platform — the low-level system that controls network traffic — in a clean, understandable interface.</p>
      <p>When an application tries to make a network connection for the first time, SimpleWall asks you whether to allow or block it. You stay in control of every connection.</p>

      <h2>How it works</h2>
      <p>SimpleWall uses the Windows Filtering Platform (WFP) API to intercept outgoing and incoming network connections at the kernel level. Rules are stored locally and applied instantly. There is no proxy, no traffic inspection service, and no cloud component — everything runs on your machine.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine every app on your PC has to knock on a door before going on the internet. SimpleWall is the doorman — it asks you whether to let each app through, and remembers your answer for next time.</div></div>

      <h2>Blocking Windows telemetry</h2>
      <p>One of the most practical uses is blocking Windows system processes that send telemetry data to Microsoft. Processes like <code>svchost.exe</code> and various Windows update components attempt outbound connections constantly. SimpleWall lets you block these at the network level — a more reliable approach than registry tweaks alone, which can be reset by Windows updates.</p>
      <p>SimpleWall ships with a bundled blocklist of known Microsoft telemetry and advertising hosts to get you started.</p>

      <h2>Lightweight and honest</h2>
      <p>SimpleWall has no telemetry of its own, no update pings, and no remote servers. It is a portable executable that reads and writes local rule files. The full source code is on GitHub under the GPLv3 licence.</p>

      <h2>Verdict</h2>
      <p>SimpleWall is one of the best free firewall tools for Windows. It is small, transparent, and genuinely effective at stopping apps from making unwanted network connections. If you want fine-grained control over what leaves your computer, this is a logical starting point.</p>
    `
  };
