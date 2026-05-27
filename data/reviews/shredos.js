export default {
    id: 'shredos',
    website: 'https://github.com/PartialVolume/shredos.x86_64',
    index: 247,
    name: 'ShredOS',
    tagline: 'Boot from USB. Wipe every last bit. Done.',
    category: 'Disk Wiping',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A bootable, open-source disk wiper that is the safest way to permanently destroy data on any drive before recycling or disposal.',
    pros: [
      'Fully open source',
      'Boots independently of the operating system — works on any computer',
      'Uses nwipe, a fork of the respected DBAN wiping engine',
      'Supports multiple secure wipe standards (DoD, Gutmann, PRNG stream)',
      'Works on HDDs, SSDs, and USB drives',
      'Generates a cryptographically verifiable wipe certificate',
    ],
    cons: [
      'Command-line style interface can be unfamiliar to some users',
      'SSDs have hardware-level wear levelling that may limit full overwrite effectiveness',
      'Wiping is permanent and irreversible — no undo',
      'Not suitable for wiping the drive an OS is actively running from (by design)',
    ],
    content: `
      <h2>Why ShredOS?</h2>
      <p>When you delete a file on Windows, the data is not actually gone. The space is just marked as available. Even when you format a drive, the original data remains readable with the right tools. If you sell, donate, or recycle a computer without properly wiping the drive, anyone can recover your files, passwords, and personal data.</p>
      <p>ShredOS solves this by booting from a USB stick and overwriting every sector of a drive with random data, multiple times. The operating system on the computer is bypassed entirely — so there are no file locks, no permission issues, and no exceptions.</p>

      <h2>How it works</h2>
      <p>ShredOS is a minimal Linux environment that runs entirely from RAM after booting. It launches nwipe, which overwrites every addressable sector of the target drive with patterns of data designed to make original content unrecoverable. You choose a wipe standard — from a single random pass to the 35-pass Gutmann method — and let it run. When finished, it produces a log with a SHA256 hash you can use to verify the wipe took place.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Deleting files is like erasing a name from a library list — the book is still on the shelf. ShredOS is like shredding every page of every book. After it finishes, there is nothing left to read.</div></div>

      <h2>Which wipe standard should you use?</h2>
      <p>For most hard drives (HDDs), a single-pass random overwrite is sufficient to prevent practical recovery. The DoD 5220.22-M standard uses multiple passes and is widely accepted for compliance purposes. The Gutmann 35-pass method is thorough but very slow, and its value on modern drives is debated by security researchers.</p>
      <p>For SSDs, overwriting is less reliable due to wear levelling — the drive controller may redirect writes, leaving some sectors untouched. The most reliable approach for SSDs is to use the manufacturer's secure erase command or rely on hardware encryption with key deletion.</p>

      <h2>Open source, no telemetry, no cloud</h2>
      <p>ShredOS is entirely open source. It runs offline, sends nothing anywhere, and produces a local wipe log. There is no registration, no account, and no network requirement.</p>

      <h2>Verdict</h2>
      <p>ShredOS is the right tool when data destruction matters. Boot from USB, wipe the target drive, and get a verifiable log. It is the cleanest, most trustworthy way to make sure your data does not follow a device into someone else's hands.</p>
    `
  };
