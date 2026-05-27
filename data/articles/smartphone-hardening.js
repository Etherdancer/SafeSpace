export default {
    id: 'smartphone-hardening',
    index: 10,
    title: 'Hardening Your Smartphone in 10 Steps',
    category: 'Mobile',
    date: '2025-04-15',
    readTime: '18 min read',
    excerpt: 'Your phone knows where you\'ve been, who you talk to, what you buy, and what you search for. These 10 practical steps — with exact instructions for iPhone and Android — dramatically reduce what gets collected.',
    tags: ['mobile', 'android', 'ios', 'hardening'],
    platforms: ['iOS', 'Android'],
    relatedReviews: ['signal', 'bitwarden', 'grapheneos', 'mullvad', 'osmand', 'invidious', 'standard-notes', 'joplin', 'calyxos', 'lineageos', 'f-droid', 'aurora-store', 'trackercontrol', 'blokada', 'dnscloak', 'rethinkdns', 'netguard', 'openboard'],
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
      <p><strong>Advanced blocking:</strong> If you want to stop apps from connecting to the internet entirely, or block hidden trackers inside apps, you can use a local firewall. On Android, tools like <strong>NetGuard</strong>, <strong>TrackerControl</strong>, or <strong>Blokada</strong> run locally on your phone to physically block tracking connections.</p>

      <h2>Step 2: Disable Your Advertising ID</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your phone has a secret ID number that advertisers read from inside apps. When App A and App B both send this number to an ad network, that network knows it was you in both apps — and builds a profile of your interests across everything you do. Technically, every smartphone OS assigns a resettable advertising identifier (IDFA on iOS, GAID on Android) — a unique code that advertising SDKs embedded in apps use to correlate your activity across different apps and build a cross-app behavioural profile without needing cookies. Deleting this ID breaks that link.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Encryption scrambles everything saved on your phone. If someone steals it or seizes it, they see nothing but nonsense unless they know your PIN. Technically, full-disk encryption uses AES-256 (or similar) to encrypt all data stored on the device's flash storage — without the correct PIN or password to derive the decryption key, the stored data is unreadable even by someone with physical access to the hardware. Think of it like a combination lock on every file.</div></div>

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
      
      <h2>Step 6.5: Ditch the Google Play Store (Android Only)</h2>
      <p>If you use Android, you don't have to get your apps directly from Google. You can use <strong>F-Droid</strong>, a completely free, open-source app store that guarantees every app it hosts is tracker-free and open-source. For apps that aren't on F-Droid, you can use the <strong>Aurora Store</strong>, which lets you download apps from the Google Play Store anonymously without needing a Google account.</p>

      <h2>Step 7: Switch to Signal for Messaging</h2>
      <p>Regular text messages (SMS) are not encrypted. Your mobile carrier can read every SMS you send. iMessage is encrypted only between Apple devices — messages to Android users fall back to unencrypted SMS. WhatsApp uses encryption but is owned by Meta (Facebook's parent company) and collects extensive metadata about who you talk to and when.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>"End-to-end encrypted" means the message is scrambled on your phone and only unscrambled on the recipient's phone. Nobody in between — not Signal, not your phone company, not a hacker — can read it. It's like sealing a letter so only the recipient can open it. Technically, Signal uses the Signal Protocol — a double-ratchet algorithm providing forward secrecy and break-in recovery — for end-to-end encryption of all messages and calls, meaning only the sender and recipient can decrypt the content.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you type a website address, your phone first asks a directory service what the address really is. Normally your phone company can see every website name you look up — this is because DNS (Domain Name System) lookups travel in plain text to your mobile carrier's DNS server by default. Encrypted DNS (DNS over HTTPS or DNS over TLS) puts that lookup in a sealed box — your carrier knows you looked something up, but not what — and routes it to a privacy-respecting resolver your carrier can't read.</div></div>

      <p>Every time you visit a website, your phone first looks up the website's address by contacting a DNS server — like looking someone up in a phone book. By default, this lookup goes to your mobile carrier's DNS server, and it's unencrypted, which means your carrier can see every website you visit (by name) even if the content of your browsing is encrypted. Switching to a privacy-respecting encrypted DNS resolver prevents this.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; General &gt; VPN &amp; Device Management</strong>.</li>
        <li>Tap <strong>DNS</strong>. If you see this option, select "Configure DNS" and choose "Manual." Add <code>9.9.9.9</code> (Quad9, a non-profit DNS that doesn't log your queries and blocks known malicious domains).</li>
        <li>Alternatively, install the free <strong>Mullvad DNS</strong> app or <strong>DNSCloak</strong> from the App Store to easily route your queries through an encrypted resolver.</li>
      </ol>
      <p><strong>On Android:</strong></p>
      <ol>
        <li>Go to <strong>Settings &gt; Network &amp; Internet &gt; Private DNS</strong>.</li>
        <li>Select <strong>"Private DNS provider hostname"</strong>.</li>
        <li>Enter <code>dns.mullvad.net</code> and tap Save. Your DNS queries are now encrypted and handled by Mullvad's no-log DNS resolver.</li>
        <li>For more advanced control, you can install <strong>RethinkDNS</strong>, which acts as both an encrypted DNS resolver and an app firewall.</li>
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
      <p>These steps cover what's practical for most people. If you want to go further, there are three major actions you can take:</p>
      <ul>
        <li><strong>Change your keyboard:</strong> Your keyboard app sees everything you type. Replacing Google's Gboard with an open-source, internet-free keyboard like <strong>HeliBoard (OpenBoard)</strong> stops your keystrokes from being analyzed.</li>
        <li><strong>Use an alternative OS:</strong> The most significant action you can take on Android is switching to a custom ROM. <strong>GrapheneOS</strong> is the gold standard (for Pixel devices), completely stripped of Google services. <strong>CalyxOS</strong> is a slightly more user-friendly alternative that also de-Googles your phone. For older phones, <strong>LineageOS</strong> provides a clean, open-source experience without the built-in tracking of stock Android.</li>
      </ul>
    `
  };
