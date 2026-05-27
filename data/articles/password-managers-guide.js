export default {
    id: 'password-managers-guide',
    index: 8,
    title: 'The Complete Guide to Password Managers',
    category: 'Passwords',
    date: '2025-05-02',
    readTime: '16 min read',
    excerpt: 'Reusing passwords is the single biggest security mistake most people make. Password managers solve this completely — and they\'re far simpler to use than most people expect.',
    tags: ['passwords', 'security', 'tools'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['bitwarden', 'keepassxc', 'aegis-authenticator', '2fas', '1password', 'proton-pass', 'age', 'picocrypt'],
    content: `
      <h2>The Problem With How Most People Handle Passwords</h2>
      <p>Here's the situation most people are in: they have one password they use everywhere, maybe with a number changed here or there. Or they have three or four passwords they rotate between. It feels manageable. It feels fine. It is, unfortunately, a serious security problem — and understanding why requires knowing how criminals actually break into accounts.</p>
      <p>Every year, thousands of websites get hacked and their user databases — which contain usernames and passwords — get stolen and sold online. This has already happened to LinkedIn, Adobe, Yahoo, Dropbox, and hundreds of other services you've probably used. Websites you've never heard of, too. Researchers estimate that over 10 billion username/password combinations are now available to criminals for free.</p>
      <p>What attackers do next is simple and devastatingly effective. They take your email address and password from the leaked database, and they automatically try it on Gmail, PayPal, Amazon, your bank, Facebook, and dozens of other services. This is called <strong>credential stuffing</strong>.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>When a website gets hacked, criminals get your email and password. They then automatically try that same combination on hundreds of other sites — your bank, your email, your shopping accounts — all at once, using bots, without any human effort. This automated attack exploits the common practice of password reuse. If you reuse passwords, one breach opens all your accounts.</div></div>

      <p>If you reuse your password, one breach at an obscure website means every account you have is at risk. Your email. Your bank. Your cloud storage. Everything.</p>

      <h2>What Makes a Password Strong?</h2>
      <p>Before we talk about password managers, it helps to understand what you're aiming for. A strong password has two properties:</p>
      <ul>
        <li><strong>Length.</strong> Every extra character makes a password exponentially harder to crack. A 20-character password is not twice as strong as a 10-character one — it's billions of times stronger.</li>
        <li><strong>Randomness.</strong> Passwords that contain real words, names, dates, or patterns from your life can be guessed. <code>Fido2007!</code> looks complex but is trivial to crack if someone knows you have a dog. True randomness — characters with no pattern at all — is what you need.</li>
      </ul>
      <p>A truly strong password looks like this: <code>mK#9vL@2pQnR7zXw</code>. It's 16 characters, completely random, and would take billions of years to crack by brute force. It is also, obviously, completely impossible to remember. And this is exactly why password managers exist.</p>

      <h2>What a Password Manager Actually Does</h2>
      <p>Think of a password manager as a locked safe that lives on your phone and computer. Inside the safe, you keep a unique, random, unguessable password for every single account you have. The safe itself is locked with one master password — the only password you'll ever need to remember. When you want to log in to a website, the password manager opens the safe, finds the right password, and fills it in for you automatically.</p>
      <p>This means:</p>
      <ul>
        <li>Every single one of your accounts has a completely different, random password</li>
        <li>You don't need to remember any of them</li>
        <li>When (not if) a website you use gets hacked, only that one account is compromised — all your other accounts are safe</li>
        <li>You can create accounts with extremely strong passwords without any extra effort</li>
      </ul>

      <h2>How Does It Stay Secure?</h2>
      <p>You might be wondering: if all my passwords are in one place, isn't that a single point of failure? It's a fair question. The answer is that good password managers use a technique called <strong>zero-knowledge encryption</strong>.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your passwords get scrambled on your own device before being sent anywhere. The company stores only the scrambled version — they have no key to unscramble it. Technically, this is called zero-knowledge encryption: your vault data is encrypted on your device using a key derived from your master password before it ever leaves your device, so the server only ever holds ciphertext it cannot decrypt. Even if hackers broke into their servers, all they'd find is useless noise. Only your master password — which stays in your head — can unlock it.</div></div>

      <p>Here's how it works: when you create your master password, your password manager uses it to mathematically scramble (encrypt) all your stored passwords on your own device, before they're ever sent anywhere. The scrambled data is what gets stored or synced to the cloud. The company running the password manager only ever sees scrambled data that they cannot unscramble — because they don't have your master password. Even if their servers were hacked, or even if a government demanded your passwords, there's nothing to hand over. Only your master password — which exists only in your head — can unlock the data.</p>

      <h2>Our Recommendation: Bitwarden</h2>
      <p>There are several good password managers, but we recommend <strong>Bitwarden</strong> for most people. Here's why:</p>
      <ul>
        <li>It is completely <strong>free</strong> for individual use — the free tier has no meaningful limitations</li>
        <li>It is <strong>open source</strong>, meaning security researchers can read the entire codebase and verify that it does what it claims. This is not common — most password managers are "trust us" black boxes.</li>
        <li>It has been independently <strong>audited</strong> by external security firms who confirmed it is secure</li>
        <li>It works on every device — Windows, Mac, Linux, iPhone, Android, and every major browser</li>
      </ul>

      <h2>Alternative Password Managers</h2>
      <p>If Bitwarden doesn't suit your needs, there are other strong options:</p>
      <ul>
        <li><strong>1Password:</strong> A paid, highly polished commercial option. While not fully open-source, it has an excellent security track record, frequent audits, and a very user-friendly interface.</li>
        <li><strong>Proton Pass:</strong> A newer open-source password manager from the team behind Proton Mail. It integrates well with their encrypted email ecosystem and includes built-in email alias generation to hide your real email address when signing up for services.</li>
        <li><strong>KeePassXC:</strong> A fully offline password manager for advanced users. Your vault is stored as an encrypted file on your own computer, never touching a cloud server unless you manually sync it yourself.</li>
      </ul>

      <h2>Beyond Passwords: File Encryption</h2>
      <p>Password managers protect your credentials, but what about sensitive files on your computer? For securing individual files before sharing them or backing them up, avoid overly complex legacy tools. Modern, open-source tools like <strong>age</strong> or <strong>Picocrypt</strong> offer simple, robust drag-and-drop file encryption that anyone can use safely.</p>

      <h2>Setting Up Bitwarden: Step by Step</h2>
      <p>This will take about 15 minutes and is one of the highest-impact things you can do for your security.</p>
      <ol>
        <li><strong>Create your account.</strong> Go to <strong>bitwarden.com</strong> and click "Get Started". Enter your email address. Now you need to create your master password. This is the most important step in the entire process — read the next section on choosing a master password before you do this.</li>
        <li><strong>Verify your email.</strong> Bitwarden will send a verification email. Open it and click the link to confirm your account.</li>
        <li><strong>Install the browser extension.</strong> Go back to bitwarden.com and click "Download". Choose your browser (Chrome, Firefox, Edge, Safari, or Brave) and click the link to install the extension. When your browser asks for permission, click "Add extension".</li>
        <li><strong>Log in to the extension.</strong> Click the Bitwarden icon in your browser toolbar (it looks like a shield). Enter your email and master password. You are now logged in.</li>
        <li><strong>Add your first password.</strong> Navigate to a website you normally log in to — say, your email provider. Log in as usual. Bitwarden will pop up and ask "Do you want to save the login for this site?" Click <strong>Save</strong>. Bitwarden has now saved that username and password.</li>
        <li><strong>Try auto-fill.</strong> Log out of that website and try logging in again. Click on the username or password field. Bitwarden will either fill it in automatically, or show a small icon in the field — click it to fill in your details. This is how it works every day going forward.</li>
      </ol>

      <h2>Choosing Your Master Password</h2>
      <p>Your master password is the only thing standing between an attacker and all your other passwords. It needs to be strong — but it also needs to be something you can reliably remember, because there is no recovery option if you forget it.</p>
      <p>The best approach is a <strong>passphrase</strong>: four to six random, unrelated words joined together. For example: <code>correct horse battery staple</code>. This kind of phrase is long (which makes it mathematically strong) but it's also something a human can actually remember. The words must be genuinely random — not a sentence or a phrase from a song or film. Think of picking random words out of a dictionary.</p>
      <p>Some rules for your master password:</p>
      <ul>
        <li>Never use it for anything else, ever</li>
        <li>Never type it into any device that isn't yours</li>
        <li>Write it down on paper and store that paper somewhere physically secure — not in your email or a notes app</li>
        <li>Never store it inside Bitwarden itself</li>
      </ul>

      <h2>Enabling Two-Factor Authentication</h2>
      <p>Two-factor authentication (2FA) means that even if someone knows your master password, they still can't open your vault without a second form of verification — usually a six-digit code that changes every 30 seconds and is generated by an app on your phone.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Even if someone steals your master password, they still can't get into your vault without your phone. Technically, this is called two-factor authentication (2FA): a second authentication factor — typically a time-based one-time password (TOTP) generated by an app like Aegis — that must be provided in addition to the password. The app generates a new 6-digit code every 30 seconds — and only your phone can generate the right one.</div></div>

      <ol>
        <li>Log in to your Bitwarden vault at <strong>vault.bitwarden.com</strong>.</li>
        <li>Click on your account name at the top right, then click <strong>Account Settings</strong>.</li>
        <li>Click the <strong>Security</strong> tab, then <strong>Two-step Login</strong>.</li>
        <li>Click <strong>Manage</strong> next to "Authenticator App".</li>
        <li>Download an authenticator app on your phone — we recommend <strong>Aegis Authenticator</strong> (Android, free and open source) or <strong>2FAS</strong> (iPhone, free and open source).</li>
        <li>Open the authenticator app, tap the "+" button to add a new account, and scan the QR code shown on the Bitwarden website.</li>
        <li>Enter the six-digit code shown in the app to confirm it's working, then click <strong>Enable</strong>.</li>
      </ol>
      <p>From now on, logging in to Bitwarden will require both your master password and the current code from your authenticator app. Even if your master password was somehow stolen, an attacker cannot get in without your phone.</p>

      <h2>Installing Bitwarden on Your Phone</h2>
      <ol>
        <li>Search for "Bitwarden" in the App Store (iPhone) or Google Play Store (Android).</li>
        <li>Download and install the official Bitwarden app (published by Bitwarden Inc.).</li>
        <li>Open the app and log in with your email and master password.</li>
        <li>Enable biometric unlock: go to <strong>Settings</strong> within the app and turn on "Unlock with Fingerprint" or "Unlock with Face ID". This means you unlock the app with your fingerprint or face each time, without typing the full master password every time — but the master password still protects the vault.</li>
        <li>To use Bitwarden when logging in to apps on your phone: go to your phone's main <strong>Settings</strong>, then <strong>Passwords</strong> (iPhone) or <strong>Autofill</strong> (Android), and select Bitwarden as your autofill service. From now on, whenever you tap a username or password field in any app, Bitwarden will offer to fill it in.</li>
      </ol>

      <h2>Gradually Replacing Your Old Passwords</h2>
      <p>You don't need to change all your passwords in one sitting. The practical approach is this: every time you log in to a website, let Bitwarden generate a new, random password for that account. Over a few weeks, your most-used accounts will all have unique, strong passwords. Prioritise your most important accounts first: email, bank, social media, cloud storage.</p>
      <p>To generate a new password for a site: log in to the site, go to its "Change Password" page, click on the new password field, and look for the Bitwarden icon or right-click and choose "Generate Password." Bitwarden will create something like <code>Xp#7mKr!9vLq@2nW</code> and save it automatically. You never need to see or remember it.</p>

      <h2>What If Bitwarden's Servers Get Hacked?</h2>
      <p>This is the sensible question to ask, and the answer is reassuring. Because of zero-knowledge encryption, Bitwarden's servers only ever store your vault in encrypted form. An attacker who broke into Bitwarden's servers would get a scrambled blob they cannot read without your master password — which Bitwarden has never seen and does not store. Your passwords would remain safe.</p>
      <p>For those who want absolute certainty, Bitwarden supports self-hosting — you can run the entire vault on your own server or computer, so your data never touches Bitwarden's infrastructure at all. This is an advanced option, but it exists.</p>
    `
  };
