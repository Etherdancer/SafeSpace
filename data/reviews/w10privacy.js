export default {
    id: 'w10privacy',
    website: 'https://www.w10privacy.de/english-home/',
    index: 242,
    name: 'W10Privacy',
    tagline: 'Deep Windows privacy control for power users.',
    category: 'Telemetry Blocker',
    scores: {
      dataPrivacy: 27,
      security: 27,
      tracking: 19,
      userControl: 9,
      transparency: 6,
      total: 88
    },
    externalScores: {
      appStore: 4.5,
      playStore: 4.6,
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'An exhaustive Windows privacy tool with more settings than most rivals, but the closed source limits how much you can trust it.',
    pros: [
      'Over 400 individual privacy settings',
      'Covers Windows 10 and Windows 11',
      'Hosts file integration blocks tracking domains at the network level',
      'Scheduled task manager lets you disable telemetry tasks directly',
      'Settings categorised for easier navigation',
    ],
    cons: [
      'Closed source — code cannot be verified',
      'Free version has some limitations; full version requires donation',
      'Steep learning curve for beginners',
      'Windows only',
      'Not independently audited',
    ],
    content: `
      <h2>Why W10Privacy?</h2>
      <p>W10Privacy aims to be the most comprehensive Windows privacy tool available. Where ShutUp10++ offers a streamlined experience, W10Privacy goes deeper — exposing settings that most tools do not touch, including Windows scheduled tasks that run silently in the background and hosts file rules that block Microsoft tracking domains entirely.</p>
      <p>It is aimed at users who want granular control and are willing to spend time understanding what each setting does.</p>

      <h2>How it works</h2>
      <p>W10Privacy modifies Windows registry entries, disables or removes scheduled tasks via the Task Scheduler API, and can write blocking rules to the system hosts file. The hosts file approach works by redirecting known tracking domains to a dead end, so Windows cannot phone home even if a setting slips through.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>The hosts file is like a local address book your computer checks before going on the internet. W10Privacy adds fake addresses for Microsoft tracking servers — so when Windows tries to send data, it gets a busy signal and gives up.</div></div>

      <h2>What it covers</h2>
      <p>Settings span telemetry uploads, diagnostic data, advertising IDs, Cortana, Windows Search cloud integration, app permissions (camera, microphone, location), background app activity, and more. The scheduled task section is particularly useful — many telemetry processes run on a timer, and disabling the tasks stops them at the source.</p>
      <p>A hosts file module adds domain-level blocking as a second layer of protection.</p>

      <h2>The closed-source caveat</h2>
      <p>Like ShutUp10++, W10Privacy does not publish its source code. The developer is a German individual with a long history of maintaining the tool, but you cannot independently verify what the executable does. For a tool with system-level access, this is a meaningful limitation.</p>
      <p>If code transparency is important to you, consider WinUtil instead.</p>

      <h2>Verdict</h2>
      <p>W10Privacy offers more knobs and levers than almost any other Windows privacy tool. If you want deep coverage and are comfortable with a closed-source application, it is hard to beat. The hosts file integration is a genuine advantage. But for users who need to verify what software does before running it, the lack of open source remains a dealbreaker.</p>
    `
  };
