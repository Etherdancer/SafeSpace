/* ============================================================
   SafeSpace — data/guides.js
   Full articles, written for non-technical readers
   ============================================================ */

const ARTICLES = [
  {
    id: 'browser-fingerprinting',
    title: 'Why Your Browser Is Leaking Your Identity',
    category: 'Browsers',
    date: '2025-05-10',
    readTime: '14 min read',
    excerpt: 'Even without cookies, websites can identify you with startling precision through a technique called browser fingerprinting. Here\'s how it works — and exactly how to stop it.',
    tags: ['fingerprinting', 'tracking', 'browser'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['brave', 'firefox', 'tor-browser', 'ublock-origin', 'nextdns'],
    content: `
      <h2>The Invisible Name Tag You Don't Know You're Wearing</h2>
      <p>Imagine walking into a shop where the staff can't see your face or know your name — but they can tell it's you because of the exact combination of your height, your accent, the brand of your shoes, the watch on your wrist, and the way you hold your bag. Nobody else in the world has that exact combination. So every time you walk in, they know it's you.</p>
      <p>That's browser fingerprinting. Every time you visit a website, your browser quietly shares dozens of tiny technical details about your device and setup. Individually, each detail is unremarkable. Together, they form a pattern so unique that you can be identified and tracked across the internet — with no cookies, no login, and no warning.</p>
      <p>This isn't a hypothetical threat. It's happening right now, on millions of websites, to virtually everyone reading this.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Browser fingerprinting works by collecting a combination of browser attributes — User-Agent string, screen resolution, timezone, installed fonts, Canvas API rendering output, WebGL renderer info, AudioContext fingerprint, and hardware concurrency — and hashing them into a near-unique identifier that persists across sessions without any client-side storage. <br><strong>Plain:</strong> Websites run a tiny invisible test on your device when you load a page. Your browser tells them things like your screen size, your fonts, and how your graphics chip draws shapes. Put all that together and it's as unique as a fingerprint — no cookie needed.</div></div>

      <h2>What Exactly Gets Collected?</h2>
      <p>When you load a webpage, a fingerprinting script can silently gather all of the following in under a second:</p>
      <ul>
        <li><strong>Your browser and version</strong> — "Firefox 124 on Windows 11"</li>
        <li><strong>Your operating system</strong> — Windows, macOS, Linux, Android, iOS</li>
        <li><strong>Your screen size and colour depth</strong> — how many pixels wide your screen is, and how many colours it can display</li>
        <li><strong>Your time zone and language</strong> — useful for pinpointing your region</li>
        <li><strong>Your installed fonts</strong> — the specific set of fonts on your computer is surprisingly unique</li>
        <li><strong>Canvas fingerprint</strong> — the script draws invisible shapes and text, and your graphics card renders them in a subtly unique way. That rendering is a fingerprint of your GPU. (Think of it like your GPU drawing a tiny invisible picture — the exact way it draws it is unique to your hardware.)</li>
        <li><strong>WebGL fingerprint</strong> — similar to canvas, but probing your graphics driver more deeply. (WebGL is technology that lets websites use your graphics card — the exact way yours renders things is unique.)</li>
        <li><strong>Audio fingerprint</strong> — your sound hardware processes audio slightly differently from everyone else's. (Your sound hardware processes audio in a subtly unique way, like an audio signature.)</li>
        <li><strong>Your battery level</strong> (on some browsers and operating systems)</li>
        <li><strong>Whether you have ad-blocking software</strong> — this itself narrows down who you are</li>
        <li><strong>How many CPU cores you have</strong></li>
        <li><strong>Your network connection type</strong> — WiFi vs mobile vs wired</li>
      </ul>
      <p>A 2016 study by researchers at Princeton University found that just the canvas fingerprint alone could identify users with over 90% accuracy. Combine that with everything else in the list above, and you have a near-perfect identifier.</p>

      <h2>Why Incognito Mode Doesn't Save You</h2>
      <p>This is one of the biggest misconceptions in online privacy. Incognito mode (also called "Private Browsing" in Firefox and Safari) does exactly one thing: it stops your browser from saving your history, cookies, and form data <em>locally on your device</em>. It doesn't change anything about how your browser appears to websites.</p>
      <p>Your screen resolution is the same in incognito mode. Your installed fonts are the same. Your graphics card renders canvas drawings identically. Your fingerprint is completely unchanged. A website that fingerprints you in regular mode will recognise you in incognito mode without any difficulty at all.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Incognito mode suppresses local storage of cookies, history, and form data, but does not alter the browser's User-Agent string, rendering engine properties, or hardware attributes — the exact signals used for fingerprinting. <br><strong>Plain:</strong> Going incognito is like wearing a disguise that only hides things from the person sitting next to you — not from the website you're visiting. Your browser still looks exactly the same to any site that's fingerprinting you.</div></div>

      <p>Private mode is useful for things like using someone else's computer without leaving your history behind, or stopping your partner from seeing what birthday present you Googled. It is not a privacy tool in any meaningful sense.</p>

      <h2>Test Your Own Fingerprint Right Now</h2>
      <p>You can see how unique your browser fingerprint is by visiting the Electronic Frontier Foundation's free tool: <strong>coveryourtracks.eff.org</strong>. Click "Test Your Browser" and it will show you a report of your fingerprint and whether you are protected, partially protected, or fully trackable. Most people are shocked by the result.</p>
      <p>If the tool says your fingerprint is "unique among the browsers it has seen," that means any website using fingerprinting can identify you with complete certainty — no cookies needed.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Websites can build a stable cross-session identifier by collecting browser attributes without setting any cookies or using any client-side storage. Clearing cookies or switching to incognito does not affect these attributes. <br><strong>Plain:</strong> Websites can tell it's you by reading dozens of tiny technical details about your device — like a doctor identifying a patient from an X-ray rather than a name tag. Clearing your cookies or going incognito does nothing about this because none of those details change.</div></div>

      <h2>How to Protect Yourself</h2>
      <p>The key insight is this: you can't make your fingerprint disappear. But you <em>can</em> make it look identical to thousands of other people. The goal is to blend in, not to hide. Here are the three best approaches, from easiest to most thorough.</p>

      <h2>Option 1: Switch to Brave Browser (Easiest)</h2>
      <p>Brave is a free browser that looks and works very much like Chrome — it even supports the same extensions — but it has fingerprint protection built in by default. Instead of reporting your real canvas rendering, fonts, and audio data, Brave introduces tiny, random variations each time a website checks. The result looks plausible, but it's different from session to session, making consistent tracking impossible.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Brave applies randomised noise to Canvas, WebGL, and AudioContext fingerprinting APIs on a per-session, per-origin basis. Each site receives a slightly different but plausible set of values, breaking stable cross-site fingerprint correlation. <br><strong>Plain:</strong> Every time a website tries to read your device's "fingerprint," Brave feeds it slightly different fake readings. The site can't build a consistent ID for you because the readings change each time.</div></div>

      <p>Here's how to get started with Brave:</p>
      <ol>
        <li>Go to <strong>brave.com</strong> and click "Download Brave". The download will start automatically for your operating system.</li>
        <li>Run the installer. On Windows, open the downloaded <code>.exe</code> file and click through the installation prompts. On Mac, open the <code>.dmg</code> file and drag Brave to your Applications folder.</li>
        <li>When Brave opens, it will offer to import your bookmarks and passwords from Chrome or Edge. You can do this to make the switch easier.</li>
        <li>Go to <strong>Settings</strong> (the three horizontal lines icon, top right) then <strong>Privacy and security</strong>. Make sure "Block fingerprinting" is set to <strong>Standard</strong> or <strong>Strict</strong>.</li>
        <li>While you're there, check that "Block ads and trackers" is also set to <strong>Standard</strong>.</li>
        <li>Under <strong>Search engine</strong>, consider switching the default from Brave Search to <strong>DuckDuckGo</strong> for extra privacy, though Brave Search itself doesn't track you either.</li>
      </ol>
      <p>That's it. Brave is now blocking fingerprinting, ads, and trackers automatically on every website you visit.</p>

      <h2>Option 2: Harden Firefox (More Control)</h2>
      <p>Firefox is made by Mozilla, a non-profit organisation that is genuinely committed to privacy. Out of the box it's not as strong as Brave, but with a few changes to its settings it becomes excellent. This option gives you more transparency and control over exactly what's being blocked.</p>
      <ol>
        <li>Download Firefox from <strong>mozilla.org</strong> and install it in the same way as any other programme.</li>
        <li>Open Firefox and type <code>about:config</code> into the address bar. Press Enter. Firefox will show a warning message — click <strong>"Accept the Risk and Continue"</strong>. (Don't worry, you won't break anything by following these exact steps.)</li>
        <li>In the search box that appears, type <code>privacy.resistFingerprinting</code> and double-click the result to set it to <strong>true</strong>. This is Firefox's built-in fingerprinting protection. It makes your browser report standardised, generic values for canvas, fonts, and other fingerprinting vectors.</li>
        <li>Search for <code>privacy.fingerprintingProtection</code> and also set it to <strong>true</strong>.</li>
        <li>Search for <code>geo.enabled</code> and set it to <strong>false</strong>. This stops Firefox from sharing your location data.</li>
        <li>Close the <code>about:config</code> tab.</li>
        <li>Now go to the Firefox menu (three lines, top right) and click <strong>Settings</strong>. Under <strong>Privacy &amp; Security</strong>, set "Enhanced Tracking Protection" to <strong>Strict</strong>.</li>
        <li>Scroll down to "DNS over HTTPS" and enable it, choosing <strong>Mullvad</strong> or <strong>NextDNS</strong> as the provider. (More on what this means in the anonymous browsing guide.)</li>
      </ol>

      <h2>Option 3: Install uBlock Origin (Works With Any Browser)</h2>
      <p>uBlock Origin is a free browser extension that blocks fingerprinting scripts before they even load. It won't standardise your fingerprint like Brave or Firefox do, but it prevents many tracking scripts from running at all. Think of it as a bouncer at the door who stops known troublemakers from entering.</p>
      <ol>
        <li>If you use Firefox, go to <strong>addons.mozilla.org</strong> and search for "uBlock Origin". Click <strong>Add to Firefox</strong>.</li>
        <li>If you use Chrome or Edge, go to the <strong>Chrome Web Store</strong> and search for "uBlock Origin". Click <strong>Add to Chrome</strong>. <em>Important: install "uBlock Origin," not "uBlock" — they are different products made by different people. Only uBlock Origin is the one we recommend.</em></li>
        <li>Once installed, uBlock Origin works automatically. You don't need to configure anything.</li>
        <li>For stronger protection, click the uBlock Origin icon (a red shield), then click the settings gear icon. Go to <strong>Filter lists</strong> and check the box for <strong>"uBlock filters — Privacy"</strong> and <strong>"EasyPrivacy"</strong>. Click "Apply changes."</li>
      </ol>
      <p><strong>Note for Chrome users:</strong> Google is making changes to Chrome (called "Manifest V3") that will permanently weaken how content blockers work in Chrome. uBlock Origin's full functionality will remain available in Firefox indefinitely. This is one more reason to consider switching to Firefox or Brave.</p>

      <h2>The Honest Bottom Line</h2>
      <p>If you do nothing else after reading this article, install Brave or install uBlock Origin on your current browser. Either action immediately makes you significantly harder to track. If you want the strongest protection available without slowing down your browsing, use Brave or Firefox with the settings above and uBlock Origin installed. If you need the absolute maximum privacy for genuinely sensitive browsing, use the Tor Browser — which we cover in our anonymous browsing guide.</p>
      <p>The surveillance industry spends enormous resources developing fingerprinting precisely because cookie-blocking has become common. The good news is that the tools to fight back are free, easy to install, and just as effective.</p>
    `
  },
  {
    id: 'password-managers-guide',
    title: 'The Complete Guide to Password Managers',
    category: 'Passwords',
    date: '2025-05-02',
    readTime: '16 min read',
    excerpt: 'Reusing passwords is the single biggest security mistake most people make. Password managers solve this completely — and they\'re far simpler to use than most people expect.',
    tags: ['passwords', 'security', 'tools'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['bitwarden', 'keepassxc', 'aegis-authenticator', '2fas'],
    content: `
      <h2>The Problem With How Most People Handle Passwords</h2>
      <p>Here's the situation most people are in: they have one password they use everywhere, maybe with a number changed here or there. Or they have three or four passwords they rotate between. It feels manageable. It feels fine. It is, unfortunately, a serious security problem — and understanding why requires knowing how criminals actually break into accounts.</p>
      <p>Every year, thousands of websites get hacked and their user databases — which contain usernames and passwords — get stolen and sold online. This has already happened to LinkedIn, Adobe, Yahoo, Dropbox, and hundreds of other services you've probably used. Websites you've never heard of, too. Researchers estimate that over 10 billion username/password combinations are now available to criminals for free.</p>
      <p>What attackers do next is simple and devastatingly effective. They take your email address and password from the leaked database, and they automatically try it on Gmail, PayPal, Amazon, your bank, Facebook, and dozens of other services. This is called <strong>credential stuffing</strong>.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Credential stuffing is an automated attack where large sets of stolen username/password pairs from data breaches are systematically tested against other online services using bots, exploiting the common practice of password reuse. <br><strong>Plain:</strong> When a website gets hacked, criminals get your email and password. They then automatically try that same combination on hundreds of other sites — your bank, your email, your shopping accounts — all at once, without any human effort. If you reuse passwords, one breach opens all your accounts.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Zero-knowledge encryption means your vault data is encrypted on your device using a key derived from your master password before it ever leaves your device. The server only stores ciphertext it cannot decrypt because it never receives the key. Even a full server compromise exposes nothing readable. <br><strong>Plain:</strong> Your passwords get scrambled on your own device before being sent anywhere. The company stores only the scrambled version — they have no key to unscramble it. Even if hackers broke into their servers, all they'd find is useless noise. Only your master password — which stays in your head — can unlock it.</div></div>

      <p>Here's how it works: when you create your master password, your password manager uses it to mathematically scramble (encrypt) all your stored passwords on your own device, before they're ever sent anywhere. The scrambled data is what gets stored or synced to the cloud. The company running the password manager only ever sees scrambled data that they cannot unscramble — because they don't have your master password. Even if their servers were hacked, or even if a government demanded your passwords, there's nothing to hand over. Only your master password — which exists only in your head — can unlock the data.</p>

      <h2>Our Recommendation: Bitwarden</h2>
      <p>There are several good password managers, but we recommend <strong>Bitwarden</strong> for most people. Here's why:</p>
      <ul>
        <li>It is completely <strong>free</strong> for individual use — the free tier has no meaningful limitations</li>
        <li>It is <strong>open source</strong>, meaning security researchers can read the entire codebase and verify that it does what it claims. This is not common — most password managers are "trust us" black boxes.</li>
        <li>It has been independently <strong>audited</strong> by external security firms who confirmed it is secure</li>
        <li>It works on every device — Windows, Mac, Linux, iPhone, Android, and every major browser</li>
        <li>Your vault syncs across all your devices automatically</li>
      </ul>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Two-factor authentication (2FA) adds a second authentication factor — typically a time-based one-time password (TOTP) generated by an app like Aegis — that must be provided in addition to the password. Even a stolen password alone is not enough to log in. <br><strong>Plain:</strong> Even if someone steals your master password, they still can't get into your vault without your phone. The app generates a new 6-digit code every 30 seconds — and only your phone can generate the right one.</div></div>

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
  },
  {
    id: 'vpn-explainer',
    title: 'VPNs: What They Protect (And What They Don\'t)',
    category: 'Networks',
    date: '2025-04-25',
    readTime: '13 min read',
    excerpt: 'VPNs are sold as a complete privacy solution. They\'re not — but they do solve specific, real problems. This honest guide tells you exactly when a VPN helps and when it doesn\'t.',
    tags: ['vpn', 'network', 'privacy'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['mullvad'],
    content: `
      <h2>What a VPN Actually Is</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a remote server. All your internet traffic is routed through this tunnel. The destination sees the VPN server's IP address, not yours. Your ISP sees only an encrypted stream to the VPN server, not the sites you visit. <br><strong>Plain:</strong> A VPN is like a sealed, addressed envelope that you hand to your internet provider. They can see you sent an envelope, but they can't read what's inside or where it's really going. Websites see the VPN company's address, not your home address.</div></div>

      <p>VPN stands for Virtual Private Network (a private, encrypted connection through the internet). The name is technical, but the idea is simple: a VPN creates an encrypted tunnel between your device and a server run by the VPN company. All your internet traffic travels through that tunnel. Websites and online services see the VPN server's address, not your home address. Your internet provider sees only encrypted data travelling to the VPN server — they can't see what sites you visit or what you do online.</p>
      <p>Think of it like this: normally, when you visit a website, your internet provider (BT, Sky, Vodafone, Comcast — whoever you pay for internet) can see every website you visit and log it. It's like sending all your post through a post room that opens and reads your letters. A VPN is like sealing your letters in an opaque envelope before they reach the post room. The post room still passes the envelope along, but they can't see what's inside or where it's ultimately going.</p>

      <h2>What a VPN Actually Protects You From</h2>
      <p>A VPN provides genuine protection in these specific situations:</p>
      <ul>
        <li><strong>Your internet provider snooping on your browsing.</strong> Without a VPN, your ISP (your ISP is the company you pay for internet — BT, Sky, Comcast, etc.) can see every website you visit and could log or sell that data. With a reputable VPN, they can only see that you're connected to a VPN server — nothing else.</li>
        <li><strong>Surveillance on public WiFi.</strong> When you connect to WiFi in a cafe, hotel, airport, or library, anyone else on that network can potentially intercept your traffic. A VPN encrypts everything, making your traffic unreadable even to someone actively trying to snoop.</li>
        <li><strong>Your real IP address being exposed.</strong> Your IP address reveals your approximate location (usually your city) and is linked to your identity through your ISP. A VPN replaces your IP with the VPN server's IP.</li>
        <li><strong>Some forms of network-level tracking.</strong> Advertisers and data brokers sometimes build profiles using IP addresses. Changing your IP regularly disrupts this.</li>
        <li><strong>Accessing content blocked in your region.</strong> If a streaming service or website is unavailable in your country, a VPN server in another country can give you access.</li>
      </ul>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A VPN encrypts traffic between your device and the VPN server. Your ISP can see that you're connected to a VPN server but not the destination sites or content. The VPN server makes requests on your behalf, so destination services see the VPN's IP address. <br><strong>Plain:</strong> Without a VPN, your internet provider sees every website you visit — like a postal worker who can read all your letters. A VPN puts your traffic in a sealed envelope they can't open. But remember: you're trusting the VPN company instead. Choose carefully.</div></div>

      <h2>What a VPN Does NOT Protect You From</h2>
      <p>This is the critical part that VPN marketing almost never tells you. A VPN does not make you private or anonymous in most of the ways people assume it does.</p>
      <ul>
        <li><strong>Google, Facebook, and other platforms still know who you are.</strong> If you're logged in to your Google account, Google knows it's you regardless of what IP address you're connecting from. The same is true for Facebook, Amazon, Apple, and any other account you're signed in to. A VPN is invisible to the layer of tracking that happens through your accounts.</li>
        <li><strong>Browser fingerprinting.</strong> As we cover in our fingerprinting article, websites can identify you through dozens of technical details about your browser and device. Your fingerprint is the same whether you use a VPN or not.</li>
        <li><strong>Cookies already set in your browser.</strong> If a tracking cookie has already been set in your browser, it will continue identifying you across the web even with a VPN running.</li>
        <li><strong>Malware on your device.</strong> A VPN does nothing to protect against viruses, spyware, or other software that's already on your machine.</li>
        <li><strong>Your behaviour patterns.</strong> Even through a VPN, the timing and pattern of your internet activity can be used to identify you. This is called traffic analysis, and it's a sophisticated technique used by determined adversaries.</li>
        <li><strong>A dishonest VPN company.</strong> This is the most important point. A VPN shifts your trust from your ISP to the VPN company. If the VPN company logs your activity and shares it with third parties or governments, you're no better off than without a VPN — possibly worse, because the VPN can see all your traffic in one place.</li>
      </ul>

      <h2>The Logging Question: Why It Matters Enormously</h2>
      <p>Every time you visit a website through a VPN, the VPN server sees your real IP address, the destination website, and the time and size of the data. If the VPN company logs this information, it creates exactly the kind of record you were trying to avoid — it's just held by the VPN company instead of your ISP.</p>
      <p>Most VPN companies claim to have a "no-logs policy." The problem is that claims are easy to make. What matters is whether the no-logs policy has been independently verified. The gold standard is a VPN company that has had their servers seized by law enforcement — and had nothing to hand over, because no logs existed. This has actually happened with Mullvad VPN, which we recommend below.</p>

      <h2>Red Flags to Watch Out For</h2>
      <p>The VPN market is flooded with companies that are more interested in your subscription fee than your privacy. Be sceptical of any VPN that:</p>
      <ul>
        <li>Offers a "lifetime" subscription for a one-time payment (this business model is unsustainable and often indicates the company will close or cut corners)</li>
        <li>Is heavily promoted by YouTubers or influencers with referral codes (their income depends on getting you to sign up, not on the VPN being good)</li>
        <li>Claims to make you "100% anonymous" — no VPN can do this</li>
        <li>Has a privacy policy that allows logging of "aggregate" or "anonymised" data — this language is vague and often meaningless</li>
        <li>Is free — running a VPN server costs money. If you're not paying, you are the product. Free VPNs have been repeatedly caught selling user data to advertisers.</li>
        <li>Has its servers in countries with intrusive surveillance laws (USA, UK, Australia, Canada — the "Five Eyes" alliance)</li>
      </ul>

      <h2>Our Recommendation: Mullvad VPN</h2>
      <p>Mullvad is the VPN we recommend without hesitation. It costs a flat €5 per month — no upsells, no annual-plan tricks, no complicated tiers. Here's what makes it different:</p>
      <ul>
        <li>You don't need to provide an email address, name, or any personal information to sign up. You receive a random account number.</li>
        <li>You can pay with cash (posted to their office), cryptocurrency, or card — anonymous payment is explicitly supported.</li>
        <li>Their servers were physically seized by Swedish police in 2023. The police found nothing, because Mullvad's RAM-only servers contain no logs at all. This is proof, not just a promise.</li>
        <li>Their client software is open source and has been independently audited multiple times.</li>
        <li>They are based in Sweden and do not cooperate with mass surveillance programmes.</li>
      </ul>

      <h2>Setting Up Mullvad VPN: Step by Step</h2>
      <ol>
        <li><strong>Get an account.</strong> Go to <strong>mullvad.net</strong> and click "Generate Account Number". A random 16-digit number is created for you. This is your account — no email, no name, no profile. Write this number down somewhere safe.</li>
        <li><strong>Add credit.</strong> Click "Add time" next to your account number. Choose your payment method. The price is €5 per month. If you want to pay anonymously, click "Cash" or "Cryptocurrency" for instructions. If you're comfortable paying by card, that's also fine.</li>
        <li><strong>Download the app.</strong> Click "Download app" on the Mullvad website. Choose your operating system — Windows, Mac, Linux, iPhone, or Android. Download the installer.</li>
        <li><strong>Install and open the app.</strong> Run the installer as you normally would for any programme. Open the Mullvad app once installed.</li>
        <li><strong>Log in.</strong> The app will ask for your account number. Enter the 16-digit number you received. That's the only login you'll ever need.</li>
        <li><strong>Connect.</strong> The app shows a large "Connect" button. Click it. Mullvad will automatically connect to the fastest available server. The button changes to show you're connected. Your traffic is now encrypted and routed through Mullvad's server.</li>
        <li><strong>Choose a server location (optional).</strong> Click the location shown (e.g. "Sweden") to see a list of all available countries and cities. Click any location to connect there instead. You'd do this if you want to appear to be in a specific country.</li>
        <li><strong>Enable the kill switch.</strong> Go to <strong>Settings</strong> within the app, then <strong>VPN settings</strong>. Enable <strong>"Block internet when disconnected"</strong>. This is called a kill switch — if the VPN connection drops unexpectedly, your internet is cut off completely rather than exposing your real IP address. This is an important safety setting.</li>
      </ol>

      <h2>On a Phone</h2>
      <ol>
        <li>Search for "Mullvad VPN" in the App Store or Google Play Store.</li>
        <li>Install the official app.</li>
        <li>Open it and enter your 16-digit account number.</li>
        <li>Tap <strong>Connect</strong>. Done.</li>
        <li>You can also go to <strong>Settings</strong> in the app and enable <strong>"Always-on VPN"</strong> — this makes your phone automatically reconnect through Mullvad every time you open an app or browser, with no manual step required.</li>
      </ol>

      <h2>When Should You Actually Use a VPN?</h2>
      <p>Be realistic about when a VPN genuinely helps:</p>
      <ul>
        <li><strong>Always on public WiFi</strong> — this is probably the clearest use case. Any time you're not on your home network, a VPN provides real protection.</li>
        <li><strong>When you don't want your ISP logging your browsing</strong> — many ISPs in the UK and USA are legally permitted to log and sell your browsing data. A VPN prevents this.</li>
        <li><strong>When accessing content not available in your region</strong> — legitimate and practical.</li>
      </ul>
      <p>A VPN is one useful layer of protection among many. It should be combined with a good browser, a content blocker, and sensible account hygiene — not relied upon as a complete solution.</p>
    `
  },
  {
    id: 'smartphone-hardening',
    title: 'Hardening Your Smartphone in 10 Steps',
    category: 'Mobile',
    date: '2025-04-15',
    readTime: '18 min read',
    excerpt: 'Your phone knows where you\'ve been, who you talk to, what you buy, and what you search for. These 10 practical steps — with exact instructions for iPhone and Android — dramatically reduce what gets collected.',
    tags: ['mobile', 'android', 'ios', 'hardening'],
    platforms: ['iOS', 'Android'],
    relatedReviews: ['signal', 'bitwarden', 'grapheneos', 'mullvad', 'osmand', 'invidious', 'standard-notes', 'joplin'],
    content: `
      <h2>Your Phone Knows More About You Than You Think</h2>
      <p>Your smartphone has a GPS that tracks everywhere you go. It has a microphone that's always available. It has a camera, an accelerometer, a gyroscope, a Bluetooth radio, and a WiFi radio — all of which can reveal information about your location and habits even when you think they're off. It runs dozens of apps, many of which are recording your behaviour and sending it to servers you've never heard of.</p>
      <p>According to research from Oxford University, the average Android phone has around 35 apps installed, and each app connects to an average of 15 external services. A single news app might quietly send your location, device ID, and reading habits to a dozen advertising companies you've never interacted with.</p>
      <p>The good news: you can take back significant control without needing technical knowledge. These 10 steps require only navigating your phone's settings — no special tools needed.</p>

      <h2>Step 1: Audit Your App Permissions</h2>
      <p>Every app on your phone asks for permission to access different parts of your device — your location, camera, microphone, contacts, calendar, and so on. Many apps request permissions they don't actually need to do their job. A flashlight app has no reason to need your location. A calculator has no reason to need your contacts.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings</strong>, then scroll down to see your list of apps.</li>
        <li>Tap on any app that seems suspicious.</li>
        <li>You'll see exactly which permissions it has been granted. For Location, tap it and ask yourself: does this app genuinely need my location to work? If not, tap <strong>"Never"</strong>.</li>
        <li>For Camera and Microphone, set these to off unless the app's primary function requires them (a camera app needs camera access; a shopping app does not).</li>
        <li>Alternatively, go to <strong>Settings &gt; Privacy &amp; Security &gt; Location Services</strong> to see all apps with location access at once. Set anything not essential to <strong>"Never"</strong> or <strong>"While Using"</strong> (never "Always").</li>
      </ol>
      <p><strong>On Android:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy &gt; Permission Manager</strong>.</li>
        <li>Tap on any permission type (Location, Microphone, Camera, etc.) to see all apps that have access to it.</li>
        <li>For any app that seems like it shouldn't need a particular permission, tap the app and choose <strong>"Don't allow"</strong> or, for location, <strong>"Only while using the app"</strong>.</li>
      </ol>

      <h2>Step 2: Disable Your Advertising ID</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Every smartphone OS assigns a resettable advertising identifier (IDFA on iOS, GAID on Android) — a unique code that advertising SDKs embedded in apps use to correlate your activity across different apps and build a cross-app behavioural profile without needing cookies. <br><strong>Plain:</strong> Your phone has a secret ID number that advertisers read from inside apps. When App A and App B both send this number to an ad network, that network knows it was you in both apps — and builds a profile of your interests across everything you do. Deleting this ID breaks that link.</div></div>

      <p>Every smartphone has a unique advertising identifier — a code that advertisers use to track your behaviour across different apps. When App A and App B both send your advertising ID to an advertising network, that network can link your activity across both apps and build a detailed profile of you. Disabling or resetting this ID disrupts cross-app tracking significantly.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy &amp; Security &gt; Tracking</strong>.</li>
        <li>Turn off <strong>"Allow Apps to Request to Track"</strong>. This prevents apps from asking for your advertising ID at all.</li>
      </ol>
      <p><strong>On Android (most versions):</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy &gt; Ads</strong>.</li>
        <li>Tap <strong>"Delete advertising ID"</strong> and confirm. On some Android versions this option is called <strong>"Opt out of Ads Personalisation"</strong> — enable it.</li>
      </ol>

      <h2>Step 3: Turn Off Location History</h2>
      <p>Both Google and Apple offer features that track your movements over time and build detailed maps of where you've been. Google calls this "Timeline" (formerly Location History). Apple calls it "Significant Locations." These are turned on by default.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy &amp; Security &gt; Location Services &gt; System Services</strong>.</li>
        <li>Tap <strong>Significant Locations</strong>. You may need to authenticate with Face ID or your PIN.</li>
        <li>Turn <strong>Significant Locations</strong> off. Tap <strong>"Clear History"</strong> to delete what's already been recorded.</li>
      </ol>
      <p><strong>On Android / Google Account:</strong></p>
      <ol>
        <li>Open the <strong>Google Maps</strong> app (or go to myaccount.google.com on any browser).</li>
        <li>Tap your profile picture in the top right, then <strong>"Manage your Google Account"</strong>.</li>
        <li>Tap the <strong>Data &amp; Privacy</strong> tab.</li>
        <li>Scroll to "History settings" and tap <strong>"Location History"</strong>. Turn it off.</li>
        <li>While there, also turn off <strong>"Web &amp; App Activity"</strong> and <strong>"YouTube History"</strong>.</li>
      </ol>

      <h2>Step 4: Set a Strong PIN (And Understand the Biometrics Question)</h2>
      <p>A six-digit PIN is the bare minimum. A longer numeric PIN (8–10 digits) or an alphanumeric password is stronger. Change your PIN now if it's a common pattern like 1234, 0000, or your birth year.</p>
      <p>On fingerprint and face unlock: these are extremely convenient, but there is an important legal consideration that many people don't know about. In many countries, including the USA and UK, you can be legally compelled by law enforcement to unlock your phone with your fingerprint or face. You generally <em>cannot</em> be legally compelled to reveal a PIN or password, as this is considered protected speech or self-incrimination. Using a PIN provides stronger legal protection. You can, of course, use both — fingerprint for day-to-day convenience, but the PIN is the underlying protection.</p>
      <p><strong>On iPhone:</strong> <strong>Settings &gt; Face ID &amp; Passcode</strong> (or Touch ID &amp; Passcode). Tap "Change Passcode" and choose "Passcode Options" to switch to a Custom Alphanumeric Code.</p>
      <p><strong>On Android:</strong> <strong>Settings &gt; Security &gt; Screen lock</strong>. Choose "Password" for a full alphanumeric option.</p>

      <h2>Step 5: Enable Full-Disk Encryption</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Full-disk encryption uses AES-256 (or similar) to encrypt all data stored on the device's flash storage. Without the correct PIN or password to derive the decryption key, the stored data is unreadable — even by someone with physical access to the hardware. <br><strong>Plain:</strong> Encryption scrambles everything saved on your phone. If someone steals it or seizes it, they see nothing but nonsense unless they know your PIN. Think of it like a combination lock on every file.</div></div>

      <p>Encryption means that all the data stored on your phone is scrambled and unreadable without your PIN or password. If your phone is lost, stolen, or seized, no one can read its contents without unlocking it.</p>
      <p><strong>On iPhone:</strong> Full-disk encryption is automatically enabled whenever you set a passcode. If you have a passcode set (which you now do from Step 4), your iPhone is already encrypted.</p>
      <p><strong>On Android:</strong> Most modern Android phones (running Android 7 or later) encrypt storage by default. To verify: go to <strong>Settings &gt; Security &gt; Encryption &amp; Credentials</strong>. You should see "Phone is encrypted." If not, follow the on-screen instructions to enable it — note that this process can take an hour and your phone must be plugged in and charged to at least 80%.</p>

      <h2>Step 6: Use a Private Browser on Your Phone</h2>
      <p>The default browsers on phones — Safari on iPhone, Chrome on Android — are not designed with privacy as their priority. Chrome in particular sends browsing data to Google. Switching your mobile browser is easy and makes a real difference.</p>
      <p><strong>Install Firefox for Mobile:</strong></p>
      <ol>
        <li>Search for "Firefox" in the App Store or Google Play Store and install it.</li>
        <li>Open Firefox and tap the three-dot menu in the bottom right.</li>
        <li>Tap <strong>Add-ons</strong>.</li>
        <li>Find and install <strong>uBlock Origin</strong>. This gives you the same ad and tracker blocking on mobile that you'd get on desktop.</li>
        <li>Go to Firefox's Settings and set the search engine to <strong>DuckDuckGo</strong>.</li>
      </ol>
      <p><strong>Alternatively, install Brave on mobile:</strong> Search for "Brave Browser" in the App Store or Play Store. Brave blocks ads and trackers by default with no configuration needed.</p>

      <h2>Step 7: Switch to Signal for Messaging</h2>
      <p>Regular text messages (SMS) are not encrypted. Your mobile carrier can read every SMS you send. iMessage is encrypted only between Apple devices — messages to Android users fall back to unencrypted SMS. WhatsApp uses encryption but is owned by Meta (Facebook's parent company) and collects extensive metadata about who you talk to and when.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Signal uses the Signal Protocol — a double-ratchet algorithm providing forward secrecy and break-in recovery — for end-to-end encryption of all messages and calls. End-to-end encryption means only the sender and recipient can read the message; the service provider, Signal's servers, and any third party in between cannot decrypt the content. <br><strong>Plain:</strong> "End-to-end encrypted" means the message is scrambled on your phone and only unscrambled on the recipient's phone. Nobody in between — not Signal, not your phone company, not a hacker — can read it. It's like sealing a letter so only the recipient can open it.</div></div>

      <p>Signal is the gold standard for private messaging. Every message, call, and video call through Signal is end-to-end encrypted by default. The organisation behind Signal is a non-profit, and the app's code is open source.</p>
      <ol>
        <li>Search for "Signal" in the App Store or Google Play Store. Install the app published by <strong>Signal Messenger LLC</strong>.</li>
        <li>Open Signal and tap <strong>Continue</strong>. Enter your phone number. Signal will send a verification code by SMS — enter it to confirm your number.</li>
        <li>Create a Profile: enter a name (this is what your contacts will see in Signal) and optionally add a profile photo.</li>
        <li>Set a Signal PIN when prompted. This is separate from your phone's lock PIN and protects your Signal account if you change devices.</li>
        <li>On Android, Signal will offer to become your default SMS app. This means you can use it for both Signal messages (encrypted) and regular SMS (not encrypted) — Signal will show you which is which. This is convenient during a transition period.</li>
        <li>Start messaging: tap the pencil icon to start a new conversation. Signal will show which of your contacts already use Signal (encrypted). Invite friends who don't yet use it.</li>
        <li><strong>Enable disappearing messages:</strong> In any conversation, tap the contact's name at the top, then "Disappearing messages." Set a time limit — messages will auto-delete after that period. This means your message history doesn't accumulate indefinitely.</li>
      </ol>

      <h2>Step 8: Use an Encrypted DNS Server</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> DNS (Domain Name System) is like the internet's phone book — it translates a domain name like "bbc.co.uk" into an IP address your device can connect to. By default, these lookups travel in plain text to your mobile carrier's DNS server, meaning your carrier logs every domain you visit. Encrypted DNS (DNS over HTTPS or DNS over TLS) wraps these lookups in encryption and routes them to a privacy-respecting resolver your carrier can't read. <br><strong>Plain:</strong> Every time you type a website address, your phone first asks a directory service what the address really is. Normally your phone company can see every website name you look up. Encrypted DNS puts that lookup in a sealed box — your carrier knows you looked something up, but not what.</div></div>

      <p>Every time you visit a website, your phone first looks up the website's address by contacting a DNS server — like looking someone up in a phone book. By default, this lookup goes to your mobile carrier's DNS server, and it's unencrypted, which means your carrier can see every website you visit (by name) even if the content of your browsing is encrypted. Switching to a privacy-respecting encrypted DNS resolver prevents this.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; General &gt; VPN &amp; Device Management</strong>.</li>
        <li>Tap <strong>DNS</strong>. If you see this option, select "Configure DNS" and choose "Manual." Add <code>9.9.9.9</code> (Quad9, a non-profit DNS that doesn't log your queries and blocks known malicious domains).</li>
        <li>Alternatively, install the free <strong>Mullvad DNS</strong> app from the App Store. Open it and tap Enable. This sets up an encrypted DNS resolver automatically, with optional tracking domain blocking.</li>
      </ol>
      <p><strong>On Android:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Network &amp; Internet &gt; Private DNS</strong>.</li>
        <li>Select <strong>"Private DNS provider hostname"</strong>.</li>
        <li>Enter <code>dns.mullvad.net</code> and tap Save. Your DNS queries are now encrypted and handled by Mullvad's no-log DNS resolver.</li>
      </ol>

      <h2>Step 9: Disable Bluetooth and WiFi When Not in Use</h2>
      <p>Your phone's Bluetooth and WiFi radios constantly broadcast signals even when you're not connected to anything. These signals can be detected by sensors in shops, airports, and public spaces to track your physical movements. This technique is already used commercially in retail to track which aisles shoppers walk through.</p>
      <p>The simple habit: when you leave home and don't need WiFi or Bluetooth, turn them off. Turn them back on when you need them.</p>
      <p><strong>On both iPhone and Android:</strong> Pull down the Control Centre (iPhone: swipe from top right. Android: swipe from top). Tap the WiFi and Bluetooth icons to turn them off. Note that on iPhone, tapping in the Control Centre only temporarily disables the radios — to truly turn them off, go to <strong>Settings &gt; WiFi</strong> and toggle it off there.</p>
      <p>Similarly, be conscious of which WiFi networks you connect to. Your phone remembers every network you've ever joined and automatically reconnects when it's nearby. A malicious access point can impersonate a trusted network name. Periodically review your saved networks: <strong>Settings &gt; WiFi</strong> on iPhone or <strong>Settings &gt; Network &gt; WiFi</strong> on Android. Delete networks you no longer need.</p>

      <h2>Step 10: Reduce What Cloud Backup Sends</h2>
      <p>Both iPhone's iCloud backup and Android's Google backup automatically upload a copy of your device's contents to company servers. This includes photos, messages, app data, health information, and more. Even if your device is encrypted, cloud backups may not be, or may be accessible to the company and therefore to law enforcement.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; [your name] &gt; iCloud</strong>.</li>
        <li>Review each item in the list. Turn off backup for items you consider sensitive — Health, Messages, and Notes in particular.</li>
        <li>If you want encrypted backups, enable <strong>Advanced Data Protection</strong>: go to <strong>Settings &gt; [your name] &gt; iCloud &gt; Advanced Data Protection</strong>. This end-to-end encrypts your iCloud data, meaning even Apple cannot read it. This is the recommended setting.</li>
      </ol>
      <p><strong>On Android:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Google &gt; Backup</strong>.</li>
        <li>You can turn off backup entirely, or review what's being backed up and disable specific categories like SMS or call history.</li>
      </ol>

      <h2>Beyond the Ten Steps</h2>
      <p>These steps cover what's practical for most people. If you want to go further, the most significant action you can take is switching to <strong>GrapheneOS</strong> — a version of Android stripped of all Google services, built specifically for privacy and security. It runs on Google Pixel phones (which have excellent hardware security) and installs like any other operating system. This is an advanced option, but it's worth knowing about. GrapheneOS has a clear installation guide at <strong>grapheneos.org</strong>.</p>
    `
  },
  {
    id: 'metadata-problem',
    title: 'The Metadata Problem: Your Data\'s Shadow',
    category: 'Basics',
    date: '2025-04-05',
    readTime: '12 min read',
    excerpt: 'Metadata is often more revealing than the content it describes — and most people have no idea it exists.',
    tags: ['metadata', 'surveillance', 'basics'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['signal', 'exifcleaner', 'metadata-cleaner'],
    content: `
      <p>Most people, when they think about privacy, think about content: keeping the text of their messages private, encrypting their emails. This is reasonable but incomplete. Metadata often reveals more than content — and it's far harder to protect.</p>

      <h2>What Is Metadata? A Plain English Explanation</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Metadata is structured data that describes other data — not the content itself, but attributes about it: sender, recipient, timestamp, duration, size, location, device, and routing information. It is typically collected automatically by the systems that transmit or store data, and is often legally easier to access than content. <br><strong>Plain:</strong> Metadata is everything about a message except what it says. Not the letter — the envelope, the postmark, the sender's address, the time it was sent, and how heavy it is. All of that can reveal a huge amount without anyone reading a single word.</div></div>

      <p>Metadata is "data about data." Here is the classic example: imagine a letter. The <em>content</em> of the letter is what's written inside. The <em>metadata</em> is everything about the letter: who sent it, who it was addressed to, the postmark showing where and when it was sent, the stamp, the size and weight of the envelope, the handwriting on the address, and the route it took through the postal system.</p>
      <p>This metadata, without reading the letter at all, can tell you a great deal: if you receive a letter from an oncology clinic, you probably have cancer. If you receive letters from a divorce lawyer, you're probably getting divorced. If you're sending letters daily to the same person in another country, you're probably in a relationship.</p>
      <p>Digital metadata works the same way, but it is collected in far more detail and at far greater scale than any postal inspector could manage.</p>

      <h2>Email Metadata: More Than You'd Expect</h2>
      <p>When you send an email, the text you write is the content. But every email also carries a set of <em>headers</em> — metadata fields that are invisible in your email client but present in every message. These headers contain:</p>
      <ul>
        <li>Your email address and the recipient's email address</li>
        <li>The exact date and time the email was sent, down to the second</li>
        <li>Your IP address (in some cases) — which reveals your rough location</li>
        <li>The email software you used (e.g., "Sent from iPhone")</li>
        <li>Every mail server the email passed through on its way to the recipient, with timestamps</li>
        <li>The size of the email</li>
        <li>The subject line (this is often treated as metadata, not content, from a legal perspective)</li>
      </ul>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> End-to-end encryption (such as PGP or the encryption used within ProtonMail) encrypts the message body but leaves email headers — including To, From, Date, and Subject — visible to mail servers and, in many jurisdictions, to law enforcement without a warrant. <br><strong>Plain:</strong> Encrypting your email content is like sealing the letter — nobody can read what's inside. But the envelope is still visible. Your email provider can still see who you emailed, when, and how often. That pattern can reveal a lot on its own.</div></div>

      <p>End-to-end encryption — like PGP, or what ProtonMail uses between its users — encrypts the body of the email. But the headers, including who you emailed and when, remain visible to mail servers and, in many jurisdictions, to law enforcement without a warrant. Your email provider knows your entire communication graph: everyone you've ever emailed, how often, and when.</p>

      <h2>Phone Call Metadata: The Foundation of Mass Surveillance</h2>
      <p>The revelations from Edward Snowden in 2013 showed that the NSA had been collecting phone metadata for virtually every phone call made in the United States — not the content of calls, just the metadata. Critics asked: how revealing can that really be, without hearing the conversations?</p>
      <p>Researchers at Stanford University answered that question directly. They recruited volunteers and asked them to share their phone metadata — call logs showing who called whom, when, and for how long. Then researchers tried to infer private information about the volunteers from the metadata alone. Results: they could identify people with heart conditions (from calls to cardiologists), people with cancer (from oncology clinics), people involved in substance abuse recovery, people who owned guns, people who had abortions, and much more. All without hearing a single word of any conversation.</p>
      <p>Your carrier logs this metadata for every call. In many countries, they are required to retain it for two years or more. In the UK, the Investigatory Powers Act requires ISPs to store a year of connection metadata. In the EU, the rules vary by country.</p>

      <h2>The EXIF Problem: Every Photo You Take Carries a Map</h2>
      <p>This is one of the most practical and immediately actionable pieces of metadata knowledge you can have.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> EXIF (Exchangeable Image File Format) is a standard that embeds metadata directly into image files. This includes GPS coordinates (latitude and longitude), timestamp, device make and model, camera settings, and sometimes the owner's name. This data travels with the image file whenever it is shared, unless explicitly stripped. <br><strong>Plain:</strong> Every photo your phone takes secretly carries hidden data — including the exact GPS location where it was taken, the precise time, and your phone's make and model. When you share the photo, all that hidden data goes with it. That means someone can look at a photo you posted and know exactly where you were standing when you took it.</div></div>

      <p>Every photo taken with a smartphone or modern camera contains embedded data called <strong>EXIF</strong> (EXIF stands for Exchangeable Image File Format — it's hidden data baked into every photo file). This hidden data includes:</p>
      <ul>
        <li>The exact date and time the photo was taken</li>
        <li>The GPS coordinates where the photo was taken — latitude and longitude, often accurate to within a few metres</li>
        <li>The make and model of the camera or phone</li>
        <li>Camera settings (aperture, exposure, ISO)</li>
        <li>Sometimes, the owner's name if set in the device</li>
      </ul>
      <p>When you share a photo directly from your phone — via email, WhatsApp, a forum, or anywhere else that doesn't strip the EXIF data — you are sharing your precise location at the time of the photo. This has caused serious problems for people who shared photos thinking they were anonymous. In 2012, John McAfee (the antivirus software founder) was hiding from police in Guatemala. A Vice journalist photographed him and posted the photo online — complete with GPS coordinates in the EXIF data. McAfee was located within hours.</p>
      <p>Most social media platforms (Facebook, Twitter/X, Instagram) strip EXIF data when you upload photos. But many other places do not: direct email attachments, WhatsApp on some settings, Telegram, forums, and file-sharing services often preserve it intact.</p>

      <h2>How to Strip EXIF Data From Photos</h2>
      <p>Before sharing any sensitive photo, remove its EXIF data. Here's how:</p>
      <p><strong>On Windows (built in, no extra software):</strong></p>
      <ol>
        <li>Right-click the photo file and select <strong>Properties</strong>.</li>
        <li>Click the <strong>Details</strong> tab.</li>
        <li>At the bottom of the tab, click <strong>"Remove Properties and Personal Information"</strong>.</li>
        <li>Select <strong>"Remove the following properties from this file"</strong> and check all boxes, or simply select <strong>"Create a copy with all possible properties removed"</strong> for a clean copy of the file with no metadata.</li>
        <li>Click OK.</li>
      </ol>
      <p><strong>Using ExifCleaner (free, available for Windows, Mac, and Linux):</strong></p>
      <ol>
        <li>Go to <strong>exifcleaner.com</strong> and download ExifCleaner for your operating system.</li>
        <li>Install and open it. The interface is very simple: a large drop zone in the middle of the window.</li>
        <li>Drag and drop any photos onto the window. ExifCleaner will immediately strip all EXIF data from the files. No settings to configure, no accounts to create.</li>
        <li>The original file is modified in place (or you can choose to create clean copies). Done.</li>
      </ol>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Open the photo in the Photos app.</li>
        <li>Tap the <strong>Share</strong> button (the square with an arrow).</li>
        <li>Before choosing where to share, look for <strong>"Options"</strong> at the top of the share sheet. Tap it.</li>
        <li>Turn off <strong>"Location"</strong>. This removes the GPS data before sharing. Note that other EXIF data (device model, timestamp) may still be included.</li>
      </ol>
      <p><strong>On Android:</strong> The built-in option is limited. Use a free app like <strong>"Photo Exif Editor"</strong> from the Play Store to view and remove metadata from photos before sharing.</p>

      <h2>Document Metadata: The Hidden Author</h2>
      <p>Microsoft Office files (Word documents, Excel spreadsheets, PowerPoint presentations) and PDF files contain metadata too. A Word document typically includes:</p>
      <ul>
        <li>The author's name and company name (taken from the Office installation)</li>
        <li>The date the document was created and last modified</li>
        <li>A complete revision history, including deleted text, in some cases</li>
        <li>The names of everyone who edited the document</li>
        <li>The name of the computer it was created on</li>
      </ul>
      <p>This has caused real-world problems. In 2003, the UK government published a dossier on Iraq's weapons of mass destruction as a Word document. A researcher examined the document's metadata and found that it had been extensively edited by several named officials and appeared to have been copied from another document — which contradicted the government's claims about its origin. The metadata blew up a political cover story.</p>
      <p>To remove metadata from a Word document before sharing: go to <strong>File &gt; Info &gt; Check for Issues &gt; Inspect Document</strong>. Run the inspection and click "Remove All" next to each category of metadata found.</p>

      <h2>What You Can Do About It</h2>
      <p>You can't avoid creating metadata entirely — it's inherent to how digital systems work. But you can significantly reduce what gets collected and shared:</p>
      <ul>
        <li><strong>Strip EXIF data from photos</strong> before sharing them anywhere other than trusted platforms that do it for you.</li>
        <li><strong>Use Signal for sensitive communications</strong>. Signal minimises the metadata it stores about your conversations. Unlike regular phone carriers, Signal cannot tell police who you messaged or when — they've proven this in court. Signal's "Sealed Sender" feature also hides who is initiating a conversation, so even Signal's servers don't know the full picture.</li>
        <li><strong>Use encrypted DNS</strong> (see the smartphone hardening guide) to prevent your internet provider from seeing which websites you visit, even when the content is encrypted by HTTPS.</li>
        <li><strong>Remove document metadata</strong> before sharing Word files, PDFs, or spreadsheets with external parties.</li>
        <li><strong>Be conscious of timing patterns.</strong> If you consistently check a certain website at the same time each day, that pattern can be identified even if the content is encrypted. This is hard to prevent, but worth being aware of.</li>
      </ul>
    `
  },
  {
    id: 'anonymous-browsing',
    title: 'How to Browse Anonymously: A Practical Guide',
    category: 'Browsers',
    date: '2025-03-28',
    readTime: '15 min read',
    excerpt: 'True anonymity online is genuinely difficult. But meaningful, practical privacy is available to everyone. This guide walks through a realistic, layered approach — starting with the simplest steps.',
    tags: ['anonymity', 'tor', 'browser', 'privacy'],
    platforms: ['Windows', 'macOS', 'Linux'],
    relatedReviews: ['brave', 'firefox', 'tor-browser', 'ublock-origin', 'mullvad', 'duckduckgo', 'searxng', 'startpage', 'tails'],
    content: `
      <h2>Let's Be Honest About What "Anonymous" Actually Means</h2>
      <p>The word "anonymous" gets thrown around in privacy discussions as if it's a simple binary state you're either in or out of. The reality is more nuanced, and understanding that nuance is the first step to actually protecting yourself.</p>
      <p>Consider three different people reading this article right now:</p>
      <ul>
        <li>Person A is an ordinary person who's tired of being tracked by advertisers and wants to browse without their data being sold.</li>
        <li>Person B is a journalist in a country with a restrictive government who needs to research sensitive topics without their government seeing what they're reading.</li>
        <li>Person C is a whistleblower trying to communicate with a journalist without being identified by a sophisticated intelligence agency.</li>
      </ul>
      <p>Each of these people has a completely different threat model — a different answer to the question "who am I hiding from, and how capable are they?" The tools that are sufficient for Person A would be dangerously inadequate for Person C. This guide is primarily aimed at Person A and Person B, with a note on what Person C would need.</p>

      <h2>Understanding the Difference: Privacy vs. Anonymity</h2>
      <p><strong>Privacy</strong> means that others cannot see the content of what you're doing — like a letter sealed in an envelope. Your ISP knows you connected to a website, but can't read what you did there.</p>
      <p><strong>Anonymity</strong> means others cannot determine <em>who</em> is doing it — like a letter with no return address. A website can see that someone visited it, but cannot tell who.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> HTTPS encrypts the content of traffic between your browser and a website (TLS encryption), but the destination domain is still visible to your ISP via DNS queries and TLS SNI (Server Name Indication). A VPN hides the destination from your ISP by routing all traffic through the VPN server. Tor provides stronger anonymity by routing traffic through three relays with layered encryption, so no single party knows both the source and destination. <br><strong>Plain:</strong> HTTPS (the padlock icon) keeps the contents of your browsing private — nobody can read the page. But your internet provider can still see which sites you visit. A VPN hides that from your provider. Tor hides it even better by bouncing your traffic through three computers so nobody can tell both who you are and where you're going.</div></div>

      <h2>Start Here: Your Threat Model</h2>
      <p>Before installing anything, ask yourself honestly: what am I trying to achieve? Pick the closest match:</p>
      <ul>
        <li><strong>"I just want to stop being tracked by advertisers across websites."</strong> — You need: a good browser (Brave or Firefox) + uBlock Origin + a private search engine. This handles the vast majority of everyday commercial surveillance. Takes 20 minutes to set up.</li>
        <li><strong>"I want my ISP not to know what sites I visit."</strong> — You also need: a reputable VPN (Mullvad) + encrypted DNS.</li>
        <li><strong>"I need to research sensitive topics without my browsing being linked to my identity."</strong> — You need: Tor Browser + no logged-in accounts + careful operational habits.</li>
        <li><strong>"I face a serious, sophisticated threat."</strong> — This guide is not enough. Consult the Electronic Frontier Foundation's Surveillance Self-Defence guide (ssd.eff.org) and consider reaching out to a digital safety professional.</li>
      </ul>

      <h2>Layer 1: Your Browser</h2>
      <p>Your browser is the gateway to everything you do online. Choosing the right one is the single most impactful change you can make.</p>
      <p><strong>For everyday privacy: Brave or Firefox</strong></p>
      <p>We cover both in our browser fingerprinting article with full setup instructions. In brief:</p>
      <ul>
        <li><strong>Brave</strong> is the easiest choice — it blocks trackers, ads, and fingerprinting by default, requires no configuration, and works identically to Chrome. Recommended for most people.</li>
        <li><strong>Firefox</strong> with the settings adjustments in our fingerprinting guide is slightly more work but gives you more transparency and control. It's also the only mainstream browser that isn't built on Google's Chromium engine, which matters for browser diversity.</li>
      </ul>
      <p>Whichever you choose, install <strong>uBlock Origin</strong> as an extension (instructions in the fingerprinting article). This is non-negotiable — it blocks thousands of tracking scripts that browsers alone don't catch.</p>

      <h2>Layer 2: Your Search Engine</h2>
      <p>Google Search is one of the most detailed records of what any person thinks, worries about, researches, and intends to do. Every search query is tied to your Google account (if signed in) or your IP address and browser fingerprint (if not). Google retains this data for extended periods and uses it for advertising targeting.</p>
      <p>Switching your search engine is one of the easiest changes you can make:</p>
      <ul>
        <li><strong>DuckDuckGo (duckduckgo.com)</strong> — the most popular alternative. Does not create user profiles, does not retain your IP with search terms, does not track you across sessions. Search results are decent, though not always as comprehensive as Google's for obscure queries.</li>
        <li><strong>Startpage (startpage.com)</strong> — proxies Google's search results anonymously. You get Google's quality without Google's tracking. Useful if you need Google-quality results for a specific search.</li>
        <li><strong>Brave Search (search.brave.com)</strong> — built independently without relying on Google or Bing's results. Growing in quality. Privacy-respecting by design.</li>
        <li><strong>SearXNG</strong> — an open-source, self-hostable meta-search engine that queries multiple search engines at once and returns combined results, with no logging by design. More technical to use but the most privacy-preserving option.</li>
      </ul>
      <p>To change your default search engine:</p>
      <ol>
        <li>In <strong>Brave</strong>: Settings &gt; Search engine. Select your preferred option from the list.</li>
        <li>In <strong>Firefox</strong>: Settings &gt; Search &gt; Default Search Engine. Select from the dropdown or click "Find more search engines" to add others.</li>
        <li>In <strong>Chrome</strong>: Settings &gt; Search engine &gt; Manage search engines. Add your preferred engine, then set it as default.</li>
      </ol>

      <h2>Layer 3: DNS Over HTTPS</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> DNS (Domain Name System) translates human-readable domain names into IP addresses. Standard DNS queries travel in plain text over UDP port 53, making them readable by your ISP and any network observer. DNS over HTTPS (DoH) wraps these queries in TLS-encrypted HTTPS connections sent to a privacy-respecting resolver, preventing your ISP from seeing which domains you look up. <br><strong>Plain:</strong> Every time you type a website address, your computer secretly looks it up in a phone book to find the actual address. Normally that lookup is sent in the open — your internet provider can read every name you look up. DNS over HTTPS locks that lookup in an envelope so your provider can't see what's inside.</div></div>

      <p>Every time you type a website address into your browser, your computer first asks a DNS (Domain Name System) server to translate that address into the numbers computers actually use. By default, this request goes to your internet provider's DNS server in plain text — meaning your ISP can log every single website you look up by name, even if the actual traffic is encrypted.</p>
      <p>DNS over HTTPS (DoH) encrypts these lookups and sends them to a privacy-respecting DNS resolver instead of your ISP's server. It's a simple change with meaningful impact.</p>
      <p><strong>Enabling DoH in Firefox:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy &amp; Security</strong>.</li>
        <li>Scroll down to "DNS over HTTPS."</li>
        <li>Select <strong>"Max Protection"</strong> from the dropdown.</li>
        <li>Choose a provider. We recommend <strong>Mullvad</strong> (does not log queries, based in Sweden) or <strong>NextDNS</strong> (configurable filtering, has a free tier).</li>
      </ol>
      <p><strong>Enabling DoH in Brave:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Privacy and security &gt; Security</strong>.</li>
        <li>Find "Use secure DNS" and enable it.</li>
        <li>Select "With" and choose a provider from the list, or enter a custom one.</li>
      </ol>

      <h2>Layer 4: Tor Browser (For When You Need Serious Anonymity)</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Tor (The Onion Router) routes each connection through three volunteer-operated relays. Traffic is encrypted in layers — like an onion — so each relay decrypts only its own layer and knows only the previous and next hop. The destination server sees only the exit relay's IP address, not the origin. All Tor Browser users share the same browser fingerprint by design, providing a large anonymity set. <br><strong>Plain:</strong> Instead of your internet request going directly from you to a website (like a straight road), Tor bounces it through three separate computers in different countries, each knowing only the previous and next stop — never the whole route. The website only sees the last computer, not you. And everyone who uses Tor Browser looks the same to websites, so you blend into the crowd.</div></div>

      <p>Tor (The Onion Router) is a network that routes your internet traffic through three separate volunteer-run servers (called "relays" — volunteer-run computers that pass your traffic along) around the world before it reaches its destination. Each relay only knows the step before it and the step after it — no single relay knows both where the traffic came from and where it's going. This makes it extraordinarily difficult to trace traffic back to you.</p>
      <p>The Tor Browser is a hardened version of Firefox that automatically uses the Tor network. Every user of Tor Browser has an identical fingerprint by design, preventing fingerprinting. It is the tool of choice for journalists, activists, whistleblowers, and anyone who genuinely needs to hide their browsing from a serious adversary.</p>
      <p>The tradeoff: Tor is significantly slower than normal browsing, because your traffic is bouncing through three servers around the world. Streaming video and downloads are impractical. Some websites block Tor exit nodes. For ordinary browsing of text-based content, it works well.</p>
      <p><strong>Installing and using Tor Browser:</strong></p>
      <ol>
        <li>Go to <strong>torproject.org</strong> and click "Download Tor Browser." Choose your operating system.</li>
        <li>Run the installer. On Windows, launch the downloaded <code>.exe</code> file. On Mac, open the <code>.dmg</code> and drag Tor Browser to Applications. On Linux, extract the archive and run <code>start-tor-browser.desktop</code>.</li>
        <li>Open Tor Browser. Click <strong>Connect</strong>. The browser will spend a few seconds connecting to the Tor network.</li>
        <li>Once connected, you'll see a Firefox-like browser. Browse normally — Tor is handling the routing automatically.</li>
        <li><strong>Do not install extensions</strong> in Tor Browser. Every additional extension makes your browser fingerprint more unique and reduces the anonymity set you're blending into.</li>
        <li><strong>Do not log in to personal accounts</strong> while using Tor Browser. If you log in to your Gmail while on Tor, Google knows it's you. Your anonymity is gone. Use Tor for browsing that should be unlinkable from your real identity — research, reading, accessing information — not for managing personal accounts.</li>
        <li><strong>Do not resize the browser window</strong> unless necessary. Even window size can be used to fingerprint users. Tor Browser opens at a standard size by design.</li>
        <li>When you're finished, simply close Tor Browser. All browsing data is wiped automatically on close.</li>
      </ol>

      <h2>Common Mistakes That Break Your Privacy</h2>
      <p>The most sophisticated privacy setup can be undone by simple habits. These are the most common mistakes:</p>
      <ul>
        <li><strong>Logging in to personal accounts.</strong> The moment you sign in to Google, Facebook, or any account tied to your real identity, that service knows who you are — regardless of browser, VPN, or Tor. Compartmentalise: have a browser for personal accounts (where you're known) and a separate browser for private browsing (where you're not).</li>
        <li><strong>Using a VPN and thinking you're anonymous.</strong> As we cover in the VPN article, a VPN is useful but limited. It shifts trust to the VPN company and doesn't protect against account-based tracking or fingerprinting.</li>
        <li><strong>Installing too many browser extensions.</strong> Every extension you add to your browser changes your fingerprint and makes you more identifiable. Keep extensions to the absolute minimum: uBlock Origin and nothing else for a privacy-focused setup.</li>
        <li><strong>Assuming HTTPS means private.</strong> The padlock icon means the connection between you and the website is encrypted — no one in the middle can read the content. It does not mean the website itself isn't tracking you, and it does not hide which site you visited from your ISP (though DNS over HTTPS helps with this).</li>
        <li><strong>Cross-contaminating identities.</strong> If you have a "private" browser session and you paste your real email address into a form, or search for your own name, or visit your own social media profile, you've linked that session to your identity. Be strict about what information you share in a private context.</li>
        <li><strong>Thinking incognito mode is anonymous.</strong> We cover this in the fingerprinting article, but it bears repeating: incognito mode only prevents your browser from saving local history. Your ISP, the websites you visit, and anyone monitoring your network can still see everything you do.</li>
      </ul>

      <h2>A Practical Setup for Most People</h2>
      <p>Here's the realistic recommendation for someone who wants strong everyday privacy without making browsing painful:</p>
      <ul>
        <li><strong>Browser:</strong> Brave (or Firefox with the settings from our fingerprinting guide)</li>
        <li><strong>Content blocker:</strong> uBlock Origin installed in the browser</li>
        <li><strong>Search engine:</strong> DuckDuckGo set as the default</li>
        <li><strong>DNS:</strong> DNS over HTTPS enabled, pointed at Mullvad or NextDNS</li>
        <li><strong>VPN:</strong> Mullvad, used on public WiFi and when you don't want your ISP logging your browsing</li>
        <li><strong>Accounts:</strong> Personal accounts used in a separate browser (e.g., keep a basic Chrome or Edge for things like banking and email, where you need to be logged in)</li>
      </ul>
      <p>This setup takes under an hour to implement, costs €5 per month for the VPN (or nothing if you skip the VPN for now), and dramatically reduces your exposure to commercial surveillance. For research or situations requiring stronger anonymity, add Tor Browser to the mix as a separate tool for specific tasks.</p>
    `
  },
  {
    id: 'user-accounts-and-privacy',
    title: 'The Account Problem: How Sign-Ups Track You — And What to Use Instead',
    category: 'Basics',
    date: '2025-05-18',
    readTime: '20 min read',
    excerpt: 'Creating an account ties everything you do to a permanent, detailed profile. Here\'s what that really means for your privacy — and a practical guide to account-free alternatives for every major category of app.',
    tags: ['accounts', 'alternatives', 'tracking', 'basics'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['duckduckgo', 'organic-maps', 'jitsi-meet', 'syncthing', 'obsidian', 'protonmail', 'simplelogin', 'signal', 'freetube', 'keepassxc', 'invidious', 'searxng', 'startpage', 'matrix'],
    content: `
      <h2>Why Creating an Account Is a Privacy Event</h2>
      <p>Every time you create an account with a service — signing up for a new app, registering on a website, creating a profile — something specific and consequential happens from a privacy perspective: you give that company a permanent, stable identifier that links everything you ever do on their platform into a single, coherent profile tied to your real identity.</p>
      <p>Before you had an account, you were just an anonymous visitor. After you create one, you are a named individual with a history. Every search, every click, every purchase, every message, every piece of content you consume gets added to your profile — forever, or until you explicitly delete it (and sometimes even then, as many companies retain data beyond account deletion).</p>
      <p>This profile is valuable. It's used to target you with advertising, to build psychological models of your behaviour, to predict what you'll do next, and in some cases to share with or sell to third parties. It can also be subpoenaed by law enforcement, exposed in a data breach, or accessed by company employees.</p>
      <p>The privacy principle at stake here is called <strong>data minimisation</strong>: the idea that the best way to protect data about you is to not collect it in the first place. Every account you don't create is data that never exists and therefore can never be leaked, hacked, sold, or subpoenaed.</p>

      <h2>What Accounts Actually Collect</h2>
      <p>When you create an account with a major tech company, you're typically providing or generating:</p>
      <ul>
        <li><strong>Direct identifiers:</strong> Your name, email address, phone number, date of birth, profile photo</li>
        <li><strong>Behavioural data:</strong> Everything you search for, read, watch, click on, buy, or interact with — and how long you spend on each thing</li>
        <li><strong>Location data:</strong> Where you are when you use the service, where you've been over time, your home and work locations inferred from patterns</li>
        <li><strong>Social graph:</strong> Who you communicate with, who you follow, who follows you, which of your contacts also use the service. (Your social graph is the map of who knows who — who you talk to, who they know, and how everyone is connected.)</li>
        <li><strong>Device information:</strong> What devices you use, your IP address history, browser fingerprint</li>
        <li><strong>Inferences:</strong> Things the company has calculated about you that you never explicitly shared — your political leanings, your health conditions, your relationship status, your income bracket, your emotional state</li>
      </ul>
      <p>Individually, each of these might seem harmless. Assembled into a unified profile and held indefinitely, they create an extraordinarily detailed picture of who you are. Facebook, for example, has been documented to build profiles on people who have never created a Facebook account — using data collected from third-party websites and apps that embed Facebook's tracking tools.</p>

      <h2>The Business Model Behind Free Accounts</h2>
      <p>Most accounts on major platforms are free because your data <em>is</em> the product. The service you're using — search, email, social media, maps, documents — is the mechanism for collecting data, not the actual product being sold. The actual product being sold is your attention and your profile, sold to advertisers.</p>
      <p>This is not a conspiracy theory — it is openly stated in the financial disclosures of these companies. Alphabet (Google's parent company) generated $237 billion in revenue in 2023. About 77% of that — roughly $183 billion — came from advertising. Google's services are the apparatus for building the profiles that make that advertising possible.</p>
      <p>Understanding this business model clarifies why these companies want you to create accounts and stay logged in: an anonymous visitor is worth very little. A logged-in user with a rich profile is worth a great deal.</p>

      <h2>Where Accounts Are Genuinely Necessary</h2>
      <p>Before we get to alternatives, let's be honest about where you genuinely cannot avoid an account:</p>
      <ul>
        <li><strong>Banking and financial services</strong> — Your bank needs to know who you are. This is unavoidable and regulated by law. Use strong passwords (via your password manager) and 2FA.</li>
        <li><strong>Online shopping with delivery</strong> — Delivery requires an address, which requires identity. Use a guest checkout where possible rather than creating a permanent account.</li>
        <li><strong>Government services</strong> — Tax portals, benefit systems, healthcare portals. These require verified identity by design.</li>
        <li><strong>Work and school tools</strong> — If your employer or school mandates a specific platform, you may have limited choice. Minimise what you share and use it only for its intended purpose.</li>
        <li><strong>Encrypted email providers</strong> — Providers like ProtonMail still require an account, but they're a significant improvement over Gmail because they can't read your emails.

          <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Zero-knowledge encryption means the service provider encrypts your data using a key derived from your password on your device. The server only ever holds encrypted ciphertext — the company mathematically cannot decrypt your data because they never receive the key. <br><strong>Plain:</strong> "Zero-knowledge" means the company holds your data but can't read it — like a storage unit where only you have the key. Even if someone breaks into the warehouse, all they find are locked boxes they can't open.</div></div>

          An account is required, but what the company knows about your email content is minimal.</li>
      </ul>
      <p>For everything else, there is almost always an account-free alternative that does the same job.</p>

      <h2>Search: Replace Google Search</h2>
      <p><strong>The problem with Google:</strong> If you use Google Search while logged in to a Google account, every search query is tied to your identity permanently. If you use it while logged out, Google still tracks you via your IP address, browser fingerprint, and a tracking cookie. Google uses your search history to build an advertising profile and — as documents in recent antitrust cases revealed — shares significant data with advertising partners.</p>
      <p><strong>Account-free alternatives:</strong></p>
      <ul>
        <li><strong>DuckDuckGo (duckduckgo.com)</strong> — No account. No tracking across sessions. No personal profile built. Search results are competitive for everyday queries. Has a browser app for iPhone and Android that blocks trackers.</li>
        <li><strong>Startpage (startpage.com)</strong> — No account needed. Retrieves Google's search results on your behalf anonymously — you get Google-quality results without Google's tracking.</li>
        <li><strong>Brave Search (search.brave.com)</strong> — No account. Built on an independent index that doesn't rely on Google or Bing. Growing in quality.</li>
      </ul>
      <p><strong>How to switch (takes 2 minutes):</strong> In any browser, go to Settings, find the "Search engine" or "Default search engine" option, and select DuckDuckGo from the dropdown. If DuckDuckGo isn't listed, go to duckduckgo.com first and look for an option to "Add DuckDuckGo to browser."</p>

      <h2>Maps: Replace Google Maps</h2>
      <p><strong>The problem with Google Maps:</strong> Google Maps is one of the most powerful location data collection tools ever built. With a Google account, it builds a detailed timeline of everywhere you've been. Even without an account, it tracks your movements via IP address and device identifiers. Google has been caught repeatedly collecting location data even when users explicitly told it not to.</p>
      <p><strong>Account-free alternatives:</strong></p>
      <ul>
        <li><strong>Organic Maps (organicmaps.app)</strong> — Completely free, no account, no ads, no tracking. Based on OpenStreetMap data. Works fully offline — download the maps for your region over WiFi and use them without a data connection. Navigation is smooth and accurate for walking, cycling, and driving. Best overall alternative for most people.</li>
        <li><strong>OsmAnd (osmand.net)</strong> — Also based on OpenStreetMap, no account required. More features than Organic Maps (contour lines, hiking trails, nautical charts) but a more complex interface.</li>
      </ul>
      <p><strong>How to switch to Organic Maps:</strong></p>
      <ol>
        <li>Search for "Organic Maps" in the App Store (iPhone) or Google Play Store (Android) and install it.</li>
        <li>Open the app. It will ask which region's maps to download. Tap your country or region and tap Download. The map file downloads to your device.</li>
        <li>Once downloaded, search for any address or place in the search bar at the top. Tap a result, then tap the blue arrow to start navigation.</li>
        <li>Choose your mode: walking (person icon), cycling (bike icon), or driving (car icon).</li>
        <li>The app works entirely offline from this point. No data connection, no account, no tracking.</li>
      </ol>

      <h2>Video Calls: Replace Zoom and Google Meet</h2>
      <p><strong>The problem:</strong> Zoom requires accounts for both the host and, for longer calls, guests. Google Meet requires a Google account. Both services process your video and audio on their servers, and both collect metadata about your calls.</p>
      <p><strong>Account-free alternative:</strong></p>
      <ul>
        <li><strong>Jitsi Meet (meet.jit.si)</strong> — No account required for either the person starting the call or the people joining it. Go to meet.jit.si in your browser, type any room name (something unique that others won't guess), and share that link with the people you want to call. They click the link and join — no download, no account, no signup. Video and audio are encrypted. Free and unlimited.</li>
      </ul>
      <p><strong>How to start a Jitsi call:</strong></p>
      <ol>
        <li>Go to <strong>meet.jit.si</strong> in your browser (Chrome, Firefox, Brave — all work).</li>
        <li>In the box on the homepage, type a unique room name — something that others won't accidentally stumble into, like a mix of random words: "BlueMountainConference" or similar.</li>
        <li>Click <strong>Start meeting</strong>. Allow the browser to use your camera and microphone when prompted.</li>
        <li>Copy the link from the address bar and send it to whoever you want to join. They just click the link — no account, no download required on desktop.</li>
        <li>For mobile calls: search for "Jitsi Meet" in the App Store or Play Store and install it. Open it, enter the same room name, and join.</li>
      </ol>

      <h2>Cloud Storage: Replace Google Drive and Dropbox</h2>
      <p><strong>The problem:</strong> Both Google Drive and Dropbox require accounts. Google scans the files in your Drive to improve its AI models and advertising. Dropbox has had major security incidents, and both services can access your files if required by law enforcement.</p>
      <p><strong>Account-free alternatives:</strong></p>
      <ul>
        <li><strong>Syncthing (syncthing.net)</strong> — Synchronises files directly between your own devices (phone, laptop, desktop) with no account, no cloud server, and no third party involved. Your files never leave your devices. It's free, open source, and works on Windows, Mac, Linux, and Android. The only limitation: both devices must be on at the same time for syncing to happen.</li>
        <li><strong>OnionShare (onionshare.org)</strong> — For sharing individual files with someone else without uploading to any server. Creates a temporary link via Tor that the recipient uses to download the file directly from your computer. No account, no third-party server. Best for one-off file sharing.</li>
        <li><strong>Wormhole (wormhole.app)</strong> — Web-based, no account. Drag a file onto the page, get a link, send it to someone. The file is encrypted and automatically deleted after the recipient downloads it or after 24 hours. Simple and fast.</li>
      </ul>
      <p><strong>Setting up Syncthing for phone-to-laptop sync:</strong></p>
      <ol>
        <li>Download Syncthing for your computer from <strong>syncthing.net</strong>. Install it and open it — it runs as a small app in your system tray and opens a control panel in your browser.</li>
        <li>On Android, search for "Syncthing-Fork" in the Play Store and install it. (On iPhone, Syncthing is not available due to Apple's restrictions — use Wormhole instead for file sharing on iOS.)</li>
        <li>Open the Android app. Go to <strong>Devices</strong> and tap the + button. On your computer's Syncthing panel, click "Show ID" — you'll see a long code and a QR code. Scan the QR code with your phone.</li>
        <li>Accept the connection on both ends when prompted. Then add a shared folder: on your phone, tap <strong>Folders</strong> and the + button. Select a folder (e.g., your camera roll). On your computer, accept the folder share when it appears. Syncing begins automatically whenever both devices are online.</li>
      </ol>

      <h2>Notes: Replace Google Keep and Evernote</h2>
      <p><strong>The problem:</strong> Google Keep stores your notes on Google's servers tied to your account. Google can read your notes and uses them to improve its services. Evernote similarly stores notes in the cloud, has had privacy policy changes that alarmed users, and requires a paid account for anything beyond basic use.</p>
      <p><strong>Account-free alternatives:</strong></p>
      <ul>
        <li><strong>Obsidian (obsidian.md)</strong> — Free, no account required for local use. Stores notes as plain text files on your own device. Fast, powerful, and extensible. Sync between devices is available as a paid add-on, but you can also sync for free using Syncthing (above).</li>
        <li><strong>Joplin (joplinapp.org)</strong> — Free, open source, no mandatory account. Stores notes locally. Optionally syncs via Nextcloud (self-hosted) or an encrypted Dropbox — your choice. Available on Windows, Mac, Linux, iPhone, and Android.</li>
        <li><strong>Standard Notes (standardnotes.com)</strong> — Free tier available, no account required to try it locally, end-to-end encrypted sync. Even the company cannot read your notes.</li>
      </ul>
      <p><strong>Getting started with Obsidian (no account needed):</strong></p>
      <ol>
        <li>Go to <strong>obsidian.md</strong> and click Download. Choose your operating system.</li>
        <li>Install and open Obsidian. It will ask you to choose a folder on your computer where your notes will be stored — this is your "vault." Create a new folder called "Notes" somewhere you'll remember.</li>
        <li>You're in. Click the page icon on the left sidebar to create a new note. Type your note. It saves automatically as a plain text file in your vault folder.</li>
        <li>On mobile: search for "Obsidian" in the App Store or Play Store. Install it. Tap "Create new vault" and name it. Your notes are stored on your phone's storage, not in the cloud.</li>
      </ol>

      <h2>YouTube: Watch Without an Account</h2>
      <p><strong>The problem:</strong> YouTube is owned by Google. If you watch YouTube while logged in, Google builds a detailed profile of your interests, political views, and behaviour. Even logged out, YouTube tracks you via cookies and fingerprinting.</p>
      <p><strong>Account-free alternatives:</strong></p>
      <ul>
        <li><strong>FreeTube (freetubeapp.io)</strong> — A free, open-source desktop app for watching YouTube without ads, tracking, or a Google account. Runs on Windows, Mac, and Linux. Subscriptions and history are stored locally on your device.</li>
        <li><strong>Invidious</strong> — A web-based YouTube front-end that retrieves videos on your behalf without tracking you. No account needed. Find a public instance at instances.invidious.io or host your own.</li>
      </ul>

      <h2>Messaging: The Nuanced Case</h2>
      <p>This is a category where accounts are harder to avoid, but the choice of <em>which</em> account you create matters enormously.</p>
      <ul>
        <li><strong>WhatsApp</strong> — Requires an account tied to your phone number. Owned by Meta. End-to-end encrypted for message content, but Meta collects extensive metadata: who you message, when, how often, your contacts list, and your usage patterns. This metadata is used across Meta's advertising ecosystem.</li>
        <li><strong>Signal</strong> — Requires an account tied to a phone number, but the organisation behind Signal is a non-profit with no advertising business model. Signal collects almost no metadata. The government has compelled Signal for data multiple times — each time, Signal could only hand over the account creation date and the last date the app connected. This is the best option for private messaging that requires an account.</li>
        <li><strong>Matrix/Element</strong> — Matrix is an open protocol for messaging. Element is a popular app for using it. You can create an account on any server — including one you run yourself — or connect to community-run servers. No advertising, no central company with access to your messages. Supports encrypted group chats and is a good option for teams and communities.</li>
        <li><strong>Briar (briarproject.org)</strong> — A messaging app for Android that requires no server and no internet connection — it can sync messages over Bluetooth or local WiFi. No account, no phone number, no email address. Designed for journalists, activists, and anyone who needs to communicate without any central server knowing about it.</li>
      </ul>

      <h2>When You Must Have an Account: Reducing the Damage</h2>
      <p>Sometimes you genuinely need an account — or the account-free alternative isn't good enough for your needs. Here's how to minimise the privacy impact:</p>
      <ul>
        <li><strong>Use an email alias service.</strong> Instead of giving your real email address to every service, use a tool like <strong>SimpleLogin (simplelogin.io)</strong> or <strong>addy.io</strong>. These create throwaway email addresses that forward to your real inbox. You can disable or delete an alias at any time — meaning you can "burn" an account with a compromised service without it affecting your real email. SimpleLogin's basic tier is free.</li>
        <li><strong>Use your password manager to generate a unique password for every account.</strong> This limits the damage if any single service is breached.</li>
        <li><strong>Enable two-factor authentication.</strong> This prevents account takeovers even if your password is stolen.</li>
        <li><strong>Use guest checkout where possible.</strong> Online shops almost always have a "Continue as Guest" option. Use it. There's no reason to create a permanent account with your purchase history just to buy something once.</li>
        <li><strong>Regularly delete old accounts.</strong> The website <strong>JustDeleteMe (justdeleteme.xyz)</strong> rates how easy it is to delete accounts on hundreds of popular services and links directly to the deletion page. Go through your accounts periodically and delete any you no longer use.</li>
        <li><strong>Provide minimal information.</strong> When a form requires a date of birth, use January 1st and a year that makes you old enough to use the service. When it asks for a phone number and it's optional, leave it blank. When it asks for your real name and you're not legally required to give it, consider whether a first name or pseudonym is acceptable.</li>
        <li><strong>Read what you're agreeing to.</strong> The website <strong>ToS;DR (tosdr.org)</strong> — Terms of Service; Didn't Read — rates the privacy practices of hundreds of popular services on an A to E scale and summarises the key points in plain language. Check a service's grade before signing up.</li>
      </ul>

      <h2>A Quick Reference: Popular Apps and Their Alternatives</h2>
      <p>Here is a summary of the main swaps covered in this article and others on SafeSpace:</p>
      <ul>
        <li><strong>Google Search</strong> → DuckDuckGo, Startpage, Brave Search (no account)</li>
        <li><strong>Google Maps</strong> → Organic Maps, OsmAnd (no account, works offline)</li>
        <li><strong>Google Drive / Dropbox</strong> → Syncthing (no account, no server), Wormhole for sharing</li>
        <li><strong>Google Keep / Evernote</strong> → Obsidian, Joplin (no account, local storage)</li>
        <li><strong>YouTube</strong> → FreeTube, Invidious (no account, no Google tracking)</li>
        <li><strong>Google News / Algorithmic feeds</strong> → RSS reader with Fluent Reader or NetNewsWire (no account)</li>
        <li><strong>Google Translate</strong> → DeepL (no account required), Translatelocally (local, offline)</li>
        <li><strong>Zoom / Google Meet</strong> → Jitsi Meet at meet.jit.si (no account for anyone)</li>
        <li><strong>WhatsApp / Messenger</strong> → Signal (account required, but non-profit, minimal metadata)</li>
        <li><strong>Gmail</strong> → ProtonMail (account required, but zero-knowledge encrypted)</li>
        <li><strong>Chrome with Google account</strong> → Brave or Firefox (sync is optional, no Google account)</li>
        <li><strong>Google Password Manager</strong> → Bitwarden (open source, audited) or KeePassXC (fully local, no account ever)</li>
      </ul>
      <p>You don't need to switch everything at once. Pick one category that matters most to you and make that change first. The switch from Google Search to DuckDuckGo takes two minutes and has zero learning curve — it's the easiest place to start. Once that feels normal, move to the next item on the list. Over a few weeks, you can dramatically reduce the number of profiles being built about you — without sacrificing the functionality you rely on.</p>
    `
  },
  {
    id: 'android-privacy-settings',
    title: 'Android Privacy Settings: The Complete Guide',
    category: 'Mobile',
    date: '2025-05-19',
    readTime: '22 min read',
    excerpt: 'Every Android setting that touches your privacy — what it does, what you give up by changing it, and a clear verdict for each. Includes the full functionality vs. privacy comparison table.',
    tags: ['android', 'mobile', 'settings', 'hardening'],
    platforms: ['Android'],
    relatedReviews: ['mullvad', 'organic-maps', 'syncthing', 'grapheneos', 'signal'],
    content: `
      <h2>How to Read This Guide</h2>
      <p>Android is the most widely used mobile operating system in the world, and it comes with an enormous number of settings that affect your privacy. Some of them are switched on by default in ways that most people would object to if they understood them. Others are entirely reasonable defaults that you shouldn't change.</p>
      <p>This guide goes through every significant privacy-relevant Android setting in plain language. For each one we explain what it does, what the privacy trade-off is, and give a clear recommendation. At the end is a complete comparison table you can use as a quick reference.</p>
      <div class="callout callout--tip">
        <span class="callout__icon">&#128161;</span>
        <div><strong>Which Android version?</strong> These instructions are written for Android 12, 13, and 14 — the versions most phones run today. The exact menu names differ slightly between manufacturers (Samsung calls things differently than Google or OnePlus), but the settings exist on all of them. Search in your Settings app if you can't find something.</div>
      </div>

      <h2>Your Privacy Dashboard: Start Here</h2>
      <p>Android 12 introduced the <strong>Privacy Dashboard</strong> — a single screen that shows you exactly which apps accessed your camera, microphone, and location in the last 24 hours. It is one of the most useful privacy tools built into any phone, and most people have never seen it.</p>
      <p>To find it: <span class="setting-path">Settings &gt; Privacy &gt; Privacy Dashboard</span></p>
      <p>Open it now and look at what it shows. If you see an app accessing your microphone in the background when you weren't using it, or location access from an app that has no business knowing where you are, that's exactly the kind of thing this guide helps you address.</p>
      <p>Also notice the small green dot that appears in the top-right corner of your screen whenever an app is using your camera or microphone. This was added in Android 12 and cannot be disabled by apps. If you see it when you're not using a camera or voice app, something is accessing your hardware without an obvious reason.</p>

      <h2>Category 1: Location</h2>
      <p>Location data is the most sensitive kind of data your phone collects. Where you go reveals who you meet, what you believe, where you work, where you worship, where you seek medical care, and dozens of other deeply personal facts.</p>

      <h3>Location Services (master switch)</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Location</span></p>
      <p>The master switch for all location access. Turning it off means no app can get your GPS location. This is the nuclear option — it also breaks navigation, weather apps, and local search. You don't need to use this switch in normal use; instead, manage location access per-app (below).</p>
      <p><strong>Verdict:</strong> Leave on, but manage per-app permissions carefully.</p>

      <h3>App Location Permissions</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager &gt; Location</span></p>
      <p>This is where the real control lives. You can set each app's location access to one of three levels:</p>
      <ul>
        <li><strong>"Allow all the time"</strong> — the app can access your location at any time, even when you're not using it. Only navigation and delivery apps genuinely need this. Almost every other app that requests it is doing so for data collection.</li>
        <li><strong>"Allow only while using the app"</strong> — location is accessible only when you actively have the app open. This is the right setting for most apps that legitimately need location (weather, maps, restaurant finders).</li>
        <li><strong>"Don't allow"</strong> — the app cannot see your location at all. Most apps work perfectly fine without it.</li>
      </ul>
      <p>Go through this list and ask yourself honestly: does this app need my location to function? A flashlight app does not. A food delivery app does (while using only). Instagram does not. Music apps do not.</p>
      <p><strong>Verdict:</strong> Set nearly everything to "Don't allow" or "While using". Almost no app legitimately needs "All the time".</p>

      <h3>Google Location History (Timeline)</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Location &gt; Location services &gt; Google Location History</span> — or via your Google account at myaccount.google.com &gt; Data &amp; Privacy &gt; Location History</p>
      <p>This is a feature that continuously records everywhere you go and stores it in Google's servers permanently, building a timeline map of your entire life's movements. It is turned on by default if you are signed in to a Google account. This is one of the most invasive features on any consumer device.</p>
      <p>What you lose by turning it off: the "Timeline" feature in Google Maps, which shows you where you've been on a given date. Almost nobody uses this intentionally.</p>
      <p><strong>Verdict: Turn this off immediately.</strong> Tap it, turn it off, and select "Delete all Location History" to erase what's already stored.</p>

      <h3>WiFi and Bluetooth Scanning</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Location &gt; Location services &gt; WiFi scanning</span> and <span class="setting-path">Bluetooth scanning</span></p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Even when WiFi and Bluetooth are disabled in the quick settings panel, Android can continue issuing probe requests for nearby networks and Bluetooth devices. These signals can be detected by commercial tracking beacons in shops and public venues to log your physical presence and movement, even when you believe the radios are off. <br><strong>Plain:</strong> Even when you turn off WiFi and Bluetooth, your phone may keep scanning in the background. Shops and airports can detect these invisible pings and use them to track which aisles you walk through — without you connecting to anything.</div></div>

      <p>Even when you turn WiFi and Bluetooth off in the quick settings panel, Android can continue scanning for nearby networks and devices to improve location accuracy. This means your phone is broadcasting signals that can be detected by shops, venues, and other devices to track your physical movements — even when you think WiFi and Bluetooth are off.</p>
      <p>What you lose: slightly faster WiFi reconnection and more accurate location in areas without GPS signal.</p>
      <p><strong>Verdict:</strong> Turn both off. The accuracy improvement is minor; the tracking risk is real.</p>

      <h2>Category 2: Google Account Data Collection</h2>
      <p>If you're signed in to a Google account on your Android phone (which you almost certainly are), Google collects extensive data about your usage through your account. Here's what to turn off.</p>

      <h3>Web &amp; App Activity</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Google &gt; Manage your Google Account &gt; Data &amp; Privacy &gt; Web &amp; App Activity</span></p>
      <p>This records everything you search, every website you visit in Chrome, every app you use, every voice command you give to Google Assistant, every map route you request, and more — tied permanently to your Google account. Google uses this to build your advertising profile and to "personalise" your experience.</p>
      <p>What you lose: Google's ability to remember your history and use it to make personalised suggestions. For most people this is not a meaningful loss — the suggestions are primarily advertising.</p>
      <p><strong>Verdict: Turn off.</strong> Also click "Manage activity" and delete what's already been stored.</p>

      <h3>YouTube Watch History</h3>
      <p><strong>Where:</strong> Same location — <span class="setting-path">Data &amp; Privacy &gt; YouTube History</span></p>
      <p>Records every video you watch on YouTube. Used to build a detailed profile of your interests, political leanings, and viewing habits.</p>
      <p>What you lose: YouTube's recommendations based on your history. You'll see more generic recommendations instead.</p>
      <p><strong>Verdict:</strong> Turn off. Better yet, use FreeTube (see our accounts article) to watch YouTube without any account at all.</p>

      <h3>Google Assistant Activity</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Google &gt; Google Assistant &gt; General</span></p>
      <p>Google Assistant records your voice commands and stores them in your Google account. You can hear exactly what Google has recorded by going to myactivity.google.com and filtering by "Voice and Audio Activity."</p>
      <p>What you lose: Google Assistant being able to "learn" your preferences over time. Basic Assistant functions still work without this data being stored.</p>
      <p><strong>Verdict:</strong> Turn off voice and audio activity storage. If you don't use Google Assistant at all, consider disabling it entirely: <span class="setting-path">Settings &gt; Apps &gt; Assistant &gt; Disable</span></p>

      <h3>Ad Personalisation / Advertising ID</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Ads</span></p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Android assigns each device a resettable Advertising ID (GAID — Google Advertising ID) — a UUID that advertising SDKs embedded in apps read to correlate your behaviour across apps and build a cross-app profile tied to your device. Deleting the ID removes this persistent cross-app identifier. <br><strong>Plain:</strong> Android gives your phone a secret tracking number that ad companies read from inside every app. When different apps all report the same number, advertisers know it's the same person — you. Deleting this number breaks that link.</div></div>

      <p>Android assigns your device a unique Advertising ID — a code that advertising networks use to track your behaviour across different apps and build a cross-app profile. You can delete this ID entirely (in Android 12 and later) or opt out of personalised advertising (older versions).</p>
      <p>What you lose: Ads that are "relevant" to your interests. You'll still see the same number of ads — they'll just be less targeted. From a privacy standpoint, this is a benefit, not a loss.</p>
      <p><strong>Verdict: Delete the Advertising ID.</strong> Tap "Delete advertising ID" and confirm.</p>

      <h2>Category 3: App Permissions</h2>
      <p>Beyond location, apps can request access to many other sensitive parts of your phone. The Permission Manager lets you see and control all of them.</p>

      <h3>Camera and Microphone</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager &gt; Camera</span> (and Microphone)</p>
      <p>Some apps request camera or microphone access and then use it in unexpected ways. A shopping app doesn't need your microphone. A news app doesn't need your camera. The green indicator dot means you'll always know when they're active — but it's better to prevent access in the first place.</p>
      <p>Android 12+ also gives you quick-toggle buttons in the notification shade to instantly cut off all camera or microphone access system-wide. Use these when you're having a sensitive conversation and don't want any app potentially listening.</p>
      <p><strong>Verdict:</strong> Audit the camera and microphone lists. Revoke access from any app that doesn't obviously need it.</p>

      <h3>Contacts</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager &gt; Contacts</span></p>
      <p>When an app reads your contacts, it doesn't just learn your contacts' names — it learns your entire social network. This data is extremely valuable to data brokers. Social media apps (WhatsApp, Instagram, Twitter/X) routinely request and upload your contact list to their servers, even for contacts who don't use the app.</p>
      <p>What you lose: the app being able to suggest contacts or find friends who also use the service.</p>
      <p><strong>Verdict:</strong> Revoke contacts access from any app that isn't a contacts manager, phone dialler, or messaging app you've actively chosen for contact syncing.</p>

      <h3>Physical Activity / Motion Sensors</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager &gt; Physical activity</span></p>
      <p>This allows apps to read data from your phone's accelerometer, gyroscope, and step counter. Fitness apps legitimately need this. Advertising SDKs embedded in other apps sometimes request it to detect your movement patterns, which can reveal when you're at the gym, at church, or at a bar — without needing GPS.</p>
      <p><strong>Verdict:</strong> Revoke from anything that isn't a fitness or health app.</p>

      <h3>Nearby Devices (Bluetooth)</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager &gt; Nearby devices</span></p>
      <p>Android 12 separated Bluetooth permissions from location. Some apps use Bluetooth scanning to infer your location even without the location permission. Check which apps have this permission and revoke it from any that don't need to connect to physical devices.</p>
      <p><strong>Verdict:</strong> Keep only for apps that genuinely connect to Bluetooth hardware (speakers, headphones, smartwatches).</p>

      <h2>Category 4: Lock Screen and Device Security</h2>

      <h3>Screen Lock Type</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Security &gt; Screen lock</span></p>
      <p>A PIN or password protects your phone from physical access. Important legal note: in many countries (including the UK and USA), you cannot be legally compelled to reveal a PIN or password, but you CAN be compelled to unlock your phone with a fingerprint or face. A PIN provides stronger legal protection in addition to its security benefits.</p>
      <p>Use at least a 6-digit PIN. A longer alphanumeric password is stronger. You can use fingerprint as a convenient day-to-day unlock method while keeping the PIN as the underlying protection (which kicks in after restarts, failed attempts, or five days without use).</p>
      <p><strong>Verdict:</strong> Set a strong PIN or password as your primary lock. Fingerprint is a convenient additional option, but understand its legal limitations.</p>

      <h3>Lock Screen Notifications</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Notifications &gt; Lock screen notifications</span></p>
      <p>By default, Android shows the full content of notifications on the lock screen — meaning anyone who picks up your phone can read your messages, emails, and alerts without unlocking it.</p>
      <p>Options: "Show all content" (default, not private), "Hide sensitive content" (shows the app name but not the message content — good balance), or "Don't show notifications" (most private, least convenient).</p>
      <p><strong>Verdict:</strong> Set to "Hide sensitive content". You'll still see that you have a message; you won't reveal what it says to anyone who glances at your phone.</p>

      <h3>Smart Lock</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Security &gt; Smart Lock</span></p>
      <p>Smart Lock automatically keeps your phone unlocked in "trusted" situations — when connected to a trusted Bluetooth device, when at a trusted location (like your home), or when it detects you're carrying it. The problem: trusted locations are defined by GPS coordinates stored in your Google account, which is a privacy issue. Trusted Bluetooth devices can be spoofed. On-body detection can be tricked by putting the phone in a bag with another moving object.</p>
      <p>What you lose: the convenience of your phone not requiring unlocking at home or in the car.</p>
      <p><strong>Verdict:</strong> Disable Smart Lock. The convenience isn't worth the reduction in physical security.</p>

      <h3>USB Debugging</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Developer options &gt; USB debugging</span></p>
      <p>USB debugging allows a computer connected via USB cable to run commands on your phone and access its data. This is a developer tool and should never be left on in normal use. If someone connects your phone to a computer with USB debugging enabled, they can extract your data even without your PIN.</p>
      <p><strong>Verdict: Keep off</strong> unless you are actively doing app development. Check that Developer Options themselves are also disabled if you don't need them: <span class="setting-path">Settings &gt; System &gt; Developer options &gt; Off</span></p>

      <h2>Category 5: Network and Connectivity</h2>

      <h3>Private DNS</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Private DNS</span></p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> By default, DNS queries on Android use your carrier's resolver over unencrypted UDP. Private DNS (DNS over TLS — DoT) encrypts these lookups using TLS on port 853 and routes them to a specified privacy-respecting resolver, preventing your carrier from logging the domain names you look up. <br><strong>Plain:</strong> Every website name you look up is normally sent to your phone company in the open, like a postcard anyone can read. Private DNS seals those lookups in an envelope so your carrier can't see what websites you're looking up — even if they can still see that you're browsing.</div></div>

      <p>By default, your DNS queries (every website address you look up) go to your mobile carrier's DNS server in plain text. Your carrier can log every domain you visit. Private DNS (DNS over TLS) encrypts these lookups and sends them to a privacy-respecting resolver instead.</p>
      <p>Set to "Private DNS provider hostname" and enter <code>dns.mullvad.net</code>. This routes your DNS queries through Mullvad's no-log DNS resolver, encrypted.</p>
      <p>What you lose: nothing. DNS resolution still works; it's just encrypted and handled by a privacy-respecting server.</p>
      <p><strong>Verdict: Enable.</strong> Enter <code>dns.mullvad.net</code> or <code>dns.quad9.net</code> as the hostname. Zero downside.</p>

      <h3>WiFi Auto-Connect and Remembered Networks</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Internet</span> (tap the three dots or gear icon on saved networks)</p>
      <p>Your phone broadcasts the names of saved WiFi networks when looking to reconnect, which can reveal where you've been (home network name, work network, hotel networks). A malicious access point can also impersonate a trusted network and intercept your traffic.</p>
      <p>Periodically delete saved networks you no longer use. For extra protection, your phone can use randomised MAC addresses when connecting to networks (see below).</p>

      <h3>MAC Address Randomisation</h3>
      <p><strong>Where:</strong> Tap any saved WiFi network under <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Internet</span>, then "Privacy"</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A MAC address (Media Access Control address) is a unique hardware identifier burned into your device's WiFi chip. Without randomisation, this permanent identifier can be used by WiFi access points and network sensors to track your device across different physical locations. Android 10+ supports per-network MAC randomisation, presenting a different randomly generated address to each network. <br><strong>Plain:</strong> Your phone's WiFi chip has a permanent serial number — like a fingerprint — that any WiFi network can see. Without randomisation, shops and networks can track that same number across locations to follow your movements. Randomisation gives each network a different fake number, so they can't track you across places.</div></div>

      <p>Your phone has a unique hardware address (MAC address) for its WiFi radio. Without randomisation, this can be used to track your device across locations. Android 10 and later support randomised MAC addresses — each network gets a different fake address, preventing cross-location tracking.</p>
      <p>Set each network to "Use randomised MAC." Some networks (corporate or school WiFi) may require the real MAC address to connect — in that case, switch to "Use device MAC" for that specific network only.</p>
      <p><strong>Verdict: Enable randomised MAC</strong> for all personal networks.</p>

      <h3>NFC (Near Field Communication)</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Connected devices &gt; Connection preferences &gt; NFC</span></p>
      <p>NFC is used for contactless payments (Google Pay) and tapping devices together to share content. When NFC is on and you're near a malicious NFC reader, it can potentially attempt to read your phone's data or trick it into visiting a URL. The risk is low in everyday life but exists in crowded public spaces.</p>
      <p>What you lose: contactless payments and NFC-based device pairing when the feature is off.</p>
      <p><strong>Verdict:</strong> Turn off when not actively using it. Toggle it on when you want to make a contactless payment, then back off.</p>

      <h2>Category 6: Google Photos and Backup</h2>

      <h3>Google Photos Auto Backup</h3>
      <p><strong>Where:</strong> Google Photos app &gt; Profile picture &gt; <span class="setting-path">Photos settings &gt; Backup</span></p>
      <p>Google Photos automatically uploads every photo and video you take to Google's servers. This includes photos with GPS location data (EXIF), photos of sensitive documents, photos of people, medical images — everything. Google uses your photos to improve its AI models, including facial recognition. The "free storage" offer ended in 2021; you now pay for storage beyond 15 GB.</p>
      <p>What you lose: automatic cloud backup of your photos and the ability to access them from other devices. Alternatives: back up to your own computer using Syncthing, or use a local photo manager.</p>
      <p><strong>Verdict:</strong> Turn off if you don't want Google processing every photo you take. Use Syncthing for privacy-respecting photo sync to your own devices.</p>

      <h3>Google Backup</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; System &gt; Backup</span></p>
      <p>Google's backup system stores a copy of your apps, settings, call history, SMS messages, and some app data on Google's servers. If your phone is lost or replaced, this lets you restore it quickly. The tradeoff: Google holds a snapshot of much of your digital life.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Google Backup encrypts backups, but the encryption key is tied to your Google account credentials — meaning Google can decrypt the backup if compelled to do so. This is different from end-to-end encryption, where only you hold the decryption key and the provider cannot access the plaintext even under a legal order. <br><strong>Plain:</strong> Google does lock your backup, but they hold a spare key. If a court orders them to open it, they can. End-to-end encryption is different — it's like a lock where only you have the only copy of the key. Nobody else can open it, including the company storing it.</div></div>

      <p><strong>Verdict:</strong> This is a genuine tradeoff. If you value restore convenience and trust Google's legal protections, keep it on. If you're concerned about what a court order could reveal, turn it off and use local backups instead.</p>

      <h3>Google Photos Face Grouping</h3>
      <p><strong>Where:</strong> Google Photos app &gt; Profile picture &gt; <span class="setting-path">Photos settings &gt; Group similar faces</span></p>
      <p>Google Photos automatically applies facial recognition to all your photos, identifying which images contain the same person and grouping them. This creates a facial recognition database of your friends and family tied to your Google account.</p>
      <p>What you lose: the ability for Google Photos to organise photos by person.</p>
      <p><strong>Verdict: Turn off.</strong> The feature is convenient but it means Google builds a face database from your personal photos.</p>

      <h2>Category 7: Apps and App Store</h2>

      <h3>Google Play Protect</h3>
      <p><strong>Where:</strong> Google Play Store app &gt; Profile picture &gt; <span class="setting-path">Play Protect</span></p>
      <p>Play Protect scans apps on your device for malware and harmful behaviour. It does send data about app behaviour to Google, but the privacy cost is clearly worth it — malware on your device is a far greater threat than Google knowing your app list. This is one of the few Google data-collection features we recommend keeping on.</p>
      <p><strong>Verdict: Keep on.</strong> The security benefit outweighs the privacy cost.</p>

      <h3>Automatic App Updates</h3>
      <p><strong>Where:</strong> Google Play Store &gt; Profile picture &gt; <span class="setting-path">Settings &gt; Network preferences &gt; Auto-update apps</span></p>
      <p>Keeping apps updated is important for security — updates patch vulnerabilities. The tradeoff is that auto-updates can introduce new privacy-eroding features or change app behaviour without your knowledge.</p>
      <p><strong>Verdict:</strong> Enable auto-updates over WiFi only. Check update changelogs occasionally for apps you consider sensitive.</p>

      <h3>App Install from Unknown Sources</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Apps &gt; Special app access &gt; Install unknown apps</span></p>
      <p>This allows apps to install other apps that didn't come from the Play Store. This is needed for some legitimate purposes (like installing the F-Droid open-source app store) but is also how a lot of Android malware spreads. If you enable it for a specific app (like a file manager or browser), make sure to disable it again afterwards.</p>
      <p><strong>Verdict:</strong> Leave off by default. Enable only for specific trusted apps when needed, then disable again.</p>

      <h2>Category 8: Sensors and System Features</h2>

      <h3>Nearby Share</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Google &gt; Devices &amp; sharing &gt; Nearby Share</span></p>
      <p>Nearby Share lets you wirelessly send files to other Android devices nearby. When it's set to "Everyone" or "Contacts", other devices can see yours even when you're not actively sharing. Set it to "Hidden" or "Your devices" to prevent your phone from being discoverable.</p>
      <p><strong>Verdict:</strong> Set visibility to "Hidden" when not actively using it.</p>

      <h3>Usage &amp; Diagnostics (aka "Send Diagnostics")</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Privacy &gt; Usage &amp; diagnostics</span> (sometimes under Google settings)</p>
      <p>This sends data about how you use your phone — which apps you open, how often, performance metrics, crash reports — to Google. It's framed as helping improve Android, but it means Google receives a detailed log of your daily phone usage patterns.</p>
      <p>What you lose: contributing to Android bug fixes. You'll still benefit from fixes discovered through other users' reports.</p>
      <p><strong>Verdict: Turn off.</strong> The collective benefit to Google's product is real, but so is the privacy cost to you individually.</p>

      <h3>Personalised Ads in Google Services</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Google &gt; Manage your Google Account &gt; Data &amp; Privacy &gt; Ad Settings</span></p>
      <p>Google builds an advertising profile based on everything it knows about you. You can see your profile at adssettings.google.com. You can turn off ad personalisation here — you'll still see ads in Google's services, but they won't be based on your personal profile.</p>
      <p><strong>Verdict:</strong> Turn off. Also review and delete interests Google has incorrectly assigned to you.</p>

      <h2>The Full Comparison Table</h2>
      <p>Use this table as a quick reference. The <strong>Privacy Risk</strong> column shows the risk of leaving the setting at its default (most settings default to the less-private option). The <strong>Functionality Lost</strong> column is honest about what you actually give up by changing it.</p>

      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Default</th>
            <th>Privacy Risk</th>
            <th>Functionality Lost</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Location History</strong><br><small>Settings &gt; Location &gt; Location services</small></td>
            <td>On (if signed in)</td>
            <td><span class="risk risk--critical">&#9679; Critical</span></td>
            <td>Timeline feature in Google Maps. Nothing useful.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off + delete history</span></td>
          </tr>
          <tr>
            <td><strong>Web &amp; App Activity</strong><br><small>Google Account &gt; Data &amp; Privacy</small></td>
            <td>On</td>
            <td><span class="risk risk--critical">&#9679; Critical</span></td>
            <td>Personalised Google search suggestions.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>YouTube Watch History</strong><br><small>Google Account &gt; Data &amp; Privacy</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>YouTube recommendations based on your history.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Advertising ID</strong><br><small>Settings &gt; Privacy &gt; Ads</small></td>
            <td>Active</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>"Relevant" targeted ads. Not a real loss.</td>
            <td><span class="verdict verdict--disable">&#10008; Delete ID</span></td>
          </tr>
          <tr>
            <td><strong>Google Photos Auto Backup</strong><br><small>Google Photos app &gt; Settings</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Automatic cloud photo backup and multi-device access.</td>
            <td><span class="verdict verdict--change">&#9654; Turn off, use Syncthing instead</span></td>
          </tr>
          <tr>
            <td><strong>Face Grouping in Photos</strong><br><small>Google Photos &gt; Settings &gt; Group similar faces</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Photos organised by person/face.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Location permission: Always on</strong><br><small>Settings &gt; Privacy &gt; Permission Manager &gt; Location</small></td>
            <td>Per-app (varies)</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Background location features (mostly advertising).</td>
            <td><span class="verdict verdict--disable">&#10008; Change all to "While using"</span></td>
          </tr>
          <tr>
            <td><strong>WiFi Scanning</strong><br><small>Settings &gt; Location &gt; Location services</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Slightly faster WiFi reconnection indoors.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Bluetooth Scanning</strong><br><small>Settings &gt; Location &gt; Location services</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Slightly faster Bluetooth device reconnection.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Usage &amp; Diagnostics</strong><br><small>Settings &gt; Privacy</small></td>
            <td>On</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>Contributing to Android bug reporting. Others still report.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Contacts Permission (social apps)</strong><br><small>Settings &gt; Privacy &gt; Permission Manager &gt; Contacts</small></td>
            <td>Per-app (varies)</td>
            <td><span class="risk risk--high">&#9679; High</span></td>
            <td>App can suggest contacts and find friends who use it.</td>
            <td><span class="verdict verdict--disable">&#10008; Revoke from social/ad apps</span></td>
          </tr>
          <tr>
            <td><strong>Google Assistant Voice &amp; Audio Activity</strong><br><small>Google Account &gt; Data &amp; Privacy</small></td>
            <td>On</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Assistant learning your preferences over time.</td>
            <td><span class="verdict verdict--disable">&#10008; Turn off</span></td>
          </tr>
          <tr>
            <td><strong>Lock Screen Notifications</strong><br><small>Settings &gt; Notifications &gt; Lock screen</small></td>
            <td>Show all content</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Quick glance at notifications without unlocking.</td>
            <td><span class="verdict verdict--change">&#9654; Set to "Hide sensitive content"</span></td>
          </tr>
          <tr>
            <td><strong>Google Backup</strong><br><small>Settings &gt; System &gt; Backup</small></td>
            <td>On</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Automatic cloud restore when changing phones.</td>
            <td><span class="verdict verdict--optional">&#9679; Your choice — see trade-off above</span></td>
          </tr>
          <tr>
            <td><strong>Smart Lock</strong><br><small>Settings &gt; Security &gt; Smart Lock</small></td>
            <td>Off (usually)</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Phone auto-unlocks at home or in trusted places.</td>
            <td><span class="verdict verdict--disable">&#10008; Keep off / disable if on</span></td>
          </tr>
          <tr>
            <td><strong>NFC</strong><br><small>Settings &gt; Connected devices</small></td>
            <td>On</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Contactless payments and tap-to-share features.</td>
            <td><span class="verdict verdict--change">&#9654; Off when not needed</span></td>
          </tr>
          <tr>
            <td><strong>Nearby Share visibility</strong><br><small>Settings &gt; Google &gt; Devices &amp; sharing</small></td>
            <td>Contacts (visible)</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Others can see your device to send you files.</td>
            <td><span class="verdict verdict--change">&#9654; Set to "Hidden"</span></td>
          </tr>
          <tr>
            <td><strong>Private DNS (DoT)</strong><br><small>Settings &gt; Network &amp; Internet &gt; Private DNS</small></td>
            <td>Off</td>
            <td><span class="risk risk--medium">&#9679; Medium (risk of NOT enabling)</span></td>
            <td>None. This is a pure improvement.</td>
            <td><span class="verdict verdict--keep">&#10004; Enable: dns.mullvad.net</span></td>
          </tr>
          <tr>
            <td><strong>MAC Address Randomisation</strong><br><small>Tap saved WiFi network &gt; Privacy</small></td>
            <td>Randomised (Android 10+)</td>
            <td><span class="risk risk--low">&#9679; Low (if already random)</span></td>
            <td>None on most networks. Some enterprise networks need real MAC.</td>
            <td><span class="verdict verdict--keep">&#10004; Confirm randomised for each network</span></td>
          </tr>
          <tr>
            <td><strong>Camera &amp; Mic Indicators</strong><br><small>Settings &gt; Privacy &gt; Show camera / mic access</small></td>
            <td>On</td>
            <td><span class="risk risk--none">&#9679; N/A — privacy-positive</span></td>
            <td>None. This is a privacy feature.</td>
            <td><span class="verdict verdict--keep">&#10004; Keep on</span></td>
          </tr>
          <tr>
            <td><strong>Play Protect</strong><br><small>Play Store &gt; Play Protect</small></td>
            <td>On</td>
            <td><span class="risk risk--low">&#9679; Low (minor data to Google)</span></td>
            <td>Malware scanning protection. Important security feature.</td>
            <td><span class="verdict verdict--keep">&#10004; Keep on</span></td>
          </tr>
          <tr>
            <td><strong>USB Debugging</strong><br><small>Settings &gt; Developer options</small></td>
            <td>Off</td>
            <td><span class="risk risk--critical">&#9679; Critical (if accidentally left on)</span></td>
            <td>Developer tools. Not needed by ordinary users.</td>
            <td><span class="verdict verdict--keep">&#10004; Keep off always</span></td>
          </tr>
          <tr>
            <td><strong>Screen Lock: PIN/Password</strong><br><small>Settings &gt; Security &gt; Screen lock</small></td>
            <td>Pattern or PIN (varies)</td>
            <td><span class="risk risk--critical">&#9679; Critical (if weak/absent)</span></td>
            <td>None. Slightly slower unlock.</td>
            <td><span class="verdict verdict--keep">&#10004; Set strong 8+ digit PIN</span></td>
          </tr>
          <tr>
            <td><strong>Install Unknown Apps</strong><br><small>Settings &gt; Apps &gt; Special app access</small></td>
            <td>Off</td>
            <td><span class="risk risk--critical">&#9679; Critical (if on)</span></td>
            <td>Installing apps from outside Play Store.</td>
            <td><span class="verdict verdict--keep">&#10004; Keep off except when needed</span></td>
          </tr>
          <tr>
            <td><strong>Physical Activity Permission</strong><br><small>Settings &gt; Privacy &gt; Permission Manager</small></td>
            <td>Per-app (varies)</td>
            <td><span class="risk risk--medium">&#9679; Medium</span></td>
            <td>Step counting and motion detection in non-fitness apps.</td>
            <td><span class="verdict verdict--disable">&#10008; Revoke from non-fitness apps</span></td>
          </tr>
        </tbody>
      </table>

      <h2>Your 30-Minute Privacy Overhaul: Checklist</h2>
      <p>If you want to work through this systematically, here is the sequence that will give you the most improvement in the least time:</p>
      <ol>
        <li><strong>(2 min)</strong> Delete your Advertising ID: <span class="setting-path">Settings &gt; Privacy &gt; Ads &gt; Delete advertising ID</span></li>
        <li><strong>(3 min)</strong> Turn off Location History and Web &amp; App Activity at <strong>myaccount.google.com &gt; Data &amp; Privacy</strong>. While there, turn off YouTube History too.</li>
        <li><strong>(5 min)</strong> Audit app permissions: <span class="setting-path">Settings &gt; Privacy &gt; Permission Manager</span>. Go through Location, Camera, Microphone, and Contacts. Revoke anything that doesn't make obvious sense.</li>
        <li><strong>(1 min)</strong> Turn off WiFi and Bluetooth scanning: <span class="setting-path">Settings &gt; Location &gt; Location services</span></li>
        <li><strong>(1 min)</strong> Enable Private DNS: <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Private DNS</span>. Enter <code>dns.mullvad.net</code></li>
        <li><strong>(1 min)</strong> Change lock screen notifications to "Hide sensitive content": <span class="setting-path">Settings &gt; Notifications &gt; Lock screen</span></li>
        <li><strong>(2 min)</strong> Turn off face grouping in Google Photos and review auto-backup settings.</li>
        <li><strong>(2 min)</strong> Turn off Usage &amp; Diagnostics: <span class="setting-path">Settings &gt; Privacy &gt; Usage &amp; diagnostics</span></li>
        <li><strong>(5 min)</strong> Open the Privacy Dashboard (<span class="setting-path">Settings &gt; Privacy &gt; Privacy Dashboard</span>) and review what's been accessing your hardware in the last 24 hours. Revoke anything suspicious.</li>
        <li><strong>(5 min)</strong> Check and confirm your PIN is strong. If you're using a short PIN or pattern, change it now.</li>
      </ol>
      <p>These ten steps don't require any special apps or technical knowledge — they're all built into Android and take about 30 minutes to complete. Done together, they dramatically reduce the data your phone shares with Google, advertisers, and app developers, without meaningfully affecting how you use your phone day-to-day.</p>

      <div class="callout callout--warn">
        <span class="callout__icon">&#128204;</span>
        <div><strong>Going further:</strong> The most significant improvement beyond these settings is switching to <strong>GrapheneOS</strong> — a privacy-focused version of Android that removes Google services entirely and has a much stronger security model. It runs on Google Pixel phones. This is an advanced step, but it eliminates the entire category of Google data collection at the source. See <strong>grapheneos.org</strong> for more information.</div>
      </div>
    `
  },
  {
    id: 'linux-privacy-security',
    title: 'Top 10 Linux Distributions for Privacy and Security (Plus 5 Mainstream Alternatives)',
    category: 'Operating Systems',
    date: '2026-05-20',
    readTime: '15 min read',
    excerpt: 'A comprehensive guide to the most secure and private Linux operating systems available today, and how the mainstream options compare.',
    tags: ['Linux', 'Privacy', 'Security', 'Operating Systems'],
    platforms: ['Linux'],
    relatedReviews: ['grapheneos', 'tails', 'qubes-os', 'librewolf', 'tor-browser', 'luks', 'veracrypt', 'metadata-cleaner', 'bleachbit', 'keepassxc', 'flatpak', 'firejail', 'ufw', 'nextdns'],
    content: `
      <h2>Why Linux for Privacy and Security?</h2>
      <p>Windows and macOS are built by massive corporations whose business models often involve collecting data or locking you into their ecosystems. Linux is different. It is an open-source operating system kernel, meaning its code is public and can be inspected by anyone. Because of this, it has spawned hundreds of "distributions" (different versions of Linux), many of which are designed specifically to protect your privacy and security.</p>
      
      <h2>Top 10 Privacy and Security Distributions</h2>
      
      <h3>1. Tails (The Amnesic Incognito Live System)</h3>
      <p>Tails is the gold standard for anonymous browsing and leaving no trace on the computer you use.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Tails is an amnesic system that runs entirely from RAM and routes all internet traffic through the Tor network. On shutdown, all RAM is overwritten, leaving no forensic footprint on the host machine's physical storage.<br><strong>Plain:</strong> Tails is an operating system that forgets everything the moment you turn it off. It runs from a USB stick, sends all your internet traffic through a disguised network, and leaves zero trace on your computer.</div></div>
      
      <h3>2. Qubes OS</h3>
      <p>If Tails is about hiding your identity, Qubes is about unbreakable security on your own computer.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Qubes OS uses a bare-metal hypervisor (Type-1) to isolate hardware controllers and user applications into strictly confined Virtual Machines (qubes), mitigating the impact of software exploitation.<br><strong>Plain:</strong> Qubes puts every app in its own locked, soundproof box. If a hacker breaks into your web browser, they are trapped in that box and can't reach your personal files or other apps.</div></div>

      <h3>3. Whonix</h3>
      <p>Whonix is designed specifically to guarantee that your real IP address is never leaked, even if you are hacked.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Whonix uses a dual-VM architecture (a Gateway VM running Tor and a Workstation VM for the user) where the Workstation is physically incapable of accessing the external network directly, preventing IP leaks via malware.<br><strong>Plain:</strong> Whonix splits your computer in two. One side does your work, the other handles the internet. Because the working side can't talk to the internet directly, a virus can't accidentally reveal who you are.</div></div>

      <h3>4. Kali Linux</h3>
      <p>Kali is a famous operating system built specifically for "penetration testing" — legally hacking systems to find weaknesses. It comes pre-loaded with hundreds of security tools. It's not meant for daily use, but for actively testing security.</p>

      <h3>5. Parrot OS (Security Edition)</h3>
      <p>Similar to Kali, Parrot OS is loaded with security testing tools, but it is much more lightweight and includes specialized privacy tools for anonymous web surfing. It strikes a better balance for people who also want to use their hacking laptop for normal browsing.</p>

      <h3>6. Kodachi</h3>
      <p>Kodachi is a specialized system that heavily prioritizes anti-forensics. It routes all traffic through a VPN, then through Tor, and finally uses DNS encryption. It includes a "panic room" feature to instantly wipe the RAM if you feel you are compromised.</p>

      <h3>7. Alpine Linux</h3>
      <p>Alpine is designed for servers and advanced users who want the smallest, most secure foundation possible.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Alpine uses musl libc and BusyBox instead of standard GNU utilities, and compiles all user-space binaries as Position Independent Executables (PIE) with stack smashing protection, reducing the attack surface significantly.<br><strong>Plain:</strong> Alpine is stripped down to the bare minimum. Because there are fewer parts, there are fewer places for hackers to break in. It's like a fortress with only one heavily guarded door instead of a house with twenty windows.</div></div>

      <h3>8. BlackArch Linux</h3>
      <p>BlackArch is an expansion for Arch Linux aimed at security researchers. It contains over 2,800 tools for testing network and computer security. Like Kali, it is highly specialized and not recommended for beginners.</p>

      <h3>9. PureOS</h3>
      <p>PureOS is one of the few operating systems officially endorsed by the Free Software Foundation. It refuses to include any closed-source, proprietary software or drivers, guaranteeing that every line of code running on your computer can be audited by the community.</p>

      <h3>10. Fedora Silverblue</h3>
      <p>Silverblue represents the future of secure desktop Linux.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Fedora Silverblue utilizes an immutable root filesystem, meaning the core OS files are read-only and updated atomically. Applications are installed and run strictly via Flatpak containers.<br><strong>Plain:</strong> Silverblue locks the core of your computer so that it cannot be changed or infected. You can install apps, but they run in separate, secure bubbles that can't mess with the rest of the system.</div></div>

      <h2>5 Mainstream Linux Distributions Compared</h2>
      <p>Not everyone wants to run a specialized, highly restricted system. If you just want a normal daily-driver computer, here is how the mainstream Linux options fare regarding privacy and security.</p>

      <h3>1. Linux Mint</h3>
      <p>Linux Mint is arguably the best starting point for a Windows user. It looks familiar, is very stable, and completely respects your privacy. It collects no telemetry (data about how you use your computer) by default and works flawlessly out of the box.</p>

      <h3>2. Fedora Workstation</h3>
      <p>Fedora is backed by Red Hat and is an excellent balance of up-to-date software and strong security.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Fedora implements SELinux (Security-Enhanced Linux) by default, providing a Mandatory Access Control (MAC) system that dictates exactly what files and network resources every application is allowed to access.<br><strong>Plain:</strong> Fedora uses a strict bouncer for every app. Even if an app has permission to run, the bouncer ensures it can only touch the exact files it was designed to touch, and nothing else.</div></div>

      <h3>3. Debian</h3>
      <p>Debian is the grandfather of many Linux distributions (including Ubuntu and Mint). It is famously stable because it heavily tests its software before releasing it. From a privacy perspective, it is flawless, as it is entirely community-run and non-profit.</p>

      <h3>4. Arch Linux</h3>
      <p>Arch is a "do it yourself" operating system. You start with a black screen and build exactly the system you want. It can be incredibly secure and private, but only if you have the technical knowledge to configure it yourself. It is not recommended for beginners.</p>

      <h3>5. Ubuntu</h3>
      <p>Ubuntu is the most popular Linux distribution, but it has the most controversial privacy history.</p>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Ubuntu previously included Amazon affiliate tracking in its search, and currently pushes Snap packages which run from a centralized, proprietary backend controlled by Canonical, raising telemetry and user-autonomy concerns.<br><strong>Plain:</strong> Ubuntu is easy to use, but the company behind it has a history of adding tracking features and forcing users into their own closed-off app store. It's much better than Windows, but not the most private Linux option.</div></div>

      <h2>Verdict</h2>
      <p>For the absolute highest level of privacy and anonymity, use <strong>Tails</strong> or <strong>Whonix</strong> on a USB drive. For unbreakable security through isolation on your main computer, use <strong>Qubes OS</strong>. For everyday use that still respects your privacy infinitely more than Windows or macOS, start with <strong>Linux Mint</strong> or <strong>Fedora Workstation</strong>.</p>

      <h2>Essential Privacy Tools for Any Linux Distribution</h2>
      <p>You don't need to switch to a highly specialized distribution to achieve a fantastic level of privacy. Mainstream distributions like Linux Mint or Fedora can be hardened with standard, free tools.</p>
      
      <h3>🌐 Web Browsing & Anonymity</h3>
      <ul>
        <li><strong>LibreWolf</strong>: A custom version of Firefox stripped of all telemetry and pre-configured for maximum tracking protection out of the box.</li>
        <li><strong>Tor Browser</strong>: The gold standard for total online anonymity and hiding your true location.</li>
      </ul>

      <h3>🔒 Device & File Security</h3>
      <ul>
        <li><strong>LUKS</strong>: Full-disk encryption that locks down your entire hard drive so no one can access your data if your computer is stolen. Usually configured during installation.</li>
        <li><strong>VeraCrypt</strong>: Creates securely encrypted folders or USB drives for highly sensitive documents.</li>
      </ul>

      <h3>🧹 Local Data Cleaning</h3>
      <ul>
        <li><strong>Metadata Cleaner (MAT2)</strong>: Strips hidden tracking info (like GPS coordinates, time stamps, and camera models) from photos and PDFs before you share them.</li>
        <li><strong>BleachBit</strong>: Deep-cleans your system by shredding temporary files, caches, and tracking cookies.</li>
      </ul>

      <h3>🔑 Credentials</h3>
      <ul>
        <li><strong>KeePassXC</strong>: A powerful password manager that keeps your encrypted password vault entirely offline and on your own machine.</li>
      </ul>

      <h3>🛡️ App Isolation</h3>
      <ul>
        <li><strong>Flatpak / Firejail</strong>: Sandboxing tools that restrict what permissions an application has. They act like bouncers, preventing apps from digging through your personal files or accessing the internet without permission.</li>
      </ul>

      <h3>🛡️ Network Security</h3>
      <ul>
        <li><strong>UFW (Uncomplicated Firewall)</strong>: A simple way to block unwanted incoming connections to your computer.</li>
        <li><strong>NextDNS / DNS-over-TLS</strong>: Encrypts your DNS requests to stop your internet service provider from logging every website you visit.</li>
      </ul>
    `
  },
  {
    id: 'bittorrent-explained',
    title: 'The Case for BitTorrent: Privacy, Legitimate Uses, and Trackerless File Sharing',
    category: 'Privacy Tools',
    date: '2026-05-20',
    readTime: '12 min read',
    excerpt: 'BitTorrent is often misunderstood. Learn how peer-to-peer file sharing offers unique privacy benefits and how to use it safely without centralized trackers.',
    tags: ['Privacy', 'BitTorrent', 'P2P', 'Decentralization'],
    platforms: ['Windows', 'macOS', 'Linux'],
    relatedReviews: ['onionshare', 'wormhole', 'qbittorrent', 'transmission'],
    content: `
      <h2>The Misunderstanding of BitTorrent</h2>
      <p>When most people hear the word "torrent," they immediately think of piracy. But BitTorrent is just a technology — a way of moving data from one place to another. It is a decentralized, peer-to-peer (P2P) protocol. Instead of downloading a file from one central server (like downloading a video from YouTube), you download small pieces of the file from dozens or hundreds of other people who already have it, while simultaneously sharing the pieces you have with others.</p>
      
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> The BitTorrent protocol divides files into pieces and distributes them across a "swarm" of peers. A client downloads missing pieces from multiple "seeders" (peers with the complete file) and "leechers" (peers with incomplete files) while concurrently uploading pieces it has acquired.<br><strong>Plain:</strong> Instead of getting a whole book from a single library, you get one page from Bob, one page from Alice, and one page from Charlie. While you are reading page one, you let Dave copy it from you. Everyone helps everyone else get the full book faster.</div></div>
      
      <p>Because of this efficiency, torrenting has incredibly important legitimate uses. It is how large open-source operating systems (like Linux distributions) are distributed to save server costs. It is used by scientists to share massive academic datasets. The Internet Archive uses it to distribute millions of public domain books, movies, and audio files. Even game companies like Blizzard have used P2P technology to distribute game updates.</p>

      <h2>Privacy and Resilience Advantages of P2P</h2>
      <p>Downloading files the "normal" way from a central server has a significant privacy flaw: that server knows exactly who you are (your IP address) and exactly what you are downloading. They can log this information, sell it, or be forced to hand it over.</p>
      <p>BitTorrent changes the dynamic. Because the network is decentralized, there is no single master server recording every download. Furthermore, P2P networks are incredibly resilient against censorship. If a government or corporation wants to take down a file hosted on a central server, they just unplug the server. To take down a torrent, they would have to find and unplug the computers of every single person in the swarm worldwide — which is practically impossible.</p>

      <h2>Trackerless Torrenting: The Ultimate Decentralization</h2>
      <p>Historically, torrents relied on "trackers."</p>
      
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A tracker is an HTTP/HTTPS or UDP server that coordinates communication between peers. It maintains a list of IP addresses of clients in the swarm but does not host the file data itself.<br><strong>Plain:</strong> A tracker is like a telephone directory. It doesn't have the file you want, but it tells your computer the phone numbers of all the other computers that do have the file.</div></div>
      
      <p>Trackers are a weak point. If the tracker goes offline, the swarm can't find new peers. If a malicious entity runs the tracker, they can log the IP addresses of everyone looking for a file. To solve this, the BitTorrent protocol evolved to support "trackerless" torrenting using two key technologies: DHT and PEX.</p>

      <h3>DHT (Distributed Hash Table)</h3>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> DHT (specifically the Mainline DHT based on Kademlia) is a decentralized distributed system that provides a lookup service similar to a hash table. Nodes store routing information, allowing peers to discover each other without relying on a centralized tracker.<br><strong>Plain:</strong> Instead of having one giant telephone directory on a server, DHT chops the directory up and gives a tiny piece to every single user. When you need to find someone, your computer asks its neighbours, who ask their neighbours, until the right person is found. The users <em>are</em> the tracker.</div></div>

      <h3>PEX (Peer Exchange)</h3>
      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> PEX is an extension to the BitTorrent protocol that allows a client to exchange lists of known peers directly with connected peers, significantly reducing the load on trackers and DHT nodes.<br><strong>Plain:</strong> Once you connect to Alice, you ask her, "Who else do you know that has this file?" She gives you a list of her friends, and you connect to them directly.</div></div>

      <h3>Magnet Links</h3>
      <p>To use trackerless torrenting, you typically use a "magnet link" instead of downloading a <code>.torrent</code> file. A <code>.torrent</code> file is a physical file you download from a website. A magnet link is just a short line of text containing a unique fingerprint (a hash) of the file you want. When you click a magnet link, your torrent software uses DHT to shout into the decentralized network: "Does anyone have a file with this fingerprint?" The network responds, and the download begins completely independent of any central website.</p>

      <h2>Tools for Trackerless Torrenting</h2>
      <p>To torrent securely and privately, you need the right software. Avoid closed-source, ad-supported clients like uTorrent or BitTorrent Web, as they often contain tracking software themselves.</p>
      <ul>
        <li><strong>qBittorrent:</strong> The community favorite. It is free, completely open-source, contains zero advertisements, and has DHT and PEX enabled by default.</li>
        <li><strong>Transmission:</strong> An excellent, lightweight, open-source alternative, particularly popular on macOS and Linux.</li>
      </ul>
      <p>In both of these programs, you can check the settings (usually under "BitTorrent" or "Privacy") to ensure that "Enable DHT (Distributed Hash Table)" and "Enable Peer Exchange (PeX)" are checked. Once they are, you are participating in a truly decentralized, censorship-resistant network.</p>
    `
  },
  {
    id: 'privacy-vs-convenience',
    title: 'Privacy vs. Functionality: Where Do You Actually Draw the Line?',
    category: 'Basics',
    date: '2026-05-21',
    readTime: '17 min read',
    excerpt: 'Every privacy tool asks you to give something up. This is a clear-eyed look at the real trade-offs — so you can make deliberate decisions instead of reflexive ones.',
    tags: ['privacy', 'convenience', 'analysis', 'basics'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['signal', 'brave', 'firefox', 'librewolf', 'tor-browser', 'bitwarden', 'keepassxc', 'mullvad', 'protonmail', 'simplelogin', 'duckduckgo', 'ublock-origin', 'nextdns', 'organic-maps', 'grapheneos'],
    content: `
      <p>Every privacy tool has a cost. Sometimes it's time. Sometimes it's money. Sometimes it's that a website breaks and you spend ten minutes figuring out why. The privacy world is bad at admitting this — there's a tendency to present every recommendation as obviously worth doing, and to gloss over the genuine friction involved.</p>
      <p>This article doesn't do that. We're going to go through the real trade-offs, category by category, so you can make deliberate choices instead of either doing nothing or going all-in on a hardened setup you'll abandon in a week.</p>
      <p>The goal of good privacy isn't maximum privacy. It's the right privacy — the amount that matches your actual situation, your real risks, and your honest tolerance for friction.</p>

      <h2>The Foundational Idea: Your Threat Model</h2>
      <p>Security professionals use a term called a <strong>threat model</strong>. It sounds technical but the idea is simple: who are you protecting yourself from, and what are you trying to prevent? Your answers determine how much friction is worth accepting.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A threat model is a structured analysis of potential adversaries, their capabilities, and the assets you want to protect. It allows you to identify which countermeasures are proportionate to the actual risk, and which involve costs that exceed the benefit given your specific circumstances. <br><strong>Plain:</strong> Ask yourself: who might actually want my data, and what could they do with it? A teenager worried about a parent reading their messages has a very different problem than a journalist protecting a source. Matching your tools to your real situation is smarter than just using every tool available.</div></div>

      <p>For most people, the adversary is not a government agency. It is advertising companies, data brokers, and the occasional hacker targeting thousands of people at once rather than you specifically. This threat profile is very real and worth defending against — but it doesn't require the same tools as a journalist working in an authoritarian state. Calibrating your defences to your actual threat model is what separates a useful privacy setup from an exhausting one.</p>

      <h2>Category 1: Browsers — The Biggest Bang Per Effort</h2>
      <p>Your browser is the most exposed surface of your digital life. It handles communication, identity, financial transactions, and more. It is also, fortunately, the category where the best privacy tools impose the least friction.</p>

      <p><strong>What you give up with Brave:</strong> Almost nothing. Brave looks and behaves exactly like Chrome. The same extensions work. The same websites work. The learning curve is nearly zero. The built-in cryptocurrency features can be completely ignored. The one caveat is that Brave's strictest fingerprint protection (set to "Strict") can occasionally cause minor layout issues on some websites — you click the Brave "Shields" icon and disable it for that site, which takes five seconds.</p>

      <p><strong>What you give up with hardened Firefox:</strong> About fifteen minutes to configure it, and occasional friction on websites optimised specifically for Chrome. The Firefox experience on some media-heavy or banking sites can feel slightly less polished. The trade-off is that Firefox has no advertising revenue motive and runs on a completely independent codebase that Google cannot control.</p>

      <p><strong>What you give up with LibreWolf:</strong> Slightly more frequent updates (LibreWolf lags behind official Firefox by a few days), and possibly some more frequent breakage on edge-case websites because its defaults are stricter. The gain is that you get Firefox fully hardened without any configuration work at all.</p>

      <p><strong>What you give up with Tor Browser:</strong> Speed, streaming, and most logged-in browsing. Tor is slow by design — traffic routes through three separate computers worldwide. Sites occasionally block it. You cannot use your personal accounts without destroying the anonymity entirely. This tool has a specific, important use case: anonymous browsing of sensitive content. It is not a daily driver.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Tor's multi-hop routing increases latency by 200–500ms on average and reduces effective bandwidth by roughly 60–80% compared to a direct connection. Exit node IP blocking by services like Cloudflare and streaming platforms further limits usability for authenticated browsing. <br><strong>Plain:</strong> Tor is meaningfully slower than regular browsing because your request has to travel through three computers in different countries before reaching the website. Most streaming services won't work. It's the right tool for sensitive research — not for watching videos or checking your email.</div></div>

      <p><strong>The verdict on browsers:</strong> Switching from Chrome to Brave is the highest-value, lowest-friction privacy action available. If you also install uBlock Origin, you've covered the vast majority of browser-based tracking with minimal lifestyle change. Tor is for specific use cases, not everyday browsing.</p>

      <h2>Category 2: Search Engines — Smaller Trade-Off Than You Think</h2>
      <p>Google is the most powerful data collector in the world for a reason: it has the best search results. Switching to a private alternative means asking: how often do you actually need Google's edge, and what does that edge cost you?</p>

      <p>DuckDuckGo has improved dramatically over the past five years. For everyday searches — recipes, directions, product names, news — it returns excellent results. The gap narrows considerably when you're searching for something highly technical, deeply niche, or very recent, where Google's index size and ranking sophistication genuinely outperform alternatives.</p>

      <p>A practical compromise used by many privacy-aware people: set DuckDuckGo as your default, and on the rare searches where results are genuinely insufficient, add <code>!g</code> to the query. DuckDuckGo's "bangs" feature forwards the search directly to Google. You use Google's results when you need them, but the baseline is private.</p>

      <h2>Category 3: Messaging — The High-Stakes Category</h2>
      <p>This is where the privacy versus convenience calculation gets most interesting, because the friction isn't technical — it's social. Signal is technically superior to WhatsApp in almost every privacy dimension. The problem is that you cannot unilaterally switch. Your contacts have to be on Signal too.</p>

      <p><strong>What you give up with Signal:</strong> The convenience of a single app where all your contacts already are. You'll have two messaging apps for a while — Signal for the people you've convinced, WhatsApp or iMessage for everyone else. This is genuinely annoying. There is no technical solution to it; it's a network effect problem.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> Signal uses the Signal Protocol (Double Ratchet + X3DH), providing forward secrecy and break-in recovery that WhatsApp's implementation lacks in practice due to cloud backup behaviour. Specifically, WhatsApp's end-to-end encryption is broken by default for most users because chat backups to Google Drive and iCloud are not end-to-end encrypted unless explicitly enabled. <br><strong>Plain:</strong> Signal encrypts everything from the start. WhatsApp says it does too — but most people's WhatsApp messages are automatically backed up to Google or Apple's servers, completely unencrypted, which defeats the encryption entirely. Signal has no such loophole.</div></div>

      <p>The pragmatic approach: use Signal for conversations where content actually matters — health issues, financial discussions, relationship problems, work conversations you'd prefer not to have permanently recorded. Use whatever works for everything else. Even partial adoption gives real protection for real conversations.</p>

      <h2>Category 4: Email — The Category With the Worst Trade-Offs</h2>
      <p>Email is, bluntly, a fundamentally broken medium for private communication. This is not a problem that any provider — not even ProtonMail — can fully solve, because of how email was designed decades ago.</p>

      <p>The most important thing to understand: <strong>email metadata is always visible</strong>. Even perfectly encrypted emails show who sent them, who received them, and when. If you're exchanging sensitive information, Signal is the right tool — not email. No email provider in existence can hide the fact that you emailed a particular person at a particular time.</p>

      <p><strong>What you give up with ProtonMail over Gmail:</strong> Gmail's integration with the rest of Google's ecosystem (Calendar, Drive, Meet). Some of ProtonMail's advanced features (custom domains, more storage) require a paid plan. The interface is slightly less polished than Gmail. The upside is that Proton cannot read your emails — ever — because they don't have the decryption key.</p>

      <p><strong>What SimpleLogin adds:</strong> A layer of email aliases so your real address is never exposed to services you sign up for. The friction is that you have a slightly more complex email setup and you manage aliases. The gain is that you can tell which services leak or sell your email, and you can silently delete that alias without affecting anything else.</p>

      <h2>Category 5: VPNs — The Most Misunderstood Category</h2>
      <p>VPNs are widely marketed as a comprehensive privacy solution. They are not. A VPN moves the trust: instead of trusting your internet provider not to log your traffic, you trust the VPN provider. If the VPN logs your traffic, you've gained nothing. If they are legally compelled to hand over logs, your traffic is exposed.</p>

      <p>What a VPN does genuinely well is specific and limited. It hides your traffic from your internet service provider. It hides your real IP address from websites. It prevents the network you're on (like public WiFi at a coffee shop) from intercepting your connections. These are real, useful protections in specific situations.</p>

      <p><strong>What you give up with Mullvad:</strong> Typically 10–20% slower browsing speeds due to encryption overhead. Monthly cost (€5/month, paid with cash or cryptocurrency for full anonymity). Occasional incompatibility with streaming services that block VPN IP ranges. Some websites add CAPTCHA challenges to VPN exit addresses.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><strong>Technical:</strong> A VPN encrypts all traffic between your device and the VPN server and routes it through the provider's IP address. This protects against ISP-level monitoring and local network interception (e.g., on public WiFi). However, HTTPS already encrypts the content of your traffic — the primary thing a VPN adds is hiding which domains you visit from your ISP, and masking your IP from destination servers. <br><strong>Plain:</strong> A VPN is useful for hiding what websites you visit from your internet provider, and for protecting yourself on public WiFi. It is not a magic shield — the VPN company can see everything your internet provider used to see. Choose a VPN you trust more than your internet provider.</div></div>

      <h2>Category 6: Password Managers — Near-Zero Trade-Off</h2>
      <p>This is the easiest category to assess: there is almost no meaningful downside to using a password manager. The friction is entirely front-loaded — you spend time setting it up and migrating your passwords. After that, logging in is <em>easier</em> than before because the manager fills in your credentials automatically.</p>

      <p>The main concern people have is: "what if someone gets my master password?" The answer is that this one strong password is far easier to protect than fifty weak, reused ones. The alternative — reusing passwords — guarantees that a breach of any one service compromises every account you have. A password manager with a strong master password and two-factor authentication enabled is categorically safer than the alternative.</p>

      <p>Bitwarden imposes almost no trade-off for most users. KeePassXC imposes a small trade-off: you manage your own backups, and syncing to your phone requires some extra setup. The benefit is that your passwords never leave your devices — no company, no server, no potential breach.</p>

      <h2>Category 7: Maps and Navigation — The Trade-Off Is Real</h2>
      <p>This is one of the honest categories. Google Maps is genuinely excellent — it has the most comprehensive transit data, the most accurate business hours, the most up-to-date traffic, and the most reliable address database in the world. Privacy alternatives exist, but they are genuinely less capable in some ways.</p>

      <p>Organic Maps (based on OpenStreetMap data) has excellent walking and cycling navigation, strong offline functionality, and no tracking whatsoever. In cities with good OpenStreetMap coverage, it works well for most purposes. Where it falls short is transit routing and live traffic in places with incomplete map data.</p>

      <p>OsmAnd is more powerful and more configurable, with better transit support, but has a steeper learning curve than either Google Maps or Organic Maps.</p>

      <p><strong>The honest verdict:</strong> If you live in a major city and mostly walk, cycle, or drive, Organic Maps covers you well. If you heavily rely on real-time transit information or live somewhere with limited OpenStreetMap data, Google Maps remains more capable and the trade-off is real. Compartmentalisation works here: use the private option for routine routes, and accept the tracking cost for situations where you genuinely need the superior data.</p>

      <h2>Category 8: Mobile Operating Systems — The Largest Trade-Off</h2>
      <p>GrapheneOS is the most private Android experience available. It removes all Google services, runs each app in a hardened sandbox, and has a verified boot chain that detects tampering. It requires a Google Pixel phone. It requires manual installation. It means that apps requiring Google Play Services — which includes a significant number of banking apps, some corporate apps, and some government apps — will not work at all unless you specifically configure GrapheneOS's sandboxed Play compatibility layer.</p>

      <p>This is a large trade-off. It is not the right choice for most people. But knowing it exists matters: if you ever need that level of phone security — for professional reasons, for travel to certain countries, for personal risk assessment — the option exists and works well.</p>

      <p>For regular users, the most impactful actions are not a different operating system but the application of good settings on the phone you already have. Revoking unnecessary app permissions, disabling advertising IDs, turning off location for apps that don't need it, and using Signal for sensitive conversations collectively provide substantial protection with minimal friction.</p>

      <h2>A Practical Framework for Making Decisions</h2>
      <p>Instead of asking "should I do everything on this list?" try asking three questions for each tool:</p>

      <ol>
        <li><strong>What does this tool protect me from?</strong> Be specific. "From being tracked by ad networks" is specific. "From hackers" is not.</li>
        <li><strong>Is that threat real for me?</strong> Most people are targeted by mass advertising surveillance, not targeted attacks. Some people have specific professional or personal circumstances that change this.</li>
        <li><strong>What does the tool cost me in practice, not in theory?</strong> Read a review. Try it for a week. Measure the actual friction, not the imagined friction.</li>
      </ol>

      <h2>The Changes With the Best Trade-Off</h2>
      <p>If we ranked every action on this site by the ratio of privacy gained to friction cost, a short list emerges consistently:</p>

      <ul>
        <li><strong>Install uBlock Origin</strong> — the highest impact, zero ongoing friction, works with any browser</li>
        <li><strong>Switch to Brave</strong> — near-identical Chrome experience, immediate fingerprinting and tracker blocking</li>
        <li><strong>Use Bitwarden</strong> — front-loaded setup cost, makes login <em>easier</em> afterwards, eliminates credential stuffing risk</li>
        <li><strong>Switch Signal for important conversations</strong> — doesn't require abandoning WhatsApp, just adding Signal for specific use cases</li>
        <li><strong>Enable two-factor authentication on email and banking</strong> — five minutes once, prevents a large category of account takeovers</li>
      </ul>

      <p>These five actions cover the majority of common-threat privacy risks for most people, and none of them require significant ongoing effort after the initial setup.</p>

      <h2>The Changes Worth Doing If You Have Higher Stakes</h2>
      <p>If your situation involves professional sensitivity, travel, activism, journalism, or personal circumstances that raise your risk profile, the following additions are proportionate:</p>

      <ul>
        <li><strong>Mullvad VPN</strong> — particularly useful when travelling or using public networks</li>
        <li><strong>ProtonMail + SimpleLogin</strong> — email that Proton can't read, plus alias management to limit exposure</li>
        <li><strong>NextDNS</strong> — blocks tracking at the DNS level for every app on your device, not just your browser</li>
        <li><strong>LibreWolf or hardened Firefox</strong> — maximum browser privacy without switching to Tor</li>
        <li><strong>Tor Browser for specific research</strong> — when what you're looking at is itself sensitive</li>
      </ul>

      <h2>The Honest Bottom Line</h2>
      <p>Privacy and convenience exist on a spectrum, not as opposites. The privacy tools that impose the heaviest friction are the ones designed for the most extreme threat models — and most people don't have those threat models. The tools designed for everyday use have improved dramatically in the past decade and now impose remarkably little friction for remarkably strong protection.</p>

      <p>The right approach is not to implement everything and burn out. It is to understand the trade-offs clearly, implement the high-value low-friction changes immediately, and make deliberate decisions about the rest based on your actual situation. Knowledge is the prerequisite. You now have it.</p>
    `
  }
];

export default ARTICLES;
