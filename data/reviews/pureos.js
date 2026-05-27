export default {
  id: 'pureos',
  website: 'https://pureos.net',
  index: 224,
  name: 'PureOS',
  tagline: 'A Linux built entirely on free software.',
  category: 'Operating Systems',
  scores: {
    dataPrivacy: 26,
    security: 24,
    tracking: 19,
    userControl: 9,
    transparency: 9,
    total: 87
  },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'PureOS is a clean, FSF-endorsed Linux distro that ships privacy defaults and nothing proprietary.',
  pros: [
    'Endorsed by the Free Software Foundation — 100% free and open source software',
    'Tor Browser and privacy-respecting defaults out of the box',
    'Based on Debian stable — well-tested and widely compatible',
    'No proprietary blobs, no telemetry, no phone-home behaviour',
  ],
  cons: [
    'Excluding proprietary drivers can cause hardware compatibility issues',
    'Not hardened like Whonix or Tails — it is a general-purpose desktop',
    'Primarily designed for Purism hardware (Librem laptops and phones)',
  ],
  content: `
    <h2>Why PureOS?</h2>
    <p>PureOS is the operating system made by Purism, the company that builds privacy-focused Librem laptops and the Librem 5 phone. It is based on Debian — one of the most stable and trusted Linux distributions in the world.</p>
    <p>The key difference from ordinary Linux distros: every single piece of software in PureOS is free and open source. There are no proprietary drivers, no binary blobs, no closed-source firmware. You can inspect everything that runs on your machine.</p>

    <h2>How it works</h2>
    <p>PureOS installs like any other Linux operating system. It uses the GNOME desktop — the same interface you would find on Ubuntu or Fedora. It ships with PureBrowser (based on Firefox), which has privacy-respecting settings already applied. Tor Browser is also available in the software store.</p>
    <p>The OS does not call home. It does not send usage data. It does not include analytics of any kind. It simply runs your computer.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>PureOS runs only software whose source code you can read and check. No hidden code runs in the background. You can see exactly what your computer is doing — because everything is open.</div></div>

    <h2>FSF endorsement</h2>
    <p>The Free Software Foundation has added PureOS to its list of endorsed GNU/Linux distributions. This means they have verified that PureOS ships no proprietary software and respects user freedom. It is one of only a handful of distributions to earn this status.</p>
    <p>This is not just a badge. It means an independent organisation has checked the whole system and confirmed the claim holds up.</p>

    <h2>Who is it for?</h2>
    <p>PureOS is a general-purpose desktop. It is great for people who want to move away from Windows or macOS without giving up on everyday tasks. It is not a specialised anonymity tool like Whonix or Tails — it is just a clean, privacy-respecting system you can use every day.</p>
    <p>It works best on Purism's own hardware, where everything is guaranteed to work without proprietary drivers. On other laptops, some hardware might not function without closed-source firmware.</p>
  `
};
