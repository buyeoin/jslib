import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const lodashCode = `<script src="https://cdn.jsdelivr.net/npm/lodash@4/lodash.min.js"></script>
<script>
  const arr = [1, 2, 3, 4, 5];
  console.log(_.shuffle(arr));   // 배열 섞기
  console.log(_.chunk(arr, 2));  // [[1,2], [3,4], [5]]
</script>`

const underscoreCode = `<script src="https://cdn.jsdelivr.net/npm/underscore@1/underscore-min.js"></script>
<script>
  const arr = [1, 2, 3];
  const doubled = _.map(arr, (n) => n * 2);
  console.log(doubled); // [2,4,6]

  console.log(_.min([10, 5, 8])); // 5
</script>`

const uuidCode = `<script src="https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/umd/uuidv4.min.js"></script>
<script>
  const id = uuidv4();
  console.log(id);  // 예: "e5bc1c08-0efe-4a2e-a567-4d7508f94bf9"
</script>`

const validatorCode = `<script src="https://cdn.jsdelivr.net/npm/validator@13/validator.min.js"></script>
<script>
  console.log(validator.isEmail("test@example.com"));     // true
  console.log(validator.isURL("https://google.com"));      // true
  console.log(validator.isNumeric("12345"));               // true
  console.log(validator.isStrongPassword("abc123"));       // false
</script>`

function UtilitiesPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}utilities.jpg`} alt="" />
        <p>UTILITIES</p>
      </div>
      <section className="contents">
        <h2>Lodash (<a href="https://lodash.com" target="_blank">https://lodash.com</a>)</h2>
        <ul className="info">
          <li>JavaScript에서 가장 유명한 유틸리티(Utility) 함수 모음 라이브러리</li>
          <li>배열, 객체, 숫자, 문자열 등을 간단하고 안전하게 다루기 위해 설계됨</li>
          <li>deep clone, merge, debounce, throttle 등 실무에서 자주 쓰는 기능들을 많이 제공</li>
          <li>Underscore.js보다 개선된 성능과 API로 널리 사용됨</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {lodashCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Underscore.js (<a href="https://underscorejs.org" target="_blank">https://underscorejs.org</a>)</h2>
        <ul className="info">
          <li>Lodash의 기반이 된 초기 유틸리티 라이브러리</li>
          <li>순수 JS 환경에서 유용한 기능(맵, 리듀스, 필터, 템플릿 등)을 제공</li>
          <li>Lodash가 등장하면서 사용 빈도는 줄었지만 레거시 프로젝트에서 여전히 많이 사용됨</li>
          <li>함수형 스타일 API 제공</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {underscoreCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>uuid (<a href="https://www.npmjs.com/package/uuid" target="_blank">https://www.npmjs.com/package/uuid</a>)</h2>
        <ul className="info">
          <li>고유한 ID(UUID) 를 생성하는 초경량 라이브러리</li>
          <li>DB PK, DOM 요소 키, React key 등에서 매우 자주 사용</li>
          <li>v4(UUID 랜덤 생성), v1(시간 기반) 등을 지원</li>
          <li>속도 빠르고 충돌 확률 극히 낮음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {uuidCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>Validator.js (<a href="https://github.com/validatorjs/validator.js" target="_blank">https://github.com/validatorjs/validator.js</a>)</h2>
        <ul className="info">
          <li>문자열 기반의 유효성 검사 라이브러리</li>
          <li>이메일, URL, 숫자, 날짜, 비밀번호 강도 등 수십 가지 검증 함수 제공</li>
          <li>서버(Node)와 클라이언트 모두에서 사용 가능</li>
          <li>폼 검증, 입력값 유효성 검사에 매우 적합</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {validatorCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default UtilitiesPage;
