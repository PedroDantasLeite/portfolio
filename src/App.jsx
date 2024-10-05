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
      <div className="body">
        <div className="bodySection">
          <h2>Experiência</h2>
          <div className="bodySectionContent">
            <div className="bodySectionItem">
              <h3>Desenvolvedor Full Stack</h3>
              <h4>Empresa</h4>
              <p>Descrição</p>
            </div>
          </div>
        </div>
        <div className="bodySection">
          <h2>Projetos</h2>
          <div className="bodySectionContent">
            <div className="bodySectionItem">
              <h3>Projeto 1</h3>
              <h4>Empresa</h4>
              <p>Descrição</p>
            </div>
          </div>
        </div>
        <div className="bodySection">
          <h2>Formação</h2>
          <div className="bodySectionContent">
            <div className="bodySectionItem">
              <h3>Curso 1</h3>
              <h4>Empresa</h4>
              <p>Descrição</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
