export default {
    id: 'eraser',
    website: 'https://eraser.heidi.ie/',
    index: 248,
    name: 'Eraser',
    tagline: 'Securely delete files so they stay gone.',
    category: 'Disk Wiping',
    scores: {
      dataPrivacy: 26,
      security: 24,
      tracking: 20,
      userControl: 9,
      transparency: 8,
      total: 87
    },
    platforms: ['Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'The go-to secure deletion tool for Windows, with right-click integration and scheduled wiping that makes secure deletion part of your daily routine.',
    pros: [
      'Open source under the GNU GPL',
      'Integrates directly into the Windows Explorer right-click menu',
      'Supports multiple overwrite standards (Gutmann, DoD, PRNG)',
      'Can wipe free space on a drive to erase previously deleted files',
      'Scheduler allows automatic recurring secure wipes',
      'Handles locked files by scheduling deletion at next boot',
    ],
    cons: [
      'Not effective on SSDs due to wear levelling and TRIM',
      'Windows only',
      'Development is slower in recent years',
      'Cannot wipe the drive the operating system is running from',
    ],
    content: `
      <h2>Why Eraser?</h2>
      <p>Standard file deletion in Windows just removes the entry from the file table. The actual data sits on disk until something else overwrites it. Eraser addresses this by overwriting a file's disk sectors with random data before deleting it, making recovery impractical.</p>
      <p>It is a long-standing, open-source tool that integrates directly into Windows Explorer, so secure deletion becomes as easy as a right-click.</p>

      <h2>How it works</h2>
      <p>When you erase a file with Eraser, it writes over the file's allocated disk sectors with one or more passes of patterned or random data, then deletes the file. The number and pattern of overwrite passes depends on the standard you choose. For free space wiping, Eraser fills all unallocated space on the drive with random data, overwriting the remnants of previously deleted files.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Imagine writing over a letter so many times that even a magnifying glass cannot read the original. That is what Eraser does to your files before it deletes them — it scribbles all over them first.</div></div>

      <h2>SSD limitations</h2>
      <p>Eraser works best on traditional hard drives (HDDs). Solid-state drives (SSDs) use a technology called wear levelling, which means the drive's controller decides where data is physically written — not the software. This can result in some sectors being skipped during an overwrite pass. For SSDs, secure deletion is better achieved through ATA Secure Erase commands or hardware encryption with key deletion, which Eraser does not perform.</p>
      <p>If your computer has an SSD and you are wiping for disposal, ShredOS with its ATA Secure Erase support is a better option.</p>

      <h2>Scheduler and free space wiping</h2>
      <p>Eraser can run on a schedule — for example, wiping free space every week automatically. This catches files that were deleted normally in the past and whose data still lingers on disk. This is a practical way to keep historical data recoverable by attackers low even if you are not deleting files securely day to day.</p>

      <h2>Verdict</h2>
      <p>Eraser is the best free secure deletion tool for Windows HDDs. The right-click integration makes it frictionless, and the free space wipe feature is genuinely useful. Just be aware that it is not the right tool for SSDs — for those, use a bootable solution with hardware-level secure erase.</p>
    `
  };
