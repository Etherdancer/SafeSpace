export default {
    id: 'signal',
    website: 'https://signal.org',
    index: 3,
    name: 'Signal',
    tagline: 'The gold standard for private messaging',
    category: 'Messaging',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 20,
      userControl: 9,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 4.7,
    },
    platforms: ['iOS', 'Android', 'Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Cure53, Trail of Bits, multiple independent researchers',
    relatedArticles: ['smartphone-hardening', 'metadata-problem', 'user-accounts-and-privacy', 'android-privacy-settings', 'privacy-vs-convenience'],
    verdict: 'Signal is the definitive answer to private messaging. Its encryption is so trusted that WhatsApp and iMessage both adopted it. Use it for anything you\'d rather keep private.',
    pros: [
      'All messages and calls are end-to-end encrypted by default — always',
      'Non-profit with no advertising revenue — your data is not the product',
      'Proven in court: handed over only account creation date when compelled',
      'Disappearing messages, note-to-self, sealed sender',
      'Voice and video calls fully encrypted',
      'Open source, regularly audited',
    ],
    cons: [
      'Requires a phone number to register',
      'Smaller user base than WhatsApp — you need to convince contacts to switch',
      'No anonymous account without a separate SIM card',
    ],
    content: `
      <h2>Why Signal?</h2>
      <p>When you send a message on Signal, it is scrambled on your device before it leaves. The scrambled message travels to Signal's servers, then to your recipient's device, where it is unscrambled. At no point can Signal, your phone company, your internet provider, or anyone intercepting the traffic read the message. Only you and your recipient can.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your message is scrambled on your phone before it's sent — only your recipient's phone can unscramble it. Signal's own servers never see what you wrote. Under the hood, this uses the Signal Protocol: a combination of the Double Ratchet algorithm and X3DH key exchange for end-to-end encryption. No intermediate server ever holds a readable copy.</div></div>

      <p>WhatsApp uses the same underlying technology (Signal's own protocol), but layers Meta's data collection on top. Signal uses it as designed.</p>

      <h2>What Signal Actually Knows About You</h2>
      <p>In 2016, Signal received a grand jury subpoena — a legal demand from US authorities to hand over information about a user. Signal complied with the law, and handed over exactly two things: the date the account was created, and the date it last connected to Signal's servers. That was all they had. No messages, no contacts, no call logs — because Signal doesn't store any of that.</p>
      <p>This has been confirmed multiple times since. The Signal Foundation (a US non-profit) simply doesn't collect data it doesn't need, so there's nothing to hand over.</p>

      <h2>Features Worth Knowing About</h2>
      <ul>
        <li><strong>Disappearing messages:</strong> Set a timer — 5 seconds, 1 minute, 1 week — and messages delete themselves automatically from both sides after being read. This limits how long sensitive conversations exist anywhere.</li>
        <li><strong>Note to Self:</strong> Send messages to yourself as an encrypted private notepad, synced across your devices.</li>
        <li><strong>Sealed Sender:</strong> When you send a message, Signal's servers know who receives it — but not who sent it. This protects the sender's identity even from Signal itself.</li>
        <li><strong>Screen Security:</strong> Prevents other apps from taking screenshots of Signal conversations, and hides Signal from your phone's app switcher.</li>
        <li><strong>Registration Lock:</strong> A PIN that prevents someone else from re-registering your phone number on Signal, even if they have your SIM card.</li>
      </ul>

      <h2>How to Switch From WhatsApp</h2>
      <ol>
        <li>Install Signal from the App Store or Play Store.</li>
        <li>Register with your phone number. Set a Registration Lock PIN when prompted.</li>
        <li>Go through your Signal contacts — anyone already using Signal is shown automatically.</li>
        <li>For contacts not on Signal, tap their name and send an invitation. You can customise the message.</li>
        <li>Set disappearing messages as your default: Settings &gt; Privacy &gt; Default Timer. We recommend 1 week for everyday conversations.</li>
      </ol>

      <h2>The Phone Number Requirement</h2>
      <p>Signal's one genuine privacy weakness is that it requires a phone number to sign up. This means your contacts can find you by number, and Signal's servers do know your phone number. If you need to communicate without revealing your number, you can register Signal with a secondary number — a prepaid SIM or a VoIP number from a service like MySudo.</p>

      <h2>Verdict</h2>
      <p>Signal is the most private widely-used messaging app in the world. It is free, easy to use, and backed by a non-profit with no financial reason to compromise your privacy. For any conversation you'd rather keep private — health issues, finances, relationship matters, anything sensitive — Signal is the right tool.</p>
    `
  };
