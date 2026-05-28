export default {
    id: 'bitwarden',
    website: 'https://bitwarden.com',
    index: 1,
    name: 'Bitwarden',
    tagline: 'The best free, open-source password manager',
    category: 'Password Managers',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 99
    },
    externalScores: {
      appStore: 4.7,
    },
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
  };
