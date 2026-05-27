export default {
    id: 'practical-privacy-stack',
    index: 1,
    title: 'Building a Practical Privacy Stack',
    category: 'Basics',
    date: '2026-05-22',
    readTime: '12 min read',
    excerpt: 'Privacy isn\'t about perfect anonymity, it\'s about layering good software choices, compartmentalisation, and disciplined habits. Here is a practical overview.',
    tags: ['privacy', 'basics', 'stack', 'compartmentalisation'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['brave', 'firefox', 'bitwarden', 'signal', 'mullvad', 'protonmail', 'grapheneos', 'aegis-authenticator', '2fas', 'ivpn', 'mullvad-browser', 'arkenfox-user-js', 'simplex-chat', 'briar', 'posteo', 'mailbox-org', 'thunderbird', 'o-o-shutup10'],
    content: `
      <h2>The Core Mindset: It's Not Binary</h2>
      <p>A common misconception is that privacy is all-or-nothing — that if you use Google Maps, there's no point in using a private browser. This is false. Privacy is about layers. If your goal is to "stay private online" across your devices, the biggest gains usually come from a combination of good software choices, compartmentalisation, and disciplined habits.</p>
      <p>No single app makes you private. The strongest setup is a layered "privacy stack." Even modest changes dramatically improve your privacy and put you far ahead of the average internet user.</p>

      <h2>1. Browser Privacy (Most Important Daily Layer)</h2>
      <p>Your browser leaks enormous amounts of data by default. Moving away from standard Chrome is the most impactful step you can take.</p>
      <ul>
        <li><strong>Beginner-friendly:</strong> <strong>Brave Browser</strong> offers strong defaults and built-in tracker/ad blocking. It's the best "install and forget" option. <strong>Firefox</strong> is open-source, highly customisable, and excellent with privacy tweaks (like uBlock Origin). For extreme Firefox hardening, you can use the <strong>Arkenfox</strong> configuration.</li>
        <li><strong>Advanced anonymity:</strong> <strong>Tor Browser</strong> routes traffic through the Tor network for strong anonymity protections, though it is much slower and some sites block it. <strong>Mullvad Browser</strong> is a great middle ground, designed by the Tor team to reduce browser fingerprinting without the Tor network's speed penalty.</li>
      </ul>

      <h2>2. Password Management (Critical)</h2>
      <p>This is the single highest-value security improvement most people can make. Without a password manager, people reuse passwords — one of the biggest security risks online.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>A password manager generates unique passwords, stores them encrypted, autofills your logins, and supports two-factor authentication (2FA). This prevents a breach at one website from compromising your other accounts.</div></div>
      <ul>
        <li><strong>Best balance:</strong> <strong>Bitwarden</strong> is open-source, audited, and works everywhere with an excellent free plan.</li>
        <li><strong>Most polished UX:</strong> <strong>1Password</strong> has excellent family/team features and a strong security architecture, though it is closed-source.</li>
        <li><strong>Privacy ecosystem:</strong> <strong>Proton Pass</strong> is open-source, integrates with Proton Mail/VPN, and includes email aliases.</li>
        <li><strong>Offline option:</strong> <strong>KeePassXC</strong> uses a local encrypted database with no cloud dependency.</li>
      </ul>

      <h2>3. Encrypted Messaging</h2>
      <p>Normal SMS and many social apps expose metadata and message content.</p>
      <ul>
        <li><strong>Best mainstream option:</strong> <strong>Signal</strong> is end-to-end encrypted by default, open-source, and collects minimal metadata. It is the gold standard.</li>
        <li><strong>More anonymity-focused:</strong> <strong>Session</strong> requires no phone number and uses decentralized routing. <strong>SimpleX Chat</strong> goes a step further by using no user IDs or phone numbers at all. <strong>Briar</strong> is excellent for peer-to-peer messaging that can even work offline via Bluetooth.</li>
      </ul>
      <p>Avoid SMS, regular Facebook Messenger, Instagram DMs, or Telegram regular chats (which are not end-to-end encrypted by default) for sensitive conversations.</p>

      <h2>4. VPNs (Useful, But Often Misunderstood)</h2>
      <p>A VPN hides your traffic from your ISP, hides your IP from websites, and protects you on public Wi-Fi. It does <em>not</em> make you anonymous, stop fingerprinting, or stop Google/Facebook tracking if you are logged in. Avoid free, random VPNs — many monetise your traffic.</p>
      <ul>
        <li><strong>Strong privacy VPNs:</strong> <strong>Mullvad</strong> has an excellent privacy reputation and anonymous account numbers. <strong>IVPN</strong> offers a similarly strict no-logs policy with anonymous accounts and no email requirement. <strong>Proton VPN</strong> offers a strong privacy focus, open-source apps, and a good free tier.</li>
      </ul>

      <h2>5. Email Privacy</h2>
      <p>Email is often your identity backbone. Using privacy-oriented providers like <strong>Proton Mail</strong>, <strong>Tuta Mail</strong>, <strong>Posteo</strong>, or <strong>Mailbox.org</strong> is a solid step up from Big Tech providers. To read your email safely on a computer without web trackers, use a local client like <strong>Thunderbird</strong>.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>A highly useful practice is using email aliases — creating one unique email address per service. This helps contain data breaches and prevents companies from correlating your accounts. Good tools for this include Proton aliases, SimpleLogin, and Addy.io.</div></div>

      <h2>6. Operating Systems</h2>
      <ul>
        <li><strong>Android:</strong> The best privacy setup is <strong>GrapheneOS</strong> (a hardened Android fork for Pixel devices). A more practical mainstream setup is to use regular Android but disable the ad ID, remove unnecessary apps, use Signal/Firefox/Brave, and avoid using a Google account where possible.</li>
        <li><strong>Windows:</strong> The main weaknesses are telemetry and ad tracking. Use a local account instead of a Microsoft account, and use tools like <strong>O&O ShutUp10++</strong> to easily disable the hidden telemetry settings. Finally, use full-disk encryption.</li>
        <li><strong>macOS:</strong> Generally better privacy defaults than Windows, but Apple still collects metadata. Disable analytics sharing, use FileVault, and avoid unnecessary iCloud syncing.</li>
        <li><strong>Linux:</strong> Best for control and transparency (e.g., Fedora, Debian, Linux Mint). For advanced privacy, Qubes OS or Tails are exceptional.</li>
      </ul>

      <h2>7. Essential Practices (More Important Than Apps)</h2>
      <p>These habits matter more than buying "privacy software":</p>
      <ul>
        <li><strong>Use unique passwords everywhere:</strong> A password manager solves this.</li>
        <li><strong>Enable MFA / 2FA:</strong> Use authenticator apps like <strong>Aegis</strong> or <strong>2FAS</strong>, or hardware security keys. Avoid SMS 2FA when possible.</li>
        <li><strong>Separate identities:</strong> Don't use one identity for banking, gaming, activism, and shopping. Compartmentalisation is one of the strongest privacy tools.</li>
        <li><strong>Reduce data sharing:</strong> Deny unnecessary permissions, turn off location unless needed, and avoid "sign in with Google/Facebook".</li>
        <li><strong>Keep software updated:</strong> Most real-world compromises happen through outdated browsers or vulnerable apps, not "nation-state hacking".</li>
      </ul>

      <h2>The Honest Bottom Line</h2>
      <p>For normal users, the biggest risks are password reuse, phishing, data breaches, ad-tech tracking, and oversharing. You don't need extreme paranoia or complicated setups. A password manager, Signal, browser hardening, less Big Tech dependence, and better habits put you in an incredibly strong position.</p>
    `
  };
