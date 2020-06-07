import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../modules/auth.js";
import "../css/Header.css";
import "../i18n";
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const uid = useSelector(state => state.auth.uid)
  const authenticated = useSelector(state => state.auth.authenticated)

  const logout = async () => {
    try {
      await auth.signOut();
      dispatch({type: "LOGOUT"});
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
    <Grid id="head">
      <Grid.Row columns="equal">
        <Grid.Column>
          <Button.Group size="mini" id="language">
            <Button
              basic
              inverted
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </Button>
            <Button.Or />
            <Button
              basic
              inverted
              onClick={() => {
                i18n.changeLanguage("sv");
              }}
            >
              SV
            </Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column centered>
          <h1 id="header">
            <span>D</span>aily <span>N</span>ews <span>S</span>ense
          </h1>
        </Grid.Column>
        <Grid.Column id="login">
          {!authenticated ? (
            <Link name="Login" to={{ pathname: "/sign_in" }}>
              <Button size="tiny" floated="right" basic inverted id="login">
                {t("Login")}
              </Button>
            </Link>
          ) : (
            <>
              <Grid.Column>
                <p style={{fontSize: "110%"}}>
                  {t("Good")} {time} <br></br>
                  {uid}
                </p>
              </Grid.Column>

              <Grid.Column>
                <Link name="Logout" to={{ pathname: "/sign_in" }}>
                  <Button
                    floated="right"
                    basic
                    inverted
                    size="small"
                    id="logout"
                    onClick={() => logout()}
                  >
                    {t("Logout")}
                  </Button>
                </Link>
              </Grid.Column>
            </>
          )}
          <Grid.Column>
            <Link to="/subscription" id="subscription-link">
              <Button size="small" id="subscribe" floated="right" basic inverted>
                {t("Subscribe")}
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Header;
