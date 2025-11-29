import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const chartCode = `<canvas id="myChart"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        label: "Votes",
        data: [12, 19, 7],
        backgroundColor: ["#f87171", "#60a5fa", "#facc15"]
      }]
    }
  });
</script>`

const d3Code = `<svg id="mySvg" width="300" height="200" style="border:1px solid #ccc;"></svg>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  // 1) SVG 선택
  const svg = d3.select("#mySvg");

  // 2) SVG에 Circle 추가
  svg.append("circle")
     .attr("cx", 150)     // 원의 x 좌표
     .attr("cy", 100)     // 원의 y 좌표
     .attr("r", 50)       // 반지름
     .attr("fill", "steelblue"); // 색상
</script>`

const echartsCode= `<div id="chart" style="width: 400px; height: 300px;"></div>

<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script>
  const chart = echarts.init(document.getElementById("chart"));

  const option = {
    xAxis: { data: ["A", "B", "C"] },
    yAxis: {},
    series: [{
      type: "bar",
      data: [10, 22, 28]
    }]
  };

  chart.setOption(option);
</script>`

const apexchartsCode = `<div id="chart"></div>

<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
  const options = {
    chart: {
      type: "line",
      height: 300
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 25, 50, 49, 60]
      }
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    }
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
</script>`

function ChartsPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}chart.jpg`} alt="" />
        <p>CHARTS/DATA VISUALIZATION</p>
      </div>
      <section className="contents">
        <h2>Chart.js (<a href="https://www.chartjs.org" target="_blank">https://www.chartjs.org</a>)</h2>
        <ul className="info">
          <li>가장 많이 사용하는 가볍고 쉬운 차트 라이브러리</li>
          <li>Line, Bar, Pie, Doughnut, Radar, PolarArea 등 기본 차트 지원</li>
          <li>설치/사용이 매우 쉬워서 React·Vue 프로젝트에서 인기가 높음</li>
          <li>애니메이션, 반응형 레이아웃 지원</li>
          <li>단순 데이터 시각화에 적합</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {chartCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>D3.js (Data-Driven Documents) (<a href="https://d3js.org" target="_blank">https://d3js.org</a>)</h2>
        <ul className="info">
          <li>웹 시각화 라이브러리 중 가장 강력하고 유연한 엔진</li>
          <li>SVG, Canvas, HTML, GeoJSON 등 어떤 출력 방식도 제어 가능</li>
          <li>인터랙티브 그래프, 지도, 네트워크 그래프 등에 최적</li>
          <li>러닝커브가 높지만 실제 서비스/데이터 시각화 업무에서는 강력한 도구</li>
          <li>차트 라이브러리가 아니라 시각화 엔진이라고 보는 것이 정확함</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {d3Code}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>ECharts (Apache ECharts) (<a href="https://echarts.apache.org" target="_blank">https://echarts.apache.org</a>)</h2>
        <ul className="info">
          <li>중국 Baidu에서 개발한 강력한 인터랙티브 차트 라이브러리</li>
          <li>라인, 바, 파이 등 기본 차트는 물론 지리/지도(Geo), 관계망(Graph), 3D 차트, 캔들스틱까지 다양한 차트를 지원</li>
          <li>옵션 기반 설정 방식이며, 매우 세밀한 커스터마이징 가능</li>
          <li>대용량 데이터 렌더링에 최적화</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {echartsCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>ApexCharts (<a href="https://apexcharts.com" target="_blank">https://apexcharts.com</a>)</h2>
        <ul className="info">
          <li>현대적인 UI 스타일의 예쁜 차트를 빠르게 만들기 좋은 라이브러리</li>
          <li>React/Vue/Angular 공식 컴포넌트 제공</li>
          <li>라인, 에어리어, 바 차트가 특히 깔끔하고 기업 대시보드에 많이 사용됨</li>
          <li>옵션 기반으로 설정이 쉬우며, 애니메이션/툴팁/반응형도 우수</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {apexchartsCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default ChartsPage;
