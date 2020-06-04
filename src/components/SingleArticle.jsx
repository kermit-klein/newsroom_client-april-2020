import React, { useEffect } from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker";
import { useParams } from "react-router-dom";
import "../css/article.css";
import { useTranslation } from "react-i18next";

const SingleArticle = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const article = useSelector( state => state.articles.activeArticle );

  useEffect(async () => {
    try {
      const response = await axios.get(`/articles/${id}`);
      dispatch({ type: "SET_ACTIVE_ARTICLE", payload: response.data.article });
      debugger
    } catch (error) {}
  }, []);

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <Grid.Row centered>
          <div className="title-image">
            <Image src={article.image} style={{ height: 400, width: 800 }} />
            <h5
              key={article.id}
              id={"article-" + article.id + "-title"}
              className="article-title"
            >
              {article.title}
            </h5>
          </div>
        </Grid.Row>
        <Grid.Row centered>
          <p
            key={article.id}
            id={"article-" + article.id + "-date"}
            className="published-at"
          >
            {t("Published at")} {article.published_at}
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
