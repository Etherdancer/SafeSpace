export default {
  id: 'shelter',
  website: 'https://gitea.angry.im/PeterCxy/Shelter',
  index: 215,
  name: 'Shelter',
  tagline: 'Sandbox untrusted apps in a separate Android profile.',
  category: 'Privacy Tools',
  scores: {
    dataPrivacy: 26,
    security: 27,
    tracking: 18,
    userControl: 9,
    transparency: 9,
    total: 89
  },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'A clever way to isolate untrustworthy apps using Android\'s built-in Work Profile feature — no root, no special hardware required.',
  pros: [
    'Isolates apps in a separate Android Work Profile',
    'Isolated apps cannot access your main profile\'s contacts, files, or data',
    'No root required — uses a built-in Android feature',
    'Open source and available on F-Droid',
    'Can freeze apps in the work profile when not in use',
  ],
  cons: [
    'Work Profile apps run from a separate Google account space — if you use Google, this still involves Google infrastructure',
    'Not a substitute for a full de-Googled ROM',
    'Some apps detect the Work Profile environment and refuse to run',
    'Isolated apps still have internet access by default',
  ],
  content: `
    <h2>Why Shelter?</h2>
    <p>Some apps are useful but untrustworthy. A banking app you need for work. A messaging app your family uses that is packed with trackers. You want them on your phone but you do not want them reading your contacts, browsing your photos, or knowing what other apps you have installed.</p>
    <p>Shelter puts those apps in a box — a separate Android Work Profile — that is isolated from the rest of your phone.</p>

    <h2>How it works</h2>
    <p>Android has a built-in feature called Work Profile, designed for businesses to separate work apps from personal ones. Shelter uses this same mechanism for privacy. Apps installed in the Work Profile cannot see your main profile's contacts, files, or installed apps. They run in a completely separate user space with their own storage and permissions.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine your phone is a house with two completely separate apartments. Apps in the work profile live in apartment B. They can hear noise from apartment A, but they cannot walk in, look in the cupboards, or read your mail. The front door is permanently locked between them.</div></div>

    <h2>Freezing apps</h2>
    <p>Shelter can freeze apps in the Work Profile. A frozen app cannot run in the background, cannot receive notifications, and cannot phone home. You thaw it when you need it and freeze it again when you are done. This is a good way to handle apps that run constant background tracking.</p>

    <h2>This is not perfect isolation</h2>
    <p>The Work Profile is real isolation — but it is not perfect. Both profiles share the same Android kernel and hardware. A very sophisticated exploit could potentially escape the sandbox. Shelter is also not a substitute for not installing untrustworthy apps at all. Think of it as reducing risk, not eliminating it.</p>

    <h2>Verdict</h2>
    <p>Shelter is a smart, practical tool for anyone who needs to run apps they do not fully trust. It uses an Android feature that already exists — Shelter just makes it easy to use for privacy rather than corporate IT policy. Free, open source, and no root required.</p>
  `
};
