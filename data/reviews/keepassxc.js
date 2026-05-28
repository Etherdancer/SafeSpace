export default {
    id: 'keepassxc',
    website: 'https://keepassxc.org',
    index: 2,
    name: 'KeePassXC',
    tagline: 'Your passwords stay on your device, always',
    category: 'Password Managers',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 4.7,
      playStore: 4.1,
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'European Commission (2016), cure53 (2023)',
    relatedArticles: ['password-managers-guide', 'user-accounts-and-privacy', 'linux-privacy-security', 'privacy-vs-convenience'],
    verdict: 'KeePassXC is the best option for people who want zero cloud involvement. Your password database lives only on your device. The tradeoff is that syncing to your phone requires extra setup.',
    pros: [
      'Completely offline — your passwords never touch the internet',
      'Free and open source, no accounts, no subscriptions',
      'Extremely well audited and trusted by security professionals',
      'Works on Windows, Mac, and Linux',
      'Database is a single portable file you fully control',
    ],
    cons: [
      'No official mobile app — syncing to phone requires Syncthing or similar',
      'No built-in cloud sync — you manage backups yourself',
      'Interface is less beginner-friendly than Bitwarden',
    ],
    content: `
      <h2>What Makes KeePassXC Different</h2>
      <p>Most password managers store your encrypted passwords on their servers and sync them to your devices. KeePassXC is different: your passwords are stored in a single encrypted file on your computer, and nowhere else. There is no company, no server, no cloud — just a file on your device that only your master password can open.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your passwords live in one scrambled file on your computer — a local .kdbx database encrypted with AES-256 or ChaCha20, with the key derived from your master password via Argon2. KeePassXC makes no internet connection at all. No server can be hacked. No company can be compelled to hand over your data. Just a file that only your master password can open.</div></div>

      <p>This means there is nothing for hackers to target beyond your own device. There are no servers to be breached, no company to be legally compelled to hand over data, no service that can go offline or change its terms. Your password database is entirely yours.</p>

      <h2>Who Should Use KeePassXC?</h2>
      <p>KeePassXC is best for people who:</p>
      <ul>
        <li>Don't want their passwords stored on any company's server, ever</li>
        <li>Are comfortable managing their own backups</li>
        <li>Use a computer (Windows, Mac, or Linux) as their primary device</li>
        <li>Want the maximum possible control over their data</li>
      </ul>
      <p>If you want passwords to automatically sync between your computer and phone without any effort, Bitwarden may be more practical. You can also use KeePassXC and sync the database file yourself using Syncthing.</p>

      <h2>How to Get Started</h2>
      <ol>
        <li>Download KeePassXC from <strong>keepassxc.org</strong>. Choose your operating system.</li>
        <li>Open it and click "Create new database." Give it a name and choose where to save the file — your Documents folder is fine.</li>
        <li>Set a master password. Write this down on paper and store it somewhere safe — if you forget it, there is no recovery option.</li>
        <li>To add a password: click the + button, enter the website name, your username, and let KeePassXC generate a random password for you (click the dice icon).</li>
        <li>Install the KeePassXC browser extension (available for Firefox, Chrome, and Edge) to enable auto-fill in your browser.</li>
        <li>Back up your database file: copy it to an external drive or USB stick periodically.</li>
      </ol>

      <h2>Using It on Your Phone</h2>
      <p>KeePassXC itself is a desktop app. For mobile, use <strong>KeePassDX</strong> (Android, free, open source) or <strong>Strongbox</strong> (iPhone, free basic tier). These apps can open the same database file that KeePassXC creates. To get the file to your phone, use Syncthing for automatic sync, or copy it manually via USB cable.</p>

      <h2>Verdict</h2>
      <p>KeePassXC is the gold standard for offline password management. It requires a little more effort to set up and maintain than a cloud-based manager, but for users who want their passwords to never leave their own devices, it's the right choice.</p>
    `
  };
