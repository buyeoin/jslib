import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SwiperPage from "./pages/SwiperPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <div>
      {/* 상단 메뉴 영역 */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Main
        </Link>
        <Link to="/swiper" style={{ marginRight: "10px" }}>
          Swiper
        </Link>
        <Link to="/calendar">
          Calendar
        </Link>
      </nav>

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
