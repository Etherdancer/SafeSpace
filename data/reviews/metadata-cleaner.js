export default {
    id: 'metadata-cleaner',
    website: 'https://0xacab.org/jvoisin/mat2',
    index: 37,
    name: 'Metadata Cleaner (MAT2)',
    tagline: 'Strip hidden tracking info from files',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 97
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security', 'metadata-problem'],
    verdict: 'Whenever you take a photo, hidden data (like GPS coordinates and camera models) is saved inside it. Metadata Cleaner removes this invisible information before you share files online.',
    pros: [
      'Very simple interface (drag, drop, clean)',
      'Uses the powerful MAT2 library under the hood',
      'Supports images, PDFs, office documents, and audio',
      'Completely free and open source'
    ],
    cons: [
      'Cleaning PDFs can sometimes break interactive forms'
    ],
    content: `
      <h2>What Is Metadata?</h2>
      <p>When you take a photo with your phone, the image file doesn't just contain the picture. It also contains hidden data called EXIF data — the time and date the photo was taken, the model of camera or phone used, and often the precise GPS coordinates of where you were standing when you took it.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every photo you take secretly records where you were, when, and with what device. Every PDF you create can contain your name and what software you used. Metadata Cleaner removes all of this before you share the file. The technical name is EXIF (Exchangeable image file format) metadata — stored in the file header of JPEG, TIFF, and RAW images — and modern photos routinely embed GPS coordinates with metre-level accuracy, device serial numbers, and ambient light sensor data. PDF files can contain author names, creation timestamps, editing software, and document revision history.</div></div>

      <h2>How to Use It</h2>
      <p>Metadata Cleaner is available as a Flatpak (the easiest way to install it on any Linux distribution). Open it, drag your photos or documents into the window, and click "Clean." The tool removes all the hidden data and saves clean copies of the files.</p>

      <h2>What It Cleans</h2>
      <ul>
        <li><strong>Images (JPEG, PNG, TIFF, WebP):</strong> GPS coordinates, device model, timestamps, camera settings</li>
        <li><strong>PDFs:</strong> Author name, creation date, editing software, document history</li>
        <li><strong>Office documents:</strong> Author, revision history, tracked changes</li>
        <li><strong>Audio files:</strong> Recording software, ID3 tags beyond title/artist</li>
      </ul>

      <h2>Verdict</h2>
      <p>Metadata Cleaner is a simple, essential tool for anyone who shares files. Run your photos and documents through it before sharing them publicly or sending to strangers. On Linux, pair it with the ExifCleaner cross-platform option or use it as your primary tool — it handles a wider range of file types.</p>
    `
  };
