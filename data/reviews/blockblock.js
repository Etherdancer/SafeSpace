export default {
    id: 'blockblock',
    website: 'https://objective-see.org/products/blockblock.html',
    index: 237,
    name: 'BlockBlock',
    tagline: 'Stops malware from installing itself permanently',
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
      appStore: 4.9,
    },
    platforms: ['macOS'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'An excellent preventative security tool that stops viruses and trackers from putting roots down in your system.',
    pros: [
      'Catches malware trying to set itself to start automatically',
      'Free and open-source',
      'Very low impact on system performance'
    ],
    cons: [
      'Only available for macOS',
      'Legitimate app updates might trigger false alarms'
    ],
    content: `
      <h2>Why BlockBlock?</h2>
      <p>When malware or deeply invasive tracking software infects a computer, its first goal is to ensure it survives a reboot. It does this by creating "persistent" files so it launches automatically every time you turn on your computer. BlockBlock stops this from happening.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> BlockBlock monitors the OS's persistence locations (like LaunchDaemons and LaunchAgents) and intercepts file-system events attempting to write to these areas. <br><b>Plain English:</b> It acts like a bouncer at the VIP section of your computer. If any app tries to put its name on the "start automatically" list, BlockBlock stops it and asks you if it belongs there.</div></div>

      <h2>How it works</h2>
      <p>Most of the time, BlockBlock does nothing. But when you install a new app—or if a virus secretly tries to install itself in the background—and tries to set itself to launch on startup, BlockBlock pauses it. It shows you the file, and you can click "Block" to prevent it from ever starting automatically.</p>
      
      <h2>Who makes it?</h2>
      <p>BlockBlock is part of the Objective-See suite of tools created by Patrick Wardle, a renowned macOS security researcher. Like all Objective-See tools, it is completely free and open-source.</p>
    `
  };
