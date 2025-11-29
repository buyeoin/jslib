import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const gsapCode = `<div class="box"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  gsap.to(".box", {
    x: 200,
    duration: 1.5,
    ease: "power2.out",
  });
</script>`

const animeCode = `<div class="box"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
  anime({
    targets: ".box",
    translateX: 250,
    duration: 1500,
    easing: "easeOutExpo",
  });
</script>`

const lottieCode = `<div id="lottie"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
<script>
  lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation.json", // Lottie JSON 파일
  });
</script>`

const velocityCode = `<div class="box"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.min.js"></script>
<script>
  Velocity(document.querySelector(".box"), {
    translateX: "250px",
    opacity: 1
  }, {
    duration: 1000,
    easing: "easeOutQuad"
  });
</script>`

const scrollmagicCode = `<div id="trigger"></div>
<div id="animate-box"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
<script>
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 300
  })
  .setClassToggle("#animate-box", "active")
  .addTo(controller);
</script>`

const aosCode = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<div data-aos="fade-up">
  스크롤하면 나타납니다.
</div>

<script>
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true
  });
</script>`

function AnimationPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}animation.jpg`} alt="" />
        <p>ANIMATION</p>
      </div>
      <section className="contents">
        <h2>GSAP (GreenSock Animation Platform) (<a href="https://greensock.com" target="_blank">https://greensock.com</a>)</h2>
        <ul className="info">
          <li>웹 애니메이션 라이브러리 중 성능, 기능, 생태계 모두 최강급</li>
          <li>CSS, SVG, Canvas, React, Vue, Three.js 등 어떤 요소도 부드럽게 애니메이션 가능</li>
          <li>Timeline 기능으로 복잡한 애니메이션을 순차/병렬로 조립 가능</li>
          <li>스크롤 기반 애니메이션을 위한 ScrollTrigger 플러그인도 제공</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {gsapCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Anime.js (<a href="https://animejs.com" target="_blank">https://animejs.com</a>)</h2>
        <ul className="info">
          <li>크기 15KB 이하의 가볍고 강력한 애니메이션 엔진</li>
          <li>CSS, SVG, DOM, JS 객체 등 다양한 요소 애니메이션 가능</li>
          <li>Keyframes, Timeline, easing 기능 제공</li>
          <li>직관적인 API로 학습 난이도가 낮음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {animeCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Lottie (lottie-web) (<a href="https://airbnb.io/lottie" target="_blank">https://airbnb.io/lottie</a>)</h2>
        <ul className="info">
          <li>After Effects + Bodymovin 플러그인으로 만든 벡터 애니메이션 JSON 파일을 웹에서 구현</li>
          <li>파일 크기가 매우 작고, 어떤 해상도에서도 깨지지 않음</li>
          <li>아이콘 애니메이션, 로딩 모션, UI 트랜지션에 많이 사용</li>
          <li>React/Vue/Svelte 등 여러 프레임워크용 패키지도 존재</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {lottieCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Velocity.js (<a href="http://velocityjs.org" target="_blank">http://velocityjs.org</a>)</h2>
        <ul className="info">
          <li>jQuery 애니메이션보다 빠르고 강력한 고성능 애니메이션 엔진</li>
          <li>CSS 애니메이션보다 더 세밀하게 제어 가능</li>
          <li>jQuery 없이도 동작하며 .animate() 스타일의 문법을 제공</li>
          <li>UI 전환, 리스트 애니메이션 등에 많이 쓰임</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {velocityCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>ScrollMagic (<a href="http://scrollmagic.io" target="_blank">http://scrollmagic.io</a>)</h2>
        <ul className="info">
          <li>스크롤 위치에 따라 애니메이션을 제어하는 라이브러리</li>
          <li>요소 고정(pin), 인/아웃 트리거, 스크롤 길이에 따른 효과 제어 가능</li>
          <li>GSAP과 함께 사용하면 매우 강력</li>
          <li>최근 업데이트는 뜸하지만 여전히 많이 사용됨</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {scrollmagicCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>AOS (Animate On Scroll) (<a href="https://michalsnik.github.io/aos/" target="_blank">https://michalsnik.github.io/aos/</a>)</h2>
        <ul className="info">
          <li>스크롤 시 자동으로 애니메이션 적용되는 매우 간단한 라이브러리</li>
          <li>data-aos 속성만 넣으면 애니메이션 끝</li>
          <li>jQuery 불필요하고, 설치 후 즉시 사용 가능</li>
          <li>가볍고 단순해서 기업/랜딩 페이지에서 많이 사용</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {aosCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default AnimationPage;
