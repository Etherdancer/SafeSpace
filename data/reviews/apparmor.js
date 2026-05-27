export default {
  id: 'apparmor',
  website: 'https://apparmor.net',
  index: 225,
  name: 'AppArmor',
  tagline: 'Tell every app exactly what it is allowed to do.',
  category: 'Security Audit',
  scores: {
    dataPrivacy: 24,
    security: 28,
    tracking: 18,
    userControl: 9,
    transparency: 10,
    total: 89
  },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Canonical / Linux kernel community',
  relatedArticles: [],
  verdict: 'AppArmor is the practical, profile-based way to cage Linux applications before they cause harm.',
  pros: [
    'Built into the Linux kernel — no separate installation needed on Ubuntu and Debian',
    'Profile-based system is easier to manage than SELinux for most administrators',
    'Confines applications even if they are compromised by an attacker',
    'Hundreds of pre-written profiles available for common software',
  ],
  cons: [
    'Only as good as its profiles — missing or permissive profiles offer little protection',
    'Does not provide network-level isolation by default',
    'Less granular than SELinux for complex multi-user environments',
  ],
  content: `
    <h2>Why AppArmor?</h2>
    <p>When software runs on your computer, it can — by default — do a lot of things it probably should not. A web browser should not be reading your SSH keys. A media player should not be writing to your home directory. AppArmor fixes this by creating rules that say exactly what each program is allowed to touch.</p>
    <p>These rules are called profiles. When AppArmor enforces a profile, the program inside that profile cannot go outside its allowed boundaries — even if an attacker takes control of it.</p>

    <h2>How it works</h2>
    <p>AppArmor is a Linux Security Module (LSM). It hooks directly into the Linux kernel. Every time a program tries to open a file, use the network, or start another process, the kernel checks the AppArmor profile for that program. If the action is not in the profile, it is blocked.</p>
    <p>Profiles can run in two modes. Enforce mode blocks anything not allowed. Complain mode logs violations without blocking — useful when you are writing a new profile and want to see what the program actually needs.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>AppArmor works like a bouncer for each program. It has a list of what that program is allowed to do. Anything not on the list gets turned away — even if an attacker is the one asking.</div></div>

    <h2>Profiles</h2>
    <p>Ubuntu, Debian, and other major distributions ship AppArmor with profiles already written for common software: Firefox, Evince, cups, and more. You can also write your own or download profiles from the community.</p>
    <p>The <code>aa-genprof</code> tool watches a program run and generates a profile based on what it actually does. This makes writing new profiles much less painful than it sounds.</p>

    <h2>AppArmor vs SELinux</h2>
    <p>SELinux is more powerful and more granular. AppArmor is easier to understand and configure. SELinux is the default on Red Hat and Fedora. AppArmor is the default on Ubuntu and Debian. For most home users and small teams, AppArmor's profile-based approach is simpler to maintain without sacrificing meaningful protection.</p>
  `
};
