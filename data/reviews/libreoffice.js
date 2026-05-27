export default {
    id: 'libreoffice',
    website: 'https://www.libreoffice.org',
    index: 274,
    name: 'LibreOffice',
    tagline: 'The free, offline-first office suite that owes nobody anything',
    category: 'Productivity',
    scores: {
      dataPrivacy: 29,
      security: 24,
      tracking: 20,
      userControl: 10,
      transparency: 9,
      total: 92
    },
    platforms: ['Windows', 'macOS', 'Linux'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community reviewed; periodic security patches; no single comprehensive third-party security audit',
    relatedArticles: [],
    verdict: 'LibreOffice is the safest office suite for anyone who just wants to work on documents without anything phoning home.',
    pros: [
      'Completely offline — no accounts, no cloud, no network calls',
      'Zero telemetry by default',
      'Handles all major office formats (.docx, .xlsx, .pptx, ODF)',
      'Maintained by The Document Foundation, a not-for-profit',
      'Huge feature set covering documents, spreadsheets, presentations, databases, and more',
    ],
    cons: [
      'No built-in real-time collaboration',
      'Not perfectly compatible with complex MS Office files',
      'UI feels dated compared to modern office software',
      'No mobile apps (third-party apps like Collabora exist)',
    ],
    content: `
      <h2>Why LibreOffice?</h2>
      <p>Microsoft 365 sends data to Microsoft. Google Docs lives on Google's servers. LibreOffice does neither. It runs on your computer. Your documents stay on your computer. That is it.</p>
      <p>It has been actively developed since 2010 (and before that as OpenOffice), maintained by a non-profit foundation, funded by donations and corporate sponsors rather than by selling your data. It is the default office suite on most Linux distributions and a solid choice on Windows and macOS too.</p>

      <h2>How private is it really?</h2>
      <p>LibreOffice makes no network connections during normal use. It does not send documents anywhere, does not collect usage statistics by default, and does not require an account. The only network activity is optional — checking for updates or using optional extensions.</p>
      <p>You can verify this by running LibreOffice with network monitoring. The lack of outbound connections is not a setting to configure — it is the default behaviour.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>LibreOffice is like a typewriter that happens to understand modern file formats. It does its work, and then it stops. Nothing gets sent anywhere. Your files are only ever on your hard drive.</div></div>

      <h2>Format compatibility</h2>
      <p>LibreOffice supports ODF (its native format), and imports/exports .docx, .xlsx, .pptx, and most other common formats. Compatibility is good for standard documents. Complex formatting, macros, or advanced Excel features may render imperfectly — this is a long-standing limitation that has improved but not fully resolved.</p>

      <h2>Collaboration</h2>
      <p>LibreOffice does not offer built-in cloud collaboration. You can share files manually — email, USB drive, a file server — and edit them turn by turn. For real-time co-editing, you need a server layer: Nextcloud + OnlyOffice/Collabora provides that while keeping everything private and self-hosted.</p>

      <h2>Verdict</h2>
      <p>For anyone who does not need real-time collaboration, LibreOffice is the obvious choice. Free, offline, zero tracking, fully featured. It may not look as shiny as competitors, but it has no ulterior motives — and that matters.</p>
    `
  };
