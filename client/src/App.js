import React from "react";
import "./App.css";
import { Layout, Navigation, Content, Header } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

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
      </Layout>
    </div>
  );
}

export default App;