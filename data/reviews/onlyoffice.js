export default {
    id: 'onlyoffice',
    website: 'https://www.onlyoffice.com',
    index: 273,
    name: 'OnlyOffice',
    tagline: 'Self-hostable office suite that speaks MS Office',
    category: 'Productivity',
    scores: {
      dataPrivacy: 29,
      security: 30,
      tracking: 19,
      userControl: 10,
      transparency: 10,
      total: 98
    },
    externalScores: {
      appStore: 3.6,
    },
    platforms: ['Windows', 'macOS', 'Linux', 'Web'],
    pricing: 'Free / Paid',
    openSource: true,
    auditedBy: 'Community reviewed; no formal independent security audit published for the core office suite',
    relatedArticles: [],
    verdict: 'OnlyOffice is the best self-hostable office suite for teams that need seamless Microsoft Office compatibility.',
    pros: [
      'Excellent .docx / .xlsx / .pptx compatibility',
      'Fully self-hostable — keep documents on your own server',
      'Open source Community Edition available',
      'Real-time collaboration without sending documents to Google or Microsoft',
      'Desktop editors work offline',
    ],
    cons: [
      'Cloud version (ONLYOFFICE DocSpace) requires trusting their servers unless self-hosted',
      'No zero-knowledge encryption — server can read documents',
      'Free tier limited; more advanced features require paid plans',
      'No published independent security audit',
      'Some telemetry in the desktop apps by default',
    ],
    content: `
      <h2>Why OnlyOffice?</h2>
      <p>The core tension in office software is format compatibility. LibreOffice is excellent but sometimes mangles complex Word or Excel files. Google Docs handles them better but sends everything to Google. OnlyOffice threads that needle — it handles Microsoft Office formats very accurately and can run entirely on your own server.</p>
      <p>For organisations that must collaborate on .docx files without touching Google or Microsoft cloud services, OnlyOffice is often the best answer.</p>

      <h2>How it works</h2>
      <p>OnlyOffice has two modes. The desktop editors work like a traditional offline office suite — your files stay on your computer. The Docs Server is a web application you install on your own server, enabling browser-based editing and real-time collaboration.</p>
      <p>The server component can be integrated with Nextcloud, Seafile, and other self-hosted platforms. Many people pair OnlyOffice Docs with Nextcloud to get collaborative editing inside their own cloud.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>OnlyOffice is like having a private version of Google Docs running in your building. Your team edits together in real time, but the documents never leave your server.</div></div>

      <h2>Privacy considerations</h2>
      <p>Self-hosted OnlyOffice is private by design — nothing leaves your infrastructure. But the desktop apps have historically included some telemetry. Check the settings and disable any usage reporting if that matters to you.</p>
      <p>The cloud version (ONLYOFFICE DocSpace) is a hosted service. Using it means trusting OnlyOffice's servers. The privacy advantage of OnlyOffice comes from self-hosting, not from using their cloud.</p>

      <h2>Open source, but read the licence</h2>
      <p>The Community Edition is open source under AGPL. But the more advanced Enterprise and Developer editions are commercial products. The code you can inspect is the community version — more advanced commercial features may differ.</p>

      <h2>Verdict</h2>
      <p>OnlyOffice earns its place for organisations running their own infrastructure. Pair it with Nextcloud for a powerful, private, self-hosted productivity stack. Just be deliberate about self-hosting — the privacy benefit depends entirely on where the server runs.</p>
    `
  };
