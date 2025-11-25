import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SwiperPage from "./pages/SwiperPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <div className='wrap'>
      {/* 상단 메뉴 영역 */}
      <header>
        <h1><em className='font-logo'>js</em><strong className='font-logo-sub'>Library</strong></h1>
        <nav>
          <Link to="/">
            Main
          </Link>
          <Link to="/swiper">
            Slider
          </Link>
          <Link to="/calendar">
            Media
          </Link>
          <Link to="/calendar">
            Calendar
          </Link>
          <Link to="/calendar">
            Animation
          </Link>
          <Link to="/calendar">
            Gallery
          </Link>
          <Link to="/calendar">
            Graphics
          </Link>
          <Link to="/calendar">
            Data Visualization
          </Link>
          <Link to="/calendar">
            Utilities
          </Link>
          <Link to="/calendar">
            Editor
          </Link>
          <Link to="/calendar">
            Search
          </Link>
        </nav>
      </header>
      

      {/* 라우트에 따라 페이지가 바뀌는 영역 */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/swiper" element={<SwiperPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
