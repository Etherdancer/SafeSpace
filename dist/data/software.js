/* ============================================================
   SafeSpace — data/software.js
   Full software reviews for all tools mentioned across articles
   ============================================================ */

const REVIEWS = [
  /* ── PASSWORD MANAGERS ───────────────────────────────────── */
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    tagline: 'The best free, open-source password manager',
    category: 'Password Managers',
    rating: 5,
    trustScore: 96,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Browser'],
    pricing: 'Free / $10/yr Premium',
    openSource: true,
    auditedBy: 'Cure53, Insight Risk Consulting',
    relatedArticles: ['password-managers-guide', 'smartphone-hardening'],
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
      <p>Yes — and unusually, you can verify this yourself. Bitwarden is <strong>open source</strong>, which means every line of code that makes up the app is publicly available on the internet. Security researchers around the world can — and do — read it to check for problems. There's nowhere to hide a back door.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Bitwarden's client and server code is published on GitHub under an open source licence, enabling independent third-party code review. <br><strong>Plain:</strong> Anyone in the world can read the app's source code and look for hidden problems. The code is out in the open — nothing is secret.</div></div>

      <p>Beyond that, Bitwarden has paid independent security firms to audit their code. In 2018, Cure53 reviewed it. In 2023, Insight Risk Consulting checked it again. Both found no critical issues. These reports are published publicly — you can read them.</p>

      <h2>How Does It Protect Your Passwords?</h2>
      <p>Before your passwords ever leave your device, they are scrambled using a method called AES-256 encryption — the same standard used by governments and banks worldwide. Only your master password can unscramble them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Bitwarden encrypts your vault client-side with AES-256-CBC before transmitting it. The server stores only ciphertext and never receives your master password or encryption key. This is called zero-knowledge encryption. <br><strong>Plain:</strong> Your passwords are scrambled on your device before they're sent anywhere. Bitwarden's servers only ever receive a jumbled mess they can't read. Even Bitwarden has no idea what your passwords are.</div></div>

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
    name: 'KeePassXC',
    tagline: 'Your passwords stay on your device, always',
    category: 'Password Managers',
    rating: 4,
    trustScore: 97,
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'European Commission (2016), cure53 (2023)',
    relatedArticles: ['password-managers-guide', 'user-accounts-and-privacy'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> KeePassXC stores credentials in a local .kdbx database file encrypted with AES-256 or ChaCha20, derived from your master password via Argon2. No network connection is ever made. <br><strong>Plain:</strong> Your passwords live in one scrambled file on your computer. No internet. No company. No server that can be hacked. Just a file that only your master password can open.</div></div>

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
    name: 'Signal',
    tagline: 'The gold standard for private messaging',
    category: 'Messaging',
    rating: 5,
    trustScore: 98,
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53, Trail of Bits, multiple independent researchers',
    relatedArticles: ['smartphone-hardening', 'metadata-problem', 'user-accounts-and-privacy', 'android-privacy-settings'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Signal uses the Signal Protocol — a combination of the Double Ratchet algorithm and X3DH key exchange — to provide end-to-end encryption. This means messages are encrypted on the sender's device and can only be decrypted on the recipient's device. No intermediate server ever holds a readable copy. <br><strong>Plain:</strong> Your message is scrambled on your phone before it's sent. Only your recipient's phone can unscramble it. Signal's own servers never see what you wrote.</div></div>

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
    name: 'ProtonMail',
    tagline: 'Encrypted email based in Switzerland',
    category: 'Email',
    rating: 4,
    trustScore: 82,
    platforms: ['Web', 'iOS', 'Android'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> ProtonMail uses zero-access encryption: emails are encrypted with your public key before being stored on Proton's servers. Proton holds the ciphertext but never your private key, making server-side decryption impossible. <br><strong>Plain:</strong> Your emails are scrambled with a key that only you have. Proton stores the locked box but not the key — so even if someone forced Proton to hand over your emails, they'd get an unreadable jumble.</div></div>

      <h2>When Is Email Encrypted End-to-End?</h2>
      <p>Email encryption works best when both the sender and recipient use ProtonMail. In that case, your message is scrambled on your device before it's sent, and only unscrambled on your recipient's device. Proton's servers never see the readable content.</p>
      <p>When you email someone using Gmail, Outlook, or another service, the email travels unencrypted to them — because those services can't automatically decrypt it. You can add a password to protect such emails, but this requires agreeing on a password in advance. This is a fundamental limitation of how email works, not a ProtonMail flaw.</p>

      <h2>Is Switzerland Really That Private?</h2>
      <p>Switzerland has genuinely strong privacy laws and is not part of US or UK intelligence alliances. However, it does cooperate with international law enforcement requests in serious criminal cases. Proton has complied with Swiss court orders — they cannot refuse legal demands from Swiss courts. What they can say is: they cannot hand over email content they cannot read, because they don't have the key. They can, however, hand over metadata (who emailed whom, when) and may be ordered to begin logging a specific account in future.</p>

      <h2>The Honest Limitation: Email Metadata</h2>
      <p>Even with perfect encryption, email has an inherent weakness: metadata. Every email shows who sent it, who received it, when, from which servers, and via what route.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> SMTP email headers — including sender, recipient, timestamps, and routing hops — travel in plaintext and are visible to every mail server in the delivery chain. No encryption standard currently hides this metadata end-to-end. <br><strong>Plain:</strong> Even if the contents of your email are scrambled, every server it passes through can see who sent it, who received it, and when. Think of it like a sealed letter — no one can read inside, but the envelope shows the addresses. For truly sensitive communications, use Signal instead.</div></div>

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
    name: 'SimpleLogin',
    tagline: 'Protect your real email with disposable aliases',
    category: 'Email',
    rating: 4,
    trustScore: 88,
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> SimpleLogin acts as an email proxy. It generates unique alias addresses and rewrites inbound SMTP envelope headers to forward messages to your real inbox. Replies are re-routed so the original sender only ever sees the alias address. <br><strong>Plain:</strong> SimpleLogin acts like a post office box. Each website gets a different box number. All mail still ends up in your real mailbox. Nobody sees your real address. If a box starts getting junk, you delete it.</div></div>

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
    name: 'Brave Browser',
    tagline: 'Privacy by default, without any configuration',
    category: 'Browsers',
    rating: 4,
    trustScore: 80,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Chromium base audited continuously; community-reviewed Brave additions',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing', 'user-accounts-and-privacy'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Brave injects small random offsets into Canvas, WebGL, AudioContext, and font enumeration APIs on a per-origin basis. This makes the fingerprint values differ across sites while remaining consistent within a single site session, preventing cross-site linkage without breaking site functionality. <br><strong>Plain:</strong> Brave shows a slightly different "face" to each website you visit. Site A and Site B each see different technical details about your device — so they can't match notes and realise it's the same person. Other browsers show the same face everywhere.</div></div>

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
    name: 'Firefox (Privacy Hardened)',
    tagline: 'The open web\'s browser — and the most configurable',
    category: 'Browsers',
    rating: 4,
    trustScore: 86,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Mozilla internal security team; community audits',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Enabling <code>privacy.resistFingerprinting</code> causes Firefox to spoof or suppress a range of browser APIs — including canvas rendering, timezone, locale, screen resolution, and user agent string — returning standardised values instead of your real device details. <br><strong>Plain:</strong> With this setting on, Firefox lies to websites about your device. Instead of showing your real screen size, your real fonts, and your real system details, it shows generic values shared by thousands of other Firefox users. You blend into a crowd instead of standing out.</div></div>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> DNS over HTTPS (DoH) encrypts DNS queries — the requests your browser makes to translate website names like "example.com" into IP addresses — so your internet provider cannot see or log which sites you visit based on these lookups. <br><strong>Plain:</strong> Every time you go to a website, your browser first has to "look up" the address — like checking a phone book. Normally this lookup is visible to your internet provider. With DNS over HTTPS turned on, that lookup is encrypted and your provider can't see it.</div></div>

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
    name: 'Tor Browser',
    tagline: 'Strongest anonymity available for everyday browsing',
    category: 'Browsers',
    rating: 4,
    trustScore: 93,
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Multiple independent security researchers; widely peer-reviewed',
    relatedArticles: ['anonymous-browsing', 'browser-fingerprinting'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Tor (The Onion Router) encrypts traffic in three nested layers and routes it through a circuit of three volunteer-operated relays. Each relay decrypts one layer and forwards the packet. The exit node connects to the destination — but only knows the previous relay, not the origin. The entry node knows your IP but not the destination. No single relay knows both ends of the connection. <br><strong>Plain:</strong> Your request is wrapped in three locked envelopes and passed through three different computers around the world. Each computer opens only its own envelope and passes the next one on. By the time your request reaches the website, it comes from the last computer — not from you. No one in the chain knows the full picture.</div></div>

      <h2>The Fingerprint Problem — Solved</h2>
      <p>One of Tor Browser's most powerful features is that every user looks identical to websites. Tor Browser is a modified version of Firefox that reports exactly the same screen size, the same fonts, the same system details to every website — regardless of what your actual hardware is. You don't stand out; you blend into a crowd of tens of thousands of identical-looking Tor users.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Tor Browser ships with a fixed window size (1000×800 by default), disables JavaScript APIs that leak hardware details, and standardises font enumeration and canvas rendering. All users present the same fingerprint, making individual identification via browser fingerprinting infeasible. <br><strong>Plain:</strong> Every person using Tor Browser looks exactly the same to websites. Same window size. Same pretend screen. Same pretend fonts. You don't just have a disguise — you're wearing the exact same disguise as thousands of other people.</div></div>

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
    name: 'uBlock Origin',
    tagline: 'The most effective content blocker ever made',
    category: 'Browser Extensions',
    rating: 5,
    trustScore: 99,
    platforms: ['Firefox', 'Chrome', 'Edge', 'Opera'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Continuous community review on GitHub',
    relatedArticles: ['browser-fingerprinting', 'anonymous-browsing'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> uBlock Origin intercepts outgoing network requests at the browser level and compares each request's origin domain against community-maintained blocklists (EasyList, EasyPrivacy, uBlock filters, etc.). Requests matching known tracker or ad domains are blocked before any data leaves the browser. <br><strong>Plain:</strong> Before your browser even sends a request to a tracking company, uBlock Origin steps in and says "no." The tracker never loads. It never gets the chance to watch what you do.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Manifest V3 replaces the <code>webRequest</code> API's blocking capability with a declarativeNetRequest API that limits the number of filterable rules and removes dynamic rule evaluation. This structurally caps what content blockers like uBlock Origin can block in Chrome. <br><strong>Plain:</strong> Google is changing the rules for Chrome extensions in a way that lets fewer tracking scripts be blocked. uBlock Origin will be weaker on Chrome. On Firefox, those restrictions don't apply — the full blocker works indefinitely. This is a strong practical reason to use Firefox.</div></div>

      <h2>Verdict</h2>
      <p>uBlock Origin is the first thing we recommend to anyone who asks about online privacy. It's free, it works immediately, and it blocks thousands of tracking scripts without you having to do anything. Install it now.</p>
    `
  },

  /* ── VPNs ─────────────────────────────────────────────────── */
  {
    id: 'mullvad',
    name: 'Mullvad VPN',
    tagline: 'The most privacy-respecting VPN on the market',
    category: 'VPNs',
    rating: 5,
    trustScore: 97,
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    pricing: '€5/mo flat — no contracts',
    openSource: true,
    auditedBy: 'Cure53 (multiple published audits)',
    relatedArticles: ['vpn-explainer', 'anonymous-browsing', 'smartphone-hardening', 'android-privacy-settings'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A VPN encapsulates your outbound traffic inside an encrypted protocol (WireGuard or OpenVPN in Mullvad's case), terminating at the VPN server. Your ISP sees only an encrypted stream to Mullvad's IP. The destination website sees Mullvad's exit IP, not yours. <br><strong>Plain:</strong> A VPN is like a private tunnel for your internet traffic. Your internet provider can see you've entered the tunnel, but not where it leads. Websites can see the tunnel's exit point, but not that it's you.</div></div>

      <p>What a VPN does <em>not</em> do: it doesn't make you anonymous if you're logged in to Google, Facebook, or any account tied to your real identity. It doesn't protect against browser fingerprinting. It shifts trust from your internet provider to the VPN company — so choosing a trustworthy VPN company is everything.</p>

      <h2>Why Mullvad Is Different</h2>
      <p>The VPN market is full of companies whose business is marketing, not privacy. They run YouTube promotions, offer "lifetime" subscriptions, and make extraordinary claims. Mullvad is the opposite: a technically rigorous company that doesn't advertise aggressively and charges a fair, flat price.</p>
      <p>In April 2023, Swedish police raided Mullvad's offices and seized servers. They found nothing — because of how Mullvad's servers are built.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Mullvad runs RAM-only servers — all operating data lives in volatile memory (RAM) rather than persistent storage like hard drives. When power is cut, all data is instantly and permanently erased. There is no disk to seize and image. <br><strong>Plain:</strong> Mullvad's servers work like a whiteboard, not a notebook. Everything written on it disappears the moment the power goes off. When Swedish police seized the servers, they got blank whiteboards. No logs. Nothing.</div></div>

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
    name: 'Organic Maps',
    tagline: 'Offline maps with no tracking, no account, no ads',
    category: 'Maps',
    rating: 5,
    trustScore: 95,
    platforms: ['iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; based on OpenStreetMap',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Organic Maps makes zero network requests during navigation. All routing is computed on-device using downloaded vector map tiles. The app has no analytics SDK, no advertising SDK, and no telemetry. Your GPS coordinates never leave your device. <br><strong>Plain:</strong> Once you've downloaded the map for your area, the app works with no internet at all. Your phone figures out where you are and how to get there entirely by itself. Nothing is sent anywhere. No one knows where you went.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Jitsi Meet uses WebRTC with Insertable Streams to provide end-to-end encryption for calls with fewer than 8 participants (peer-to-peer or SFrame-based E2EE). For larger calls, media passes through a Selective Forwarding Unit (SFU) server — encrypted in transit with DTLS-SRTP but not end-to-end. <br><strong>Plain:</strong> For small calls (up to 8 people), the video and audio are scrambled end-to-end — even Jitsi's servers can't see them. For bigger calls, the server handles traffic (still encrypted on the wire, but Jitsi could technically see the content). No accounts means no profiles are built about participants either way.</div></div>

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
    name: 'Syncthing',
    tagline: 'Sync your files between your own devices — no cloud involved',
    category: 'File Sync',
    rating: 4,
    trustScore: 96,
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; used in high-security environments',
    relatedArticles: ['user-accounts-and-privacy', 'android-privacy-settings'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Syncthing uses the Block Exchange Protocol (BEP) over TLS 1.3 to transfer file blocks directly between paired devices. Device authentication uses public-key cryptography with self-generated certificates. No central server ever stores or relays your file contents — a discovery server only helps devices find each other's network addresses. <br><strong>Plain:</strong> Syncthing sends your files directly from one of your devices to another, encrypted the whole way. There's no cloud storage in the middle — just a secure private connection between your own machines. No company ever touches your files.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Obsidian reads and writes standard Markdown (.md) files directly to your local filesystem. It makes no network requests during normal use. There is no proprietary file format — your data is stored in a format any text editor can open. <br><strong>Plain:</strong> Your notes are just text files sitting in a folder on your computer. Obsidian is the app you use to view and edit them — but the files are yours. You could open them in Notepad right now. No account, no server, no company holding your thoughts.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Obsidian Sync encrypts vault contents client-side using AES-256 before uploading, with keys derived from your account credentials. Obsidian's servers store only ciphertext. The free alternative — Syncthing — never involves any external server at all. <br><strong>Plain:</strong> If you pay for Obsidian Sync, your notes are scrambled before they leave your device — Obsidian can't read them. If you use Syncthing instead, your notes go directly from one of your devices to another with no middleman at all.</div></div>

      <h2>Verdict</h2>
      <p>Obsidian is the best choice for anyone who wants a capable note-taking app without their notes being stored in someone else's cloud. Free for personal use, powerful, and your notes are genuinely yours.</p>
    `
  },

  /* ── SEARCH ENGINES ───────────────────────────────────────── */
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    tagline: 'The search engine that doesn\'t track you',
    category: 'Search Engines',
    rating: 4,
    trustScore: 79,
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
    pricing: 'Free',
    openSource: false,
    auditedBy: 'Privacy policy reviewed by EFF and others',
    relatedArticles: ['anonymous-browsing', 'user-accounts-and-privacy'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> DuckDuckGo does not set persistent user identifiers or tracking cookies. Each search session is stateless — searches are not linked to each other or to any user account. Query parameters are not forwarded to result-page destinations via the referrer header. <br><strong>Plain:</strong> Every time you search on DuckDuckGo, it treats you like a stranger it's never met. It doesn't remember your last search. It doesn't know who you are. There's no record of what you've looked for over time.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Aegis generates TOTP (Time-based One-Time Password) codes as defined in RFC 6238. Each code is derived from a shared secret and the current timestamp, producing a value that changes every 30 seconds and is valid only once. HOTP (counter-based) is also supported. All secrets are stored in an AES-256-GCM encrypted vault on-device. <br><strong>Plain:</strong> Aegis generates a fresh six-digit code every 30 seconds for each of your accounts. The code is calculated from a secret key and the time — so even if someone saw a code, it would be useless 30 seconds later. All your secret keys are stored in an encrypted vault on your phone.</div></div>

      <p>Aegis is an app that generates these codes. It's a safer, more private alternative to Google Authenticator (which syncs your codes to your Google account) or SMS codes (which can be intercepted via SIM swapping).</p>

      <h2>Why Aegis Over Google Authenticator?</h2>
      <p>Google Authenticator recently added a cloud sync feature — your 2FA codes are uploaded to your Google account. This means if your Google account is compromised, your two-factor codes could be too. Aegis stores everything locally on your phone, encrypted, with no cloud involvement. You export backups yourself to wherever you want to store them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> SMS-based 2FA is vulnerable to SIM-swapping attacks, where an attacker social-engineers your mobile carrier into transferring your number to a SIM they control, intercepting all SMS messages including one-time codes. TOTP apps like Aegis are not vulnerable to this because codes are generated locally from a secret, not delivered over the phone network. <br><strong>Plain:</strong> If someone tricks your phone company into giving them your number, they can receive your text message codes. That's called SIM swapping. Aegis codes aren't sent over the phone network at all — they're generated on your device — so a SIM swapper gets nothing.</div></div>

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
    name: 'ExifCleaner',
    tagline: 'Drag and drop to strip hidden location data from photos',
    category: 'Privacy Tools',
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> EXIF (Exchangeable Image File Format) metadata is embedded in JPEG and other image files by the camera or phone at the moment of capture. It can include GPS coordinates (latitude, longitude, altitude), timestamp, camera make and model, lens details, and exposure settings. This data is preserved when photos are shared unless explicitly stripped. <br><strong>Plain:</strong> Your phone hides a bunch of information inside every photo it takes. This includes the exact GPS location where you took it (accurate to a few metres), the date and time, and what kind of phone you have. When you share the photo, all of that hidden data goes with it — unless you remove it first.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> FreeTube can use either the Invidious API (a privacy-respecting YouTube front-end proxy) or YouTube's internal API directly. In both modes, no authentication cookies or persistent identifiers are sent. Subscriptions, history, and preferences are stored in a local SQLite database — never on Google's servers. <br><strong>Plain:</strong> FreeTube fetches video files from YouTube without telling Google who you are. Your watch history and subscriptions are saved on your own computer, not on Google's servers. Google receives a request for the video, but it's not tied to you.</div></div>

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
    name: 'GrapheneOS',
    tagline: 'Android without Google — maximum mobile privacy',
    category: 'Operating Systems',
    rating: 5,
    trustScore: 99,
    platforms: ['Google Pixel phones'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Security researchers worldwide; used by high-risk individuals',
    relatedArticles: ['smartphone-hardening', 'android-privacy-settings'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> GrapheneOS is an Android Open Source Project (AOSP) fork with significant security hardening: it uses a hardened memory allocator (hardened_malloc), stronger verified boot enforcement, per-app network and sensor permissions, hardened WebView, and eliminates all Google Mobile Services from the base OS. It supports running sandboxed Google Play in an unprivileged compatibility layer. <br><strong>Plain:</strong> GrapheneOS takes Android — the open version without Google's additions — and makes it much more secure. Google's apps and data-collection software are gone. You get a working smartphone that doesn't report to Google by default. If you need Google apps, they run in a restricted box with very limited access to the rest of your phone.</div></div>

      <h2>Hardware Requirements</h2>
      <p>GrapheneOS officially supports only <strong>Google Pixel phones</strong> (currently Pixel 5a and newer). While it may seem ironic to buy a Google phone to de-Google your life, Pixel phones contain a custom security chip (Titan M2) and allow users to lock the bootloader with custom encryption keys. Most other Android manufacturers do not allow this level of hardware security while running a custom operating system.</p>

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
  }
];

export default REVIEWS;
