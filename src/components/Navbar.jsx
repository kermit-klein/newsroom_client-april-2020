import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar = () => {
  const activeItem = useSelector((state) => {
    return state.category.selectedCategory;
  });

  const { t } = useTranslation();
  let categories = [
    [t("Current"), "Current"],
    [t("Local"), "Local"],
    [t("World"), "World"],
    [t("Politics"), "Politics"],
    [t("Economy"), "Economy"],
    [t("Sport"), "Sport"],
    [t("Entertainment"), "Entertainment"],
    [t("Other"), "Other"],
  ];

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item name={cat[0]} active={activeItem === cat[0].toLowerCase()}>
        <NavLink
          to={`/category/${cat[1].toLowerCase()}`}
          id={cat[1].toLowerCase()}
        >
          {cat[0]}
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <div style={{ backgroundColor: "teal" }}>
      <Menu id="navbar" inverted pointing secondary width={10}>
        <Menu.Item></Menu.Item>
        <Menu.Item name="home" active={activeItem === ""}>
          <NavLink to="/">
            <span id="logo">DNS</span>
          </NavLink>
        </Menu.Item>
        {renderCategories}
        <Menu.Item></Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
