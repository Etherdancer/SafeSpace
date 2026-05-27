export default {
    id: 'picocrypt',
    website: 'https://github.com/Picocrypt/Picocrypt',
    index: 267,
    name: 'Picocrypt',
    tagline: 'Drag-and-drop file encryption with serious crypto',
    category: 'Encryption',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 97
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Donated to the Open Source Technology Improvement Fund (OSTIF) for audit consideration; community reviewed',
    relatedArticles: [],
    verdict: 'Picocrypt makes strong file encryption genuinely easy — drag a file in, set a password, done.',
    pros: [
      'XChaCha20 encryption + Argon2id key derivation — both excellent choices',
      'Simple drag-and-drop GUI anyone can use',
      'Completely offline — never touches the internet',
      'Open source and auditable',
      'Optional features: deniability, reed-solomon error correction, keyfiles',
    ],
    cons: [
      'Small, solo-maintained project — fewer eyes than larger tools',
      'No formal third-party security audit published yet',
      'Passphrase-only — no public-key encryption',
    ],
    content: `
      <h2>Why Picocrypt?</h2>
      <p>Most encryption tools make you choose between easy and secure. Picocrypt refuses that trade-off. It has a simple, visual interface — drag a file, type a password, click encrypt. But under the hood it uses algorithms that security experts actually trust.</p>
      <p>It is a small program. The whole codebase fits in a few hundred lines. That is a feature, not a limitation. Smaller means simpler. Simpler means fewer places for something to go wrong.</p>

      <h2>How it works</h2>
      <p>Picocrypt encrypts files using XChaCha20-Poly1305. Before encrypting, it turns your password into a cryptographic key using Argon2id — one of the strongest password-hashing algorithms available. Argon2id is deliberately slow and memory-hungry, which makes brute-force attacks very expensive.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Argon2id is like a combination lock that takes ten seconds to try each combination. An attacker guessing passwords has to wait ten seconds per guess — that turns billions of guesses into centuries of work.</div></div>

      <h2>Extra features worth knowing</h2>
      <p>Picocrypt supports keyfiles. Instead of — or in addition to — a passphrase, you can require a specific file to decrypt. Lose the keyfile, lose access. Keep it safe.</p>
      <p>It also supports Reed-Solomon error correction. This adds small amounts of redundant data to the encrypted file, so it can survive minor corruption — useful for long-term archiving.</p>
      <p>There is a paranoid mode that scrubs the original file after encryption. And a deniability option for threat models where you need to be able to deny a file is encrypted.</p>

      <h2>Limitations</h2>
      <p>Picocrypt is maintained primarily by one developer. That is a concentration risk — if the project goes quiet, updates may slow down. For a tool protecting sensitive files long-term, keep an eye on the repository's activity.</p>
      <p>There is no public-key encryption. You cannot encrypt a file "to" a recipient without sharing a password. If you need that, use age alongside Picocrypt.</p>

      <h2>Verdict</h2>
      <p>Picocrypt is the best beginner-friendly file encryption tool available. Strong crypto, simple interface, zero network calls. For anyone who wants to protect files without a learning curve, this is the one.</p>
    `
  };
