export default {
    id: 'protonmail',
    website: 'https://proton.me/mail',
    index: 4,
    name: 'ProtonMail',
    tagline: 'Encrypted email based in Switzerland',
    category: 'Email',
    scores: {
      dataPrivacy: 28,
      security: 29,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 95
    },
    platforms: ['Browser', 'iOS', 'Android'],
    pricing: 'Free / from €3.99/mo',
    openSource: true,
    auditedBy: 'SEC Consult (2021)',
    relatedArticles: ['user-accounts-and-privacy'],
    verdict: 'The best mainstream encrypted email option. A significant upgrade from Gmail for most people, though email has inherent privacy limits that no provider can fully overcome.',
    pros: [
      'Proton cannot read your emails — ever',
      'End-to-end encrypted automatically between ProtonMail users',
      'Swiss-based with strong privacy laws',
      'Open source apps',
      'Free tier available with no credit card',
    ],
    cons: [
      'Encryption only automatic between ProtonMail users — emails to Gmail etc. are not encrypted end-to-end',
      'Has cooperated with Swiss legal orders in criminal cases',
      'Email metadata (who emails whom, when) is always visible to servers',
      'Free tier has limited storage and features',
    ],
    content: `
      <h2>What ProtonMail Does Differently</h2>
      <p>With Gmail, Google can read every email you send and receive. This isn't speculation — it's how their advertising business works. ProtonMail is designed so that even Proton cannot read your emails.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Your emails are scrambled with a key that only you have — Proton stores the locked box but not the key. This is called zero-access encryption: emails are encrypted with your public key before being stored on Proton's servers. Even if someone forced Proton to hand over your emails, they'd get an unreadable jumble.</div></div>

      <h2>When Is Email Encrypted End-to-End?</h2>
      <p>Email encryption works best when both the sender and recipient use ProtonMail. In that case, your message is scrambled on your device before it's sent, and only unscrambled on your recipient's device. Proton's servers never see the readable content.</p>
      <p>When you email someone using Gmail, Outlook, or another service, the email travels unencrypted to them — because those services can't automatically decrypt it. You can add a password to protect such emails, but this requires agreeing on a password in advance. This is a fundamental limitation of how email works, not a ProtonMail flaw.</p>

      <h2>Is Switzerland Really That Private?</h2>
      <p>Switzerland has genuinely strong privacy laws and is not part of US or UK intelligence alliances. However, it does cooperate with international law enforcement requests in serious criminal cases. Proton has complied with Swiss court orders — they cannot refuse legal demands from Swiss courts. What they can say is: they cannot hand over email content they cannot read, because they don't have the key. They can, however, hand over metadata (who emailed whom, when) and may be ordered to begin logging a specific account in future.</p>

      <h2>The Honest Limitation: Email Metadata</h2>
      <p>Even with perfect encryption, email has an inherent weakness: metadata. Every email shows who sent it, who received it, when, from which servers, and via what route.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Even if the contents of your email are scrambled, every server it passes through can see who sent it, who received it, and when. Think of it like a sealed letter — no one can read inside, but the envelope shows the addresses. This is because SMTP email headers (sender, recipient, timestamps, routing hops) travel in plaintext and are visible to every mail server in the delivery chain. No encryption standard currently hides this metadata end-to-end. For truly sensitive communications, use Signal instead.</div></div>

      <h2>Getting Started</h2>
      <ol>
        <li>Go to <strong>proton.me</strong> and click "Create a free account."</li>
        <li>Choose a username (your new email will be name@proton.me). You do not need to provide a phone number or existing email address for the free tier.</li>
        <li>Create a strong password — use Bitwarden to generate and store it.</li>
        <li>Install the Proton Mail app on your phone from the App Store or Play Store.</li>
        <li>Consider keeping your Gmail address for non-sensitive communications and using ProtonMail for anything private.</li>
      </ol>

      <h2>The Proton Ecosystem</h2>
      <p>Proton now offers a full suite of privacy-respecting tools under the same account: ProtonDrive (cloud storage), ProtonCalendar, ProtonPass (password manager), and ProtonVPN. A paid "Proton Unlimited" plan at around €10/month includes all of these — it's reasonable value if you want to replace several Google services at once.</p>
    `
  };
