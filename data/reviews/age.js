export default {
    id: 'age',
    website: 'https://age-encryption.org',
    index: 266,
    name: 'age',
    tagline: 'Simple, modern file encryption done right',
    category: 'Encryption',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Filippo Valsorda (lead author); community review; no formal third-party audit published',
    relatedArticles: [],
    verdict: 'age is the cleanest, most honest file encryption tool available — small, modern, and hard to misuse.',
    pros: [
      'Tiny, auditable codebase — easy for experts to check',
      'Modern cryptography only — no legacy algorithms to worry about',
      'No config files, no key rings, no setup headaches',
      'Works with SSH keys you may already have',
      'Passphrase or public-key encryption, your choice',
    ],
    cons: [
      'Command-line only — not beginner-friendly out of the box',
      'GUI front-ends exist but are third-party maintained',
      'No built-in file management or folder encryption',
    ],
    content: `
      <h2>Why age?</h2>
      <p>GPG has been around since 1997. It works, but it is complicated. Key servers, key rings, expiry dates, algorithm choices — there is a lot that can go wrong, and often does.</p>
      <p>age was designed to fix that. It does one thing: encrypt a file. It does it well. And it strips away every option that could confuse you or create a mistake.</p>
      <p>The name stands for "Actually Good Encryption." That is not a boast. It is a design goal.</p>

      <h2>How it works</h2>
      <p>age uses a small set of modern algorithms. X25519 handles key agreement. ChaCha20-Poly1305 encrypts the data. HKDF derives keys. These are not exotic choices — they are the same primitives used in Signal, WireGuard, and TLS 1.3.</p>
      <p>You encrypt a file to a recipient using their public key, or you use a passphrase. The recipient decrypts with their private key or passphrase. That is the whole model.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of age like a padlock. You lock a file with someone's public key — anyone can lock it, only the person with the matching private key can open it. Or use a passphrase: whoever knows the password can open it.</div></div>

      <h2>The small codebase advantage</h2>
      <p>age's Go reference implementation is intentionally tiny. Small code means fewer places for bugs to hide. Security researchers can read the whole thing in an afternoon.</p>
      <p>The spec is also public and stable. That means other people can build compatible tools in other languages — and they have. There are age libraries in Rust, JavaScript, Python, and more.</p>

      <h2>What age does not do</h2>
      <p>age does not sign files. It does not manage a keychain. It does not have a configuration file. If you need signatures, pair it with a dedicated signing tool like signify or minisign.</p>
      <p>There is no graphical interface built in. If you want one, tools like Winage (Windows) and the age plugin ecosystem can help. But the core tool lives in your terminal.</p>

      <h2>Verdict</h2>
      <p>If you need to encrypt a file and send it to someone, age is the right tool. It is not trying to do everything. It is trying to do one thing correctly — and it succeeds.</p>
    `
  };
