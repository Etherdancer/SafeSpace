export default {
  id: 'cryptomator',
  website: 'https://cryptomator.org',
  index: 230,
  name: 'Cryptomator',
  tagline: 'Your cloud files encrypted before they leave your device.',
  category: 'Encryption',
  scores: {
    dataPrivacy: 29,
    security: 28,
    tracking: 20,
    userControl: 10,
    transparency: 10,
    total: 97
  },
  platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Cure53 (2017), Mühlbauer (2021)',
  relatedArticles: [],
  verdict: 'Cryptomator makes your cloud storage zero-knowledge — encrypted on your device, unreadable to anyone else.',
  pros: [
    'Zero-knowledge encryption: the cloud provider never sees your unencrypted files',
    'Works with any cloud service — Dropbox, Google Drive, iCloud, OneDrive',
    'Independently audited twice with results published openly',
    'Fully open source — desktop version is free, mobile apps are one-time purchase',
  ],
  cons: [
    'Mobile apps on iOS and Android require a one-time in-app purchase to unlock',
    'Does not hide file names or folder structure by default in older vaults (v7 format)',
    'Encrypted vault format is not useful without Cryptomator to open it',
  ],
  content: `
    <h2>Why Cryptomator?</h2>
    <p>When you put files in Dropbox or Google Drive, those companies can read them. Their terms of service say so. Cryptomator fixes this by encrypting your files on your device before they are uploaded — so by the time the cloud service receives them, they are already scrambled into unreadable ciphertext.</p>
    <p>The cloud service stores encrypted data it cannot read. Only you, with your password, can decrypt it. This is called zero-knowledge encryption.</p>

    <h2>How it works</h2>
    <p>Cryptomator creates an encrypted vault — a special folder on your computer. You place files into it like any normal folder. Cryptomator automatically encrypts each file using AES-256-GCM encryption and a unique key before it is written to disk or synced to the cloud. Your cloud sync client then uploads the encrypted files without knowing what is inside them.</p>
    <p>When you open a file, Cryptomator decrypts it on the fly and presents it through a virtual drive. The process is transparent — you just use your files normally.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Cryptomator scrambles your files before they ever leave your computer. Your cloud service sees a folder full of gibberish. Only your password can turn that gibberish back into real files — and that password never leaves your device.</div></div>

    <h2>Security audits</h2>
    <p>Cryptomator has been independently audited by Cure53 in 2017 and by the German firm Mühlbauer in 2021. Both audit reports are published on the Cryptomator website. The auditors found no critical vulnerabilities. This level of transparency is rare and reassuring.</p>
    <p>The encryption design is also fully documented. You do not need to trust the app — you can verify that the encryption is sound by reading the specification.</p>

    <h2>Works with anything</html>
    <p>Because Cryptomator just encrypts a folder that your sync client handles, it works with any cloud service. Dropbox, Google Drive, OneDrive, iCloud, Nextcloud, WebDAV — if your sync client can see the folder, Cryptomator can protect it. You are not locked into any particular service.</p>
  `
};
