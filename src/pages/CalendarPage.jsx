import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const flatpickrCode = `<input id="date" type="text" placeholder="날짜를 선택하세요" />

<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

<script>
  flatpickr("#date", {
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: "ko",      // 한국어 로케일도 설정 가능 (별도 로케일 스크립트 필요)
  });
</script>`

const dayCode = `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>

<script>
  const now = dayjs();
  console.log(now.format("YYYY-MM-DD HH:mm:ss"));

  const nextWeek = now.add(7, "day");
  console.log(nextWeek.format("YYYY-MM-DD"));

  const diff = nextWeek.diff(now, "day"); // 7
  console.log(diff);
</script>`

const momentCode = `<script src="https://cdn.jsdelivr.net/npm/moment@2/min/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/moment@2/locale/ko.js"></script>

<script>
  moment.locale("ko");

  const now = moment();
  console.log(now.format("YYYY-MM-DD HH:mm:ss"));

  const nextWeek = now.clone().add(7, "days");
  console.log(nextWeek.format("YYYY년 M월 D일"));

  const diff = nextWeek.diff(now, "days"); // 7
  console.log(diff);
</script>`

const pikadayCode = `<input type="text" id="datepicker" placeholder="날짜 선택" />

<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/css/pikaday.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.min.js"></script>

<script>
  const picker = new Pikaday({
    field: document.getElementById("datepicker"),
    format: "YYYY-MM-DD",
  });
</script>`

const fullcalendarCode = `<div id="calendar"></div>

<link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css"
      rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      locale: "ko",
      events: [
        { title: "회의", start: "2025-12-01" },
        { title: "프로젝트 마감", start: "2025-12-10" },
      ],
    });

    calendar.render();
  });
</script>`

function CalendarPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}calendar.jpg`} alt="" />
        <p>CALENDAR/DATE PICKER</p>
      </div>
      <section className="contents">
        <h2>Flatpickr (<a href="https://flatpickr.js.org" target="_blank">https://flatpickr.js.org</a>)</h2>
        <ul className="info">
          <li>가볍고 강력한(datetime) 날짜·시간 선택기</li>
          <li>의존성 없음(순수 JS), 다양한 테마/플러그인 제공</li>
          <li>날짜 + 시간, 범위 선택, 여러 날짜 선택, 특정 날짜/범위 비활성화 등 기능 풍부</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {flatpickrCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Day.js (<a href="https://day.js.org" target="_blank">https://day.js.org</a>)</h2>
        <ul className="info">
          <li>2KB 정도의 초경량 날짜 라이브러리</li>
          <li>날짜 파싱, 검증, 조작, 포맷팅을 지원하며, API가 Moment.js와 거의 호환됨</li>
          <li>Immutable 객체(원본을 변경하지 않고 항상 새 인스턴스 반환)라 버그를 줄이기 좋음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {dayCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Moment.js (<a href="https://momentjs.com" target="_blank">https://momentjs.com</a>)</h2>
        <ul className="info">
          <li>한때 사실상 표준이었던 날짜 라이브러리</li>
          <li>날짜 파싱, 검증, 조작, 포맷팅, 여러 로케일 지원</li>
          <li>현재는 레거시 프로젝트(maintenance mode) 로, 새 프로젝트에는 Day.js, date-fns 등 대안을 권장하지만 기존 코드베이스에 많이 사용됨</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {momentCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Pikaday (<a href="https://github.com/Pikaday/Pikaday" target="_blank">https://github.com/Pikaday/Pikaday</a>)</h2>
        <ul className="info">
          <li>가볍고 의존성 없는 순수 JavaScript Datepicker</li>
          <li>날짜만 선택하는 용도로 설계(시간 선택은 기본 지원 X)</li>
          <li>CSS 모듈 구조로 되어 있어 스타일 커스터마이징이 쉬움</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {pikadayCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>FullCalendar (<a href="https://fullcalendar.io" target="_blank">https://fullcalendar.io</a>)</h2>
        <ul className="info">
          <li>풀사이즈 일정 캘린더 UI 라이브러리 (month/week/day 보기, 드래그 & 드롭, 이벤트 관리)</li>
          <li>React/Vue/Angular용 컴포넌트도 제공하고, 대규모 일정 관리 화면에 특화</li>
          <li>이벤트 드래그/리사이즈, 툴팁, 백그라운드 이벤트, Google Calendar 연동 등 강력한 기능 제공</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {fullcalendarCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default CalendarPage;
