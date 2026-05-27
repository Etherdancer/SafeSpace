export default {
    id: 'reikey',
    website: 'https://objective-see.org/products/reikey.html',
    index: 238,
    name: 'ReiKey',
    tagline: 'Detects hidden keyloggers on your Mac',
    category: 'Privacy Tools',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['macOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A tiny, free utility that ensures nobody is secretly recording your passwords as you type them.',
    pros: [
      'Scans for existing keyloggers immediately',
      'Monitors the system continuously in the background',
      'Free and open-source'
    ],
    cons: [
      'Only available for macOS',
      'Some legitimate tools (like text-expanders) might be flagged'
    ],
    content: `
      <h2>Why ReiKey?</h2>
      <p>A keylogger is a type of spyware that records every single button you press on your keyboard. This allows hackers or abusive partners to steal your passwords, read your private messages, and capture your credit card numbers. ReiKey detects when this software is installed.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> ReiKey scans for installed CoreGraphics "Event Taps", which are the system-level hooks required on macOS to intercept keyboard hardware events globally. <br><b>Plain English:</b> Your Mac has a central wire that carries your keyboard clicks to the screen. ReiKey checks to see if anyone has secretly plugged a wiretap into that line to listen in.</div></div>

      <h2>How it works</h2>
      <p>When you first run ReiKey, it scans your computer to see if any keyloggers are already installed. If the scan comes up clean, it will sit quietly in your menu bar. If a piece of malware ever tries to install a new keylogger in the future, ReiKey will instantly alert you.</p>
      
      <h2>False Alarms</h2>
      <p>Because of how macOS works, some legitimate apps also need to listen to your keyboard. For example, if you use a "text expander" app that types out your email address when you press a shortcut, ReiKey will flag it. However, you will recognize the name of your text expander and can simply tell ReiKey to ignore it.</p>
    `
  };
