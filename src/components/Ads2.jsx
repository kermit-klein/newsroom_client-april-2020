import React from "react";
import { Grid } from "semantic-ui-react";
import lagavulinAd from "../images/lagavulinAd.jpg";

const Ads2 = () => {
  return (
    <Grid.Row width={3} centered>
      <a
        id="ad-2"
        href="https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/"
      >
        <img src={lagavulinAd} alt="lagavulin" />
      </a>
    </Grid.Row>
  );
};

export default Ads2;
