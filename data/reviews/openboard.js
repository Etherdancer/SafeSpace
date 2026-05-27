export default {
    id: 'openboard',
    website: 'https://github.com/Helium314/HeliBoard',
    index: 220,
    name: 'HeliBoard',
    tagline: 'A keyboard that actually keeps your typing private',
    category: 'Keyboard',
    scores: {
      dataPrivacy: 30,
      security: 28,
      tracking: 20,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'A fantastic, customizable keyboard that structurally cannot steal your data.',
    pros: [
      'Zero internet permissions — it physically cannot connect to the web',
      'Highly customizable themes and layouts',
      'Supports multiple languages and dictionaries',
      'Open-source and fully auditable'
    ],
    cons: [
      'Does not have built-in GIF search or cloud sync',
      'Swipe-typing requires downloading an extra library file manually'
    ],
    content: `
      <h2>Why HeliBoard?</h2>
      <p>Your keyboard is the most sensitive app on your phone. It sees every password, every text message, and every search query you type. Popular keyboards like Gboard and SwiftKey constantly send typing data back to Google and Microsoft. HeliBoard (the modern successor to OpenBoard) is designed to keep your typing strictly on your device.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> HeliBoard is compiled without the <code>android.permission.INTERNET</code> manifest declaration. <br><b>Plain English:</b> The keyboard is mathematically locked out of the internet. Even if it wanted to steal your data, the Android operating system physically prevents it from talking to any servers.</div></div>

      <h2>How it works</h2>
      <p>Because HeliBoard has no internet access, everything it does happens locally. Autocorrect is handled by dictionary files downloaded to your phone. It learns your typing style and saves your personal dictionary directly on your device storage.</p>
      
      <h2>Customization</h2>
      <p>Despite being a privacy tool, it doesn't sacrifice looks. You can customize the theme, the height of the keys, whether to show a number row, and how the autocorrect behaves. It is a drop-in replacement that feels just as fast as the stock keyboard.</p>
    `
  };
