import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1 className="headerTitle">Pedro Dantas Leite</h1>
        <div className="headerSubtitle">Fullstack Developer</div>
        <span className="actionBar">
          <a href="https://docs.google.com/document/d/1QB1OAbjrjJ_ZpkrgR-yK6QbqCI955mOo/edit?usp=sharing&ouid=116315534424941319300&rtpof=true&sd=true">
            <button title="Resume">
              <img className="invert" src="/icons8-resume-100.png" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/pedro-leite-820728219/">
            <button title="Linkedin">
              <img src="/linkedin-icon-2.svg" />
            </button>
          </a>
          <a href="https://github.com/PedroDantasLeite">
            <button title="Github">
              <img src="/github-icon-2.svg" />
            </button>
          </a>
          <a href="https://leetcode.com/u/kHvx8Nn0tA/">
            <button title="Leetcode ">
              <img className="invert" src="/leetcode-svgrepo-com.svg" />
            </button>
          </a>
        </span>
      </div>
      <h2>Professional Experience</h2>
      <div className="bodySectionFlex">
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>Encora Digital LLC</h4>
            <h4>Nov. 2022 – Present</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>
                Software development as Web Fullstack developer. Working with
                American clients, ranging from HR to emergency communication
                companies.
              </li>
              <li>Utilizing technologies including but no limited to:</li>
              <ul>
                <li>Various JS frameworks eg. React, NextJS…</li>
                <li>Backend built on Django as well as Ruby on Rails.</li>
                <li>Page design utilizing HTML and CSS.</li>
              </ul>
              <li>
                Ease with using scrum in addition to other organizational
                platforms eg. Jira, Bitbucket…
              </li>
              <li>
                Work on different side projects to learn more about future
                technologies eg. Copilot, AWS…
              </li>
            </ul>
          </div>
        </div>
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>Mobilicidade Tecnologia LTDA</h4>
            <h4>Fev. 2022 – Nov. 2022</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>
                Work as Web Fullstack developer on an accessible public
                transport platform, design/styling and building web pages for
                accessibility.
              </li>
              <li>Full Stack software development on legacy code utilizing:</li>
              <ul>
                <li>Backend on Java with Spring Boot</li>
                <li>Frontend on AngularJS</li>
              </ul>
              <li>Refinement and triage of upcoming tickets.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Education & Skills</h2>
      <div className="bodySectionFlex">
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>CESAR School</h4>
            <h4> Graduation on 2024.2</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>
                Distinguished Computer Science university in the Brazilian
                Northeast.
              </li>
              <li>
                Studies focused on company development and project management.
              </li>
              <li>
                Modern teaching methods and focus on emerging technologies.
              </li>
            </ul>
          </div>
        </div>
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>Programming Languages</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>Ruby</li>
            </ul>
          </div>
        </div>
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>Frameworks</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>React</li>
              <li>NextJS</li>
              <li>Django</li>
              <li>Ruby on Rails</li>
              <li>Spring Boot</li>
              <li>AngularJS</li>
            </ul>
          </div>
        </div>
        <div className="bodySectionContent">
          <div className="bodySectionHeader">
            <h4>Tools</h4>
          </div>
          <div className="bodySectionItem">
            <ul>
              <li>Git</li>
              <li>Jira</li>
              <li>Bitbucket</li>
              <li>Postman</li>
              <li>VSCode</li>
              <li>IntelliJ</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
