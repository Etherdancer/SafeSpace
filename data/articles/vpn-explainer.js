export default {
    id: 'vpn-explainer',
    index: 9,
    title: 'VPNs: What They Protect (And What They Don\'t)',
    category: 'Networks',
    date: '2025-04-25',
    readTime: '13 min read',
    excerpt: 'VPNs are sold as a complete privacy solution. They\'re not — but they do solve specific, real problems. This honest guide tells you exactly when a VPN helps and when it doesn\'t.',
    tags: ['vpn', 'network', 'privacy'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['mullvad', 'ivpn', 'portmaster', 'adguard', 'blokada'],
    content: `
      <h2>What a VPN Actually Is</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>A VPN is like a sealed, addressed envelope that you hand to your internet provider. They can see you sent an envelope, but they can't read what's inside or where it's really going. Technically, a VPN (Virtual Private Network) creates an encrypted tunnel between your device and a remote server — all your internet traffic is routed through this tunnel, destination websites see the VPN server's IP address rather than yours, and your ISP sees only an encrypted stream to the VPN server, not the sites you visit.</div></div>

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
      <p><em>Note:</em> If your main goal is simply to block ads and trackers across your entire device (rather than hiding your IP address from websites), tools like <strong>Portmaster</strong> (for PC), <strong>Blokada</strong> (for mobile), or <strong>AdGuard</strong> are often better, faster solutions than a full VPN.</p>

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
        <li>Has its servers in countries with intrusive surveillance laws (USA, UK, Australia, Canada, New Zealand — the "Five Eyes" alliance)</li>
      </ul>

      <h2>Our Recommendations: Mullvad VPN and IVPN</h2>
      <p><strong>Mullvad</strong> is the VPN we recommend most frequently. It costs a flat €5 per month — no upsells, no annual-plan tricks, no complicated tiers. Here's what makes it different:</p>
      <ul>
        <li>You don't need to provide an email address, name, or any personal information to sign up. You receive a random account number.</li>
        <li>You can pay with cash (posted to their office), cryptocurrency, or card — anonymous payment is explicitly supported.</li>
        <li>Their servers were physically seized by Swedish police in 2023. The police found nothing, because Mullvad's RAM-only servers contain no logs at all. This is proof, not just a promise.</li>
        <li>Their client software is open source and has been independently audited multiple times.</li>
        <li>They are based in Sweden and do not cooperate with mass surveillance programmes.</li>
      </ul>
      <p>Another excellent, highly-trusted option with a very similar privacy architecture is <strong>IVPN</strong>. Like Mullvad, IVPN requires no personal data to sign up, supports cash payments, operates transparently, and has undergone regular independent security audits.</p>

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
  };
