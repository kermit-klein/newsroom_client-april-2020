import React, { useEffect, useState } from "react";
import { Placeholder, Grid, Container } from "semantic-ui-react";
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker"
import { useParams } from "react-router-dom";
import '../css/article.css'


const SingleArticle = (props) => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${id}`);
      setArticle(response.data.article);
    };
    chooseArticle();
  },[]);

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <Grid.Row centered>
          <Placeholder>
            <Placeholder.Image 
              style={{ height: 200, width: 400, textAlign: "left" }}
              key={article.id}
              id={"article-" + article.id + "-title"}
            >
              <h5 className="article-title">{article.title}</h5>
            </Placeholder.Image>
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
            className="article-body"
          >
            {article.body}
            {article.premium && !props.authenticated && <PremiumBlocker />}
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
