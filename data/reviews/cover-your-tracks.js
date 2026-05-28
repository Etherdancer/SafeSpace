export default {
    id: 'cover-your-tracks',
    website: 'https://coveryourtracks.eff.org',
    index: 265,
    name: 'Cover Your Tracks',
    tagline: 'Test how well your browser protects you',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 88
    },
    externalScores: {
      appStore: 4.4,
    },
    platforms: ['Web'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Created by the Electronic Frontier Foundation (EFF)',
    relatedArticles: ['browser-fingerprinting'],
    verdict: 'An essential, free test to see if your current web browser is actually protecting your privacy.',
    pros: [
      'Shows you exactly how tracking companies view your browser',
      'Created by a highly respected digital rights non-profit',
      'Requires no installation'
    ],
    cons: [
      'The results can be highly technical and confusing to read'
    ],
    content: `
      <h2>Why Cover Your Tracks?</h2>
      <p>You might have installed an ad-blocker or switched to a private browser, but how do you know if it's actually working? Cover Your Tracks is a free website built by the Electronic Frontier Foundation (EFF) that runs a fake tracking test on your browser to see what slips through.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> The tool executes harmless scripts to test if your browser blocks tracking ads, invisible trackers, and measures your browser's fingerprint uniqueness metric. <br><b>Plain English:</b> It pretends to be a malicious tracking company. It throws every trick in the book at your browser, and then gives you a report card showing exactly which tricks succeeded and which were blocked.</div></div>

      <h2>How it works</h2>
      <p>You simply visit the website and click "Test your browser." It takes a few seconds, and then tells you if you have strong protection, partial protection, or no protection at all.</p>
      
      <h2>Browser Fingerprinting</h2>
      <p>The most important part of the test is checking for "Browser Fingerprinting." This is a sneaky technique where companies track you by looking at your unique screen size, installed fonts, and hardware, rather than using cookies. If your result says your browser has a "unique fingerprint," it means companies can track you across the web even if you delete your cookies.</p>
    `
  };
