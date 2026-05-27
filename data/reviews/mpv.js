export default {
    id: 'mpv',
    website: 'https://mpv.io',
    index: 276,
    name: 'mpv',
    tagline: 'No-frills media player for people who know what they want',
    category: 'Media Player',
    scores: {
      dataPrivacy: 30,
      security: 26,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 95
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; no formal third-party audit',
    relatedArticles: [],
    verdict: 'mpv is an elite, no-telemetry media player — minimal by design, powerful in practice, private by default.',
    pros: [
      'Absolutely zero telemetry or network calls during playback',
      'Scriptable and highly configurable via plain text config files',
      'Excellent video quality with advanced rendering (gpu-next)',
      'Lightweight — minimal resource use',
      'Open source under GPL',
    ],
    cons: [
      'No graphical interface by default — keyboard-driven',
      'Steep learning curve for configuration',
      'No mobile version',
      'Not beginner-friendly',
    ],
    content: `
      <h2>Why mpv?</h2>
      <p>mpv started as a fork of MPlayer and mplayer2. It is not trying to be a pretty media centre. It is trying to be the best at actually playing video — with the highest quality output, the lowest resource overhead, and zero interference.</p>
      <p>It has no home screen. No recently played list syncing to a cloud. No update nag screen. You open a file. It plays. You close it.</p>

      <h2>How private is it?</h2>
      <p>mpv makes no network connections during playback at all. There is no update checker running in the background, no crash reporting, no usage metrics. The outbound network footprint is zero by design. You can verify this with a network monitor — mpv is silent.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>mpv has no idea you are using it. It does not know what files you play, when you play them, or how long you watch. It is software that keeps its eyes on the screen and its mouth shut.</div></div>

      <h2>Video quality</h2>
      <p>mpv uses a GPU-accelerated rendering pipeline called vo=gpu-next that applies high-quality scaling algorithms. For high-resolution content or upscaling lower-resolution video, this makes a visible difference. It also supports HDR, wide colour gamut displays, and frame interpolation through shader scripts.</p>

      <h2>Scripting and configuration</h2>
      <p>mpv is configured by editing a plain text file. Every behaviour can be changed: keyboard shortcuts, subtitle styling, video filters, streaming quality, default tracks. Lua scripts can automate complex behaviour — skip intros, automatically load external subtitles, control playback from your phone via a local web interface.</p>
      <p>This flexibility is a strength for power users and an obstacle for everyone else.</p>

      <h2>Verdict</h2>
      <p>mpv is the media player for people who care deeply about both privacy and video quality. It requires some configuration investment upfront. Once set up, it becomes the last media player you will ever install.</p>
    `
  };
