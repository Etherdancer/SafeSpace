export default {
    id: 'exifcleaner',
    website: 'https://exifcleaner.com',
    index: 16,
    name: 'ExifCleaner',
    tagline: 'Drag and drop to strip hidden location data from photos',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 26,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 89
    },
    externalScores: {
      appStore: 4.6,
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed',
    relatedArticles: ['metadata-problem'],
    verdict: 'The simplest way to remove hidden GPS data and other metadata from photos before sharing them. Drag a photo in, get a clean photo out. Takes seconds.',
    pros: [
      'Removes GPS coordinates, device model, timestamps and all other hidden photo data',
      'Drag-and-drop interface — no technical knowledge needed',
      'Works on multiple photos at once',
      'Free and open source',
      'Works completely offline — photos never leave your computer',
    ],
    cons: [
      'Desktop only (Windows, Mac, Linux) — no mobile app',
      'For mobile, the built-in OS options are needed instead',
    ],
    content: `
      <h2>Why This Matters</h2>
      <p>Every photo taken with a modern smartphone contains hidden data called EXIF data.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your phone hides a bunch of information inside every photo it takes — including the exact GPS location where you took it (accurate to a few metres), the date and time, and what kind of phone you have. When you share the photo, all of that hidden data goes with it unless you remove it first. This data (called EXIF — Exchangeable Image File Format metadata) is embedded in JPEG and other image files at the moment of capture, and includes GPS coordinates (latitude, longitude, altitude), timestamp, camera make and model, lens details, and exposure settings.</div></div>

      <p>In 2012, journalist Vice published a photo of fugitive John McAfee that still had GPS coordinates embedded in its EXIF data. He was located within hours. This happens in less dramatic ways every day — someone sharing a photo taken at home accidentally reveals their address, or a photo taken at a medical appointment reveals a health matter.</p>

      <h2>How to Use ExifCleaner</h2>
      <ol>
        <li>Download ExifCleaner from <strong>exifcleaner.com</strong>. Choose your operating system.</li>
        <li>Install and open it. You'll see a large empty area in the middle of the window.</li>
        <li>Drag your photo files onto that area. Or click to browse for them.</li>
        <li>ExifCleaner immediately removes all EXIF data from the files. The window shows you what was removed from each photo.</li>
        <li>The cleaned photos are saved in the same location as the originals. Done.</li>
      </ol>
      <p>You can drag multiple photos at once. ExifCleaner processes them all in seconds.</p>

      <h2>On Windows Without ExifCleaner</h2>
      <p>Windows has a built-in option: right-click a photo file, choose Properties, click the Details tab, and at the bottom click "Remove Properties and Personal Information." Select "Create a copy with all possible properties removed." This is slightly more steps but requires no download.</p>

      <h2>On iPhone</h2>
      <p>When sharing a photo through the share sheet, tap Options at the top before choosing where to share. Turn off Location. This removes GPS data but keeps other EXIF data. For a complete strip, you need a third-party app like "Metapho" (free basic tier).</p>

      <h2>Verdict</h2>
      <p>ExifCleaner is so simple and so useful that it should be on every computer. If you ever share photos with strangers, on forums, via email, or anywhere that isn't a platform that strips EXIF automatically (Instagram, Twitter/X do strip it — most other places don't), run photos through ExifCleaner first.</p>
    `
  };
