export default {
    id: 'portmaster',
    website: 'https://safing.io/portmaster/',
    index: 245,
    name: 'Portmaster',
    tagline: 'Per-app firewall and DNS privacy rolled into one.',
    category: 'Firewall',
    scores: {
      dataPrivacy: 25,
      security: 30,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 92
    },
    externalScores: {
      appStore: 4.3,
    },
    platforms: ['Windows', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'One of the most capable free privacy tools available — a full application firewall with encrypted DNS baked in, backed by open-source code.',
    pros: [
      'Per-application firewall rules for every process',
      'Built-in DNS-over-HTTPS and DNS-over-TLS support',
      'Blocks trackers and malware domains at DNS level',
      'Fully open source under the AGPLv3 licence',
      'Detailed connection monitor shows every outbound connection in real time',
      'SPN (Safing Privacy Network) available as a paid add-on for extra routing privacy',
    ],
    cons: [
      'Heavier on resources than a simple firewall',
      'Initial setup and learning curve is steeper than basic alternatives',
      'Windows and Linux only (no macOS)',
      'Not independently audited by a third-party security firm',
    ],
    content: `
      <h2>Why Portmaster?</h2>
      <p>Portmaster does two important things at once: it acts as an application-level firewall and it encrypts your DNS queries. Most firewall tools only do one or the other. Portmaster combines both in a single open-source application with a genuinely usable interface.</p>
      <p>It is developed by Safing, an Austrian company with a public code repository and a transparent business model funded by selling an optional privacy routing add-on (the SPN). The core tool is free forever.</p>

      <h2>How it works</h2>
      <p>Portmaster installs a kernel-level network driver that intercepts all outbound and inbound connections before they leave your machine. At the same time, it takes over DNS resolution and sends queries over encrypted channels (DNS-over-HTTPS or DNS-over-TLS) rather than the plain-text DNS your router normally uses. Both layers work together — you can block an app at the firewall level, or block its tracking domains at the DNS level, or both.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Normal DNS is like calling a public operator to ask for someone's phone number — anyone listening can hear the question. Portmaster encrypts that call so only the DNS server you trust can hear what you are looking up.</div></div>

      <h2>What you can control</h2>
      <p>Portmaster shows a live feed of every network connection every app makes. You can set default rules (block all outbound by default and whitelist apps), or set per-app rules for fine-grained control. The built-in filter lists block tracking domains, malware, and advertising networks across all apps at once.</p>
      <p>Global settings let you enforce encrypted DNS system-wide, block connections to known bad actors, and prevent apps from bypassing DNS by using hardcoded IP addresses.</p>

      <h2>Open source and auditable</h2>
      <p>The entire codebase is published on GitHub under AGPLv3. Safing publishes funding reports and maintains a public roadmap. They have not yet undergone a formal third-party security audit, but the code is readable and community-reviewed.</p>

      <h2>Verdict</h2>
      <p>Portmaster is one of the most privacy-protective free tools available on Windows. It combines firewall control and encrypted DNS in a way that meaningfully reduces what apps and trackers can learn about you. The learning curve is real but the payoff is substantial.</p>
    `
  };
