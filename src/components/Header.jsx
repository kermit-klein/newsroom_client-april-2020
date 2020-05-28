import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import auth from "../modules/auth.js";
import '../css/Header.css';

const date = new Date();
const currentTime = date.getHours();

let time;

if (currentTime < 12) {
  time = "Morning";
} else if (currentTime < 18) {
  time = "Afternoon";
} else {
  time = "Evening";
}

const Header = (props) => {
  const history = useHistory();
  const logout = async () => {
    try {
      await auth.signOut();
      props.setAuthenticated(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <h1 id="header" style={{ textAlign: "center" }}>
            <span>D</span>aily <span>N</span>ews <span>S</span>ense
          </h1>
          <div id="login">
            {!props.authenticated ? (
              <Link name="Login" to={{ pathname: "/sign_in" }}>
                <Button floated="right" basic inverted id="login">
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <p style={{ textAlign: "right" }}>
                  Good {time} <br></br>
                  {props.uid}
                </p>
                <Link name="Logout" to={{ pathname: "/sign_in" }}>
                  <Button
                    floated="right"
                    basic
                    inverted
                    id="logout"
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Header;
