export default {
    id: 'etesync',
    website: 'https://www.etesync.com',
    index: 286,
    name: 'EteSync',
    tagline: 'Encrypted calendar and contacts sync, end-to-end.',
    category: 'Calendar',
    scores: {
      dataPrivacy: 29,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 96
    },
    platforms: ['Web', 'iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'End-to-end encrypted calendar, contacts, and tasks sync — your data is unreadable to everyone but you.',
    pros: [
      'End-to-end encryption: the server never sees your calendar or contacts data',
      'Self-hostable — run your own server for complete independence',
      'Works with standard apps via CalDAV and CardDAV',
      'Open source client and server code',
      'Zero tracking, zero ads',
      'Supports calendars, contacts, tasks, and notes',
    ],
    cons: [
      'Paid hosted plan required for long-term use (free tier is limited)',
      'Setup is more involved than Google Calendar',
      'If you lose your encryption key/passphrase, your data cannot be recovered',
      'Some third-party app integrations require an adapter app',
    ],
    content: `
      <h2>Why EteSync?</h2>
      <p>Google Calendar knows your appointments, your location, who you're meeting, and when. That information is stored on Google's servers in a way Google can read.</p>
      <p>EteSync (built on the Etebase platform) does the same job — syncing your calendars, contacts, and tasks across all your devices — but encrypts everything before it ever leaves your device. The server only sees scrambled data it cannot read.</p>

      <h2>How it works</h2>
      <p>Before your calendar data is sent to the EteSync server, it's encrypted on your device using a key that only you hold. This is called end-to-end encryption (E2EE). The server stores the encrypted blob, but cannot read what's inside it.</p>
      <p>When you open your calendar app on another device, it downloads the encrypted blob and decrypts it locally using your key. Sync happens. But at no point does the server know what your appointments say.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>EteSync encrypts your data on your device before uploading it. The server is just a locked safe — it holds your data but can't open it. Only your devices, which have the key, can unlock and read it. Even EteSync's own team cannot see your calendar entries.</div></div>

      <h2>Using it with your existing apps</h2>
      <p>EteSync doesn't force you into a new calendar app. It provides a local adapter — a small bridge that runs on your device — that makes your encrypted EteSync data look like a normal CalDAV/CardDAV server. This means apps like Thunderbird, Apple Calendar, or any Android calendar app can sync with it using standard protocols.</p>
      <p>On Android, the EteSync app handles syncing directly. On desktop, you use the EteSync DAV Bridge.</p>

      <h2>Self-hosting</h2>
      <p>Don't want to trust anyone else's server? You can run the EteSync server yourself. All server and client code is open source and available on GitHub. Self-hosting gives you complete control over where your encrypted data lives.</p>
      <p>Even on a self-hosted server, the data remains end-to-end encrypted. Your server admin (even if that's you) cannot read your calendar entries without the encryption key.</p>

      <h2>Verdict</h2>
      <p>EteSync is one of the few calendar sync solutions that actually earns a strong privacy recommendation. End-to-end encryption is real, the code is open source, and self-hosting is supported. The setup takes a little more effort than Google Calendar, but the privacy trade-off is enormous.</p>
    `
  };
