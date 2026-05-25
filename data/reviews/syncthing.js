export default {
    id: 'syncthing',
    website: 'https://syncthing.net',
    index: 12,
    name: 'Syncthing',
    tagline: 'Sync your files between your own devices — no cloud involved',
    category: 'File Sync',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; used in high-security environments',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The privacy-ideal solution for keeping files in sync across your own devices. Your files never touch any external server. The setup takes 20 minutes and then works automatically.',
    pros: [
      'Files sync directly between your devices — no server, no company, no third party',
      'End-to-end encrypted in transit between your own devices',
      'Free, open source, no accounts',
      'Works on Windows, Mac, Linux, and Android',
      'Once set up, works automatically in the background',
    ],
    cons: [
      'Both devices must be on for syncing to happen (no cloud buffer)',
      'Not available as an official app on iPhone (Apple restrictions)',
      'Initial setup is more complex than Dropbox or Google Drive',
      'No web interface to access files when away from your devices',
    ],
    content: `
      <h2>The Problem With Cloud Storage</h2>
      <p>Google Drive, Dropbox, and iCloud all work by uploading your files to a company's servers. The company can read your files (Google scans Drive files to improve AI models), law enforcement can subpoena them, and if the company is hacked, your files are exposed. You're trusting a third party with your data.</p>
      <p>Syncthing works completely differently. Instead of uploading files to a cloud server, it syncs them directly from one of your devices to another — phone to laptop, laptop to desktop, etc. Your files never leave your own hardware. There is no server, no company, no third party.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Syncthing sends your files directly from one of your devices to another, encrypted the whole way — no company ever touches your files. It uses the Block Exchange Protocol (BEP) over TLS 1.3, with device authentication via public-key cryptography. No central server ever stores or relays your file contents; a discovery server only helps devices find each other's network addresses.</div></div>

      <h2>How It Works</h2>
      <p>Think of Syncthing like a direct wire between your devices. When you save a photo on your phone, Syncthing notices and quietly copies it to your laptop in the background — over your home WiFi or the internet. Both devices always have the same files. If one device is off, the sync happens when it turns back on. Your files are always on your own devices, nowhere else.</p>

      <h2>Setting Up Syncthing (Phone to Computer)</h2>
      <ol>
        <li><strong>On your computer:</strong> Download Syncthing from <strong>syncthing.net</strong>. Install it. It runs as a background programme and opens a control panel in your web browser at address 127.0.0.1:8384.</li>
        <li><strong>On Android:</strong> Search "Syncthing-Fork" in the Play Store and install it. (iPhone users: Syncthing isn't available on iPhone. Use Wormhole.app for one-off file sharing instead.)</li>
        <li>Open the Android app. Go to <strong>This Device</strong> and you'll see a Device ID — a long code unique to your phone.</li>
        <li>In the computer's Syncthing panel, click <strong>Add Device</strong>. Enter the phone's Device ID (or scan the QR code the phone shows).</li>
        <li>Accept the connection request on both devices when prompted.</li>
        <li>Add a folder to sync: on your phone, go to <strong>Folders</strong> and tap the + button. Choose a folder (e.g., your camera folder). On your computer, accept the folder share when it appears. Syncing begins automatically.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Syncthing takes more effort to set up than Dropbox, but once running, it's automatic and your files stay entirely under your control. For anyone who wants their photos, documents, and files to sync across devices without involving any company's servers, Syncthing is the answer.</p>
    `
  };
