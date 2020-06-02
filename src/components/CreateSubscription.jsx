import React, { useState } from "react";
import Axios from "axios";
import "../css/CreateSubscription.css";
import PaymentInterface from "./PaymentInterface";
import { Elements } from 'react-stripe-elements'
import { Link } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const CreateSubscription = (props) => {
  const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  const [subscriberStatus, setSubscriberStatus] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");
  const { t, i18n } = useTranslation();

  const submitPayment = async (stripeToken) => {
    try {
      const paymentStatus = await Axios.post(
        "/subscriptions",
        { stripeToken: stripeToken },
        { headers: headers }
      );
      if (paymentStatus.status === 200) {
        setSubscriberStatus(true);
        setTransactionMessage(paymentStatus.data.message);

        setTimeout(() => {
          setTransactionMessage("");
        }, 4000);
      }
    } catch (error) {
      setTransactionMessage(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <div className="container">
      {props.authenticated ?
        (subscriberStatus ? (
          <div className="messages">
            <h2 id="transaction-message">{transactionMessage}</h2>
            <h1 id="subscriber-message">{t("You are a subscriber!")}</h1>
          </div>
        ) : (
          <>
            <h4 className="error-message">{transactionMessage}</h4>
            <Elements>
              <PaymentInterface submitPayment={submitPayment}/>
            </Elements>
          </>
        )
      ) : (
        <div className="messages">
            <h1 id="subscribe-today">{t("Become a subscriber today!")}</h1>
          <Link name="Login" to={{ pathname: "/sign_in" }}>
            <Segment inverted className="button-segment">
                <Button basic inverted id="sign-in-sign-up">{t("Log in or sign up to proceed!")}</Button>
            </Segment>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreateSubscription;
