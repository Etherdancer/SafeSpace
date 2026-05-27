export default {
  id: 'mat2',
  website: 'https://0xacab.org/jvoisin/mat2',
  index: 231,
  name: 'MAT2',
  tagline: 'Strip hidden data from your files before you share them.',
  category: 'Metadata',
  scores: {
    dataPrivacy: 28,
    security: 24,
    tracking: 20,
    userControl: 10,
    transparency: 10,
    total: 92
  },
  platforms: ['Linux'],
  pricing: 'Free',
  openSource: true,
  auditedBy: 'Community review',
  relatedArticles: [],
  verdict: 'MAT2 removes the hidden data embedded in your files — the data you did not know was there.',
  pros: [
    'Removes metadata from dozens of file types: PDF, DOCX, JPEG, MP3, and more',
    'Supports bulk processing of entire directories',
    'Integrated into Nautilus file manager via a right-click extension',
    'Fully open source with a clean, auditable codebase',
  ],
  cons: [
    'Linux only — Windows and macOS users need alternatives',
    'Some formats have inherent limitations in what metadata can be safely removed',
    'No graphical interface without the Nautilus extension',
  ],
  content: `
    <h2>Why MAT2?</h2>
    <p>Every file you create carries invisible baggage. A photo stores where you took it, what camera you used, and what time it was. A Word document stores your name, the company your computer is registered to, and a history of edits. A PDF can contain the original author, the software used, and sometimes even earlier versions of the document.</p>
    <p>This hidden data is called metadata. When you share files, you share this data too — usually without realising it. MAT2 removes it.</p>

    <h2>How it works</h2>
    <p>MAT2 reads the metadata embedded in a file and replaces the file with a clean version that contains only the actual content. It does not just blank out metadata fields — it rewrites the file structure to ensure the hidden data is genuinely gone.</p>
    <p>You run MAT2 on a file before sharing it. It supports PDFs, JPEG and PNG images, Word and LibreOffice documents, audio files, video files, archives, and more.</p>

    <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Files are like postcards with invisible writing on the back. MAT2 makes a new copy of the postcard with only the visible part — and throws away the back. The file looks the same, but the hidden information is gone.</div></div>

    <h2>Metadata that matters</h2>
    <p>GPS coordinates in photos have exposed the locations of activists, abuse survivors, and whistleblowers. Author metadata in documents has revealed the identity of anonymous leakers. Revision history in DOCX files has accidentally exposed confidential edits.</p>
    <p>These are not hypothetical risks. They have happened repeatedly in real cases. MAT2 prevents them.</p>

    <h2>Using MAT2</h2>
    <p>On the command line: <code>mat2 yourfile.jpg</code> creates a clean copy called <code>yourfile.cleaned.jpg</code>. The original is unchanged. In the GNOME file manager (Nautilus), you can right-click any file and choose "Remove metadata" from the menu — no terminal needed.</p>
    <p>MAT2 is also the engine behind the metadata removal feature in OnionShare and is available in the Tails operating system by default.</p>
  `
};
