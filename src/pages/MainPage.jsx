import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}main.jpg`} alt="" />
        <p>자주 사용되는 JS LIBRARY를 소개합니다.</p>
      </div>
      <ul className="main-list">
        <li>
          <Link to="/swiper">Slider</Link>
          <ul>
            <li>Swiper</li>
            <li>Slick Carousel</li>
            <li>Glide.js</li>
            <li>Splide.js</li>
            <li>Flickity</li>
          </ul>
        </li>
        <li>
          <Link to="/sound">Sound</Link>
          <ul>
            <li>Howler.js</li>
            <li>Tone.js</li>
            <li>WaveSurfer.js</li>
            <li>Pizzicato.js</li>
            <li>SoundJS</li>
          </ul>
        </li>
        <li>
          <Link to="/video">Video</Link>
          <ul>
            <li>Video.js</li>
            <li>Plyr</li>
            <li>hls.js</li>
            <li>dash.js</li>
            <li>Clappr</li>
            <li>Vime</li>
          </ul>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
          <ul>
            <li>Flatpickr</li>
            <li>Day.js</li>
            <li>Moment.js</li>
            <li>Pikaday</li>
            <li>FullCalendar</li>
          </ul>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
          <ul>
            <li>GSAP</li>
            <li>Anime.js</li>
            <li>Lottie</li>
            <li>Velocity.js</li>
            <li>ScrollMagic</li>
            <li>AOS(Animate On Scroll)</li>
          </ul>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
          <ul>
            <li>Chart.js</li>
            <li>D3.js</li>
            <li>ECharts</li>
            <li>ApexCharts</li>
          </ul>
        </li>
        <li>
          <Link to="/utilities">Utilities</Link>
          <ul>
            <li>Lodash</li>
            <li>Underscore.js</li>
            <li>uuid</li>
            <li>Validator.js</li>
          </ul>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
          <ul>
            <li>Quill</li>
            <li>CKEditor</li>
            <li>TinyMCE</li>
            <li>TipTap</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
