export default {
    id: 'oversight',
    website: 'https://objective-see.org/products/oversight.html',
    index: 236,
    name: 'OverSight',
    tagline: 'Alerts you when your webcam or mic turns on',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 96
    },
    platforms: ['macOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A simple, brilliant tool to protect against spyware secretly watching or listening to you.',
    pros: [
      'Tells you exactly which app is using your microphone or camera',
      'Lets you block the camera/mic access instantly',
      'Completely free and open-source'
    ],
    cons: [
      'Only available for macOS',
      'Legitimate video calls will trigger a popup you have to dismiss'
    ],
    content: `
      <h2>Why OverSight?</h2>
      <p>Apple computers have a green light next to the camera that turns on when it's being used. But what if you aren't looking at the light? And worse, there is no light for the microphone! OverSight protects you from apps or hackers secretly recording you in the background.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> OverSight continuously monitors the macOS audio and video frameworks for device activation events, identifying the specific process ID requesting hardware access. <br><b>Plain English:</b> It listens to the computer's core systems. The moment any app tries to turn on the mic or camera, OverSight spots it and throws a big warning on your screen.</div></div>

      <h2>How it works</h2>
      <p>It sits silently in your menu bar. The moment you join a Zoom call, or if a sketchy app secretly tries to listen to your room, an OverSight notification slides in. It tells you "Zoom is using the microphone" and gives you two buttons: Allow or Block. If you weren't expecting it, you just click Block.</p>
      
      <h2>Detecting "Piggybacking"</h2>
      <p>Sophisticated malware sometimes waits until you are on a legitimate Skype or Zoom call, and then starts recording at the same time, hoping you won't notice. OverSight is smart enough to detect this secondary "piggyback" recording and will alert you that a new app has joined in.</p>
    `
  };
