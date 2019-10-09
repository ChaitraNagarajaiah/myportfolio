import React, { Component } from "react";
import { Grid } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Grid>
          <img
            src="/chaitra-img.jpg"
            alt="chaitra"
            style={{ height: "250px", margin: "auto", paddingTop: "1em" }}
          />
          <p
            style={{
              width: "75%",
              margin: "auto",
              paddingTop: "2em",
              color: "black"
            }}
          >
            {" "}
            <h4
              style={{
                margin: "auto",
                paddingLeft: "350px",
                fontWeight: "bold"
              }}
            >
              Chaitra Nagarajaiah
            </h4>
            Hello, I'am Chaitra from Atlanta. I persuded my degree in
            Engineering in Visveswaraya Technological University in India.
            Currently I have completed Full Stack development course from
            Georgia Tech, Atlanta. My hobbies are painting, drawing, cooking and
            gardening. Full Stack Web Developer with a multidisciplinary
            background in Engineering providing strong problem-solving skills
            with a keen eye for aesthetics and presentation. An excellent
            communicator and collaborator who works well in team-based projects
            and independently with very strong interpersonal skills. With each
            project, the aim is to provide simple robust solutions to problems
            specified by the client. Effectively leverage interest in solving
            complex problems by contributing as a part of a fast-paced,
            quality-driven team.
          </p>
        </Grid>
      </div>
    );
  }
}
export default AboutMe;
