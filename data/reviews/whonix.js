export default {
  id: 'whonix',
  website: 'https://www.whonix.org',
  index: 222,
  name: 'Whonix',
  tagline: 'Two virtual machines. One iron curtain.',
  category: 'Operating Systems',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.7,
      playStore: 4.0,
    },
  platforms: ['Linux', 'Windows', 'macOS'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'Whonix is the most serious Tor-based anonymity setup available to ordinary users.',
  pros: [
    'Your real IP is physically impossible to leak, even if software is compromised',
    'Fully open source and actively maintained',
    'Works inside your existing OS — no need to wipe your machine',
    'Pairs perfectly with Qubes OS for maximum compartmentalization',
  ],
  cons: [
    'Requires a computer powerful enough to run two virtual machines at once',
    'Initial setup is not beginner-friendly',
    'Tor routing means slower internet speeds',
  ],
  content: `
    <h2>Why Whonix?</h2>
    <p>Most privacy tools try to hide your IP address. Whonix makes leaking your IP address structurally impossible. It does this with a clever two-machine trick.</p>
    <p>You run two virtual computers inside your real computer. One is the Gateway. It connects to the Tor network and does nothing else. The other is the Workstation. It is where you browse and work — and it can only talk to the Gateway. There is no path to the real internet.</p>
    <p>Even if an attacker completely takes over your Workstation, they still cannot see your real IP. The Workstation literally does not know it.</p>

    <h2>How it works</h2>
    <p>Whonix uses virtualisation. That means your real operating system runs two separate, isolated computers as software. These are called virtual machines.</p>
    <p>All your internet traffic goes: Workstation → Gateway → Tor → Internet. The Workstation has no idea what your real IP address is, because it never touches the internet directly.</p>
    <p>This design is called stream isolation. It also separates different kinds of traffic so they cannot be linked together, even inside Tor.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Whonix splits your computer into two virtual machines. One only talks to Tor. The other only talks to the first one. Your real IP never touches your browser — it is not even reachable from where you work.</div></div>

    <h2>Qubes OS integration</h2>
    <p>Whonix is built into Qubes OS as a ready-to-use template. Qubes is a security-focused operating system that runs every app in its own isolated container. Combined with Whonix, each container is also Tor-routed. This is the setup security professionals recommend for the highest-risk situations.</p>
    <p>You do not need Qubes to use Whonix. But if you do use Qubes, Whonix comes with it out of the box.</p>

    <h2>Who should use Whonix?</h2>
    <p>Whonix is for people who need strong anonymity — journalists, activists, whistleblowers, or anyone working in a hostile environment. It is not the easiest tool to set up. But once it is running, it enforces privacy by design, not by hoping software does not make mistakes.</p>
    <p>If you just want private browsing, Tor Browser alone may be enough. Whonix is for when you need to know your IP cannot leak, no matter what.</p>
  `
};
