import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import auth from "../modules/auth.js";
import "../css/Header.css";
import '../i18n'


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

  const { t, i18n } = useTranslation();
  const date = new Date();
  const currentTime = date.getHours();
  

  let time;

  if (currentTime < 12) {
    time = t("Morning");
  } else if (currentTime < 18) {
    time = t("Afternoon");
  } else {
    time = t("Evening");
  }

  return (
    <Grid columns={3} id='header'>
      <Grid.Row>
        <Grid.Column>
          <Button.Group id='language'>
            <Button basic inverted onClick={() => {i18n.changeLanguage("en")}}>EN</Button>
            <Button.Or />
            <Button basic inverted onClick={() => {i18n.changeLanguage("sv")}}>SV</Button>
          </Button.Group>
          </Grid.Column>
          <Grid.Column>
          <h1 style={{ textAlign: "center" }}>
            <span>D</span>aily <span>N</span>ews <span>S</span>ense
          </h1>
          </Grid.Column>
          <Grid.Column>
          <div id="login">
            {!props.authenticated ? (
              <Link name="Login" to={{ pathname: "/sign_in" }}>
                <Button floated="right" basic inverted id="login">
                  {t("Login")}
                </Button>
              </Link>
            ) : (
              <>
                <p style={{ textAlign: "right" }}>
                  {t("Good")} {time} <br></br>
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
                    {t("Logout")}
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
