import React, { useEffect, useState } from "react";
import { Placeholder, Grid, Container } from "semantic-ui-react";
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker"

const SingleArticle = (props) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${props.match.params.id}`);
      setArticle(response.data.article);
    };
    chooseArticle();
  }, []);

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <Grid.Row centered>
          <Placeholder
            style={{ height: 250, width: 900 }}
            key={article.id}
            id={"article-" + article.id + "-title"}
          >
            <Placeholder.Image />
            <h5 style={{ textAlign: "center" }}>{article.title}</h5>
          </Placeholder>
        </Grid.Row>
        <Grid.Row centered>
          <p
            key={article.id}
            id={"article-" + article.id + "-date"}
            style={{ textAlign: "left" }}
          >
            Published at: {article.published_at}
          </p>
        </Grid.Row>
        <Grid.Row centered>
          <p
            key={article.id}
            id={"article-" + article.id + "-body"}
            style={{ textAlign: "left" }}
          >
            {article.body}
            {article.premium && <PremiumBlocker />}
          </p>
        </Grid.Row>
        <Grid.Row centered>
          <Ad
            link={"https://www.mercedes-benz.com/en/"}
            id={"ad-1"}
            img={mercedesImg}
            alt={"mercedes"}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default SingleArticle;
