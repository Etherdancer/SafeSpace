export default {
    id: 'ufw',
    website: 'https://launchpad.net/ufw',
    index: 41,
    name: 'UFW (Uncomplicated Firewall)',
    tagline: 'Simple network protection',
    category: 'Networks',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community audited',
    relatedArticles: ['linux-privacy-security'],
    verdict: 'UFW is the standard firewall tool for Linux. By turning it on, you immediately block all incoming connections, preventing malicious actors on public networks from accessing your machine.',
    pros: [
      'Incredibly easy to use (literally just type "ufw enable")',
      'Denies all incoming traffic by default',
      'Graphic interface (GUFW) available for beginners',
      'Pre-installed on many distributions like Ubuntu and Mint'
    ],
    cons: [
      'It only manages iptables/nftables under the hood (not a full replacement for advanced routing)'
    ],
    content: `
      <h2>What Is a Firewall?</h2>
      <p>A firewall is a gatekeeper for your network traffic. It sits between your computer and the internet and decides what connections are allowed through and what are blocked. By default on most Linux systems, there is no firewall enabled — which means any service running on your computer could potentially accept connections from the network.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>UFW sets up a rule that says "nobody is allowed to knock on my computer's door unless I specifically invited them." This prevents other devices on the same network (like a coffee shop's WiFi) from accessing your machine. UFW is a frontend for iptables (and nftables on newer systems) that simplifies rule management — the default deny policy for incoming traffic means all inbound connection attempts are dropped unless a specific rule explicitly allows them. Outbound traffic is permitted by default.</div></div>

      <h2>How to Enable UFW</h2>
      <p>UFW is pre-installed on Ubuntu and Linux Mint. On other distributions, install it with your package manager.</p>
      <ol>
        <li>Open a terminal</li>
        <li>Run: <code>sudo ufw enable</code></li>
        <li>That's it. UFW is now active and blocking all incoming connections by default.</li>
      </ol>
      <p>If you need to allow a specific service (e.g., SSH for remote access): <code>sudo ufw allow ssh</code></p>
      <p>To check the status and see all active rules: <code>sudo ufw status verbose</code></p>

      <h2>GUFW — the Graphical Interface</h2>
      <p>If you prefer a visual interface, install GUFW (Graphical UFW) from your software centre. It lets you manage all firewall rules with clickable buttons instead of terminal commands.</p>

      <h2>Verdict</h2>
      <p>UFW is the simplest and most important security step for any Linux system, especially on laptops that connect to public WiFi. Enable it immediately after installing Linux. The two-second setup provides continuous protection with no ongoing maintenance needed.</p>
    `
  };
