import React, { useState } from "react";
import { Segment, Button, Grid } from "semantic-ui-react";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";

const PaymentInterface = (props) => {
  const [stripeTokenError, setStripeTokenError] = useState("");

  const createStripeToken = async () => {
    const stripeResponse = await props.stripe.createToken();

    if (stripeResponse.error) {
      setStripeTokenError(stripeResponse.error.message);
    } else {
      props.submitPayment(stripeResponse);
    }
  };

  return (
    <div className="payment-container">
      <h4 className="error-message">{stripeTokenError}</h4>
      <Segment padded inverted id="payment-interface">
        <h3>Become a subscriber today!</h3>
        <h4>Only $10 a month!</h4>
        <Grid>
          <p>
            <em>billing recurs monthly</em>
          </p>
          <Grid.Row>
            <Grid.Column width={16}>
              <label htmlFor="cardnumber">Card number</label>
              <Segment>
                <CardNumberElement id="cardnumber" />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={9}>
              <label htmlFor="exp-date">Expiry date</label>
              <Segment>
                <CardExpiryElement id="exp-date" />
              </Segment>
            </Grid.Column>
            <Grid.Column width={7}>
              <label htmlFor="cvc">CVC</label>
              <Segment>
                <CardCVCElement id="cvc" />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="button-div">
          <Button basic inverted onClick={createStripeToken}>
            Confirm Payment
          </Button>
        </div>
      </Segment>
    </div>
  );
};

export default injectStripe(PaymentInterface);
