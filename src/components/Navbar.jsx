import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  let categories = [
    t("Current"),
    t("World"),
    t("Politics"),
    t("Economy"),
    t("Sport"),
    t("Entertainment"),
    t("Other"),
  ];

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item borderless>
        <NavLink to={`/category/${cat.toLowerCase()}`} id={cat.toLowerCase()}>
          {cat}
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <div>
      <Menu
        id="navbar"
        inverted
        secondary
        widths="10"
        color="grey"
        borderless
        stackable
      >
        <Menu.Item>
          <NavLink to="/">
            <span id="logo">DNS</span>
          </NavLink>
        </Menu.Item>
        {renderCategories}
        <Menu.Item>
          <NavLink to="/subscription" id='subscription-link'>
            Subscribe
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
