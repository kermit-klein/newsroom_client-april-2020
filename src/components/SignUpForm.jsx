import React, { useState } from "react";
import { Grid, Button, Form, Input } from "semantic-ui-react";
import auth from "../modules/auth";
import { useHistory } from "react-router-dom";
import "../css/index.css";
import { useTranslation } from "react-i18next";

const SignUpForm = (props) => {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const signup = async (e) => {
    e.preventDefault();
    try {
      let response = await auth.signUp({
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.passwordConfirmation.value,
      });
      if (response.data.success) {
        props.setUid(response.data.uid);
        history.push("/sign_in");
      }
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };
  return (
    <>
      <Grid className="signup-container" verticalAlign="middle">
        <Grid.Column align="center">
          <h3 id="error-message">{message}</h3>
          <Form unstackable id="signup-form" onSubmit={signup}>
            <h1>{t("Sign up")}</h1>
            <h4>Email</h4>
            <Input name="email" type="email" id="email"></Input>
            <h4>Password</h4>
            <Input name="password" type="password" id="password"></Input>
            <h4>{t("Confirm Password")}</h4>
            <Input
              name="passwordConfirmation"
              type="password"
              id="passwordConfirmation"
            ></Input>
            <br></br>
            <Button id="submit" type="submit">
              Submit
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignUpForm;
