export default {
    id: 'metadata-problem',
    index: 11,
    title: 'The Metadata Problem: Your Data\'s Shadow',
    category: 'Basics',
    date: '2025-04-05',
    readTime: '12 min read',
    excerpt: 'Metadata is often more revealing than the content it describes — and most people have no idea it exists.',
    tags: ['metadata', 'surveillance', 'basics'],
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    relatedReviews: ['signal', 'exifcleaner', 'metadata-cleaner', 'mat2'],
    content: `
      <p>Most people, when they think about privacy, think about content: keeping the text of their messages private, encrypting their emails. This is reasonable but incomplete. Metadata often reveals more than content — and it's far harder to protect.</p>

      <h2>What Is Metadata? A Plain English Explanation</h2>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Metadata is everything about a message except what it says — not the letter, but the envelope, the postmark, the sender's address, the time it was sent, and how heavy it is. Technically, metadata is structured data that describes other data: sender, recipient, timestamp, duration, size, location, device, and routing information. It is typically collected automatically by the systems that transmit or store data, and is often legally easier to access than content. All of that can reveal a huge amount without anyone reading a single word.</div></div>

      <p>Metadata is "data about data." Here is the classic example: imagine a letter. The <em>content</em> of the letter is what's written inside. The <em>metadata</em> is everything about the letter: who sent it, who it was addressed to, the postmark showing where and when it was sent, the stamp, the size and weight of the envelope, the handwriting on the address, and the route it took through the postal system.</p>
      <p>This metadata, without reading the letter at all, can tell you a great deal: if you receive a letter from an oncology clinic, you probably have cancer. If you receive letters from a divorce lawyer, you're probably getting divorced. If you're sending letters daily to the same person in another country, you're probably in a relationship.</p>
      <p>Digital metadata works the same way, but it is collected in far more detail and at far greater scale than any postal inspector could manage.</p>

      <h2>Email Metadata: More Than You'd Expect</h2>
      <p>When you send an email, the text you write is the content. But every email also carries a set of <em>headers</em> — metadata fields that are invisible in your email client but present in every message. These headers contain:</p>
      <ul>
        <li>Your email address and the recipient's email address</li>
        <li>The exact date and time the email was sent, down to the second</li>
        <li>Your IP address (in some cases) — which reveals your rough location</li>
        <li>The email software you used (e.g., "Sent from iPhone")</li>
        <li>Every mail server the email passed through on its way to the recipient, with timestamps</li>
        <li>The size of the email</li>
        <li>The subject line (this is often treated as metadata, not content, from a legal perspective)</li>
      </ul>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Encrypting your email content is like sealing the letter — nobody can read what's inside. But the envelope is still visible. Technically, end-to-end encryption (such as PGP or the encryption used within ProtonMail) encrypts the message body but leaves email headers — including To, From, Date, and Subject — visible to mail servers and, in many jurisdictions, to law enforcement without a warrant. Your email provider can still see who you emailed, when, and how often. That pattern can reveal a lot on its own.</div></div>

      <p>End-to-end encryption — like PGP, or what ProtonMail uses between its users — encrypts the body of the email. But the headers, including who you emailed and when, remain visible to mail servers and, in many jurisdictions, to law enforcement without a warrant. Your email provider knows your entire communication graph: everyone you've ever emailed, how often, and when.</p>

      <h2>Phone Call Metadata: The Foundation of Mass Surveillance</h2>
      <p>The revelations from Edward Snowden in 2013 showed that the NSA had been collecting phone metadata for virtually every phone call made in the United States — not the content of calls, just the metadata. Critics asked: how revealing can that really be, without hearing the conversations?</p>
      <p>Researchers at Stanford University answered that question directly. They recruited volunteers and asked them to share their phone metadata — call logs showing who called whom, when, and for how long. Then researchers tried to infer private information about the volunteers from the metadata alone. Results: they could identify people with heart conditions (from calls to cardiologists), people with cancer (from oncology clinics), people involved in substance abuse recovery, people who owned guns, people who had abortions, and much more. All without hearing a single word of any conversation.</p>
      <p>Your carrier logs this metadata for every call. In many countries, they are required to retain it for two years or more. In the UK, the Investigatory Powers Act requires ISPs to store a year of connection metadata. In the EU, the rules vary by country.</p>

      <h2>The EXIF Problem: Every Photo You Take Carries a Map</h2>
      <p>This is one of the most practical and immediately actionable pieces of metadata knowledge you can have.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div>Every photo your phone takes secretly carries hidden data — including the exact GPS location where it was taken, the precise time, and your phone's make and model. Technically, EXIF (Exchangeable Image File Format) is a standard that embeds this metadata directly into image files, including GPS coordinates, timestamp, device make and model, camera settings, and sometimes the owner's name. This data travels with the image file whenever it is shared, unless explicitly stripped. When you share the photo, all that hidden data goes with it — meaning someone can look at a photo you posted and know exactly where you were standing when you took it.</div></div>

      <p>Every photo taken with a smartphone or modern camera contains embedded data called <strong>EXIF</strong> (EXIF stands for Exchangeable Image File Format — it's hidden data baked into every photo file). This hidden data includes:</p>
      <ul>
        <li>The exact date and time the photo was taken</li>
        <li>The GPS coordinates where the photo was taken — latitude and longitude, often accurate to within a few metres</li>
        <li>The make and model of the camera or phone</li>
        <li>Camera settings (aperture, exposure, ISO)</li>
        <li>Sometimes, the owner's name if set in the device</li>
      </ul>
      <p>When you share a photo directly from your phone — via email, WhatsApp, a forum, or anywhere else that doesn't strip the EXIF data — you are sharing your precise location at the time of the photo. This has caused serious problems for people who shared photos thinking they were anonymous. In 2012, John McAfee (the antivirus software founder) was hiding from police in Guatemala. A Vice journalist photographed him and posted the photo online — complete with GPS coordinates in the EXIF data. McAfee was located within hours.</p>
      <p>Most social media platforms (Facebook, Twitter/X, Instagram) strip EXIF data when you upload photos. But many other places do not: direct email attachments, WhatsApp on some settings, Telegram, forums, and file-sharing services often preserve it intact.</p>

      <h2>How to Strip EXIF Data From Photos</h2>
      <p>Before sharing any sensitive photo, remove its EXIF data. Here's how:</p>
      <p><strong>On Windows (built in, no extra software):</strong></p>
      <ol>
        <li>Right-click the photo file and select <strong>Properties</strong>.</li>
        <li>Click the <strong>Details</strong> tab.</li>
        <li>At the bottom of the tab, click <strong>"Remove Properties and Personal Information"</strong>.</li>
        <li>Select <strong>"Remove the following properties from this file"</strong> and check all boxes, or simply select <strong>"Create a copy with all possible properties removed"</strong> for a clean copy of the file with no metadata.</li>
        <li>Click OK.</li>
      </ol>
      <p><strong>Using ExifCleaner (free, available for Windows, Mac, and Linux):</strong></p>
      <ol>
        <li>Go to <strong>exifcleaner.com</strong> and download ExifCleaner for your operating system.</li>
        <li>Install and open it. The interface is very simple: a large drop zone in the middle of the window.</li>
        <li>Drag and drop any photos onto the window. ExifCleaner will immediately strip all EXIF data from the files. No settings to configure, no accounts to create.</li>
        <li>The original file is modified in place (or you can choose to create clean copies). Done.</li>
      </ol>
      <p><strong>For Advanced Linux Users (MAT2):</strong></p>
      <p>If you use Linux and want a thorough, command-line tool, <strong>MAT2</strong> is an excellent choice. It strips metadata from photos, PDFs, and Office documents, completely destroying all embedded tracking data.</p>
      <p><strong>On iPhone:</strong></p>
      <ol>
        <li>Open the photo in the Photos app.</li>
        <li>Tap the <strong>Share</strong> button (the square with an arrow).</li>
        <li>Before choosing where to share, look for <strong>"Options"</strong> at the top of the share sheet. Tap it.</li>
        <li>Turn off <strong>"Location"</strong>. This removes the GPS data before sharing. Note that other EXIF data (device model, timestamp) may still be included.</li>
      </ol>
      <p><strong>On Android:</strong> The built-in option is limited. Use a free app like <strong>"Photo Exif Editor"</strong> from the Play Store to view and remove metadata from photos before sharing.</p>

      <h2>Document Metadata: The Hidden Author</h2>
      <p>Microsoft Office files (Word documents, Excel spreadsheets, PowerPoint presentations) and PDF files contain metadata too. A Word document typically includes:</p>
      <ul>
        <li>The author's name and company name (taken from the Office installation)</li>
        <li>The date the document was created and last modified</li>
        <li>A complete revision history, including deleted text, in some cases</li>
        <li>The names of everyone who edited the document</li>
        <li>The name of the computer it was created on</li>
      </ul>
      <p>This has caused real-world problems. In 2003, the UK government published a dossier on Iraq's weapons of mass destruction as a Word document. A researcher examined the document's metadata and found that it had been extensively edited by several named officials and appeared to have been copied from another document — which contradicted the government's claims about its origin. The metadata blew up a political cover story.</p>
      <p>To remove metadata from a Word document before sharing: go to <strong>File &gt; Info &gt; Check for Issues &gt; Inspect Document</strong>. Run the inspection and click "Remove All" next to each category of metadata found.</p>

      <h2>What You Can Do About It</h2>
      <p>You can't avoid creating metadata entirely — it's inherent to how digital systems work. But you can significantly reduce what gets collected and shared:</p>
      <ul>
        <li><strong>Strip EXIF data from photos</strong> before sharing them anywhere other than trusted platforms that do it for you.</li>
        <li><strong>Use Signal for sensitive communications</strong>. Signal minimises the metadata it stores about your conversations. Unlike regular phone carriers, Signal cannot tell police who you messaged or when — they've proven this in court. Signal's "Sealed Sender" feature also hides who is initiating a conversation, so even Signal's servers don't know the full picture.</li>
        <li><strong>Use encrypted DNS</strong> (see the smartphone hardening guide) to prevent your internet provider from seeing which websites you visit, even when the content is encrypted by HTTPS.</li>
        <li><strong>Remove document metadata</strong> before sharing Word files, PDFs, or spreadsheets with external parties.</li>
        <li><strong>Be conscious of timing patterns.</strong> If you consistently check a certain website at the same time each day, that pattern can be identified even if the content is encrypted. This is hard to prevent, but worth being aware of.</li>
      </ul>
    `
  };
