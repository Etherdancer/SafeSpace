export default {
  id: 'trackercontrol',
  website: 'https://trackercontrol.org',
  index: 213,
  name: 'TrackerControl',
  tagline: 'See and block trackers hiding inside your Android apps.',
  category: 'Privacy Tools',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.7,
    },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Academic project — developed with Oxford Internet Institute research',
  relatedArticles: [],
  verdict: 'Exceptional for understanding which trackers are hiding in your apps, with real blocking capability and serious academic credibility behind it.',
  pros: [
    'Identifies trackers inside your apps by name and company',
    'Blocks tracker connections in real time',
    'Based on academic research — the tracker database is well-maintained',
    'No root required',
    'Open source and available on F-Droid',
  ],
  cons: [
    'Uses the Android VPN slot — cannot run alongside another VPN',
    'Tracker detection may not catch all trackers, especially obfuscated ones',
    'No iOS version',
    'Less actively developed compared to RethinkDNS',
  ],
  content: `
    <h2>Why TrackerControl?</h2>
    <p>You installed a flashlight app. Did you know it might be sending data to Facebook, Google, and five data brokers every time you open it? TrackerControl shows you exactly that — which trackers are inside your apps, who they belong to, and what they are trying to do.</p>
    <p>It also blocks them.</p>

    <h2>How it works</h2>
    <p>TrackerControl uses a local VPN — no root needed — to intercept all traffic from your apps. It compares outgoing connections against a database of known tracker domains, CDNs, and analytics endpoints. When a connection matches a known tracker, TrackerControl shows you and can block it. The tracker database comes from academic research into mobile tracking, including work published by the Oxford Internet Institute.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine your apps are employees in a building, and TrackerControl is a security guard watching who they call. When an app dials a known surveillance company, the guard logs it and can hang up the phone before the call connects.</div></div>

    <h2>Named trackers, named companies</h2>
    <p>Most firewall apps show you blocked domains. TrackerControl goes further — it tells you the tracker name and the company behind it. You can see "Facebook Analytics SDK" or "Google Crashlytics" rather than just a raw domain. That context makes it much easier to understand what is actually happening inside your apps.</p>

    <h2>Academic roots</h2>
    <p>TrackerControl grew out of privacy research at the University of Oxford. That background shows in the depth and quality of its tracker database. The project takes tracking seriously as a research subject, not just a marketing angle. The code and database methodology are public.</p>

    <h2>Verdict</h2>
    <p>TrackerControl is one of the most informative privacy tools on Android. If you want to understand the scale of tracking inside the apps you already use, install this and spend ten minutes looking at the logs. It is eye-opening. For pure blocking power, RethinkDNS has more features — but for visibility and education, TrackerControl is exceptional.</p>
  `
};
