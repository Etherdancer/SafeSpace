export default {
    id: 'user-accounts-and-privacy',
    index: 6,
    title: 'The Account Problem: How Sign-Ups Track You — And What to Use Instead',
    category: 'Basics',
    date: '2025-05-18',
    readTime: '20 min read',
    excerpt: 'Creating an account ties everything you do to a permanent, detailed profile. Here\'s what that really means for your privacy — and a practical guide to account-free alternatives for every major category of app.',
    tags: ['accounts', 'alternatives', 'tracking', 'basics'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['duckduckgo', 'organic-maps', 'jitsi-meet', 'syncthing', 'obsidian', 'protonmail', 'simplelogin', 'signal', 'freetube', 'keepassxc', 'invidious', 'searxng', 'startpage', 'matrix', 'nextcloud', 'sync-com', 'cryptpad', 'proton-calendar', 'notesnook', 'etesync'],
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

          <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>"Zero-knowledge" means the company holds your data but can't read it — like a storage unit where only you have the key. Even if someone breaks into the warehouse, all they find are locked boxes they can't open. Technically, zero-knowledge encryption means the service provider encrypts your data using a key derived from your password on your device, so the server only ever holds encrypted ciphertext — the company mathematically cannot decrypt your data because they never receive the key.</div></div>

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
      <p>If you absolutely need traditional cloud storage (where your files live on a server so you can access them anywhere without your main computer being on), look at <strong>Nextcloud</strong> (which you can self-host or rent from a privacy provider) or <strong>Sync.com</strong> (which offers zero-knowledge encryption so they cannot read your files).</p>
      <p>For collaborative document editing (like Google Docs), <strong>CryptPad</strong> offers an end-to-end encrypted alternative that requires no account to use basic features.</p>
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
        <li><strong>Notesnook</strong> — A great alternative with zero-knowledge encryption out of the box, offering a very similar experience to Evernote but fully private.</li>
        <li><strong>Standard Notes (standardnotes.com)</strong> — Free tier available, no account required to try it locally, end-to-end encrypted sync. Even the company cannot read your notes.</li>
      </ul>
      <p><strong>Getting started with Obsidian (no account needed):</strong></p>
      <ol>
        <li>Go to <strong>obsidian.md</strong> and click Download. Choose your operating system.</li>
        <li>Install and open Obsidian. It will ask you to choose a folder on your computer where your notes will be stored — this is your "vault." Create a new folder called "Notes" somewhere you'll remember.</li>
        <li>You're in. Click the page icon on the left sidebar to create a new note. Type your note. It saves automatically as a plain text file in your vault folder.</li>
        <li>On mobile: search for "Obsidian" in the App Store or Play Store. Install it. Tap "Create new vault" and name it. Your notes are stored on your phone's storage, not in the cloud.</li>
      </ol>

      <h2>Calendars & Contacts: Replace Google Calendar/Contacts</h2>
      <p><strong>The problem:</strong> Storing your schedule and address book with Google gives them a map of who you know and where you'll be at any given time.</p>
      <p><strong>Privacy-friendly alternatives:</strong></p>
      <ul>
        <li><strong>Proton Calendar</strong> — End-to-end encrypted calendar that integrates well with Proton Mail. The company cannot read your schedule.</li>
        <li><strong>EteSync</strong> — Specifically designed to securely sync your contacts, calendars, and tasks across Android, iOS, and desktop using end-to-end encryption.</li>
      </ul>

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
  };
