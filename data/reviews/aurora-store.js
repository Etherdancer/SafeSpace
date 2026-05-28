export default {
  id: 'aurora-store',
  website: 'https://auroraoss.com',
  index: 210,
  name: 'Aurora Store',
  tagline: 'Download Google Play apps without a Google account.',
  category: 'App Store',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'Aurora Store lets you access Google Play anonymously — useful for getting apps not on F-Droid, but apps themselves may still contain trackers.',
  pros: [
    'Access Google Play without a Google account',
    'Anonymous login option — no personal identity required',
    'Shows tracker and permission details before you install',
    'Open source client',
  ],
  cons: [
    'Apps downloaded are still Google Play binaries — they may contain trackers',
    'Anonymous sessions are shared and can be revoked by Google',
    'Does not verify apps against source code like F-Droid does',
    'Some features and paid apps require a real Google account',
  ],
  content: `
    <h2>Why Aurora Store?</h2>
    <p>If you are running a de-Googled Android — like CalyxOS or LineageOS — you do not have Google Play. But some apps you need are only available there. Aurora Store lets you download them without handing Google your identity.</p>
    <p>Think of it as a privacy-respecting front door to Google's app catalogue.</p>

    <h2>How it works</h2>
    <p>Aurora Store communicates with Google Play's backend using anonymised sessions. You can log in anonymously — Aurora generates a temporary account that has no personal information attached. You browse and download apps just like Google Play, but Google does not know it is you.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine Google Play is a shop that knows your face and tracks everything you buy. Aurora Store sends in a stranger on your behalf — the stranger picks up your app and hands it to you outside. The shop gets a sale, but it never saw you.</div></div>

    <h2>The apps themselves still carry trackers</h2>
    <p>This is the key limitation. Aurora Store downloads the exact same app binaries as Google Play. Those apps may contain advertising SDKs, analytics libraries, or tracking code. Aurora makes it easier to see what trackers an app contains — it shows you before you install — but it cannot remove them. If privacy matters, still prefer F-Droid apps when a good open-source alternative exists.</p>

    <h2>Anonymous sessions and reliability</h2>
    <p>Anonymous login sessions are shared across Aurora users and maintained by the community. Google periodically blocks these sessions. When that happens, downloads may fail until new sessions are established. It is generally reliable, but it is not as stable as having a proper Google account.</p>

    <h2>Verdict</h2>
    <p>Aurora Store is a practical tool for de-Googled Android users who occasionally need an app from Google Play. It removes the need for a Google account, which is a real privacy win. Just remember that the apps themselves are still Google Play builds — use F-Droid first, and fall back to Aurora when you have no other option.</p>
  `
};
