export default {
  id: 'iverify',
  website: 'https://iverify.io',
  index: 204,
  name: 'iVerify',
  tagline: 'Detect spyware and Pegasus on your iPhone.',
  category: 'Privacy Tools',
  scores: {
    dataPrivacy: 22,
    security: 25,
    tracking: 15,
    userControl: 7,
    transparency: 5,
    total: 74
  },
  platforms: ['iOS'],
  pricing: 'Paid',
  openSource: false,
  auditedBy: 'Not independently audited',
  relatedArticles: [],
  verdict: 'A serious threat-detection tool for high-risk users, but it is closed source, costs money, and requires trusting iVerify with device diagnostics.',
  pros: [
    'Can detect signs of Pegasus and other advanced spyware',
    'Useful for journalists, activists, and others at high risk',
    'Provides security hardening guides and threat alerts',
    'Regular threat intelligence updates',
  ],
  cons: [
    'Closed source — you cannot verify what it does with your data',
    'Paid subscription required',
    'Sends device diagnostic data to iVerify servers for analysis',
    'Not independently audited',
    'iOS sandbox limits how deep the scan can go',
  ],
  content: `
    <h2>Why iVerify?</h2>
    <p>Most people do not need to worry about Pegasus. It is a very expensive, targeted spyware used against specific people — journalists, lawyers, activists, politicians. If you are in one of those groups, or you have reason to believe your phone might be compromised, iVerify is one of the few tools that can help.</p>
    <p>For most users, it is overkill. But for high-risk individuals, it fills a real gap.</p>

    <h2>How it works</h2>
    <p>iVerify collects diagnostic data from your iPhone — system logs, process information, and network indicators — and analyses it against known spyware signatures. It uses a method called Mobile Threat Hunting. Some analysis happens on-device; other checks are compared against iVerify's threat intelligence servers.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of iVerify like a doctor checking you for a specific illness. It looks at the signs your phone shows — unusual processes, suspicious network calls — and compares them to known patterns of infection. It cannot see everything, but it can spot the recognisable footprints.</div></div>

    <h2>The closed-source problem</h2>
    <p>iVerify is not open source. You cannot read the code to see exactly what data it collects or how it handles it. The company publishes a privacy policy, but that requires trusting their word rather than verifying their code. For a tool asking to inspect your phone's internals, that is a meaningful limitation.</p>

    <h2>iOS still limits the scan</h2>
    <p>Apple's security model restricts what any app can see on your iPhone. iVerify works within those restrictions, but it means the scan is not as deep as it would be on a rooted Android or a desktop. It can find many spyware indicators — but not necessarily everything.</p>

    <h2>Verdict</h2>
    <p>iVerify is a legitimate, useful tool for a small group of people who face real surveillance threats. If that is you, it is worth the cost. If you are an everyday user, the price and the closed-source nature make it hard to recommend over free, open alternatives for general privacy hardening.</p>
  `
};
