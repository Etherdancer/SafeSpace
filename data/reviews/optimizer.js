export default {
    id: 'optimizer',
    website: 'https://github.com/hellzerg/optimizer',
    index: 243,
    name: 'Optimizer',
    tagline: 'Strip Windows bloat and lock down privacy in minutes.',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 97
    },
    externalScores: {
      appStore: 4.7,
      playStore: 4.5,
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A clean, open-source Windows optimiser that balances privacy hardening with usability, well suited to users who want results without complexity.',
    pros: [
      'Fully open source on GitHub',
      'Portable — no installation required',
      'Covers privacy, performance, and bloatware removal in one tool',
      'Supports Windows 7 through Windows 11',
      'Multilingual interface',
      'Lightweight — no background processes',
    ],
    cons: [
      'Some aggressive settings can affect Windows functionality',
      'Windows only',
      'No automatic setting restoration after Windows updates',
      'Community-reviewed but not formally audited',
    ],
    content: `
      <h2>Why Optimizer?</h2>
      <p>Optimizer by hellzerg is a portable, open-source tool that bundles Windows privacy hardening and bloatware removal in a single lightweight executable. It covers similar ground to WinUtil and ShutUp10++ but with a notably clean interface and broad Windows version support — it works on everything from Windows 7 to Windows 11.</p>
      <p>Because it is open source, every change it makes to your system is documented in public code you can read yourself.</p>

      <h2>How it works</h2>
      <p>Optimizer applies changes by writing to the Windows registry, toggling Windows services, and removing pre-installed applications via PowerShell or built-in Windows APIs. Each section of the tool corresponds to a category of settings — privacy, performance, system, network — and you can apply or undo changes individually.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Optimizer is like a car service for Windows. It turns off things running in the background that you never asked for, so your computer is doing what you want — not what Microsoft wants.</div></div>

      <h2>What it covers</h2>
      <p>Privacy settings include disabling telemetry, activity history, advertising ID, Cortana, and Windows Search cloud sync. It can also disable Windows Defender's cloud reporting (though you should consider the security trade-off there), remove pre-installed apps, clean up startup entries, and turn off background app activity.</p>
      <p>A separate performance section handles unrelated speed tweaks, keeping the privacy options easy to find and apply independently.</p>

      <h2>Open source and portable</h2>
      <p>The GitHub repository shows the full source code and a clear changelog. Being portable means you can run it from a USB drive and leave no trace on the machine. This also makes it useful for setting up a new Windows install quickly.</p>
      <p>No account is needed, nothing is phoned home, and the tool collects no data about your system or usage.</p>

      <h2>Verdict</h2>
      <p>Optimizer is a well-maintained, transparent tool that covers privacy, performance, and bloat in one go. The open-source code and portable format make it easy to trust. It is a strong choice for anyone who wants a quick but thorough Windows clean-up without spending hours in menus.</p>
    `
  };
