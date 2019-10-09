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
            style={{
              height: "250px",
              margin: "auto",
              paddingTop: "1em",
              paddingBottom: "2em"
            }}
          />
          <p
            style={{
              width: "75%",
              margin: "auto",
              paddingTop: "2em",
              color: "black",
              background: "white"
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
            Hello, I'am Chaitra from Atlanta. I have attained Bachelors degree
            in Engineering at Visveswaraya Technological University from India.
            I like to learn new things and keen on keeping myself updated with
            latest technology and trend which motivated me to gain Full Stack
            development certificate from Georgia Tech University, Atlanta. My
            hobbies are painting, drawing, cooking and gardening. As a Full
            Stack Web Developer I have a strong problem-solving skills with a
            keen eye for aesthetics and presentation. An excellent communicator
            and collaborator who works well in team-based projects and
            independently with very strong interpersonal skills. With each
            project, the aim is to provide simple robust solutions to problems
            specified by the client. Effectively leverage interest in solving
            complex problems by contributing as part of a fast-paced,
            quality-driven team.
          </p>
        </Grid>
      </div>
    );
  }
}
export default AboutMe;
