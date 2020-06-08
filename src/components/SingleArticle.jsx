import React, { useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import PremiumBlocker from "./PremiumBlocker";
import { useParams } from "react-router-dom";
import "../css/article.css";
import ScrollArrow from "./ScrollArrow";
import ArticleCard from "./ArticleCard";

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();
  const article = useSelector(state => state.articles.activeArticle);
  const subscriber = useSelector(state => state.auth.subscriber)

  const chooseArticle = async () => {
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    headers = {
      ...headers,
      "Content-type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(`/articles/${id}`, { headers: headers });
      dispatch({ type: "SET_ACTIVE_ARTICLE", payload: response.data.article });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chooseArticle();
  }, []);

  // const smallArticles = () => {
  //   const randomArticles = [];
  //   for (let i = 0; i < 10; i++) {
  //     const randomArticle =
  //       articleList[Math.floor(Math.random() * articleList.length)];
  //     randomArticles.push(
  //       <ArticleCard articleProp={randomArticle} size={0.5} margin={1} />
  //     );
  //   }
  //   return randomArticles;
  // };

  return (
    <Container align="center" style={{ paddingTop: "45px", width: "55%" }}>
      <Grid stretched>
        <ArticleCard article={article} size={2} />
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
            {article.premium && !subscriber && <PremiumBlocker />}
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
      <div>
        <ScrollArrow />
      </div>
    </Container>
  );
};
export default SingleArticle;
