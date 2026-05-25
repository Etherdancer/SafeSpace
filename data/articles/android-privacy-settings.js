export default {
    id: 'android-privacy-settings',
    index: 5,
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Even when you turn off WiFi and Bluetooth, your phone may keep scanning in the background. Shops and airports can detect these invisible pings and use them to track which aisles you walk through — without you connecting to anything. Technically, Android can continue issuing probe requests for nearby networks and Bluetooth devices even when the radios appear disabled, and these signals can be detected by commercial tracking beacons in shops and public venues to log your physical presence and movement.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Android gives your phone a secret tracking number that ad companies read from inside every app. When different apps all report the same number, advertisers know it's the same person — you. Technically, this is the Android Advertising ID (GAID — Google Advertising ID), a UUID that advertising SDKs embedded in apps read to correlate your behaviour across apps and build a cross-app profile tied to your device. Deleting this number breaks that link.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every website name you look up is normally sent to your phone company in the open, like a postcard anyone can read. Technically, standard DNS queries on Android use your carrier's resolver over unencrypted UDP. Private DNS (DNS over TLS — DoT) encrypts these lookups using TLS on port 853 and routes them to a specified privacy-respecting resolver, preventing your carrier from logging the domain names you look up. It seals those lookups in an envelope so your carrier can't see what websites you're looking up — even if they can still see that you're browsing.</div></div>

      <p>Set to "Private DNS provider hostname" and enter <code>dns.mullvad.net</code>. This routes your DNS queries through Mullvad's no-log DNS resolver, encrypted.</p>
      <p>What you lose: nothing. DNS resolution still works; it's just encrypted and handled by a privacy-respecting server.</p>
      <p><strong>Verdict: Enable.</strong> Enter <code>dns.mullvad.net</code> or <code>dns.quad9.net</code> as the hostname. Zero downside.</p>

      <h3>WiFi Auto-Connect and Remembered Networks</h3>
      <p><strong>Where:</strong> <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Internet</span> (tap the three dots or gear icon on saved networks)</p>
      <p>Your phone broadcasts the names of saved WiFi networks when looking to reconnect, which can reveal where you've been (home network name, work network, hotel networks). A malicious access point can also impersonate a trusted network and intercept your traffic.</p>
      <p>Periodically delete saved networks you no longer use. For extra protection, your phone can use randomised MAC addresses when connecting to networks (see below).</p>

      <h3>MAC Address Randomisation</h3>
      <p><strong>Where:</strong> Tap any saved WiFi network under <span class="setting-path">Settings &gt; Network &amp; Internet &gt; Internet</span>, then "Privacy"</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your phone's WiFi chip has a permanent serial number — like a fingerprint — that any WiFi network can see. Without randomisation, shops and networks can track that same number across locations to follow your movements. Technically, a MAC address (Media Access Control address) is a unique hardware identifier burned into your device's WiFi chip, and Android 10+ supports per-network MAC randomisation, presenting a different randomly generated address to each network so they can't track you across places.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Google does lock your backup, but they hold a spare key. If a court orders them to open it, they can. Technically, Google Backup encrypts backups with a key tied to your Google account credentials — meaning Google can decrypt the backup if compelled to do so. This is different from end-to-end encryption, where only you hold the decryption key and the provider cannot access the plaintext even under a legal order — like a lock where only you have the only copy of the key.</div></div>

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
  };
