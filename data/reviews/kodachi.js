export default {
  id: 'kodachi',
  website: 'https://www.digi77.com/linux-kodachi/',
  index: 223,
  name: 'Kodachi',
  tagline: 'Boot from USB. Leave no trace behind.',
  category: 'Operating Systems',
  scores: {
      dataPrivacy: 25,
      security: 30,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 92
    },
    externalScores: {
      appStore: 4.6,
      playStore: 4.3,
    },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  relatedArticles: [],
  auditedBy: 'Not independently audited',
  verdict: 'Kodachi packs Tor, VPN, and encryption into a bootable USB that leaves no trace on your computer.',
  pros: [
    'Runs entirely from a USB stick — nothing touches your hard drive',
    'Routes all traffic through VPN then Tor by default',
    'Includes a panic button to wipe RAM and shut down immediately',
    'Comes with a full suite of privacy and encryption tools pre-installed',
  ],
  cons: [
    'Maintained by a small team — less scrutiny than Tails or Whonix',
    'The built-in VPN is a shared account — not ideal for high-risk users',
    'No independent security audits published',
  ],
  content: `
    <h2>Why Kodachi?</h2>
    <p>Kodachi is a live Linux system. You boot it from a USB drive. It runs entirely in your computer's memory. When you turn off the computer, it is gone — no files left on the machine, no browser history, nothing.</p>
    <p>It is similar to Tails in concept but adds more tools out of the box: a VPN, Tor, encrypted DNS, and a desktop full of pre-installed privacy software. Everything is set up and ready when you boot.</p>

    <h2>How it works</h2>
    <p>When you boot Kodachi, all your internet traffic is sent through a VPN first, then through Tor. This means your internet provider sees you connecting to a VPN, not to Tor. And the Tor exit node sees VPN traffic, not your real IP.</p>
    <p>The desktop shows a live panel with your current IP address, VPN status, Tor status, and DNS status. You can see at a glance whether your connection is protected.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Kodachi chains your traffic through a VPN and then Tor before it reaches the internet. Your internet provider sees a VPN connection. Tor sees anonymous VPN traffic. Neither sees you.</div></div>

    <h2>The panic button</h2>
    <p>Kodachi includes an emergency shutdown feature. One click — or a keyboard shortcut — immediately wipes the RAM and powers off the computer. This is designed for situations where you need to destroy evidence of what you were doing, instantly.</p>
    <p>RAM wiping means that even forensic recovery tools would struggle to reconstruct what was in memory. This is an extreme feature, but for people in extreme situations, it matters.</p>

    <h2>Compared to Tails</h2>
    <p>Tails is the gold standard for anonymous live systems — it has independent audits and a large security team. Kodachi has more tools pre-installed and a nicer desktop, but less independent verification. If your life depends on it, use Tails. If you want a powerful everyday privacy system on a USB stick, Kodachi is a strong choice.</p>
  `
};
