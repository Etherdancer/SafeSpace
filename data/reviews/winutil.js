export default {
    id: 'winutil',
    website: 'https://christitustech.github.io/winutil/',
    index: 241,
    name: 'WinUtil',
    tagline: 'One PowerShell command to debloat and harden Windows.',
    category: 'Telemetry Blocker',
    scores: {
      dataPrivacy: 21,
      security: 18,
      tracking: 17,
      userControl: 9,
      transparency: 9,
      total: 74
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A powerful, open-source Windows hardening tool that gives technically confident users precise control over bloat and telemetry.',
    pros: [
      'Fully open source — code is public on GitHub',
      'Covers tweaks, app installation, and Windows repair tools',
      'Active community development with frequent updates',
      'No installer needed — runs directly from PowerShell',
      'Microwin feature lets you build a stripped-down Windows ISO',
    ],
    cons: [
      'Command-line entry point puts off less technical users',
      'Wide scope means mistakes can break system behaviour',
      'Some tweaks may not survive major Windows updates',
      'Windows only',
    ],
    content: `
      <h2>Why WinUtil?</h2>
      <p>Chris Titus Tech's WinUtil started as a personal script and grew into a community project used by millions. It tackles the same problem as other Windows debloaters — too much bloatware and too many telemetry settings turned on by default — but it does it in a single, open PowerShell script you can read line by line.</p>
      <p>Because the code is public, anyone can check exactly what it does before running it. That transparency is rare and valuable for a tool that makes system-level changes.</p>

      <h2>How it works</h2>
      <p>WinUtil is a PowerShell script that modifies registry keys, disables scheduled tasks, removes pre-installed apps via winget or DISM, and applies Group Policy changes. You launch a graphical interface by running one command in an elevated PowerShell window.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Running one command downloads and launches the script from GitHub. You get a GUI full of checkboxes — pick what you want to change and hit apply. It is basically a control panel that Microsoft forgot to include.</div></div>

      <h2>What it covers</h2>
      <p>The Tweaks tab disables telemetry, removes OneDrive, turns off Cortana, and blocks advertising IDs. The Install tab lets you install privacy-friendly apps in bulk using winget. There is also a Repair section for fixing broken Windows components, and the MicroWin feature lets you build a lean custom Windows ISO with bloat stripped out at the source.</p>

      <h2>Open source matters here</h2>
      <p>Because WinUtil is open source and hosted on GitHub, you can read every line before running it. The community actively reviews pull requests, which means bad code is likely to be spotted and rejected. This makes it one of the more trustworthy options in the Windows debloating space.</p>
      <p>That said, PowerShell scripts that touch system settings carry real risk if something goes wrong. Create a restore point before running any debloater.</p>

      <h2>Verdict</h2>
      <p>WinUtil is the gold standard for open-source Windows hardening. It covers more ground than most dedicated tools and the public code means you know what you are getting. It rewards users who are comfortable with PowerShell but remains usable for anyone willing to follow basic setup instructions.</p>
    `
  };
