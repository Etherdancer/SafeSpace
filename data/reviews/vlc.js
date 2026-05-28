export default {
    id: 'vlc',
    website: 'https://www.videolan.org/vlc/',
    index: 275,
    name: 'VLC',
    tagline: 'Plays everything, tracks nothing, costs nothing',
    category: 'Media Player',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 16,
      userControl: 9,
      transparency: 10,
      total: 86
    },
    externalScores: {
      appStore: 3.7,
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; regular CVE patching; no formal single third-party audit',
    relatedArticles: [],
    verdict: 'VLC is the most trusted media player in the world — it plays everything, collects nothing, and has no agenda.',
    pros: [
      'Plays virtually every audio and video format without codecs to install',
      'Zero ads, zero tracking, zero account required',
      'No network calls during normal playback',
      'Open source since 2001, maintained by a non-profit',
      'Available on every major platform including mobile',
    ],
    cons: [
      'UI is functional but not modern',
      'Some reported security vulnerabilities over the years (patched promptly)',
      'No built-in media library or smart playlist features',
    ],
    content: `
      <h2>Why VLC?</h2>
      <p>Most media players come with strings attached. Windows Media Player is tied to Microsoft. Apple's apps are tied to Apple. Plex and similar streaming tools require accounts and phone home constantly. VLC has no strings. It is a non-profit project — VideoLAN — that exists purely to play media files.</p>
      <p>It has been around since 2001. It has been downloaded over 5 billion times. It works on everything. And it has never once tried to sell you something or track where you click.</p>

      <h2>How private is it?</h2>
      <p>VLC makes no network connections during normal media playback. It does not send usage statistics. It does not check what files you are playing. The only optional network activity is checking for updates — which can be disabled. That is the entire outbound footprint.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>VLC is like a DVD player from 1998 — it plays whatever disc you put in and does absolutely nothing else. No internet. No account. No company watching what you watch.</div></div>

      <h2>Format support</h2>
      <p>VLC handles almost every format imaginable: MKV, MP4, AVI, MOV, FLAC, MP3, AAC, Blu-ray, DVDs, network streams, podcasts, radio streams. You do not install separate codecs. VLC ships with everything it needs.</p>

      <h2>Security record</h2>
      <p>Over two decades, VLC has had security vulnerabilities — that is unavoidable for software that parses complex, untrusted media files. The VideoLAN team has consistently patched them promptly. Keep VLC updated. Do not open media files from untrusted sources if you are concerned, as malformed files are the most common attack vector.</p>

      <h2>Verdict</h2>
      <p>VLC is the standard recommendation for media playback — and has been for over 20 years. Free, private, open source, and works on every platform. Install it once and forget every other media player exists.</p>
    `
  };
