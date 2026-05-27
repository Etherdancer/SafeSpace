export default {
  id: 'lynis',
  website: 'https://cisofy.com/lynis/',
  index: 228,
  name: 'Lynis',
  tagline: 'Scan your Linux system for security weaknesses.',
  category: 'Security Audit',
  scores: {
    dataPrivacy: 22,
    security: 26,
    tracking: 18,
    userControl: 9,
    transparency: 9,
    total: 84
  },
  platforms: ['Linux', 'macOS'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'CISOfy / community review',
  relatedArticles: [],
  verdict: 'Lynis is the easiest way to find out how hardened your Linux or macOS system actually is.',
  pros: [
    'Runs without installation — a single script that checks hundreds of security items',
    'Works on Linux and macOS with no agent or daemon required',
    'Produces a detailed report with actionable recommendations',
    'Widely used in professional security assessments',
  ],
  cons: [
    'Enterprise features (compliance reports, CI/CD integration) require a paid licence',
    'Tells you what is wrong but does not fix things for you',
    'Output can be overwhelming without security knowledge to interpret it',
  ],
  content: `
    <h2>Why Lynis?</h2>
    <p>You might think your Linux system is secure. Lynis will tell you whether you are right. It is a security auditing tool — a script that checks your system against hundreds of best-practice rules and tells you what is misconfigured, missing, or out of date.</p>
    <p>It takes about ten minutes to run and produces a report with a hardening index score, a list of warnings, and specific suggestions for improvement. No guessing required.</p>

    <h2>How it works</h2>
    <p>Lynis is a shell script. You download it and run it with root privileges on the machine you want to audit. It does not install anything permanent. It does not send your data anywhere. It just runs a battery of checks and writes the results to your terminal and a log file.</p>
    <p>It checks things like: which services are running and whether they need to be, whether SSH is configured securely, whether file permissions are correct, whether kernel hardening options are enabled, and whether outdated packages are installed.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Lynis is like a checklist that your computer fills out about itself. It looks at hundreds of settings and tells you which ones leave a door open — and what to do about it. Your data never leaves your machine.</div></div>

    <h2>The hardening index</h2>
    <p>At the end of the scan, Lynis gives your system a score out of 100 called the hardening index. This is not a grade — it is a starting point. A freshly installed system typically scores between 55 and 65. A well-hardened production server might reach 85 or above.</p>
    <p>The score improves as you act on the suggestions. Lynis shows you exactly which changes would raise it.</p>

    <h2>Enterprise vs community</h2>
    <p>Lynis is free and open source. CISOfy, the company behind it, sells Lynis Enterprise — which adds scheduled scans, a web dashboard, compliance reporting, and support. The free version does everything you need for personal use and most professional audits. The enterprise tier is for teams managing many systems at once.</p>
  `
};
