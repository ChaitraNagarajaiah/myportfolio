import React, { Component } from "react";
import { Grid, Cell, List, ListItem } from "react-mdl";

class Contacts extends Component {
  render() {
    return (
      <div className="contact">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Chaitra Nagarajaiah</h2>
            <img
              src="/chaitra-img.jpg"
              alt="chaitra"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                color: "black"
              }}
            >
              Full Stack Web Developer with a multidisciplinary background in
              Engineering providing strong problem-solving skills with a keen
              eye for aesthetics and presentation. An excellent communicator and
              collaborator who works well in team-based projects and
              independently with very strong interpersonal skills. With each
              project, the aim is to provide simple robust solutions to problems
              specified by the client. Effectively leverage interest in solving
              complex problems by contributing as a part of a fast-paced,
              quality-driven team.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr></hr>
            <List>
              <ListItem>
                <h4>Email-Id : </h4>
                <h5 style={{ fontWeight: "lighter" }}>
                  chaitranagaraj1592@gmail.com
                </h5>
              </ListItem>
              <ListItem>
                <h4>Phone-no : </h4>
                <h5 style={{ fontWeight: "lighter" }}> 513-501-3253</h5>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contacts;
