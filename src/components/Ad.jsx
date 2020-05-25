import React from "react";
import { Grid } from "semantic-ui-react";

const Ad = ({ link, id, img, alt }) => {
  return (
    <Grid.Row width={3} centered>
      <a id={id} href={link}>
        <img src={img} alt={alt} />
      </a>
    </Grid.Row>
  );
};

export default Ad;
