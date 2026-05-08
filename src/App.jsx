import './App.css';

function App() {
  return (
    <>
      <div className="hero">
        <img
          src="/memoji.PNG"
          alt="Ryan Marshall"
          className="profile"
        />

        <h1>Ryan Marshall</h1>

        <p>Digital Marketing & Automation Specialist</p>

        <a className="cta" href="mailto:dev@marshallryan.me">
          Contact Me
        </a>

        <a href="#projects" className="scroll-down">
          ↓
        </a>
      </div>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Paid Media Performance Dashboard</h3>

          <div className="project-content">
            <img
              src="/preview_image.png"
              alt="Paid Media Dashboard Preview"
              className="project-image"
            />

            <p>
              Built a Python-based marketing analytics dashboard
              that visualizes campaign spend, CTR, CPC, CPA,
              conversion performance, and ROAS across Meta,
              TikTok, and Google Ads.
            </p>

            <p>
              <strong>Tech:</strong> Python, Streamlit, Pandas,
              Plotly
            </p>

            <div className="project-links">
              <a
                href="https://paid-media-dashboard-5k5bzhc4utiukpxjdsqh8q.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Marryanc/paid-media-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;