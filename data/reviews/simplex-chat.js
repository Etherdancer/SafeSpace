export default {
    id: 'simplex-chat',
    website: 'https://simplex.chat',
    index: 257,
    name: 'SimpleX Chat',
    tagline: 'The only messenger with no user IDs whatsoever.',
    category: 'Messaging',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 97
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Trail of Bits (2022, 2024)',
    relatedArticles: [],
    verdict: 'The most metadata-private messenger available today — no phone number, no username, no user ID of any kind.',
    pros: [
      'No phone number, email, or username required — ever',
      'No user identifiers exist on the server at all',
      'End-to-end encrypted using double ratchet (Signal protocol-derived)',
      'Open source and independently audited by Trail of Bits',
      'Self-hosting supported — run your own SimpleX relay servers',
      'Disappearing messages, private groups, and voice messages',
      'Works on all major platforms',
    ],
    cons: [
      'Smaller user base — you need to convince people to switch',
      'Connection via QR code or link — slightly different to phone-based apps',
      'Group features still maturing compared to established apps',
      'Self-hosting adds complexity if you want maximum control',
    ],
    content: `
      <h2>Why SimpleX Chat?</h2>
      <p>Every messaging app you've used has one thing in common: it identifies you. Signal uses your phone number. Telegram uses a username or phone. WhatsApp uses your phone number. Even the most private mainstream apps tie your account to something.</p>
      <p>SimpleX has no user identifiers at all. Not even a random ID. Your account doesn't exist on any server — only the message queues do, and they're not linked to you.</p>

      <h2>How it works</h2>
      <p>When you start a conversation, SimpleX creates a unique, one-time message queue for that specific contact. Your contact gets a link or QR code that points to that queue. After the connection is made, a new set of queue addresses is negotiated automatically.</p>
      <p>Messages are end-to-end encrypted. Even the SimpleX relay servers only see encrypted blobs — they can't read messages, and they don't know who is talking to whom.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>SimpleX uses a design where sender and receiver addresses are different and change with every message batch. This is called unidirectional queues with forward secrecy. The server never has enough information to link a sender to a receiver — even if it tried.</div></div>

      <h2>Audited and open source</h2>
      <p>SimpleX Chat is fully open source. The protocol specification, the server code, and the client apps are all public. Trail of Bits — a well-respected security research firm — has audited SimpleX twice, in 2022 and 2024. The reports are published publicly.</p>
      <p>You can also run your own SimpleX relay servers. That means you don't have to trust SimpleX's infrastructure at all if you don't want to.</p>

      <h2>What it can do</h2>
      <p>SimpleX supports text, voice messages, image and file sharing, disappearing messages, and group chats. It has a built-in incognito mode that generates a fresh random profile for each new contact. You can also use it over Tor for extra network-level anonymity.</p>

      <h2>Verdict</h2>
      <p>SimpleX Chat is genuinely different from every other messenger out there. If metadata privacy matters to you — and it should — SimpleX is the only messenger that takes it this seriously. The main hurdle is getting your contacts to use it, which is the same hurdle every privacy messenger faces.</p>
    `
  };
