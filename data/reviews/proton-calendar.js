export default {
    id: 'proton-calendar',
    website: 'https://proton.me/calendar',
    index: 281,
    name: 'Proton Calendar',
    tagline: 'An encrypted calendar from the makers of Proton Mail',
    category: 'Calendar',
    scores: {
      dataPrivacy: 29,
      security: 29,
      tracking: 20,
      userControl: 8,
      transparency: 9,
      total: 95
    },
    platforms: ['Web', 'iOS', 'Android'],
    pricing: 'Freemium',
    openSource: true,
    auditedBy: 'SEC Consult',
    relatedArticles: [],
    verdict: 'The easiest way to move your schedule away from Google Calendar while keeping it synced across your devices.',
    pros: [
      'End-to-end encrypted (Proton cannot see your events)',
      'Integrates seamlessly with Proton Mail',
      'Clean, modern interface'
    ],
    cons: [
      'Free tier is limited to one calendar',
      'Cannot be used with third-party calendar apps (like Apple Calendar)'
    ],
    content: `
      <h2>Why Proton Calendar?</h2>
      <p>Your calendar contains incredibly sensitive data: doctor's appointments, job interviews, dates, and family events. Google Calendar scans all of this information. Proton Calendar offers the same convenience, but with a lock that only you hold the key to.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Proton uses zero-access encryption and end-to-end encryption. Event titles, descriptions, locations, and participants are encrypted on your device before reaching their servers. <br><b>Plain English:</b> When you type an event into your phone, it is scrambled into unreadable gibberish before it is sent over the internet. Even the engineers at Proton cannot read your schedule.</div></div>

      <h2>How it works</h2>
      <p>If you already have a Proton Mail account, you automatically have access to Proton Calendar. You can use it in your web browser or download the app for your phone. Everything syncs instantly, just like you are used to.</p>
      
      <h2>Sharing and Invites</h2>
      <p>You can still send calendar invites to people who use Gmail or Outlook. Proton Calendar securely handles the invitations so that you can collaborate with friends and coworkers without forcing them to switch apps.</p>
    `
  };
