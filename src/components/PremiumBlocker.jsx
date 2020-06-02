import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "../css/PremiumBlocker.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const PremiumBlocker = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="cover"></div>
      <div id="premium-blocker">
        <h4>{t('This is a premium article')}</h4>
        <h4>
          <Icon name="lock" />
        </h4>
        <Link name="Login" to={{ pathname: "/sign_in" }}>
          <Button floated="right" basic inverted id="login">
            {t('Sign in to view this article')}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PremiumBlocker;
