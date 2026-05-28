export default {
    id: 'flatpak',
    website: 'https://flatpak.org',
    index: 39,
    name: 'Flatpak',
    tagline: 'Sandboxed apps for Linux',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 3,
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Flatpak is a way to install Linux applications where each app runs in its own "sandbox." This prevents a compromised app from spying on your personal files or other software.',
    pros: [
      'Apps are isolated from the core system (sandboxing)',
      'You can use "Flatseal" to visually manage app permissions',
      'Provides the latest software regardless of what distribution you use',
      'Standardized across the Linux ecosystem'
    ],
    cons: [
      'Apps take up more disk space because they bundle their own dependencies',
      'Sandboxing isn\'t always perfect depending on how the app was packaged'
    ],
    content: `
      <h2>Why Sandboxing Matters</h2>
      <p>When you install a traditional Linux application, it has access to your entire home folder and can potentially read files from other applications. Flatpak changes this: each app runs in its own isolated bubble (called a sandbox) and can only access what you explicitly allow.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Each Flatpak app lives in its own locked room — it can only talk to the rest of your system through a controlled doorway. If the app is compromised or malicious, the damage is limited to what it was allowed to access. Flatpak uses Linux kernel namespaces, cgroups, and seccomp-bpf to create this isolated execution environment, with apps accessing host resources only via portal APIs that mediate requests through the user session.</div></div>

      <h2>Managing Permissions with Flatseal</h2>
      <p>By default, each Flatpak app requests certain permissions when it's packaged — access to the network, access to your Documents folder, etc. You can view and change these permissions using a free tool called <strong>Flatseal</strong>. For example, you could use Flatseal to remove network access from a painting app that has no business connecting to the internet.</p>

      <h2>How to Install Apps via Flatpak</h2>
      <ol>
        <li>Install Flatpak by following the instructions at <strong>flatpak.org/setup</strong> for your distribution</li>
        <li>Add the Flathub repository: <code>flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo</code></li>
        <li>Browse and install apps at <strong>flathub.org</strong>, or install from the terminal: <code>flatpak install flathub app.name</code></li>
        <li>Install Flatseal to manage permissions: <code>flatpak install flathub com.github.tchx84.Flatseal</code></li>
      </ol>

      <h2>Verdict</h2>
      <p>Flatpak is the recommended way to install applications on Linux when you want better isolation and the latest software versions. For most users, simply getting apps from Flathub and adjusting permissions with Flatseal provides a significant security improvement with minimal effort.</p>
    `
  };
