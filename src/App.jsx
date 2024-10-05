import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1 className="headerTitle">Pedro Dantas Leite</h1>
        <div className="headerSubtitle">Desenvolvedor Full Stack</div>
        <span className="actionBar">
          <button title="Resume">
            <img className="invert" src="/icons8-resume-100.png" />
          </button>
          <button title="Linkedin">
            <img src="/linkedin-icon-2.svg" />
          </button>
          <button title="Github">
            <img src="/github-icon-2.svg" />
          </button>
          <button title="Leetcode ">
            <img className="invert" src="/leetcode-svgrepo-com.svg" />
          </button>
        </span>
      </div>
    </>
  );
}

export default App;
