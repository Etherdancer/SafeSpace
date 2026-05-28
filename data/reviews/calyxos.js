export default {
  id: 'calyxos',
  website: 'https://calyxos.org',
  index: 207,
  name: 'CalyxOS',
  tagline: 'Privacy Android for Pixel — Google-free by default.',
  category: 'Custom ROM',
  scores: {
      dataPrivacy: 27,
      security: 28,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 93
    },
    externalScores: {
      playStore: 4.5,
    },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review; maintained by the Calyx Institute (a non-profit)',
  relatedArticles: [],
  verdict: 'One of the best privacy Android ROMs available — removes Google by default, includes microG for compatibility, and is backed by a non-profit.',
  pros: [
    'Removes all Google apps and services by default',
    'Includes microG for optional app compatibility without full Google Play',
    'Built-in firewall, VPN kill switch, and encrypted DNS',
    'Backed by the Calyx Institute, a US non-profit',
    'Verified boot remains enabled — keeps your device tamper-resistant',
  ],
  cons: [
    'Only officially supports Google Pixel devices and a handful of others',
    'Requires unlocking the bootloader, which is not beginner-friendly',
    'Some banking and DRM-dependent apps may not work without microG',
    'Slightly behind GrapheneOS in pure security hardening',
  ],
  content: `
    <h2>Why CalyxOS?</h2>
    <p>Android ships with Google baked in. Not just the apps — the whole operating system is designed to communicate with Google servers, send usage data, and serve you ads. CalyxOS strips all of that out and replaces it with a clean, privacy-respecting Android that you control.</p>
    <p>It is maintained by the Calyx Institute, a non-profit — meaning there is no business model that depends on your data.</p>

    <h2>How it works</h2>
    <p>CalyxOS is a full Android replacement — called a custom ROM — that you install on a supported device. It is built from Android Open Source Project (AOSP) code with Google's proprietary layers removed and privacy-focused defaults applied. Instead of Google Services, it ships with microG — an open-source reimplementation that lets some Google-dependent apps run without contacting Google.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Think of your normal Android phone as a house Google built for you — rent-free, but they kept a spare key. CalyxOS tears down that house and builds a new one from the same bricks, except this time you own every key.</div></div>

    <h2>Built-in privacy tools</h2>
    <p>CalyxOS includes a system-level firewall (based on Datura Firewall), DNS-over-HTTPS support, a VPN kill switch, and the free Calyx VPN built in. These are not optional add-ons — they are part of the OS. You do not need to install third-party apps to get basic privacy controls.</p>

    <h2>microG: compatibility without the cost</h2>
    <p>Many Android apps silently require Google Play Services to run. microG replaces those services with an open-source version that does not send your data to Google. It is a middle ground — you get compatibility with more apps while still avoiding Google's data collection.</p>

    <h2>Verdict</h2>
    <p>CalyxOS is an excellent choice for anyone serious about Android privacy who owns a supported Pixel device. It is easier to set up than GrapheneOS for users who want microG compatibility, and the non-profit backing means you are not trading Google for another commercial interest.</p>
  `
};
