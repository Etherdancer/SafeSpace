export default {
    id: 'o-o-shutup10',
    website: 'https://www.oo-software.com/en/shutup10',
    index: 240,
    name: 'O&O ShutUp10++',
    tagline: 'Easily turn off Windows telemetry and tracking',
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
    verdict: 'The easiest, most user-friendly way to stop Windows 10 and 11 from sending your data to Microsoft.',
    pros: [
      'Incredibly easy to use — just click "Apply recommended settings"',
      'Portable app (no installation required)',
      'Explains exactly what every setting does before you change it'
    ],
    cons: [
      'Not open-source',
      'Microsoft updates can sometimes reset these settings, so you must run it periodically'
    ],
    content: `
      <h2>Why O&O ShutUp10++?</h2>
      <p>Windows 10 and 11 act like giant data vacuums. Out of the box, they record what you type, how you use your computer, your location, and more, sending it all back to Microsoft. Finding all these hidden off-switches in the Windows menus is nearly impossible. This tool puts all the switches in one simple list.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> The tool edits the Windows Registry and Group Policy configurations to forcefully disable telemetry services, Cortana, and background tracking APIs. <br><b>Plain English:</b> It goes deep into the computer's hidden settings files and manually cuts the wires connecting your data to Microsoft's servers.</div></div>

      <h2>How it works</h2>
      <p>When you open the app, you'll see a long list of privacy settings. The best feature is the "Actions" menu at the top. You can simply click "Apply only recommended settings," and the app will instantly turn off the worst tracking features without breaking anything important on your computer.</p>
      
      <h2>Safe and Reversible</h2>
      <p>Before it makes any changes, it asks you to create a "System Restore Point." If turning off a setting accidentally breaks a feature you actually wanted to use, you can easily click a button to put everything back to exactly how it was.</p>
    `
  };
