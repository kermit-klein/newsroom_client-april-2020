import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Navbar from "./components/Navbar";
import CreateSubscription from "./components/CreateSubscription";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { useDispatch } from "react-redux";
import { getPlace } from "./modules/location";
import { persistLogin } from "./modules/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPlace(dispatch);
    persistLogin(dispatch);
  }, []);

  return (
    <>
      <Header>
        <Suspense fallback={<div>Loading</div>} />
      </Header>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList}></Route>
        <Route
          exact
          path="/article/:id"
          component={SingleArticle}
        ></Route>
        <Route exact path="/category/:category" component={ArticleList}></Route>
        <Route
          exact
          path="/subscription"
          component={CreateSubscription}
        ></Route>
        <Route
          exact
          path="/sign_in"
          component={LoginForm}
        ></Route>
        <Route
          exact
          path="/sign_up"
          component={SignUpForm}
        ></Route>
      </Switch>
    </>
  );
};
export default App;
