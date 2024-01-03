import "./App.scss";

function App() {
  return (
    <>
      <body>
        <div className="card">
          <div className="photo">
            <img src="./src/assets/_MG_7521.jpg" alt="Profile Photo" />
          </div>
          <div className="content">
            <h1 className="profile-name">Aleksandra Hamon</h1>
            <h3 className="job-title">Developpeuse FullStack</h3>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              iusto totam sint, porro dolores quos.
            </p>
            <div className="social-links">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/aleksandra-hamon/"
              >
                <img
                  src="./src/assets/linkedin-svgrepo-com.svg"
                  alt="Linkedin"
                />
              </a>
              <a className="github" href="https://github.com/Alekshamon">
                <img
                  src="./src/assets/github-142-svgrepo-com.svg"
                  alt="Github"
                />
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
