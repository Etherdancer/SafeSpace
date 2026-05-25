export default {
    id: 'luks',
    website: 'https://gitlab.com/cryptsetup/cryptsetup',
    index: 35,
    name: 'LUKS (Full Disk Encryption)',
    tagline: 'Lock down your entire hard drive',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 100
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Multiple security audits',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'LUKS is the standard for encrypting an entire hard drive on Linux. If someone steals your laptop, they cannot read a single file without your encryption passphrase.',
    pros: [
      'Encrypts everything: the operating system, swap, and personal files',
      'Built directly into the Linux kernel for maximum performance',
      'Industry-standard security',
      'Almost invisible once you enter your passphrase at boot'
    ],
    cons: [
      'If you lose your passphrase, your data is gone forever',
      'Must be configured when installing the operating system'
    ],
    content: `
      <h2>What Is Full Disk Encryption?</h2>
      <p>Full disk encryption scrambles every single bit of data on your hard drive. Without the correct passphrase entered at startup, the drive looks like random garbage to anyone who examines it — even if they remove it from the laptop and plug it into another computer.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>LUKS scrambles your entire hard drive using a key derived from your passphrase — there is no back door, no company can unlock it for the police, and without your passphrase the data is mathematically unreadable. Technically: LUKS (Linux Unified Key Setup) uses AES-256 with XTS mode and derives the encryption key from your passphrase using PBKDF2 or Argon2. The key is stored in one or more key slots in the LUKS header, allowing multiple passphrases or keyfiles.</div></div>

      <h2>When Does This Matter?</h2>
      <p>If your laptop is stolen and the drive is not encrypted, the thief can simply remove the hard drive, plug it into another computer, and read every file without needing your login password. Full disk encryption makes this impossible. It's the single most important protection for a laptop.</p>

      <h2>How to Enable It</h2>
      <p>LUKS is configured at installation time, not afterwards. When installing Ubuntu, Fedora, Mint, or most other distributions, the installer will show an option like "Encrypt the installation for security" or "Use LVM with encryption." Tick that box. Choose a strong passphrase — this is the only thing protecting your data, so make it long and memorable. You will be asked for it each time the computer starts.</p>

      <h2>Verdict</h2>
      <p>LUKS full disk encryption should be enabled on every laptop running Linux. It is free, built into the system, and adds essentially zero performance impact on modern hardware. The risk of not having it — your data being read if the laptop is ever lost or stolen — is significant.</p>
    `
  };
