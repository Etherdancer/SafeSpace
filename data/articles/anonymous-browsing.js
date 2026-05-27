export default {
    id: 'anonymous-browsing',
    index: 12,
    title: 'How to Browse Anonymously: A Practical Guide',
    category: 'Browsers',
    date: '2025-03-28',
    readTime: '15 min read',
    excerpt: 'True anonymity online is genuinely difficult. But meaningful, practical privacy is available to everyone. This guide walks through a realistic, layered approach — starting with the simplest steps.',
    tags: ['anonymity', 'tor', 'browser', 'privacy'],
    platforms: ['Windows', 'macOS', 'Linux'],
    relatedReviews: ['brave', 'firefox', 'tor-browser', 'ublock-origin', 'mullvad', 'duckduckgo', 'searxng', 'startpage', 'tails', 'onion-browser', 'privacy-badger', 'noscript'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>HTTPS (the padlock icon) keeps the contents of your browsing private — nobody can read the page. But your internet provider can still see which sites you visit. A VPN hides that from your provider. Tor hides it even better by bouncing your traffic through three computers so nobody can tell both who you are and where you're going. Technically, HTTPS encrypts the content of traffic between your browser and a website (TLS encryption), but the destination domain is still visible to your ISP via DNS queries and TLS SNI (Server Name Indication); a VPN hides the destination from your ISP by routing all traffic through the VPN server; and Tor provides stronger anonymity by routing traffic through three relays with layered encryption, so no single party knows both the source and destination.</div></div>

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
      <p>Whichever you choose, install <strong>uBlock Origin</strong> as an extension (instructions in the fingerprinting article). This is non-negotiable — it blocks thousands of tracking scripts that browsers alone don't catch. If you want further control, you can also add <strong>Privacy Badger</strong> (which learns to block invisible trackers automatically) or <strong>NoScript</strong> (a powerful but advanced tool that blocks all active scripts by default).</p>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every time you type a website address, your computer secretly looks it up in a phone book to find the actual address. Normally that lookup is sent in the open — your internet provider can read every name you look up. Technically, standard DNS queries travel in plain text over UDP port 53, making them readable by your ISP and any network observer. DNS over HTTPS (DoH) locks that lookup in an envelope so your provider can't see what's inside, by wrapping these queries in TLS-encrypted HTTPS connections sent to a privacy-respecting resolver.</div></div>

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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Instead of your internet request going directly from you to a website (like a straight road), Tor bounces it through three separate computers in different countries, each knowing only the previous and next stop — never the whole route. The website only sees the last computer, not you. And everyone who uses Tor Browser looks the same to websites, so you blend into the crowd. Technically, Tor (The Onion Router) routes each connection through three volunteer-operated relays with traffic encrypted in layers — each relay decrypts only its own layer and knows only the previous and next hop, while the destination server sees only the exit relay's IP address. All Tor Browser users share the same browser fingerprint by design, providing a large anonymity set.</div></div>

      <p>Tor (The Onion Router) is a network that routes your internet traffic through three separate volunteer-run servers (called "relays" — volunteer-run computers that pass your traffic along) around the world before it reaches its destination. Each relay only knows the step before it and the step after it — no single relay knows both where the traffic came from and where it's going. This makes it extraordinarily difficult to trace traffic back to you.</p>
      <p>The Tor Browser is a hardened version of Firefox that automatically uses the Tor network. Every user of Tor Browser has an identical fingerprint by design, preventing fingerprinting. It is the tool of choice for journalists, activists, whistleblowers, and anyone who genuinely needs to hide their browsing from a serious adversary.</p>
      <p>The tradeoff: Tor is significantly slower than normal browsing, because your traffic is bouncing through three servers around the world. Streaming video and downloads are impractical. Some websites block Tor exit nodes. For ordinary browsing of text-based content, it works well.</p>
      <p><strong>Note for iPhone Users:</strong> Apple's rules prevent the official Tor Browser from existing on iOS. If you are on an iPhone or iPad, use <strong>Onion Browser</strong>, which is open-source and officially endorsed by the Tor Project.</p>
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
  };
