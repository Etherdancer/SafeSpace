export default {
    id: 'veracrypt',
    website: 'https://www.veracrypt.fr',
    index: 36,
    name: 'VeraCrypt',
    tagline: 'Securely encrypted folders and drives',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 100
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Quarkslab',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'VeraCrypt allows you to create an encrypted "safe" (a file or a USB drive) for highly sensitive documents. It is the successor to TrueCrypt and is widely trusted by security professionals.',
    pros: [
      'Creates encrypted containers that look like random data',
      'Supports hidden operating systems and plausible deniability',
      'Independent security audits confirm its safety',
      'Cross-platform (open a vault on Windows, Mac, or Linux)'
    ],
    cons: [
      'Interface feels dated and can be intimidating for beginners'
    ],
    content: `
      <h2>What Is VeraCrypt For?</h2>
      <p>VeraCrypt creates encrypted "containers" — files that look like random data to anyone who doesn't know the password, but open up as a usable folder when you do. You can also use it to encrypt an entire USB drive or external hard disk.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>VeraCrypt creates a secret, scrambled "safe" on your computer — only your password opens it, and when it's locked it's just a file full of random gibberish. When unlocked, it works like any normal folder. Under the hood, it uses AES-256-XTS, Serpent, or Twofish (or cascades of them) for encryption, with PBKDF2, bcrypt, or Argon2 key derivation to resist brute force. Volumes can be hidden inside other volumes for plausible deniability.</div></div>

      <h2>Plausible Deniability</h2>
      <p>VeraCrypt has a powerful feature called "hidden volumes." You create one encrypted container that has two passwords: one opens innocent files, the other opens the real sensitive files. If someone forces you to reveal your password, you give them the first one — they see nothing sensitive, and there's no way to prove a hidden volume exists.</p>

      <h2>Use Cases</h2>
      <ul>
        <li>Storing sensitive documents (tax records, medical files, passwords) in an encrypted folder on your desktop</li>
        <li>Keeping a private encrypted USB drive to carry sensitive files between computers</li>
        <li>Creating a hidden encrypted partition on a drive for maximum plausible deniability</li>
      </ul>

      <h2>Verdict</h2>
      <p>VeraCrypt is the tool security professionals reach for when they need to protect a specific folder or drive. It's free, cross-platform, and extensively audited. The only downside is a dated interface — once you understand how to create and open a volume, you won't touch the interface often anyway.</p>
    `
  };
