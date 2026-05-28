export default {
    id: 'lulu',
    website: 'https://objective-see.org/products/lulu.html',
    index: 234,
    name: 'LuLu',
    tagline: 'A free, open-source firewall for macOS',
    category: 'Firewall',
    scores: {
      dataPrivacy: 25,
      security: 26,
      tracking: 18,
      userControl: 9,
      transparency: 10,
      total: 88
    },
    externalScores: {
      appStore: 4.9,
      playStore: 3.6,
    },
    platforms: ['macOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'An essential tool for Mac users to stop apps from secretly transmitting data over the internet.',
    pros: [
      'Completely free with no ads or limitations',
      'Alerts you instantly when an app tries to phone home',
      'Open-source and created by a respected macOS security researcher'
    ],
    cons: [
      'Only available for Apple Mac computers',
      'The alerts can be annoying for the first few days of use'
    ],
    content: `
      <h2>Why LuLu?</h2>
      <p>Your Mac comes with a built-in firewall, but it only blocks incoming connections (hackers trying to get in). It does nothing to stop the apps you've already installed from sending your data out to the internet. LuLu is a firewall specifically designed to block these outgoing connections.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> LuLu uses macOS Network Extensions to intercept all outbound network traffic, blocking unauthorized connections at the kernel level until user approval is granted. <br><b>Plain English:</b> It acts like a security guard at the exit door of your computer. Whenever an app tries to leave and send data to the internet, LuLu pauses it and asks you for permission first.</div></div>

      <h2>How it works</h2>
      <p>When you install a new app and it tries to connect to the internet, a LuLu popup will appear. It tells you the name of the app and exactly where it is trying to connect. You can choose to "Allow" it if it's normal (like a web browser), or "Block" it if a simple calculator app is mysteriously trying to connect to a server in another country.</p>
      
      <h2>Set it and forget it</h2>
      <p>LuLu is smart. By default, it allows essential Apple programs to connect so your computer keeps working smoothly. After you approve or block your usual apps over the first few days, LuLu stays quiet and only alerts you when something brand new or suspicious happens.</p>
    `
  };
