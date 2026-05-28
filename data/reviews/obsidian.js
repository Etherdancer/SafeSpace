export default {
    id: 'obsidian',
    website: 'https://obsidian.md',
    index: 13,
    name: 'Obsidian',
    tagline: 'Your notes live on your device — not in someone\'s cloud',
    category: 'Notes',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 19,
      userControl: 9,
      transparency: 6,
      total: 87
    },
    externalScores: {
      appStore: 4.5,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free for personal use / $8/mo Sync add-on (optional)',
    openSource: false,
    auditedBy: 'Community reviewed; popular in privacy community',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'An excellent local note-taking app that stores your notes as plain text files on your own device. No account needed, no cloud, no company reading your notes.',
    pros: [
      'Notes stored as plain text files on your own device — no cloud',
      'No account required for local use',
      'Extremely capable — links between notes, graph view, extensive plugins',
      'Your notes work in any text editor, even if Obsidian ceases to exist',
      'Free for personal use with no meaningful restrictions',
    ],
    cons: [
      'Not open source (though notes are stored in open plain text format)',
      'The optional Sync feature costs $8/month',
      'Can be overwhelming for users who want a simpler app',
      'Learning curve for more advanced features',
    ],
    content: `
      <h2>Why Note-Taking Apps Are a Privacy Issue</h2>
      <p>Google Keep stores your notes on Google's servers, where they can be read, used for AI training, and subpoenaed. Evernote has had a troubled history with privacy — at one point allowing employees to read user notes. Notion and Notion-like apps store everything in the cloud by default. Your notes often contain your most private thoughts, plans, and information.</p>

      <h2>How Obsidian Is Different</h2>
      <p>Obsidian stores your notes as plain text files in a folder on your computer or phone. There is no cloud, no server, no company that can read them. The folder is called a "vault" — just a regular folder full of text files, organised however you like. You can back this folder up yourself, put it on an external drive, or sync it between devices using Syncthing.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your notes are just text files sitting in a folder on your computer — Obsidian reads and writes standard Markdown (.md) files directly to your local filesystem and makes no network requests during normal use. You could open them in Notepad right now. No account, no server, no company holding your thoughts. There is no proprietary file format: your data is stored in a format any text editor can open.</div></div>

      <p>Because notes are plain text, they're not locked into Obsidian. You can open them in any text editor. If Obsidian ever disappears or changes, your notes are completely unaffected.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Download Obsidian from <strong>obsidian.md</strong> for your computer or phone.</li>
        <li>When it opens, click "Create new vault." Choose a name and pick a location on your computer to store notes — your Documents folder is fine.</li>
        <li>Click the page icon in the left sidebar to create your first note. Type anything. It saves automatically.</li>
        <li>On mobile: install from the App Store or Play Store. Tap "Create new vault" and name it. Notes are stored in your phone's storage.</li>
      </ol>

      <h2>Syncing Between Devices</h2>
      <p>Obsidian offers a paid Sync service ($8/month) that syncs your vault through Obsidian's servers with end-to-end encryption. Alternatively, sync the vault folder using Syncthing (free, no third-party server) for complete privacy. Many users also simply keep notes on one primary device and don't need sync.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>If you pay for Obsidian Sync, your notes are scrambled before they leave your device — Obsidian can't read them (client-side AES-256 encryption, with keys derived from your account credentials, means servers store only ciphertext). If you use Syncthing instead, your notes go directly from one of your devices to another with no middleman at all.</div></div>

      <h2>Verdict</h2>
      <p>Obsidian is the best choice for anyone who wants a capable note-taking app without their notes being stored in someone else's cloud. Free for personal use, powerful, and your notes are genuinely yours.</p>
    `
  };
