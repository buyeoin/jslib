import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const swiperCode = `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<!-- HTML 구조 -->
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">슬라이드 1</div>
    <div class="swiper-slide">슬라이드 2</div>
    <div class="swiper-slide">슬라이드 3</div>
  </div>

  <!-- 옵션: 네비게이션/페이지네이션 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-pagination"></div>
</div>

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
</script>`

const slickCode = `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
/>

<!-- HTML -->
<div class="my-slick">
  <div>슬라이드 1</div>
  <div>슬라이드 2</div>
  <div>슬라이드 3</div>
</div>

<!-- JS -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script>
  $(".my-slick").slick({
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
</script>`

const glideCode = `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css"
/>

<!-- HTML -->
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">슬라이드 1</li>
      <li class="glide__slide">슬라이드 2</li>
      <li class="glide__slide">슬라이드 3</li>
    </ul>
  </div>
</div>

<!-- JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js"></script>
<script>
  new Glide(".glide", {
    type: "carousel",
    autoplay: 3000,
  }).mount();
</script>`

const splideCode = `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
/>

<!-- HTML -->
<div id="splide" class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">슬라이드 1</li>
      <li class="splide__slide">슬라이드 2</li>
      <li class="splide__slide">슬라이드 3</li>
    </ul>
  </div>
</div>

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script>
  new Splide("#splide", {
    type: "loop",
    autoplay: true,
    interval: 3000,
  }).mount();
</script>`

const flickityCode = `<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css"
/>

<!-- HTML -->
<div class="main-carousel">
  <div class="carousel-cell">슬라이드 1</div>
  <div class="carousel-cell">슬라이드 2</div>
  <div class="carousel-cell">슬라이드 3</div>
</div>

<!-- JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.pkgd.min.js"></script>
<script>
  const flkty = new Flickity(".main-carousel", {
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
  });
</script>`

function SwiperPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}swiper.jpg`} alt="" />
        <p>SLIDER/CAROUSEL</p>
      </div>
      <section className="contents">
        <h2>Swiper (<a href="https://swiperjs.com" target="_blank">https://swiperjs.com</a>)</h2>
        <ul className="info">
          <li>모바일 터치 슬라이더의 사실상 표준에 가까운 라이브러리</li>
          <li>드래그/스와이프, 페이징, 네비게이션 버튼, 루프, 오토플레이 등 거의 모든 기능 제공</li>
          <li>바닐라 JS, React, Vue, Svelte 등 여러 프레임워크용 래퍼 지원</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {swiperCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Slick Carousel (<a href="http://kenwheeler.github.io/slick/" target="_blank">http://kenwheeler.github.io/slick/</a>)</h2>
        <ul className="info">
          <li>“The last carousel you’ll ever need”라는 슬로건의 jQuery 기반 캐러셀 플러그인</li>
          <li>반응형, 무한 루프, 여러 장 표시, 센터 모드, Lazy Loading 등 기능 풍부</li>
          <li>React용 래퍼(react-slick)도 많이 사용됨</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {slickCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Glide (<a href="https://glidejs.com" target="_blank">https://glidejs.com</a>)</h2>
        <ul className="info">
          <li>의존성 없는(Dependency-free) ES6 기반 슬라이더</li>
          <li>가볍고, 코드 구조가 단순해서 커스터마이징하기 좋음</li>
          <li>기본 기능 위주의 “심플한 슬라이더”를 만들고 싶을 때 적합</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {glideCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Splide (<a href="https://splidejs.com" target="_blank">https://splidejs.com</a>)</h2>
        <ul className="info">
          <li>TypeScript로 작성된 가볍고 접근성이 좋은 슬라이더/캐러셀</li>
          <li>의존성 없음(바닐라 JS), ARIA 속성 등 접근성(A11y)에 신경 쓴 구조</li>
          <li>썸네일 슬라이더, 동기화 슬라이더 등 고급 패턴도 지원</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {splideCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Flickity (<a href="https://flickity.metafizzy.co" target="_blank">https://flickity.metafizzy.co</a>)</h2>
        <ul className="info">
          <li>“Touch, responsive, flickable carousels”라는 슬로건의 부드러운 물리 기반 애니메이션이 특징</li>
          <li>갤러리/카드형 레이아웃에 잘 어울리고, 모바일 터치 제스처가 자연스러움</li>
          <li>옵션으로 Free scroll, 셀 정렬, 드래그 가능 여부 등 세밀한 설정 가능</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {flickityCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default SwiperPage;
