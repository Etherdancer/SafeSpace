export default {
  id: 'f-droid',
  website: 'https://f-droid.org',
  index: 209,
  name: 'F-Droid',
  tagline: 'App store for open-source Android apps only.',
  category: 'App Store',
  scores: {
    dataPrivacy: 28,
    security: 24,
    tracking: 20,
    userControl: 9,
    transparency: 10,
    total: 91
  },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review; reproducible builds for many apps',
  relatedArticles: [],
  verdict: 'The gold standard for privacy-respecting Android apps — every app is open source and scanned for tracking before it is listed.',
  pros: [
    'Only lists open-source apps — you can always check the code',
    'Scans apps for known trackers and flags them clearly',
    'No account, no login, no personal data required',
    'Supports reproducible builds — apps can be verified against their source code',
  ],
  cons: [
    'Much smaller app catalogue than Google Play',
    'App updates can lag behind the developer\'s own releases',
    'The main F-Droid client is not the fastest or slickest experience',
    'Third-party repos (repositories) vary in quality and trustworthiness',
  ],
  content: `
    <h2>Why F-Droid?</h2>
    <p>Every app in Google Play is a black box. You cannot read its code. You have to trust that it does what it says. F-Droid takes a different approach: it only lists apps whose source code is publicly available. If an app on F-Droid has trackers, it says so right on the app's page.</p>
    <p>No account required. No tracking. Just apps.</p>

    <h2>How it works</h2>
    <p>F-Droid maintains a catalogue of open-source Android apps. When you install an app from F-Droid, you are downloading a version that F-Droid built from the public source code — not necessarily the developer's own binary. This means F-Droid can verify the code matches what was published. Many apps also support reproducible builds, which means you can verify the installed binary matches the source code yourself.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Google Play is like a shop where the products come in sealed boxes with no ingredient list. F-Droid is a shop where every product has a full list of ingredients on the front, and the shop staff checked those ingredients themselves before putting the item on the shelf.</div></div>

    <h2>The Anti-Features system</h2>
    <p>F-Droid marks apps with "Anti-Features" — honest labels for things that might concern you. Labels include: Ads, Tracking, Non-Free Network Services, Non-Free Dependencies, and more. You see these before you install. No other app store does this.</p>

    <h2>Third-party repositories</h2>
    <p>You can add third-party repositories to F-Droid to access apps not in the official catalogue. Some developers publish their own F-Droid repo. The quality and trustworthiness of these repos varies — you are extending your trust to whoever runs them. Stick to well-known repos, and only add ones from developers you already trust.</p>

    <h2>Verdict</h2>
    <p>F-Droid is the most privacy-respecting Android app store that exists. The app catalogue is smaller than Google Play, and the update speed is sometimes slower — but every app is open source, every tracker is disclosed, and you never have to hand over a Google account to use it.</p>
  `
};
