export default {
    id: 'proton-drive',
    website: 'https://proton.me/drive',
    index: 103,
    name: 'Proton Drive',
    tagline: 'End-to-end encrypted cloud storage from Switzerland',
    category: 'Cloud Storage',
    scores: {
      dataPrivacy: 30,
      security: 29,
      tracking: 20,
      userControl: 8,
      transparency: 9,
      total: 96
    },
    platforms: ['Web', 'iOS', 'Android', 'Windows', 'macOS'],
    pricing: 'Free tier / Paid',
    openSource: true,
    auditedBy: 'Securitum, independent audits',
    relatedArticles: ['metadata-problem'],
    verdict: 'Proton Drive is the safest place to store your personal files. Because it uses zero-knowledge encryption, not even the employees at Proton can see what you upload. It is a massive privacy upgrade over Google Drive.',
    pros: [
      'True zero-knowledge end-to-end encryption',
      'Encrypts file names, folder structures, and metadata',
      'Based in Switzerland with strict privacy laws',
      'Open-source apps across all platforms',
      'Integrates perfectly with Proton Mail'
    ],
    cons: [
      'Less free storage than Google Drive',
      'Does not yet have advanced document editing like Google Docs'
    ],
    content: `
      <h2>Why Proton Drive?</h2>
      <p>When you put a file in Google Drive or Dropbox, the company holds the key to unlock it. This means they can scan your files, and if they get hacked, your files can be stolen. Proton Drive uses "zero-knowledge" encryption. This means the file is locked on your computer before it is uploaded, and only you hold the key.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Because Proton never has your key, they literally cannot read your files. Even if the police demanded to see your photos, Proton would have nothing but scrambled code to hand over.</div></div>

      <h2>Beyond Just the Files</h2>
      <p>Many "secure" cloud drives encrypt the file contents, but leave the file name and file size visible. Proton Drive encrypts everything: the file name, the folder name, and even the date it was created. This protects you from metadata tracking.</p>

      <h2>The Ecosystem</h2>
      <p>If you already use Proton Mail or Proton VPN, getting Proton Drive is a no-brainer. It is built by the same trusted Swiss company and uses the same strict privacy rules.</p>

      <h2>Verdict</h2>
      <p>If you have sensitive documents, personal photos, or financial records that you want to back up safely, Proton Drive is the absolute best choice. It gives you peace of mind that nobody is looking through your digital filing cabinet.</p>
    `
  };
