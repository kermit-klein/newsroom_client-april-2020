import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import ArticleCard from "../components/ArticleCard";
import Ad from "./Ad";
import mercedesImg from "../images/mercedesAd.jpg";
import lagavulinImg from "../images/lagavulinAd.jpg";
import "../css/article.css";
import { useSelector, useDispatch } from "react-redux";
import getCategory from "../modules/category";
import ScrollArrow from "./ScrollArrow";
import { useTranslation } from "react-i18next";

const ArticleList = (props) => {
  const [articleList, setArticleList] = useState([]);
  const { t } = useTranslation();
  const category = props.match.params.category || "";
  let location = useSelector((state) => state.location.country);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get("/articles", { location: location });
        setArticleList(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleList();
  }, []);

  useEffect(() => {
    getCategory(category, dispatch);
  }, [category]);

  let filteredArticles = () => {
    switch (category) {
      case "":
        return articleList;
      case "local":
        return articleList.filter((article) => article.location === location);
      case "current":
        return articleList.filter((article) => {
          return Date.now() - Date.parse(article.published_at) < 86400000;
        });
      default:
        return articleList.filter((article) => article.category === category);
    }
  };

  let articleCards = filteredArticles().map((article) => {
    return <ArticleCard article={article} size={1} />;
  });

  let locationMessage =
    category == "local" &&
    (location ? (
      <p id="location" style={{ color: "black", fontSize: 20 }}>
        {t("Showing news from")} <strong>{location}</strong>
      </p>
    ) : (
      <p id="no-location" style={{ color: "black", fontSize: 20 }}>
        {t("Unable to get your location, showing international news instead")}
      </p>
    ));

  return (
    <>
      <div>
        <Grid id="articleCards" fluid columns={3} divided centered>
          <Ad
            link={"https://www.mercedes-benz.com/en/"}
            id={"ad-1"}
            img={mercedesImg}
            alt={"mercedes"}
          />
          {locationMessage}
          {articleCards}
          <Ad
            link={
              "https://www.malts.com/en-gb/visit-our-distilleries/lagavulin/"
            }
            id={"ad-2"}
            img={lagavulinImg}
            alt={"lagavulin"}
          />
        </Grid>
      </div>
      <div>
        <ScrollArrow />
      </div>
    </>
  );
};

export default ArticleList;
