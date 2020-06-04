import React, { useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker";
import ArticleCard from './ArticleCard'
import "../css/article.css";

const SingleArticle = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const article = useSelector( state => state.articles.activeArticle );

  const chooseArticle = async () => {
    try {
      const response = await axios.get(`/articles/${id}`);
      dispatch({ type: "SET_ACTIVE_ARTICLE", payload: response.data.article });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    chooseArticle()
  }, []);

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <ArticleCard article={article} size={2}/>
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
