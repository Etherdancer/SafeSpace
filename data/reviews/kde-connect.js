export default {
    id: 'kde-connect',
    website: 'https://kdeconnect.kde.org',
    index: 280,
    name: 'KDE Connect',
    tagline: 'Sync your phone and computer without the cloud',
    category: 'Device Sync',
    scores: {
      dataPrivacy: 30,
      security: 26,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 96
    },
    platforms: ['Windows', 'macOS', 'Linux', 'Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'The best way to send files, links, and notifications between your devices without routing them through a tech company\'s servers.',
    pros: [
      'Completely offline — it works over your home Wi-Fi router',
      'No accounts or cloud services required',
      'Packed with features (remote control, clipboard sync, file transfer)'
    ],
    cons: [
      'The iOS version is still missing many features',
      'Both devices must be on the exact same Wi-Fi network to work'
    ],
    content: `
      <h2>Why KDE Connect?</h2>
      <p>If you want to send a photo from your phone to your computer, you usually have to email it to yourself or upload it to Google Drive. This sends your private file halfway across the country to a corporate server just to reach a laptop sitting two feet away. KDE Connect lets your devices talk directly to each other.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> KDE Connect uses TLS encryption to communicate securely over your Local Area Network (LAN). No data is routed through the WAN (internet). <br><b>Plain English:</b> It builds a secure, invisible bridge between your phone and your computer using your home Wi-Fi. The internet is cut completely out of the loop.</div></div>

      <h2>How it works</h2>
      <p>You install the app on your computer and your phone. As long as they are both connected to the same Wi-Fi, they will see each other. You pair them once, and from then on, they are linked.</p>
      
      <h2>What can it do?</h2>
      <p>It is incredibly powerful. You can send files back and forth instantly. When your phone rings, a notification will pop up on your computer screen. You can even use your phone screen as a wireless mouse to control your computer from the couch.</p>
    `
  };
