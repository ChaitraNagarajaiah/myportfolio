import React from "react";
import "./App.css";
import { Layout, Navigation, Content, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

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
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold"
              }}
              to="/"
            >
              MyPortfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link
              to="/Chaitra FullStack Developer.pdf "
              target="_blank"
              style={{ fontWeight: "bolder", color: "white", fontSize: "20px" }}
            >
              Resume
            </Link>
            <Link
              to="/aboutme"
              style={{ fontWeight: "bolder", color: "white", fontSize: "20px" }}
            >
              AboutMe
            </Link>
            <Link
              to="/projects"
              style={{ fontWeight: "bolder", color: "white", fontSize: "20px" }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              style={{ fontWeight: "bolder", color: "white", fontSize: "20px" }}
            >
              Contact
            </Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>

        <video className="videoTag" autoPlay loop muted>
          <source src="/clearwater.mp4" type="video/mp4" />
        </video>
      </Layout>
    </div>
  );
}

export default App;
