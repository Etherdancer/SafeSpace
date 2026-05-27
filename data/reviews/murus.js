export default {
    id: 'murus',
    website: 'https://murusfirewall.com',
    index: 239,
    name: 'Murus',
    tagline: 'A visual interface for your Mac\'s hidden super-firewall',
    category: 'Firewall',
    scores: {
      dataPrivacy: 28,
      security: 26,
      tracking: 20,
      userControl: 9,
      transparency: 6,
      total: 89
    },
    platforms: ['macOS'],
    pricing: 'Freemium',
    openSource: false,
    auditedBy: 'Not independently audited',
    relatedArticles: [],
    verdict: 'If you want advanced network security on a Mac without typing terminal commands, Murus is the best option.',
    pros: [
      'Uses the Mac\'s built-in, highly secure PF firewall (it just gives it buttons)',
      'Free version available for basic incoming protection',
      'No background "Murus" software needs to run to keep you safe'
    ],
    cons: [
      'Not open-source',
      'Can be quite technical and confusing for average users'
    ],
    content: `
      <h2>Why Murus?</h2>
      <p>Deep inside your Mac is a powerful, military-grade firewall called "PF" (Packet Filter). However, Apple doesn't provide a way to use it without typing complicated text commands into the Terminal. Murus solves this by giving you a visual dashboard full of buttons and sliders to control this hidden system.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Murus is a GUI front-end that generates and implements configuration files for the macOS native PF packet filtering engine. <br><b>Plain English:</b> Murus itself isn't a firewall. It's just a remote control for the powerful firewall Apple already built into your computer. Once you set your rules in Murus, you can close the app entirely.</div></div>

      <h2>How it works</h2>
      <p>Instead of relying on a third-party app that might crash or slow down your computer, Murus configures the core of your Mac. You can drag and drop icons to create rules, like "block all connections from known malicious IP addresses" or "only allow my computer to connect to the VPN."</p>
      
      <h2>Advanced Protection</h2>
      <p>Murus is primarily for protecting your computer from the outside world (incoming connections and port management), making it ideal for when you are using public Wi-Fi at coffee shops or airports where hackers might be on the same network.</p>
    `
  };
