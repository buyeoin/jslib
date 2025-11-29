import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const howlerCode = `<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
<script>
  const sound = new Howl({
    src: ["audio.mp3"],  // 여러 포맷을 배열로 넣을 수도 있음
    loop: true,
    volume: 0.8,
  });

  // 재생
  sound.play();

  // 일시정지
  // sound.pause();

  // 정지
  // sound.stop();
</script>`

const toneCode = `<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js"></script>
<button id="play">Play synth</button>

<script>
  const synth = new Tone.Synth().toDestination();

  document.getElementById("play").addEventListener("click", async () => {
    // iOS 등 정책 때문에 사용자 인터랙션 안에서 start 필요
    await Tone.start();
    synth.triggerAttackRelease("C4", "8n"); // 도음 8분음표 길이로 재생
  });
</script>`

const wavesurferCode = `<div id="waveform"></div>
<script src="https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.min.js"></script>
<script>
  const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#999",
    progressColor: "#4f46e5",
    url: "audio.mp3",
  });

  // 클릭하면 재생/일시정지 토글
  document.getElementById("waveform").addEventListener("click", () => {
    wavesurfer.playPause();
  });
</script>`

const pizzicatoCode = `<script src="https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.4/Pizzicato.min.js"></script>

<script>
  // 파일 재생
  const sound = new Pizzicato.Sound("audio.mp3", () => {
    sound.play();
  });

  // 간단한 이펙트 추가 (예: Reverb)
  const reverb = new Pizzicato.Effects.Reverb({
    time: 0.5,
    mix: 0.6,
  });

  sound.addEffect(reverb);
</script>`

const soundCode = `<script src="https://code.createjs.com/1.0.0/soundjs.min.js"></script>

<script>
  // 사운드 등록
  createjs.Sound.registerSound("audio.mp3", "bgm");

  // 로딩이 끝난 뒤 재생
  createjs.Sound.on("fileload", (event) => {
    if (event.id === "bgm") {
      createjs.Sound.play("bgm", { loop: -1, volume: 0.7 });
    }
  });
</script>`

function SoundPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}sound.jpg`} alt="" />
        <p>SOUND/AUDIO</p>
      </div>
      <section className="contents">
        <h2>Howler.js (<a href="https://howlerjs.com" target="_blank">https://howlerjs.com</a>)</h2>
        <ul className="info">
          <li>“Audio library for the modern web”이라는 슬로건의 대표 사운드 라이브러리</li>
          <li>Web Audio API를 기본으로 사용하고, 안 되면 HTML5 Audio로 자동 폴백 → 브라우저 호환성 좋음</li>
          <li>간단한 API + 오디오 스프라이트, 루프, 페이드, 볼륨 제어 등을 지원</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {howlerCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Tone.js (<a href="https://tonejs.github.io" target="_blank">https://tonejs.github.io</a>)</h2>
        <ul className="info">
          <li>“브라우저에서 음악을 만드는 Web Audio 프레임워크”</li>
          <li>단순 재생이 아니라, 신디사이저, 이펙트, 시퀀서, 루프, 트랜스포트(tempo/timeline) 등 DAW 느낌으로 다룰 수 있음</li>
          <li>음악/사운드 인터랙션, 사운드 디자인, 웹 악기 만들 때 최강자급</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {toneCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>WaveSurfer.js (<a href="https://wavesurfer.xyz" target="_blank">https://wavesurfer.xyz</a>)</h2>
        <ul className="info">
          <li>“파형(waveform) 시각화 + 플레이어” 라이브러리</li>
          <li>음성/음악 파일을 파형으로 그려주고, 클릭/드래그로 탐색, 줌, 구간 마킹(Regions) 등 가능</li>
          <li>팟캐스트/녹음 편집기/음성 플레이어 UI 만들 때 아주 많이 사용</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {wavesurferCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Pizzicato.js (<a href="https://alemangui.github.io/pizzicato/" target="_blank">https://alemangui.github.io/pizzicato/</a>)</h2>
        <ul className="info">
          <li>Web Audio API를 쉽게 쓰도록 래핑한 가벼운 라이브러리</li>
          <li>간단한 API + 여러 가지 이펙트(리버브, 딜레이, 디스토션 등) 내장</li>
          <li>코드가 직관적이라, 교육용/데모용으로 좋음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {pizzicatoCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>SoundJS (CreateJS) (<a href="https://createjs.com/soundjs" target="_blank">https://createjs.com/soundjs</a>)</h2>
        <ul className="info">
          <li>CreateJS 패밀리의 오디오 라이브러리로, 다양한 브라우저/플랫폼에서 오디오를 일관되게 재생하기 위한 목적</li>
          <li>플러그인 구조로 되어 있어서, 필요하면 플러시(옛날) 같은 폴백도 추가 가능</li>
          <li>예전 HTML5 게임/캔버스 프로젝트에서 많이 쓰였고 지금도 레거시 지원용으로 종종 사용</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {soundCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default SoundPage;
