import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "../css/PremiumBlocker.css";
import { Link } from "react-router-dom";

const PremiumBlocker = () => {
  return (
    <>
      <div id="cover"></div>
      <div id="premium-blocker">
        <h4>This is a premium article</h4>
        <h4>
          <Icon name="lock" />
        </h4>
        <Link name="Login" to={{ pathname: "/subscription" }}>
          <Button floated="right" basic inverted id="login">
            Become a subscriber to view this article
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PremiumBlocker;
