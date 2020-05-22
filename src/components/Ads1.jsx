import React from "react";
import { Grid } from "semantic-ui-react";
import mercedesAd from "../images/mercedesAd.jpg";

const Ads1 = () => {
  return (
    <Grid.Row width={3} centered>
      <a id="ad-1" href="https://www.mercedes-benz.com/en/">
        <img src={mercedesAd} alt="mercedes" />
      </a>
    </Grid.Row>
  );
};

export default Ads1;
