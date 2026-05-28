export default {
  id: 'selinux',
  website: 'https://selinuxproject.org',
  index: 226,
  name: 'SELinux',
  tagline: 'Mandatory access control. No exceptions.',
  category: 'Security Audit',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.6,
      playStore: 4.6,
    },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'NSA / Red Hat / Linux kernel community',
  relatedArticles: [],
  verdict: 'SELinux is the most powerful Linux access control system — rigorous, proven, and uncompromising.',
  pros: [
    'Extremely granular control over every process, file, and resource on the system',
    'Default on Red Hat, Fedora, CentOS, and Android — battle-tested at massive scale',
    'Contains damage from compromised software at the kernel level',
    'Fully open source and integrated into the Linux kernel',
  ],
  cons: [
    'Very steep learning curve — misconfigurations are common and can break systems',
    'Policies are complex to write and maintain',
    'Many administrators disable it when things break, defeating the purpose',
  ],
  content: `
    <h2>Why SELinux?</h2>
    <p>SELinux stands for Security-Enhanced Linux. It was originally developed by the NSA and released as open source in 2000. Today it is maintained by Red Hat and the Linux community. It is built into Android, used on millions of servers, and is one of the most thoroughly scrutinised security systems in existence.</p>
    <p>SELinux enforces mandatory access control. This means it does not matter what your normal user permissions say — SELinux has its own rules, and those rules apply to everything, including the root user.</p>

    <h2>How it works</h2>
    <p>Every file, process, port, and device on a SELinux system gets a label. These labels are called security contexts. A policy then describes which contexts are allowed to interact with which other contexts. If a label combination is not in the policy, the access is denied — full stop.</p>
    <p>This label-based system is more powerful than AppArmor's path-based profiles. Moving a file does not change its label. A process confined to one context cannot escape just because it ends up in a different directory.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>SELinux gives every single file and program a security label. Then it only lets programs talk to things whose labels they are specifically allowed to talk to. Labels stick to files no matter where they move — you cannot trick SELinux by moving things around.</div></div>

    <h2>Modes of operation</h2>
    <p>SELinux runs in three modes. Enforcing blocks and logs anything that violates policy. Permissive logs violations without blocking them — useful for testing. Disabled turns SELinux off entirely (not recommended).</p>
    <p>The <code>audit2allow</code> tool reads the SELinux audit log and helps you build policy rules for legitimate actions that are being blocked. This is how administrators tune policies without disabling enforcement.</p>

    <h2>Is it worth the complexity?</h2>
    <p>For servers and systems where security matters, yes — absolutely. A web server running under a tight SELinux policy is far harder to exploit, even if the web server software has a vulnerability. The attacker gets code execution inside the web server process, but that process cannot touch anything outside its label. That is a massive difference in real-world security.</p>
    <p>For a personal desktop, AppArmor may be more practical. But if you maintain Linux servers, learning SELinux is worth the investment.</p>
  `
};
