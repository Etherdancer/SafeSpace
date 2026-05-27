export default {
    id: 'notesnook',
    website: 'https://notesnook.com',
    index: 279,
    name: 'Notesnook',
    tagline: 'End-to-end encrypted alternative to Evernote',
    category: 'Note-Taking',
    scores: {
      dataPrivacy: 29,
      security: 28,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Web'],
    pricing: 'Freemium',
    openSource: true,
    auditedBy: 'Cure53',
    relatedArticles: [],
    verdict: 'If you want your notes to sync across all your devices securely without the hassle of setting up your own server, Notesnook is fantastic.',
    pros: [
      'Everything is end-to-end encrypted by default',
      'Excellent, modern apps for every platform',
      'No ads or tracking'
    ],
    cons: [
      'Advanced features (like attachments and notebook locking) require a paid subscription'
    ],
    content: `
      <h2>Why Notesnook?</h2>
      <p>Apps like Evernote and Google Keep store your notes in plain text on their servers. If those servers are hacked, or if an employee looks, your private thoughts, passwords, or journal entries are exposed. Notesnook encrypts everything on your device before it ever leaves.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Notesnook uses XChaCha20-Poly1305 and Argon2id to encrypt your notes locally. The server only ever receives and syncs the ciphertexts. <br><b>Plain English:</b> Your notes are locked inside a digital safe on your phone. The locked safe is sent to the internet to be copied to your other devices, but the key never leaves your hands.</div></div>

      <h2>How it works</h2>
      <p>Notesnook is designed to be incredibly easy to use. You create an account, create a master password, and start typing. It looks and feels just like any modern note-taking app, but with bank-level security running invisibly in the background.</p>
      
      <h2>Offline First</h2>
      <p>All your notes are stored locally on your device, meaning you can read and write notes even if you don't have internet access. Once you reconnect, it securely syncs the changes to your other devices.</p>
    `
  };
