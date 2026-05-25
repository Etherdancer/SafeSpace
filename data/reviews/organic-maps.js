export default {
    id: 'organic-maps',
    website: 'https://organicmaps.app',
    index: 11,
    name: 'Organic Maps',
    tagline: 'Offline maps with no tracking, no account, no ads',
    category: 'Maps',
    scores: {
      dataPrivacy: 30,
      security: 25,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 95
    },
    platforms: ['iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; based on OpenStreetMap',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The best privacy-respecting map app available. Works completely offline, requires no account, and tracks nothing. Navigation quality is excellent for everyday use.',
    pros: [
      'Completely offline — download maps for your region and use them anywhere',
      'No account, no tracking, no ads, no data collection of any kind',
      'Walking, cycling, and driving navigation all work well',
      'Based on OpenStreetMap — one of the most detailed map datasets in the world',
      'Free and open source',
    ],
    cons: [
      'Public transit directions less comprehensive than Google Maps',
      'Satellite view not available — only vector maps',
      'Real-time traffic data not available',
      'Some very rural areas have less detail than Google Maps',
    ],
    content: `
      <h2>Why Not Google Maps?</h2>
      <p>Google Maps is one of the most sophisticated location data collection tools ever built. When you use Google Maps with a Google account, it builds a permanent timeline of everywhere you've been. Even without an account, it tracks your movements via your device's IP address and unique identifiers. Google has been caught collecting location data even when users explicitly disabled it.</p>
      <p>Organic Maps collects nothing. There are no servers your location data goes to. The app works entirely from maps you've downloaded to your device. When you navigate somewhere, that journey is never recorded anywhere except possibly your own phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Once you've downloaded the map for your area, Organic Maps works with no internet at all. Your phone figures out where you are and how to get there entirely by itself — nothing is sent anywhere, and no one knows where you went. The app makes zero network requests during navigation: all routing is computed on-device using downloaded vector map tiles, with no analytics SDK, no advertising SDK, and no telemetry.</div></div>

      <h2>How Good Are the Maps?</h2>
      <p>Organic Maps is built on <strong>OpenStreetMap</strong> — a collaborative map of the world built by volunteers, similar in concept to Wikipedia. In cities and towns across Europe, North America, and most urban areas globally, OpenStreetMap data is excellent and often more detailed than Google Maps for things like footpaths, cycle routes, and local businesses. In rural areas and some developing regions, coverage is thinner.</p>
      <p>For everyday navigation in cities — getting from A to B, finding a restaurant, navigating on a walk or cycle ride — Organic Maps works beautifully.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Search "Organic Maps" in the App Store (iPhone) or Google Play Store (Android). Install it.</li>
        <li>Open the app. It will show you a list of regions to download. Tap your country or your specific region/state.</li>
        <li>Tap Download. The map file downloads over your WiFi connection and is stored on your device. A country the size of the UK is about 500MB; a single city is much smaller.</li>
        <li>Once downloaded, you don't need an internet connection for navigation. The app works entirely offline.</li>
        <li>To navigate: tap the search bar, type an address or place name, tap the result, then tap the arrow button to start navigation. Choose your mode (walking, cycling, driving) from the icons.</li>
      </ol>

      <h2>When to Still Use Google Maps</h2>
      <p>Organic Maps doesn't have real-time traffic data, so it can't suggest routes based on current congestion. For cross-country driving where traffic matters, you might still want a navigation app with live traffic. You can use Organic Maps for ordinary navigation and occasionally consult another service for live traffic — without being logged in to a Google account.</p>

      <h2>Verdict</h2>
      <p>Organic Maps is the clear recommendation for anyone who wants maps without surveillance. It works offline, requires nothing from you, and navigation quality is genuinely excellent for everyday use. Switch your default maps app today.</p>
    `
  };
