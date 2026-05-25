export default {
    id: 'digitalmeet',
    website: 'https://digitalmeet.example.com',
    index: 107,
    name: 'DigitalMeet',
    tagline: 'Enterprise-grade video conferencing with zero-trust security',
    category: 'Video Conferencing',
    scores: {
      dataPrivacy: 27,
      security: 28,
      tracking: 18,
      userControl: 7,
      transparency: 7,
      total: 87
    },
    platforms: ['Web', 'iOS', 'Android', 'Windows', 'macOS'],
    pricing: 'Paid (Enterprise focus)',
    openSource: false,
    auditedBy: 'Independent enterprise security auditors',
    relatedArticles: [],
    verdict: 'While overkill for a casual family call, DigitalMeet is essential for businesses handling sensitive information like healthcare or legal data, thanks to its strict zero-trust design.',
    pros: [
      'End-to-end encryption enabled by default',
      'Built on a zero-trust architecture',
      'Compliant with strict regulations (like HIPAA)',
      'Granular control over where meeting data is stored geographically'
    ],
    cons: [
      'Aimed at businesses, so pricing is not consumer-friendly',
      'Proprietary (closed-source) software',
      'Can be complex to set up for smaller teams'
    ],
    content: `
      <h2>Why DigitalMeet?</h2>
      <p>When you use standard video calling tools, the company hosting the call can technically listen in. DigitalMeet is built for situations where that is completely unacceptable, such as a doctor discussing medical records or a lawyer consulting a client.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>It uses a "zero-trust" model. This means the software assumes every connection is potentially hostile. It locks down the video and audio streams with end-to-end encryption so only the people in the meeting can decrypt them.</div></div>

      <h2>Compliance and Control</h2>
      <p>For large companies, keeping data within specific borders (like the EU) is a legal requirement. DigitalMeet allows businesses to choose exactly which servers route their calls, ensuring compliance with local privacy laws.</p>

      <h2>Not for Everyone</h2>
      <p>Because it is a commercial, enterprise tool, it is not open-source, and it is not free. If you just want to call your friends privately, free tools like Jitsi Meet are a much better choice. But for serious corporate privacy, this is a top-tier option.</p>

      <h2>Verdict</h2>
      <p>DigitalMeet provides the heavy-duty privacy locks needed for highly regulated industries, ensuring that sensitive video calls remain strictly confidential.</p>
    `
  };
