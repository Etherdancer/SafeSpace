export default {
    id: 'internxt',
    website: 'https://internxt.com',
    index: 270,
    name: 'Internxt',
    tagline: 'Open-source zero-knowledge cloud storage',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 8,
      total: 88
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Internxt commissioned a security audit via Securitum (2022); results published publicly',
    relatedArticles: [],
    verdict: 'Internxt delivers open-source zero-knowledge cloud storage with a real audit — a rare and welcome combination.',
    pros: [
      'Fully open-source client and server code — anyone can verify it',
      'Zero-knowledge encryption: Internxt cannot read your files',
      'Independent security audit by Securitum (published)',
      'Decentralised storage architecture adds resilience',
      'Generous free tier and affordable paid plans',
    ],
    cons: [
      'Younger company than competitors — less track record',
      'Desktop sync client less mature than Dropbox or Nextcloud',
      'Some advanced features still in development',
    ],
    content: `
      <h2>Why Internxt?</h2>
      <p>Internxt sits in a rare spot: it is both zero-knowledge and open source. Most zero-knowledge cloud services are closed source — you have to trust their word about how encryption works. With Internxt, you can read the code yourself. Or read the published audit if you would rather trust experts.</p>
      <p>It is a Spanish company, which means it operates under EU GDPR rules — one of the stricter data protection frameworks in the world.</p>

      <h2>How the encryption works</h2>
      <p>Files are encrypted client-side using AES-256 before they leave your device. Internxt derives your encryption key from your password using a process they never receive. In transit, everything is protected by TLS. On Internxt servers, only ciphertext is stored.</p>
      <p>Internxt also shards files — splitting them into fragments distributed across multiple storage nodes. No single node holds a complete readable file.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Internxt cuts your files into encrypted pieces, like a jigsaw puzzle with the picture already scrambled. Even if someone grabbed one piece, they would only have a small chunk of gibberish.</div></div>

      <h2>The audit</h2>
      <p>Internxt commissioned a penetration test and code review from Securitum in 2022 and published the results. This is how security should work — an independent expert checks the claims, and the results are public. No major critical vulnerabilities were found; moderate findings were fixed.</p>
      <p>Audits age. A 2022 audit is meaningful, but the codebase will have changed since. Ongoing audits are better than a single point-in-time review.</p>

      <h2>Self-hosting</h2>
      <p>Because Internxt is open source, you can run your own instance. This puts you in the same position as a Nextcloud user — your server, your data. For most users the hosted version is easier, but the option is there.</p>

      <h2>Verdict</h2>
      <p>Internxt is one of the best commercial cloud storage options for privacy. Open source, audited, zero-knowledge, and available on every major platform. The only reservation is its relative youth as a company — watch that audit cadence over time.</p>
    `
  };
