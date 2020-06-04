import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ArticleCard = ({ article, size }) => {
  const dispatch = useDispatch();

  const setActiveArticle = () => {
    dispatch({
      type: "SET_ACTIVE_ARTICLE",
      payload: article,
    });
  };

  return (
    <Grid.Row centered>
      <Link
        onClick={setActiveArticle}
        to={{
          pathname: `/article/${article.id}`,
        }}
        key={article.id}
        id={"article-" + article.id}
      >
        <Image
          src={article.image}
          wrapped
          style={{ height: 200 * size, width: 400 * size }}
        />
        <h5 className="article-title">{article.title}</h5>
      </Link>
    </Grid.Row>
  );
};

export default ArticleCard;
