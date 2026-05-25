export default {
    id: 'grapheneos',
    website: 'https://grapheneos.org',
    index: 18,
    name: 'GrapheneOS',
    tagline: 'Android without Google — maximum mobile privacy',
    category: 'Operating Systems',
    scores: {
      dataPrivacy: 30,
      security: 30,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 100
    },
    platforms: ['Google Pixel 6 and newer'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Security researchers worldwide; used by high-risk individuals',
    relatedArticles: ['smartphone-hardening', 'android-privacy-settings', 'privacy-vs-convenience'],
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

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>GrapheneOS takes Android — the open version without Google's additions — and makes it much more secure. Google's apps and data-collection software are gone. You get a working smartphone that doesn't report to Google by default. If you need Google apps, they run in a restricted box with very limited access to the rest of your phone. Technically: GrapheneOS is an Android Open Source Project (AOSP) fork with significant security hardening — a hardened memory allocator (hardened_malloc), stronger verified boot enforcement, per-app network and sensor permissions, hardened WebView, and no Google Mobile Services in the base OS. It supports running sandboxed Google Play in an unprivileged compatibility layer.</div></div>

      <h2>Hardware Requirements</h2>
      <p>GrapheneOS officially supports only <strong>Google Pixel phones</strong> (currently Pixel 6 and newer). While it may seem ironic to buy a Google phone to de-Google your life, Pixel phones contain a custom security chip (Titan M2) and allow users to lock the bootloader with custom encryption keys. Most other Android manufacturers do not allow this level of hardware security while running a custom operating system.</p>

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
  };
