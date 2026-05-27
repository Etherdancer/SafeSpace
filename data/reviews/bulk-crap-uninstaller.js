export default {
    id: 'bulk-crap-uninstaller',
    website: 'https://www.bcuninstaller.com/',
    index: 246,
    name: 'Bulk Crap Uninstaller',
    tagline: 'Rip out Windows bloatware, roots and all.',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 18,
      security: 17,
      tracking: 15,
      userControl: 10,
      transparency: 9,
      total: 69
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'The most thorough uninstaller available for Windows — essential for removing bloatware and apps that leave tracking leftovers behind.',
    pros: [
      'Fully open source under the Apache 2.0 licence',
      'Detects and removes apps that do not appear in Add/Remove Programs',
      'Scans for and cleans leftover files, registry keys, and folders after uninstall',
      'Handles thousands of apps in bulk without user interaction',
      'Supports silent uninstalls for automated clean-ups',
      'Free with no nags or upsells',
    ],
    cons: [
      'Interface can be overwhelming at first glance',
      'Windows only',
      'Aggressive leftover cleanup can occasionally remove wanted files if not reviewed',
      'Not independently audited',
    ],
    content: `
      <h2>Why Bulk Crap Uninstaller?</h2>
      <p>When you uninstall an app on Windows, it rarely goes completely. Most apps leave behind registry entries, config folders, cached data, and sometimes small background services. Over time these leftovers accumulate. Some of them include tracking components that continue running even after the app is nominally gone.</p>
      <p>Bulk Crap Uninstaller, or BCUninstaller, was built to fix this. It finds every installed app — including ones Windows hides from its own control panel — and removes them thoroughly, then scans for and deletes what they left behind.</p>

      <h2>How it works</h2>
      <p>BCUninstaller queries multiple sources to build its app list: the Windows registry uninstall keys, Windows Store app APIs, Steam, Chocolatey, and direct folder scanning. When you uninstall an app, it runs the standard uninstaller and then performs a before-and-after comparison of the registry and filesystem to identify orphaned entries, which it offers to clean up.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of it as hiring a very thorough cleaner. A normal uninstall is like moving furniture out — BCUninstaller also sweeps under where the furniture was and throws away everything that was hiding there.</div></div>

      <h2>Privacy angle</h2>
      <p>Bloatware is a privacy problem, not just a performance one. Pre-installed apps often run background telemetry, connect to ad networks, or log usage data. BCUninstaller makes it easy to remove dozens of these apps in one session without clicking through individual uninstallers. The leftover scanner catches tracking components that a normal uninstall would miss.</p>
      <p>It is particularly useful on fresh Windows installs, where Microsoft and OEM manufacturers pre-install apps you never agreed to.</p>

      <h2>Open source and honest</h2>
      <p>BCUninstaller's full source code is on GitHub under Apache 2.0. It has no telemetry, no bundled software, and no update phone-home. The developer, Marcin Szeniak, has maintained it consistently for years.</p>

      <h2>Verdict</h2>
      <p>Bulk Crap Uninstaller is the best free Windows uninstaller available. Its ability to catch hidden apps and leftover components makes it a privacy tool as much as a maintenance tool. Run it on any new Windows install before you do anything else.</p>
    `
  };
