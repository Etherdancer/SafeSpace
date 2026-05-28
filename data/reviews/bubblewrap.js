export default {
  id: 'bubblewrap',
  website: 'https://github.com/containers/bubblewrap',
  index: 227,
  name: 'Bubblewrap',
  tagline: 'Run any program in a private bubble.',
  category: 'Privacy Tools',
  scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 88
    },
    externalScores: {
      appStore: 5,
      playStore: 4.8,
    },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Flatpak / freedesktop.org community',
  relatedArticles: [],
  verdict: 'Bubblewrap is the sandboxing engine under Flatpak — lightweight, rootless, and battle-tested.',
  pros: [
    'Runs as an unprivileged user — no root access required to sandbox processes',
    'Used by Flatpak to sandbox millions of Linux app installations',
    'Fine-grained control over filesystem, network, and process visibility',
    'Tiny codebase — easier to audit than heavier container runtimes',
  ],
  cons: [
    'Command-line only — no graphical interface',
    'Writing sandbox rules by hand requires understanding Linux namespaces',
    'Most users benefit from it indirectly via Flatpak, not directly',
  ],
  content: `
    <h2>Why Bubblewrap?</h2>
    <p>When you run a program on Linux, it can see your files, your environment variables, your running processes, and your network. Bubblewrap changes that. It wraps a program in a restricted environment where it only sees what you choose to show it.</p>
    <p>This is called sandboxing. Bubblewrap does it using Linux kernel features called namespaces and seccomp. It does not need any special permissions. Any ordinary user can sandbox any program.</p>

    <h2>How it works</h2>
    <p>Bubblewrap uses Linux user namespaces to create an isolated environment. Inside that namespace, the sandboxed process thinks it has its own filesystem, its own process list, its own network, and its own user IDs. In reality, it is seeing a filtered view that you defined.</p>
    <p>You specify exactly which directories to expose and whether they are read-only or read-write. You can block network access entirely. You can hide other running processes. You can restrict which system calls the program is allowed to make.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Bubblewrap uses a Linux feature called namespaces to build a fake private world for a program. The program thinks it has a whole computer to itself, but it is really in a box — and the box only contains what you put in it.</div></div>

    <h2>Flatpak and Bubblewrap</h2>
    <p>If you use Flatpak to install Linux applications, you are already using Bubblewrap. Flatpak uses it under the hood to sandbox every app it installs. The permissions system in Flatpak — where an app asks for access to your files or camera — is powered by Bubblewrap doing the actual enforcement.</p>
    <p>This means Bubblewrap's security is relied on by a huge number of Linux users every day, even if they have never heard the name.</p>

    <h2>Direct use</h2>
    <p>Advanced users can call Bubblewrap directly from the command line to sandbox arbitrary programs. This is useful for running untrusted software, testing applications in clean environments, or isolating sensitive processes from the rest of the system.</p>
  `
};
