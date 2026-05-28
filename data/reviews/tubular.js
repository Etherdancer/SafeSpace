export default {
    id: 'tubular',
    website: 'https://github.com/polymorphicshade/Tubular',
    index: 219,
    name: 'Tubular',
    tagline: 'NewPipe, but with SponsorBlock included',
    category: 'Media Player',
    scores: {
      dataPrivacy: 27,
      security: 26,
      tracking: 19,
      userControl: 9,
      transparency: 10,
      total: 91
    },
    externalScores: {
      appStore: 4.2,
    },
    platforms: ['Android'],
    pricing: 'Free',
    openSource: true,
    auditedBy: 'Community review',
    relatedArticles: [],
    verdict: 'If you love NewPipe but hate in-video sponsor reads, Tubular is the perfect combination.',
    pros: [
      'Automatically skips sponsored segments in videos',
      'Brings back the YouTube Dislike button',
      'All the same privacy benefits and background play of NewPipe'
    ],
    cons: [
      'Updates slightly slower than the main NewPipe app',
      'Requires installation via F-Droid or GitHub'
    ],
    content: `
      <h2>Why Tubular?</h2>
      <p>NewPipe is fantastic for privacy and blocking traditional YouTube ads. But what about when a creator embeds a sponsored ad read directly into their video? Tubular is a customized version (a "fork") of NewPipe that solves this problem.</p>

      <div class="callout callout--tip"><span class="callout__icon">&#128161;</span><div><b>Technical:</b> Tubular integrates the SponsorBlock API and the Return YouTube Dislike API directly into the NewPipe codebase. <br><b>Plain English:</b> It connects to community databases to figure out exactly when a sponsored segment starts and ends, and skips it automatically. It also shows you the true dislike count.</div></div>

      <h2>How it works</h2>
      <p>Tubular looks and feels exactly like NewPipe. It functions exactly the same way: it grabs videos directly from YouTube anonymously without logging you in. The only difference is that when you watch a video, colored bars appear on the timeline indicating where the sponsor reads are, and the app gracefully skips over them.</p>
      
      <h2>A Great Alternative</h2>
      <p>If you want the stability and direct-connection speed of NewPipe, but the sponsor-skipping abilities of LibreTube, Tubular sits perfectly in the middle.</p>
    `
  };
