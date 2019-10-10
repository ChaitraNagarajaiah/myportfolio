import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="/Profile.png" alt="chaitra" className="chaitraImg" />
          </Cell>
          <div className="heading">
            <h2>Full Stack Developer</h2>

            <hr />
            <p>
              React.js | React | Node.js | Express | JavaScript | jQuery | Rest
              API | JSON| Java |Twitter API | Google Translator API HTML5 | CSS
              3| Bootstrap | Media Queries MongoDB | Mongoose | MySQL GIT |
              GitHub | Visual studio| Microsoft Suite | Heroku | Command Line
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/chaitra-nagarajaiah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/ChaitraNagarajaiah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
        {/* <video className="videoTag" autoPlay loop muted>
          <source src="/Bee.mp4" type="video/mp4" />
        </video> */}
      </div>
    );
  }
}
export default Landing;
