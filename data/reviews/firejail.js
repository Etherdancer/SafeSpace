export default {
    id: 'firejail',
    website: 'https://firejail.wordpress.com',
    index: 40,
    name: 'Firejail',
    tagline: 'Advanced app sandboxing for experts',
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
      appStore: 4.9,
      playStore: 4.6,
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Firejail acts like a strict bouncer for your existing applications. You can run any app through Firejail to heavily restrict what files or networks it is allowed to access.',
    pros: [
      'Incredibly powerful containment for untrusted software',
      'Comes with hundreds of pre-configured security profiles',
      'Prevents apps from accessing the internet or your home folder',
      'Lightweight and doesn\'t require reinstalling apps'
    ],
    cons: [
      'Requires technical knowledge to fix apps if a security profile breaks them',
      'As a SUID binary, it theoretically increases the attack surface of the system itself'
    ],
    content: `
      <h2>What Is Firejail?</h2>
      <p>Firejail wraps around any existing application and constrains what it can do. You can run your web browser, your PDF reader, or any other app through Firejail and it will restrict what files and network resources it can access — without reinstalling anything.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Firejail puts a cage around any application — you can tell it "this app is only allowed to see its own folder" or "this app cannot access the internet" and it enforces those rules at the kernel level. It is a SUID sandbox program that uses Linux namespaces, seccomp-bpf filters, and Linux capabilities to restrict an application's access to the filesystem, network, and system calls. It ships with pre-written security profiles for hundreds of applications.</div></div>

      <h2>How to Use It</h2>
      <p>Once installed (available in most distribution repositories), you can prefix any command with <code>firejail</code>:</p>
      <ul>
        <li><code>firejail firefox</code> — runs Firefox in a sandbox</li>
        <li><code>firejail vlc</code> — runs the VLC media player sandboxed</li>
        <li><code>firejail --noprofile --net=none document-editor</code> — runs an app with no internet access</li>
      </ul>
      <p>Firejail ships with ready-made security profiles for over 800 applications, so for well-known software it works immediately without configuration.</p>

      <h2>Verdict</h2>
      <p>Firejail is a powerful tool for experienced Linux users who want to add an extra containment layer around applications. For most regular users, Flatpak provides adequate sandboxing with less complexity. Use Firejail when you need to sandbox applications that aren't available as Flatpaks.</p>
    `
  };
