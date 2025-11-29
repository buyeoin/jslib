import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const quillCode = `<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />

<div id="editor"></div>

<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
<script>
  const quill = new Quill("#editor", {
    theme: "snow"
  });
</script>`

const ckeditorCode = `<script src="https://cdn.ckeditor.com/ckeditor5/41.0.0/classic/ckeditor.js"></script>

<div id="editor"></div>

<script>
  ClassicEditor
    .create(document.querySelector("#editor"))
    .catch(error => console.error(error));
</script>`

const tinymceCode = `<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js"></script>

<textarea id="editor"></textarea>

<script>
  tinymce.init({
    selector: "#editor",
    height: 300,
    plugins: "link image table code",
    toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code"
  });
</script>`

const tiptapCode = `<script src="https://cdn.jsdelivr.net/npm/@tiptap/core@2/dist/tiptap-core.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tiptap/extension-starter-kit@2/dist/tiptap-extension-starter-kit.umd.js"></script>

<div id="editor"></div>

<script>
  const editor = new window.tiptap.Editor({
    element: document.querySelector("#editor"),
    extensions: [window.tiptapStarterKit.StarterKit],
    content: "<p>Hello TipTap!</p>",
  });
</script>`

function EditorPage() {
  return (
    <div>
      <div className="visual-area">
        <img src={`${import.meta.env.BASE_URL}editor.jpg`} alt="" />
        <p>EDITOR</p>
      </div>
      <section className="contents">
        <h2>Quill (<a href="https://quilljs.com" target="_blank">https://quilljs.com</a>)</h2>
        <ul className="info">
          <li>매우 가벼운 WYSIWYG 에디터</li>
          <li>기본 UI가 깔끔하고 단순하여 커스터마이징하기 쉬움</li>
          <li>포맷팅, 리스트, 링크, 이미지 등 기본 기능 제공</li>
          <li>모듈/테마 확장이 가능하며 React용 React-Quill 패키지도 널리 사용됨</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {quillCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>CKEditor 5 (<a href="https://ckeditor.com" target="_blank">https://ckeditor.com</a>)</h2>
        <ul className="info">
          <li>가장 풍부한 기능을 가진 상용급 에디터(무료 + 유료 기능 혼합)</li>
          <li>이미지 업로드, 테이블, 미디어 임베드, 코멘트, 협업 기능까지 제공</li>
          <li>Classic, Balloon, Inline 등 다양한 모드 제공</li>
          <li>기업에서 문서 편집용으로 많이 사용되는 프로급 에디터</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {ckeditorCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>TinyMCE (<a href="https://www.tiny.cloud" target="_blank">https://www.tiny.cloud</a>)</h2>
        <ul className="info">
          <li>WordPress 기본 에디터로도 사용되었던 대표적인 WYSIWYG 에디터</li>
          <li>이미지 업로드, 테이블, 미디어 삽입, HTML 모드 등 기능 풍부</li>
          <li>플러그인 기반 구조라 확장성이 높고, UI 커스터마이징도 쉬움</li>
          <li>무료 AND 유료 플러그인 제공</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {tinymceCode}
        </SyntaxHighlighter>
      </section>
      <section className="contents">
        <h2>TipTap (<a href="https://tiptap.dev" target="_blank">https://tiptap.dev</a>)</h2>
        <ul className="info">
          <li>ProseMirror 기반의 최신 에디터</li>
          <li>React/Vue에서 사용하기 매우 좋고, 컴포넌트 기반으로 확장성이 매우 뛰어남</li>
          <li>완전한 헤드리스(Headless) 구조 → UI를 직접 만들 수 있고 자유도가 최고</li>
          <li>현대적인 마크다운/리치 텍스트 에디터를 만들 때 가장 강력한 옵션</li>
          <li>Notion, Slack 같은 스타일을 구현하기 좋음</li>
        </ul>
        <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers>
          {tiptapCode}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default EditorPage;
