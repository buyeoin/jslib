import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SwiperPage from "./pages/SwiperPage";
import SoundPage from "./pages/SoundPage";
import VideoPage from "./pages/VideoPage";
import CalendarPage from "./pages/CalendarPage";
import AnimationPage from "./pages/AnimationPage";
import ChartsPage from "./pages/ChartsPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <div className='wrap'>
      {/* 상단 메뉴 영역 */}
      <header>
        <h1><em className='font-logo'>js</em><strong className='font-logo-sub'>Library</strong></h1>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/swiper">
            Slider
          </Link>
          <Link to="/sound">
            Sound
          </Link>
          <Link to="/video">
            Video
          </Link>
          <Link to="/calendar">
            Calendar
          </Link>
          <Link to="/animation">
            Animation
          </Link>
          <Link to="/charts">
            Charts
          </Link>
          <Link to="/utilities">
            Utilities
          </Link>
          <Link to="/editor">
            Editor
          </Link>
        </nav>
      </header>
      

      {/* 라우트에 따라 페이지가 바뀌는 영역 */}
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/swiper" element={<SwiperPage />} />
          <Route path="/sound" element={<SoundPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </main>

      <footer>
        &copy; 서울사이버대학교 인공지능학과 - leekwangwon
      </footer>
    </div>
  );
}

export default App
