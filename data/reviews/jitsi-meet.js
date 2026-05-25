export default {
    id: 'jitsi-meet',
    website: 'https://jitsi.org/jitsi-meet/',
    index: 42,
    name: 'Jitsi Meet',
    tagline: 'Private video calls with no account for anyone',
    category: 'Video Calling',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 18,
      userControl: 8,
      transparency: 9,
      total: 88
    },
    platforms: ['Web (any browser)', 'iOS', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; widely used by governments and enterprises',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'The simplest private video call. No account, no download, no tracking. Open a browser, create a room, share the link. Done.',
    pros: [
      'No account required for anyone — host or guest',
      'Works in any browser — no download needed on desktop',
      'End-to-end encrypted for small meetings',
      'Free and unlimited call length',
      'Open source — can be self-hosted',
    ],
    cons: [
      'End-to-end encryption currently only available for calls with fewer than 8 participants',
      'For larger groups, traffic routes through Jitsi\'s server (encrypted in transit but not end-to-end)',
      'Video quality can be inconsistent compared to Zoom for large groups',
      'No persistent rooms, call history, or recordings on the free tier',
    ],
    content: `
      <h2>The Simplest Private Video Call</h2>
      <p>Zoom requires an account to host a meeting longer than 40 minutes. Google Meet requires a Google account. Microsoft Teams requires a Microsoft account. Jitsi Meet requires nothing. You go to a website, type a room name, and you're in a call. Share the link with whoever you want to join. They click it and they're in. No accounts, no downloads, no signups for anyone.</p>

      <h2>How to Use It</h2>
      <ol>
        <li>Go to <strong>meet.jit.si</strong> in any web browser.</li>
        <li>In the box on the homepage, type a unique room name. Make it something others won't accidentally stumble into — a combination of random words works well: "BlueMountainWeekly" or similar.</li>
        <li>Click "Start meeting." Allow your browser to use your camera and microphone when it asks.</li>
        <li>Copy the address from your browser's address bar (it will look like meet.jit.si/YourRoomName) and share it with everyone you want to join. They just click the link.</li>
        <li>On iPhone or Android: search for "Jitsi Meet" in the App Store or Play Store. Open it, enter the same room name, and join.</li>
      </ol>

      <h2>Is It Private?</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>For small calls (up to 8 people), the video and audio are scrambled end-to-end — even Jitsi's servers can't see them. For bigger calls, the server handles traffic (still encrypted on the wire, but Jitsi could technically see the content). No accounts means no profiles are built about participants either way. Technically: Jitsi uses WebRTC with Insertable Streams for end-to-end encryption in small calls; larger calls route through a Selective Forwarding Unit (SFU) server using DTLS-SRTP.</div></div>

      <p>For maximum privacy with larger groups, Jitsi can be self-hosted — you run the server yourself, so no third party handles the call at all. This is an advanced option used by many organisations.</p>

      <h2>When Jitsi Is Enough and When to Use Signal</h2>
      <p>Jitsi is ideal for everyday video calls that don't need your identity verified — team meetings, family calls, group chats. For the most sensitive one-to-one conversations, Signal's encrypted calls provide more consistent end-to-end encryption and have been more thoroughly audited specifically for high-stakes use. For most people's needs, Jitsi is excellent.</p>

      <h2>Verdict</h2>
      <p>Jitsi Meet is the perfect answer to "how do I do a private video call without signing up for anything?" It's free, instant, and works for most people's video calling needs.</p>
    `
  };
