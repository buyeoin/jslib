import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const videoCode = `<link
  href="https://vjs.zencdn.net/8.10.0/video-js.css"
  rel="stylesheet"
/>

<video
  id="my-video"
  class="video-js"
  controls
  preload="auto"
  width="640"
  height="360"
  data-setup="{}"
>
  <source src="movie.mp4" type="video/mp4" />
  <!-- HLS도 가능: <source src="stream.m3u8" type="application/x-mpegURL" /> -->
</video>

<script src="https://vjs.zencdn.net/8.10.0/video.min.js"></script>
<script>
  const player = videojs("my-video");
</script>`

const plyrCode = `<link
  rel="stylesheet"
  href="https://cdn.plyr.io/3.7.8/plyr.css"
/>

<video id="player" playsinline controls>
  <source src="movie.mp4" type="video/mp4" />
</video>

<script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>
<script>
  const player = new Plyr("#player", {
    autoplay: false,
  });
</script>`

const hlsCode=`<video id="video" controls width="640" height="360"></video>

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>
  const video = document.getElementById("video");
  const src = "https://example.com/stream.m3u8";

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    // Safari 등 HLS 지원 브라우저
    video.src = src;
  } else if (Hls.isSupported()) {
    // 기타 브라우저: hls.js 사용
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
  } else {
    console.error("HLS not supported");
  }
</script>`

const dashCode = `<video id="videoPlayer" controls width="640" height="360"></video>

<script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
<script>
  const url = "https://example.com/manifest.mpd";
  const video = document.getElementById("videoPlayer");
  const player = dashjs.MediaPlayer().create();

  player.initialize(video, url, true); // true면 자동 재생
</script>`

const clapprCode = `<div id="player"></div>

<script src="https://cdn.jsdelivr.net/npm/@clappr/player@latest/dist/clappr.min.js"></script>
<script>
  const player = new Clappr.Player({
    source: "https://example.com/video.mp4",
    parentId: "#player",
    width: 640,
    height: 360,
    autoPlay: false,
    mute: false,
  });
</script>`

const vimeCode = `<script type="module" src="https://cdn.jsdelivr.net/npm/@vime/core@5/dist/vime/vime.esm.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@5/themes/default.css" />

<vime-player controls>
  <vime-video>
    <source data-src="movie.mp4" type="video/mp4" />
  </vime-video>
</vime-player>`

function VideoPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}video.jpg`} alt="" />
        <p>VIDEO</p>
      </div>
      <section className="contents">
        <h2>Video.js (<a href="https://videojs.org" target="_blank">https://videojs.org</a>)</h2>
        <ul className="info">
          <li>가장 널리 쓰이는 오픈 소스 HTML5 비디오 플레이어 중 하나</li>
          <li>HLS, DASH 같은 스트리밍 포맷까지 지원하고, 플러그인/스킨 생태계가 매우 풍부함</li>
          <li>데스크톱, 모바일, 스마트 TV까지 다양한 환경에서 사용 가능</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {videoCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Plyr (<a href="https://plyr.io" target="_blank">https://plyr.io</a>)</h2>
        <ul className="info">
          <li>심플하고 예쁜 디자인이 강점인 HTML5/YouTube/Vimeo 미디어 플레이어</li>
          <li>접근성(Accessibility)과 커스터마이징에 신경쓴 설계, CSS 커스텀으로 디자인 변경이 쉬움</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {plyrCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>hls.js (<a href="https://github.com/video-dev/hls.js" target="_blank">https://github.com/video-dev/hls.js</a>)</h2>
        <ul className="info">
          <li>브라우저에서 HLS(m3u8) 를 재생하기 위한 자바스크립트 라이브러리</li>
          <li>HTML5 &lt;video&gt; + Media Source Extensions(MSE)을 사용하여 HLS 스트림을 재생</li>
          <li>Safari처럼 HLS를 기본 지원하는 브라우저는 &lt;video&gt;에 직접 src를 넣고, 그 외 브라우저는 hls.js로 처리하는 패턴이 일반적</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {hlsCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>dash.js (<a href="https://reference.dashif.org/dash.js/" target="_blank">https://reference.dashif.org/dash.js/</a>)</h2>
        <ul className="info">
          <li>MPEG-DASH 스트리밍 재생을 위한 레퍼런스 클라이언트(참조 구현)</li>
          <li>DASH Industry Forum(DASH-IF)에서 관리하는 공식 레퍼런스 플레이어로, MSE/EME를 지원하는 브라우저에서 동작</li>
          <li>어댑티브 스트리밍, DRM, 자막 등 대규모 스트리밍 서비스에 적합</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {dashCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Clappr (<a href="https://clappr.io" target="_blank">https://clappr.io</a>)</h2>
        <ul className="info">
          <li>플러그인 지향, HTML5-first 미디어 플레이어</li>
          <li>대부분의 비디오 포맷을 &lt;video&gt; 기반으로 재생하고, 플러그인을 추가해 기능을 확장하는 구조</li>
          <li>커스터마이징과 확장이 쉬워서 서비스에 맞는 플레이어를 만들기 좋음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {clapprCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Vime (<a href="https://vimejs.com" target="_blank">https://vimejs.com</a>)</h2>
        <ul className="info">
          <li>Video.js / Plyr의 현대적인 대안으로 소개되는 미디어 플레이어</li>
          <li>HTML5, HLS, DASH, YouTube, Vimeo, Dailymotion 등 다양한 소스를 통합 지원</li>
          <li>Web Components 기반으로 만들어져서 프레임워크에 상관없이 사용 가능 (React, Vue, Svelte 등 어디서나)</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {vimeCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default VideoPage;
