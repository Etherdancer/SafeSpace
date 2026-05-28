export default {
    id: 'cryptpad',
    website: 'https://cryptpad.org',
    index: 272,
    name: 'CryptPad',
    tagline: 'Collaborate on documents without exposing them',
    category: 'Productivity',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Web'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Audited by Cure53 (2023); results published on GitHub',
    relatedArticles: [],
    verdict: 'CryptPad is the only collaborative document editor where the server genuinely cannot read what you are writing.',
    pros: [
      'Zero-knowledge encryption — server never sees document content',
      'Real-time collaboration on encrypted documents',
      'Open source and self-hostable',
      'Audited by Cure53 in 2023',
      'Includes documents, spreadsheets, presentations, kanban, and more',
      'No account required for anonymous use',
    ],
    cons: [
      'Web-only — no desktop or mobile native apps',
      'Performance can lag on large, complex documents',
      'Feature set behind Google Docs in polish and breadth',
      'Self-hosting requires technical knowledge',
    ],
    content: `
      <h2>Why CryptPad?</h2>
      <p>Google Docs is convenient. Google can also read every word you type. They use that data to train models, serve ads, and comply with legal requests. CryptPad gives you real-time collaborative editing without any of that.</p>
      <p>The server stores your documents, but only in encrypted form. CryptPad cannot read them. Neither can anyone who compromises the CryptPad server. The encryption and decryption happen entirely in your browser.</p>

      <h2>How zero-knowledge collaboration works</h2>
      <p>CryptPad encrypts document content in the browser before sending it to the server, using symmetric cryptography derived from keys stored in document URLs. Collaborators share the URL (which contains the key fragment) to get access. The server routes encrypted changes between users but never holds plaintext.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>CryptPad uses the document link itself as the key. Share the link, share access. The server just passes encrypted messages back and forth like a postal service — it moves your letters but cannot open them.</div></div>

      <h2>What you can create</h2>
      <p>CryptPad is not just a text editor. It includes rich text documents, spreadsheets, presentations, code pads, Kanban boards, whiteboards, and forms. Everything is zero-knowledge encrypted. You can organise files into encrypted drives and share folders with teams.</p>

      <h2>The Cure53 audit</h2>
      <p>Cure53 audited CryptPad in 2023, funded through the European NGI (Next Generation Internet) initiative. The audit covered the application code and cryptographic implementation. Several issues were found and addressed. The report is publicly available on GitHub — a mark of real transparency.</p>

      <h2>Self-hosting</h2>
      <p>CryptPad is open source. You can run your own instance, giving you full control over storage and availability. The flagship instance at cryptpad.fr is run by the development team and has a privacy-respecting paid tier that helps fund the project.</p>

      <h2>Verdict</h2>
      <p>CryptPad is remarkable: zero-knowledge, collaborative, audited, and open source. It is a web-only tool and cannot fully replace Google Docs for power users — but for any work that should stay private, it has no real competition.</p>
    `
  };
