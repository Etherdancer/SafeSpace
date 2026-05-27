export default {
    id: 'browser-fingerprinting',
    index: 7,
    title: 'Why Your Browser Is Leaking Your Identity',
    category: 'Browsers',
    date: '2025-05-10',
    readTime: '14 min read',
    excerpt: 'Even without cookies, websites can identify you with startling precision through a technique called browser fingerprinting. Here\'s how it works — and exactly how to stop it.',
    tags: ['fingerprinting', 'tracking', 'browser'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['brave', 'firefox', 'tor-browser', 'ublock-origin', 'nextdns', 'cover-your-tracks'],
    content: `
      <h2>The Invisible Name Tag You Don't Know You're Wearing</h2>
      <p>Imagine walking into a shop where the staff can't see your face or know your name — but they can tell it's you because of the exact combination of your height, your accent, the brand of your shoes, the watch on your wrist, and the way you hold your bag. Nobody else in the world has that exact combination. So every time you walk in, they know it's you.</p>
      <p>That's browser fingerprinting. Every time you visit a website, your browser quietly shares dozens of tiny technical details about your device and setup. Individually, each detail is unremarkable. Together, they form a pattern so unique that you can be identified and tracked across the internet — with no cookies, no login, and no warning.</p>
      <p>This isn't a hypothetical threat. It's happening right now, on millions of websites, to virtually everyone reading this.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Websites run a tiny invisible test on your device when you load a page. Your browser tells them things like your screen size, your fonts, and how your graphics chip draws shapes. Technically, this works by collecting browser attributes — User-Agent string, screen resolution, timezone, installed fonts, Canvas API rendering output, WebGL renderer info, AudioContext fingerprint, and hardware concurrency — and hashing them into a near-unique identifier that persists across sessions without any client-side storage. Put all that together and it's as unique as a fingerprint — no cookie needed.</div></div>

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
      <p>A 2014 study by researchers at Princeton University found that canvas fingerprinting could uniquely identify a large proportion of browsers tested. Combine that with everything else in the list above, and you have a near-perfect identifier.</p>

      <h2>Why Incognito Mode Doesn't Save You</h2>
      <p>This is one of the biggest misconceptions in online privacy. Incognito mode (also called "Private Browsing" in Firefox and Safari) does exactly one thing: it stops your browser from saving your history, cookies, and form data <em>locally on your device</em>. It doesn't change anything about how your browser appears to websites.</p>
      <p>Your screen resolution is the same in incognito mode. Your installed fonts are the same. Your graphics card renders canvas drawings identically. Your fingerprint is completely unchanged. A website that fingerprints you in regular mode will recognise you in incognito mode without any difficulty at all.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Going incognito is like wearing a disguise that only hides things from the person sitting next to you — not from the website you're visiting. Technically, incognito mode suppresses local storage of cookies, history, and form data, but does not alter the browser's User-Agent string, rendering engine properties, or hardware attributes — the exact signals used for fingerprinting. Your browser still looks exactly the same to any site that's fingerprinting you.</div></div>

      <p>Private mode is useful for things like using someone else's computer without leaving your history behind, or stopping your partner from seeing what birthday present you Googled. It is not a privacy tool in any meaningful sense.</p>

      <h2>Test Your Own Fingerprint Right Now</h2>
      <p>You can see how unique your browser fingerprint is by visiting the Electronic Frontier Foundation's free tool: <strong>Cover Your Tracks</strong> (coveryourtracks.eff.org). Click "Test Your Browser" and it will show you a report of your fingerprint and whether you are protected, partially protected, or fully trackable. Most people are shocked by the result.</p>
      <p>If the tool says your fingerprint is "unique among the browsers it has seen," that means any website using fingerprinting can identify you with complete certainty — no cookies needed.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Websites can tell it's you by reading dozens of tiny technical details about your device — like a doctor identifying a patient from an X-ray rather than a name tag. Technically, this works by building a stable cross-session identifier by collecting browser attributes without setting any cookies or using any client-side storage. Clearing your cookies or going incognito does nothing about this because none of those details change.</div></div>

      <h2>How to Protect Yourself</h2>
      <p>The key insight is this: you can't make your fingerprint disappear. But you <em>can</em> make it look identical to thousands of other people. The goal is to blend in, not to hide. Here are the three best approaches, from easiest to most thorough.</p>

      <h2>Option 1: Switch to Brave Browser (Easiest)</h2>
      <p>Brave is a free browser that looks and works very much like Chrome — it even supports the same extensions — but it has fingerprint protection built in by default. Instead of reporting your real canvas rendering, fonts, and audio data, Brave introduces tiny, random variations each time a website checks. The result looks plausible, but it's different from session to session, making consistent tracking impossible.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time a website tries to read your device's "fingerprint," Brave feeds it slightly different fake readings. Technically, Brave applies randomised noise to Canvas, WebGL, and AudioContext fingerprinting APIs on a per-session, per-origin basis — each site receives a slightly different but plausible set of values, breaking stable cross-site fingerprint correlation. The site can't build a consistent ID for you because the readings change each time.</div></div>

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
      <p><strong>Note for Chrome users:</strong> Google has made changes to Chrome (called "Manifest V3") that permanently weaken how content blockers work in Chrome. uBlock Origin's full functionality will remain available in Firefox indefinitely. This is one more reason to consider switching to Firefox or Brave.</p>

      <h2>The Honest Bottom Line</h2>
      <p>If you do nothing else after reading this article, install Brave or install uBlock Origin on your current browser. Either action immediately makes you significantly harder to track. If you want the strongest protection available without slowing down your browsing, use Brave or Firefox with the settings above and uBlock Origin installed. If you need the absolute maximum privacy for genuinely sensitive browsing, use the Tor Browser — which we cover in our anonymous browsing guide.</p>
      <p>The surveillance industry spends enormous resources developing fingerprinting precisely because cookie-blocking has become common. The good news is that the tools to fight back are free, easy to install, and just as effective.</p>
    `
  };
