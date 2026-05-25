export default {
    id: 'firefox',
    website: 'https://www.mozilla.org/firefox/',
    index: 7,
    name: 'Firefox (Privacy Hardened)',
    tagline: 'The open web\'s browser — and the most configurable',
    category: 'Browsers',
    scores: {
      dataPrivacy: 26,
      security: 27,
      tracking: 17,
      userControl: 9,
      transparency: 10,
      total: 89
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Mozilla internal security team; community audits',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'privacy-vs-convenience'],
    verdict: 'Firefox is the only major browser not built on Google\'s Chromium. With a few settings changes and uBlock Origin installed, it\'s one of the strongest privacy browsers available.',
    pros: [
      'The only mainstream browser independent of Google\'s Chromium',
      'Excellent privacy settings including built-in fingerprinting resistance',
      'Full support for uBlock Origin (including future-proof on Manifest V3)',
      'Completely open source, developed by Mozilla non-profit',
      'Highly customisable for both beginners and advanced users',
    ],
    cons: [
      'Requires some configuration to reach its privacy potential',
      'Some websites are optimised for Chrome and work slightly worse in Firefox',
      'Mobile version less polished than Brave on iOS',
    ],
    content: `
      <h2>Why Firefox Matters</h2>
      <p>There is a quiet monopoly forming in web browsers. Chrome, Edge, Brave, Opera, and Samsung Internet are all built on the same Google-developed codebase called Chromium. When Google decides how that codebase works, it affects the vast majority of browser users. Firefox is the significant holdout — it's built on a completely independent codebase (called Gecko) developed by the non-profit Mozilla Foundation.</p>
      <p>This matters for privacy because Google controls what Chromium-based browsers can and cannot do. For example, Google is deliberately limiting how content blockers like uBlock Origin work in Chrome. Firefox is not subject to this — it supports full-powered content blocking indefinitely.</p>

      <h2>Privacy Settings to Enable</h2>
      <p>Out of the box, Firefox is decent. With a few changes, it becomes excellent:</p>
      <ol>
        <li><strong>Type <code>about:config</code> in the address bar</strong> and accept the warning. This is Firefox's advanced settings panel — it won't break anything if you follow these exact steps.</li>
        <li>Search for <code>privacy.resistFingerprinting</code> and double-click to set it to <strong>true</strong>. This makes Firefox report standardised, generic values for fingerprinting vectors — you look like thousands of other Firefox users instead of a unique individual.</li>
        <li>Search for <code>privacy.fingerprintingProtection</code> and set it to <strong>true</strong>.</li>
        <li>Search for <code>geo.enabled</code> and set it to <strong>false</strong>. This disables location sharing.</li>
        <li>In regular Settings (not about:config): go to <strong>Privacy &amp; Security</strong>, set Enhanced Tracking Protection to <strong>Strict</strong>.</li>
        <li>Set DNS over HTTPS to <strong>Max Protection</strong> and choose <strong>Mullvad</strong> as the provider.</li>
      </ol>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>With <code>privacy.resistFingerprinting</code> turned on, Firefox lies to websites about your device. Instead of showing your real screen size, your real fonts, and your real system details, it shows generic values shared by thousands of other Firefox users. You blend into a crowd instead of standing out. Under the hood, Firefox spoofs or suppresses canvas rendering, timezone, locale, screen resolution, and user agent string — returning standardised values instead of your real device details.</div></div>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you go to a website, your browser first has to "look up" the address — like checking a phone book. Normally this lookup is visible to your internet provider. With DNS over HTTPS turned on, that lookup is encrypted and your provider can't see it. DNS over HTTPS (DoH) encrypts these queries so your ISP cannot see or log which sites you visit based on them.</div></div>

      <h2>Install uBlock Origin</h2>
      <p>Go to addons.mozilla.org and search for "uBlock Origin." Install it. In the uBlock Origin settings, enable the "EasyPrivacy" and "uBlock filters – Privacy" filter lists. This blocks thousands of tracking scripts that Firefox's built-in protections don't catch.</p>

      <h2>Firefox on Mobile</h2>
      <p>Firefox for Android supports extensions, including uBlock Origin — making it the only mobile browser with full extension support. Install Firefox from the Play Store, then go to the browser menu &gt; Add-ons and install uBlock Origin. iPhone Firefox supports fewer extensions but still provides better privacy than Safari or Chrome by default.</p>

      <h2>Verdict</h2>
      <p>Firefox with the settings above and uBlock Origin installed is one of the most private mainstream browsers available. It takes about 15 minutes to configure and then works automatically. We particularly recommend it for users who want to keep Google's code out of their browser entirely.</p>
    `
  };
