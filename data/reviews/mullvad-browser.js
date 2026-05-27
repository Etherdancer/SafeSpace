export default {
    id: 'mullvad-browser',
    website: 'https://mullvad.net/en/browser',
    index: 249,
    name: 'Mullvad Browser',
    tagline: 'The anti-fingerprinting browser built to disappear.',
    category: 'Browser',
    scores: {
      dataPrivacy: 28,
      security: 27,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 93
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53 (2023)',
    relatedArticles: [],
    verdict: 'A rigorously anti-fingerprinting browser made by the Tor Project — the best choice for blending into the crowd without using the Tor network.',
    pros: [
      'Developed by the Tor Project — the world\'s leading anti-fingerprinting experts',
      'Applies Tor Browser hardening settings without requiring the Tor network',
      'Audited by Cure53 in 2023',
      'Fully open source',
      'Ships with uBlock Origin pre-installed',
      'No telemetry, no crash reporting, no account required',
    ],
    cons: [
      'Some sites break due to aggressive anti-fingerprinting settings',
      'Not designed to use with personal accounts — defeats the purpose',
      'No sync across devices (by design)',
      'Best used alongside a VPN or Mullvad VPN specifically',
    ],
    content: `
      <h2>Why Mullvad Browser?</h2>
      <p>Browser fingerprinting is a tracking technique that identifies you by the unique combination of your browser version, screen size, fonts, system settings, and other attributes. Even with a VPN, your fingerprint can follow you across sites. Mullvad Browser was built by the Tor Project to fight this, but without routing traffic through the Tor network.</p>
      <p>The goal is to make every Mullvad Browser user look identical — so fingerprinting techniques cannot distinguish you from anyone else.</p>

      <h2>How it works</h2>
      <p>Mullvad Browser applies the same privacy patches the Tor Project developed for Tor Browser. These include fingerprint normalisation (making your browser report the same values as everyone else), JavaScript API restrictions that prevent fingerprinting via canvas, WebGL, and audio, and aggressive third-party cookie blocking. The result is a browser that actively resists attempts to build a profile of you.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine everyone in a crowd wearing the same mask. Trackers try to recognise your face — but if everyone looks identical, they cannot tell you apart. That is what Mullvad Browser does to your browser's fingerprint.</div></div>

      <h2>Hardened defaults, not optional settings</h2>
      <p>Most privacy browsers give you settings you can toggle. Mullvad Browser applies hardened defaults and does not encourage you to change them. This is intentional — every deviation from the defaults makes your browser slightly more unique and easier to fingerprint. The philosophy is: the defaults are the feature.</p>
      <p>uBlock Origin is installed out of the box in its most effective mode, blocking ads, trackers, and malicious domains.</p>

      <h2>Audited and transparent</h2>
      <p>Cure53, a respected German security firm, audited Mullvad Browser in 2023. The audit found no critical issues. The full source code is available and the browser is built on Mozilla Firefox's codebase, which itself is one of the most scrutinised browser codebases in the world.</p>

      <h2>Verdict</h2>
      <p>Mullvad Browser is the most privacy-protective mainstream browser available. It is the right tool when you want to browse without being identified — especially when combined with a trustworthy VPN. If you are serious about anti-tracking, this replaces Chrome, Edge, or even regular Firefox.</p>
    `
  };
