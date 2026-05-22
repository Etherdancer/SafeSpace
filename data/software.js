/* ============================================================
   SafeSpace — data/software.js
   Full software reviews for all tools mentioned across articles
   ============================================================ */

const REVIEWS = [
  /* ── PASSWORD MANAGERS ───────────────────────────────────── */
  {
    id: 'bitwarden',
    website: 'https://bitwarden.com',
    index: 1,
    name: 'Bitwarden',
    tagline: 'The best free, open-source password manager',
    category: 'Password Managers',
    rating: 5,
    trustScore: 96,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    pricing: 'Free / $10/yr Premium',
    openSource: true,
    auditedBy: 'Cure53, Insight Risk Consulting',
    relatedArticles: ['password-managers-guide', 'smartphone-hardening', 'privacy-vs-convenience'],
    verdict: 'Bitwarden is our top pick. It\'s free, fully open source, independently verified, and works on every device. There\'s almost no reason to use anything else.',
    pros: [
      'Completely free for unlimited passwords on unlimited devices',
      'Open source — anyone can check the code for hidden problems',
      'Zero-knowledge encrypted: Bitwarden cannot read your passwords',
      'Independently audited and confirmed secure by outside experts',
      'Works on Windows, Mac, Linux, iPhone, Android, and every browser',
      'Optional self-hosting for complete control',
    ],
    cons: [
      'The interface is functional but less polished than paid alternatives',
      'A few advanced features (hardware security keys, encrypted attachments) need the $10/yr Premium plan',
    ],
    content: `
      <h2>What Is Bitwarden?</h2>
      <p>Bitwarden is a password manager — a secure digital safe that remembers all your passwords so you don't have to. You remember one strong master password to open the safe; Bitwarden handles the rest. Every account you have gets its own unique, random password that you never need to see or type.</p>

      <h2>Is It Actually Safe?</h2>
      <p>Yes — and unusually, you can verify this yourself. Bitwarden is <strong>open source</strong>, which means every line of code is publicly available on the internet for anyone to read and check for problems. There's nowhere to hide a back door.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Anyone in the world can read Bitwarden's source code — it's published on GitHub under an open source licence. Security researchers do read it and look for hidden problems. Bitwarden has also paid independent security firms to audit their code: Cure53 in 2018, Insight Risk Consulting in 2023. Both found no critical issues, and the reports are published publicly.</div></div>

      <h2>How Does It Protect Your Passwords?</h2>
      <p>Before your passwords ever leave your device, they are scrambled using a method called AES-256 encryption — the same standard used by governments and banks worldwide. Only your master password can unscramble them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your passwords are scrambled on your device before they're sent anywhere — this is called client-side AES-256-CBC encryption. Bitwarden's servers only ever receive a jumbled mess they can't read. Even Bitwarden themselves have no idea what your passwords are. This is called zero-knowledge encryption.</div></div>

      <h2>Free vs. Premium</h2>
      <p>The free tier includes unlimited passwords, unlimited devices, and basic two-step login (using an authenticator app like Aegis). This covers everything most people need. The $10/year premium plan adds advanced two-step login methods (physical security keys), the ability to store encrypted file attachments, emergency access for trusted contacts, and a password health dashboard. For most users, free is completely sufficient.</p>

      <h2>How to Get Started</h2>
      <ol>
        <li>Go to <strong>bitwarden.com</strong> and click "Get Started Free"</li>
        <li>Enter your email address and create a master password — use a passphrase of 4–5 random words (e.g., "purple-hammer-forest-cloud") that you'll actually remember</li>
        <li>Install the browser extension (from your browser's extension store, search "Bitwarden")</li>
        <li>Log in — Bitwarden will now offer to save passwords whenever you log in to a website</li>
        <li>Install the app on your phone from the App Store or Play Store and log in there too</li>
      </ol>
      <p>From that point on, every time you log in to a website, Bitwarden offers to save the password. And when you need to log in again, it fills it in automatically. Over a few weeks, all your important accounts will have strong, unique passwords stored safely.</p>

      <h2>Verdict</h2>
      <p>Bitwarden is the rare tool that does exactly what it claims, costs nothing for most users, and lets you verify its claims independently. It is our first recommendation to anyone who asks how to improve their online security.</p>
    `
  },
  {
    id: 'keepassxc',
    website: 'https://keepassxc.org',
    index: 2,
    name: 'KeePassXC',
    tagline: 'Your passwords stay on your device, always',
    category: 'Password Managers',
    rating: 4,
    trustScore: 97,
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
  },

  /* ── MESSAGING ────────────────────────────────────────────── */
  {
    id: 'signal',
    website: 'https://signal.org',
    index: 3,
    name: 'Signal',
    tagline: 'The gold standard for private messaging',
    category: 'Messaging',
    rating: 5,
    trustScore: 98,
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53, Trail of Bits, multiple independent researchers',
    relatedArticles: ['smartphone-hardening', 'metadata-problem', 'user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'Signal is the definitive answer to private messaging. Its encryption is so trusted that WhatsApp and iMessage both adopted it. Use it for anything you\'d rather keep private.',
    pros: [
      'All messages and calls are end-to-end encrypted by default — always',
      'Non-profit with no advertising revenue — your data is not the product',
      'Proven in court: handed over only account creation date when compelled',
      'Disappearing messages, note-to-self, sealed sender',
      'Voice and video calls fully encrypted',
      'Open source, regularly audited',
    ],
    cons: [
      'Requires a phone number to register',
      'Smaller user base than WhatsApp — you need to convince contacts to switch',
      'No anonymous account without a separate SIM card',
    ],
    content: `
      <h2>Why Signal?</h2>
      <p>When you send a message on Signal, it is scrambled on your device before it leaves. The scrambled message travels to Signal's servers, then to your recipient's device, where it is unscrambled. At no point can Signal, your phone company, your internet provider, or anyone intercepting the traffic read the message. Only you and your recipient can.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your message is scrambled on your phone before it's sent — only your recipient's phone can unscramble it. Signal's own servers never see what you wrote. Under the hood, this uses the Signal Protocol: a combination of the Double Ratchet algorithm and X3DH key exchange for end-to-end encryption. No intermediate server ever holds a readable copy.</div></div>

      <p>WhatsApp uses the same underlying technology (Signal's own protocol), but layers Meta's data collection on top. Signal uses it as designed.</p>

      <h2>What Signal Actually Knows About You</h2>
      <p>In 2016, Signal received a grand jury subpoena — a legal demand from US authorities to hand over information about a user. Signal complied with the law, and handed over exactly two things: the date the account was created, and the date it last connected to Signal's servers. That was all they had. No messages, no contacts, no call logs — because Signal doesn't store any of that.</p>
      <p>This has been confirmed multiple times since. The Signal Foundation (a US non-profit) simply doesn't collect data it doesn't need, so there's nothing to hand over.</p>

      <h2>Features Worth Knowing About</h2>
      <ul>
        <li><strong>Disappearing messages:</strong> Set a timer — 5 seconds, 1 minute, 1 week — and messages delete themselves automatically from both sides after being read. This limits how long sensitive conversations exist anywhere.</li>
        <li><strong>Note to Self:</strong> Send messages to yourself as an encrypted private notepad, synced across your devices.</li>
        <li><strong>Sealed Sender:</strong> When you send a message, Signal's servers know who receives it — but not who sent it. This protects the sender's identity even from Signal itself.</li>
        <li><strong>Screen Security:</strong> Prevents other apps from taking screenshots of Signal conversations, and hides Signal from your phone's app switcher.</li>
        <li><strong>Registration Lock:</strong> A PIN that prevents someone else from re-registering your phone number on Signal, even if they have your SIM card.</li>
      </ul>

      <h2>How to Switch From WhatsApp</h2>
      <ol>
        <li>Install Signal from the App Store or Play Store.</li>
        <li>Register with your phone number. Set a Registration Lock PIN when prompted.</li>
        <li>Go through your Signal contacts — anyone already using Signal is shown automatically.</li>
        <li>For contacts not on Signal, tap their name and send an invitation. You can customise the message.</li>
        <li>Set disappearing messages as your default: Settings &gt; Privacy &gt; Default Timer. We recommend 1 week for everyday conversations.</li>
      </ol>

      <h2>The Phone Number Requirement</h2>
      <p>Signal's one genuine privacy weakness is that it requires a phone number to sign up. This means your contacts can find you by number, and Signal's servers do know your phone number. If you need to communicate without revealing your number, you can register Signal with a secondary number — a prepaid SIM or a VoIP number from a service like MySudo.</p>

      <h2>Verdict</h2>
      <p>Signal is the most private widely-used messaging app in the world. It is free, easy to use, and backed by a non-profit with no financial reason to compromise your privacy. For any conversation you'd rather keep private — health issues, finances, relationship matters, anything sensitive — Signal is the right tool.</p>
    `
  },

  /* ── EMAIL ────────────────────────────────────────────────── */
  {
    id: 'protonmail',
    website: 'https://proton.me/mail',
    index: 4,
    name: 'ProtonMail',
    tagline: 'Encrypted email based in Switzerland',
    category: 'Email',
    rating: 4,
    trustScore: 90,
    platforms: ['Browser', 'iOS', 'Android'],
    pricing: 'Free / from €3.99/mo',
    openSource: true,
    auditedBy: 'SEC Consult (2021)',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'The best mainstream encrypted email option. A significant upgrade from Gmail for most people, though email has inherent privacy limits that no provider can fully overcome.',
    pros: [
      'Proton cannot read your emails — ever',
      'End-to-end encrypted automatically between ProtonMail users',
      'Swiss-based with strong privacy laws',
      'Open source apps',
      'Free tier available with no credit card',
    ],
    cons: [
      'Encryption only automatic between ProtonMail users — emails to Gmail etc. are not encrypted end-to-end',
      'Has cooperated with Swiss legal orders in criminal cases',
      'Email metadata (who emails whom, when) is always visible to servers',
      'Free tier has limited storage and features',
    ],
    content: `
      <h2>What ProtonMail Does Differently</h2>
      <p>With Gmail, Google can read every email you send and receive. This isn't speculation — it's how their advertising business works. ProtonMail is designed so that even Proton cannot read your emails.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your emails are scrambled with a key that only you have — Proton stores the locked box but not the key. This is called zero-access encryption: emails are encrypted with your public key before being stored on Proton's servers. Even if someone forced Proton to hand over your emails, they'd get an unreadable jumble.</div></div>

      <h2>When Is Email Encrypted End-to-End?</h2>
      <p>Email encryption works best when both the sender and recipient use ProtonMail. In that case, your message is scrambled on your device before it's sent, and only unscrambled on your recipient's device. Proton's servers never see the readable content.</p>
      <p>When you email someone using Gmail, Outlook, or another service, the email travels unencrypted to them — because those services can't automatically decrypt it. You can add a password to protect such emails, but this requires agreeing on a password in advance. This is a fundamental limitation of how email works, not a ProtonMail flaw.</p>

      <h2>Is Switzerland Really That Private?</h2>
      <p>Switzerland has genuinely strong privacy laws and is not part of US or UK intelligence alliances. However, it does cooperate with international law enforcement requests in serious criminal cases. Proton has complied with Swiss court orders — they cannot refuse legal demands from Swiss courts. What they can say is: they cannot hand over email content they cannot read, because they don't have the key. They can, however, hand over metadata (who emailed whom, when) and may be ordered to begin logging a specific account in future.</p>

      <h2>The Honest Limitation: Email Metadata</h2>
      <p>Even with perfect encryption, email has an inherent weakness: metadata. Every email shows who sent it, who received it, when, from which servers, and via what route.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Even if the contents of your email are scrambled, every server it passes through can see who sent it, who received it, and when. Think of it like a sealed letter — no one can read inside, but the envelope shows the addresses. This is because SMTP email headers (sender, recipient, timestamps, routing hops) travel in plaintext and are visible to every mail server in the delivery chain. No encryption standard currently hides this metadata end-to-end. For truly sensitive communications, use Signal instead.</div></div>

      <h2>Getting Started</h2>
      <ol>
        <li>Go to <strong>proton.me</strong> and click "Create a free account."</li>
        <li>Choose a username (your new email will be name@proton.me). You do not need to provide a phone number or existing email address for the free tier.</li>
        <li>Create a strong password — use Bitwarden to generate and store it.</li>
        <li>Install the Proton Mail app on your phone from the App Store or Play Store.</li>
        <li>Consider keeping your Gmail address for non-sensitive communications and using ProtonMail for anything private.</li>
      </ol>

      <h2>The Proton Ecosystem</h2>
      <p>Proton now offers a full suite of privacy-respecting tools under the same account: ProtonDrive (cloud storage), ProtonCalendar, ProtonPass (password manager), and ProtonVPN. A paid "Proton Unlimited" plan at around €10/month includes all of these — it's reasonable value if you want to replace several Google services at once.</p>
    `
  },
  {
    id: 'simplelogin',
    website: 'https://simplelogin.io',
    index: 5,
    name: 'SimpleLogin',
    tagline: 'Protect your real email with disposable aliases',
    category: 'Email',
    rating: 5,
    trustScore: 88,
    platforms: ['Browser', 'iOS', 'Android'],
    pricing: 'Free (15 aliases) / €30/yr Premium (unlimited)',
    openSource: true,
    auditedBy: 'Community reviewed; acquired by Proton in 2022',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'SimpleLogin solves the problem of giving your real email to every website you sign up for. Create a unique alias for each service — forward or burn it whenever you like.',
    pros: [
      'Your real email address is never exposed to third parties',
      'Create unique aliases per website — track which services leak your email',
      'Open source and now owned by Proton (privacy-friendly acquisition)',
      'Works with any existing email address',
      'Free tier with 15 aliases is enough to get started',
    ],
    cons: [
      'Free tier limited to 15 aliases',
      'Adds a small layer of complexity to email management',
      'Replies from aliases require using the SimpleLogin interface or app',
    ],
    content: `
      <h2>The Problem It Solves</h2>
      <p>Every website you sign up for gets your email address. Over time, this means dozens of companies have your email, can sell it, can have it stolen in a breach, and can spam you. When you get spam or a suspicious email, you often can't tell which service leaked your address.</p>
      <p>SimpleLogin solves this by giving you a different email address for every service. Your real email address stays private. All emails to your aliases are forwarded to your real inbox. If a service starts spamming you or appears in a breach, you delete that specific alias — your real email is untouched.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>SimpleLogin acts like a post office box. Each website gets a different box number — all mail still ends up in your real mailbox, and nobody sees your real address. Technically, it's an email proxy: it generates unique alias addresses and rewrites inbound message headers to forward them to you. When you reply, the original sender only ever sees the alias. If a box starts getting junk, you delete it.</div></div>

      <h2>How It Works</h2>
      <ol>
        <li>Sign up at <strong>simplelogin.io</strong> with your real email address. This is the only place SimpleLogin knows your real address.</li>
        <li>When you sign up for a new website, click the SimpleLogin browser extension (or create an alias in the app) and generate an alias like <code>random-word-123@simplelogin.com</code>.</li>
        <li>Use that alias as your email for that website. The website never sees your real address.</li>
        <li>Emails sent to that alias arrive in your real inbox as normal. You can reply — replies appear to come from the alias, not your real address.</li>
        <li>If you start getting spam from that alias, or see it appear in a breach, delete the alias. That service can no longer reach you.</li>
      </ol>

      <h2>Spotting Data Leaks</h2>
      <p>If you use a unique alias for every service and suddenly start getting spam to one specific alias, you know exactly which company leaked or sold your email. This is genuinely useful intelligence about which services are trustworthy.</p>

      <h2>Verdict</h2>
      <p>SimpleLogin is a simple, affordable layer of protection against email-based tracking and spam. The free tier with 15 aliases is enough for most people's most important accounts. The premium tier at €30/year is worth it if you want unlimited aliases for everything.</p>
    `
  },

  /* ── BROWSERS ─────────────────────────────────────────────── */
  {
    id: 'brave',
    website: 'https://brave.com',
    index: 6,
    name: 'Brave Browser',
    tagline: 'Privacy by default, without any configuration',
    category: 'Browsers',
    rating: 5,
    trustScore: 88,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Chromium base audited continuously; community-reviewed Brave additions',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'user-accounts-and-privacy', 'privacy-vs-convenience'],
    verdict: 'The easiest switch from Chrome. Brave blocks ads and trackers by default and randomises your fingerprint. Ignore the built-in crypto features and you have an excellent privacy browser.',
    pros: [
      'Blocks ads, trackers, and fingerprinting scripts out of the box — no setup needed',
      'Randomises your browser fingerprint per website, preventing cross-site tracking',
      'Works exactly like Chrome — same extensions, same websites, smooth switch',
      'Built-in Tor private window mode for occasional anonymous browsing',
      'Excellent mobile app',
    ],
    cons: [
      'Based on Chrome\'s code (Chromium) — contributes to Google\'s dominance of the web',
      'Has a built-in cryptocurrency rewards system (can be ignored, but some find it uncomfortable)',
      'Past controversy over quietly inserting affiliate codes into URLs (resolved, but worth knowing)',
    ],
    content: `
      <h2>Why Brave?</h2>
      <p>Most people use Chrome because it's fast and familiar. Brave is built on exactly the same technology as Chrome (a shared foundation called Chromium), so it looks the same, works the same, and supports all the same extensions. The difference is that Brave has added a powerful layer of privacy protection on top that Chrome deliberately doesn't have.</p>
      <p>Install Brave and from your very first browsing session, you're blocking the trackers that follow you around the web, the ads that fund the tracking, and the fingerprinting scripts that try to identify you. Zero configuration required.</p>

      <h2>What Is Fingerprint Randomisation?</h2>
      <p>Your browser has a kind of invisible name tag. Websites read technical details about your device — your screen size, the fonts you have installed, your graphics hardware — and combine them into a unique fingerprint that identifies you without cookies.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Brave shows a slightly different "face" to each website you visit — Site A and Site B each see different technical details about your device, so they can't match notes and realise it's the same person. It does this by injecting small random offsets into Canvas, WebGL, AudioContext, and font enumeration APIs on a per-origin basis. Other browsers show the same face everywhere.</div></div>

      <h2>The Crypto Stuff (You Can Ignore It)</h2>
      <p>Brave has a built-in system called Basic Attention Token (BAT) that lets you opt into seeing "privacy-preserving ads" and earn small amounts of cryptocurrency in return. This is entirely optional — you can ignore it completely. Brave's privacy features work exactly the same whether or not you engage with BAT. The crypto system is Brave's revenue model, and while some find it philosophically uncomfortable for a privacy tool, it doesn't undermine the privacy features themselves.</p>

      <h2>How to Switch From Chrome</h2>
      <ol>
        <li>Go to <strong>brave.com</strong> and click Download. Install it like any other programme.</li>
        <li>When Brave opens, it will offer to import your bookmarks, history, and passwords from Chrome. Accept — this makes the transition seamless.</li>
        <li>Go to Settings &gt; Search engine and choose DuckDuckGo as your default search engine.</li>
        <li>Install any extensions you use (your Chrome extensions work in Brave) — but minimise them to reduce your fingerprint uniqueness.</li>
        <li>Optionally add uBlock Origin for an extra layer of blocking on top of Brave's built-in shields.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Brave is the best choice for anyone switching from Chrome who wants strong privacy without having to learn anything new. The crypto features are easy to ignore. For users who want even more control and prefer to avoid Chrome's codebase entirely, Firefox is the alternative.</p>
    `
  },
  {
    id: 'firefox',
    website: 'https://www.mozilla.org/firefox/',
    index: 7,
    name: 'Firefox (Privacy Hardened)',
    tagline: 'The open web\'s browser — and the most configurable',
    category: 'Browsers',
    rating: 4,
    trustScore: 86,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Mozilla internal security team; community audits',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'privacy-vs-convenience'],
    verdict: 'Firefox is the only major browser not built on Google\'s Chromium. With a few settings changes and uBlock Origin installed, it\'s one of the strongest privacy browsers available.',
    pros: [
      'The only mainstream browser independent of Google\'s Chromium',
      'Excellent privacy settings including built-in fingerprinting resistance',
      'Full support for uBlock Origin (including future-proof on Manifest V3)',
      'Completely open source, developed by Mozilla non-profit',
      'Highly customisable for both beginners and advanced users',
    ],
    cons: [
      'Requires some configuration to reach its privacy potential',
      'Some websites are optimised for Chrome and work slightly worse in Firefox',
      'Mobile version less polished than Brave on iOS',
    ],
    content: `
      <h2>Why Firefox Matters</h2>
      <p>There is a quiet monopoly forming in web browsers. Chrome, Edge, Brave, Opera, and Samsung Internet are all built on the same Google-developed codebase called Chromium. When Google decides how that codebase works, it affects the vast majority of browser users. Firefox is the significant holdout — it's built on a completely independent codebase (called Gecko) developed by the non-profit Mozilla Foundation.</p>
      <p>This matters for privacy because Google controls what Chromium-based browsers can and cannot do. For example, Google is deliberately limiting how content blockers like uBlock Origin work in Chrome. Firefox is not subject to this — it supports full-powered content blocking indefinitely.</p>

      <h2>Privacy Settings to Enable</h2>
      <p>Out of the box, Firefox is decent. With a few changes, it becomes excellent:</p>
      <ol>
        <li><strong>Type <code>about:config</code> in the address bar</strong> and accept the warning. This is Firefox's advanced settings panel — it won't break anything if you follow these exact steps.</li>
        <li>Search for <code>privacy.resistFingerprinting</code> and double-click to set it to <strong>true</strong>. This makes Firefox report standardised, generic values for fingerprinting vectors — you look like thousands of other Firefox users instead of a unique individual.</li>
        <li>Search for <code>privacy.fingerprintingProtection</code> and set it to <strong>true</strong>.</li>
        <li>Search for <code>geo.enabled</code> and set it to <strong>false</strong>. This disables location sharing.</li>
        <li>In regular Settings (not about:config): go to <strong>Privacy &amp; Security</strong>, set Enhanced Tracking Protection to <strong>Strict</strong>.</li>
        <li>Set DNS over HTTPS to <strong>Max Protection</strong> and choose <strong>Mullvad</strong> as the provider.</li>
      </ol>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>With <code>privacy.resistFingerprinting</code> turned on, Firefox lies to websites about your device. Instead of showing your real screen size, your real fonts, and your real system details, it shows generic values shared by thousands of other Firefox users. You blend into a crowd instead of standing out. Under the hood, Firefox spoofs or suppresses canvas rendering, timezone, locale, screen resolution, and user agent string — returning standardised values instead of your real device details.</div></div>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you go to a website, your browser first has to "look up" the address — like checking a phone book. Normally this lookup is visible to your internet provider. With DNS over HTTPS turned on, that lookup is encrypted and your provider can't see it. DNS over HTTPS (DoH) encrypts these queries so your ISP cannot see or log which sites you visit based on them.</div></div>

      <h2>Install uBlock Origin</h2>
      <p>Go to addons.mozilla.org and search for "uBlock Origin." Install it. In the uBlock Origin settings, enable the "EasyPrivacy" and "uBlock filters – Privacy" filter lists. This blocks thousands of tracking scripts that Firefox's built-in protections don't catch.</p>

      <h2>Firefox on Mobile</h2>
      <p>Firefox for Android supports extensions, including uBlock Origin — making it the only mobile browser with full extension support. Install Firefox from the Play Store, then go to the browser menu &gt; Add-ons and install uBlock Origin. iPhone Firefox supports fewer extensions but still provides better privacy than Safari or Chrome by default.</p>

      <h2>Verdict</h2>
      <p>Firefox with the settings above and uBlock Origin installed is one of the most private mainstream browsers available. It takes about 15 minutes to configure and then works automatically. We particularly recommend it for users who want to keep Google's code out of their browser entirely.</p>
    `
  },
  {
    id: 'tor-browser',
    website: 'https://www.torproject.org',
    index: 8,
    name: 'Tor Browser',
    tagline: 'Strongest anonymity available for everyday browsing',
    category: 'Browsers',
    rating: 4,
    trustScore: 93,
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Multiple independent security researchers; widely peer-reviewed',
    relatedArticles: ['anonymous-browsing', 'browser-fingerprinting', 'privacy-vs-convenience'],
    verdict: 'The most private browser you can use. Slower than normal browsing, but provides a level of anonymity that no other consumer tool approaches. Essential for sensitive research.',
    pros: [
      'Routes traffic through three separate computers — your IP is hidden from websites',
      'All Tor Browser users share an identical fingerprint — you blend into the crowd',
      'Clears all data automatically when you close it',
      'Free, open source, developed and maintained by the Tor Project non-profit',
      'Works on Windows, Mac, Linux, and Android',
    ],
    cons: [
      'Significantly slower than normal browsing due to multi-hop routing',
      'Some websites block Tor exit nodes',
      'Streaming video and file downloads are impractical',
      'Not available on iPhone (due to Apple App Store policies)',
    ],
    content: `
      <h2>How Tor Works</h2>
      <p>Normally when you visit a website, your request goes directly from your device to that website. The website sees your IP address (your internet location), and your internet provider sees which website you visited.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your request is wrapped in three locked envelopes and passed through three different computers around the world. Each computer opens only its own envelope and passes the next one on. By the time your request reaches the website, it comes from the last computer — not from you. No one in the chain knows the full picture. Technically: Tor (The Onion Router) encrypts traffic in three nested layers and routes it through a circuit of three volunteer-operated relays. Each relay decrypts one layer and forwards the packet. The entry node knows your IP but not the destination; the exit node connects to the website but only knows the previous relay.</div></div>

      <h2>The Fingerprint Problem — Solved</h2>
      <p>One of Tor Browser's most powerful features is that every user looks identical to websites. Tor Browser is a modified version of Firefox that reports exactly the same screen size, the same fonts, the same system details to every website — regardless of what your actual hardware is. You don't stand out; you blend into a crowd of tens of thousands of identical-looking Tor users.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every person using Tor Browser looks exactly the same to websites — same window size, same pretend screen, same pretend fonts. You don't just have a disguise; you're wearing the exact same disguise as thousands of other people. Tor Browser achieves this by shipping with a fixed window size (1000×800 by default), disabling JavaScript APIs that leak hardware details, and standardising font enumeration and canvas rendering.</div></div>

      <h2>Important Rules for Tor Browser</h2>
      <ul>
        <li><strong>Don't log in to personal accounts.</strong> If you sign in to your Gmail while using Tor, Google knows it's you. The anonymity is completely broken. Use Tor for browsing that you want kept separate from your identity — research, reading, information gathering.</li>
        <li><strong>Don't install extensions.</strong> Every extension changes your fingerprint and makes you distinguishable from other Tor users.</li>
        <li><strong>Don't resize the window.</strong> Tor Browser opens at a standardised size. Making it bigger or smaller changes your fingerprint.</li>
        <li><strong>Don't download files and open them outside Tor.</strong> Opening a document in Word or a PDF reader can leak your real IP address.</li>
      </ul>

      <h2>How to Install and Use Tor Browser</h2>
      <ol>
        <li>Go to <strong>torproject.org</strong> and click "Download Tor Browser."</li>
        <li>Run the installer. It works like any other programme installation.</li>
        <li>Open Tor Browser and click "Connect." It will spend a few seconds connecting to the Tor network.</li>
        <li>Browse normally. Tor handles the rest automatically. The address bar will show a small ".onion available" icon on some sites — these are Tor-native addresses that are even more private.</li>
        <li>When you're done, close Tor Browser. All your browsing history, cookies, and data are automatically deleted.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Tor Browser is not for everyday browsing — it's too slow for that. But for any browsing where you genuinely need your identity separated from what you're looking at — researching sensitive medical topics, reading news about your country's government, background research of any kind — it's the right tool and nothing else comes close.</p>
    `
  },

  /* ── BROWSER EXTENSIONS ───────────────────────────────────── */
  {
    id: 'ublock-origin',
    website: 'https://ublockorigin.com',
    index: 9,
    name: 'uBlock Origin',
    tagline: 'The most effective content blocker ever made',
    category: 'Browser Extensions',
    rating: 5,
    trustScore: 99,
    platforms: ['Firefox', 'Chrome', 'Edge', 'Opera'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Continuous community review on GitHub',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'privacy-vs-convenience'],
    verdict: 'Install this immediately. It\'s the single highest-impact privacy action available for your browser. Free, lightweight, and blocks thousands of trackers automatically.',
    pros: [
      'Blocks ads, trackers, malware sites, and fingerprinting scripts by default',
      'Extremely lightweight — uses less memory than most other blockers',
      'Fully open source and independently developed (no advertising industry ties)',
      'Blocks cookie consent banners (with optional filter lists)',
      'Highly configurable for advanced users who want more control',
    ],
    cons: [
      'Occasionally breaks website functionality (fixed by clicking the uBlock Origin icon and disabling for that site)',
      'Chrome version will become less powerful in future due to Google\'s Manifest V3 restrictions',
      'Advanced "medium mode" has a learning curve',
    ],
    content: `
      <h2>What Does uBlock Origin Actually Do?</h2>
      <p>When you visit a website, the page you're reading is rarely the only thing loading. Most websites also load dozens of invisible "third-party" scripts from advertising and tracking companies — Google, Facebook, TikTok, dozens of data brokers you've never heard of. These scripts track your behaviour, build profiles about you, and follow you across every website that loads them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Before your browser even sends a request to a tracking company, uBlock Origin steps in and says "no." The tracker never loads and never gets the chance to watch what you do. It does this by intercepting outgoing network requests at the browser level and comparing each request's origin domain against community-maintained blocklists (EasyList, EasyPrivacy, uBlock filters, etc.).</div></div>

      <h2>Is It Actually Different From Other Ad Blockers?</h2>
      <p>Yes. Most popular ad blockers — Adblock Plus, for example — accept money from advertising companies through an "Acceptable Ads" programme, which allows certain ads through. uBlock Origin has no such arrangement. It blocks everything on its lists, period. It's developed by a single independent developer (Raymond Hill) who has no financial relationship with the advertising industry.</p>

      <h2>What Gets Blocked by Default</h2>
      <ul>
        <li>Advertising from all major networks (Google Ads, Facebook Ads, etc.)</li>
        <li>Tracking scripts (Google Analytics, Facebook Pixel, TikTok Pixel, etc.)</li>
        <li>Known malware and phishing domains — it's also a security tool</li>
        <li>Cryptomining scripts that use your computer's power without asking</li>
      </ul>
      <p>With optional filter lists enabled (EasyPrivacy and uBlock Annoyances), it also blocks:</p>
      <ul>
        <li>Cookie consent banners (the "Accept all cookies" popups)</li>
        <li>Social media sharing buttons that track you even if you don't click them</li>
        <li>Many newsletter signup popups</li>
      </ul>

      <h2>How to Install and Set Up</h2>
      <ol>
        <li><strong>In Firefox:</strong> Go to addons.mozilla.org and search "uBlock Origin." Click "Add to Firefox."</li>
        <li><strong>In Chrome or Edge:</strong> Go to the Chrome Web Store and search "uBlock Origin." Click "Add to Chrome." <em>Important: install "uBlock Origin" — not "uBlock" (a different, unrelated product) and not "uBlock Origin Lite" (a weaker version).</em></li>
        <li>Once installed, it works immediately. No setup needed.</li>
        <li><strong>Optional stronger setup:</strong> Click the uBlock Origin icon, then click the gear/settings icon. Go to "Filter lists." Tick "EasyPrivacy" and "uBlock filters – Annoyances." Click "Apply changes." Now it also blocks cookie banners and social tracking buttons.</li>
      </ol>

      <h2>The Chrome Problem</h2>
      <p>Google is making changes to how Chrome extensions work (called "Manifest V3") that will permanently limit uBlock Origin's effectiveness in Chrome and Chromium-based browsers.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Google is changing the rules for Chrome extensions in a way that lets fewer tracking scripts be blocked — uBlock Origin will be weaker on Chrome. On Firefox, those restrictions don't apply and the full blocker works indefinitely. This is a strong practical reason to use Firefox. The technical reason: Manifest V3 replaces the <code>webRequest</code> API's blocking capability with a declarativeNetRequest API that limits the number of filterable rules and removes dynamic rule evaluation.</div></div>

      <h2>Verdict</h2>
      <p>uBlock Origin is the first thing we recommend to anyone who asks about online privacy. It's free, it works immediately, and it blocks thousands of tracking scripts without you having to do anything. Install it now.</p>
    `
  },

  /* ── VPNs ─────────────────────────────────────────────────── */
  {
    id: 'mullvad',
    website: 'https://mullvad.net',
    index: 10,
    name: 'Mullvad VPN',
    tagline: 'The most privacy-respecting VPN on the market',
    category: 'VPNs',
    rating: 5,
    trustScore: 97,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: '€5/mo flat — no contracts',
    openSource: true,
    auditedBy: 'Cure53 (multiple published audits)',
    relatedArticles: ['vpn-explainer', 'anonymous-browsing', 'smartphone-hardening', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The VPN we recommend without hesitation. No personal info required, no logs, proven by server seizures, flat pricing. This is what a VPN should be.',
    pros: [
      'No email, name, or personal information required to sign up — ever',
      'Pay with cash or cryptocurrency for full anonymity',
      'Server seizures by Swedish police found nothing — no logs proven in practice',
      'RAM-only servers — nothing survives a power cycle',
      'Flat €5/month, no upsells, no tricks',
      'Open source apps, independently audited',
    ],
    cons: [
      'No free trial or free tier',
      'Smaller server network than commercial giants like NordVPN or ExpressVPN',
      'No split tunnelling on iOS',
    ],
    content: `
      <h2>What a VPN Does (and Doesn't Do)</h2>
      <p>A VPN (Virtual Private Network) creates an encrypted tunnel between your device and the VPN company's server. Your internet provider can see that you're connected to a VPN, but can't see what websites you visit. The websites you visit see the VPN server's address, not yours.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>A VPN is like a private tunnel for your internet traffic. Your internet provider can see you've entered the tunnel, but not where it leads. Websites can see the tunnel's exit point, but not that it's you. Mullvad uses WireGuard or OpenVPN to encapsulate your traffic — your ISP sees only an encrypted stream to Mullvad's IP, and the destination website sees Mullvad's exit IP instead of yours.</div></div>

      <p>What a VPN does <em>not</em> do: it doesn't make you anonymous if you're logged in to Google, Facebook, or any account tied to your real identity. It doesn't protect against browser fingerprinting. It shifts trust from your internet provider to the VPN company — so choosing a trustworthy VPN company is everything.</p>

      <h2>Why Mullvad Is Different</h2>
      <p>The VPN market is full of companies whose business is marketing, not privacy. They run YouTube promotions, offer "lifetime" subscriptions, and make extraordinary claims. Mullvad is the opposite: a technically rigorous company that doesn't advertise aggressively and charges a fair, flat price.</p>
      <p>In April 2023, Swedish police raided Mullvad's offices and seized servers. They found nothing — because of how Mullvad's servers are built.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Mullvad's servers work like a whiteboard, not a notebook — everything written on them disappears the moment the power goes off. When Swedish police seized the servers, they got blank whiteboards. No logs. Nothing. This is because Mullvad runs RAM-only servers: all operating data lives in volatile memory (RAM) rather than persistent storage. When power is cut, all data is instantly and permanently erased. There is no disk to seize and image.</div></div>

      <h2>Truly Anonymous Signup</h2>
      <p>Most VPN services ask for your email address, name, and payment details. This creates a record linking you to your VPN use. Mullvad's signup works like this:</p>
      <ol>
        <li>Go to mullvad.net and click "Generate Account Number."</li>
        <li>A random 16-digit number is created. This is your account. No email, no name, no profile.</li>
        <li>Pay €5 to add a month — by card (which creates a payment record) or by cash/cryptocurrency (which doesn't). To pay with cash: Mullvad publishes an office address; you mail them a €5 note with your account number written on paper.</li>
      </ol>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Kill switch:</strong> If the VPN connection drops, your internet is cut off entirely rather than exposing your real IP. Enable this in Settings &gt; "Block internet when disconnected."</li>
        <li><strong>DNS leak protection:</strong> Ensures your DNS queries (website address lookups) also go through the VPN, not your internet provider.</li>
        <li><strong>WireGuard and OpenVPN:</strong> Two encryption protocols. WireGuard is faster and more modern; OpenVPN is older but extremely well-tested. Both are secure.</li>
        <li><strong>Multihop:</strong> Premium option to route traffic through two VPN servers in different countries for extra protection.</li>
      </ul>

      <h2>Verdict</h2>
      <p>Mullvad is what a VPN should be: honest about what it does, proven in practice, fairly priced, and designed around user privacy rather than marketing. It's our recommendation for anyone who wants a VPN.</p>
    `
  },

  /* ── MAPS ─────────────────────────────────────────────────── */
  {
    id: 'organic-maps',
    website: 'https://organicmaps.app',
    index: 11,
    name: 'Organic Maps',
    tagline: 'Offline maps with no tracking, no account, no ads',
    category: 'Maps',
    rating: 5,
    trustScore: 95,
    platforms: ['iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; based on OpenStreetMap',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The best privacy-respecting map app available. Works completely offline, requires no account, and tracks nothing. Navigation quality is excellent for everyday use.',
    pros: [
      'Completely offline — download maps for your region and use them anywhere',
      'No account, no tracking, no ads, no data collection of any kind',
      'Walking, cycling, and driving navigation all work well',
      'Based on OpenStreetMap — one of the most detailed map datasets in the world',
      'Free and open source',
    ],
    cons: [
      'Public transit directions less comprehensive than Google Maps',
      'Satellite view not available — only vector maps',
      'Real-time traffic data not available',
      'Some very rural areas have less detail than Google Maps',
    ],
    content: `
      <h2>Why Not Google Maps?</h2>
      <p>Google Maps is one of the most sophisticated location data collection tools ever built. When you use Google Maps with a Google account, it builds a permanent timeline of everywhere you've been. Even without an account, it tracks your movements via your device's IP address and unique identifiers. Google has been caught collecting location data even when users explicitly disabled it.</p>
      <p>Organic Maps collects nothing. There are no servers your location data goes to. The app works entirely from maps you've downloaded to your device. When you navigate somewhere, that journey is never recorded anywhere except possibly your own phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Once you've downloaded the map for your area, Organic Maps works with no internet at all. Your phone figures out where you are and how to get there entirely by itself — nothing is sent anywhere, and no one knows where you went. The app makes zero network requests during navigation: all routing is computed on-device using downloaded vector map tiles, with no analytics SDK, no advertising SDK, and no telemetry.</div></div>

      <h2>How Good Are the Maps?</h2>
      <p>Organic Maps is built on <strong>OpenStreetMap</strong> — a collaborative map of the world built by volunteers, similar in concept to Wikipedia. In cities and towns across Europe, North America, and most urban areas globally, OpenStreetMap data is excellent and often more detailed than Google Maps for things like footpaths, cycle routes, and local businesses. In rural areas and some developing regions, coverage is thinner.</p>
      <p>For everyday navigation in cities — getting from A to B, finding a restaurant, navigating on a walk or cycle ride — Organic Maps works beautifully.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Search "Organic Maps" in the App Store (iPhone) or Google Play Store (Android). Install it.</li>
        <li>Open the app. It will show you a list of regions to download. Tap your country or your specific region/state.</li>
        <li>Tap Download. The map file downloads over your WiFi connection and is stored on your device. A country the size of the UK is about 500MB; a single city is much smaller.</li>
        <li>Once downloaded, you don't need an internet connection for navigation. The app works entirely offline.</li>
        <li>To navigate: tap the search bar, type an address or place name, tap the result, then tap the arrow button to start navigation. Choose your mode (walking, cycling, driving) from the icons.</li>
      </ol>

      <h2>When to Still Use Google Maps</h2>
      <p>Organic Maps doesn't have real-time traffic data, so it can't suggest routes based on current congestion. For cross-country driving where traffic matters, you might still want a navigation app with live traffic. You can use Organic Maps for ordinary navigation and occasionally consult another service for live traffic — without being logged in to a Google account.</p>

      <h2>Verdict</h2>
      <p>Organic Maps is the clear recommendation for anyone who wants maps without surveillance. It works offline, requires nothing from you, and navigation quality is genuinely excellent for everyday use. Switch your default maps app today.</p>
    `
  },

  /* ── VIDEO CALLING ────────────────────────────────────────── */
  {
    id: 'jitsi-meet',
    website: 'https://jitsi.org/jitsi-meet/',
    index: 42,
    name: 'Jitsi Meet',
    tagline: 'Private video calls with no account for anyone',
    category: 'Video Calling',
    rating: 4,
    trustScore: 84,
    platforms: ['Web (any browser)', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; widely used by governments and enterprises',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'The simplest private video call. No account, no download, no tracking. Open a browser, create a room, share the link. Done.',
    pros: [
      'No account required for anyone — host or guest',
      'Works in any browser — no download needed on desktop',
      'End-to-end encrypted for small meetings',
      'Free and unlimited call length',
      'Open source — can be self-hosted',
    ],
    cons: [
      'End-to-end encryption currently only available for calls with fewer than 8 participants',
      'For larger groups, traffic routes through Jitsi\'s server (encrypted in transit but not end-to-end)',
      'Video quality can be inconsistent compared to Zoom for large groups',
      'No persistent rooms, call history, or recordings on the free tier',
    ],
    content: `
      <h2>The Simplest Private Video Call</h2>
      <p>Zoom requires an account to host a meeting longer than 40 minutes. Google Meet requires a Google account. Microsoft Teams requires a Microsoft account. Jitsi Meet requires nothing. You go to a website, type a room name, and you're in a call. Share the link with whoever you want to join. They click it and they're in. No accounts, no downloads, no signups for anyone.</p>

      <h2>How to Use It</h2>
      <ol>
        <li>Go to <strong>meet.jit.si</strong> in any web browser.</li>
        <li>In the box on the homepage, type a unique room name. Make it something others won't accidentally stumble into — a combination of random words works well: "BlueMountainWeekly" or similar.</li>
        <li>Click "Start meeting." Allow your browser to use your camera and microphone when it asks.</li>
        <li>Copy the address from your browser's address bar (it will look like meet.jit.si/YourRoomName) and share it with everyone you want to join. They just click the link.</li>
        <li>On iPhone or Android: search for "Jitsi Meet" in the App Store or Play Store. Open it, enter the same room name, and join.</li>
      </ol>

      <h2>Is It Private?</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>For small calls (up to 8 people), the video and audio are scrambled end-to-end — even Jitsi's servers can't see them. For bigger calls, the server handles traffic (still encrypted on the wire, but Jitsi could technically see the content). No accounts means no profiles are built about participants either way. Technically: Jitsi uses WebRTC with Insertable Streams for end-to-end encryption in small calls; larger calls route through a Selective Forwarding Unit (SFU) server using DTLS-SRTP.</div></div>

      <p>For maximum privacy with larger groups, Jitsi can be self-hosted — you run the server yourself, so no third party handles the call at all. This is an advanced option used by many organisations.</p>

      <h2>When Jitsi Is Enough and When to Use Signal</h2>
      <p>Jitsi is ideal for everyday video calls that don't need your identity verified — team meetings, family calls, group chats. For the most sensitive one-to-one conversations, Signal's encrypted calls provide more consistent end-to-end encryption and have been more thoroughly audited specifically for high-stakes use. For most people's needs, Jitsi is excellent.</p>

      <h2>Verdict</h2>
      <p>Jitsi Meet is the perfect answer to "how do I do a private video call without signing up for anything?" It's free, instant, and works for most people's video calling needs.</p>
    `
  },

  /* ── FILE SYNC ────────────────────────────────────────────── */
  {
    id: 'syncthing',
    website: 'https://syncthing.net',
    index: 12,
    name: 'Syncthing',
    tagline: 'Sync your files between your own devices — no cloud involved',
    category: 'File Sync',
    rating: 4,
    trustScore: 96,
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; used in high-security environments',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The privacy-ideal solution for keeping files in sync across your own devices. Your files never touch any external server. The setup takes 20 minutes and then works automatically.',
    pros: [
      'Files sync directly between your devices — no server, no company, no third party',
      'End-to-end encrypted in transit between your own devices',
      'Free, open source, no accounts',
      'Works on Windows, Mac, Linux, and Android',
      'Once set up, works automatically in the background',
    ],
    cons: [
      'Both devices must be on for syncing to happen (no cloud buffer)',
      'Not available as an official app on iPhone (Apple restrictions)',
      'Initial setup is more complex than Dropbox or Google Drive',
      'No web interface to access files when away from your devices',
    ],
    content: `
      <h2>The Problem With Cloud Storage</h2>
      <p>Google Drive, Dropbox, and iCloud all work by uploading your files to a company's servers. The company can read your files (Google scans Drive files to improve AI models), law enforcement can subpoena them, and if the company is hacked, your files are exposed. You're trusting a third party with your data.</p>
      <p>Syncthing works completely differently. Instead of uploading files to a cloud server, it syncs them directly from one of your devices to another — phone to laptop, laptop to desktop, etc. Your files never leave your own hardware. There is no server, no company, no third party.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Syncthing sends your files directly from one of your devices to another, encrypted the whole way — no company ever touches your files. It uses the Block Exchange Protocol (BEP) over TLS 1.3, with device authentication via public-key cryptography. No central server ever stores or relays your file contents; a discovery server only helps devices find each other's network addresses.</div></div>

      <h2>How It Works</h2>
      <p>Think of Syncthing like a direct wire between your devices. When you save a photo on your phone, Syncthing notices and quietly copies it to your laptop in the background — over your home WiFi or the internet. Both devices always have the same files. If one device is off, the sync happens when it turns back on. Your files are always on your own devices, nowhere else.</p>

      <h2>Setting Up Syncthing (Phone to Computer)</h2>
      <ol>
        <li><strong>On your computer:</strong> Download Syncthing from <strong>syncthing.net</strong>. Install it. It runs as a background programme and opens a control panel in your web browser at address 127.0.0.1:8384.</li>
        <li><strong>On Android:</strong> Search "Syncthing-Fork" in the Play Store and install it. (iPhone users: Syncthing isn't available on iPhone. Use Wormhole.app for one-off file sharing instead.)</li>
        <li>Open the Android app. Go to <strong>This Device</strong> and you'll see a Device ID — a long code unique to your phone.</li>
        <li>In the computer's Syncthing panel, click <strong>Add Device</strong>. Enter the phone's Device ID (or scan the QR code the phone shows).</li>
        <li>Accept the connection request on both devices when prompted.</li>
        <li>Add a folder to sync: on your phone, go to <strong>Folders</strong> and tap the + button. Choose a folder (e.g., your camera folder). On your computer, accept the folder share when it appears. Syncing begins automatically.</li>
      </ol>

      <h2>Verdict</h2>
      <p>Syncthing takes more effort to set up than Dropbox, but once running, it's automatic and your files stay entirely under your control. For anyone who wants their photos, documents, and files to sync across devices without involving any company's servers, Syncthing is the answer.</p>
    `
  },

  /* ── NOTES ────────────────────────────────────────────────── */
  {
    id: 'obsidian',
    website: 'https://obsidian.md',
    index: 13,
    name: 'Obsidian',
    tagline: 'Your notes live on your device — not in someone\'s cloud',
    category: 'Notes',
    rating: 4,
    trustScore: 88,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free for personal use / $8/mo Sync add-on (optional)',
    openSource: false,
    auditedBy: 'Community reviewed; popular in privacy community',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'An excellent local note-taking app that stores your notes as plain text files on your own device. No account needed, no cloud, no company reading your notes.',
    pros: [
      'Notes stored as plain text files on your own device — no cloud',
      'No account required for local use',
      'Extremely capable — links between notes, graph view, extensive plugins',
      'Your notes work in any text editor, even if Obsidian ceases to exist',
      'Free for personal use with no meaningful restrictions',
    ],
    cons: [
      'Not open source (though notes are stored in open plain text format)',
      'The optional Sync feature costs $8/month',
      'Can be overwhelming for users who want a simpler app',
      'Learning curve for more advanced features',
    ],
    content: `
      <h2>Why Note-Taking Apps Are a Privacy Issue</h2>
      <p>Google Keep stores your notes on Google's servers, where they can be read, used for AI training, and subpoenaed. Evernote has had a troubled history with privacy — at one point allowing employees to read user notes. Notion and Notion-like apps store everything in the cloud by default. Your notes often contain your most private thoughts, plans, and information.</p>

      <h2>How Obsidian Is Different</h2>
      <p>Obsidian stores your notes as plain text files in a folder on your computer or phone. There is no cloud, no server, no company that can read them. The folder is called a "vault" — just a regular folder full of text files, organised however you like. You can back this folder up yourself, put it on an external drive, or sync it between devices using Syncthing.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your notes are just text files sitting in a folder on your computer — Obsidian reads and writes standard Markdown (.md) files directly to your local filesystem and makes no network requests during normal use. You could open them in Notepad right now. No account, no server, no company holding your thoughts. There is no proprietary file format: your data is stored in a format any text editor can open.</div></div>

      <p>Because notes are plain text, they're not locked into Obsidian. You can open them in any text editor. If Obsidian ever disappears or changes, your notes are completely unaffected.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Download Obsidian from <strong>obsidian.md</strong> for your computer or phone.</li>
        <li>When it opens, click "Create new vault." Choose a name and pick a location on your computer to store notes — your Documents folder is fine.</li>
        <li>Click the page icon in the left sidebar to create your first note. Type anything. It saves automatically.</li>
        <li>On mobile: install from the App Store or Play Store. Tap "Create new vault" and name it. Notes are stored in your phone's storage.</li>
      </ol>

      <h2>Syncing Between Devices</h2>
      <p>Obsidian offers a paid Sync service ($8/month) that syncs your vault through Obsidian's servers with end-to-end encryption. Alternatively, sync the vault folder using Syncthing (free, no third-party server) for complete privacy. Many users also simply keep notes on one primary device and don't need sync.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>If you pay for Obsidian Sync, your notes are scrambled before they leave your device — Obsidian can't read them (client-side AES-256 encryption, with keys derived from your account credentials, means servers store only ciphertext). If you use Syncthing instead, your notes go directly from one of your devices to another with no middleman at all.</div></div>

      <h2>Verdict</h2>
      <p>Obsidian is the best choice for anyone who wants a capable note-taking app without their notes being stored in someone else's cloud. Free for personal use, powerful, and your notes are genuinely yours.</p>
    `
  },

  /* ── SEARCH ENGINES ───────────────────────────────────────── */
  {
    id: 'duckduckgo',
    website: 'https://duckduckgo.com',
    index: 14,
    name: 'DuckDuckGo',
    tagline: 'The search engine that doesn\'t track you',
    category: 'Search Engines',
    rating: 5,
    trustScore: 85,
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Privacy policy reviewed by EFF and others',
    relatedArticles: ['anonymous-browsing', 'user-accounts-and-privacy', 'privacy-vs-convenience'],
    verdict: 'The easiest first step in reducing your digital footprint. No user profiles, no search history, no personalised tracking. Switch in 2 minutes.',
    pros: [
      'No tracking across sessions — searches are not tied to a profile',
      'No filter bubble — results are the same for everyone',
      'Privacy-respecting browser app blocks trackers on other websites too',
      'Search results are competitive for most everyday queries',
    ],
    cons: [
      'Results are sometimes less relevant than Google for obscure or very specific searches',
      'Not open source — you must trust their privacy policy',
      'Received criticism in 2022 for allowing Microsoft trackers in their app (since corrected)',
    ],
    content: `
      <h2>What Is DuckDuckGo?</h2>
      <p>DuckDuckGo is a search engine — it finds things on the internet, just like Google. The key difference: Google builds a permanent profile of every search you've ever made and uses it to target advertising. DuckDuckGo doesn't track what you search, doesn't store your search history, and doesn't build a profile about you.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you search on DuckDuckGo, it treats you like a stranger it's never met — it doesn't remember your last search, it doesn't know who you are, and there's no record of what you've looked for over time. It does not set persistent user identifiers or tracking cookies, and each search session is stateless. Query parameters are not forwarded to result-page destinations via the referrer header.</div></div>

      <h2>How to Switch</h2>
      <ol>
        <li><strong>In Firefox:</strong> Settings &gt; Search &gt; Default Search Engine &gt; select DuckDuckGo.</li>
        <li><strong>In Chrome:</strong> Settings &gt; Search engine &gt; DuckDuckGo (or Add from the list).</li>
        <li><strong>In Brave:</strong> Settings &gt; Search engine &gt; DuckDuckGo.</li>
        <li><strong>On iPhone (Safari):</strong> Settings &gt; Safari &gt; Search Engine &gt; DuckDuckGo.</li>
        <li><strong>On Android (Chrome):</strong> Chrome Settings &gt; Search engine &gt; DuckDuckGo.</li>
      </ol>
      <p>The switch takes under a minute. Searching feels identical — type something in the address bar, get results. If a result ever feels incomplete, you can search the same term on Startpage (which proxies Google results anonymously) for comparison.</p>

      <h2>DuckDuckGo's Browser and App</h2>
      <p>Beyond search, DuckDuckGo offers a free browser app for iPhone and Android that blocks trackers across all websites you visit, forces HTTPS connections where possible, and clears browsing data with a tap. It's a reasonable everyday mobile browser for non-technical users who want better privacy without any configuration.</p>

      <h2>The 2022 Controversy</h2>
      <p>In 2022, a researcher found that DuckDuckGo's browser app was allowing Microsoft trackers to load on some websites — an exception related to a search deal. DuckDuckGo acknowledged this and removed the exception. This is a reminder that "private" claims deserve scrutiny, but DuckDuckGo's response was appropriately transparent and the issue was corrected.</p>

      <h2>Verdict</h2>
      <p>DuckDuckGo is the easiest and most impactful single change most people can make to their privacy. Switch your default search engine in 2 minutes and immediately stop feeding your search history into Google's advertising machine.</p>
    `
  },

  /* ── EMAIL ANONYMITY ──────────────────────────────────────── */
  {
    id: 'aegis-authenticator',
    website: 'https://getaegis.app',
    index: 15,
    name: 'Aegis Authenticator',
    tagline: 'Open source 2FA app for Android — your codes, your control',
    category: 'Two-Factor Authentication',
    rating: 5,
    trustScore: 95,
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; widely recommended in security community',
    relatedArticles: ['password-managers-guide'],
    verdict: 'The best two-factor authentication app for Android. Open source, offline, encrypted backup, and no account required. A clear upgrade from Google Authenticator.',
    pros: [
      'Open source — code publicly reviewable',
      'Works entirely offline — no internet required for codes',
      'Encrypted backup of your codes — export to a file you control',
      'No account, no cloud sync, no Google dependency',
      'Supports all standard TOTP and HOTP codes',
    ],
    cons: [
      'Android only — iPhone users should look at Raivo OTP instead',
      'If you lose your phone without a backup, you lose access to your codes',
    ],
    content: `
      <h2>What Is Two-Factor Authentication?</h2>
      <p>Two-factor authentication (2FA) means that logging in to an account requires two things: your password and a second piece of evidence. The most common second factor is a six-digit code that changes every 30 seconds, generated by an app on your phone. Even if someone steals your password, they can't log in without also having your phone and the current code.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Aegis generates a fresh six-digit code every 30 seconds for each of your accounts. The code is calculated from a secret key and the current time — so even if someone saw a code, it would be useless 30 seconds later. All your secret keys are stored in an encrypted vault on your phone. Technically, these are TOTP (Time-based One-Time Password) codes defined in RFC 6238; HOTP (counter-based) is also supported, and the vault uses AES-256-GCM encryption.</div></div>

      <p>Aegis is an app that generates these codes. It's a safer, more private alternative to Google Authenticator (which syncs your codes to your Google account) or SMS codes (which can be intercepted via SIM swapping).</p>

      <h2>Why Aegis Over Google Authenticator?</h2>
      <p>Google Authenticator recently added a cloud sync feature — your 2FA codes are uploaded to your Google account. This means if your Google account is compromised, your two-factor codes could be too. Aegis stores everything locally on your phone, encrypted, with no cloud involvement. You export backups yourself to wherever you want to store them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>If someone tricks your phone company into giving them your number, they can receive your text message codes — this is called SIM swapping. Aegis codes aren't sent over the phone network at all; they're generated on your device, so a SIM swapper gets nothing. SMS-based 2FA is vulnerable to this because an attacker can social-engineer your mobile carrier into transferring your number to a SIM they control, intercepting all SMS messages including one-time codes.</div></div>

      <h2>Getting Started</h2>
      <ol>
        <li>Search "Aegis Authenticator" in the Google Play Store. Install it (by Beem Development).</li>
        <li>Open Aegis and set a password to protect your codes vault. This is separate from your phone's lock screen.</li>
        <li>To add an account: tap the + button and scan the QR code shown by whatever service you're enabling 2FA for (your bank, Bitwarden, etc.).</li>
        <li>Aegis will show you the six-digit code for that account. Enter it to confirm everything is working.</li>
        <li><strong>Make a backup:</strong> Go to Settings &gt; Backups &gt; Export. Save the encrypted backup file somewhere safe — your computer, an external drive, or your Syncthing vault. If you lose your phone, this backup lets you restore all your codes.</li>
      </ol>

      <h2>For iPhone Users</h2>
      <p>Aegis is Android only. On iPhone, use <strong>Raivo OTP</strong> — a free, open source authenticator available in the App Store that similarly stores codes locally with no cloud dependency.</p>

      <h2>Verdict</h2>
      <p>If you use two-factor authentication (and you should), Aegis is the best place to store your codes on Android. It's free, offline, open source, and you control your own backup. Don't use SMS codes for 2FA if you can avoid it — they can be intercepted. Use an authenticator app like Aegis.</p>
    `
  },

  /* ── TOOLS ────────────────────────────────────────────────── */
  {
    id: 'exifcleaner',
    website: 'https://exifcleaner.com',
    index: 16,
    name: 'ExifCleaner',
    tagline: 'Drag and drop to strip hidden location data from photos',
    category: 'Security Tools',
    rating: 5,
    trustScore: 92,
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
  },
  {
    id: 'freetube',
    website: 'https://freetubeapp.io',
    index: 17,
    name: 'FreeTube',
    tagline: 'Watch YouTube without Google watching you',
    category: 'Privacy Tools',
    rating: 4,
    trustScore: 88,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'FreeTube lets you watch any public YouTube video without Google knowing. Subscriptions, history, and preferences are stored locally. An excellent desktop YouTube replacement.',
    pros: [
      'Watch YouTube videos without Google building a viewing profile on you',
      'Subscribe to channels — all stored locally, never on Google\'s servers',
      'No ads',
      'Search works exactly like YouTube',
      'Free and open source',
    ],
    cons: [
      'Desktop only (Windows, Mac, Linux) — no mobile app',
      'Cannot access videos that require a YouTube account (age-gated content, etc.)',
      'Not an official YouTube product — could break if YouTube changes their API',
    ],
    content: `
      <h2>The YouTube Privacy Problem</h2>
      <p>YouTube is owned by Google. Every video you watch, every search you make on YouTube, and every channel you subscribe to is logged to your Google account (or your device if you're not logged in) and used to build an advertising profile. YouTube's recommendation algorithm uses your viewing history to keep you engaged — which means it learns a great deal about your interests, opinions, and emotional state.</p>

      <h2>How FreeTube Solves This</h2>
      <p>FreeTube is a desktop app that fetches YouTube videos through alternative methods that don't send identifying information to Google.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>FreeTube fetches video files from YouTube without telling Google who you are. Your watch history and subscriptions are saved on your own computer, not on Google's servers — Google receives a request for the video, but it's not tied to you. FreeTube can use either the Invidious API (a privacy-respecting YouTube front-end proxy) or YouTube's internal API directly; in both modes, no authentication cookies or persistent identifiers are sent. Subscriptions and history are stored in a local SQLite database.</div></div>

      <p>The result: you can watch any public YouTube video, subscribe to any channel, and search YouTube's entire catalogue — without Google logging any of it to your profile.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Go to <strong>freetubeapp.io</strong> and click Download. Choose your operating system.</li>
        <li>Install and open FreeTube. It looks very similar to YouTube — search bar at the top, videos in the main area.</li>
        <li>Search for any video or channel in the search bar. Results appear immediately.</li>
        <li>Click a video to play it. No ads.</li>
        <li>Click Subscribe on any channel — the subscription is saved to your computer, not to Google.</li>
        <li>In Settings, switch to "Local API" under Player Settings for maximum privacy — this routes video requests without using Google's main API.</li>
      </ol>

      <h2>On Mobile</h2>
      <p>FreeTube has no mobile app. On Android, use <strong>NewPipe</strong> (free, open source, from the F-Droid app store or newpipe.net) — it works identically to FreeTube but on your phone. On iPhone, use an Invidious instance in a browser: go to invidious.io, find a working instance, and watch YouTube there.</p>

      <h2>Verdict</h2>
      <p>If you watch YouTube on a computer, install FreeTube. It's an immediate, zero-effort way to stop Google from logging your viewing habits. Works perfectly for most YouTube content and costs nothing.</p>
    `
  },
  {
    id: 'grapheneos',
    website: 'https://grapheneos.org',
    index: 18,
    name: 'GrapheneOS',
    tagline: 'Android without Google — maximum mobile privacy',
    category: 'Operating Systems',
    rating: 5,
    trustScore: 99,
    platforms: ['Google Pixel 6 and newer'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Security researchers worldwide; used by high-risk individuals',
    relatedArticles: ['smartphone-hardening', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'The most private and secure mobile operating system available to ordinary people. Requires a Google Pixel phone and some technical comfort. Eliminates Google\'s data collection at the source.',
    pros: [
      'Removes all Google services entirely — no data collection by Google at OS level',
      'Stronger security model than standard Android (verified boot, hardened malloc, etc.)',
      'Can still run most Android apps in isolated "profiles" with optional sandboxed Google Play',
      'Developed by a non-profit with a strong security track record',
      'Free and open source',
    ],
    cons: [
      'Only runs on Google Pixel phones (required for hardware security features)',
      'Installation requires following a technical guide — not a simple installer',
      'Some apps that rely on Google services may not work correctly without sandboxed Play',
      'Banking apps sometimes fail to run due to security checks (improving over time)',
    ],
    content: `
      <h2>What Is GrapheneOS?</h2>
      <p>Every Android phone comes with Google's software built in. This software — Google Play Services, Google Services Framework, and dozens of Google apps — communicates constantly with Google's servers, sending location data, app usage data, and device information. You cannot turn this off on a standard Android phone without removing Google's software entirely.</p>
      <p>GrapheneOS is an alternative version of Android built from the ground up without Google's software. It runs on Google Pixel phones (which have excellent hardware security features that make this possible) and gives you a fully functioning smartphone with no baseline Google data collection.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>GrapheneOS takes Android — the open version without Google's additions — and makes it much more secure. Google's apps and data-collection software are gone. You get a working smartphone that doesn't report to Google by default. If you need Google apps, they run in a restricted box with very limited access to the rest of your phone. Technically: GrapheneOS is an Android Open Source Project (AOSP) fork with significant security hardening — a hardened memory allocator (hardened_malloc), stronger verified boot enforcement, per-app network and sensor permissions, hardened WebView, and no Google Mobile Services in the base OS. It supports running sandboxed Google Play in an unprivileged compatibility layer.</div></div>

      <h2>Hardware Requirements</h2>
      <p>GrapheneOS officially supports only <strong>Google Pixel phones</strong> (currently Pixel 6 and newer). While it may seem ironic to buy a Google phone to de-Google your life, Pixel phones contain a custom security chip (Titan M2) and allow users to lock the bootloader with custom encryption keys. Most other Android manufacturers do not allow this level of hardware security while running a custom operating system.</p>

      <h2>Who Is GrapheneOS For?</h2>
      <p>GrapheneOS is for people who:</p>
      <ul>
        <li>Want to eliminate Google's data collection at the operating system level, not just manage it through settings</li>
        <li>Are comfortable following a detailed installation guide</li>
        <li>Own or are willing to buy a Google Pixel phone (Pixel 6 or newer is recommended)</li>
        <li>Want the strongest available mobile security — GrapheneOS is used by journalists, lawyers, activists, and security researchers</li>
      </ul>
      <p>If you just want to improve your phone's privacy without reinstalling the operating system, the Android privacy settings guide on this site covers a great deal of ground. GrapheneOS is the step beyond that.</p>

      <h2>Can You Still Use Normal Apps?</h2>
      <p>Yes. GrapheneOS includes a sandboxed version of Google Play — a contained environment where you can install and run apps from the Play Store, but Google Play Services operates inside a box with very limited permissions. Apps that need Google services can still run, but Google's access to the rest of your phone is restricted to that sandbox. This is a significant achievement — you get app compatibility without handing Google full system-level access.</p>
      <p>Most apps work fine. Banking apps are the most common compatibility issue, as some use a system called "Play Integrity" to check for modified phones. The GrapheneOS project tracks which banking apps work and has workarounds for many.</p>

      <h2>How to Install</h2>
      <p>GrapheneOS provides a web-based installer at <strong>grapheneos.org/install/web</strong> that guides you through the process step by step. You need a Google Pixel phone, a computer with Chrome or Chromium browser, and a USB cable. The whole process takes about 30 minutes. The instructions are clear and the installer handles the technical complexity for you.</p>

      <h2>Verdict</h2>
      <p>GrapheneOS is the gold standard for mobile privacy. If you're willing to use a Pixel phone and spend 30 minutes on installation, you'll have a smartphone that doesn't report to Google at the operating system level — something no settings change can achieve on a standard Android phone.</p>
    `
  },
  {
    id: '2fas',
    website: 'https://2fas.com',
    index: 19,
    name: '2FAS',
    tagline: 'The best offline, open-source authenticator',
    category: 'Two-Factor Authentication',
    rating: 5,
    trustScore: 98,
    platforms: ['iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Independent community audits',
    relatedArticles: ['password-managers-guide'],
    verdict: '2FAS is currently the most highly recommended two-factor authentication app. It works entirely offline, requires no account, and doesn\'t try to lock you into a proprietary cloud.',
    pros: [
      'Works completely offline with no account required',
      'Fully open source',
      'Supports local, encrypted backups',
      'Can optionally sync backups via your own iCloud or Google Drive',
      'Free with no ads or tracking'
    ],
    cons: [
      'No official desktop app (browser extension requires mobile app connection)'
    ],
    content: `
      <h2>What Is 2FAS?</h2>
      <p>2FAS is a two-factor authentication app for iPhone and Android. Instead of relying on text messages for login codes — which can be intercepted — 2FAS generates a fresh six-digit code every 30 seconds for each of your accounts. Even if someone has your password, they cannot get in without the current code from your phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Two-factor authentication adds a second check to your login: something you know (your password) and something you have (the code on your phone). The code changes every 30 seconds and is calculated from a secret key stored on your device — it is never sent over the internet, so it cannot be intercepted the way a text message can.</div></div>

      <h2>Why 2FAS Over Google Authenticator?</h2>
      <p>Google Authenticator syncs your codes to your Google account, which means if your Google account is compromised, your two-factor codes could be too. 2FAS stores everything locally on your device, encrypted. You can optionally back up to your own iCloud or Google Drive — but that sync is your choice, not automatic.</p>

      <h2>Getting Started</h2>
      <ol>
        <li>Search for "2FAS" in the App Store (iPhone) or Google Play Store (Android). Install the app.</li>
        <li>Open 2FAS. You do not need to create an account.</li>
        <li>Tap the + button to add a new account. Scan the QR code shown by whatever service you are enabling 2FA for.</li>
        <li>2FAS will immediately show the six-digit code for that account. Enter it on the website to confirm.</li>
        <li><strong>Back up your codes:</strong> Go to Settings &gt; Backup and export an encrypted backup. Store it somewhere safe — your computer or an external drive.</li>
      </ol>

      <h2>Verdict</h2>
      <p>2FAS is the most recommended two-factor authentication app for both iPhone and Android. It is free, fully open source, works offline, and requires no account. If you use 2FA — and you should — this is where to keep your codes.</p>
    `
  },
  {
    id: 'nextdns',
    website: 'https://nextdns.io',
    index: 20,
    name: 'NextDNS',
    tagline: 'A firewall for your entire internet connection',
    category: 'Networks',
    rating: 5,
    trustScore: 90,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Routers'],
    pricing: 'Free (up to 300k queries) / €1.99/mo',
    openSource: false,
    auditedBy: 'Not formally audited',
    relatedArticles: ['browser-fingerprinting', 'privacy-vs-convenience'],
    verdict: 'NextDNS allows you to block tracking, ads, and malware at the DNS level. By routing your DNS queries through them, you block trackers across all your apps, not just your browser.',
    pros: [
      'Blocks trackers and ads at the network level',
      'Works across all apps on your phone or computer',
      'Highly customizable blocklists',
      'Detailed analytics (which you can choose not to log)'
    ],
    cons: [
      'Not open source',
      'Requires trusting them with your DNS queries'
    ]
  },
  {
    id: 'searxng',
    website: 'https://docs.searxng.org',
    index: 21,
    name: 'SearXNG',
    tagline: 'A privacy-respecting metasearch engine',
    category: 'Search Engines',
    rating: 4,
    trustScore: 95,
    platforms: ['Browser'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['anonymous-browsing'],
    verdict: 'SearXNG pulls results from Google, Bing, and other engines, but completely hides your identity from them. You get the quality of mainstream search without the tracking.',
    pros: [
      'Combines results from multiple search engines',
      'Completely open source',
      'Does not track or profile you',
      'Can be self-hosted for maximum privacy'
    ],
    cons: [
      'Public instances can sometimes be blocked by Google (causing missing results)',
      'Interface is less polished than DuckDuckGo'
    ]
  },
  {
    id: 'startpage',
    website: 'https://www.startpage.com',
    index: 22,
    name: 'Startpage',
    tagline: 'Google search results without the tracking',
    category: 'Search Engines',
    rating: 4,
    trustScore: 85,
    platforms: ['Browser'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Not formally audited',
    relatedArticles: ['anonymous-browsing'],
    verdict: 'If you want exactly Google\'s search results but refuse to let Google track you, Startpage is the solution. It pays Google for results but acts as a privacy shield between you and them.',
    pros: [
      'Delivers genuine Google search results',
      'Strips all tracking and IP data before querying Google',
      'Includes an "Anonymous View" proxy feature'
    ],
    cons: [
      'Owned by an advertising company (System1), which causes some privacy purists concern',
      'Not open source'
    ]
  },
  {
    id: 'invidious',
    website: 'https://invidious.io',
    index: 23,
    name: 'Invidious',
    tagline: 'An open-source, private front-end to YouTube',
    category: 'Privacy Tools',
    rating: 4,
    trustScore: 95,
    platforms: ['Browser'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['smartphone-hardening'],
    verdict: 'Invidious lets you watch YouTube videos, subscribe to channels, and create playlists without a Google account and without YouTube tracking you.',
    pros: [
      'Watch YouTube without a Google account',
      'No ads or tracking scripts',
      'Audio-only mode to save bandwidth',
      'Can subscribe to channels without logging in'
    ],
    cons: [
      'Public instances frequently go down or get blocked by YouTube',
      'Video playback can sometimes buffer slowly depending on the instance'
    ]
  },
  {
    id: 'osmand',
    website: 'https://osmand.net',
    index: 24,
    name: 'OsmAnd',
    tagline: 'Powerful offline maps using OpenStreetMap data',
    category: 'Mobile',
    rating: 4,
    trustScore: 95,
    platforms: ['iOS', 'Android'],
    pricing: 'Free / €29.99/yr Pro',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['smartphone-hardening'],
    verdict: 'OsmAnd is a feature-rich, open-source alternative to Google Maps that works completely offline. It doesn\'t track your location history or sell your movement data.',
    pros: [
      'Completely offline mapping and navigation',
      'Uses detailed OpenStreetMap data',
      'Open source and respects privacy',
      'Incredibly detailed features for hiking and cycling'
    ],
    cons: [
      'Interface is cluttered and has a steep learning curve',
      'Search function is much worse than Google Maps',
      'No live traffic data'
    ]
  },
  {
    id: 'joplin',
    website: 'https://joplinapp.org',
    index: 25,
    name: 'Joplin',
    tagline: 'End-to-end encrypted note taking',
    category: 'Note-Taking',
    rating: 4,
    trustScore: 95,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free (bring your own sync) / Joplin Cloud from €1.99/mo',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['smartphone-hardening'],
    verdict: 'Joplin is a superb alternative to Evernote or Google Keep. It offers end-to-end encryption and lets you sync your notes using your own cloud storage.',
    pros: [
      'End-to-end encryption (E2EE) built in',
      'Open source and free',
      'Sync via Nextcloud, Dropbox, OneDrive, or WebDAV',
      'Excellent web clipper extension'
    ],
    cons: [
      'Interface is functional but not particularly modern',
      'Collaboration features are limited without the paid Joplin Cloud'
    ]
  },
  {
    id: 'standard-notes',
    website: 'https://standardnotes.com',
    index: 26,
    name: 'Standard Notes',
    tagline: 'Ultra-secure, private notes',
    category: 'Note-Taking',
    rating: 4,
    trustScore: 98,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    pricing: 'Free / Paid plans from $63/yr',
    openSource: true,
    auditedBy: 'Cure53',
    relatedArticles: ['smartphone-hardening'],
    verdict: 'Standard Notes prioritizes longevity, privacy, and encryption above all else. The free version is incredibly basic, but the paid version is a powerhouse.',
    pros: [
      'End-to-end encryption by default',
      'Open source and independently audited',
      'Focuses heavily on data longevity and stability',
      'Works offline and syncs beautifully'
    ],
    cons: [
      'Free version only supports plain text (no bold, images, or formatting)',
      'Paid plans are relatively expensive'
    ]
  },
  {
    id: 'matrix',
    website: 'https://matrix.org',
    index: 27,
    name: 'Matrix / Element',
    tagline: 'Decentralized, encrypted messaging',
    category: 'Networks',
    rating: 4,
    trustScore: 92,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'NCC Group',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'Matrix is a decentralized communication protocol (like email, but for instant messaging). Element is the most popular app for it. It offers end-to-end encrypted chats without tying you to a central company.',
    pros: [
      'Decentralized: no single company owns the network',
      'End-to-end encrypted by default in private rooms',
      'Open source protocol and clients',
      'You can host your own server'
    ],
    cons: [
      'Key verification across devices can be confusing for new users',
      'Metadata (who talks to who) is visible to the server operators'
    ]
  },
  {
    id: 'onionshare',
    website: 'https://onionshare.org',
    index: 28,
    name: 'OnionShare',
    tagline: 'Anonymous file sharing over Tor',
    category: 'Networks',
    rating: 4,
    trustScore: 98,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Least Authority',
    relatedArticles: ['file-sharing'],
    verdict: 'OnionShare lets you securely and anonymously share files of any size directly from your computer to someone else, using the Tor network. It leaves no trace on any server.',
    pros: [
      'Files never touch a central server (peer-to-peer)',
      'Uses the Tor network for total anonymity',
      'Receiver only needs the Tor Browser to download',
      'Open source and audited'
    ],
    cons: [
      'Both sender and receiver must be online at the same time',
      'Transfers over Tor can be very slow'
    ]
  },
  {
    id: 'wormhole',
    website: 'https://wormhole.app',
    index: 29,
    name: 'Wormhole',
    tagline: 'Fast, end-to-end encrypted file sharing',
    category: 'Networks',
    rating: 4,
    trustScore: 90,
    platforms: ['Browser'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Not formally audited',
    relatedArticles: ['file-sharing'],
    verdict: 'Wormhole provides incredibly fast file sharing with end-to-end encryption. It\'s much safer than Dropbox or Google Drive for sending sensitive files quickly.',
    pros: [
      'End-to-end encrypted (the server cannot see the files)',
      'Extremely fast transfer speeds',
      'Simple web interface, no account required',
      'Peer-to-peer streaming for large files'
    ],
    cons: [
      'Not fully open source',
      'Files are deleted after 24 hours or 100 downloads'
    ]
  },
  {
    id: 'qbittorrent',
    website: 'https://www.qbittorrent.org',
    index: 30,
    name: 'qBittorrent',
    tagline: 'The best open-source torrent client',
    category: 'Networks',
    rating: 4,
    trustScore: 95,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['file-sharing'],
    verdict: 'qBittorrent is the community favorite for peer-to-peer file sharing. It is completely free, open source, and contains absolutely zero advertisements or bundled software.',
    pros: [
      'Completely free and open source',
      'No ads, no bundled software, no tracking',
      'Includes a built-in search engine',
      'Excellent support for advanced features (DHT, PEX, VPN binding)'
    ],
    cons: [
      'Interface is functional but looks dated'
    ]
  },
  {
    id: 'transmission',
    website: 'https://transmissionbt.com',
    index: 31,
    name: 'Transmission',
    tagline: 'A lightweight, beautiful torrent client',
    category: 'Networks',
    rating: 4,
    trustScore: 95,
    platforms: ['macOS', 'Linux', 'Windows'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['file-sharing'],
    verdict: 'Transmission is heavily favoured on macOS and Linux for its simplicity and incredibly low resource usage. It does exactly what it needs to without any bloat.',
    pros: [
      'Extremely lightweight on system resources',
      'Beautiful, native macOS interface',
      'Free, open source, and ad-free',
      'Easy remote management'
    ],
    cons: [
      'Lacks some of the advanced fine-tuning features found in qBittorrent'
    ]
  },
  {
    id: 'tails',
    website: 'https://tails.net',
    index: 32,
    name: 'Tails',
    tagline: 'The amnesic incognito live system',
    category: 'Operating Systems',
    rating: 4,
    trustScore: 98,
    platforms: ['USB/DVD (PC/Mac)'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53, multiple academic audits',
    relatedArticles: ['linux-privacy-security', 'anonymous-browsing'],
    verdict: 'Tails is a portable operating system you start from a USB stick. It routes all traffic through Tor and leaves absolutely no trace on the computer you use it on. It is the gold standard for anonymous browsing.',
    pros: [
      'Leaves zero trace on the host computer',
      'Forces all internet connections through the Tor network',
      'Includes built-in encryption tools',
      'Can be booted on almost any computer'
    ],
    cons: [
      'Not designed for daily use as a main operating system',
      'Requires rebooting your computer to use'
    ]
  },
  {
    id: 'qubes-os',
    website: 'https://www.qubes-os.org',
    index: 33,
    name: 'Qubes OS',
    tagline: 'A reasonably secure operating system',
    category: 'Operating Systems',
    rating: 4,
    trustScore: 95,
    platforms: ['PC'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Qubes OS isolates different tasks into completely separate virtual machines. If one part of your system gets hacked, the rest remains perfectly safe. It is highly secure, but incredibly demanding.',
    pros: [
      'Unparalleled security through isolation (compartmentalization)',
      'A compromised app cannot access data from other apps',
      'Allows running Windows and Linux apps side-by-side securely',
      'Open source and praised by security experts'
    ],
    cons: [
      'Extremely steep learning curve',
      'Requires very powerful hardware (lots of RAM and a specific CPU)',
      'Hardware compatibility is limited'
    ]
  },
  {
    id: 'librewolf',
    website: 'https://librewolf.net',
    index: 34,
    name: 'LibreWolf',
    tagline: 'A custom, private version of Firefox',
    category: 'Browsers',
    rating: 5,
    trustScore: 97,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'LibreWolf is Firefox without any of the tracking or telemetry. It comes pre-configured with uBlock Origin and the strictest privacy settings enabled out of the box.',
    pros: [
      'No telemetry, adware, or tracking by default',
      'Forces HTTPS and includes uBlock Origin automatically',
      'Removes the Pocket integration and sponsored shortcuts',
      'Open source and community driven'
    ],
    cons: [
      'Strict settings can occasionally break certain websites (requires adjusting)',
      'Updates slightly slower than official Firefox'
    ],
    content: `
      <h2>What Is LibreWolf?</h2>
      <p>LibreWolf is a version of Firefox that has been stripped down to its privacy essentials. Every telemetry call, every sponsored suggestion, and every "phone home" feature that Firefox ships with has been removed. What remains is a very fast, very capable browser that starts protecting you immediately — no configuration needed.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>LibreWolf is Firefox with all the privacy settings already turned on and all the tracking already removed — think of it as "privacy hardened Firefox" that comes that way out of the box. It forks Firefox's source code and applies a curated set of about:config overrides, including disabling WebRTC IP leaks, enabling resistFingerprinting, and blocking telemetry endpoints, plus ships with uBlock Origin pre-installed.</div></div>

      <h2>How Is It Different From Firefox?</h2>
      <p>Regular Firefox collects crash reports, usage statistics, and experiment data that it sends back to Mozilla. It also ships with Pocket (Mozilla's read-it-later service) and sponsored shortcuts on the new tab page. LibreWolf removes all of this. It also comes with uBlock Origin pre-installed and the strongest privacy settings already enabled.</p>

      <h2>Works on Windows Too</h2>
      <p>Despite being very popular in the Linux community, LibreWolf also runs on Windows and macOS. If you want a Firefox that's already fully hardened on any platform, LibreWolf is the simplest path.</p>

      <h2>Verdict</h2>
      <p>LibreWolf is the easiest way to get maximum-privacy Firefox without spending any time in settings menus. If you trust Firefox but not Mozilla's data collection practices, this is your browser.</p>
    `
  },
  {
    id: 'luks',
    website: 'https://gitlab.com/cryptsetup/cryptsetup',
    index: 35,
    name: 'LUKS (Full Disk Encryption)',
    tagline: 'Lock down your entire hard drive',
    category: 'Security Tools',
    rating: 5,
    trustScore: 99,
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Multiple security audits',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'LUKS is the standard for encrypting an entire hard drive on Linux. If someone steals your laptop, they cannot read a single file without your encryption passphrase.',
    pros: [
      'Encrypts everything: the operating system, swap, and personal files',
      'Built directly into the Linux kernel for maximum performance',
      'Industry-standard security',
      'Almost invisible once you enter your passphrase at boot'
    ],
    cons: [
      'If you lose your passphrase, your data is gone forever',
      'Must be configured when installing the operating system'
    ],
    content: `
      <h2>What Is Full Disk Encryption?</h2>
      <p>Full disk encryption scrambles every single bit of data on your hard drive. Without the correct passphrase entered at startup, the drive looks like random garbage to anyone who examines it — even if they remove it from the laptop and plug it into another computer.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>LUKS scrambles your entire hard drive using a key derived from your passphrase — there is no back door, no company can unlock it for the police, and without your passphrase the data is mathematically unreadable. Technically: LUKS (Linux Unified Key Setup) uses AES-256 with XTS mode and derives the encryption key from your passphrase using PBKDF2 or Argon2. The key is stored in one or more key slots in the LUKS header, allowing multiple passphrases or keyfiles.</div></div>

      <h2>When Does This Matter?</h2>
      <p>If your laptop is stolen and the drive is not encrypted, the thief can simply remove the hard drive, plug it into another computer, and read every file without needing your login password. Full disk encryption makes this impossible. It's the single most important protection for a laptop.</p>

      <h2>How to Enable It</h2>
      <p>LUKS is configured at installation time, not afterwards. When installing Ubuntu, Fedora, Mint, or most other distributions, the installer will show an option like "Encrypt the installation for security" or "Use LVM with encryption." Tick that box. Choose a strong passphrase — this is the only thing protecting your data, so make it long and memorable. You will be asked for it each time the computer starts.</p>

      <h2>Verdict</h2>
      <p>LUKS full disk encryption should be enabled on every laptop running Linux. It is free, built into the system, and adds essentially zero performance impact on modern hardware. The risk of not having it — your data being read if the laptop is ever lost or stolen — is significant.</p>
    `
  },
  {
    id: 'veracrypt',
    website: 'https://www.veracrypt.fr',
    index: 36,
    name: 'VeraCrypt',
    tagline: 'Securely encrypted folders and drives',
    category: 'Security Tools',
    rating: 5,
    trustScore: 98,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Quarkslab',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'VeraCrypt allows you to create an encrypted "safe" (a file or a USB drive) for highly sensitive documents. It is the successor to TrueCrypt and is widely trusted by security professionals.',
    pros: [
      'Creates encrypted containers that look like random data',
      'Supports hidden operating systems and plausible deniability',
      'Independent security audits confirm its safety',
      'Cross-platform (open a vault on Windows, Mac, or Linux)'
    ],
    cons: [
      'Interface feels dated and can be intimidating for beginners'
    ],
    content: `
      <h2>What Is VeraCrypt For?</h2>
      <p>VeraCrypt creates encrypted "containers" — files that look like random data to anyone who doesn't know the password, but open up as a usable folder when you do. You can also use it to encrypt an entire USB drive or external hard disk.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>VeraCrypt creates a secret, scrambled "safe" on your computer — only your password opens it, and when it's locked it's just a file full of random gibberish. When unlocked, it works like any normal folder. Under the hood, it uses AES-256-XTS, Serpent, or Twofish (or cascades of them) for encryption, with PBKDF2, bcrypt, or Argon2 key derivation to resist brute force. Volumes can be hidden inside other volumes for plausible deniability.</div></div>

      <h2>Plausible Deniability</h2>
      <p>VeraCrypt has a powerful feature called "hidden volumes." You create one encrypted container that has two passwords: one opens innocent files, the other opens the real sensitive files. If someone forces you to reveal your password, you give them the first one — they see nothing sensitive, and there's no way to prove a hidden volume exists.</p>

      <h2>Use Cases</h2>
      <ul>
        <li>Storing sensitive documents (tax records, medical files, passwords) in an encrypted folder on your desktop</li>
        <li>Keeping a private encrypted USB drive to carry sensitive files between computers</li>
        <li>Creating a hidden encrypted partition on a drive for maximum plausible deniability</li>
      </ul>

      <h2>Verdict</h2>
      <p>VeraCrypt is the tool security professionals reach for when they need to protect a specific folder or drive. It's free, cross-platform, and extensively audited. The only downside is a dated interface — once you understand how to create and open a volume, you won't touch the interface often anyway.</p>
    `
  },
  {
    id: 'metadata-cleaner',
    website: 'https://0xacab.org/jvoisin/mat2',
    index: 37,
    name: 'Metadata Cleaner (MAT2)',
    tagline: 'Strip hidden tracking info from files',
    category: 'Security Tools',
    rating: 4,
    trustScore: 95,
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
  },
  {
    id: 'bleachbit',
    website: 'https://www.bleachbit.org',
    index: 38,
    name: 'BleachBit',
    tagline: 'Deep-clean your system caches and trackers',
    category: 'Security Tools',
    rating: 4,
    trustScore: 93,
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
  },
  {
    id: 'flatpak',
    website: 'https://flatpak.org',
    index: 39,
    name: 'Flatpak',
    tagline: 'Sandboxed apps for Linux',
    category: 'Security Tools',
    rating: 4,
    trustScore: 92,
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Flatpak is a way to install Linux applications where each app runs in its own "sandbox." This prevents a compromised app from spying on your personal files or other software.',
    pros: [
      'Apps are isolated from the core system (sandboxing)',
      'You can use "Flatseal" to visually manage app permissions',
      'Provides the latest software regardless of what distribution you use',
      'Standardized across the Linux ecosystem'
    ],
    cons: [
      'Apps take up more disk space because they bundle their own dependencies',
      'Sandboxing isn\'t always perfect depending on how the app was packaged'
    ],
    content: `
      <h2>Why Sandboxing Matters</h2>
      <p>When you install a traditional Linux application, it has access to your entire home folder and can potentially read files from other applications. Flatpak changes this: each app runs in its own isolated bubble (called a sandbox) and can only access what you explicitly allow.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Each Flatpak app lives in its own locked room — it can only talk to the rest of your system through a controlled doorway. If the app is compromised or malicious, the damage is limited to what it was allowed to access. Flatpak uses Linux kernel namespaces, cgroups, and seccomp-bpf to create this isolated execution environment, with apps accessing host resources only via portal APIs that mediate requests through the user session.</div></div>

      <h2>Managing Permissions with Flatseal</h2>
      <p>By default, each Flatpak app requests certain permissions when it's packaged — access to the network, access to your Documents folder, etc. You can view and change these permissions using a free tool called <strong>Flatseal</strong>. For example, you could use Flatseal to remove network access from a painting app that has no business connecting to the internet.</p>

      <h2>How to Install Apps via Flatpak</h2>
      <ol>
        <li>Install Flatpak by following the instructions at <strong>flatpak.org/setup</strong> for your distribution</li>
        <li>Add the Flathub repository: <code>flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo</code></li>
        <li>Browse and install apps at <strong>flathub.org</strong>, or install from the terminal: <code>flatpak install flathub app.name</code></li>
        <li>Install Flatseal to manage permissions: <code>flatpak install flathub com.github.tchx84.Flatseal</code></li>
      </ol>

      <h2>Verdict</h2>
      <p>Flatpak is the recommended way to install applications on Linux when you want better isolation and the latest software versions. For most users, simply getting apps from Flathub and adjusting permissions with Flatseal provides a significant security improvement with minimal effort.</p>
    `
  },
  {
    id: 'firejail',
    website: 'https://firejail.wordpress.com',
    index: 40,
    name: 'Firejail',
    tagline: 'Advanced app sandboxing for experts',
    category: 'Security Tools',
    rating: 4,
    trustScore: 94,
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'Firejail acts like a strict bouncer for your existing applications. You can run any app through Firejail to heavily restrict what files or networks it is allowed to access.',
    pros: [
      'Incredibly powerful containment for untrusted software',
      'Comes with hundreds of pre-configured security profiles',
      'Prevents apps from accessing the internet or your home folder',
      'Lightweight and doesn\'t require reinstalling apps'
    ],
    cons: [
      'Requires technical knowledge to fix apps if a security profile breaks them',
      'As a SUID binary, it theoretically increases the attack surface of the system itself'
    ],
    content: `
      <h2>What Is Firejail?</h2>
      <p>Firejail wraps around any existing application and constrains what it can do. You can run your web browser, your PDF reader, or any other app through Firejail and it will restrict what files and network resources it can access — without reinstalling anything.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Firejail puts a cage around any application — you can tell it "this app is only allowed to see its own folder" or "this app cannot access the internet" and it enforces those rules at the kernel level. It is a SUID sandbox program that uses Linux namespaces, seccomp-bpf filters, and Linux capabilities to restrict an application's access to the filesystem, network, and system calls. It ships with pre-written security profiles for hundreds of applications.</div></div>

      <h2>How to Use It</h2>
      <p>Once installed (available in most distribution repositories), you can prefix any command with <code>firejail</code>:</p>
      <ul>
        <li><code>firejail firefox</code> — runs Firefox in a sandbox</li>
        <li><code>firejail vlc</code> — runs the VLC media player sandboxed</li>
        <li><code>firejail --noprofile --net=none document-editor</code> — runs an app with no internet access</li>
      </ul>
      <p>Firejail ships with ready-made security profiles for over 800 applications, so for well-known software it works immediately without configuration.</p>

      <h2>Verdict</h2>
      <p>Firejail is a powerful tool for experienced Linux users who want to add an extra containment layer around applications. For most regular users, Flatpak provides adequate sandboxing with less complexity. Use Firejail when you need to sandbox applications that aren't available as Flatpaks.</p>
    `
  },
  {
    id: 'ufw',
    website: 'https://launchpad.net/ufw',
    index: 41,
    name: 'UFW (Uncomplicated Firewall)',
    tagline: 'Simple network protection',
    category: 'Networks',
    rating: 5,
    trustScore: 96,
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'UFW is the standard firewall tool for Linux. By turning it on, you immediately block all incoming connections, preventing malicious actors on public networks from accessing your machine.',
    pros: [
      'Incredibly easy to use (literally just type "ufw enable")',
      'Denies all incoming traffic by default',
      'Graphic interface (GUFW) available for beginners',
      'Pre-installed on many distributions like Ubuntu and Mint'
    ],
    cons: [
      'It only manages iptables/nftables under the hood (not a full replacement for advanced routing)'
    ],
    content: `
      <h2>What Is a Firewall?</h2>
      <p>A firewall is a gatekeeper for your network traffic. It sits between your computer and the internet and decides what connections are allowed through and what are blocked. By default on most Linux systems, there is no firewall enabled — which means any service running on your computer could potentially accept connections from the network.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>UFW sets up a rule that says "nobody is allowed to knock on my computer's door unless I specifically invited them." This prevents other devices on the same network (like a coffee shop's WiFi) from accessing your machine. UFW is a frontend for iptables (and nftables on newer systems) that simplifies rule management — the default deny policy for incoming traffic means all inbound connection attempts are dropped unless a specific rule explicitly allows them. Outbound traffic is permitted by default.</div></div>

      <h2>How to Enable UFW</h2>
      <p>UFW is pre-installed on Ubuntu and Linux Mint. On other distributions, install it with your package manager.</p>
      <ol>
        <li>Open a terminal</li>
        <li>Run: <code>sudo ufw enable</code></li>
        <li>That's it. UFW is now active and blocking all incoming connections by default.</li>
      </ol>
      <p>If you need to allow a specific service (e.g., SSH for remote access): <code>sudo ufw allow ssh</code></p>
      <p>To check the status and see all active rules: <code>sudo ufw status verbose</code></p>

      <h2>GUFW — the Graphical Interface</h2>
      <p>If you prefer a visual interface, install GUFW (Graphical UFW) from your software centre. It lets you manage all firewall rules with clickable buttons instead of terminal commands.</p>

      <h2>Verdict</h2>
      <p>UFW is the simplest and most important security step for any Linux system, especially on laptops that connect to public WiFi. Enable it immediately after installing Linux. The two-second setup provides continuous protection with no ongoing maintenance needed.</p>
    `
  }

  {
    id: '1password',
    website: 'https://1password.com',
    index: 43,
    name: '1Password',
    tagline: 'Premium, polished password management',
    category: 'Password Managers',
    rating: 5,
    trustScore: 90,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Cure53, Securisea, and others',
    relatedArticles: ['password-managers-guide', 'practical-privacy-stack'],
    verdict: '1Password is the best choice if you are willing to pay for a flawless user experience, excellent family sharing, and robust security. While it is not open source, its security model is widely respected.',
    pros: [
      'Incredibly polished apps across all platforms',
      'Excellent features for sharing passwords with family or teams',
      'Strong Secret Key architecture protects against server breaches',
      'Great built-in 2FA code generator'
    ],
    cons: [
      'No free tier available',
      'Closed-source, so you rely on their external audits'
    ],
    content: `
      <h2>The Premium Experience</h2>
      <p>1Password is often considered the gold standard for usability in the password manager space. While we often recommend open-source tools like Bitwarden, 1Password earns its place by offering an incredibly smooth experience that makes adopting good security habits easy — especially for less technical family members.</p>
      
      <h2>How It Keeps You Safe</h2>
      <p>Even though 1Password is closed-source, they have a highly respected security model. When you create an account, you get a "Secret Key" — a long string of characters stored only on your devices. To access your vault on a new device, you need both your Master Password (which you memorize) and your Secret Key (which you usually scan via QR code or type from a printed document).</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>This means that even if a hacker stole your Master Password and compromised 1Password's servers, they still couldn't access your data without physically possessing one of your devices to get the Secret Key. This dual-layer encryption makes 1Password exceptionally resilient against remote attacks.</div></div>

      <h2>Verdict</h2>
      <p>If you don't mind paying an annual subscription, 1Password is fantastic. Its family plan is particularly good for helping relatives upgrade their security without overwhelming them.</p>
    `
  },
  {
    id: 'proton-pass',
    website: 'https://proton.me/pass',
    index: 44,
    name: 'Proton Pass',
    tagline: 'Password manager with built-in email aliases',
    category: 'Password Managers',
    rating: 4,
    trustScore: 94,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Cure53',
    relatedArticles: ['password-managers-guide', 'practical-privacy-stack'],
    verdict: 'Proton Pass is a strong, open-source password manager that shines if you are already in the Proton ecosystem. Its killer feature is the ability to generate unique email aliases on the fly when signing up for new services.',
    pros: [
      'Built-in email alias generation (hide-my-email)',
      'Open-source and independently audited',
      'Integrates perfectly with Proton Mail and Proton VPN',
      'Strong free tier'
    ],
    cons: [
      'Newer than competitors like Bitwarden, so it lacks some niche advanced features',
      'Web app experience is still evolving'
    ],
    content: `
      <h2>More Than Just Passwords</h2>
      <p>Proton Pass comes from the Swiss company behind Proton Mail. It does everything a good password manager should do — end-to-end encryption, cross-platform syncing, and secure password generation — but it adds one incredibly useful feature: integrated email aliases.</p>
      
      <h2>The Power of Email Aliases</h2>
      <p>When you sign up for a new website, Proton Pass doesn't just generate a strong password; it can also generate a unique, random email address (like <code>word-random@pass.inbox</code>) that forwards to your real email. This means the website never gets your actual email address.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Using unique email aliases is a powerful compartmentalisation technique. If a website gets hacked, the attackers only get a useless alias. If they start sending spam to it, you can simply click a button in Proton Pass to deactivate that alias, instantly stopping the spam without affecting your other accounts.</div></div>

      <h2>Verdict</h2>
      <p>If you already use Proton Mail, Proton Pass is a natural choice. Even if you don't, the integrated alias feature makes it a compelling alternative to Bitwarden for those looking to protect their inbox from spam and tracking.</p>
    `
  },
  {
    id: 'session',
    website: 'https://getsession.org',
    index: 45,
    name: 'Session',
    tagline: 'Anonymous messenger with no phone number required',
    category: 'Messaging',
    rating: 4,
    trustScore: 95,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Quarkslab',
    relatedArticles: ['privacy-vs-convenience', 'practical-privacy-stack'],
    verdict: 'Session is an incredibly private messenger that, unlike Signal or WhatsApp, does not require a phone number to sign up. It routes messages through a decentralized network to protect your metadata.',
    pros: [
      'No phone number or email required to sign up',
      'Decentralized routing (onion routing) hides your IP address and metadata',
      'End-to-end encrypted by default',
      'Open-source'
    ],
    cons: [
      'No voice or video calls',
      'Message delivery can occasionally be delayed due to the decentralized network',
      'Smaller user base means convincing friends to switch is harder'
    ],
    content: `
      <h2>Anonymity Over Everything</h2>
      <p>Signal is the gold standard for secure messaging, but it requires a phone number, which inherently links your account to your real-world identity. Session solves this problem. When you start Session, it generates a random "Session ID" — a long string of letters and numbers. You share this ID with people to chat. No phone number, no email, no name required.</p>
      
      <h2>How It Hides Your Metadata</h2>
      <p>Session goes further than just encrypting the contents of your messages. It uses an onion-routing network (similar to Tor) consisting of thousands of community-run nodes.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When you send a message, it bounces through three different servers before reaching the recipient. The first server knows who you are but not the destination. The middle server knows neither. The final server knows the destination but not who sent it. This protects your metadata — nobody, not even the network itself, knows who is talking to whom.</div></div>

      <h2>Verdict</h2>
      <p>Session is not a complete replacement for Signal or WhatsApp because it lacks voice and video calling, and the network can be slightly slower. However, for activists, journalists, or anyone needing true anonymity in their communications, it is one of the best tools available.</p>
    `
  },
  {
    id: 'proton-vpn',
    website: 'https://protonvpn.com',
    index: 46,
    name: 'Proton VPN',
    tagline: 'High-speed, open-source VPN from a trusted provider',
    category: 'Networks',
    rating: 5,
    trustScore: 96,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'SEC Consult',
    relatedArticles: ['vpn-explainer', 'practical-privacy-stack'],
    verdict: 'Proton VPN is one of the most transparent and trustworthy VPNs on the market. It offers a genuinely excellent free tier with no data limits, and a premium tier with advanced routing features.',
    pros: [
      'Strict no-logs policy, based in privacy-friendly Switzerland',
      'The only trustworthy free VPN (no data limits, no ads, no selling data)',
      'Apps are entirely open-source and audited',
      'Secure Core feature routes traffic through privacy-friendly countries first'
    ],
    cons: [
      'Free tier does not support streaming services',
      'Paid tiers are slightly more expensive than some competitors'
    ],
    content: `
      <h2>The Only Free VPN You Should Use</h2>
      <p>Most free VPNs are dangerous. They pay for their servers by logging your traffic and selling your data to advertisers — the exact opposite of what a VPN should do. Proton VPN is the exception. Their free tier is subsidized by paying users, offering unlimited data and strong encryption, though it limits your speed and server choices.</p>
      
      <h2>Advanced Features</h2>
      <p>If you upgrade to the paid tier, Proton VPN offers excellent speeds, support for streaming services, and a feature called "Secure Core."</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Secure Core routes your traffic through servers in privacy-friendly countries (like Switzerland or Iceland) before sending it on to your final destination. This defends against network attacks where an adversary might be monitoring the exit server, adding an extra layer of operational security.</div></div>

      <h2>Verdict</h2>
      <p>Proton VPN and Mullvad are the two best VPNs available. Choose Mullvad for absolute anonymity (cash payments, no accounts), and choose Proton VPN if you want a great free tier, streaming support, or integration with the rest of the Proton ecosystem.</p>
    `
  },
  {
    id: 'pia',
    website: 'https://www.privateinternetaccess.com',
    index: 47,
    name: 'Private Internet Access (PIA)',
    tagline: 'Highly configurable, proven no-logs VPN',
    category: 'Networks',
    rating: 4,
    trustScore: 89,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Paid',
    openSource: true,
    auditedBy: 'Deloitte',
    relatedArticles: ['vpn-explainer', 'practical-privacy-stack'],
    verdict: 'Private Internet Access (PIA) is a veteran VPN provider with a massive server network and a no-logs policy that has been proven in court multiple times. It is highly configurable for advanced users.',
    pros: [
      'No-logs policy proven in multiple US court cases',
      'Desktop apps are open-source and highly customisable',
      'Supports port forwarding and advanced network tweaks',
      'Very affordable on long-term plans'
    ],
    cons: [
      'Based in the US (part of the Five Eyes intelligence alliance)',
      'Owned by Kape Technologies, a conglomerate that concerns some privacy purists'
    ],
    content: `
      <h2>A Proven Track Record</h2>
      <p>PIA has something very few VPNs have: court-proven privacy. On multiple occasions, US law enforcement has subpoenaed PIA for user data, and PIA has testified under oath that they have nothing to hand over because they do not keep logs. This real-world test is far more valuable than marketing promises.</p>
      
      <h2>For the Tinkerers</h2>
      <p>PIA is particularly popular with advanced users. The desktop applications expose a wealth of settings, allowing you to choose your exact encryption ciphers, handshake methods, and MTU sizes. It also supports port forwarding, which is highly useful for specific networking tasks like self-hosting or optimized P2P file sharing.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>While PIA is based in the US — which is generally a negative for privacy services due to surveillance laws — their consistent ability to prove in court that they do not log data mitigates much of this risk. However, users with extreme threat models might still prefer a provider outside the Five Eyes alliance, like Mullvad or Proton VPN.</div></div>

      <h2>Verdict</h2>
      <p>If you want a highly configurable VPN that is inexpensive and has a proven track record of fighting for user privacy in court, PIA is a solid choice, despite its corporate ownership.</p>
    `
  },
  {
    id: 'tuta-mail',
    website: 'https://tuta.com',
    index: 48,
    name: 'Tuta Mail',
    tagline: 'Privacy-maximalist encrypted email',
    category: 'Email',
    rating: 4,
    trustScore: 95,
    platforms: ['Web', 'Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'SySS GmbH',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Tuta (formerly Tutanota) is a privacy-first email service based in Germany. It encrypts more of your data than almost any competitor, including subject lines and calendar entries.',
    pros: [
      'Encrypts subject lines, address books, and calendars (unlike many competitors)',
      'Does not use third-party push notification services from Google or Apple',
      'Open-source clients across all platforms',
      'Generous free tier with no ads'
    ],
    cons: [
      'Does not support standard IMAP/SMTP (you must use their app)',
      'Search functionality is slightly clunky because it has to search encrypted data locally'
    ],
    content: `
      <h2>Going the Extra Mile for Encryption</h2>
      <p>Tuta is one of the most uncompromising email providers when it comes to privacy. While other secure email providers encrypt the body of your message, Tuta goes further by encrypting the subject line, your entire calendar, and your address book end-to-end.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Because everything is encrypted before it reaches Tuta's servers in Germany, they cannot read your emails, hand them over to authorities, or scan them for advertising. They even built their own push notification system for Android to avoid relying on Google Play Services, which is a massive win for users of de-Googled phones like GrapheneOS.</div></div>

      <h2>The IMAP Trade-Off</h2>
      <p>The main drawback of Tuta is that you cannot use it with standard email clients like Apple Mail, Thunderbird, or Outlook. Because of their unique encryption architecture, you must use their official apps or web interface. This ensures security, but reduces flexibility.</p>

      <h2>Verdict</h2>
      <p>If you are looking for the absolute maximum level of encryption and privacy in an email provider, and are willing to use dedicated apps, Tuta is a fantastic alternative to Proton Mail.</p>
    `
  },
  {
    id: 'fastmail',
    website: 'https://www.fastmail.com',
    index: 49,
    name: 'Fastmail',
    tagline: 'Lightning-fast, independent email focusing on productivity',
    category: 'Email',
    rating: 4,
    trustScore: 85,
    platforms: ['Web', 'iOS', 'Android', 'Standard Email Clients'],
    pricing: 'Paid',
    openSource: false,
    auditedBy: 'Internal audits',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Fastmail is not end-to-end encrypted like Proton or Tuta, but it is vastly better than Gmail. It is a fantastic option for users who want blazing fast email, standard IMAP support, and no ad-scanning, without the friction of full encryption.',
    pros: [
      'Incredibly fast and reliable web interface',
      'Excellent support for standard email apps via IMAP/SMTP',
      'No ads, no tracking, and no scanning of emails for marketing',
      'Great calendar and contacts integration'
    ],
    cons: [
      'Not end-to-end encrypted (Fastmail can technically read your emails)',
      'Based in Australia (Five Eyes alliance)',
      'No free tier'
    ],
    content: `
      <h2>The Middle Ground of Email Privacy</h2>
      <p>Not everyone needs military-grade encryption. For many people, the goal is simply to stop Google or Microsoft from scanning their inbox to build advertising profiles. Fastmail is the perfect solution for this threat model. You pay them directly, so you are the customer, not the product.</p>
      
      <h2>Productivity Over Paranoia</h2>
      <p>Because Fastmail doesn't use end-to-end encryption, it can offer features that secure providers struggle with. Server-side search is lightning fast. You can plug your account into any email app you like. The calendar works flawlessly. It feels just like Gmail, but without the surveillance capitalism.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Fastmail protects your data from advertisers and data brokers, but not from lawful government requests. Because they hold the encryption keys to their servers, they can be compelled by Australian law to hand over your inbox contents. If this is a concern for your threat model, use Proton Mail or Tuta instead.</div></div>

      <h2>Verdict</h2>
      <p>Fastmail is the best choice for professionals and everyday users who want a beautiful, fast, and ad-free email experience, and who are comfortable trusting an independent company with their data rather than relying on strict mathematical encryption.</p>
    `
  },
  {
    id: 'addy-io',
    website: 'https://addy.io',
    index: 50,
    name: 'Addy.io',
    tagline: 'Open-source email forwarding and aliases',
    category: 'Email',
    rating: 4,
    trustScore: 92,
    platforms: ['Web', 'Browser Extensions'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['practical-privacy-stack'],
    verdict: 'Addy.io (formerly AnonAddy) is a powerful, open-source tool for creating unlimited email aliases. It sits between websites and your real inbox, protecting your identity and stopping spam.',
    pros: [
      'Creates unlimited email aliases on the fly',
      'Open-source and can be self-hosted',
      'Supports PGP encryption for forwarded emails',
      'Excellent free tier'
    ],
    cons: [
      'Replying from aliases requires a bit of setup',
      'Less polished interface compared to SimpleLogin'
    ],
    content: `
      <h2>Protecting Your Real Email Address</h2>
      <p>Every time you give a website your real email address, you are giving them a unique identifier that data brokers use to track you across the internet. Addy.io solves this by providing unlimited alias addresses (like <code>shopping@yourusername.anonaddy.com</code>). You give the alias to the website, Addy.io receives the email, and forwards it to your real inbox.</p>
      
      <h2>Containment and Control</h2>
      <p>If a website gets hacked or sells your address to spammers, you will know exactly who leaked it because the spam will come to that specific alias. You can then toggle a switch in Addy.io to turn that alias off, instantly stopping the spam without affecting any of your other accounts.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>For advanced users, Addy.io supports PGP encryption. Even if you use a standard provider like Gmail, Addy.io can encrypt all incoming emails with your public PGP key before forwarding them, meaning Google cannot read the contents of your forwarded mail.</div></div>

      <h2>Verdict</h2>
      <p>Addy.io is a fantastic, open-source alternative to SimpleLogin or Apple's Hide My Email. Using an alias service is one of the most effective ways to reduce spam and compartmentalize your digital life.</p>
    `
  }
];

export default REVIEWS;
