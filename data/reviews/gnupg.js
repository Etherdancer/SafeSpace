export default {
  id: 'gnupg',
  website: 'https://gnupg.org',
  index: 229,
  name: 'GnuPG',
  tagline: 'Encrypt and sign anything with open standards.',
  category: 'Encryption',
  scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 97
    },
    externalScores: {
      appStore: 3.5,
      playStore: 4.0,
    },
  platforms: ['Windows', 'macOS', 'Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Multiple community and funded audits (Cure53, 2018)',
  relatedArticles: [],
  verdict: 'GnuPG is the standard for open, verifiable encryption — trustworthy because anyone can check how it works.',
  pros: [
    'Fully open source implementation of the OpenPGP standard (RFC 4880)',
    'End-to-end encryption of files and email that no third party can break',
    'Digital signatures prove a file or message genuinely came from a specific person',
    'Works on Windows, macOS, and Linux — widely supported by email clients',
  ],
  cons: [
    'Famously difficult to use correctly — key management trips up beginners',
    'Web of Trust model for key verification is confusing and poorly adopted',
    'Command-line interface is not approachable without a GUI frontend like Kleopatra',
  ],
  content: `
    <h2>Why GnuPG?</h2>
    <p>GnuPG — also called GPG — is the free software implementation of OpenPGP, a standard for encrypting and signing files and email. It has been around since 1997. It is what journalists and security professionals use to exchange sensitive files. It is what Linux distributions use to sign their software packages. It is the bedrock of open-source encryption.</p>
    <p>When you encrypt something with GPG and send it to someone, only they can read it. Not the email provider. Not the government. Not anyone else. The same mathematics that protects state secrets protects your files.</p>

    <h2>How it works</h2>
    <p>GPG uses asymmetric encryption. You have two keys: a public key and a private key. Your public key goes on the internet — anyone can use it to encrypt a message that only you can read. Your private key stays secret on your computer — it is the only thing that can unlock messages encrypted with your public key.</p>
    <p>You can also use your private key to sign files. A signature proves that the file came from you and has not been altered. Anyone with your public key can verify the signature, but only you can create one.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>GPG works like a padlock you can hand out to anyone. Anyone can lock a box with it (encrypt a message). But only you have the key to open it (decrypt). And you can put your own stamp on things (sign files) that anyone can check is genuinely yours.</div></div>

    <h2>Key management</h2>
    <p>The hardest part of GPG is managing keys. You need to create a key pair, share your public key, and figure out how to trust the public keys of people you talk to. Getting this right takes effort. Tools like Kleopatra (Windows/Linux) and GPG Suite (macOS) provide graphical interfaces that make the process much more manageable.</p>
    <p>The OpenPGP keyserver network lets you publish and find public keys. WKD (Web Key Directory) is a newer, simpler way for organisations to publish keys attached to their email domains.</p>

    <h2>Email integration</h2>
    <p>Thunderbird has native OpenPGP support built in. With GnuPG installed on your system, you can encrypt and sign emails directly from Thunderbird without any extra plugins. This is the most accessible way for most people to start using GPG in practice.</p>
  `
};
