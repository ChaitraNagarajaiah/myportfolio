import React from "react";
import "./App.css";
import { Layout, Navigation, Content, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { Bee } from "./Bee.mp4";

// this.state = {
//   videoURL: "/Bee.mp4"
// };

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MyPortfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/Chaitra FullStack Developer.pdf " target="_blank">
              Resume
            </Link>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        {/* <video autoPlay muted loop id="myVideo">
          <source
            src="../videos/Organic_Lines_4K_Motion_Background_Loop.mp4"
            type="video/mp4"
          />
        </video> */}
        {/* <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
        </video> */}
        <video className="videoTag" autoPlay loop muted>
          <source src={Bee} type="video/mp4" />
        </video>
      </Layout>
    </div>
  );
}

export default App;
