export default {
    id: 'bleachbit',
    website: 'https://www.bleachbit.org',
    index: 38,
    name: 'BleachBit',
    tagline: 'Deep-clean your system caches and trackers',
    category: 'Security Tools',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 88
    },
    externalScores: {
      appStore: 4.4,
      playStore: 4.5,
    },
    platforms: ['Windows', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'BleachBit is like CCleaner but open-source and genuinely private. It shreds temporary files, tracking cookies, and system caches to free up disk space and remove your forensic footprint.',
    pros: [
      'Frees disk space while removing tracking data',
      'Can "shred" files to prevent data recovery',
      'Wipes free disk space to hide deleted files permanently',
      'No adware, spyware, or "premium" upsells'
    ],
    cons: [
      'Overzealous cleaning (like deleting system caches) can slow down the computer initially while it rebuilds them'
    ],
    content: `
      <h2>What Does BleachBit Clean?</h2>
      <p>Every time you use your computer, it leaves behind a trail: browser caches, temporary files, application logs, recent documents lists, tracking cookies, and much more. BleachBit finds and destroys all of it, leaving your system cleaner and your activities harder to reconstruct.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When you normally delete a file, the data is still on the disk — it's just marked as "available." Special tools can recover it. BleachBit overwrites deleted files with random gibberish so they can't be read even with recovery software. It uses multi-pass overwriting for file shredding and can wipe free disk space to prevent forensic recovery of previously deleted files.</div></div>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Clean specific apps:</strong> BleachBit knows about hundreds of applications and cleans their cache and log files specifically</li>
        <li><strong>Shred files:</strong> Permanently destroy a specific file so it can't be recovered</li>
        <li><strong>Wipe free space:</strong> Overwrite all the empty space on your drive to destroy previously deleted files</li>
        <li><strong>No upsells:</strong> Free, open source, no nag screens or "premium" tiers</li>
      </ul>

      <h2>What to Be Careful About</h2>
      <p>BleachBit is powerful, which means it's possible to clean things that slow your computer down temporarily. For example, cleaning browser caches means your browser has to re-download images and scripts for sites you've already visited. This is the right privacy trade-off but expect a slightly slower browsing experience immediately after a clean.</p>

      <h2>Verdict</h2>
      <p>BleachBit is the best free, open-source system cleaner available. Run it monthly to free disk space and reduce your digital footprint. For the most sensitive files, use the "shred" option rather than normal deletion.</p>
    `
  };
