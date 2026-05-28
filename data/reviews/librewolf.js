export default {
    id: 'librewolf',
    website: 'https://librewolf.net',
    index: 34,
    name: 'LibreWolf',
    tagline: 'A custom, private version of Firefox',
    category: 'Browsers',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 91
    },
    externalScores: {
      appStore: 4.8,
      playStore: 4.7,
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'LibreWolf is Firefox without any of the tracking or telemetry. It comes pre-configured with uBlock Origin and the strictest privacy settings enabled out of the box.',
    pros: [
      'No telemetry, adware, or tracking by default',
      'Forces HTTPS and includes uBlock Origin automatically',
      'Removes the Pocket integration and sponsored shortcuts',
      'Open source and community driven'
    ],
    cons: [
      'Strict settings can occasionally break certain websites (requires adjusting)',
      'Updates slightly slower than official Firefox'
    ],
    content: `
      <h2>What Is LibreWolf?</h2>
      <p>LibreWolf is a version of Firefox that has been stripped down to its privacy essentials. Every telemetry call, every sponsored suggestion, and every "phone home" feature that Firefox ships with has been removed. What remains is a very fast, very capable browser that starts protecting you immediately — no configuration needed.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>LibreWolf is Firefox with all the privacy settings already turned on and all the tracking already removed — think of it as "privacy hardened Firefox" that comes that way out of the box. It forks Firefox's source code and applies a curated set of about:config overrides, including disabling WebRTC IP leaks, enabling resistFingerprinting, and blocking telemetry endpoints, plus ships with uBlock Origin pre-installed.</div></div>

      <h2>How Is It Different From Firefox?</h2>
      <p>Regular Firefox collects crash reports, usage statistics, and experiment data that it sends back to Mozilla. It also ships with Pocket (Mozilla's read-it-later service) and sponsored shortcuts on the new tab page. LibreWolf removes all of this. It also comes with uBlock Origin pre-installed and the strongest privacy settings already enabled.</p>

      <h2>Works on Windows Too</h2>
      <p>Despite being very popular in the Linux community, LibreWolf also runs on Windows and macOS. If you want a Firefox that's already fully hardened on any platform, LibreWolf is the simplest path.</p>

      <h2>Verdict</h2>
      <p>LibreWolf is the easiest way to get maximum-privacy Firefox without spending any time in settings menus. If you trust Firefox but not Mozilla's data collection practices, this is your browser.</p>
    `
  };
