export default {
  id: 'lineageos',
  website: 'https://lineageos.org',
  index: 208,
  name: 'LineageOS',
  tagline: 'Open-source Android for hundreds of devices.',
  category: 'Custom ROM',
  scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    externalScores: {
      appStore: 4.6,
      playStore: 4.1,
    },
  platforms: ['Android'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'The most widely supported privacy Android ROM — it runs on hundreds of devices — but requires more manual hardening than alternatives like CalyxOS or GrapheneOS.',
  pros: [
    'Supports hundreds of Android devices — the widest compatibility of any ROM',
    'Fully open source and community maintained',
    'Removes Google apps and services',
    'Extends the useful life of older devices',
    'Privacy Guard feature gives per-app permission control',
  ],
  cons: [
    'Does not enable verified boot on many devices — a real security trade-off',
    'No microG or alternative Google services included by default',
    'Security update speed varies by device and maintainer',
    'Requires more technical knowledge to set up safely',
  ],
  content: `
    <h2>Why LineageOS?</h2>
    <p>LineageOS supports an enormous range of devices — hundreds of phones and tablets — including many that their original manufacturers stopped updating years ago. If you have an older Android phone and want to run a clean, Google-free operating system, LineageOS might be the only option that supports your hardware.</p>
    <p>It also keeps older devices useful instead of forcing upgrades, which is better for your wallet and the environment.</p>

    <h2>How it works</h2>
    <p>LineageOS is a community-maintained fork of Android built from AOSP code. Google's proprietary apps and services are removed. You can optionally add a Google Apps package (called GApps) if you want Google Play, but most privacy-focused users skip this entirely and use F-Droid or Aurora Store instead.</p>
    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Android is like a city built by Google. LineageOS takes the city's roads, buildings, and infrastructure — all the public stuff — and builds a new city without Google's private buildings in the middle. The streets look the same, but the city hall belongs to you now.</div></div>

    <h2>Privacy Guard</h2>
    <p>LineageOS includes Privacy Guard, a system feature that lets you control exactly which permissions each app has. You can block access to your location, contacts, camera, or microphone on a per-app basis — without rooting your phone or installing extra software.</p>

    <h2>The verified boot trade-off</h2>
    <p>Many devices supported by LineageOS cannot run with verified boot enabled. Verified boot is a security feature that checks your OS has not been tampered with every time your phone starts. Without it, a sophisticated attacker who gets physical access could modify the OS without you knowing. This is a real security weakness compared to GrapheneOS or CalyxOS on Pixel devices. For most threat models, this is acceptable — but it is worth knowing.</p>

    <h2>Verdict</h2>
    <p>LineageOS is the best choice when your device is not supported by more privacy-hardened ROMs. It gives you a clean, Google-free Android on a huge range of hardware. For maximum security, CalyxOS or GrapheneOS on a Pixel is better — but if your phone is not a Pixel, LineageOS is likely your best option.</p>
  `
};
