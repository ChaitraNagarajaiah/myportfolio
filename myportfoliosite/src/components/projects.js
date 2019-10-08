import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Grid>
          <Cell col={4}>
            {/* project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  background: 'url("/translate_and_tweet.png") center/cover',
                  color: "#fff",
                  height: "176px"
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4>Translate and tweet</h4>A language translator application
                that connects to the user’s twitter account which would take a
                source language and converts it to a target language as chosen
                by the user and tweets on their twitter account. (powered by
                Google Translate and Twitter)
              </CardText>
              <CardActions>
                <Button
                  href="https://github.com/ChaitraNagarajaiah/Translate_and_Tweet"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href="https://translate-a-tweet.herokuapp.com/"
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <br></br>
          {/* project 2 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 'url("/psychic_game.png") center/cover'
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4> Psychic Game</h4>
                This is a psychic computer game. User guesses the letter that
                the computer is thinking. You only have 9 guesses! Once you win
                or you run out of guesses, computer will choose a new letter for
                the user to guess.
              </CardText>
              <CardActions>
                <Button
                  href="https://github.com/ChaitraNagarajaiah/Pschycic-Game"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href="https://chaitranagarajaiah.github.io/Pschycic-Game"
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
          {/* project 3 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 'url("Crystal-collector.png") center/cover'
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4> Crystal-Collector</h4>
                Crystal-Collector-Game is a Javascript app that uses the
                Math.floor(Math.random()) function to generate a random target
                number between 19 and 120. There are 4 crystals displayed on the
                screen. For each round, the user will receive a new target
                number, and each crystal will be assigned a new value. The user
                does not know the crsyal value until clicking on it. The goal
                for the user is to click on different crystals so that the sum
                adds up to the target number for that round.
              </CardText>
              <CardActions>
                <Button
                  href="https://github.com/ChaitraNagarajaiah/Crystal-Collector-Game"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href="https://chaitranagarajaiah.github.io/Crystal-Collector-Game/"
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={4}>
            {/* project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 'url("/liri.png") center/cover'
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4> liri node app</h4>
                LIRI is like iPhone's SIRI. However, while SIRI is a Speech
                Interpretation and Recognition Interface, LIRI is a Language
                Interpretation and Recognition Interface. LIRI will be a command
                line node app that takes in parameters and gives you back data.
              </CardText>
              <CardActions>
                <Button
                  href="https://github.com/ChaitraNagarajaiah/liri-node-app"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href="https://chaitranagarajaiah.github.io/liri-node-app/."
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <br></br>
          {/* project 2 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 'url("/habitapp.png") center/cover'
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4> Habit App</h4>
                An app that allows users to create to-do list, set alarm, timer
                and delete the activity once they have completed from to-do
                list.
              </CardText>
              <CardActions>
                <Button
                  href="https://github.com/ChaitraNagarajaiah/HabitApp"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href="https://shielded-sierra-33935.herokuapp.com/

                  "
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
          {/* project 3 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 'url("/environ_atlanta.png") center/cover'
                }}
              ></CardTitle>
              <CardText className="paragraph">
                <h4>Environm-Atlanta</h4>
                Interactive site to connect conscientious users as they strive
                to commit to eco-friendly practices in order to better the
                environment of their communities and around the world.
              </CardText>
              <CardActions>
                <Button
                  href=" https://github.com/ChaitraNagarajaiah/Environm-Atlanta"
                  target="_blank"
                >
                  Github
                </Button>

                <Button
                  href=" https://gentle-badlands-39107.herokuapp.com/index.html"
                  target="_blank"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
