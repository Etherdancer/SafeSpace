export default {
    id: 'pi-hole',
    website: 'https://pi-hole.net',
    index: 254,
    name: 'Pi-hole',
    tagline: 'Block ads and trackers for your whole network.',
    category: 'DNS',
    scores: {
      dataPrivacy: 27,
      security: 24,
      tracking: 19,
      userControl: 10,
      transparency: 9,
      total: 89
    },
    platforms: ['Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A powerful self-hosted DNS blocker that removes ads and trackers for every device on your network.',
    pros: [
      'Blocks ads and trackers for every device on your network — no per-device setup',
      'Completely free and open source',
      'You control everything — your data never leaves your home',
      'Detailed query logs and statistics on your own machine',
      'Huge community and well-documented blocklists',
      'Works with any device including smart TVs and game consoles',
    ],
    cons: [
      'Requires a always-on device to run (Raspberry Pi, old PC, NAS)',
      'Some initial setup required — not plug-and-play',
      'Doesn\'t encrypt DNS queries by default (needs extra setup for DoH/DoT)',
      'Can break some websites that rely on ads to function',
    ],
    content: `
      <h2>Why Pi-hole?</h2>
      <p>When you type a web address, your device first asks a DNS server what the IP address is for that name. Ads and trackers work the same way — they ask for IP addresses of ad servers.</p>
      <p>Pi-hole sits between your devices and the internet. When something on your network asks for an ad or tracker domain, Pi-hole says "that doesn't exist" and blocks it. The ad never loads. The tracker never fires.</p>
      <p>The best part: it works for every device on your home network. Your phone, your laptop, your smart TV, your kids' tablet — all protected, without installing anything on each one.</p>

      <h2>How it works</h2>
      <p>You run Pi-hole on a small always-on computer — a Raspberry Pi is the classic choice, but any Linux machine works. You then tell your home router to use Pi-hole as its DNS server.</p>
      <p>Pi-hole keeps a blocklist of known ad and tracker domains. You can add more lists, or even custom block specific websites yourself. All queries are logged locally on your own machine — nobody else sees them.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Pi-hole uses DNS sinkholing: instead of blocking connections outright, it responds to blocked domain lookups with a non-routable address. Your device tries to load an ad, gets a dead end, and gives up — without the ad server ever knowing you were there.</div></div>

      <h2>Your data stays home</h2>
      <p>Because Pi-hole runs on your own hardware, all your DNS query logs stay on your machine. Pi-hole the project never sees your traffic. Nothing is sent to external servers unless you explicitly configure it that way.</p>
      <p>This is a big deal. Cloud-based DNS blockers have to see your queries to block them. Pi-hole doesn't — it handles everything locally.</p>

      <h2>DNS encryption</h2>
      <p>Out of the box, Pi-hole sends DNS queries in plain text. This means your internet provider can still see which websites you're looking up (even if they can't see Pi-hole's block decisions).</p>
      <p>You can fix this by pairing Pi-hole with a DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT) resolver like Cloudflare's 1.1.1.1 or Quad9. It takes a little extra setup, but it encrypts your DNS traffic end-to-end.</p>

      <h2>Verdict</h2>
      <p>Pi-hole is one of the best privacy tools you can add to your home. It's free, powerful, and puts you in complete control. If you're comfortable with a bit of tinkering, it's absolutely worth it.</p>
    `
  };
