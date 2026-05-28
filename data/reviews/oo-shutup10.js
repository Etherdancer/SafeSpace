export default {
    id: 'oo-shutup10',
    website: 'https://www.oo-software.com/en/shutup10',
    index: 240,
    name: 'O&O ShutUp10++',
    tagline: 'Flip Windows privacy switches without the guesswork.',
    category: 'Telemetry Blocker',
    scores: {
      dataPrivacy: 20,
      security: 27,
      tracking: 16,
      userControl: 9,
      transparency: 6,
      total: 78
    },
    externalScores: {
      appStore: 4.2,
      playStore: 3.8,
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'A quick and practical way to turn off Windows tracking, though closed source means you have to take it on trust.',
    pros: [
      'Hundreds of privacy settings in one place',
      'No installation needed — runs as a portable .exe',
      'Built-in setting descriptions explain what each toggle does',
      'Recommended presets make it accessible for beginners',
      'Free, no account required',
    ],
    cons: [
      'Closed source — you cannot inspect the code',
      'Windows only',
      'Some settings need reapplying after major Windows updates',
      'No automatic re-application of settings',
    ],
    content: `
      <h2>Why O&O ShutUp10++?</h2>
      <p>Windows ships with dozens of telemetry features turned on by default. Telemetry means Windows quietly sends data about your habits, hardware, and usage back to Microsoft. Most users never touch these settings because they are buried deep in menus.</p>
      <p>ShutUp10++ collects all of those settings into one window. You see every toggle, what it does, and whether it is on or off. You can flip them individually or apply a recommended set all at once.</p>

      <h2>How it works</h2>
      <p>ShutUp10++ reads and writes Windows registry values and Group Policy settings. These are the same switches that Microsoft itself uses to control telemetry in enterprise environments. The tool is not doing anything exotic — it is just changing settings that already exist in your copy of Windows.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of it like a master remote control for Windows privacy. All the buttons already existed — ShutUp10++ just puts them in one place so you do not have to hunt for each one yourself.</div></div>

      <h2>What it covers</h2>
      <p>Settings include: disabling Cortana, turning off advertising IDs, blocking telemetry data uploads, stopping app activity tracking, disabling location services, and more. Each setting comes with a short description and a colour-coded recommendation — green means generally safe to disable, yellow means use caution.</p>
      <p>You can export your settings as a backup and re-import them after a Windows update.</p>

      <h2>The closed-source problem</h2>
      <p>ShutUp10++ is free and well-regarded, but the source code is not public. You cannot verify exactly what the executable does. For a tool that touches sensitive system settings, this matters. The developer, O&O Software, is a German company with a long track record, which provides some reassurance — but it is not the same as being able to read the code yourself.</p>
      <p>If you need an open-source alternative, WinUtil or W10Privacy are worth comparing.</p>

      <h2>Verdict</h2>
      <p>ShutUp10++ is one of the easiest ways to harden Windows privacy settings. It is portable, free, and beginner-friendly. The closed-source nature is a real limitation for privacy-conscious users who want full transparency. For most people though, it is a solid first step toward reducing what Windows reports about you.</p>
    `
  };
